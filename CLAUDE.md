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
src/
  App.tsx              # Root — owns selectedSkills state and theme
  components/
    Navbar.tsx         # Fixed top navbar with active-section highlight
    Hero.tsx           # Full-screen hero with glitch h1 + typing subtitle
    Section.tsx        # Wrapper: IntersectionObserver fade-in, max-w-4xl
    About.tsx          # Bio, awards, education
    Skills.tsx         # Filterable skill grid — emits toggle events up
    Experience.tsx     # Work experience — dims when skill filter active
    Projects.tsx       # Projects — dims when skill filter active
    Leadership.tsx     # Leadership roles
    Certifications.tsx # Linked certificates and badges
    Contact.tsx        # Email, LinkedIn, GitHub
    ThemeToggle.tsx    # Floating dark/light toggle button
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
`onToggleSkill(key)` to add/remove from the set. `Experience` and `Projects`
receive the set and apply `.dimmed` (opacity 0.25) to cards whose
`data-skills` don't intersect the selection.

## Asset Paths

All public assets must be referenced via `import.meta.env.BASE_URL` so they
resolve correctly in both dev (`/`) and GitHub Pages (`/Personal-Website/`).
Example: `` `${import.meta.env.BASE_URL}Kartike.jpg` ``

## Design Notes

- **Display font**: "Press Start 2P" — hero h1 only
- **Body font**: "Share Tech Mono" (with Hacker + monospace fallbacks)
- **Accent**: `#00fcfd` (neon cyan)
- **Accent green**: `#00ff34` — used for skills/tags in cards
- **Glitch animation**: `.glitch` class on hero h1, using `::before`/`::after`
  with `clip-path` animations defined in `index.css`

## Content Updates

All site content lives in `src/data/index.ts`. To update projects, experience,
skills, etc., edit that file only — no component changes needed.
