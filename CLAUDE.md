# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:8080 (Vite + HMR)
npm run build      # Production build → /dist
npm run build:dev  # Development build (with source maps)
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite is configured. Strict TypeScript mode is off — the tsconfig targets ES2020 with lenient settings for faster iteration.

## Architecture

Single-page application built with **React 18 + TypeScript + Vite (SWC)**. Client-side routing via React Router v6. Only three routes: `/` (home), `/cv`, and `*` (404).

**Key libraries:**
- Styling: Tailwind CSS 3 + shadcn/ui (Radix UI primitives)
- Animation: Framer Motion (component-level) + Three.js/React Three Fiber (particle backgrounds)
- Forms: React Hook Form + Zod
- Email: EmailJS (`@emailjs/browser`) — no backend required
- State: TanStack React Query (minimal usage; mostly static content)

## Source Layout

```
src/
├── components/
│   ├── portfolio/   # Domain components — one file per portfolio section
│   └── ui/          # shadcn/ui primitives (do not edit these manually)
├── pages/           # Index.tsx, CvPage.tsx, NotFound.tsx
├── hooks/           # use-mobile.tsx, use-toast.ts, useMouseTilt.ts
├── lib/utils.ts     # cn() and other utilities
├── index.css        # Tailwind directives + all CSS custom properties
└── App.tsx          # Router + QueryClientProvider setup
```

`PortfolioLayout.tsx` orchestrates all portfolio sections in sequence. Each section (`HeroSection`, `ProjectsSection`, etc.) is self-contained with its own data defined inline.

## Design System

**Theme:** "Obsidian Agency" — dark-only (no light mode), electric violet primary on deep-space black background.

All design tokens are CSS custom properties defined in `index.css` using HSL values:
- Primary: `--primary` (electric violet, 262° 83% 68%)
- Background: `--background` (240° 25% 4%)
- Surface/card: `--surface` (243° 22% 8%)

Tailwind config extends these tokens via `hsl(var(--token))` references. Custom utilities include `gradient-violet`, `gradient-hero`, `glow`/`glow-lg` shadows, glass morphism (`.glass`), and ~10 custom keyframe animations (fade-up, float, shimmer, pulse-glow, spin-slow, etc.).

Font stack: Space Grotesk (display/headings), Inter (body), JetBrains Mono (code).

## Environment Variables

Copy `.env.example` to `.env` and fill in EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

All env vars must be prefixed `VITE_` to be accessible in the browser via `import.meta.env`.

## Path Aliases

`@` maps to `./src` — use `@/components/...`, `@/hooks/...`, `@/lib/utils` everywhere.
