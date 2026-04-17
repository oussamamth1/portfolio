# Build Tasks: Portfolio Redesign — Oussama Methnani

Generated from: .design/portfolio-redesign/DESIGN_BRIEF.md  
Date: 2026-04-17  
Philosophy: Obsidian Agency — deep space navy + electric violet, bold 3D animations

---

## Foundation

- [ ] **Install 3D & animation dependencies**: Add `framer-motion`, `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three` to package.json. Done when `npm run build` passes with no errors. _New packages._

- [ ] **SectionWrapper component**: Create `src/components/portfolio/SectionWrapper.tsx` — a wrapper that uses Framer Motion `whileInView` to fade-in + slide-up any section when it enters the viewport. Props: `id`, `className`, `delay`. Done when wrapping any section produces a smooth entrance on scroll. _New component._

- [ ] **useMouseTilt hook**: Create `src/hooks/useMouseTilt.ts` — tracks mouse position relative to an element and returns `rotateX`, `rotateY` values (±15deg) for 3D perspective tilt. Includes `onMouseLeave` reset with spring easing. Done when imported into a card it produces smooth 3D tilt. _New hook. Depends on: framer-motion._

---

## Core UI — 3D & Hero First

- [ ] **Three.js Particle Background**: Create `src/components/portfolio/ParticleBackground.tsx` — a `<canvas>` React component using Three.js that renders ~120 floating violet/indigo particles in 3D space. Particles drift slowly, mouse movement causes subtle parallax shift. On mobile (<768px) renders 40 particles max. Done when it runs at 60fps on desktop and replaces `.matrix-bg`. _New component. Depends on: three, @react-three/fiber._

- [ ] **HeroSection redesign**: Fully rewrite `HeroSection.tsx`. Layout: left column (name in `font-display`, Space Grotesk, `text-hero` size with `.text-gradient`; title "Mobile Developer" with typing animation via Framer Motion; 2 CTAs — "View Projects" + CV download with `animate-pulse-glow`); right column (hero photo with `animate-float` + `shadow-glow-lg`). ParticleBackground renders behind. Stats bar (4 numbers with AnimatedCounter) sits below the fold inline. Done when hero matches Obsidian Agency brief and typing animation cycles on load. _Modifies: HeroSection.tsx. Reuses: Button (shadcn), CvDownloadModal._

- [ ] **AnimatedCounter component**: Create `src/components/portfolio/AnimatedCounter.tsx` — counts from 0 to a target number when scrolled into view using Framer Motion `useMotionValue` + `useSpring`. Props: `value`, `label`, `suffix`. Done when 4 stats (Years Exp, Apps Built, Technologies, CI/CD Pipelines) count up on first scroll. _New component._

- [ ] **Navigation redesign**: Rewrite `Navigation.tsx`. Frosted glass bar (`backdrop-blur-md`, `bg-surface-card/80`), Space Grotesk font, violet active indicator underline. Scrollspy using `IntersectionObserver` to highlight current section. CV download button top-right. Mobile: hamburger → full-screen slide-in overlay (Framer Motion `AnimatePresence`). Done when active section updates on scroll and mobile drawer opens/closes smoothly. _Modifies: Navigation.tsx._

- [ ] **SkillsSection (new full section)**: Create `src/components/portfolio/SkillsSection.tsx`. Replace `SkillsMatrixModal`. Grid of skill cards — each card uses `useMouseTilt` for 3D perspective tilt on hover. Each card shows: icon (Lucide or SVG), skill name, proficiency level as an animated bar (fills on scroll-in). Groups: Flutter/Dart, State Management, Firebase, Backend (NestJS), CI/CD, Tools. Done when skills are visible without opening a modal and cards tilt in 3D on hover. _New component. Replaces: SkillsMatrixModal (modal kept for backwards compat but section is primary). Depends on: useMouseTilt, SectionWrapper._

- [ ] **ExperienceSection (rename + redesign)**: Rewrite `InternshipsSection.tsx` → rename file to `ExperienceSection.tsx`. Vertical timeline layout: left SVG line that draws itself with `animate-draw-line` on scroll-in (Framer Motion path animation). Each entry is a glass card with company name, role, dates, bullet points. ContinuousNet entry is the only one — layout should gracefully handle future entries. Done when timeline line draws in on scroll and card animates in from the right. _Modifies: InternshipsSection.tsx. Reuses: SectionWrapper._

- [ ] **ProjectsSection redesign**: Rewrite `ProjectsSection.tsx`. Grid of 3 cards (BITin, Sunshine, Zenify Trip). Each card uses `useMouseTilt` for 3D tilt. Card face: app screenshot/thumbnail, title, tech badge chips. On hover: overlay slides up revealing description + links (GitHub, live). Done when cards tilt in 3D and hover overlay animates in smoothly. _Modifies: ProjectsSection.tsx. Depends on: useMouseTilt, SectionWrapper._

- [ ] **AboutSection (rename MotivationSection)**: Rewrite `MotivationSection.tsx` → AboutSection. 2-column layout: left is a short bio paragraph (from CV profile), right is a soft 3D rotating icon/visual (Framer Motion `rotateY` loop or Three.js mini scene). Spoken languages (French, Arabic, English) shown as small badge chips inline. Done when section reads as professional "About Me" not motivational text. _Modifies: MotivationSection.tsx. Reuses: SectionWrapper, Badge (shadcn)._

- [ ] **EducationSection redesign**: Rewrite `EducationSection.tsx`. Two cards side by side (Master + Licence). Each glass card with institution name, degree, dates, scroll-triggered entrance with staggered delay. Done when both cards animate in with 100ms stagger. _Modifies: EducationSection.tsx. Reuses: SectionWrapper._

- [ ] **ContactSection redesign**: Restyle `ContactSection.tsx` to match new tokens. Glass card wrapping the form. Violet focus rings on inputs. Submit button with `animate-pulse-glow`. Keep EmailJS logic untouched. Done when form looks premium and submits correctly. _Modifies: ContactSection.tsx. Reuses: ContactForm, Button, Input, Textarea (shadcn)._

- [ ] **PortfolioLayout rewire**: Update `PortfolioLayout.tsx` with new section order (Hero → Skills → Experience → Projects → About → Education → Contact), new section IDs matching IA anchor map, import renamed/new components. Done when all sections render in correct order with no broken imports. _Modifies: PortfolioLayout.tsx._

---

## Interactions & States

- [ ] **Page entrance animation**: In `src/main.tsx` or a `PageTransition` wrapper — staggered load sequence: particles fade in (0ms), hero text slides up (300ms), CTA buttons appear (600ms). Use Framer Motion `variants` with `staggerChildren`. Done when initial page load has a cinematic entrance. _New: PageTransition.tsx. Depends on: framer-motion._

- [ ] **3D floating device scene** *(optional enhancement)*: Add a `FloatingDevice.tsx` using `@react-three/drei` `<Float>` component rendering a stylized phone frame with a screenshot of one of Oussama's apps inside. Replaces the static hero photo or sits beside it. Done when the phone floats and rotates gently in 3D in the hero. _New component. Depends on: @react-three/drei._

---

## Responsive & Polish

- [ ] **Mobile responsiveness pass**: Check every section at 375px and 768px. Disable 3D tilt on touch devices (`ontouchstart` detection). Reduce particle count. Navigation drawer works. Done when no horizontal scroll and all sections are readable on iPhone SE size. _Modifies: multiple components._

- [ ] **Accessibility & reduced-motion pass**: Wrap all Framer Motion animations in `useReducedMotion()` check. Add `aria-label` to icon-only buttons. Verify violet on dark meets WCAG AA (4.5:1). Add `id` anchors to all sections for keyboard scroll-nav. Done when Lighthouse accessibility score ≥ 90. _Modifies: multiple components._

- [ ] **Performance pass**: Lazy-load ParticleBackground with `React.lazy` + `Suspense`. Add `loading="lazy"` to project images. Check bundle size with `vite build --analyze` equivalent. Done when initial JS bundle is reasonable and Three.js only loads when needed. _Modifies: PortfolioLayout.tsx, ParticleBackground.tsx._

---

## Review

- [ ] **Design review**: Run `/design-review` against the brief once all sections are built.
