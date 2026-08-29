import { createFileRoute } from '@tanstack/react-router'
import { LocationPage } from '@/components/LocationPage'
import { locations } from '@/content/locations'

const location = locations.find((l) => l.slug === 'healdsburg')!

export const Route = createFileRoute('/it-support-healdsburg')({
  head: () => {
    const title = 'IT Support & Computer Repair in Healdsburg, CA - JW Consulting Services'
    const description =
      'Reliable, friendly IT support in Healdsburg - computer repair, Wi-Fi troubleshooting, email security, and managed IT for small businesses. Call (707) 874-8324.'
    const url = 'https://johnwangcs.com/it-support-healdsburg/'
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
