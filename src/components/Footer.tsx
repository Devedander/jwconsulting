import { Link } from '@tanstack/react-router'

const locationLinks = [
  { to: '/it-support-santa-rosa', label: 'Santa Rosa' },
  { to: '/it-support-petaluma', label: 'Petaluma' },
  { to: '/it-support-sebastopol', label: 'Sebastopol' },
  { to: '/it-support-healdsburg', label: 'Healdsburg' },
  { to: '/it-support-windsor', label: 'Windsor' },
] as const

export function SiteFooter() {
  return (
    <footer
      className="px-6 py-10"
      style={{ background: '#111827', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--amber)' }}
          >
            <span className="font-display font-bold text-white text-sm">JW</span>
          </div>
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
            JW Consulting Services
          </span>
        </div>

        <div className="flex gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <a href="#services" className="hover:text-white/70 transition-colors no-underline">Services</a>
          <a href="#pricing"  className="hover:text-white/70 transition-colors no-underline">Pricing</a>
          <Link to="/about"   className="hover:text-white/70 transition-colors no-underline">About</Link>
          <Link to="/faq"     className="hover:text-white/70 transition-colors no-underline">FAQ</Link>
          <a href="#contact"  className="hover:text-white/70 transition-colors no-underline">Contact</a>
        </div>

        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          &copy; {new Date().getFullYear()} JW Consulting Services
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-8 pt-6 text-xs"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)' }}
      >
        <Link to="/service-areas" className="hover:text-white/60 transition-colors no-underline font-semibold">
          Service Areas
        </Link>
        {locationLinks.map(({ to, label }) => (
          <Link key={to} to={to} className="hover:text-white/60 transition-colors no-underline">
            IT Support in {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}
