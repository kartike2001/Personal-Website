# Personal Website

React + TypeScript portfolio site deployed to GitHub Pages:
`https://kartike2001.github.io/Personal-Website/`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

```text
src/
  components/
    common/      Shared UI primitives
    hero/        Hero-specific components and effects
    layout/      Navbar, filter bar, scroll progress, theme toggle
    sections/    Page sections
  data/          Centralized portfolio content
  hooks/         Shared React hooks
  types/         Shared TypeScript interfaces
public/          GitHub Pages assets served by Vite
assets/          Source/editable assets not served directly
archive/         Legacy pre-React site files kept for reference
```

All portfolio content should be edited in `src/data/index.ts`. Public asset
paths must use `import.meta.env.BASE_URL` in components.
