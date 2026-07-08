export interface LocationInfo {
  slug: string
  city: string
  badge: string
  heading: string
  intro: string
  whyTitle: string
  why: string
  coverage: string
}

export const sharedServices = [
  'Slow, crashing, or virus-infected computers',
  'Wi-Fi dead zones and network troubleshooting',
  'Hacked or locked-out email accounts',
  'New computer, printer, TV & smart home setup',
  'Custom-quote managed IT for small businesses',
  'On-demand help for individuals & seniors at $300/hr, billed in 1-hour increments',
]

export const locations: LocationInfo[] = [
  {
    slug: 'santa-rosa',
    city: 'Santa Rosa',
    badge: 'Santa Rosa · Sonoma County',
    heading: 'IT Support in Santa Rosa, CA',
    intro:
      "I've lived most of my life in Santa Rosa - it's home base for JW Consulting Services and the community I know best. Most tech problems can be diagnosed and fixed remotely in minutes, often faster than waiting for someone to drive across town, so that's usually where I start. When something genuinely needs hands-on work, I'm still local and can be at your door.",
    whyTitle: 'Why Santa Rosa Clients Choose Me',
    why:
      "I'm not a call center reading from a script, and I'm not a stranger either - I've spent most of my life in this town. Over the years I've supported everyone from law offices and financial advisors to construction companies and busy households, so there isn't much I haven't seen. My background includes two decades in enterprise healthcare IT, which means you get enterprise-grade judgment delivered remotely first and in person when it counts, without the enterprise price tag or contract.",
    coverage:
      "I support clients remotely throughout Santa Rosa first - it's usually the fastest way to get you back up and running. When a visit is the right call, I cover the whole city in person too, from downtown and Railroad Square to Rincon Valley, Coffey Park, and Fountaingrove.",
  },
  {
    slug: 'petaluma',
    city: 'Petaluma',
    badge: 'Petaluma · Sonoma County',
    heading: 'IT Support in Petaluma, CA',
    intro:
      "Petaluma's mix of historic downtown businesses and newer companies out toward the 101 corridor means no two IT setups look the same - and that's fine. Most issues can be diagnosed and fixed remotely, often within minutes, so that's usually where I start, with in-person visits available when they genuinely make more sense.",
    whyTitle: 'Why Petaluma Clients Choose Me',
    why:
      "I've worked with law offices, financial advisors, and construction companies among many others, so there isn't much I haven't seen. Petaluma has a strong small-business and small-farm community, and a lot of owners are wearing five hats already - IT shouldn't be one of them. Remote support means I can usually solve the problem before you'd even finish explaining it to someone else, and because it's always me on the other end, not a rotating help desk, it stays personal.",
    coverage:
      "I support Petaluma clients remotely first - it's usually the fastest way to get things fixed. When you need someone on-site, I cover the whole city in person too, from the historic downtown and Theatre District to East Petaluma and the business parks near Old Redwood Highway.",
  },
  {
    slug: 'sebastopol',
    city: 'Sebastopol',
    badge: 'Sebastopol · West County',
    heading: 'IT Support in Sebastopol, CA',
    intro:
      "I grew up in Sebastopol, so working with clients here always feels a bit like coming home. This West County community has a strong independent, small-business spirit, and most issues can be diagnosed and fixed remotely, often within minutes - usually where I start before ever needing to drive over.",
    whyTitle: 'Why Sebastopol Clients Choose Me',
    why:
      "I've worked with law offices, financial advisors, and construction companies, plus the studios, shops, and home-based operations that make Sebastopol what it is - I bring two decades of enterprise IT experience down to a scale that actually fits. It's not just about fixing computers, either. Getting to serve people in my old neck of the woods, sometimes folks I might run into around town, is one of my favorite parts of the job.",
    coverage:
      "I support Sebastopol and the surrounding West County area remotely first - it's usually the fastest way to get you fixed up. In-person visits are available too, whenever hands-on help is genuinely needed.",
  },
  {
    slug: 'healdsburg',
    city: 'Healdsburg',
    badge: 'Healdsburg · Wine Country',
    heading: 'IT Support in Healdsburg, CA',
    intro:
      "Healdsburg's mix of tourism-driven businesses, tasting rooms, and residents who split their time between here and elsewhere means technology needs to just work - reliably, and without a lot of hand-holding required from staff. Most issues can be resolved remotely, often within minutes, so that's usually where I start.",
    whyTitle: 'Why Healdsburg Clients Choose Me',
    why:
      "Healdsburg businesses often can't afford downtime, especially during busy tourist seasons. I've supported law offices, financial advisors, and construction companies alongside Healdsburg's tourism-driven businesses, and I bring that same enterprise-level IT discipline - from two decades in healthcare IT - to make sure your systems stay up and your data stays safe, at small-business scale and pricing. You get a real person who knows your setup, not a rotating help desk.",
    coverage:
      "I support Healdsburg and the surrounding wine country area remotely first - it's usually the quickest path to a fix. In-person visits are available too, whenever hands-on help is genuinely needed.",
  },
  {
    slug: 'windsor',
    city: 'Windsor',
    badge: 'Windsor · Sonoma County',
    heading: 'IT Support in Windsor, CA',
    intro:
      "Windsor is one of the fastest-growing communities in Sonoma County, just down the road from Santa Rosa where I grew up, with a lot of families and small businesses that just need a tech person they can actually reach - not a ticket queue. Most problems can be solved remotely, often faster than waiting for an appointment, with in-person visits available when a problem genuinely calls for it.",
    whyTitle: 'Why Windsor Clients Choose Me',
    why:
      "Windsor has a strong family and community feel, and a lot of residents - especially seniors - want tech help from someone patient who won't talk over their heads. I've also supported law offices, financial advisors, and construction companies nearby, so I bring that same level of care to every kind of client. Remote support lets me get to you quickly without the wait for a scheduled visit, and because it's always me on the other end, not a different technician each time, it stays personal.",
    coverage:
      "I support Windsor clients remotely first, which is usually the quickest path to a fix. When on-site help is needed, I cover the whole town in person too, from the Town Green area to the neighborhoods further out.",
  },
]
