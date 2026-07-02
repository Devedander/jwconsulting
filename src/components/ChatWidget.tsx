import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const WORKER_URL = 'https://jwcs-chatbot.jwconsulting.workers.dev'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const GREETING: ChatMessage = {
  role: 'assistant',
  content: "Hi! I'm here to answer quick questions about JW Consulting Services. What can I help with?",
}

const EMAIL_PATTERN = /[\w.+-]+@[\w-]+\.[\w.-]+/
const PHONE_PATTERN = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/

// Turns any email/phone number in a chat message into a clickable
// mailto:/tel: link, so contact info the assistant suggests is tappable.
function linkifyContact(text: string): React.ReactNode[] {
  const combined = new RegExp(`(${EMAIL_PATTERN.source})|(${PHONE_PATTERN.source})`, 'g')
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = combined.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    // Strip trailing sentence punctuation (e.g. "john@x.com." at the end of
    // a sentence) so it isn't swallowed into the link.
    const matched = match[0].replace(/[.,!?;:]+$/, '')
    if (matched.includes('@')) {
      parts.push(
        <a key={key++} href={`mailto:${matched}`} className="underline font-semibold">
          {matched}
        </a>,
      )
    } else {
      const digits = matched.replace(/\D/g, '')
      parts.push(
        <a key={key++} href={`tel:+1${digits}`} className="underline font-semibold">
          {matched}
        </a>,
      )
    }
    lastIndex = match.index + matched.length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    setError(false)

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = (await res.json()) as { reply?: string }
      setMessages([...nextMessages, { role: 'assistant', content: data.reply || "Sorry, I didn't catch that." }])
    } catch {
      setError(true)
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now — feel free to call or email John directly.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl overflow-hidden"
          style={{
            width: 340,
            maxWidth: 'calc(100vw - 3rem)',
            height: 460,
            maxHeight: 'calc(100vh - 8rem)',
            background: 'white',
            boxShadow: 'var(--shadow-lg)',
            border: '1.5px solid var(--border)',
          }}
        >
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: 'var(--navy)', color: 'white' }}
          >
            <div>
              <div className="font-semibold text-sm">Ask a quick question</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                AI assistant · for real quotes, call John
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded hover:opacity-70 transition-opacity"
              style={{ color: 'white' }}
            >
              <X size={18} />
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ background: 'var(--cream)' }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="rounded-xl px-3 py-2 text-sm leading-relaxed"
                  style={{
                    maxWidth: '85%',
                    background: m.role === 'user' ? 'var(--navy)' : 'white',
                    color: m.role === 'user' ? 'white' : 'var(--navy)',
                    border: m.role === 'user' ? 'none' : '1.5px solid var(--border)',
                  }}
                >
                  {linkifyContact(m.content)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="rounded-xl px-3 py-2 text-sm"
                  style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--warm-gray-light)' }}
                >
                  Typing…
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ borderTop: '1.5px solid var(--border)' }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="flex-1 text-sm px-3 py-2 rounded-lg outline-none"
              style={{ border: '1.5px solid var(--border)', color: 'var(--navy)' }}
              disabled={loading}
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={loading || !input.trim()}
              className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{ background: 'var(--amber)', color: 'var(--navy)' }}
            >
              <Send size={16} />
            </button>
          </form>
          <div
            className="text-center text-xs px-3 pb-2 flex-shrink-0"
            style={{ color: 'var(--warm-gray-light)' }}
          >
            AI assistant - may make mistakes. Please verify details with John directly.
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105"
        style={{ background: 'var(--amber)', color: 'var(--navy)', boxShadow: 'var(--shadow-lg)' }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  )
}
