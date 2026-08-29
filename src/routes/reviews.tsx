import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Star, Mail } from 'lucide-react'
import { SiteFooter } from '@/components/Footer'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'How Did We Do? - JW Consulting Services' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    links: [{ rel: 'canonical', href: 'https://johnwangcs.com/reviews/' }],
  }),
  component: ReviewsPage,
})

const GOOGLE_REVIEW_URL = 'https://g.page/r/CfK20x2HSjKyEBM/review'
const YELP_REVIEW_URL =
  'https://www.yelp.com/writeareview/biz/YJQdgW1UvZnL_qLywF3_jg?return_url=%2Fbiz%2FYJQdgW1UvZnL_qLywF3_jg&review_origin=biz-details-war-button'
const FEEDBACK_EMAIL = 'john@johnwangcs.com'

function ReviewsPage() {
  const [hovered, setHovered] = useState(0)
  const [rating, setRating] = useState(0)

  const handleSelect = (stars: number) => {
    setRating(stars)
  }

  const mailtoHref = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
    `Feedback on my service (${rating} star${rating === 1 ? '' : 's'})`,
  )}&body=${encodeURIComponent('Hi John,\n\nI wanted to share some feedback about my recent experience:\n\n')}`

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--cream)', color: 'var(--navy)' }}>
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-xl w-full text-center">
          <span className="section-label">Your Feedback</span>
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1, color: 'var(--navy)' }}
          >
            How Did We Do?
          </h1>
          {rating === 0 && (
            <p className="section-subtitle mx-auto mb-10">
              Your experience matters to me - tap a star to let me know how things went.
            </p>
          )}

          {rating === 0 && (
            <div
              className="flex items-center justify-center gap-2 mb-10"
              onMouseLeave={() => setHovered(0)}
            >
              {[1, 2, 3, 4, 5].map((n) => {
                const filled = hovered >= n
                return (
                  <button
                    key={n}
                    type="button"
                    aria-label={`Rate ${n} star${n === 1 ? '' : 's'}`}
                    onMouseEnter={() => setHovered(n)}
                    onClick={() => handleSelect(n)}
                    className="transition-transform hover:scale-110"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                  >
                    <Star
                      size={48}
                      fill={filled ? 'var(--amber)' : 'none'}
                      color={filled ? 'var(--amber)' : 'var(--warm-gray-light)'}
                      strokeWidth={1.5}
                    />
                  </button>
                )
              })}
            </div>
          )}

          {rating > 0 && rating < 4 && (
            <div
              className="rounded-2xl p-6 mb-6 animate-fade-in text-left"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <p className="font-semibold mb-2" style={{ color: 'var(--navy)' }}>
                I want to hear from you.
              </p>
              <p className="text-sm mb-5" style={{ color: 'var(--warm-gray)' }}>
                I&apos;m sorry your experience wasn&apos;t a great one. Please let me know what
                happened so I can make it right - every bit of feedback helps me improve.
              </p>
              <div className="flex justify-center">
                <a href={mailtoHref} className="btn-outline">
                  <Mail size={15} />
                  Email Your Feedback
                </a>
              </div>
            </div>
          )}

          {rating >= 4 && (
            <div
              className="rounded-2xl p-6 mb-6 animate-fade-in"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <p className="font-semibold mb-1" style={{ color: 'var(--navy)' }}>
                Thank you!
              </p>
              <p className="text-sm" style={{ color: 'var(--warm-gray)' }}>
                I appreciate a review on either Google or Yelp &mdash; and if you have a
                minute to copy and paste the same review to both, that&apos;s even more helpful.
              </p>
            </div>
          )}

          {rating > 0 && (
            <div className="animate-fade-in">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-80"
                >
                  <img
                    src="/images/google-review-badge.png"
                    alt="Leave a review on Google"
                    style={{ width: 200, height: 'auto' }}
                  />
                </a>
                <a
                  href={YELP_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-80"
                >
                  <img
                    src="/images/yelp-review-badge.jpg"
                    alt="Leave a review on Yelp"
                    style={{ width: 200, height: 'auto' }}
                  />
                </a>
              </div>
              <p className="text-xs mt-6" style={{ color: 'var(--warm-gray)' }}>
                Or{' '}
                <Link to="/" style={{ color: 'var(--warm-gray)', textDecoration: 'underline' }}>
                  click here to go back to jwconsulting.com
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
