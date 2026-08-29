import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Clock, Phone, Mail } from 'lucide-react'
import { SiteFooter } from '@/components/Footer'
import { blogPosts } from '@/content/blog-posts'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const url = `https://johnwangcs.com/blog/${loaderData.slug}/`
    return {
      meta: [
        { title: `${loaderData.title} - JW Consulting Services` },
        { name: 'description', content: loaderData.excerpt },
        { property: 'og:title', content: loaderData.title },
        { property: 'og:description', content: loaderData.excerpt },
        { property: 'og:url', content: url },
        {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.date,
            author: { '@type': 'Person', name: 'John Wang' },
            publisher: { '@type': 'Organization', name: 'JW Consulting Services' },
          },
        },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: BlogPostPage,
})

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function BlogPostPage() {
  const post = Route.useLoaderData()

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <div className="py-16 px-6" style={{ background: 'var(--navy)' }}>
        <div className="max-w-2xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 no-underline transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <ArrowLeft size={14} />
            Back to Tips &amp; Guides
          </Link>
          <span className="block text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--amber)' }}>
            {post.category}
          </span>
          <h1
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', lineHeight: 1.15 }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {post.body.map((section, i) => {
            if (section.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="font-display font-bold mt-10 mb-4"
                  style={{ fontSize: '1.5rem', color: 'var(--navy)' }}
                >
                  {section.text}
                </h2>
              )
            }
            if (section.type === 'list') {
              return (
                <ul key={i} className="space-y-2 my-6 pl-1">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed"
                      style={{ color: 'var(--warm-gray)' }}
                    >
                      <span
                        className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--amber)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p
                key={i}
                className="text-base leading-relaxed mb-5"
                style={{ color: 'var(--warm-gray)' }}
              >
                {section.text}
              </p>
            )
          })}

          {/* Inline CTA */}
          <div
            className="rounded-2xl p-8 mt-14 text-center"
            style={{ background: 'var(--amber-pale)', border: '1px solid rgba(200,134,30,0.2)' }}
          >
            <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.4rem', color: 'var(--navy)' }}>
              Want help with something like this?
            </h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--warm-gray)' }}>
              I offer patient, in-home tech support for seniors and individuals
              throughout Sonoma County, plus remote help worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+17078748324" className="btn-primary">
                <Phone size={16} />
                (707) 874-TECH (8324)
              </a>
              <a href="mailto:john@johnwangcs.com" className="btn-outline">
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  )
}
