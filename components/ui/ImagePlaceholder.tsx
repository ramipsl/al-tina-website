import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { BrandMark } from "@/components/ui/Logo";

/**
 * Editorial image frame.
 *
 * Renders a real photograph through next/image when `src` is provided, and an
 * elegant neutral placeholder when it is not — so the layout is already the
 * final layout, and adding photography is a one-line change in data/site.ts.
 * The placeholder carries no caption text; the corner marks and centred brand
 * mark alone read as an intentional frame, not an unfinished stand-in.
 */
export function ImageFrame({
  src,
  alt,
  aspect = "4 / 5",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  className,
  imageStyle,
}: {
  src?: string | null;
  alt: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Extra inline style on the `<Image>` itself — e.g. a scale/origin pair for a tighter crop. */
  imageStyle?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-rule bg-ivory",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={imageStyle}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7"
        >
          {/* Corner registration marks — architectural, not decorative flourish */}
          <div className="flex items-start justify-between">
            <Corner className="rotate-0" />
            <Corner className="rotate-90" />
          </div>

          <div className="flex flex-1 items-center justify-center">
            <BrandMark className="h-10 text-rule-strong sm:h-12" />
          </div>

          <div className="flex items-end justify-between">
            <Corner className="-rotate-90" />
            <Corner className="rotate-180" />
          </div>
        </div>
      )}
    </div>
  );
}

function Corner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("size-4 text-gold", className)}
    >
      <path d="M0 6V0h6" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
