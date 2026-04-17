# Information Architecture: Oussama Methnani Portfolio

## Site Map

Single-page application. All content lives at `/` via anchor-scroll. No sub-routes except the 404 fallback.

- `/` — Full portfolio (single scrolling page)
  - `#hero` — Name, title, CTA
  - `#about` — Profile summary (currently MotivationSection)
  - `#skills` — Tech stack (currently embedded in HeroSection modal → promote to full section)
  - `#experience` — Work history (currently InternshipsSection)
  - `#projects` — App portfolio (ProjectsSection)
  - `#education` — Degrees (EducationSection)
  - `#contact` — Contact form (ContactSection)
- `*` — NotFound page (keep as-is)

## Navigation Model

- **Primary navigation**: Fixed top bar with logo + 6 anchor links: About · Skills · Experience · Projects · Education · Contact
- **Scrollspy**: Active section highlighted as user scrolls — uses `IntersectionObserver`
- **Utility**: CV download button (top-right), always visible
- **Mobile navigation**: Hamburger → full-screen slide-in overlay with the same 6 links + CV button. Closes on link tap.
- **No secondary nav** — portfolio is flat, one depth level

## Content Hierarchy

### Section Order (Recruiter-Optimized)

Recruiters scan in this order: who you are → what you know → where you worked → what you built → credentials.

| # | Section | Anchor | Rationale |
|---|---|---|---|
| 1 | Hero | `#hero` | Name, title, photo, primary CTA — immediate impression |
| 2 | Stats | (inline below hero) | 4 years exp, X apps shipped, X skills — scannable numbers |
| 3 | About | `#about` | 3-line profile summary — the human behind the CV |
| 4 | Skills | `#skills` | Flutter, Dart, Firebase, NestJS — recruiter's checklist |
| 5 | Experience | `#experience` | ContinuousNet timeline — the most credibility-building section |
| 6 | Projects | `#projects` | BITin, Sunshine, Zenify Trip — proof of work |
| 7 | Education | `#education` | Master + Licence — credentials |
| 8 | Languages | (inline in About or Skills) | Spoken languages — merge, not a standalone section |
| 9 | Contact | `#contact` | Always last — conversion point |

**Key change from current order**: Skills is promoted to a full section (currently hidden behind a modal). Languages is merged into Skills or About — not worth its own section. Stats stays inline below the hero fold rather than as a separate section break.

## User Flows

### Primary Flow: Recruiter evaluating a candidate

1. Recruiter lands on `#hero` via LinkedIn or job board link
2. Sees: name, "Mobile Developer", professional photo, particle background, CV download button
3. **Decision**: Does this person look senior? → YES: scrolls down / NO: bounces
4. Scrolls through Stats → reads "4 years · Flutter · Firebase · CI/CD"
5. Jumps to `#skills` via nav or scrolls naturally
6. Reads skill grid — confirms Flutter/Dart depth, sees Firebase and NestJS
7. Scrolls to `#experience` — reads ContinuousNet timeline bullet points
8. Scrolls to `#projects` — hovers project cards, clicks to view details
9. **Decision**: Worth contacting? → YES: clicks `#contact` or downloads CV
10. Fills contact form → EmailJS sends message

### Secondary Flow: Developer checking out the portfolio

1. Lands via GitHub profile link
2. Skips to `#projects` via nav
3. Inspects project cards, checks tech badges
4. Clicks GitHub links on project cards (opens external)
5. May visit LinkedIn via footer/hero social links

## Naming Conventions

| Concept | Label in UI | Notes |
|---|---|---|
| Work history | Experience | Not "Internships" — he is a full professional, not an intern |
| Spoken languages | Languages | Keep label, merge into Skills section visually |
| Profile summary | About | Not "Motivation" — cleaner, recruiter-familiar term |
| Tech competencies | Skills | Simple, universal |
| Portfolio items | Projects | Not "Portfolio" — avoids nesting confusion |
| Stats bar | *(no nav label)* | Inline between Hero and About, not a separate nav item |

## Component Reuse Map

| Component | Used on | Notes |
|---|---|---|
| `SectionWrapper` | All sections | Provides scroll-triggered fade-in + slide-up, `id` anchor, padding |
| `Navigation` | Fixed on all scroll positions | Scrollspy state, mobile drawer |
| `ParticleBackground` | Hero only | Canvas performance — not repeated on every section |
| `SkillCard` / `ProjectCard` | Skills, Projects | 3D tilt behavior shared via hook |

## Content Growth Plan

- **Projects**: Most likely to grow. Cards layout already handles N items — no pagination needed until 8+ projects.
- **Experience**: Fixed for now (one employer). When a second job is added, the timeline component naturally extends.
- **Everything else**: Static — no growth architecture needed.

## URL Strategy

- All content at `/` — anchor hash navigation only (`#hero`, `#about`, `#skills`, etc.)
- No dynamic segments, no query parameters
- CV download stays as a static file at `/Oussama_Methnani.pdf`
- Social links open in `_blank` (LinkedIn, GitHub)
