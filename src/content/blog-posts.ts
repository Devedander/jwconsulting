// Blog post content. No CMS - hardcoded per AGENTS.md conventions.
// Each `body` entry is a section: either a paragraph or a subheading, rendered
// in order by the post detail route.

export type BlogSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  readTime: string
  body: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'spot-tech-support-scams',
    title: '5 Ways to Spot a Tech Support Scam Before It Costs You',
    excerpt:
      "Pop-ups that lock your screen, callers claiming to be from Microsoft, emails demanding you 'verify' your account - here's how to tell the difference between a real problem and someone trying to take your money.",
    category: 'Online Safety',
    date: '2026-06-18',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text:
          "If you've ever had a computer screen suddenly flash red with a loud warning sound and a phone number to call \"immediately,\" you've met a tech support scam. These are designed to feel urgent and scary on purpose - and they specifically target people who aren't sure whether the warning is real. Here's how to tell the difference, and what to do instead.",
      },
      { type: 'h2', text: '1. Real companies don\'t call you out of the blue' },
      {
        type: 'p',
        text:
          "Microsoft, Apple, and your internet provider do not monitor your computer and call you when something's wrong. If you get a phone call saying your computer is sending out errors or viruses, hang up. This is true even if the caller knows your name or a little bit about your computer - that information is often easy to find or guess.",
      },
      { type: 'h2', text: '2. A frozen screen with a phone number is a trap, not a warning' },
      {
        type: 'p',
        text:
          "The most common version of this scam is a browser pop-up that fills your entire screen, sometimes with a loud alarm sound, claiming your computer is infected and instructing you to call a number right away. This is not Microsoft or Apple - it's a webpage designed to look alarming. It cannot actually see or scan your computer. Don't call the number. Instead, hold down the power button to shut the computer off completely, then turn it back on. In most cases the pop-up disappears and nothing is actually wrong.",
      },
      { type: 'h2', text: '3. No legitimate company asks for gift cards' },
      {
        type: 'p',
        text:
          "If anyone - claiming to be tech support, the IRS, a utility company, or even a family member in an emergency - asks you to pay by buying gift cards and reading them the numbers, it is a scam, without exception. Real companies and real emergencies are never resolved with a Target or Apple gift card.",
      },
      { type: 'h2', text: '4. Be wary of anyone asking to \"remote in\" to your computer' },
      {
        type: 'p',
        text:
          "Remote access tools are genuinely useful - I use them myself to help clients without needing to drive over. But you should only ever allow remote access from someone you called, from a company or person you already trust. If someone calls or messages you first and asks to remotely connect to \"fix\" something you didn't report, that's the scam, not the fix.",
      },
      { type: 'h2', text: '5. When in doubt, stop and ask someone you trust' },
      {
        type: 'p',
        text:
          "The single best defense against these scams isn't technical - it's pausing before you act. Scammers rely on urgency and embarrassment to keep you from checking with someone else first. If something feels off, it's okay to hang up, close the laptop, and call a family member, a friend, or your local tech support person before doing anything else. You will never be in trouble for double-checking.",
      },
      {
        type: 'list',
        items: [
          'Hang up on unsolicited tech support calls - always.',
          'Restart your computer if a scary pop-up appears; never call the number on it.',
          'Never pay anyone in gift cards, wire transfers, or cryptocurrency.',
          'Only allow remote access to people you contacted first.',
          'Pause and ask a trusted person if something feels off - it costs you nothing.',
        ],
      },
      {
        type: 'p',
        text:
          "If you've already clicked something you're worried about, or you just want a second set of eyes on your computer's security, that's exactly what I'm here for. No judgment, no lecture - just a straight answer and a fix if one's needed.",
      },
    ],
  },
  {
    slug: 'why-computers-slow-down',
    title: 'Why Your Computer Feels Slower Every Year (and What Actually Helps)',
    excerpt:
      "It's not your imagination, and it's usually not your fault. Here's what really causes a computer to slow down over time, and which fixes are worth doing versus which ones are just a waste of your money.",
    category: 'Computer Care',
    date: '2026-05-27',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text:
          "\"My computer used to be so fast, and now everything just takes forever.\" I hear a version of this almost every week, and it's almost never one single thing - it's a handful of small causes that add up. Here's what's actually going on, in plain English.",
      },
      { type: 'h2', text: 'Too many programs starting when you turn it on' },
      {
        type: 'p',
        text:
          "Every program you install has a way of quietly asking to launch automatically when your computer starts, and most people never say no. Over a few years, a computer can end up trying to load fifteen or twenty programs before you've even opened a web browser. Trimming this list is one of the single biggest speed improvements available, and it takes about ten minutes.",
      },
      { type: 'h2', text: 'A nearly full hard drive' },
      {
        type: 'p',
        text:
          "Computers need free space to work efficiently, similar to how a desk with no clear surface is harder to work at. If your storage is more than about 85-90% full, especially on older computers, things slow down noticeably. Photos, old downloads, and duplicate files are the usual culprits, and cleaning these up is often free.",
      },
      { type: 'h2', text: 'An aging hard drive versus a solid state drive' },
      {
        type: 'p',
        text:
          "This is the big one. If your computer is more than about five years old and has never been upgraded, there's a good chance it still uses an older-style spinning hard drive. Replacing that with a solid state drive (SSD) is, in most cases, the single most noticeable upgrade you can make - often turning a five-minute startup into a fifteen-second one. It's also usually far cheaper than buying an entirely new computer.",
      },
      { type: 'h2', text: 'Background virus scans, updates, and \"bloatware\"' },
      {
        type: 'p',
        text:
          "New computers, especially budget models, often come pre-loaded with trial software, extra security tools on top of what's already built in, and other programs you never asked for. These run quietly in the background and compete for the same resources your actual programs need. Removing them safely (without breaking something you do need) is worth having a second pair of eyes on.",
      },
      { type: 'h2', text: 'So - repair, upgrade, or replace?' },
      {
        type: 'p',
        text:
          "As a rough guide: if your computer is under about 5 years old, a cleanup and possibly an SSD or memory upgrade will usually make it feel new again for a fraction of the cost of replacing it. Past about 7-8 years, especially if it's already had upgrades, replacement often makes more financial sense - and I'll tell you honestly which one applies to you rather than pushing a service you don't need.",
      },
      {
        type: 'p',
        text:
          "If your computer has been driving you crazy, it's worth a real diagnosis before you decide whether to fix it or replace it. I'll look at what's actually going on and give you a straight answer, not a sales pitch.",
      },
    ],
  },
  {
    slug: 'video-calls-with-grandkids',
    title: 'Video Calls Made Simple: How to See Your Grandkids Without the Headache',
    excerpt:
      "FaceTime, Zoom, Google Meet, WhatsApp - there are a lot of ways to make a video call, and picking the wrong one is the most common reason it doesn't work smoothly. Here's how to choose one and set it up once, so it just works from then on.",
    category: 'Staying Connected',
    date: '2026-04-09',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text:
          "One of the most common calls I get isn't about anything broken - it's a grandparent who wants to see their grandkids' faces on a screen and keeps running into a wall of confusing apps and blurry instructions from well-meaning family members over the phone. The good news: once it's set up correctly one time, video calling is genuinely simple. Here's how to think about it.",
      },
      { type: 'h2', text: 'Step one: match the app to your family, not the other way around' },
      {
        type: 'p',
        text:
          "The single biggest cause of video call frustration is having the wrong app for the people you're calling. If everyone in your family has an iPhone or iPad, FaceTime is usually the easiest choice - it's already installed and just requires tapping a name. If your family uses a mix of iPhones and Android phones, Zoom, Google Meet, or WhatsApp tend to work more reliably across different devices.",
      },
      { type: 'h2', text: 'Step two: save the person as a "favorite" or create one saved link' },
      {
        type: 'p',
        text:
          "You should never have to remember a password, a meeting ID, or a series of steps to make a call to the same few people. The right setup means one tap on a name or one saved icon does the whole job - dialing, connecting, and turning on the camera. If you're re-typing anything each time you call your daughter, it's not set up correctly yet.",
      },
      { type: 'h2', text: 'Step three: fix the two things that actually cause problems' },
      {
        type: 'p',
        text:
          "In my experience, nearly every “the video call didn't work” story comes down to one of two things: the Wi-Fi connection was weak, or the device's camera/microphone permission was accidentally turned off for that app. Both are quick to check and quick to fix permanently, so they stop happening.",
      },
      { type: 'h2', text: 'Step four: do one practice call before it matters' },
      {
        type: 'p',
        text:
          "Before a birthday or holiday when everyone will be trying to call at once, it's worth doing one relaxed test call a few days ahead with no pressure. That way, if anything needs adjusting - volume, camera angle, lighting - it happens on a Tuesday afternoon instead of during the moment you actually wanted to enjoy.",
      },
      {
        type: 'list',
        items: [
          'Pick one app that matches what your family already uses - don\'t juggle three.',
          'Set favorites or saved contacts so calling is a single tap.',
          'Check Wi-Fi strength and camera/microphone permissions once, and it\'s fixed for good.',
          'Do a low-stakes practice call before an event that matters to you.',
        ],
      },
      {
        type: 'p',
        text:
          "I can come to your home, set this up properly on your phone, tablet, or computer, and stay until everyone in the family has done a real test call together. Once it's right, it stays right.",
      },
    ],
  },
]
