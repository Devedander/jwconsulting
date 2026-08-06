import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Phone,
  Mail,
  Tv,
  Radio,
  Cpu,
  Building2,
  Briefcase,
  Heart,
  Users,
  ShieldCheck,
  Sparkles,
  MessageCircleHeart,
  Quote,
} from 'lucide-react'
import { SiteFooter } from '@/components/Footer'

export const Route = createFileRoute('/about')({
  head: () => {
    const title = 'About John Wang - JW Consulting Services'
    const description =
      "Meet John Wang, founder of JW Consulting Services. From tuning the family TV as a kid in Sebastopol to 16 years in hospital IT, meet the person behind the patient, jargon-free tech support serving Sonoma County and beyond."
    const url = 'https://johnwangcs.com/about'
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
    <div data-reveal-repeat className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--navy)' }}>
      <HeroSection />
      <OriginStorySection />
      <JourneySection />
      <WhyThisWorkSection />
      <EmpathySection />
      <PhilosophySection />
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
            I&apos;m the guy who was setting everyone&apos;s VCR clock before I
            was old enough to drive. Technology has been my calling for as
            long as I can remember - and after 16 years in hospital IT, I
            built JW Consulting Services to bring that same patient, caring
            approach directly to my friends and neighbors here in Sonoma
            County.
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

/* ─── Origin Story ──────────────────────────────────────────────────────────── */

function OriginStorySection() {
  const milestones = [
    {
      Icon: Tv,
      title: 'The VCR clock kid',
      body: 'Growing up in Sebastopol, I was always the one people asked to set the time on their VCRs. It was a running joke, but it was also the first sign of something bigger - I just understood machines in a way that made sense to me.',
    },
    {
      Icon: Radio,
      title: 'Tinkering before it was cool',
      body: 'Whether I was tuning the colors and channel dials on our living room TV or building Radio Shack radio and science kits, it was clear early on that this was my calling. I couldn’t leave a gadget alone without figuring out how it worked.',
    },
    {
      Icon: Cpu,
      title: 'The IBM PCjr that changed everything',
      body: 'My mother had the foresight to spend a good chunk of the little money we had on an IBM PCjr. That single decision let me learn PC computing from the ground up, in bite-sized pieces - and it gave me the depth of understanding to figure out what’s really going on under the hood, not just what shows up on the screen.',
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-label">Where It Started</span>
        <h2 className="section-title mx-auto">A Sebastopol Kid Who Loved Taking Things Apart</h2>
        <p className="section-subtitle mx-auto mb-14">
          Long before this was a career, it was just who I was.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-7 text-left flex flex-col items-start gap-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--amber-pale)' }}
              >
                <Icon size={20} color="var(--amber)" />
              </div>
              <h3 className="font-semibold text-base" style={{ color: 'var(--navy)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-gray)' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Journey / Timeline ────────────────────────────────────────────────────── */

function JourneySection() {
  const steps = [
    {
      Icon: Users,
      title: 'The teenage IT admin',
      body: 'By the time I was a teenager, I was already the IT administrator for my mom’s local nonprofit. It seemed like every family gathering had someone showing up with a laptop in their trunk, hoping I’d take a look. I always did.',
    },
    {
      Icon: Building2,
      title: '16 years in hospital IT',
      body: 'That early passion turned into a career - I spent 16 years in IT at the local Sutter Hospital, where I was promoted into numerous roles over the years. It gave me the chance to bring my technical skill and love of problem-solving to a fast-paced, high-stakes environment every single day.',
    },
    {
      Icon: Briefcase,
      title: 'Going out on my own',
      body: 'I’d always done computer work as a side job for friends and family, so after 16 years I made it official and left Sutter to pursue what I truly love - helping people with real-world technology problems, one on one, without the layers of a big organization in between.',
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">The Journey</span>
          <h2 className="section-title mx-auto">From the Family Fixer to Founding JW Consulting</h2>
        </div>

        <div className="space-y-6">
          {steps.map(({ Icon, title, body }, i) => (
            <div key={title} className="flex gap-5 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--navy)' }}
                >
                  <Icon size={20} color="var(--amber)" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: 'var(--border)', minHeight: '2.5rem' }} />
                )}
              </div>
              <div
                className="rounded-xl p-6 flex-1"
                style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'var(--navy)', fontSize: '1.05rem' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-gray)' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why This Work ─────────────────────────────────────────────────────────── */

function WhyThisWorkSection() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--navy)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <Quote size={32} color="var(--amber)" className="mx-auto mb-6" style={{ opacity: 0.7 }} />
        <p
          className="font-display leading-snug mb-8"
          style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)', color: 'white' }}
        >
          &ldquo;If you do what you love, you&apos;ll never work a day in your life.&rdquo;
        </p>
        <p className="leading-relaxed text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
          That old adage is exactly why I chose to provide my services to my
          friends and neighbors, bringing a patient, caring, and comfortable
          style of IT support that&apos;s rare in this world. I truly pride
          myself on taking the scariness out of technology, helping people
          understand what&apos;s going on, and finding solutions that work
          for them - not trying to force them into a standard, one-size-fits-all
          fix.
        </p>
      </div>
    </section>
  )
}

/* ─── Empathy / Personal Stories ────────────────────────────────────────────── */

function EmpathySection() {
  const stories = [
    {
      title: 'Helping my mother find her voice again',
      body: 'As my mother got older, typing on her laptop became harder. We worked together to get speech recognition set up so she could keep writing and staying connected - watching technology give something back to her instead of frustrating her meant everything.',
    },
    {
      title: 'American TV for my aunt in Mexico',
      body: 'My aunt wanted American cable TV in her condo in Mexico. It wasn’t a simple plug-and-play job, but figuring it out for her - and seeing how much she appreciated it - is exactly the kind of problem I love solving.',
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Why I Do This</span>
          <h2 className="section-title mx-auto">Technology Shouldn&apos;t Feel Foisted on You</h2>
          <p className="section-subtitle mx-auto">
            I&apos;ve spent a large part of my life helping friends and family
            for whom technology was confusing and overwhelming, not
            exciting. A few moments stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--amber-pale)' }}
              >
                <Heart size={20} color="var(--amber)" />
              </div>
              <h3 className="font-semibold" style={{ color: 'var(--navy)', fontSize: '1.1rem' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-gray)' }}>{body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--warm-gray)' }}>
          Moments like these are where I developed a high level of empathy
          and patience for people who aren&apos;t tech-savvy. It&apos;s the
          same patience and care I bring to every client I work with today.
        </p>
      </div>
    </section>
  )
}

/* ─── Philosophy ─────────────────────────────────────────────────────────────── */

function PhilosophySection() {
  const pillars = [
    {
      Icon: ShieldCheck,
      title: 'No jargon, no judgment',
      body: 'There’s no such thing as a silly question. I explain what’s happening in plain English so you actually understand your own technology.',
    },
    {
      Icon: MessageCircleHeart,
      title: 'Patient, every time',
      body: 'I never rush you through a fix. Whether it’s your first computer or your fifth, we move at a pace that feels comfortable for you.',
    },
    {
      Icon: Sparkles,
      title: 'Solutions that fit you',
      body: 'I don’t force you into the standard, one-size-fits-all answer. I find what actually works for your life, your habits, and your comfort level.',
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-label">How I Work With You</span>
        <h2 className="section-title mx-auto">The Same Approach, Every Visit</h2>
        <p className="section-subtitle mx-auto mb-14">
          Whether it&apos;s a hacked email account or a new smart TV, this is
          the mindset I bring to every single call.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-7 text-left flex flex-col items-start gap-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'white', border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--amber-pale)' }}
              >
                <Icon size={20} color="var(--amber)" />
              </div>
              <h3 className="font-semibold text-base" style={{ color: 'var(--navy)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-gray)' }}>{body}</p>
            </div>
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
