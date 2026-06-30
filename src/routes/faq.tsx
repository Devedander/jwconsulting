import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQPage,
})

const faqs = [
  {
    category: 'Services',
    question: "What's included in the Business Managed Support plan?",
    answer:
      'The Business Managed Support plan covers unlimited remote and phone support, proactive maintenance and security updates, hardware troubleshooting, printer and network setup, and on-site visits as needed. You pay one flat monthly fee — no extra charges per incident or per hour. Think of it as having a dedicated IT department, without the cost of a full-time hire.',
  },
  {
    category: 'Services',
    question: 'What does "concierge IT support" mean for individuals?',
    answer:
      "Concierge support means you get personalized, patient, one-on-one help — I come to you, explain everything in clear, jargon-free language, and don't rush you. It's ideal for people who aren't tech-savvy, seniors learning a new device, or anyone who's been frustrated by impersonal tech support in the past. No call centers, no hold music, no jargon.",
  },
  {
    category: 'Services',
    question: 'Do you offer on-site visits or only remote support?',
    answer:
      'Both. Many issues can be resolved remotely with your permission, which is faster and more convenient. But some problems require hands-on work — a hardware repair, a new printer setup, or helping you learn your new device in person. On-site visits are included for Business plan clients and available for individual clients at the standard hourly rate.',
  },
  {
    category: 'Devices',
    question: 'What devices and operating systems do you support?',
    answer:
      'Windows PCs are my primary specialty, but I also service Macs (MacBooks and iMacs), iPhones, Android phones, tablets, printers, home Wi-Fi networks, and smart home devices like Nest thermostats, Ring doorbells, and home automation systems. If you have a device giving you trouble, it\'s worth asking — I\'ve seen a lot.',
  },
  {
    category: 'Devices',
    question: 'Can you help with smart home and IoT devices?',
    answer:
      "Yes. Setting up and troubleshooting smart home devices — thermostats, security cameras, smart speakers, smart locks, and home automation hubs — is something I genuinely enjoy. These devices are powerful but often frustrating to configure, and I'm happy to get them working smoothly and explain how to use them.",
  },
  {
    category: 'Pricing',
    question: 'How does the $120/seat/month business pricing work?',
    answer:
      'Business pricing is tailored to your team size and needs. Contact us for a custom quote.',
  },
  {
    category: 'Pricing',
    question: 'How is the $300/hour individual support billed?',
    answer:
      "You're billed in full-hour increments at $300 per hour. There's no subscription or retainer required — you call when you need help, and you pay for the time spent. I'll always give you an estimate upfront so there are no surprises.",
  },
  {
    category: 'Getting Started',
    question: 'How do I get started?',
    answer:
      "Just call or email — there's no online form to fill out or intake process. I'll ask a few quick questions about what you need, and we'll schedule a time that works for you. For business clients, I'll do a quick assessment of your current setup before recommending a plan.",
  },
  {
    category: 'Getting Started',
    question: 'What areas do you serve?',
    answer:
      'I primarily serve the greater Sonoma County and surrounding areas. Remote support is available anywhere, so if you\'re outside the area, feel free to reach out — I can often solve problems without needing to visit in person.',
  },
  {
    category: 'Getting Started',
    question: 'Is this a good fit for people who are not very tech-savvy?',
    answer:
      "Absolutely — this is one of my favorite things about the work I do. I've worked with many people who feel overwhelmed or embarrassed by technology, and I take real pride in making people feel comfortable and capable. There's no such thing as a silly question, and I'll never make you feel bad for not knowing something.",
  },
]

function FAQPage() {
  const categories = [...new Set(faqs.map((f) => f.category))]

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <div
        className="py-16 px-6"
        style={{ background: 'var(--navy)' }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-8 no-underline transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <span
            className="block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--amber)' }}
          >
            FAQ
          </span>
          <h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Frequently Asked
            <br />
            <em className="not-italic" style={{ color: 'var(--amber)' }}>Questions</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Can&apos;t find an answer below? Call or email directly —
            I&apos;m always happy to chat.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h2
                className="font-semibold text-xs tracking-widest uppercase mb-6 pb-3"
                style={{
                  color: 'var(--amber)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {cat}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter((f) => f.category === cat)
                  .map((faq) => (
                    <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="max-w-3xl mx-auto mt-16 rounded-2xl p-10 text-center"
          style={{ background: 'var(--navy)' }}
        >
          <h3
            className="font-display font-bold text-white mb-3"
            style={{ fontSize: '1.75rem' }}
          >
            Still have questions?
          </h3>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            I&apos;m a real person — just call or send a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12025550187"
              className="btn-primary"
              style={{ background: 'var(--amber)', color: 'var(--navy)' }}
            >
              (202) 555-0187
            </a>
            <a
              href="mailto:john@johnwangcs.com"
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            >
              john@johnwangcs.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: 'white', border: '1.5px solid var(--border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? 'var(--amber-pale)' : 'white' }}
      >
        <span
          className="font-semibold pr-4"
          style={{ color: 'var(--navy)', fontSize: '0.975rem', lineHeight: 1.45 }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          color="var(--amber)"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div
          className="px-5 pb-5 pt-1 text-sm leading-relaxed"
          style={{ color: 'var(--warm-gray)', borderTop: '1px solid var(--border)' }}
        >
          {answer}
        </div>
      )}
    </div>
  )
}
