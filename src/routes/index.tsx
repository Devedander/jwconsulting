import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SiteFooter } from '@/components/Footer'
import {
  Monitor,
  Laptop,
  Smartphone,
  Printer,
  Wifi,
  Home as HomeIcon,
  CheckCircle2,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  Users,
  Headphones,
  Building2,
  Mail,
  MapPin,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--navy)' }}>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <DevicesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-32 px-6"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 70% 50%, #f0ebe0 0%, var(--cream) 60%)',
      }}
    >
      {/* Decorative orbit — desktop only */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <OrbitDiagram />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in"
            style={{ background: 'var(--navy)', color: 'var(--amber)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Now Accepting New Clients
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold leading-none mb-6 animate-fade-in-up delay-100"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 6rem)', color: 'var(--navy)', letterSpacing: '-0.02em' }}
          >
            Technology,
            <br />
            <em
              className="not-italic"
              style={{ color: 'var(--amber)' }}
            >
              Made Human.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up delay-200"
            style={{ color: 'var(--warm-gray)', maxWidth: '34rem' }}
          >
            Concierge IT support for small businesses and individuals —
            delivered with patience, clear, jargon-free language, and a personal touch you
            won&apos;t find anywhere else.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a href="#services" className="btn-primary">
              <Building2 size={17} />
              Business Support
            </a>
            <a href="#individual" className="btn-outline">
              <Headphones size={17} />
              Personal Support
            </a>
          </div>

          {/* Trust row */}
          <div
            className="flex flex-wrap gap-6 mt-12 animate-fade-in-up delay-400"
            style={{ color: 'var(--warm-gray)' }}
          >
            {[
              { Icon: ShieldCheck, text: 'Trusted & Local' },
              { Icon: Clock,       text: 'Responsive Service' },
              { Icon: Users,       text: 'People-First' },
            ].map(({ Icon, text }) => (
              <span key={text} className="flex items-center gap-2 text-sm font-medium">
                <Icon size={15} color="var(--amber)" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OrbitDiagram() {
  const devices = [
    { Icon: Monitor,    label: 'Windows PC', color: 'var(--navy)' },
    { Icon: Laptop,     label: 'Mac',        color: 'var(--navy-light)' },
    { Icon: Smartphone, label: 'Mobile',     color: 'var(--amber)' },
    { Icon: Printer,    label: 'Printer',    color: 'var(--navy)' },
    { Icon: Wifi,       label: 'Network',    color: 'var(--amber)' },
    { Icon: HomeIcon,   label: 'Smart Home', color: 'var(--navy-light)' },
  ]
  const R = 148
  const C = 200

  return (
    <div className="relative" style={{ width: 400, height: 400 }}>
      <svg
        className="absolute inset-0 w-full h-full animate-slow-spin"
        viewBox="0 0 400 400"
      >
        <circle cx={C} cy={C} r={R}    fill="none" stroke="var(--amber)" strokeWidth="1"   opacity="0.18" strokeDasharray="6 6" />
        <circle cx={C} cy={C} r={R-40} fill="none" stroke="var(--navy)"  strokeWidth="0.8" opacity="0.1" />
        {devices.map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180
          const x2 = C + R * Math.cos(angle)
          const y2 = C + R * Math.sin(angle)
          return (
            <line key={i} x1={C} y1={C} x2={x2} y2={y2}
              stroke="var(--amber)" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
          )
        })}
      </svg>

      <div
        className="absolute flex flex-col items-center justify-center rounded-full text-white font-display font-bold shadow-xl"
        style={{
          width: 80, height: 80,
          left: C - 40, top: C - 40,
          background: 'var(--navy)',
          fontSize: '1.5rem',
          zIndex: 10,
        }}
      >
        JW
      </div>

      {devices.map(({ Icon, label, color }, i) => {
        const angle = (i * 60 * Math.PI) / 180
        const x = C + R * Math.cos(angle) - 26
        const y = C + R * Math.sin(angle) - 26
        return (
          <div
            key={label}
            title={label}
            className="absolute rounded-xl flex items-center justify-center shadow-md"
            style={{
              width: 52, height: 52,
              left: x, top: y,
              background: 'white',
              border: '1.5px solid var(--border)',
            }}
          >
            <Icon size={22} color={color} />
          </div>
        )
      })}
    </div>
  )
}

/* ─── Services ──────────────────────────────────────────────────────────────── */

function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Two Ways I Can Help</h2>
          <p className="section-subtitle mx-auto text-center">
            Whether you run a small business or just need someone patient to walk
            you through a tech problem, there&apos;s a plan built exactly for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Business panel */}
          <div
            id="business"
            className="rounded-2xl p-8 md:p-10 flex flex-col"
            style={{ background: 'var(--navy)', color: 'white', boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="rounded-xl overflow-hidden mb-6" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={`${import.meta.env.BASE_URL}images/john-headshot.jpg`}
                alt="John Wang, owner of John Wang Computer Services"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(200,134,30,0.2)' }}
            >
              <Building2 size={24} color="var(--amber)" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--amber)' }}>
              Small Business
            </span>
            <h3 className="font-display font-bold mb-4" style={{ fontSize: '1.9rem', lineHeight: 1.15 }}>
              Managed IT Support
              <br />as a Service
            </h3>
            <p className="leading-relaxed mb-8 text-white/75">
              Stop worrying about tech problems eating into your workday. For a
              predictable flat monthly fee, I handle everything — from keeping
              your computers running smoothly to being there when something goes
              wrong. One call, one person, no runaround.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {[
                'Proactive monitoring & maintenance',
                'Unlimited support calls & remote help',
                'Hardware troubleshooting',
                'Security updates & virus removal',
                'Printer, network & peripheral setup',
                'New device setup & data migration',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 size={16} color="var(--amber)" className="mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-6 mb-6"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Pricing</div>
              <div className="font-display font-bold text-white" style={{ fontSize: '1.9rem' }}>Call for a Quote</div>
              <div className="text-white/50 text-xs mt-1">Tailored to your business size — no two setups are the same</div>
            </div>
            <a
              href="#pricing"
              className="btn-outline"
              style={{ borderColor: 'var(--amber)', color: 'var(--amber)', justifyContent: 'center' }}
            >
              View Business Plans <ArrowRight size={16} />
            </a>
          </div>

          {/* Individual panel */}
          <div
            id="individual"
            className="rounded-2xl p-8 md:p-10 flex flex-col"
            style={{ background: 'white', boxShadow: 'var(--shadow-lg)', border: '1.5px solid var(--border)' }}
          >
            <div className="rounded-xl overflow-hidden mb-6" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={`${import.meta.env.BASE_URL}images/individual-support.jpg`}
                alt="John Wang helping clients with their laptop and phone"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'var(--amber-pale)' }}
            >
              <Headphones size={24} color="var(--amber)" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--amber)' }}>
              Individuals & Families
            </span>
            <h3
              className="font-display font-bold mb-4"
              style={{ fontSize: '1.9rem', lineHeight: 1.15, color: 'var(--navy)' }}
            >
              Concierge IT
              <br />Support
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--warm-gray)' }}>
              Technology should work <em>for</em> you, not frustrate you. I
              specialize in helping seniors and those who aren&apos;t &ldquo;tech people&rdquo; —
              especially people who just need someone patient, friendly, and
              able to explain things in plain English, without judgment.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {[
                'Computer slow-downs & performance fixes',
                'Virus, malware & security cleanup',
                'Email, printing & Wi-Fi troubleshooting',
                'iPhone, Android & tablet setup/support',
                'Smart home & home automation help',
                'Data backup & recovery',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--warm-gray)' }}>
                  <CheckCircle2 size={16} color="var(--amber)" className="mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-5 mb-6"
              style={{ background: 'var(--amber-pale)', border: '1px solid rgba(200,134,30,0.2)' }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--amber)' }}>
                Hourly Rate
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold" style={{ fontSize: '2.6rem', color: 'var(--navy)' }}>$300</span>
                <span className="text-sm" style={{ color: 'var(--warm-gray)' }}>/hour · billed in 1-hour increments</span>
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--warm-gray-light)' }}>No hidden fees · No subscription required</div>
            </div>
            <a href="#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
              Book a Service Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Approach ──────────────────────────────────────────────────────────────── */

function ApproachSection() {
  const pillars = [
    {
      Icon: Users,
      title: 'A People Person, Not Just a Tech Person',
      body: 'Most IT pros speak in jargon and make you feel like the problem. I genuinely enjoy explaining things clearly and making sure you feel confident — not rushed or talked down to.',
    },
    {
      Icon: ShieldCheck,
      title: 'One Person, Full Accountability',
      body: 'When you call, you reach me — not a help desk queue. I know your setup, I remember your history, and I take ownership of every issue until it\'s fully resolved.',
    },
    {
      Icon: Clock,
      title: 'Responsive and Reliable',
      body: "Your time matters. I respond quickly, show up when I say I will, and don't leave you waiting days for a simple fix.",
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--navy)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr_3fr] gap-14 items-start">
          <div>
            <span className="section-label" style={{ color: 'var(--amber)' }}>Why John Wang CS</span>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}
            >
              &ldquo;Unlike most IT pros,
              <br />
              <em className="not-italic" style={{ color: 'var(--amber)' }}>
                I&apos;m a people person.&rdquo;
              </em>
            </h2>
            <p
              className="leading-relaxed text-base"
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '28rem' }}
            >
              I started in tech because I love solving problems — but I stayed
              because I love helping people. From seniors learning a new laptop
              to small business owners who just need their computers to work,
              every client gets the same thing: honest, patient, personal service.
            </p>
          </div>

          <div className="space-y-6">
            {pillars.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(200,134,30,0.18)' }}
                >
                  <Icon size={20} color="var(--amber)" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'white', fontSize: '1rem' }}>
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Devices ───────────────────────────────────────────────────────────────── */

function DevicesSection() {
  const devices = [
    { Icon: Monitor,    label: 'Windows PCs',     note: 'Primary specialty' },
    { Icon: Laptop,     label: 'Mac Computers',   note: 'MacBook & iMac' },
    { Icon: Smartphone, label: 'Cell Phones',      note: 'iPhone & Android' },
    { Icon: Printer,    label: 'Printers',         note: 'Setup & repairs' },
    { Icon: Wifi,       label: 'Home Networks',    note: 'Wi-Fi & routers' },
    { Icon: HomeIcon,   label: 'Smart Home & IoT', note: 'Nest, Ring & more' },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-label">Coverage</span>
        <h2 className="section-title mx-auto">What I Work On</h2>
        <p className="section-subtitle mx-auto mb-14">
          From the computer on your desk to the thermostat on your wall — if
          it&apos;s connected and it&apos;s giving you trouble, chances are I can fix it.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {devices.map(({ Icon, label, note }) => (
            <div
              key={label}
              className="rounded-xl p-6 text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'var(--amber-pale)' }}
              >
                <Icon size={20} color="var(--amber)" />
              </div>
              <div className="font-semibold text-sm mb-1" style={{ color: 'var(--navy)' }}>
                {label}
              </div>
              <div className="text-xs" style={{ color: 'var(--warm-gray-light)' }}>
                {note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ───────────────────────────────────────────────────────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Simple, Honest Pricing</h2>
          <p className="section-subtitle mx-auto">
            Straightforward hourly rates for individuals. Business clients,
            reach out for a custom quote.
          </p>
          <p className="text-center text-sm mt-2" style={{ color: 'var(--warm-gray-light)' }}>
            Not sure which option is right for you?{' '}
            <a href="#contact" style={{ color: 'var(--amber)', fontWeight: 600 }}>
              Reach out — I&apos;m happy to talk it through.
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Business */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="px-8 pt-8 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--navy)' }}>
                  <Building2 size={16} color="white" />
                </div>
                <span className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>Small Business</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display font-bold" style={{ fontSize: '3rem', color: 'var(--navy)', lineHeight: 1 }}>Get a quote</span>
                <span className="text-sm" style={{ color: 'var(--warm-gray)' }}></span>
              </div>
              <p className="text-xs mt-2 mb-5" style={{ color: 'var(--warm-gray-light)' }}>
                Pricing tailored to your business size
              </p>
              <div className="rounded-lg p-3 text-sm" style={{ background: 'var(--amber-pale)', color: 'var(--amber)', fontWeight: 600 }}>
                Contact us for a custom quote
              </div>
            </div>
            <div className="px-8 pb-6 flex-1">
              <ul className="space-y-3">
                {[
                  'Unlimited remote & phone support',
                  'Proactive maintenance & updates',
                  'On-site visits as needed',
                  'Hardware setup & configuration',
                  'Virus & security protection',
                  'Dedicated point of contact — call me directly',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--warm-gray)' }}>
                    <CheckCircle2 size={15} color="var(--amber)" className="mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 pb-8">
              <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Business Quote
              </a>
            </div>
          </div>

          {/* Individual */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: 'var(--navy)', boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="px-8 pt-8 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(200,134,30,0.22)' }}>
                  <Headphones size={16} color="var(--amber)" />
                </div>
                <span className="font-semibold text-sm text-white/80">Individual / Home</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display font-bold text-white" style={{ fontSize: '3rem', lineHeight: 1 }}>$300</span>
                <span className="text-sm text-white/60">/hour</span>
              </div>
              <p className="text-xs mt-2 mb-5 text-white/40">
                Billed in 1-hour increments · No retainer required
              </p>
              <div className="rounded-lg p-3 text-sm font-semibold" style={{ background: 'rgba(200,134,30,0.18)', color: 'var(--amber)' }}>
                Pay only for the time you use
              </div>
            </div>
            <div className="px-8 pb-6 flex-1">
              <ul className="space-y-3">
                {[
                  'One-time or ongoing help, your choice',
                  'Remote or on-site visits',
                  'Patient, jargon-free explanations',
                  'Seniors and non-tech users welcome',
                  'Cell phones, smart home & more',
                  'No appointment too small',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={15} color="var(--amber)" className="mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 pb-8">
              <a href="#contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--amber)', color: 'var(--amber)' }}>
                Schedule a Call <Phone size={15} />
              </a>
            </div>
          </div>
        </div>
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
    detail: 'Google Review',
    stars: 5,
  },
  {
    quote:
      'JW Consulting Services has been handling our IT work for many years. He does an exceptional job, and available whenever we need help. Very reliable and smooth service. Highly recommend!',
    name: 'Thomas Darling',
    detail: 'Google Review',
    stars: 5,
  },
  {
    quote:
      "Definitely knows the ins & outs of computing & all it entails. I feel confident that I'm in excellent hands, which is critical for my business. The important thing for me is his ability to listen to my description of an issue & find answers so quickly! Amazing guy!",
    name: 'Max DuBois',
    detail: 'Google Review',
    stars: 5,
  },
  {
    quote:
      'Very knowledgeable and savvy advice. John is comfortable with diverse systems like what we have (a mix of Windows desktops and laptops, iPads, iPhones, and Chrome computers). Great support, delivered in a timely manner.',
    name: "Edward O'Brien",
    detail: 'Google Review',
    stars: 5,
  },
  {
    quote:
      'Everything was handled with care and attention to detail. A+ service all around!',
    name: 'Jeannine Patterson',
    detail: 'Google Review',
    stars: 5,
  },
]

function TestimonialsSection() {
  const [start, setStart] = useState(0)
  const total = testimonials.length
  const visibleCount = Math.min(4, total)
  const visible = Array.from({ length: visibleCount }, (_, i) => testimonials[(start + i) % total])
  const goPrev = () => setStart((i) => (i - 1 + total) % total)
  const goNext = () => setStart((i) => (i + 1) % total)

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Real 5-star reviews from Google.
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--navy)' }}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 flex-1">
            {visible.map(({ quote, name, detail, stars }, i) => (
              <div
                key={`${name}-${start}-${i}`}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} size={13} fill="var(--amber)" color="var(--amber)" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed flex-1 mb-5 line-clamp-6" style={{ color: 'var(--warm-gray)' }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--warm-gray-light)' }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next review"
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--navy)' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Go to review ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === start ? '20px' : '8px',
                height: '8px',
                background: i === start ? 'var(--amber)' : 'var(--border)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
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
          Ready to stop fighting
          <br />
          <em className="not-italic" style={{ color: 'var(--amber)' }}>with your technology?</em>
        </h2>
        <p className="mb-12 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Call or email — I typically respond within a few hours.
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
          In-person support in Santa Rosa, Petaluma, Sebastopol, Healdsburg, Windsor & surrounding Sonoma County · Remote support available worldwide
        </div>
      </div>
    </section>
  )
}

