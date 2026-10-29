# ReganHD website

Marketing site for ReganHD, a Canadian manufacturer that also runs a trucking business.
Reference sites from client: Marathon, Silverback, Matholdings (study for layout/tone).

## Status
Client rebuilds heavy-duty **brake shoes** (sandblast, reline, rivet) and packs Marathon Stop Box Kits. They also run trucking.
**This branch (`main`) is the classic client site**: static multi-page, no scroll animation. Pages: `/`, `/services`, `/products`, `/trucking`, `/contact` (quote form).
**The animated portfolio version** (pinned scroll story, video heroes, banner switch, /v1 /v2) is preserved on branch `portfolio/animated` and tag `portfolio-animated-v1`. Do not merge it back; deploy it separately for portfolio use.
Open items are marked TODO in `src/content/site.ts` and pages. Do not publish the box's ISO claims until the client confirms them.

## Stack
Next.js (App Router) + TypeScript + Tailwind + shadcn/ui, motion, react-hook-form + zod.
Read `node_modules/next/dist/docs/` before writing Next code; this version differs from older releases.

## Conventions
- Company copy and nav live in `src/content/site.ts`; do not hardcode in components.
- Page sections go in `src/components/sections`, layout chrome in `src/components/layout`.
- Industrial B2B tone: credibility, capabilities, certifications, quote/contact CTAs.
- Canadian context: CAD, en-CA (consider fr-CA), province-based locations.

## Notes
- Quote form posts to `src/app/api/quote/route.ts`. Set RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL (see `.env.example`); without them the form tells visitors nothing was sent.
- Contact details in `src/content/site.ts` are PLACEHOLDERS (555 number, .example email); the footer shows a "Placeholder contact details" tag until `placeholder` is set to false.
- Still open: real copy and client facts, real photos for part numbers, FR-CA.
