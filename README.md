# paolonessim.com

My personal site. Editorial layout, dark/light theme, cursor-following project previews, and a few things wired up to live data (Spotify, GitHub activity).

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS with custom editorial tokens (`text-fg`, `border-rule-subtle`, `ease-editorial`, …) — see `tailwind.config.ts`
- Radix primitives + cmdk for the ⌘K palette
- GSAP for the work-row hover preview
- MDX for writing posts (`src/content/writing/*.mdx`)

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm lint
```

## Environment

Copy `.env.example` to `.env` and fill in:

```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

Get these from <https://developer.spotify.com/dashboard>. The site uses the `client_credentials` grant to look up one track for the "Off the clock" card — no user OAuth, no refresh token. The track is set via `TRACK_QUERY` in `src/components/site/off-the-clock.tsx`. If the env vars are missing the card falls back to a hardcoded track, so the site still builds without them.

## Layout

```
src/
  app/                 routes (page.tsx is the whole homepage)
  components/site/     section components — hero, work, writing, etc.
  content/             projects.ts, bookmarks.ts, experience.ts, writing/*.mdx
  lib/                 spotify.ts, github.ts, writing.ts
  styles/globals.css   theme tokens + base styles
public/
  projects/<slug>/     logo + optional preview asset per project
```

## Adding a project

Edit `src/content/projects.ts`. Drop assets in `public/projects/<slug>/`. The `preview` field accepts:

- An image path — `.png`, `.jpg`, `.webp`, `.gif`
- A video path — `.mp4`, `.webm`, `.mov` (autoplays muted + looped)
- A YouTube URL — watch / `youtu.be` / shorts / embed (rendered through `youtube-nocookie.com`, controls hidden, scaled to crop the title bar)

Self-hosted video files look snappier than YouTube iframes for the hover preview — keep them short (3–5s) and they'll be tiny.

## Adding a writing post

Drop an MDX file in `src/content/writing/`. Frontmatter:

```yaml
---
title: "Post title"
date: "2026-05-20"
description: "One-line summary"
---
```

Read time is computed automatically.

## Deploy

Vercel. Push to `main`.
