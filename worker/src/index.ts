export interface Env {
  AI: Ai
  DB: D1Database
}

// Only these origins may call the worker — keeps the free Workers AI quota
// from being drained by random callers hitting the URL directly. Add
// 'http://localhost:3000' here temporarily if testing locally.
const ALLOWED_ORIGINS = ['https://johnwangcs.com']

const MAX_MESSAGES = 10
const MAX_MESSAGE_LENGTH = 1000

const SYSTEM_PROMPT = `You are a helpful assistant embedded on the website of John Wang Computer Services, a concierge IT support business in Sonoma County, California.

Business facts:
- Two service lines: flat-fee Managed IT Support for small businesses (call for a custom quote), and hourly Concierge IT Support for individuals and seniors at $300/hr, billed in 1-hour increments.
- Services offered: virus & malware removal, computer speed/performance fixes, email & online account security help, Wi-Fi & network troubleshooting, TV & streaming device setup, smart home setup, data backup & recovery, new computer/device setup, small business managed IT.
- Service area: in-person support in Santa Rosa, Petaluma, Sebastopol, Healdsburg, Windsor, and surrounding Sonoma County; remote support available worldwide.
- Contact: (707) 874-8324, john@johnwangcs.com.
- Known for patience, plain-English explanations with no jargon, and being especially good with seniors and people who aren't "tech people."

Answer visitor questions warmly and helpfully in that voice. Keep answers short (2-4 sentences) unless more detail is genuinely needed.

Only answer if you are highly confident the answer is fully and correctly covered by the facts above. If a question asks for anything not clearly covered here — specific pricing beyond what's listed, availability/scheduling, payment methods, technical details about their specific problem, or anything you're not certain about — do not guess, improvise, or offer a "typical" or plausible-sounding example. Simply say you don't know and that John can help directly, and always include his exact contact info in your reply: "(707) 874-8324" and "john@johnwangcs.com". It is always better to say you don't know than to state something that isn't explicitly listed above.`

async function logConversation(env: Env, userMessage: string, assistantReply: string, errored: boolean) {
  try {
    await env.DB.prepare(
      'INSERT INTO conversations (user_message, assistant_reply, errored) VALUES (?, ?, ?)',
    )
      .bind(userMessage, assistantReply, errored ? 1 : 0)
      .run()
  } catch (err) {
    console.error('Failed to log conversation:', err instanceof Error ? err.message : String(err))
  }
}

function corsHeaders(origin: string | null): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin && ALLOWED_ORIGINS.includes(origin) ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const origin = request.headers.get('Origin')
    const headers = corsHeaders(origin)

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Forbidden', { status: 403, headers })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers })
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    const messages = (body as { messages?: unknown }).messages
    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.some(
        (m) =>
          typeof m !== 'object' ||
          m === null ||
          !('role' in m) ||
          !('content' in m) ||
          typeof (m as { content: unknown }).content !== 'string' ||
          (m as { content: string }).content.length > MAX_MESSAGE_LENGTH,
      )
    ) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    const trimmed = messages.slice(-MAX_MESSAGES) as { role: string; content: string }[]
    const lastUserMessage = [...trimmed].reverse().find((m) => m.role === 'user')?.content ?? ''

    try {
      const result = await env.AI.run('@cf/meta/llama-3.1-8b-instruct-fp8', {
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmed],
      })

      const reply = ('response' in result ? result.response : '') ?? ''

      ctx.waitUntil(logConversation(env, lastUserMessage, reply, false))

      return new Response(JSON.stringify({ reply }), {
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    } catch (err) {
      console.error('AI call failed:', err instanceof Error ? err.message : String(err))
      ctx.waitUntil(logConversation(env, lastUserMessage, 'The assistant is unavailable right now.', true))
      return new Response(JSON.stringify({ error: 'The assistant is unavailable right now.' }), {
        status: 502,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }
  },
} satisfies ExportedHandler<Env>
