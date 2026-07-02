import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => {
    const title = 'John Wang Computer Services — Friendly IT Support'
    const description =
      'Friendly, patient tech support for viruses, hacked email, slow computers, Wi-Fi problems, and more — serving Santa Rosa, Petaluma, Sebastopol, Healdsburg, Windsor & Sonoma County. Flat-fee managed IT for small businesses, and on-demand help at $300/hr for individuals and seniors.'
    const url = 'https://johnwangcs.com/'
    const image = 'https://johnwangcs.com/images/john-headshot.jpg'
    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'John Wang Computer Services' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ],
      links: [
        { rel: 'icon', href: `${import.meta.env.BASE_URL}favicon.ico` },
        // Canonical is intentionally NOT set here — TanStack Router
        // concatenates `links` from parent and child routes rather than
        // deduping by `rel` (unlike `meta`, which dedupes by name/property),
        // so a root-level canonical would produce two conflicting
        // <link rel="canonical"> tags on every child route. Each route sets
        // its own canonical instead.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@300;400;500;600;700&display=swap',
        },
      ],
    }
  },
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
