import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, Mail } from 'lucide-react'
import { SiteFooter } from '@/components/Footer'

export const Route = createFileRoute('/about')({
  head: () => {
    const title = 'About John Wang - JW Consulting Services'
    const description =
      "Meet John Wang, founder of JW Consulting Services. From tuning the family TV as a kid in Sebastopol to 16 years in hospital IT, meet the person behind the patient, jargon-free tech support serving Sonoma County and beyond."
    const url = 'https://johnwangcs.com/about/'
    const image = 'https://johnwangcs.com/images/john-headshot.jpg'
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: AboutPage,
})

/* ─── Page ──────────────────────────────────────────────────────────────────── */

function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--navy)' }}>
      <HeroSection />
      <StorySection />
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
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in"
            style={{ background: 'var(--navy)', color: 'var(--amber)' }}
          >
            About JW Consulting Services
          </span>

          <h1
            className="font-display font-bold leading-tight mb-6 animate-fade-in-up delay-100"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: 'var(--navy)', letterSpacing: '-0.01em' }}
          >
            Hi, I&apos;m John.
            <br />
            <em className="not-italic" style={{ color: 'var(--amber)' }}>Here&apos;s my story.</em>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up delay-200"
            style={{ color: 'var(--warm-gray)', maxWidth: '36rem' }}
          >
            I started out as the kid everyone called to set the clock on
            their VCR, and I&apos;ve been working in IT ever since. Today,
            I bring that
            same problem-solving spirit, along with years of professional
            experience, to help individuals and small businesses with all
            their technology needs, from computers and networking to
            phones, tablets, and smart home tech like Alexa - all with a
            personal touch you won&apos;t find elsewhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a href="tel:+17078748324" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <Phone size={18} />
              (707) 874-TECH (8324)
            </a>
            <a href="mailto:john@johnwangcs.com" className="btn-outline" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <Mail size={18} />
              Send an Email
            </a>
          </div>
        </div>

        <div className="animate-fade-in delay-200">
          <div
            className="rounded-2xl overflow-hidden mx-auto"
            style={{ boxShadow: 'var(--shadow-lg)', border: '1.5px solid var(--border)', maxWidth: '22rem' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/john-headshot.jpg`}
              alt="John Wang, founder of JW Consulting Services"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4 / 5' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Story ─────────────────────────────────────────────────────────────────── */

function StorySection() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-3xl mx-auto">
        <span className="section-label">My Story</span>
        <h2 className="section-title mb-10">A Sebastopol Kid Who Loved Taking Things Apart</h2>

        <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'var(--warm-gray)' }}>
          <p>
            Growing up in Sebastopol, I was always the one people asked to
            set the time on their VCRs (for those of you who remember what
            those are), and it wasn&apos;t long before people
            &ldquo;happened to have their laptop in the car&rdquo; at family
            occasions and holidays. It was kind of a running joke, but it
            was also the first sign of something bigger - I just understood
            machines in a way that made sense to me.
          </p>
          <p>
            In my formative years, my mother had the foresight to spend a
            good chunk of the little money we had on an IBM PCjr, and that
            single decision let me learn computing from the ground up. By
            the time I was a teenager, I was already the IT administrator
            for my mom&apos;s local nonprofit and building computers for
            friends and neighbors. That early passion turned into a career -
            I spent 16 years in IT at the local Sutter Hospital, promoted
            into numerous roles over the years. Eventually I made it
            official and left to pursue what I truly love: helping people
            with real-world technology problems, one on one, without the
            layers of a big organization in between.
          </p>
          <p>
            &ldquo;If you do what you love, you&apos;ll never work a day in
            your life.&rdquo; That old adage is exactly why I chose to
            provide my services to my friends and neighbors, bringing a
            patient, caring, and comfortable style of IT support that&apos;s
            rare in this world. Whether it was helping my mother set up
            speech recognition so she could keep writing, or getting
            American cable TV working for my aunt&apos;s condo in Mexico,
            I&apos;ve spent a large part of my life helping people for whom
            technology was confusing and overwhelming, and enabling them to
            feel confident and comfortable with their technology needs.
          </p>
          <p>
            That&apos;s the mindset I bring to every call: no jargon, no
            judgment, and no rushing you through a fix. I explain what&apos;s
            happening in plain English, and I find what actually works for
            your life and comfort level - not a standard, one-size-fits-all
            answer.
          </p>
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
        <span className="section-label" style={{ color: 'var(--amber)' }}>Let&apos;s Talk</span>
        <h2
          className="font-display font-bold mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.15 }}
        >
          I&apos;d love to help you with
          <br />
          <em className="not-italic" style={{ color: 'var(--amber)' }}>whatever&apos;s giving you trouble.</em>
        </h2>
        <p className="mb-12 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Call or email - you&apos;ll be talking to me directly, not a call center.
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

        <div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Curious what people ask before booking?{' '}
          <Link to="/faq" style={{ color: 'var(--amber)', fontWeight: 600 }}>Check out the FAQ</Link>.
        </div>
      </div>
    </section>
  )
}
