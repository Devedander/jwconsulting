import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldAlert,
  Wifi,
  Printer,
  Mails,
  Smartphone,
  MonitorX,
  Heart,
  Home as HomeIcon,
  Clock,
  ArrowRight,
  ChevronDown,
  Star,
} from 'lucide-react'
import { SiteFooter } from '@/components/Footer'
import { blogPosts } from '@/content/blog-posts'

export const Route = createFileRoute('/seniors')({
  head: () => {
    const title = 'Tech Support for Seniors in Santa Rosa & Sonoma County - JW Consulting Services'
    const description =
      'Patient, in-home tech help for seniors in Santa Rosa, Oakmont, Petaluma, Sebastopol, Healdsburg, Windsor and Sonoma County. Real fixes for viruses, hacked email, slow computers, Wi-Fi, printers and scams - not just lessons.'
    const url = 'https://johnwangcs.com/seniors/'
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: seniorFaqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: SeniorsPage,
})

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const painPoints = [
  { Icon: MonitorX, title: 'Computer running slow or freezing up' },
  { Icon: ShieldAlert, title: 'Suspicious emails, pop-ups, or scam calls' },
  { Icon: Wifi, title: 'Wi-Fi that keeps dropping or won’t reach the whole house' },
  { Icon: Printer, title: 'Printer that won’t connect anymore' },
  { Icon: Mails, title: 'Email hacked, locked out, or full of spam' },
  { Icon: Smartphone, title: 'A new phone or tablet that feels overwhelming' },
]

const seniorFaqs = [
  {
    question: 'Is this a good fit if I’m not "tech-savvy" at all?',
    answer:
      'Absolutely - this is one of my favorite parts of the job. I work with people every week who feel embarrassed or overwhelmed by technology, and I never make anyone feel silly for asking a question. We go at your pace, and I explain things in plain English, not computer-speak.',
  },
  {
    question: 'Do you only teach, or do you actually fix things?',
    answer:
      'I actually fix things. Some services in this area only coach you on how to use a device and turn away anything involving repairs, viruses, or Windows PCs. I handle all of it - hacked email, malware, slow computers, dead Wi-Fi, printers, and hardware problems - and I’m happy to explain what happened along the way.',
  },
  {
    question: 'Do you come to my home?',
    answer:
      'Yes. Most senior clients prefer an in-person visit, especially for the first appointment, and I offer that throughout Santa Rosa, Oakmont, Petaluma, Sebastopol, Healdsburg, Windsor and the surrounding Sonoma County area. Simple follow-up questions can often be handled remotely or by phone once we know each other.',
  },
  {
    question: 'What if I think I’ve already been scammed?',
    answer:
      'Call me right away - there’s no judgment here, and the sooner we look at it, the more we can usually do. I’ll help you figure out what actually happened, secure your accounts and devices, and calmly walk you through next steps.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Individual support is $300/hour, with no subscription or retainer required. I’ll always give you an honest estimate before starting, so there are no surprises on the bill.',
  },
]

/* ─── Page ──────────────────────────────────────────────────────────────────── */

function SeniorsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--navy)' }}>
      <HeroSection />
      <PainPointsSection />
      <DifferenceSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogTeaseSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 px-6"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, #f0ebe0 0%, var(--cream) 60%)' }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in"
            style={{ background: 'var(--navy)', color: 'var(--amber)' }}
          >
            <MapPin size={13} />
            Santa Rosa · Oakmont · Sonoma County
          </div>

          <h1
            className="font-display font-bold leading-tight mb-6 animate-fade-in-up delay-100"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: 'var(--navy)', letterSpacing: '-0.01em' }}
          >
            Patient Tech Help
            <br />
            <em className="not-italic" style={{ color: 'var(--amber)' }}>for Seniors.</em>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up delay-200"
            style={{ color: 'var(--warm-gray)', maxWidth: '36rem' }}
          >
            When your computer, email, or Wi-Fi stops working right, you don&apos;t need
            a lesson - you need someone who will actually fix it, explain what
            happened, and never make you feel rushed or judged.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a href="tel:+17078748324" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <Phone size={18} />
              (707) 874-TECH (8324)
            </a>
            <a href="#pricing" className="btn-outline" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              See Pricing
            </a>
          </div>

          <div
            className="flex flex-wrap gap-6 mt-12 animate-fade-in-up delay-400"
            style={{ color: 'var(--warm-gray)' }}
          >
            {[
              { Icon: Heart, text: 'Patient & Unhurried' },
              { Icon: HomeIcon, text: 'In-Home Visits' },
              { Icon: Clock, text: 'Responsive Service' },
            ].map(({ Icon, text }) => (
              <span key={text} className="flex items-center gap-2 text-sm font-medium">
                <Icon size={15} color="var(--amber)" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block animate-fade-in delay-200">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: 'var(--shadow-lg)', border: '1.5px solid var(--border)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/individual-support.jpg`}
              alt="John Wang giving patient, in-person tech support to a senior client"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4 / 5', objectPosition: '50% 25%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pain Points ───────────────────────────────────────────────────────────── */

function PainPointsSection() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-label">Sound Familiar?</span>
        <h2 className="section-title mx-auto">Common Problems I Help With</h2>
        <p className="section-subtitle mx-auto mb-14">
          None of these mean you did something wrong. They&apos;re the most
          common reasons people call me every week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {painPoints.map(({ Icon, title }) => (
            <div
              key={title}
              className="rounded-xl p-6 text-left flex items-start gap-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--amber-pale)' }}
              >
                <Icon size={20} color="var(--amber)" />
              </div>
              <div className="font-semibold text-sm leading-snug pt-2" style={{ color: 'var(--navy)' }}>
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Difference ────────────────────────────────────────────────────────────── */

function DifferenceSection() {
  const points = [
    {
      title: 'Real fixes, not just lessons',
      body: 'Some local services only coach you on how to use a device and turn away hardware issues, viruses, or Windows PCs. I handle all of it - and I’m happy to explain what happened once it’s fixed.',
    },
    {
      title: 'One person, every time',
      body: 'You call, you reach me directly - not a help desk queue or a different technician each visit. I remember your setup and your history.',
    },
    {
      title: 'No jargon, no judgment',
      body: 'There’s no such thing as a silly question. I explain things in plain English and never rush you through a fix you don’t understand yet.',
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--navy)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr_3fr] gap-14 items-start">
          <div>
            <span className="section-label" style={{ color: 'var(--amber)' }}>The Difference</span>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}
            >
              When something&apos;s actually
              <br />
              <em className="not-italic" style={{ color: 'var(--amber)' }}>broken, you need IT support</em>
              <br />
              - not a tutor.
            </h2>
            <p className="leading-relaxed text-base" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '28rem' }}>
              Hacked email, viruses, dead Wi-Fi - these aren&apos;t things a
              coaching session solves. I&apos;m a full-service technician who
              happens to specialize in working with seniors, not a device
              tutor with a limited toolbox.
            </p>
          </div>

          <div className="space-y-6">
            {points.map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(200,134,30,0.18)' }}
                >
                  <CheckCircle2 size={20} color="var(--amber)" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'white', fontSize: '1rem' }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ───────────────────────────────────────────────────────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <span className="section-label">Pricing</span>
        <h2 className="section-title mx-auto">Simple, Honest Pricing</h2>
        <p className="section-subtitle mx-auto mb-12">
          One straightforward hourly rate. No subscriptions, no hidden fees,
          no surprise charges on the bill.
        </p>

        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{ background: 'var(--navy)', boxShadow: 'var(--shadow-lg)', maxWidth: '26rem' }}
        >
          <div className="px-8 pt-10 pb-8">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="font-display font-bold text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>$300</span>
              <span className="text-base text-white/60">/hour</span>
            </div>
            <p className="text-sm text-white/40 mb-8">No subscription or retainer required</p>

            <ul className="space-y-3 text-left mb-8">
              {[
                'In-home or remote visits, your choice',
                'A clear estimate before I start - no surprises',
                'One-time help or ongoing support, no retainer',
                'Every device: computers, phones, tablets, Wi-Fi, printers',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                  <CheckCircle2 size={15} color="var(--amber)" className="mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary w-full" style={{ background: 'var(--amber)', color: 'var(--navy)', justifyContent: 'center' }}>
              Schedule a Visit <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <p className="text-sm mt-6" style={{ color: 'var(--warm-gray-light)' }}>
          Not sure if it&apos;s worth a call?{' '}
          <a href="#contact" style={{ color: 'var(--amber)', fontWeight: 600 }}>
            Reach out and describe the problem - I&apos;ll give you an honest answer.
          </a>
        </p>
      </div>
    </section>
  )
}

/* ─── Testimonials ──────────────────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "I reached out to John at JW Consulting for advice on making my home a smart home. John was able to ask the questions I hadn't thought of and gave me clear and easy to understand options. Once everything was setup and we were living with all of our new smart tech, John was happy to make adjustments so that everything was perfect for us. Super nice guy and easy to talk to. Prices were fair too.",
    name: 'Anthony Parr',
  },
  {
    quote: 'Everything was handled with care and attention to detail. A+ service all around!',
    name: 'Jeannine Patterson',
  },
  {
    quote:
      'Very knowledgeable and savvy advice. John is comfortable with diverse systems like what we have (a mix of Windows desktops and laptops, iPads, iPhones, and Chrome computers). Great support, delivered in a timely manner.',
    name: "Edward O'Brien",
  },
]

function TestimonialsSection() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Real Reviews</span>
          <h2 className="section-title">What Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name }) => (
            <div
              key={name}
              className="rounded-2xl p-6 flex flex-col"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} fill="var(--amber)" color="var(--amber)" />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--warm-gray)' }}>
                &ldquo;{quote}&rdquo;
              </p>
              <div className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Blog Teaser ───────────────────────────────────────────────────────────── */

function BlogTeaseSection() {
  const posts = blogPosts.slice(0, 3)
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Tips &amp; Guides</span>
          <h2 className="section-title mx-auto">Helpful Reading, No Jargon</h2>
          <p className="section-subtitle mx-auto">
            Free tips on staying safe online, keeping your computer running
            well, and getting the most out of your devices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="rounded-2xl p-6 flex flex-col no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <span className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--amber)' }}>
                {post.category}
              </span>
              <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.3rem', lineHeight: 1.25, color: 'var(--navy)' }}>
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--warm-gray)' }}>
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5" style={{ color: 'var(--amber)' }}>
                Read More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog" className="btn-outline">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ───────────────────────────────────────────────────────────────────── */

function FaqSection() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Questions</span>
          <h2 className="section-title mx-auto">Frequently Asked</h2>
        </div>
        <div className="space-y-3">
          {seniorFaqs.map((faq) => (
            <FaqAccordion key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <p className="text-center text-sm mt-8" style={{ color: 'var(--warm-gray-light)' }}>
          More questions? See the full{' '}
          <Link to="/faq" style={{ color: 'var(--amber)', fontWeight: 600 }}>FAQ page</Link>.
        </p>
      </div>
    </section>
  )
}

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1.5px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? 'var(--amber-pale)' : 'white' }}
      >
        <span className="font-semibold pr-4" style={{ color: 'var(--navy)', fontSize: '0.975rem', lineHeight: 1.45 }}>
          {question}
        </span>
        <ChevronDown
          size={18}
          color="var(--amber)"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 text-sm leading-relaxed" style={{ color: 'var(--warm-gray)', borderTop: '1px solid var(--border)' }}>
          {answer}
        </div>
      )}
    </div>
  )
}

/* ─── Contact ───────────────────────────────────────────────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6" style={{ background: 'var(--navy)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label" style={{ color: 'var(--amber)' }}>Get in Touch</span>
        <h2
          className="font-display font-bold mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.15 }}
        >
          Let&apos;s get your technology
          <br />
          <em className="not-italic" style={{ color: 'var(--amber)' }}>working for you again.</em>
        </h2>
        <p className="mb-12 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Call or email - I typically respond within a few hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:+17078748324"
            className="btn-primary"
            style={{ background: 'var(--amber)', color: 'var(--navy)', fontSize: '1.05rem', padding: '1rem 2.5rem' }}
          >
            <Phone size={18} />
            (707) 874-TECH (8324)
          </a>
          <a
            href="mailto:john@johnwangcs.com"
            className="btn-outline"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontSize: '1.05rem', padding: '1rem 2.5rem' }}
          >
            <Mail size={18} />
            john@johnwangcs.com
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <MapPin size={14} />
          In-home visits in Santa Rosa, Oakmont, Petaluma, Sebastopol, Healdsburg, Windsor &amp; surrounding Sonoma County
        </div>
      </div>
    </section>
  )
}
