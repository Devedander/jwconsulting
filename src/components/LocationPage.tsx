import { Link } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle2, MapPin, Phone, Mail, Star } from 'lucide-react'
import { SiteFooter } from '@/components/Footer'
import { sharedServices, type LocationInfo } from '@/content/locations'

const testimonials = [
  {
    quote:
      "I reached out to John at JW Consulting for advice on making my home a smart home. John was able to ask the questions I hadn't thought of and gave me clear and easy to understand options. Super nice guy and easy to talk to. Prices were fair too.",
    name: 'Anthony Parr',
  },
  {
    quote:
      'JW Consulting Services has been handling our IT work for many years. He does an exceptional job, and available whenever we need help. Very reliable and smooth service. Highly recommend!',
    name: 'Thomas Darling',
  },
  {
    quote:
      "Definitely knows the ins & outs of computing & all it entails. I feel confident that I'm in excellent hands, which is critical for my business. Amazing guy!",
    name: 'Max DuBois',
  },
]

export function LocationPage({ location }: { location: LocationInfo }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <div className="py-16 px-6" style={{ background: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-8 no-underline transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
            style={{ background: 'rgba(200,134,30,0.18)', color: 'var(--amber)' }}
          >
            <MapPin size={13} />
            {location.badge}
          </div>
          <h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            {location.heading}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '38rem' }}>
            {location.intro}
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">What I Help With</span>
            <h2 className="section-title mx-auto">Services in {location.city}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {sharedServices.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
              >
                <CheckCircle2 size={18} color="var(--amber)" className="mt-0.5 flex-shrink-0" />
                <span className="text-sm" style={{ color: 'var(--warm-gray)' }}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this city */}
      <section className="py-20 px-6" style={{ background: 'var(--navy)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label" style={{ color: 'var(--amber)' }}>{location.whyTitle}</span>
          <p
            className="leading-relaxed mt-6"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}
          >
            {location.why}
          </p>
        </div>
      </section>

      {/* Coverage area */}
      <section className="py-16 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label">Coverage Area</span>
          <h2 className="section-title mx-auto">Serving All of {location.city}</h2>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--warm-gray)' }}>
            {location.coverage}
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Testimonials</span>
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

      {/* Contact */}
      <section id="contact" className="py-20 px-6" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label" style={{ color: 'var(--amber)' }}>Get in Touch</span>
          <h2
            className="font-display font-bold mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.15 }}
          >
            Ready to get your technology
            <br />
            <em className="not-italic" style={{ color: 'var(--amber)' }}>working for you again?</em>
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
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
