import { createFileRoute } from '@tanstack/react-router'
import { LocationPage } from '@/components/LocationPage'
import { locations } from '@/content/locations'

const location = locations.find((l) => l.slug === 'petaluma')!

export const Route = createFileRoute('/it-support-petaluma')({
  head: () => {
    const title = 'IT Support & Computer Repair in Petaluma, CA - JW Consulting Services'
    const description =
      'Local, patient tech support in Petaluma - computer repair, Wi-Fi fixes, email security, and custom-quote managed IT for small businesses. Call (707) 874-8324.'
    const url = 'https://johnwangcs.com/it-support-petaluma/'
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
  component: () => <LocationPage location={location} />,
})
