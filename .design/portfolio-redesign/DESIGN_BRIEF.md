# Design Brief: Portfolio Redesign — Oussama Methnani

## Problem

A recruiter lands on the portfolio and sees a "hacker" aesthetic — neon green, matrix grid, terminal vibes. It signals hobbyist CTF player, not senior mobile engineer. The current UI undersells 4 years of professional Flutter/Dart expertise at a company like ContinuousNet. There are no meaningful animations, the sections feel disconnected, and nothing communicates craft or premium quality.

## Solution

A dark, sleek, premium agency-grade portfolio that reads as the personal brand of a serious mobile developer. Every section transitions with intent. The hero makes an immediate impression with a particle background and bold typography. Scroll-driven animations reveal content with purpose. Project cards tilt in 3D. The whole site feels like it was built by someone who cares deeply about UI — which is exactly what a Flutter developer should signal.

## Experience Principles

1. **Premium over hacker** — Every design choice (color, motion, spacing) should feel like a top-tier agency portfolio, not a CTF leaderboard. Dark + elegant, not dark + terminal.
2. **Motion as substance** — Animations are not decoration. Each one reveals hierarchy, guides attention, or rewards interaction. No animation without purpose.
3. **Recruiter-first clarity** — Skills, experience, and projects must be scannable in under 10 seconds. Bold hierarchy, no jargon walls. The site earns a conversation, not just a click.

## Aesthetic Direction

- **Philosophy**: Obsidian Agency — deep space dark backgrounds, electric violet/indigo as the signature accent, clean white typography, glass-morphism card surfaces, generous whitespace
- **Tone**: Authoritative, polished, quietly confident — the site of someone who has shipped real apps to real users
- **Reference points**: Ramotion agency site, ustwo portfolio, Linear's marketing site, Apple developer pages
- **Anti-references**: TryHackMe, CTF scoreboards, matrix/terminal UIs, neon green "hacker" aesthetics, cluttered sidebars

## Color System (to replace current)

| Token | Value | Usage |
|---|---|---|
| `--background` | `240 20% 4%` | Deep space navy (page background) |
| `--surface` | `245 18% 8%` | Card/section surfaces |
| `--surface-elevated` | `248 16% 12%` | Elevated modals, nav |
| `--primary` | `262 83% 68%` | Electric violet (CTA, highlights, glows) |
| `--primary-glow` | `262 83% 78%` | Lighter for hover states |
| `--accent` | `230 70% 65%` | Indigo-blue (secondary highlights) |
| `--foreground` | `0 0% 96%` | Primary text |
| `--muted-foreground` | `240 15% 60%` | Secondary text, labels |
| `--border` | `245 20% 18%` | Subtle card borders |

## Existing Patterns

- **Typography**: System fonts via Tailwind defaults — needs upgrade to `Inter` + `Space Grotesk` (headings)
- **Colors**: HSL CSS variables in `index.css` — full replacement, keeping the variable architecture
- **Spacing**: Tailwind default scale — keep
- **Components**: shadcn/ui full suite (Button, Card, Dialog, Badge, etc.) — reuse and extend, not replace
- **Animations**: Only accordion and basic CSS transitions — needs `framer-motion` added
- **Background**: `.matrix-bg` class with grid pseudo-elements — replace with `<ParticleBackground />` canvas component

## Component Inventory

| Component | Status | Notes |
|---|---|---|
| `ParticleBackground` | New | Canvas-based interactive particles, replaces matrix-bg |
| `HeroSection` | Modify | Typing animation on title, parallax on hero image, CTA buttons with glow |
| `Navigation` | Modify | Frosted glass nav, smooth scroll links, active section indicator |
| `SkillCard` | Modify | 3D tilt on hover (mouse tracking), glass surface |
| `ProjectCard` | Modify | 3D tilt, hover reveal overlay, tech badge chips |
| `ExperienceSection` | Modify | Vertical timeline with scroll-triggered line draw animation |
| `SectionWrapper` | New | Scroll-triggered fade-in + slide-up for every section |
| `AnimatedCounter` | New | Numbers count up when scrolled into view (for stats) |
| `PageTransition` | New | Full-page fade/slide transition on initial load |
| `ContactSection` | Modify | Keep EmailJS form, restyle to match new tokens |
| `EducationSection` | Modify | Card layout, scroll reveal |
| `LanguagesSection` | Modify | Animated progress indicators |

## Key Interactions

- **Page load**: Staggered entrance — particles fade in, then hero text animates in word by word, then CTA buttons slide up
- **Scroll**: Each section fades + slides up into view (Framer Motion `whileInView`)
- **Project/Skill cards**: Mouse-tracked 3D tilt (perspective transform), subtle glow follows cursor
- **Navigation**: Scrollspy — active section highlighted in nav; smooth-scroll on click
- **Hero CTA**: Glow pulse animation on primary button at rest
- **Stats**: Numbers animate from 0 to value when scrolled into view

## Responsive Behavior

- **Desktop (≥1280px)**: Full layout, particle background active, 3D tilt enabled
- **Tablet (768–1279px)**: Single-column sections, particles reduced density
- **Mobile (<768px)**: Disable 3D tilt (touch devices), disable particles (performance), stack all cards, hamburger nav
- Navigation collapses to a slide-in drawer on mobile

## Accessibility Requirements

- Maintain WCAG AA contrast (4.5:1) for all text against backgrounds — violet accent on dark must be verified
- All animations respect `prefers-reduced-motion` — wrap Framer Motion variants with a motion check
- Keyboard navigation preserved across all interactive elements
- Focus rings visible and styled to match the new accent color

## Out of Scope

- Blog or articles section
- Dark/light mode toggle (dark-only)
- CMS or editable content
- Multi-language support
- Backend beyond existing EmailJS contact form
- The second CV in `public/` (cv_walid_marzouk — belongs to another person, leave untouched)
