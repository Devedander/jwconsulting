import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Match the router's basepath to Vite's `base` (BASE_URL), so links and
// asset resolution work whether the site is served from "/" or a GitHub
// Pages project subpath like "/jwconsulting/".
const basepath =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    basepath,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
