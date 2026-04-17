# Design Tokens: Obsidian Agency

**Philosophy**: Dark-only premium agency portfolio — deep space navy foundations, electric violet signature accent, glass-morphism surfaces, generous motion budget.

**Applied to**: `src/index.css` (CSS variables) + `tailwind.config.ts` (Tailwind extensions)

---

## Color Palette

### Backgrounds (dark → light)
| Token | HSL | Hex approx | Usage |
|---|---|---|---|
| `--background` | `240 25% 4%` | `#070714` | Page background |
| `--card` | `243 22% 8%` | `#10101f` | Card surfaces |
| `--surface-elevated` | `245 20% 12%` | `#181828` | Modals, nav |
| `--surface-hover` | `247 18% 16%` | `#1f1f30` | Hover states |

### Accent Colors
| Token | HSL | Usage |
|---|---|---|
| `--primary` / `--violet` | `262 83% 68%` | Primary CTAs, highlights, glows |
| `--violet-bright` | `262 83% 78%` | Hover states on violet elements |
| `--violet-dim` | `262 60% 20%` | Badge backgrounds, tinted wells |
| `--accent` / `--indigo` | `230 68% 62%` | Secondary highlights, gradient endpoint |

### Text
| Token | HSL | Usage |
|---|---|---|
| `--foreground` | `0 0% 95%` | Primary text |
| `--muted-foreground` | `240 12% 58%` | Labels, secondary text |

### Borders
| Token | HSL | Usage |
|---|---|---|
| `--border` | `243 20% 17%` | Card borders |
| `--glass-border` | `262 40% 40%` | Glass card borders (use at 0.2 opacity) |

---

## Typography

| Token | Value |
|---|---|
| `--font-display` | Space Grotesk — headings, nav, labels |
| `--font-body` | Inter — body text, descriptions |
| `--font-mono` | JetBrains Mono — code, tech badges |

**Type scale**: `xs` (12) → `sm` (14) → `base` (16) → `md` (18) → `lg` (20) → `xl` (24) → `2xl` (30) → `3xl` (36) → `4xl` (48) → `5xl` (60) → `hero` (clamp 40→80, fluid)

**Letter spacing**: `-0.02em` on all headings (Space Grotesk tightened)

---

## Motion

| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | `150ms` | Hover transitions |
| `--duration-normal` | `250ms` | UI state changes |
| `--duration-slow` | `400ms` | Section reveals |
| `--duration-slower` | `600ms` | Page-level transitions |
| `--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard |
| `--easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Card entrance |
| `--easing-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Button press |

### Named Animations (Tailwind + Framer Motion)
| Name | Usage |
|---|---|
| `fade-up` | Section scroll reveals |
| `fade-in` | Overlay/modal entrance |
| `pulse-glow` | CTA button at rest |
| `float` | Hero image subtle movement |
| `draw-line` | Timeline SVG line animation |
| `shimmer` | Skeleton loading states |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-glow` | `0 0 30px violet/25%` | Cards on hover |
| `--shadow-glow-lg` | `0 0 60px + 120px violet` | Hero image, active CTA |
| `--shadow-card` | `0 8px 40px black/60%` | Default card depth |

---

## Utility Classes (index.css)

| Class | Effect |
|---|---|
| `.glass` | Frosted glass card (backdrop-filter + border) |
| `.glow-violet` | Apply shadow-glow to any element |
| `.text-gradient` | Violet→indigo gradient text fill |
| `.section-container` | Centered section with standard padding |
| `.particle-bg` | Hero wrapper with radial gradient overlay |

---

## What Changed from Previous Tokens

| Before (hacker) | After (Obsidian Agency) |
|---|---|
| `--cyber-green: 120 100% 50%` | Removed entirely |
| `--terminal-green` | Removed |
| Neon green glows | Electric violet glows |
| Matrix grid background class | Particle background class |
| System font | Space Grotesk (display) + Inter (body) |
| No motion tokens | Full motion scale added |
| No glass utilities | `.glass`, `.glow-violet`, `.text-gradient` |
