import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

// Set VITE_BASE_PATH when building for a GitHub Pages project site, e.g. "/jwconsulting/".
// Leave unset for Netlify / a custom domain, where the site is served from "/".
const basePath = process.env.VITE_BASE_PATH || '/'
// TanStack Start's router basepath (used by the prerender crawler) must match
// the runtime basepath computed in router.tsx from Vite's `base`, or
// prerendering 404s on every route besides "/".
const routerBasepath = basePath === '/' ? undefined : basePath.replace(/\/$/, '')

const config = defineConfig({
  base: basePath,
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    netlify(),
    tanstackStart({
      router: {
        basepath: routerBasepath,
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
})

export default config
