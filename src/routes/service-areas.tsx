import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowLeft, MapPin } from 'lucide-react'
import { SiteFooter } from '@/components/Footer'
import { locations } from '@/content/locations'

const locationHrefs = {
  'santa-rosa': '/it-support-santa-rosa',
  petaluma: '/it-support-petaluma',
  sebastopol: '/it-support-sebastopol',
  healdsburg: '/it-support-healdsburg',
  windsor: '/it-support-windsor',
} as const

export const Route = createFileRoute('/service-areas')({
  head: () => {
    const title = 'Service Areas - JW Consulting Services'
    const description =
      'JW Consulting Services provides in-person IT support throughout Santa Rosa, Petaluma, Sebastopol, Healdsburg, Windsor and the surrounding Sonoma County area, plus remote support worldwide.'
    const url = 'https://johnwangcs.com/service-areas/'
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: ServiceAreasPage,
})

function ServiceAreasPage() {
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
          <span className="block text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--amber)' }}>
            Service Areas
          </span>
          <h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Serving Sonoma County
            <br />
            <em className="not-italic" style={{ color: 'var(--amber)' }}>and Beyond.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            I provide in-person IT support throughout Sonoma County, and
            remote support anywhere in the world.
          </p>
        </div>
      </div>

      {/* City grid */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={locationHrefs[location.slug as keyof typeof locationHrefs]}
              className="rounded-2xl p-7 flex flex-col no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'var(--amber-pale)' }}
              >
                <MapPin size={20} color="var(--amber)" />
              </div>
              <h2 className="font-display font-bold mb-3" style={{ fontSize: '1.4rem', lineHeight: 1.2, color: 'var(--navy)' }}>
                IT Support in {location.city}
              </h2>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--warm-gray)' }}>
                {location.intro}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5" style={{ color: 'var(--amber)' }}>
                View {location.city} Page <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <p className="max-w-5xl mx-auto text-center text-sm mt-10" style={{ color: 'var(--warm-gray-light)' }}>
          Don&apos;t see your area listed? I likely still cover it - remote
          support is available worldwide, and I take on-site visits
          throughout the surrounding Sonoma County area.
        </p>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 rounded-2xl p-10 text-center" style={{ background: 'var(--navy)' }}>
          <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>
            Not sure if I cover your area?
          </h3>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Just call or send a message - I&apos;m happy to check.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+17078748324" className="btn-primary" style={{ background: 'var(--amber)', color: 'var(--navy)' }}>
              (707) 874-TECH (8324)
            </a>
            <a href="mailto:john@johnwangcs.com" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              john@johnwangcs.com
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
