# ptran.dev

Personal site of Phillip Tran. It holds my research, software projects, music
and media, and a blog.

Live at [ptran.dev](https://ptran.dev).

Built with Gatsby 5, React 18, Emotion, and markdown content. Pages are static
and content lives in this repo as markdown files.

## Quick start

```shell
npm install
npm run develop
```

The site runs at `http://localhost:8000`. The GraphQL explorer runs at
`http://localhost:8000/___graphql`.

Developed on Node 20. `package.json` requires Node 18 or later.

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
  components/     Navbar, Footer, Card, Seo, layout
  pages/          One .js file per index page, one folder per content type
    404.js        Not-found page
    projects/     Project markdown
    research/     Research markdown
    media/        Music and media markdown
    blog/         Blog post markdown
  templates/      blog.js renders one blog post
  styles/         colors.js design tokens, typography.css
  utils/          typography.js (Typography.js + Kirkham theme, Inter)
static/           Files copied to the site root
gatsby-node.js    Builds a slug and a page for each blog post
gatsby-config.js  Site metadata and plugins
```

The navbar links Home, Research, Projects, and Blog. The Media page is built at
`/media` and is kept out of the navbar on purpose.

## Adding content

Add a markdown file to the folder for its type.

Blog posts are the only content with a page of their own. Name the file
`YYYY-MM-DD-title.md` so posts sort by date on disk. `gatsby-node.js` strips the
date prefix to build the slug, so `src/pages/blog/2026-08-26-model-selection.md`
becomes `/blog/model-selection/`. Put the date in the frontmatter, not the URL.

Projects, research, and media have no detail page. The index card shows the
whole markdown body, so a detail page would only repeat it. They appear on their
index page only when `featured: true`. Blog posts always appear.

Older files carry a `layout:` key left over from the Jekyll site. No code reads
it. New files do not need it.

### Projects and research

```markdown
---
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
