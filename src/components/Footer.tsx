import { Link } from '@tanstack/react-router'

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
            John Wang Computer Services
          </span>
        </div>

        <div className="flex gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <a href="#services" className="hover:text-white/70 transition-colors no-underline">Services</a>
          <a href="#pricing"  className="hover:text-white/70 transition-colors no-underline">Pricing</a>
          <Link to="/faq"     className="hover:text-white/70 transition-colors no-underline">FAQ</Link>
          <a href="#contact"  className="hover:text-white/70 transition-colors no-underline">Contact</a>
        </div>

        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          &copy; {new Date().getFullYear()} John Wang Computer Services
        </p>
      </div>
    </footer>
  )
}
