# DALTON Web (Next.js)

Luxury lifestyle site for **DALTON N°1 — Marine Peptides**.

## Stack

- Next.js 15+ (App Router) · React 19 · TypeScript · Tailwind CSS v4
- Framer Motion · GSAP ScrollTrigger · Lenis
- Cormorant Garamond · Inter · IBM Plex Mono

## Develop

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/app/           # Routes (home, product, journal, privacy, terms)
src/components/    # layout · sections · product · ui
src/lib/           # constants · utils
public/images/     # Editorial photography
```

## Pages

- `/` — Full editorial experience (10 sections)
- `/product` — DALTON N°1 purchase
- `/journal` — Editorial grid
- `/journal/[slug]` — Article
- `/privacy` · `/terms`

## Note

Purchase buttons are UI-ready (no payment backend yet). Wire to Shopify / Stripe when ready.
