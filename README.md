# teamtae blog

A personal blog covering sports, education, investment, books, and technology. Built with
[Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), content authored in
Markdown, ready to deploy to Vercel from GitHub.

## Writing a new post

Add a Markdown file under `src/content/blog/`, e.g. `src/content/blog/my-new-post.md`:

```markdown
---
title: "Your Post Title"
description: "One or two sentences shown on listing pages and in search results."
pubDate: 2026-09-15
category: technology # one of: sports | education | investment | books | technology
tags: ["optional", "tags"]
---

Your post content in Markdown goes here.
```

The filename becomes the URL slug (`my-new-post` → `/blog/my-new-post/`). The post appears
automatically on the homepage, the `/blog/` index, its category page, and the RSS feed — no other
file needs to change. Set `draft: true` in the frontmatter to keep a post out of the build while
you're still writing it.

`.mdx` files also work if you need to embed components inside a post.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build locally
```

## Deploying (GitHub + Vercel)

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the GitHub repo. Vercel auto-detects Astro; no config
   needed.
3. Once you buy/connect your domain in Vercel, update the `site` field in `astro.config.mjs` to
   match it (this powers the sitemap, RSS, and canonical/OG URLs), then redeploy.
4. Every push to the main branch redeploys automatically; pull requests get their own preview URL.

## Project structure

- `src/content/blog/` — all posts (Markdown/MDX)
- `src/content.config.ts` — post frontmatter schema (title, description, pubDate, category, tags, draft)
- `src/lib/categories.ts` — the five categories and their colors/labels — edit here to rename or restyle a category
- `src/layouts/` — `Layout.astro` (site chrome + SEO) and `BlogPost.astro` (post header/typography)
- `src/components/` — `Header`, `Footer`, `PostCard`, `CategoryBadge`, `ThemeToggle`
- `src/pages/` — routes: home, `/blog/`, `/blog/[slug]/`, `/category/[category]/`, `/about/`, `/rss.xml`

## Nice-to-haves worth adding later

- Swap `public/og-default.svg` for a PNG (better social-preview support across platforms than SVG).
- A search box (e.g. Pagefind, which indexes the static build with no server needed).
- Per-post OG images generated from the title.
