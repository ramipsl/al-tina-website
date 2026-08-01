# Al-Tina

Marketing site for **Al-Tina**, a division of Tina Alliance Ltd. — a founder-led
healthcare operations and growth consulting practice in Calgary, Alberta.

A single anchored page. The conversion action is a phone call; there is no
contact form anywhere on the site, by design.

## Running it

```bash
npm run dev     # http://localhost:3000
npm run lint
npm run build
npm start
```

## Where to change things

Almost every edit a non-developer needs is in **`data/site.ts`**. Phone number,
email, LinkedIn, registration number, domain, navigation, all section copy,
service descriptions and approach steps live there. Components read from it, so
changing a value there updates every place it appears.

**Design tokens** are in `app/globals.css` under `@theme`: the six brand
colours plus supporting shades, the fluid type scale, section rhythm and the
easing curve. Change a colour once there and it propagates.

```
app/
  layout.tsx           fonts, metadata, Open Graph, JSON-LD, skip link
  page.tsx             section composition — the page outline in ten lines
  globals.css          design tokens + reveal-animation rules
  icon.svg             favicon placeholder
  opengraph-image.tsx  social share card, generated from brand tokens
  robots.ts, sitemap.ts
components/
  layout/   Header (nav + mobile panel), Footer
  sections/ one file per numbered section
  ui/       Primitives, Logo, Actions, ImagePlaceholder, SystemMotif, RevealObserver
data/site.ts            all business information and copy
lib/                    cn (class joiner), motion (stagger helper)
public/README.md        where to drop the logo and founder portrait
```

## Confirmed vs. outstanding

Confirmed and live: phone (`+1 (587) 966-9624`), domain (`al-tina.ca`, used in
metadata, canonical URL, sitemap and robots), and the founder's standing as a
practising pharmacist in Calgary.

Everything still unconfirmed uses `null` in `data/site.ts` rather than a
bracketed placeholder or a "coming soon" message — components omit that row,
button or link entirely rather than showing any missing-data text. Find every
outstanding field:

```bash
grep -n "null as" data/site.ts
```

| Field | Where it appears | Current behaviour while null |
| --- | --- | --- |
| `business.email` | header (mobile), contact panel, footer | Row/CTA is omitted entirely — no email text, no `mailto:` link. |
| `business.linkedin.href` | founder section, contact panel, footer | Row/link is omitted entirely everywhere. |
| `business.registration.number` | footer | Row is hidden entirely. |
| `business.location.address` | footer | Line is hidden entirely — only set this if a street address is meant to be public. |
| `founder.credentials`, `founder.registration` | founder detail list | Rows are hidden entirely until real wording is supplied. |
| `founder.biographyNote` | founder section | Paragraph is omitted entirely. |
| `contact.responseNote` | contact panel | Row is hidden entirely. |

Images: see `public/README.md` for the logo and founder portrait.

## Payment model

The commercial structure (rates, retainers, revenue share, etc.) is
deliberately never mentioned anywhere on the site — not even indirectly. The
`approach.note` in `data/site.ts` explicitly avoids any claim about cost. If
that changes, search `data/site.ts` for "no claim about cost" to find the one
spot that would need updating.

## Notes on the build

- **Content accuracy.** Nothing was invented. No client names, logos,
  testimonials, statistics, credentials, years of experience, registration
  numbers or financial claims appear anywhere. The only quantitative statement
  is "approximately two years" of pharmacy work, which was supplied. No
  performance-based compensation or revenue-sharing is mentioned.
- **Client-side JavaScript** is limited to two components: the header (scroll
  state and mobile menu) and a single `IntersectionObserver` that drives every
  scroll reveal on the page. Every section is a server component.
- **Motion** is CSS-only — no animation library. `prefers-reduced-motion` is
  honoured, a `<noscript>` rule keeps content visible without JavaScript, and a
  visibility-gated failsafe in `RevealObserver` guarantees copy can never stay
  hidden if the observer fails to report.
- **Fonts** are self-hosted through `next/font` (Newsreader + Manrope). The page
  makes no external network requests.
- **Accessibility.** One `h1`, no skipped heading levels, visible gold focus
  ring on every interactive element, a skip link, `inert` on the closed mobile
  panel, and AA contrast throughout. Gold `#C89A5B` is only 2.3:1 on ivory, so
  it is used for rules and marks on light surfaces — never for text. Gold text
  on light uses `--color-gold-deep` (`#8A5E22`, 5.0:1).
- **npm audit** reports advisories in `postcss`, `sharp` and `brace-expansion`.
  All three are transitive dependencies of `next` itself; npm's only offered
  remedy is downgrading to `next@9`, which is not a real fix. They resolve when
  Next ships updated bundled dependencies.
