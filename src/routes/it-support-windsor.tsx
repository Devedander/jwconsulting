import { createFileRoute } from '@tanstack/react-router'
import { LocationPage } from '@/components/LocationPage'
import { locations } from '@/content/locations'

const location = locations.find((l) => l.slug === 'windsor')!

export const Route = createFileRoute('/it-support-windsor')({
  head: () => {
    const title = 'IT Support & Computer Repair in Windsor, CA - JW Consulting Services'
    const description =
      'Friendly, patient IT support in Windsor, CA - computer repair, Wi-Fi help, email security, and managed IT for small businesses. Call (707) 874-8324.'
    const url = 'https://johnwangcs.com/it-support-windsor'
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
