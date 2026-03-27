# Visual design — design_space.studio

This file is the **human- and AI-readable** description of how this product should look and feel. The **implementation** of tokens lives in `src/styles/index.css` (CSS variables). When you add or change a visual rule here, **mirror it in `index.css`** and use variables in components — never one-off hex values or pixel radii in JSX.

**Principles:** high craft, intentional, minimal. Dark backgrounds first; every surface and text choice must stay legible in dark mode.

---

## Brand & mood

- **Personality:** _(e.g. calm, precise, editorial — fill in)_
- **What to avoid:** _(e.g. loud gradients, generic “SaaS purple”, cramped density — fill in)_

---

## Color

Document **semantic roles**, not only raw hues. Each role should map to a CSS variable in `index.css` (e.g. `--color-background`, `--color-foreground`, `--color-accent`).

| Role | Usage | CSS variable |
|------|--------|--------------|
| Background | Page / app canvas | `--color-...` |
| Surface | Cards, panels, elevated areas | `--color-...` |
| Foreground | Primary text | `--color-...` |
| Muted | Secondary / helper text | `--color-...` |
| Border | Dividers, outlines | `--color-...` |
| Accent | Primary actions, highlights | `--color-...` |
| Accent foreground | Text on accent | `--color-...` |
| Destructive | Errors, dangerous actions | `--color-...` |

_Add rows as needed (e.g. success, warning)._

---

## Typography

- **Font families:** _(e.g. display vs body — match what’s loaded in `app/layout.tsx`)_
- **Scale:** Use tokens for sizes (e.g. `--text-*` or Tailwind theme mapped to variables). List the intended hierarchy: display, title, body, caption, label.
- **Rules:** max line length for readability, when to use uppercase or tabular figures, etc.

---

## Spacing & layout

- **Base unit / rhythm:** _(e.g. 4px grid, spacing scale)_
- **Page padding, section gaps, card padding:** reference variables (e.g. `--spacing-*`).
- **Max content width** for readable columns (if applicable).

---

## Radius & elevation

- **Corner radii:** buttons, inputs, cards — each maps to a variable (e.g. `--radius-sm`, `--radius-card`).
- **Shadows / borders:** when to use border vs shadow; keep elevation minimal unless specified.

---

## Icons & imagery

- **Icons:** Phosphor (`@phosphor-icons/react`) — prefer weights/styles consistent across the app _(e.g. regular vs bold)_.
- **Images:** treatment (corners, overlays), placeholder policy, aspect ratios if relevant.

---

## Motion

- **Duration / easing:** defaults for hover, focus, page transitions.
- **Respect** `prefers-reduced-motion` where motion is decorative.

---

## Components (Shadcn)

- **Baseline:** Shadcn/ui components should be **themed via CSS variables** from `index.css`, not one-off overrides in every file.
- **Custom components** live under `src/components/custom/` and still consume the same tokens.

---

## Changelog (optional)

Brief notes when tokens or rules change, so humans and AI sessions stay aligned.

| Date | Change |
|------|--------|
| _(add rows)_ | |
