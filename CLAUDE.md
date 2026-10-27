# ReganHD website

Marketing site for ReganHD, a Canadian manufacturer that also runs a trucking business.
Reference sites from client: Marathon, Silverback, Matholdings (study for layout/tone).

## Status
Client rebuilds heavy-duty **brake shoes** (sandblast, reline, rivet) and packs Marathon Stop Box Kits. They also run trucking.
Routes: `/` = v3 (brake shoes, current), `/v2` = disc-rotor concept, `/v1` = first version. v2/v1 code lives in `src/v2`, `src/v1`.
Media: `public/images/photos` (client photos), `public/videos` (Flow-generated, 720p, has Flow watermark). Toggle clips in `videos` in `src/content/site.ts`.
Open items are marked TODO in `src/content/site.ts` and components. Do not publish the box's ISO claims until the client confirms them.

## Stack
Next.js (App Router) + TypeScript + Tailwind + shadcn/ui, motion, react-hook-form + zod.
Read `node_modules/next/dist/docs/` before writing Next code; this version differs from older releases.

## Conventions
- Company copy and nav live in `src/content/site.ts`; do not hardcode in components.
- Page sections go in `src/components/sections`, layout chrome in `src/components/layout`.
- Industrial B2B tone: credibility, capabilities, certifications, quote/contact CTAs.
- Canadian context: CAD, en-CA (consider fr-CA), province-based locations.

## Session 1 (trust and function) done
- Quote form posts to `src/app/api/quote/route.ts`. Set RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL (see `.env.example`); without them the form tells visitors nothing was sent.
- Contact details in `src/content/site.ts` are PLACEHOLDERS (555 number, .example email); the footer shows a "Placeholder contact details" tag until `placeholder` is set to false.
- Reduced motion: use `useReducedMotion` from `src/components/motion/useReduced.ts`, not Motion's own hook (it causes hydration mismatches).
- Still open: compress videos (no ffmpeg here, 18 MB total), unverified ISO claims in the box art/videos, real copy and client facts.
