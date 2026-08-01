"use client";

import { useEffect, useState } from "react";

import { business, navigation } from "@/data/site";
import { PhoneIcon } from "@/components/ui/Actions";
import { Container } from "@/components/ui/Primitives";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

/**
 * Frosted-glass squircle treatment shared by the brand mark, the nav
 * container and the mobile menu trigger. Kept at high opacity (85%) so text
 * stays reliably legible no matter what scrolls beneath it — light, sage or
 * forest — rather than relying on a scroll-triggered solid/transparent swap
 * like before. Radius is set per call site, not here, since the mobile
 * trigger is square and needs a smaller radius to read as a squircle rather
 * than a circle.
 */
const GLASS =
  "border border-rule/60 bg-ivory/85 shadow-[0_10px_28px_-16px_rgba(22,63,50,0.28)] backdrop-blur-md";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* While the mobile panel is open: trap scrolling and honour Escape. */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* The row itself stays click-through so the gap between the two
          containers never blocks content underneath; each opts back in. */}
      <Container className="pointer-events-none">
        <div className="flex items-center justify-between gap-3 pt-4 sm:pt-5">
          <a
            href="#top"
            aria-label={`${business.name}, ${business.parent} — back to top`}
            className={cn(
              "pointer-events-auto shrink-0 rounded-xl border-t border-t-gold/50 px-5 py-3 sm:px-6",
              GLASS,
            )}
          >
            <Logo />
          </a>

          <nav
            aria-label="Primary"
            className={cn("pointer-events-auto hidden rounded-xl border-t border-t-gold/50 lg:block", GLASS)}
          >
            <ul className="flex items-center gap-1 px-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative block px-4 py-3.5 text-sm font-medium text-charcoal transition-colors duration-200 hover:text-forest"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute right-4 bottom-2 left-4 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "pointer-events-auto inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-forest lg:hidden",
              GLASS,
            )}
          >
            <MenuGlyph open={menuOpen} />
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-navigation"
        inert={!menuOpen}
        className={cn(
          "fixed inset-x-0 top-24 bottom-0 border-t border-rule bg-white-warm lg:hidden",
          "transition-[opacity,transform] duration-300 ease-out",
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <Container className="flex h-full flex-col justify-between overflow-y-auto py-10">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navigation.map((item, index) => (
                <li key={item.href} className="border-b border-rule">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-5 font-serif text-2xl text-forest"
                  >
                    <span className="text-label font-sans font-medium text-gold-deep tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={business.phone.href}
              className="inline-flex items-center justify-center gap-2.5 bg-forest px-6 py-4 text-sm font-medium text-ivory"
            >
              <PhoneIcon />
              Call Sam — {business.phone.display}
            </a>
            {business.email.href ? (
              <a
                href={business.email.href}
                className="inline-flex items-center justify-center gap-2.5 border border-rule-strong px-6 py-4 text-sm font-medium text-forest"
              >
                {business.email.display}
              </a>
            ) : null}
          </div>
        </Container>
      </div>
    </header>
  );
}

/** Two rules that cross into an X — no bouncing, no spin. */
function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-6">
      <span
        className={cn(
          "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-out",
          open ? "top-1/2 rotate-45" : "top-1",
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-out",
          open ? "top-1/2 -rotate-45" : "top-[calc(100%-0.25rem)]",
        )}
      />
    </span>
  );
}
