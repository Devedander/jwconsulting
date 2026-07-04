# JW Consulting Services

A modern marketing website for JW Consulting Services (John Wang) — a concierge IT support business serving small businesses and individuals in Santa Rosa, Petaluma, Sebastopol, Healdsburg, Windsor, and the rest of Sonoma County, California (remote support available worldwide).

## About

The site presents two service offerings:

- **Small Business Managed Support** — custom monthly quote covering unlimited support, proactive maintenance, and on-site visits
- **Individual / Concierge IT Support** — hourly at $300/hr for one-time or ongoing help, specializing in seniors and non-tech-savvy users

## Tech Stack

| Layer        | Technology                         |
|--------------|------------------------------------|
| Framework    | [TanStack Start](https://tanstack.com/start) |
| Router       | TanStack Router v1 (file-based)    |
| Frontend     | React 19                           |
| Build Tool   | Vite 7                             |
| Styling      | Tailwind CSS 4 + CSS custom props  |
| Icons        | Lucide React                       |
| Fonts        | Cormorant Garamond + Source Sans 3 (Google Fonts) |
| Deployment   | Netlify                            |
| Language     | TypeScript 5.7 (strict mode)       |

## Running Locally

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Production build
npm run build
```

The dev server runs at `http://localhost:3000`. The Netlify CLI (`netlify dev`) can also be used for local emulation on port 8888.

## Project Structure

```
src/
├── components/
│   └── Header.tsx         # Sticky nav with logo, links, CTA
├── routes/
│   ├── __root.tsx         # Root layout: fonts, meta, Header mount
│   ├── index.tsx          # Landing page (all sections)
│   └── faq.tsx            # FAQ accordion page
├── router.tsx             # TanStack Router setup
└── styles.css             # Tailwind + CSS variables + animations
```

## Customization

Live contact info is `(707) 874-8324` and `john@johnwangcs.com`. To update it, search for those values in:
- `src/routes/index.tsx`
- `src/routes/faq.tsx`
- `src/routes/reviews.tsx`
- `src/components/Header.tsx`
