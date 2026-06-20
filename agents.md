# Agent Instructions — Personal Portfolio

This file gives Claude Code agents working on this repo the context they need
to make good decisions without asking repeated questions.

## What this repo is

Kartike Chaurasia's personal portfolio — a React + TypeScript SPA deployed to
GitHub Pages. The live URL is `https://kartike2001.github.io/Personal-Website/`.

## Non-negotiables

- **Must work on GitHub Pages** (static files only, no server-side code).
- **Base URL is `/Personal-Website/`** — always use `import.meta.env.BASE_URL`
  when constructing asset paths. Never hardcode `/Personal-Website/`.
- **All content lives in `src/data/index.ts`** — do not scatter content strings
  into components.
- **No jQuery, no Bootstrap JS, no CDN scripts** — the old site used these;
  the React version does not.

## Aesthetic rules

- Hacker / terminal aesthetic: black background, neon cyan (`#00fcfd`), neon
  green (`#00ff34`), monospace fonts.
- Display font is "Press Start 2P" — hero `<h1>` only. Do not use it anywhere else.
- Body font is "Share Tech Mono". Keep it monospace throughout.
- Light mode exists (toggled via `data-theme="light"` on `<html>`) — every
  color change must have a light-mode equivalent in the CSS custom properties.
- The glitch animation on the hero h1 is intentional — do not remove it.

## State architecture

- `selectedSkills: Set<string>` and `toggleSkill` live in `App.tsx`.
  Pass them down as props. Do not introduce a context or state library for this.
- `theme` comes from the `useTheme` hook — do not duplicate theme logic.

## Component conventions

- Each page section has its own component in `src/components/`.
- Every section is wrapped in the `<Section>` component (provides scroll
  fade-in and consistent max-width).
- Collapsible sections use local `useState(true)` — open by default.

## Adding new content

1. Add the data to the appropriate exported array in `src/data/index.ts`.
2. Add the TypeScript interface to `src/types/index.ts` if needed.
3. The component will render it automatically — no component edits needed
   for pure content additions.

## Styling conventions

- Use Tailwind utility classes for layout and spacing.
- Use CSS custom properties (`var(--accent)`, `var(--text)`, etc.) for all
  colors — never hardcode hex values in components.
- Named CSS classes (`.card-hacker`, `.skill-box`, `.btn-hacker`, etc.) are
  defined in `src/index.css` — use them for consistent component styling.
- For new reusable styles, add them to `src/index.css`. Do not create
  separate CSS files or CSS modules.

## Deployment

Pushing to `main` auto-deploys via `.github/workflows/deploy.yml`. The workflow
runs `npm ci && npm run build` and uploads `dist/` to GitHub Pages.

To deploy manually: push to main (or trigger the workflow from GitHub Actions UI).

## Common tasks

**Update resume**: Replace `public/resume.pdf`.

**Update profile photo**: Replace `public/Kartike.jpg` (dark) and/or
`public/Kartike2.jpg` (light).

**Add a new project**: Append a `ProjectEntry` object to the `projects` array
in `src/data/index.ts`.

**Add a skill**: Append a `SkillEntry` to the appropriate category in
`skillCategories` in `src/data/index.ts`. The `key` must match the
`data-skills` values used in Experience and Projects entries.

**Add a section**: Create a new component in `src/components/`, wrap content
in `<Section id="...">`, add the id to `SECTION_IDS` in `App.tsx`, and add a
nav link to the `NAV_LINKS` array in `Navbar.tsx`.
