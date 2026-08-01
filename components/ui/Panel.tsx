import { cn } from "@/lib/cn";

/**
 * Shared squircle-panel language — the warm tinted surface used by the hero
 * credibility cards, the Introduction cards, and (selectively) elsewhere.
 *
 * Two variants:
 * - `raised`: stronger border/shadow, for the more prominent object on a
 *   section (e.g. a primary panel).
 * - `quiet`: softer border/shadow, for supporting cards that shouldn't
 *   compete with the section's main content.
 *
 * `blur` is opt-in and deliberately not tied to the variant: `backdrop-blur`
 * only does anything when there is real visual content behind the panel
 * (e.g. the hero video). On a flat surface it is a no-op that still forces a
 * compositing layer, so callers on flat backgrounds should leave it off.
 *
 * Radius is intentionally NOT baked in here — existing call sites already
 * use different radii (`rounded-lg` vs `rounded-xl`), and unifying that is a
 * separate design decision, not a side effect of de-duplicating this code.
 * Pass your own radius utility alongside `panel(...)`.
 */

export type PanelVariant = "raised" | "quiet";

export const PANEL_BORDER: Record<PanelVariant, string> = {
  raised: "border-rule/70",
  quiet: "border-rule/45",
};

export const PANEL_SURFACE: Record<PanelVariant, string> = {
  raised: "bg-ivory/92",
  quiet: "bg-ivory/85",
};

export const PANEL_SHADOW: Record<PanelVariant, string> = {
  raised: "shadow-[0_12px_32px_-14px_rgba(22,63,50,0.32)]",
  quiet: "shadow-[0_8px_20px_-12px_rgba(22,63,50,0.16)]",
};

export const PANEL_BLUR: Record<PanelVariant, string> = {
  raised: "backdrop-blur-md",
  quiet: "backdrop-blur-sm",
};

/** Quiet, single hairline gold accent along the top edge only. */
export const PANEL_GOLD_ACCENT = "border-t border-t-gold/50";

export function panel({
  variant = "quiet",
  gold = false,
  blur = false,
  className,
}: {
  variant?: PanelVariant;
  gold?: boolean;
  blur?: boolean;
  className?: string;
} = {}): string {
  return cn(
    "border",
    PANEL_BORDER[variant],
    PANEL_SURFACE[variant],
    PANEL_SHADOW[variant],
    gold && PANEL_GOLD_ACCENT,
    blur && PANEL_BLUR[variant],
    className,
  );
}
