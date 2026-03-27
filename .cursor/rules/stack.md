---
description: Global stack and conventions for all design_space.studio projects
alwaysApply: true
---

_Global rules for all design_space.studio projects. Apply to every session._

## Identity

You are building products for design_space.studio. Every output should reflect high craft — clean, intentional, minimal. We are designers who code, not developers who design.

## Tech stack

Always use this stack unless explicitly told otherwise:

- Framework: Next.js (app router)
- Styling: Tailwind CSS
- Components: Shadcn/ui — always prefer Shadcn over custom. Only build custom if Shadcn can't cover it.
- Icons: Phosphor Icons (@phosphor-icons/react)
- Database + storage: Supabase (local instance via Docker for local-only apps)
- Language: TypeScript throughout

## Design tokens

- All colors, radii, spacing, and typography tokens are defined as CSS variables in `src/styles/index.css`
- A `design.md` file in the repo root documents what those tokens are in human+AI readable form — read it before building any UI
- Never hardcode hex values, pixel radii, or font sizes directly in components
- Always use CSS variables. If a variable doesn't exist yet, add it to `index.css` first, then use it.
- Never import a stylesheet inside a component file — all styles are global

## Folder structure

```
( repo root )
PRD.md                    # What we're building and why — template + placeholders
project_context.md        # Background, decisions, team — template + placeholders
design.md                 # Visual tokens and brand guidelines
CHANGELOG.md            # What changed when and why (see Changelog discipline)
src/
  app/                    # Next.js app router — pages and layouts
    (routes)/             # Route groups
    layout.tsx            # Root layout (fonts, global providers)
    page.tsx              # Home page
  components/
    ui/                   # Shadcn components — never modify these directly
    custom/               # Your built components (one folder per component)
      [ComponentName]/
        index.tsx
    shared/               # Structural layout components reused across pages
      AppShell/           # Outer wrapper: sidebar + topbar
      PageHeader/         # Reusable page title + subtitle + action area
      SidebarNav/         # Navigation
  lib/
    supabase.ts           # Supabase client (singleton)
    utils.ts              # Shared utility functions
    hooks/                # Custom React hooks
  styles/
    index.css             # CSS variables (design tokens) — source of truth
  types/
    index.ts              # Shared TypeScript types and interfaces
public/
  assets/
    images/               # Static images
    icons/                # Custom SVG icons if needed
```

## Naming conventions

- Components: PascalCase (`NoteCard`, `AudioPlayer`)
- Files: PascalCase for components, camelCase for utils and hooks (`useTimestamp.ts`, `formatTime.ts`)
- Hooks: always prefix with `use` (`useRecording`, `useNotes`)
- Supabase tables: snake_case (`note_sessions`, `audio_files`)
- CSS variables: kebab-case with semantic names (`--color-accent`, `--radius-card`)
- Props interfaces: `[ComponentName]Props` (`NoteCardProps`)

## Supabase setup (local)

All apps default to local Supabase. No data leaves the machine.

1. Init:        supabase init
2. Start:       supabase start
3. Client:      create singleton in src/lib/supabase.ts

Standard client file:

```ts
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)
```

Always store Supabase credentials in `.env.local` (never hardcoded).

Always add `.env.local` to `.gitignore`.

When creating new tables, also create a corresponding TypeScript type in `src/types/index.ts`.

## General rules

- Never create a new component without first checking `src/components/custom/` for something similar
- Prefer extending an existing component with a new prop over creating a duplicate
- Keep components small and single-purpose — if a component exceeds ~150 lines, consider splitting it
- All async data fetching goes in server components or custom hooks — not directly in UI components
- Always handle loading and error states
- Dark mode first — every component must work on a dark background

## How to read project context

At the start of every session, read these files if present:

1. `design.md` — visual tokens and brand guidelines
2. `PRD.md` — what we're building and why
3. `project_context.md` — background, decisions, team context

These are your source of truth. If something in your training conflicts with these files, defer to the files.

## Changelog discipline

A `CHANGELOG.md` lives in the root of every project. Update it when:
- A new package is added (note why)
- A design token changes (note what and why)
- A cursor rule or command is modified
- A scope or architecture decision is made mid-project
- Something was tried and abandoned (especially valuable)

Format each entry as:
`[YYYY-MM-DD] [type] description`

Types: `added` / `changed` / `removed` / `decided`

Example:
`[2026-03-27] decided — cut transcription from week 1, focus on timestamp sync core loop first`

Keep entries short. One line is enough. The goal is context for future sessions, not documentation for documentation's sake.