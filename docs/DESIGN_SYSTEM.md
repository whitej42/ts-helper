# Design System — TS Dest Codes

Inspired by UK rail infrastructure: Network Rail signage, National Rail departure boards, and TOC branding.

---

## Colour Palette

### Core Rail Colours

| Token | Hex | Usage |
|---|---|---|
| `rail-navy` / `rail-navy-500` | `#003087` | Primary brand colour. Navbar, primary buttons, headings, borders. Network Rail blue. |
| `rail-navy-700` | `#001A58` | Hover states on navy elements, sidebar background. |
| `rail-navy-900` | `#000828` | Darkest navy — footer, deepest backgrounds in dark mode. |
| `rail-red` | `#C00E14` | Destructive actions, signal/warning states, AP publisher tag, accent stripe on hero. UK signal red. |
| `rail-amber` | `#F5A623` | Highlight, active states, dark-mode accent, warning indicators. Network Rail yellow. |
| `rail-amber-light` | `#FFD700` | Bright accent — departure board numbers, focus rings in dark mode. |
| `rail-cream` | `#F8F5EE` | Light mode page background. Warm off-white — aged railway paper. |

### Surfaces (Dark Mode)

| Token | Hex | Usage |
|---|---|---|
| `surface-dark` | `#0D1B2A` | Dark mode page background. Deep navy-charcoal. |
| `surface-dark-card` | `#162435` | Dark mode card / panel background. |
| `surface-dark-alt` | `#1F3348` | Dark mode secondary surfaces, sidebar. |
| `surface-dark-border` | `#2A3F54` | Dark mode borders and dividers. |

### Light Mode Surfaces
Use Tailwind's built-in `white`, `gray-50`, `gray-100` for light mode surfaces. `rail-cream` for the page background.

### Publisher Tags

| Token | Hex | Publisher |
|---|---|---|
| `publisher-ap` | `#C00E14` | Armstrong Powerhouse |
| `publisher-dovetail` | `#1D6FA4` | Dovetail Games |
| `publisher-thomson` | `#7B2D8B` | Thomson Interactive |
| `publisher-jt` | `#2D7D3A` | Just Trains |
| `publisher-unspecified` | `#6B7280` | Unknown / Unspecified |

---

## Typography

### Font Stack
`font-rail` / `font-sans` → `"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif`

This approximates the condensed, authoritative sans-serif of Transport and Gill Sans used in UK rail signage — without requiring a custom font download.

`font-mono` → `"Courier New", Courier, monospace` — used for headcode display.

### Scale

| Class | Size | Usage |
|---|---|---|
| `text-display` | 3.5rem, tight tracking, bold | Hero headings only |
| `text-board` | 2rem, wide tracking (0.06em), bold | Departure board numbers, major section titles |
| `text-board-sm` | 1.25rem, rail tracking, bold | Card titles, panel headings |
| `text-4xl` + `font-bold` | Standard Tailwind | Page headings (h1) |
| `text-xl` + `font-semibold` | Standard Tailwind | Section headings (h2) |
| `text-sm` | Standard Tailwind | Tags, metadata, secondary text |

### Tracking Utilities

| Class | Value | Usage |
|---|---|---|
| `tracking-board` | 0.10em | Departure board style, headcodes |
| `tracking-rail` | 0.04em | Signage headings |
| `tracking-tight` | -0.01em | Large display text |

---

## Shadows

| Class | Usage |
|---|---|
| `shadow-card` | Default card resting state |
| `shadow-card-hover` | Card on hover (light mode) |
| `shadow-dark-card` | Default card in dark mode |
| `shadow-dark-card-hover` | Card hover in dark mode |
| `shadow-rail` | Buttons, interactive elements with navy tint |
| `shadow-board` | Inset shadow for departure board / number display |

---

## Border Radius

| Class | Value | Usage |
|---|---|---|
| `rounded-rail` | 2px | Buttons, tags, badges — minimal, industrial |
| `rounded-card` | 4px | Cards, panels — slightly softer |
| `rounded` | 4px (Tailwind default) | General use |

---

## Dark Mode

Dark mode uses Tailwind's `class` strategy — a `dark` class on `<html>` enables all `dark:` variants.

**Defaults to system preference** (`prefers-color-scheme: dark`) on first visit.
**Manual override** is stored in `localStorage` under key `theme`.

### Rules
- Light mode background: `bg-rail-cream` (page), `bg-white` (cards/surfaces)
- Dark mode background: `bg-surface-dark` (page), `bg-surface-dark-card` (cards)
- Light mode text: `text-rail-navy-900` (primary), `text-gray-600` (secondary)
- Dark mode text: `text-gray-100` (primary), `text-gray-400` (secondary)
- Borders light: `border-gray-200`
- Borders dark: `border-surface-dark-border`
- Always include both: `bg-white dark:bg-surface-dark-card`

---

## Animations

| Class | Usage |
|---|---|
| `animate-slide-in-right` | Detail panel opening (Destinations sidebar) |
| `animate-slide-out-right` | Detail panel closing |
| `animate-fade-in` | Overlays, tooltips, dropdowns |

---

## Component Conventions

### Buttons — Primary
```
bg-rail-navy text-white font-bold tracking-rail rounded-rail px-4 py-2
hover:bg-rail-navy-700 transition-colors
dark:bg-rail-amber dark:text-rail-navy-900 dark:hover:bg-rail-amber-dark
```

### Buttons — Destructive
```
bg-rail-red text-white font-bold rounded-rail px-4 py-2
hover:bg-rail-red-dark transition-colors
```

### Cards
```
bg-white dark:bg-surface-dark-card
border border-gray-200 dark:border-surface-dark-border
rounded-card shadow-card hover:shadow-card-hover
dark:shadow-dark-card dark:hover:shadow-dark-card-hover
transition-shadow
```

### Publisher Tags
```
text-xs font-bold tracking-rail uppercase rounded-rail px-2 py-0.5 text-white
bg-publisher-{name}
```

### Page Headings (h1)
```
text-4xl font-bold tracking-rail font-rail text-rail-navy dark:text-white
border-b-4 border-rail-red pb-2
```

### Section Headings (h2)
```
text-xl font-semibold tracking-rail text-rail-navy dark:text-rail-amber uppercase
```

---

## Spacing Reference

Extra tokens beyond Tailwind defaults:

| Token | Value | Usage |
|---|---|---|
| `18` | 4.5rem | Navbar height |
| `22` | 5.5rem | Generous section padding |
| `88` | 22rem | Detail panel / sidebar width |
