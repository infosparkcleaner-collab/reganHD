# Regan HD: Brand Direction v3 ("Classic, modern, premium")

v2 was right on structure and wrong on presence. v3 keeps the classic page order and adds weight: dark steel sections, big photography, tight type, and one graphic device taken from the logo. Reference level: Volvo Trucks restraint, Caterpillar confidence, Stripe finish.

## 1. Positioning and tone

**Line:** *Rebuilt to stop. Built in Canada.*
**Support:** "Heavy-duty brake shoes, sandblasted, relined and riveted, then shipped in Marathon Stop Box Kits to fleets, shops and distributors."

**Tone:** a shop foreman who also runs the books. Short, declarative sentences. Verbs from the shop floor: *sandblast, reline, rivet, pack, ship*. No superlatives, no "industry-leading", no exclamation marks. Back claims with process, not numbers. Canadian spelling.

## 2. Colour system

| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#070D1A` | Darkest sections, footer |
| `ink-900` | `#0B1424` | Main dark sections, top bar |
| `ink-800` | `#132036` | Cards on dark, hover |
| `ink-700` | `#1E2C45` | Borders on dark |
| `steel-500` | `#5B6779` | Secondary text on light |
| `steel-300` | `#A9B2C0` | Body text on dark |
| `steel-200` | `#D5DAE2` | Rules on light |
| `steel-100` | `#ECEFF3` | Alternate light sections |
| `paper` | `#F7F8FA` | Page background |
| `white` | `#FFFFFF` | Cards, form fields |
| `text` | `#0E1726` | Headings and body on light |
| `blue-600` | `#17409A` | Logo blue: links, focus ring, speed bars, active nav |
| `blue-400` | `#4A74D6` | Links on dark only |
| `red-600` | `#C8102E` | Primary CTA, eyebrow tick, rare accent |
| `red-700` | `#A50D26` | CTA hover/pressed |

**Ratio per page:** about 60% paper/white, 30% ink, 8% steel, 2% combined blue + red. Red appears only on the primary CTA, the 12px eyebrow tick and the active SKU highlight. Blue appears only as speed bars, links, focus states and the active nav underline. Red and blue never sit next to each other except inside the logo. That rule is what stops it looking patriotic or cheap. No blue fills behind text, no red headings.

**Rhythm:** each page has exactly one full-bleed `ink-900` band in the middle (plus the dark hero and dark footer). Light sections alternate `paper` and `white`, with `steel-100` used no more than once per page.

## 3. Typography

- **Display/headings:** *Archivo* (Google), weights 600, 700, 800. Use the variable width axis at `wdth 100` for most headings and `wdth 112` for the H1/display only (semi-expanded, which picks up the stencil width of the logo).
- **Body/UI:** *Inter* 400, 500, 600, with `font-feature-settings: "ss01","cv11","tnum"` on tables.
- **Mono (part numbers, specs):** *JetBrains Mono* 500.

Desktop scale in px (mobile in brackets):

| Role | Size / line-height | Weight | Tracking |
|---|---|---|---|
| Display (home H1) | 72/76 (44/48) | Archivo 800, wdth 112 | -0.02em |
| H1 (inner) | 56/60 (38/42) | 700 | -0.02em |
| H2 | 40/46 (30/36) | 700 | -0.015em |
| H3 | 24/30 (20/26) | 600 | -0.01em |
| Lead | 20/32 (18/28) | Inter 400 | 0 |
| Body | 17/28 (16/26) | Inter 400 | 0 |
| Small/UI | 14/20 | Inter 500 | 0.005em |
| Eyebrow | 12/16 | Inter 600, UPPERCASE | 0.16em |
| SKU | 15/20 | JetBrains Mono 500 | 0.04em |

**Eyebrow style:** a 12×2px `red-600` tick, 10px gap, then uppercase text in `steel-500` (or `steel-300` on dark). Example: `▬ BRAKE SHOE REBUILDING`. Measure is capped at 64ch for body and 18ch for display.

## 4. Signature device, grid and surfaces

**The Speed Rule:** two parallel bars skewed -18°, `blue-600`, 3px thick with an 8px gap between them, ending in three short dashes (6px, 4px, 2px). It comes straight from the logo. Use it in four places only:
1. Under the hero H1 (120px wide, draws in once over 600ms).
2. On the top edge of the dark mid-page band (full width, 1px, `blue-600` at 60%).
3. Before each footer column heading (24px).
4. As the active-nav underline (a single skewed bar).

It never goes on cards, buttons or images.

**Grid:** 12 columns, max width 1280px, 32px gutters, 24px page margins (mobile 20px). Section padding is 128px top and bottom on desktop, 80px on mobile.
**Radius:** 2px on buttons and inputs, 4px on cards and images. Nothing is pill-shaped. Square-ish corners read as industrial and precise.
**Borders:** 1px `steel-200` on light, 1px `ink-700` on dark.
**Shadows:** only two. `sh-1: 0 1px 2px rgba(7,13,26,.06), 0 1px 1px rgba(7,13,26,.04)` and `sh-2 (hover/raised): 0 12px 32px -12px rgba(7,13,26,.28)`.
**Texture:** a 2% opacity noise overlay on ink sections to avoid flat digital black.

## 5. Header and footer

**Utility bar** (36px, `ink-950`, 13px Inter, `steel-300`): on the left, "Assembled in Canada · Shipping coast to coast" with a small maple leaf. On the right, phone, email and "Request a quote →". It hides on scroll.

**Main nav** (76px): logo on the left, at 36px height on a white chip (the logo is a JPEG on white, so give it a 6px-padded white plate with 2px radius; replace with SVG when available). Centre links: Brake Shoe Rebuilding, Products, Trucking, Contact (15px Inter 500). On the right, a primary red button: "Request a quote".
- **Over the hero:** transparent background, white links, 1px `rgba(255,255,255,.12)` bottom rule.
- **After 24px of scroll:** `rgba(255,255,255,.88)` with `backdrop-filter: blur(14px) saturate(160%)`, `text` links, `sh-1`, height 64px. Transition over 240ms.
- Inner pages without a dark hero start in the solid state.
- **Mobile:** full-screen `ink-950` sheet with 32px Archivo links, a speed rule and the contact block at the bottom.

**Footer** (`ink-950`, 96px top padding):
- **Row 1:** big statement at H2 size, "Need shoes by part number? Send us the list.", with primary and ghost buttons.
- **Row 2:** a 4-column grid: brand (logo on plate plus a one-line description), Services, Products (each SKU linked in mono), Company/Contact. Each column heading gets a speed rule.
- **Row 3:** a 1px `ink-700` rule, then © Regan HD, "Marathon and Stop Box Kit are trademarks of their respective owner", Privacy, and back-to-top.

## 6. Page layouts

Overlay standard: `ink-950` gradients, never pure black.

### Home
1. **Hero:** `hero-shop` 16:9, full-bleed, 92vh (min 640px). `object-position: 70% 50%`. Overlay `linear-gradient(90deg, rgba(7,13,26,.92) 0%, rgba(7,13,26,.65) 40%, rgba(7,13,26,0) 70%)` plus a bottom fade of 0 to .5 over the last 30%. Text sits left in 6 columns: eyebrow "HEAVY-DUTY BRAKE SHOES", display H1 "Rebuilt to stop. Built in Canada.", speed rule, lead, then primary + ghost buttons. The process strip (see §8) overlaps the bottom of the hero at -64px.
2. **Who we serve** (paper): a three-column text row (Fleet maintenance, Repair shops, Parts distributors), each with an H3 and two lines of copy. No icons.
3. **Rebuild process** (white): an H2 on the left (4 cols) and a 2×2 image grid on the right (8 cols). Images in order: `cores`, `sandblast`, `rivet`, `finished`, all 4:3. Each gets a step number in mono ("01") and a caption. Hovering scales the image only.
4. **Dark band** (`ink-900`): a 50/50 split. `worker-brake-shoe.jpeg` (real) on the left, cropped to 4:5 with `object-position: 65% 50%` so the riveted shoe and press stay in frame. On the right: eyebrow "REAL SHOP, REAL PARTS", H2 "Every shoe passes through our hands.", the four stages as a numbered list, and a secondary link.
5. **Stop Box Kit** (`steel-100`): `stop-box-kit.jpeg` on the right (7 cols) on a white card with `sh-2`. On the left: copy, a row of 7 SKU chips in mono, and "View products".
6. **Trucking teaser:** `truck-highway`, full-bleed at 60vh, with the left gradient at .85 to 0 by 55%. H2 "We haul it too." plus a link.
7. Footer.

### Services (/services)
1. **Inner hero** (dark, 64vh): `sandblast` cropped to 21:9, centre-right. Overlay `90deg, .9 → .3`. H1 "Brake shoe rebuilding."
2. **Intro** (paper): an 8-col lead paragraph and a 4-col fact list (§8).
3. **Process:** a vertical timeline with four rows that alternate image left/right. Images: `cores`, `sandblast`, `rivet`, `finished`, 4:3, 6 cols each. A 1px `steel-200` spine runs between them with mono step numbers.
4. **Dark band:** `worker-brake-shoe.jpeg`, full-bleed at 50vh, overlay `180deg, .2 → .85`. A centred quote-style statement (our own words, not a testimonial): "Bare steel, new lining, tight rivets."
5. **Cores CTA** (white): "Have worn cores?" with a form link.

### Products (/products)
1. **Inner hero** (light, not dark, so the box reads true): white background, H1 "Marathon Stop Box Kit." on the left. `stop-box-kit.jpeg` on the right on a `steel-100` stage, 4px radius, `sh-2`.
2. **Kit details** (paper): what's inside (pending client copy), "Assembled in Canada" (taken from the box), and "Marathon Brake Systems" brand note. Do not mention ISO.
3. **SKU table** (white), see §8.
4. **Dark band:** `warehouse`, full-bleed at 50vh, gradient left. "Order by part number. We'll confirm stock and lead time."
5. **CTA.**

### Trucking (/trucking)
1. **Hero** (dark, 80vh): `truck-highway` with `object-position: 75% 60%`. Gradient `90deg .9 → 0 at 65%`. H1 "Freight, handled by the same team."
2. **Service summary** (paper): 3 columns (to be confirmed with client).
3. **Dark band:** `fleet-yard`, 21:9, with a two-column text overlay at the bottom (`180deg 0 → .9`).
4. **Contact CTA.**

### Contact (/contact)
1. **Header block** (`ink-900`, 48vh, no image): H1 "Request a quote." Short promise: "Send part numbers and quantities. We reply by email."
2. **Body** (paper): the form card (7 cols) overlaps the dark block by -120px. On the right (5 cols) sits a contact details card with phone, email, address and hours, marked "to be confirmed" until the client supplies real details. Below it, a 4:3 crop of `warehouse` with 4px radius.

## 7. Motion

- **Enter:** opacity 0→1 plus translateY 16px→0, 560ms `cubic-bezier(.2,.7,.2,1)`. Siblings stagger by 70ms (max 4). Each element animates once, triggered by IntersectionObserver at 15%.
- **Hero:** the background image goes from scale 1.06 to 1 over 1600ms on load. The speed rule draws in with `clip-path`.
- **Image hover:** scale 1.04 over 700ms inside an `overflow:hidden` frame. Card lift is translateY -2px plus `sh-2`.
- **Header:** background, height and colour transition over 240ms.
- **Links:** underline grows from the left over 200ms.
- `prefers-reduced-motion: reduce` turns all transforms and draw-ins off and shows content instantly. No parallax, scroll-jacking, auto-carousels or counters.

## 8. Components

**Buttons** (48px tall, 0 24px padding, 15px Inter 600, 2px radius, trailing arrow that moves 3px on hover):
- **Primary:** `red-600` fill, white text. Hover `red-700`. Focus ring is 2px `blue-600` at 2px offset.
- **Secondary (light):** transparent, 1px `text` border, `text` label. Hover fills `text` with white label.
- **Ghost on dark:** transparent, 1px `rgba(255,255,255,.32)` border, white label. Hover is `rgba(255,255,255,.08)` fill with a white border.
- **Text link:** `blue-600`, 600 weight, arrow.

**Cards:** white, 1px `steel-200` border, 4px radius, `sh-1`. Image on top at 4:3, 28px padding. Mono step number in `steel-500`, then H3 and body. On dark, use an `ink-800` fill with an `ink-700` border.

**Process facts strip** (replaces stats; no invented numbers): four cells on white with 1px dividers, each pairing a mono label with a short value:
`SANDBLASTED · to bare steel` | `RELINED · new friction material` | `RIVETED · on the press` | `PACKED · Marathon Stop Box Kit`.
Add a fifth cell, `ASSEMBLED · in Canada`, on desktop only.

**SKU table:** full-width with a 1px border and 4px radius. Columns: Part # (mono, 15px, `text`), Description ("Details on request" in `steel-500` until supplied), Brand ("Marathon"), Action ("Request quote →" linking to `/contact?sku=4707`). Rows are 64px with a 1px `steel-200` divider. Row hover is `steel-100`, with a 2px red tick on the left edge. Sticky header row is `paper` with 12px eyebrow labels. On mobile it collapses to stacked cards. Below the table, a "Quote multiple parts" button prefills every selected SKU (checkbox column).

**Form:** card in white, 40px padding, `sh-2`. Labels are 14px Inter 500 above 48px inputs with a 1px `steel-200` border and 2px radius. Focus state is a 1px `blue-600` border plus a `0 0 0 3px rgba(23,64,154,.15)` ring. Fields: Name, Company, Role (select: Fleet / Shop / Distributor / Other), Email, Phone, Part numbers + quantities (textarea, mono), Message. Inline error text in `red-600` at 13px. Submit uses a full-width primary button. Success state shows a check icon with a "We'll reply by email" panel. Honeypot field, no CAPTCHA.

## 9. Eight premium details

1. **Semi-expanded Archivo display** with tight tracking. One typographic decision that makes the brand recognisable without the logo.
2. **Mono part numbers everywhere** (SKU chips, table, footer, form textarea), which signals precision and catalogue seriousness.
3. **One graded image family:** apply `filter: saturate(.9) contrast(1.04)` to the two real photos so they match the AI set, and put the same `ink-950` gradient language on every overlay.
4. **Overlapping layers:** the process strip over the hero edge and the form card over the dark block, which gives depth without shadows everywhere.
5. **Optical details:** `text-wrap: balance` on headings and `pretty` on body, hanging eyebrow ticks, tabular numerals, and real `→` arrows that nudge on hover.
6. **Rare, correct focus and hover states:** visible blue focus rings, 44px touch targets, and no layout shift on hover.
7. **Image craft:** AVIF/WebP through `next/image`, a blur placeholder in `ink-900`, explicit `sizes`, and art-directed crops per breakpoint (the hero shifts `object-position` to 80% on mobile so the shop stays visible behind the stacked text).
8. **Honest content system:** placeholders are styled clearly ("To be confirmed") and Marathon trademark attribution goes in the footer. Nothing invented, so nothing undermines trust. Premium means credible.
