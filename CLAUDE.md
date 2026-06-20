# Kartike Chaurasia — Personal Portfolio

React + TypeScript portfolio site deployed to GitHub Pages at
`https://kartike2001.github.io/Personal-Website/`.

## Tech Stack

| Layer      | Choice                              |
|------------|-------------------------------------|
| Framework  | React 18 + TypeScript (Vite)        |
| Styling    | Tailwind CSS + CSS custom properties|
| Deployment | GitHub Actions → GitHub Pages       |

## Dev Commands

```bash
npm install       # First-time setup
npm run dev       # Dev server → http://localhost:5173/Personal-Website/
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

Deployment is automatic: push to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages.

## Project Structure

```
assets/
  resume/              # Source resume files, e.g. DOCX/PDF before publishing
  source/              # Source copies of images/docs duplicated in public/
archive/
  legacy-site/         # Old pre-React static site files kept for reference
src/
  App.tsx              # Root — owns selectedSkills state and theme
  components/
    common/            # Shared section/scramble primitives
    hero/              # Hero and hero-specific visual effects
    layout/            # Navbar, filter bar, scroll progress, theme toggle
    sections/          # About, skills, experience, projects, etc.
  data/
    index.ts           # ALL static content (skills, projects, experience…)
  hooks/
    useTheme.ts        # Reads/writes localStorage, sets data-theme on <html>
    useTypingAnimation.ts  # Type/delete loop for hero subtitle
    useActiveSection.ts    # IntersectionObserver for navbar highlight
  types/
    index.ts           # Shared TypeScript interfaces
  index.css            # Tailwind directives + CSS custom properties + animations
public/
  hero-dark.gif        # Hero background (dark mode)
  hero-light.gif       # Hero background (light mode)
  Kartike.jpg          # Profile photo (dark mode)
  Kartike2.jpg         # Profile photo (light mode)
  resume.pdf           # Resume (renamed from "Kartike Chaurasia Resume.pdf")
  LORs.pdf             # Letters of Recommendation
  *.png                # Social icons (GitHub dark/light, LinkedIn, sun, moon)
  .nojekyll            # Prevents GitHub Pages from running Jekyll
```

## Theme System

- Default: dark mode
- Toggle stored in `localStorage` as `'dark'` or `'light'`
- Applied as `data-theme="dark|light"` on `<html>`
- All colors are CSS custom properties in `src/index.css` — see `:root` and
  `[data-theme="light"]` blocks. No Tailwind dark: variants needed.

## Skill Filtering

`selectedSkills: Set<string>` lives in `App.tsx`. `Skills` calls
`onToggleSkill(key)` to add/remove from the set. `FilterBar` stays fixed under
the navbar when filters are active. `Experience` and `Projects` receive the set
and apply `.dimmed` to cards whose skills don't intersect the selection.

## Asset Paths

All public assets must be referenced via `import.meta.env.BASE_URL` so they
resolve correctly in both dev (`/`) and GitHub Pages (`/Personal-Website/`).
Example: `` `${import.meta.env.BASE_URL}Kartike.jpg` ``

## Design Notes

- **Body font**: `JetBrains Mono`
- **Accent**: theme-driven custom properties in `src/index.css`
- **Hero name/image effect**: `ScrambleText` and `ScrambleImage` decrypt into
  their final state on boot and hover

## Content Updates

All site content lives in `src/data/index.ts`. To update projects, experience,
skills, etc., edit that file only — no component changes needed.

To publish a new resume, replace `public/resume.pdf`. Keep editable/source
copies in `assets/resume/`.
