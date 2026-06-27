# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single Next.js 14 App Router app (plain JavaScript, no TypeScript) serving **one
product** ("Pet Ateliê" / "100 Moldes Pets") on one domain. It bundles two surfaces:

- **Landing page** (sales) at `/pet-atelie` — global styles, marketing.
- **Infoapp** (members area / PWA) at `/pet-atelie/app/*` — a library of sewing-pattern
  files (PDFs/videos) browsable by category.

The repo is in Portuguese (UI copy, comments, README). Match that when editing.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # next build (static export-friendly; used by Vercel)
npm run start    # serve the production build
npm run lint     # next lint
npm run upload   # upload content files to Vercel Blob (see below)
```

There is no test suite. On first checkout from another machine, `rm -rf node_modules .next`
before `npm install` to clear a stale build.

## Architecture

**Content is data-driven and static.** `data/content.json` is the single source of truth:
`product` metadata plus `categories[]`, each with `items[]`. Every item has an `id`,
`title`, `file` (local path), `kind` (`pdf`/`video`/`image`), `sizeBytes`, and `blobUrl`
(the public Vercel Blob CDN URL, `null` until uploaded). Pages read it only through the
helpers in `lib/content.js` (`getCategories`, `getCategory`, `getAllItems`, `getItem`,
`getProduct`, `formatSize`) — never import the JSON directly in a page. Dynamic routes
(`c/[id]`, `v/[id]`) use `generateStaticParams()` driven by this data, so adding/removing
items in `content.json` changes the generated routes.

**The product slug `pet-atelie` is hardcoded in several places.** To rename the product,
change all of: `lib/appBase.js` (`APP_BASE`), the folder names `app/pet-atelie/` and
`public/pet-atelie/`, and `start_url`/`scope` in
`public/pet-atelie/app/manifest.webmanifest` plus `BASE` in
`public/pet-atelie/app/sw.js`. Inside the infoapp, build internal links with `href()` from
`lib/appBase.js` (e.g. `href('/buscar')`) rather than hardcoding the base path.

**CSS isolation is deliberate.** The landing and infoapp historically had clashing class
names (`.btn`, `.hero`, etc.). `app/globals.css` (landing) stays global. The infoapp's
`app/pet-atelie/app/infoapp.css` has **every selector prefixed with `.infoapp`**, and the
whole infoapp renders inside `<div className="infoapp">` (set in
`app/pet-atelie/app/layout.js`). Keep new infoapp styles under `.infoapp`.

**PWA.** The service worker (`public/pet-atelie/app/sw.js`) and manifest are scoped to
`/pet-atelie/app`. `app/pet-atelie/app/pwa-register.js` registers it. The app layout also
sets PWA metadata/viewport (theme color, apple-web-app).

## Publishing content files

`npm run upload` runs `scripts/upload-to-blob.mjs`: it reads `content.json`, uploads each
item's local file from `./content-source/100 MOLDES PETS 2/` to Vercel Blob, and writes the
resulting `blobUrl` back into `content.json` incrementally. Requires
`export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."`. Items that already have a `blobUrl` are
skipped unless `FORCE=1`. Override the source dir with `CONTENT_DIR`. After uploading, commit
the updated `content.json` to publish. The viewer (`v/[id]`) shows a "not yet published"
placeholder when `blobUrl` is null.

## Deploy

Vercel: push the repo, import, it runs `npm run build`. `node_modules/` and `.next/` are
gitignored. `next.config.mjs` sets `images.unoptimized` (no Image Optimization server).
