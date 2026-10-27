# Regan HD design plan (v2)

**Idea:** stopping power. The hero is a brake assembly drawn in code that spins at highway speed and brakes to a halt as you scroll. The same drawing returns in the refurbishing section as an "as received / refurbished" slider. One memorable object, everything else quiet.

## Tokens
- Color: Asphalt `#080B14` (dark base), Regan Blue `#17409A` (surfaces, logo), Regan Red `#D30D1F` (action, caliper), Heat `#FF6A1F` (rotor glow only), Paper `#F4F6FA` (light sections), Steel `#DDE3EC` (borders).
- Type: Chakra Petch 600/700 for display (chamfered forms match the logo), IBM Plex Sans for body, IBM Plex Mono only for part numbers.
- Shape: chamfered corners (logo cut), no pill buttons, no uniform rounded cards.
- Motion: one orchestrated moment (scroll-driven brake), plus native slider. No fade-up on every section.

## Layout
```
HERO (sticky, 200vh)         REFURBISH (paper)            MARATHON (blue-black)
[pill nav]                   steps (real sequence) | slider   logo tile + 3 photo tiles (offset)
Built to stop.        (O)    worn <---|---> rebuilt          part-number rack (4 col)
[Quote] [Refurbish]  rotor
wheel speed 100->0           TRUCKING (paper)  statement + lane line
"Stopped. ..." callout       QUOTE (asphalt)   form on white chamfered card
```
Left aligned throughout. Rotor bleeds off the right edge.

## Checked against generic tells
- No eyebrow labels, no all-caps labels, no arrow glyphs on links, no gradient washes, no identical rounded card grids.
- Dark base is navy-black paired with the logo's red and blue, and is balanced by light sections, not one acid accent.
- Numbers shown only where they are real: SKUs (client supplied) and refurbish steps (a sequence).

## Honest placeholders
- Product photos are watermarked Global Truck Parts images, shown small, labelled placeholder.
- Brake drawing is illustrative; confirm which parts Regan HD actually refurbishes (calipers, chambers, rotors).
- Steps, trucking copy, contact details are drafts (TODO in `src/content/site.ts`).
