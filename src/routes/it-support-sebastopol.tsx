import { createFileRoute } from '@tanstack/react-router'
import { LocationPage } from '@/components/LocationPage'
import { locations } from '@/content/locations'

const location = locations.find((l) => l.slug === 'sebastopol')!

export const Route = createFileRoute('/it-support-sebastopol')({
  head: () => {
    const title = 'IT Support & Computer Repair in Sebastopol, CA - JW Consulting Services'
    const description =
      'Friendly tech support in Sebastopol and West County - computer repair, Wi-Fi help, email security, and managed IT for small businesses. Call (707) 874-8324.'
    const url = 'https://johnwangcs.com/it-support-sebastopol/'
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
