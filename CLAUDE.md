# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**`npm install` will fail** — the project lives on a Google Drive path which causes npm tar write errors. Use the globally installed `vite` instead:

```bash
# Dev server (keep running, then open http://localhost:5173)
vite

# Production build
vite build

# Preview production build
vite preview
```

The `vite.config.js` intentionally does **not** import from `'vite'` (plain object export) to avoid the local node_modules resolution issue.

## Architecture

This is a vanilla JS SPA for **EasyBIM Innovative Engineering Ltd.** — a Hebrew-language, RTL portfolio site.

**Entry flow:** `index.html` → `src/main.js` → `src/app.js` (exports `setupApp(element)`) → injects full page HTML into `#app`.

All page content lives in a single `setupApp()` function in [src/app.js](src/app.js) as a template literal. Four init functions run after injection:
- `initScrollEffects()` — IntersectionObserver drives `.reveal` → `.is-visible` CSS transitions
- `initNav()` — scroll listener toggles `.nav--scrolled` (transparent → frosted glass); burger menu for mobile
- `initForm()` — contact form submit handler (client-side only, no backend)
- `initSmoothScroll()` — offset-aware smooth scroll accounting for fixed nav height

**RTL:** `<html lang="he" dir="rtl">` — all text is Hebrew. CSS uses `border-left` (not `border-right`) for separators and `transform-origin: right` for card animations.

## Brand & Design

- **Colors:** `#000000` (black), `#44b8d3` (teal), `#1e248c` (navy) — defined as CSS custom properties in `:root`
- **Fonts:** Heebo (primary, loaded from Google Fonts — supports Hebrew) + Josefin Sans (eyebrow labels)
- **Logos:** `public/easybim_logo-w.png` (nav + footer), `public/easybim_icon-b.png` (blueprint visual + favicon). Source files are in `_docs/`.
- **Design reference:** Apple product pages — full-viewport sections, large bold type, scroll-reveal animations, alternating dark/light sections
