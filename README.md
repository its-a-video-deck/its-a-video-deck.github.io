# DIY Video Deck

An editorial Astro website for the DIY Screen Video project. The design combines warm paper, neutral typography, service-manual details and restrained analog instrumentation.

All source code, comments and documentation are in English. Website copy is available in English and French.

## Requirements

- Node.js 22.19 or newer (Node.js 24 LTS recommended)
- npm 9.6.5 or newer

## Local development

```sh
nvm use # If you manage Node.js with nvm
npm ci
npm run dev
```

Open the local address printed by Astro (normally `http://localhost:4321`).

```sh
npm run check   # Validate Astro and TypeScript files
npm run build   # Validate and generate the static site in dist/
npm run preview # Preview the production build
```

## Structure

- `src/pages/index.astro` and `src/pages/fr/index.astro`: English and French homepages.
- `src/pages/story/` and `src/pages/fr/story/`: origin essay. `/story/` is why the project exists. `/journal/` is reserved for how it gets made.
- `src/pages/journal/` and `src/pages/fr/journal/`: searchable journal and generated article routes.
- `src/content/journal/en/` and `src/content/journal/fr/`: editable Markdown project notes, one folder per language.
- `src/i18n/`: UI copy, locale helpers and language detection.
- `src/content.config.ts`: typed content schema.
- `src/components/`: reusable journal cards, diagrams and interactive signal path.
- `src/layouts/Layout.astro`: shared HTML, navigation, language switcher and metadata.
- `src/styles/global.css`: responsive layout and visual system.
- `src/styles/hero-reference.css`: masthead and homepage hero styling adapted from the first static HTML mockup; the Astro content and remaining page layouts are preserved.
- `public/images/deck-concept.png`: generated concept image.
- `docs/image-provenance.md`: image provenance and full generation prompt.
- `docs/art-direction.md`: original English visual brief recovered from the project conversation.
- `docs/validation.md`: completed checks and the outstanding upstream dependency advisory.

English URLs have no prefix (`/`, `/journal/`). French URLs use `/fr/`. The footer language selector stores a preference; on a first visit, the site follows the browser locale.

## Add a project note

Create a Markdown file in both `src/content/journal/en/` and `src/content/journal/fr/`. The filename becomes the shared URL slug, for example `front-panel.md` becomes `/journal/front-panel/` and `/fr/journal/front-panel/`.

```yaml
---
title: 'Assembling the front panel'
description: 'A short summary of the experiment.'
date: 2026-10-03
locale: en
category: Hardware
number: '04'
visual: display
draft: false
---
```

Use `Design`, `Hardware` or `Software` for `category`. Use `scale`, `display` or `signal` for `visual`. Set `draft: true` to exclude a note from listings and generated routes. Articles are sorted by date, newest first.

Write the body below the frontmatter using ordinary Markdown. Images can be placed in `public/images/` and referenced with `/images/filename.jpg`. Include descriptive alternative text and a caption identifying the build revision where useful.

## Editorial status

The origin of the project is published at `/story/` and `/fr/story/`. It is a first-person account of why the deck exists, and it stops at the decision to use a Sony 186SD chassis. The drawings on that page are studies, not photographs.

The journal is reserved for technical choices, the build, solutions, successes and failures. The three initial articles are still intentions and open questions, not reports of completed experiments. Their dates are editorial ordering metadata.

The hero is an AI-generated concept, explicitly captioned as such. It is not a photograph of the actual deck. Replace it with an original project image and update the alternative text, dimensions and caption in `src/pages/index.astro`. The studies on the origin page are the same kind of placeholder: simple drawings, to be replaced with photographs when they exist.

## Interaction and accessibility

The journal combines category filters and text search, with an announced result count and a resettable empty state. The signal module uses native buttons to select a stage. All article content remains accessible without JavaScript; the signal module shows every stage and the journal shows every note in that case.

The site includes keyboard focus styles, a skip link, semantic landmarks and reduced-motion support. Fonts and imagery are served locally or supplied by the operating system; no third-party requests are required when browsing the site.

## Deployment

`npm run build` produces a static `dist/` directory for any static host. No server adapter, database or account service is required. The current routes assume deployment at the domain root. Set Astro's `site` URL and add canonical/social metadata if a public domain is selected. Hosting and publication are not configured.

## Framework reference

Content is managed with [Astro content collections](https://docs.astro.build/en/guides/content-collections/).
