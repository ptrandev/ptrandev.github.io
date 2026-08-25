# ptran.dev

Personal site of Phillip Tran. It holds my research, software projects, music
and media, and a blog.

Live at [ptran.dev](https://ptran.dev).

Built with Gatsby 2, React 16, Emotion, and markdown content. Pages are static
and content lives in this repo as markdown files.

## Quick start

```shell
npm install
npm run develop
```

The site runs at `http://localhost:8000`. The GraphQL explorer runs at
`http://localhost:8000/___graphql`.

Gatsby 2 uses webpack 4, which needs the legacy OpenSSL provider on Node 17 and
later. The `develop` and `build` scripts already set
`NODE_OPTIONS=--openssl-legacy-provider`. Developed on Node 20.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run develop` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `public/` |
| `npm run serve` | Serve the last production build |
| `npm run clean` | Delete `.cache/` and `public/` |
| `npm run format` | Run Prettier over js, jsx, json, and md files |

## Structure

```
src/
  components/     Navbar, Footer, Card, Helmet, layout
  pages/          One .js file per index page, one folder per content type
    projects/     Project markdown
    research/     Research markdown
    media/        Music and media markdown
    blog/         Blog post markdown
  templates/      blog.js renders blog posts, blog-post.js renders the rest
  styles/         colors.js design tokens, global.js
  utils/          typography.js (Typography.js + Kirkham theme, Inter)
static/           Files copied to the site root
gatsby-node.js    Builds a slug for each markdown file, then a page for it
gatsby-config.js  Site metadata and plugins
```

The navbar links Home, Research, Projects, and Blog. The Media page is built at
`/media` but is not in the navbar.

## Adding content

Add a markdown file to the folder for its type. `gatsby-node.js` turns the file
path into the page slug, so `src/pages/projects/trshy.md` becomes
`/projects/trshy/`.

Projects, research, and media only appear on their index page when
`featured: true`. Blog posts always appear.

### Projects and research

```markdown
---
layout: project
title: TRSHY
tags: ['html/css', 'django', 'postgres']
featured: true
meta:
  date: 2018 Q4
  hero: trshy-hero.jpg
  site: https://trshy.herokuapp.com/
  code: https://github.com/trshy/trshy
---

One or two sentences. The card shows the raw markdown body as its summary, so
keep it to plain text.
```

Each `meta` link renders one button on the card:

| Field | Button | Pages |
| --- | --- | --- |
| `site` | View Site | Projects, Research |
| `code` | View Code | Projects, Research |
| `video` | View Video | Projects, Research, Media |
| `figma` | View Figma | Projects, Research |
| `paper` | View Paper | Research |
| `listen` | Listen | Media |
| `socials` | Socials | Media |

Cards sort by `meta.date` in descending order. The date is a free text string,
such as `2026 Q1`.

### Blog posts

```markdown
---
layout: blog
title: "Why I'm Starting a Blog"
date: 2026-08-25
tags: ['Writing', 'Research', 'Product']
description: A first post on why I am writing in public.
---

Body in markdown.
```

Blog posts sort by `date` in descending order. The card shows `description`, or
the first 280 characters of the post when `description` is absent. Read time
comes from `timeToRead`.

## Images

Hero images are hosted on Cloudinary, not in this repo. Set `meta.hero` to the
file name only. Each index page builds the full URL:

| Content type | Cloudinary folder |
| --- | --- |
| Projects | `ptran.dev/projects/` |
| Research | `ptran.dev/research/` |
| Media | `ptran.dev/media/` |

The URLs request `f_auto,q_auto` so Cloudinary picks the format and quality.

## Styling

Colors live in [src/styles/colors.js](src/styles/colors.js):

| Token | Value |
| --- | --- |
| `black` | `#191919` |
| `white` | `#f1f1f1` |
| `primary` | `#3a4de8` |
| `secondary` | `#E32665` |

Type is Typography.js with the Kirkham theme, overridden to Inter at weights 400
and 800. See [src/utils/typography.js](src/utils/typography.js). Use `rhythm()`
for spacing so vertical rhythm stays consistent.

Component styles use Emotion, either `styled` or the `css` prop.

## Deploying

Netlify builds and serves ptran.dev, with Cloudflare in front of it.

GitHub Pages also serves this repo at
[ptrandev.github.io](https://ptrandev.github.io). That build is the legacy
Jekyll one reading the repo root, so it renders this README, not the Gatsby
site.
