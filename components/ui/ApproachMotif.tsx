import { cn } from "@/lib/cn";

/**
 * Approach — a faint process-map routed path with four nodes, echoing the
 * four engagement steps below it before the reader even reaches them.
 * Anchored to one corner, in the same routed-path vocabulary as
 * HeroGraphic/ConfidentialityMotif, but held well below foreground opacity
 * so it reads as ambient structure rather than a second diagram.
 */
export function ApproachMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 700"
      fill="none"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 right-0 h-full w-[46rem] max-w-[70vw]",
        className,
      )}
    >
      {/* Routed path stepping in from the corner through four stages */}
      <path
        d="M900 60h-90v90h-90v90h-90v90h-90"
        stroke="#AAB8AE"
        strokeOpacity="0.22"
        strokeWidth="1.25"
      />

      {/* Four nodes — one per engagement step */}
      {[
        [810, 60],
        [720, 150],
        [630, 240],
        [540, 330],
      ].map(([x, y], index) => (
        <rect
          key={`${x}-${y}`}
          x={x - 4}
          y={y - 4}
          width="8"
          height="8"
          fill="#163F32"
          stroke="#AAB8AE"
          strokeOpacity={index === 3 ? 0.4 : 0.24}
          strokeWidth="1.25"
        />
      ))}

      {/* Terminus — the single gold accent, held faint */}
      <rect x="446" y="416" width="9" height="9" fill="#C89A5B" fillOpacity="0.3" />
      <path
        d="M450 330v82"
        stroke="#AAB8AE"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* Datum ticks, matching the site's blueprint vocabulary */}
      <path
        d="M900 40v14M540 448v14"
        stroke="#AAB8AE"
        strokeOpacity="0.16"
        strokeWidth="1"
      />
    </svg>
  );
}
