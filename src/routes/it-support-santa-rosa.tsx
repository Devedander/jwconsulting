import { createFileRoute } from '@tanstack/react-router'
import { LocationPage } from '@/components/LocationPage'
import { locations } from '@/content/locations'

const location = locations.find((l) => l.slug === 'santa-rosa')!

export const Route = createFileRoute('/it-support-santa-rosa')({
  head: () => {
    const title = 'IT Support & Computer Repair in Santa Rosa, CA - JW Consulting Services'
    const description =
      'Friendly, local IT support in Santa Rosa - virus removal, slow computer fixes, Wi-Fi troubleshooting, and custom-quote managed IT for small businesses. Call (707) 874-8324.'
    const url = 'https://johnwangcs.com/it-support-santa-rosa/'
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
