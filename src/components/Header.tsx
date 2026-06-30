import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{ background: 'var(--navy)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--amber)' }}
          >
            <span
              className="font-display font-bold text-white"
              style={{ fontSize: '1.15rem', lineHeight: 1 }}
            >
              JW
            </span>
          </div>
          <div>
            <div
              className="font-semibold leading-none text-white"
              style={{ fontSize: '1rem', fontFamily: "'Source Sans 3', sans-serif" }}
            >
              John Wang
            </div>
            <div
              className="tracking-widest uppercase text-white/50"
              style={{ fontSize: '0.6rem', marginTop: '2px' }}
            >
              Computer Services
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '/#services', label: 'Services' },
            { href: '/#pricing', label: 'Pricing' },
            { href: '/#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors no-underline"
            >
              {label}
            </a>
          ))}
          <Link
            to="/faq"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors no-underline"
          >
            FAQ
          </Link>
          <a
            href="tel:+12025550187"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: 'var(--amber)', color: 'var(--navy)' }}
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ background: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          className="md:hidden px-6 py-5 flex flex-col gap-4"
        >
          {[
            { href: '/#services', label: 'Services' },
            { href: '/#pricing', label: 'Pricing' },
            { href: '/#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-white/80 hover:text-white text-base font-medium no-underline"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            to="/faq"
            className="text-white/80 hover:text-white text-base font-medium no-underline"
            onClick={() => setOpen(false)}
          >
            FAQ
          </Link>
          <a
            href="tel:+12025550187"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold w-full justify-center mt-2"
            style={{ background: 'var(--amber)', color: 'var(--navy)' }}
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}
