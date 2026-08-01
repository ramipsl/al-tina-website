# Asset drop-in folder

## 1. Logo — still outstanding

`public/al-tina.png` **is a genuine transparent PNG** — confirmed by
inspecting its alpha channel directly, not just by eye. (An earlier pass
wrongly called this a "wall mockup"; that was a rendering artifact in how the
file previewed, not the actual content — corrected here.)

It's still not wired up, for two concrete reasons:

1. **Format mismatch.** The shield, the "Al-Tina" wordmark and the
   "A Division of Tina Alliance Ltd." tagline are stacked vertically into one
   flat 1536×1024 image (real content ≈581×423px), designed for large-format
   display. Squeezed into the header/footer's current 44–48px inline badge,
   the tagline — only ~19px tall at native resolution — becomes illegible,
   and the wordmark gets quite soft.
2. **Fixed colour, no dark variant.** The mark's dark-green stroke is baked
   in at one colour. Measured against the site's actual dark footer
   background, it has only ≈1.6:1 contrast (vs. 8.4:1 on the light header) —
   it would nearly vanish in the footer. The current SVG fallback avoids this
   by using `currentColor`, so it adapts automatically to light and dark
   surfaces.

`data/site.ts` keeps `logoSrc: null`, so the header and footer continue to
render the typographic lockup built from the shield mark in
`components/ui/Logo.tsx`.

To finish this, what's actually needed is either:

- **A wide horizontal lockup** (shield + "Al-Tina" side by side, tagline
  dropped or kept small and legible at ~48px tall) as a transparent PNG or
  SVG, roughly 3:1–4:1 — this is what `Logo.tsx` currently expects; or
- **Two colour variants** (one for light surfaces, one for dark) if a fixed
  single colour is unavoidable; or
- **An SVG** of the shield mark alone, which — like the current fallback —
  can recolour itself via CSS and needs no variants at all.

Add the final asset as:

    public/al-tina-logo.png

Then in `data/site.ts`:

    logoSrc: "/al-tina-logo.png",

## 2. Founder portrait — done

`public/founder.jpg` (886×886) is wired up as the founder portrait
(`founderPortraitSrc` in `data/site.ts`). The frame is 4:5 and `object-cover`,
so the square source is cropped evenly from the left and right — no vertical
crop occurs, so the framing above the shoulders is untouched. If a sharper or
more editorial portrait becomes available later, drop it in under the same
filename (or update the path) and no other change is needed.

## Favicon

`app/icon.svg` is a placeholder built from the shield mark. Replace that file
to change the browser tab icon.
