# Key Family Website

Personal site for the Key family, deployed at [keyfamily.vercel.app](https://keyfamily.vercel.app).

- `/` — family homepage
- `/ethankey` — Ethan's portfolio

## Stack

- [Next.js 15](https://nextjs.org) (App Router) · React 19 · TypeScript
- Tailwind CSS 3 — themed via semantic CSS variables (see Theming)
- Deployed on Vercel via the GitHub integration (no `vercel.json`; pushes to `main` deploy)

## Where things live

| Path | Purpose |
|---|---|
| `app/` | Routes, root layout, global CSS |
| `components/` | Section components (render only — no copy) |
| `content/` | **All site copy as typed data.** Bios, experience, projects, skills, education, contact links. Edit here, not in components. |
| `content/types.ts` | Shared types for the data modules |
| `lib/colors.ts` | Palette + per-theme semantic tokens (the only place a hex belongs) |
| `public/` | Images (WebP, ≤2000px) |

## Updating content

Every fact on the site lives in `content/*.ts`. To add a job, project, or skill, or to change a bio,
GPA, or email, edit the relevant data file — components map over the arrays and never carry copy.

## Theming

Four themes share one semantic token set: `--surface`, `--surface-raised`, `--ink`, `--ink-muted`,
`--accent`, `--accent-ink`, `--rule`. `lib/colors.ts` defines the values per theme; a Tailwind plugin
in `tailwind.config.ts` emits them as CSS variables (`:root` = family, `[data-theme="ethan|amy|bryce"]`
overrides) and maps utilities onto them — `bg-surface`, `text-ink`, `border-rule`, `bg-accent`, etc.

Each route sets `data-theme` on its top-level wrapper. Components use semantic utilities only and never
know whose page they are on. Every text/background pair must clear WCAG AA (4.5:1).

## Development

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build + type check
npm run lint
```

## Images

Source images are committed as WebP, resized to a max edge of 2000px. When adding a new image,
resize/convert first and reference it with an absolute path (`/photo.webp`).
