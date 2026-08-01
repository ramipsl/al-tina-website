import Image from "next/image";

import { business } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * The Al-Tina shield mark, drawn to match the supplied brand artwork.
 *
 * Kept as inline SVG so it stays crisp at every size and inherits the
 * surrounding colour on both ivory and forest surfaces. When the final
 * raster logo is dropped into /public, set `business.logoSrc` and the
 * lockup below swaps to it automatically.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 27"
      fill="none"
      aria-hidden="true"
      className={cn("w-auto", className)}
    >
      <path
        d="M12 1.25 22.25 5.4v7.35c0 5.6-4.2 9.55-10.25 11.5C5.95 22.3 1.75 18.35 1.75 12.75V5.4L12 1.25Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.6c-3.4 5.1-5.1 9.6-5.1 13.5 0 3 1.7 6 5.1 8.9"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M11.05 8.35h1.9v2.6h2.6v1.9h-2.6v2.6h-1.9v-2.6h-2.6v-1.9h2.6v-2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Header / footer lockup.
 *
 * TO UPDATE THE LOGO: add the final asset at /public/al-tina-logo.png and set
 * `logoSrc: "/al-tina-logo.png"` in data/site.ts. Nothing else needs to change.
 */
export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  if (business.logoSrc) {
    return (
      <Image
        src={business.logoSrc}
        alt={`${business.name} — ${business.parent}`}
        width={220}
        height={64}
        priority
        className={cn("h-11 w-auto sm:h-12", className)}
      />
    );
  }

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <BrandMark
        className={cn("h-9 sm:h-10", isDark ? "text-gold" : "text-forest")}
      />
      <span className="flex shrink-0 flex-col justify-center">
        <span
          className={cn(
            "font-serif text-[1.4rem] leading-none tracking-[-0.02em] whitespace-nowrap sm:text-[1.55rem]",
            isDark ? "text-ivory" : "text-forest",
          )}
        >
          Al-Tina
        </span>
        <span
          className={cn(
            "mt-1.5 hidden text-[0.5rem] leading-none font-medium tracking-[0.16em] uppercase sm:block sm:text-[0.55rem]",
            isDark ? "text-sage" : "text-muted",
          )}
        >
          {business.parent}
        </span>
      </span>
    </span>
  );
}
