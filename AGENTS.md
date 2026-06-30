# AGENTS.md — John Wang Computer Services

This document describes the project architecture, conventions, and non-obvious decisions for AI agents working on this codebase.

## Project Overview

A marketing/branding website for John Wang Computer Services, a one-person concierge IT support business. Two target audiences:

1. **Small businesses** (under 20 employees) — sold on a flat-fee managed support plan ($120/seat/month, min. 2 seats)
2. **Individuals / seniors** — hourly concierge support ($240/hr) emphasizing patience and accessibility

The visual identity uses warm cream + deep navy + amber gold. Typography is editorial: Cormorant Garamond (display) + Source Sans 3 (body). The design deliberately avoids cold/corporate tech aesthetics.

## Stack

- **TanStack Start** (React 19, TanStack Router v1) — file-based routing under `src/routes/`
- **Vite 7** — build tool
- **Tailwind CSS 4** — utility classes; custom properties in `:root` handle the color palette
- **Lucide React** — icon library (no emoji in UI)
- **Google Fonts** — loaded via `links` in `head()` in `__root.tsx`
- **Netlify** — deployment via `@netlify/vite-plugin-tanstack-start`

## Directory Structure

```
src/
├── components/
│   └── Header.tsx         # Sticky nav bar — includes logo, anchor links, Call CTA
├── routes/
│   ├── __root.tsx         # Shell: mounts Header, loads fonts, sets global meta
│   ├── index.tsx          # Full landing page (all marketing sections as functions)
│   └── faq.tsx            # FAQ accordion, grouped by category
├── router.tsx             # TanStack Router instantiation
└── styles.css             # @import tailwindcss + :root CSS vars + animation keyframes
```

## CSS Architecture

All brand tokens live in `:root` inside `styles.css`. Never hardcode color hex values in component files — use `var(--token-name)` via inline `style` props.

Key tokens:
- `--cream`, `--cream-dark` — page backgrounds
- `--navy`, `--navy-light` — primary text / dark sections
- `--amber`, `--amber-light`, `--amber-pale` — accent / highlight
- `--warm-gray`, `--warm-gray-light` — body text, captions
- `--border` — card/divider borders
- `--shadow`, `--shadow-lg` — box shadows

Tailwind is used for spacing, layout, and responsive utilities. Styling that requires design tokens (colors, fonts) uses inline `style` props.

## Component Conventions

- **No default exports** in route files — TanStack requires named `Route` export
- Section components are defined as plain functions at the bottom of the file they're used in
- `font-display` is a CSS class (defined in `styles.css`) that applies Cormorant Garamond; all headings use `className="font-display"`
- `btn-primary` and `btn-outline` are utility CSS classes in `styles.css` — use them for buttons
- `section-label`, `section-title`, `section-subtitle` are CSS utility classes for consistent section heading hierarchy

## Routing

Two routes: `/` (landing) and `/faq`. The `Header` component is mounted in `__root.tsx`'s shell so it appears on every page.

Anchor links (`#services`, `#pricing`, `#contact`) live within the landing page and are used for in-page navigation.

## Animation

Staggered entrance animations use CSS classes `animate-fade-in-up` + `delay-100` through `delay-600` (defined in `styles.css`). The orbit diagram in the hero rotates slowly via `animate-slow-spin`.

All animations use `transform`/`opacity` only — no layout properties.

## Content & Contact

Real contact details used throughout:
- Phone: `(707) 874-TECH (8324)` / `tel:+17078748324`
- Email: `john@johnwangcs.com`
- Service area: in-person in Sonoma County, remote support worldwide

These appear in `Header.tsx`, `index.tsx` (ContactSection), and `faq.tsx`.

## Key Design Decisions

- **Asymmetric hero**: Large serif headline left-aligned with a decorative rotating orbit diagram on the right — avoids the generic centered hero.
- **Two-column services split**: Business panel uses navy background; Individual panel uses white. This visual contrast reinforces that these are distinct products for different audiences.
- **Source Sans 3 for body**: Chosen for excellent readability, important given the senior/non-tech audience.
- **No CMS**: Content is hardcoded in route files. If content becomes frequently updated, consider Content Collections (skill available in `.agents/skills/`).
- **No auth or database**: This is a pure marketing site. If a contact form is needed, use the `netlify-forms-tanstack` skill.
