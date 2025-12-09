# CoEngineers Development Guidelines

## Project Overview

Astro + Starlight documentation site for a 31-day Claude Code course. British English throughout.

## Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro 5.x + Starlight |
| Styling | Tailwind CSS + Starlight custom properties |
| Hosting | Vercel |
| Email/Data | Supabase |

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── assets/           # Images, logo, static assets
├── components/       # Custom Astro components
├── content/
│   └── docs/         # MDX documentation pages
│       ├── getting-started/
│       ├── week-1/
│       ├── week-2/
│       ├── week-3/
│       ├── week-4/
│       └── bonus/
├── styles/
│   └── custom.css    # CSS custom properties overrides
└── pages/            # Non-docs pages (landing, etc.)
```

## Astro/Starlight Rules

### Content

- All course content lives in `src/content/docs/` as `.mdx` files
- Frontmatter schema defined in `src/content.config.ts` — validates at build time
- Use content collections API for type-safe queries

### Components

- Custom components go in `src/components/`
- Override Starlight components via `components` config in `astro.config.mjs`
- Components render zero client-side JS by default — use `client:` directives only when needed:
  - `client:load` — hydrate on page load
  - `client:visible` — hydrate when visible
  - `client:idle` — hydrate when browser is idle

### Styling

- Override Starlight's colours via CSS custom properties in `src/styles/custom.css`
- Key properties: `--sl-color-accent`, `--sl-color-gray-*`
- Tailwind classes work alongside Starlight's built-in styles
- Use cascade layers for clean overrides:
  ```css
  @layer my-overrides {
    /* Takes precedence over Starlight defaults */
  }
  ```

### Configuration

- Sidebar structure defined in `astro.config.mjs` under `starlight.sidebar`
- Social links, logo, and site metadata in same config
- Custom CSS imported via `starlight.customCss` array

## Code Patterns

### MDX Page Template

```mdx
---
title: "Day X: Title Here"
description: "Brief description for SEO"
---

import YouTube from '../../components/YouTube.astro';
import EmailSignup from '../../components/EmailSignup.astro';

# Day X: Title Here

<YouTube id="VIDEO_ID" />

## What You'll Learn

- Point one
- Point two

## The Slash Command

```bash
/w1.d1
```

<EmailSignup />
```

### Custom Component Pattern

```astro
---
// Component Script (server-side)
interface Props {
  id: string;
}
const { id } = Astro.props;
---

<!-- Component Template -->
<div class="video-wrapper">
  <iframe src={`https://youtube.com/embed/${id}`} />
</div>

<style>
  .video-wrapper {
    aspect-ratio: 16/9;
  }
</style>
```

## British English

- Use British spellings: colour, organisation, behaviour, catalogue
- Use British terminology: "pop this in", not "go ahead and"
- Informal, accessible tone in all copy

## Quality Checklist

- [ ] Build passes (`npm run build`)
- [ ] No client-side JS unless absolutely necessary
- [ ] Frontmatter validates against schema
- [ ] Links and navigation work
- [ ] Dark/light mode both look correct

## Key Resources

- [Starlight Docs](https://starlight.astro.build/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Overriding Starlight Components](https://starlight.astro.build/guides/overriding-components/)
- [Starlight CSS & Styling](https://starlight.astro.build/guides/css-and-tailwind/)

## Active Technologies
- TypeScript (ESM) via Astro 5.x + Astro 5.1, @astrojs/starlight 0.34, Supabase JS client, Resend SDK (001-email-capture)
- Supabase (PostgreSQL) - subscribers and email_sends tables (001-email-capture)

## Recent Changes
- 001-email-capture: Added TypeScript (ESM) via Astro 5.x + Astro 5.1, @astrojs/starlight 0.34, Supabase JS client, Resend SDK
