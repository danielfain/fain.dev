# fain.dev

A personal developer website built with Astro, TypeScript, and Markdown. A conversational introduction, writing-first homepage, small illustrated project shelf, and a static build with no client-side framework.

Repository: `git@github.com:danielfain/fain.dev.git`

## Run locally

Use Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

```sh
npm run check     # Astro and TypeScript diagnostics
npm run build     # Generate the static site in dist/
npm run preview   # Preview the production build
```

## Make it yours

Edit `src/site.config.ts` to set your name, role, introduction, email, description, and social links. It currently uses **Daniel** and your GitHub profile. Replace the placeholder **hello@example.com** before launch.

```ts
socialLinks: [
  { label: 'GitHub', url: 'https://github.com/your-handle' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-handle/' },
],
```

Production URLs and the base path are supplied by GitHub Pages during deployment. Local development uses the root path. The repository name does not automatically configure a custom domain or DNS.

Replace the three example projects and three example articles with your own content. Each example has `sample: true`, which displays an explicit label. Set `showExampleNotice: false` after replacing the example identity and content. Sample labels are independently controlled by each content entry.

The homepage headline and section copy live in `src/pages/index.astro`. Colors, layout, spacing, and typography live in `src/styles/global.css`. Fonts are served locally from the build, with no third-party font requests. The favicon is `public/favicon.svg`.

The sun/moon button in the navigation switches between light and dark themes. The site defaults to dark mode and remembers a visitor’s chosen theme in local storage. The palette, illustrations, and code highlighting adapt together. Without JavaScript, the site stays in dark mode and the toggle stays hidden.

## Write a post

Create a Markdown file directly in `src/content/posts/`. Use lowercase, hyphenated filenames: `my-new-post.md` becomes `/blog/my-new-post/`. Keep entries at the top level of the collection; nested directories are not part of the URL design.

```md
---
title: 'A useful lesson'
description: 'One sentence describing what the reader will learn.'
date: 2026-09-18
category: Engineering
draft: true
---

Your article starts here.

## A section heading

Markdown supports links, lists, blockquotes, and fenced code blocks.
```

Use `draft: true` while writing, then switch it to `false` to publish. Drafts are excluded from all lists **and page generation**, including local preview. Publication dates control sorting, not scheduling: a future-dated post is published unless marked as a draft. Dates display in UTC to avoid off-by-one-day errors.

Quote frontmatter strings containing a colon. Astro validates content when you run development, checks, or a build. Push your changes when ready; a connected Git-based hosting service can rebuild on each push.

## Add a project

Create a top-level file such as `src/content/projects/my-project.md`:

```md
---
title: My Project
summary: 'What it does and why it matters.'
technologies: [TypeScript, PostgreSQL]
featuredOrder: 1
year: '2026'
kind: Web application
artwork: relay
repository: https://github.com/your-handle/my-project
demo: https://example.com
draft: false
---

## The problem

Explain the context, constraints, and who the project helps.

## The approach

Describe the decisions and tradeoffs.

## The result

Include real outcomes and what you learned.
```

- `featuredOrder` selects homepage projects and controls order; the homepage shows the first three. Omit it for projects that should appear only in the full collection. Unfeatured entries sort alphabetically after featured entries.
- `repository` and `demo` are optional. Missing links are omitted.
- `artwork` selects one of three built-in illustrations: `notes`, `relay`, or `search`. Replace or extend `src/components/ProjectArtwork.astro` for your own visuals.
- `sample` defaults to `false`; retain it as `true` for illustrative material.
- `draft` excludes a project from lists and generated detail pages.

## Deployment

GitHub Actions builds and deploys every push to `main` using `.github/workflows/deploy.yml`.

Published site: https://danielfain.github.io/fain.dev/

The workflow uses Node.js 24, runs `npm ci` and `npm run build`, and publishes `dist/` to GitHub Pages. Pages must use GitHub Actions as its publishing source. Build-time `SITE_URL` and `BASE_PATH` come from Pages settings, so internal links, assets, and canonical URLs support the repository subpath. Use `withBase` from `src/lib/url.ts` for internal links in Astro templates.

To reproduce the deployed build locally:

```sh
SITE_URL=https://danielfain.github.io BASE_PATH=/fain.dev npm run build
```

Custom domain configuration and DNS are separate from the repository name. Example content and contact details remain clearly marked until replaced.

The navigation’s “Contact” link opens `/contact/`, with direct email and social links. All pages share a compact footer. No contact-form backend, CMS, analytics, or tracking is configured, and all writing stays in your Git repository.
