# John Wang Computer Services

A modern marketing website for John Wang Computer Services — a concierge IT support business serving small businesses and individuals in the Washington D.C. metro area.

## About

The site presents two service offerings:

- **Small Business Managed Support** — flat monthly fee ($120/seat/month, min. 2 seats) covering unlimited support, proactive maintenance, and on-site visits
- **Individual / Concierge IT Support** — hourly at $240/hr for one-time or ongoing help, specializing in seniors and non-tech-savvy users

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

To update contact info, search for the placeholder phone `(202) 555-0187` and email `john@johnwangcs.com` in:
- `src/routes/index.tsx`
- `src/routes/faq.tsx`
- `src/components/Header.tsx`
