# Tahoe Ski Guide

A polished React/Vite editorial site for a "Best Ski Resorts in Lake Tahoe" ranking.

## Run it locally

```bash
npm install
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

The production-ready static files will be created in `dist/`.

## Where to edit content

- Resort names, rankings, labels, locations, images, and copy: `src/App.jsx`
- Typography, layout, spacing, colors, responsive behavior: `src/styles.css`
- Browser title / SEO description: `index.html`

The resort paragraphs are deliberately placeholder copy. Replace the `blurb` and `detail` values in the `resorts` array with your own writing.

## Images

This prototype hotlinks Creative Commons images hosted by Wikimedia Commons. See `IMAGE_CREDITS.md` for attribution and license details. Before publishing, you may prefer to download optimized copies into `/public/images` and serve them locally.
