import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { SiteFooter } from '@/components/Footer'
import { blogPosts } from '@/content/blog-posts'

export const Route = createFileRoute('/blog/')({
  head: () => {
    const title = 'Tips & Guides - JW Consulting Services'
    const description =
      'Free, jargon-free tips on avoiding tech support scams, keeping your computer running well, and getting the most out of your devices - from JW Consulting Services in Sonoma County.'
    const url = 'https://johnwangcs.com/blog'
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
  component: BlogIndexPage,
})

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function BlogIndexPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <div data-reveal-group className="py-16 px-6" style={{ background: 'var(--navy)' }}>
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
            Tips &amp; Guides
          </span>
          <h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Helpful Reading,
            <br />
            <em className="not-italic" style={{ color: 'var(--amber)' }}>No Jargon.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Free tips on staying safe online, keeping your devices running
            well, and getting the most out of your technology.
          </p>
        </div>
      </div>

      {/* Post grid */}
      <div data-reveal-group className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="rounded-2xl p-7 flex flex-col no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--amber)' }}>
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--warm-gray-light)' }} />
                <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--warm-gray-light)' }}>
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-display font-bold mb-3" style={{ fontSize: '1.6rem', lineHeight: 1.2, color: 'var(--navy)' }}>
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--warm-gray)' }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--warm-gray-light)' }}>{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--amber)' }}>
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16 rounded-2xl p-10 text-center" style={{ background: 'var(--navy)' }}>
          <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>
            Have a problem these tips don&apos;t cover?
          </h3>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            I&apos;m a real person - just call or send a message.
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
