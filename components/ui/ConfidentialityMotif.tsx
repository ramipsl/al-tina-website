import { cn } from "@/lib/cn";

/**
 * Confidentiality — three layered record sheets, each carrying a few short
 * redaction-style bars rather than readable text lines, plus a single small
 * seal mark (a ringed dot, not a padlock or shield) in the single-gold-accent
 * position the site's other diagrams use for their outcome/focal point.
 *
 * Deliberately avoids lock and shield iconography — the brief for this
 * section is explicit that those read as generic cybersecurity cliché. The
 * privacy idea instead comes from the sheets themselves: stacked, offset,
 * and their content is blocked out rather than legible.
 */
export function ConfidentialityMotif({ className }: { className?: string }) {
  const line = "#AAB8AE";
  const surface = "#0F2C23";

  return (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      {/* Corner registration marks — the same frame language as the founder
          portrait placeholder and HeroGraphic. */}
      {[
        { x: 14, y: 14, rotate: 0 },
        { x: 306, y: 14, rotate: 90 },
        { x: 14, y: 366, rotate: -90 },
        { x: 306, y: 366, rotate: 180 },
      ].map((corner) => (
        <path
          key={`${corner.x}-${corner.y}`}
          d="M0 6V0h6"
          stroke="#C89A5B"
          strokeWidth="1.25"
          strokeOpacity="0.7"
          transform={`translate(${corner.x} ${corner.y}) rotate(${corner.rotate})`}
        />
      ))}

      {/* Three layered sheets, offset back-to-front */}
      {[
        { x: 76, y: 60, o: 0.28 },
        { x: 60, y: 78, o: 0.45 },
        { x: 44, y: 96, o: 0.85 },
      ].map((sheet) => (
        <rect
          key={sheet.x}
          x={sheet.x}
          y={sheet.y}
          width="200"
          height="240"
          rx="2"
          fill={surface}
          stroke={line}
          strokeOpacity={sheet.o}
          strokeWidth="1.25"
        />
      ))}

      {/* Redaction bars on the front sheet — blocked content, not text */}
      {[
        { y: 130, w: 130 },
        { y: 154, w: 150 },
        { y: 178, w: 90 },
        { y: 214, w: 140 },
        { y: 238, w: 110 },
      ].map((bar) => (
        <rect
          key={bar.y}
          x="64"
          y={bar.y}
          width={bar.w}
          height="7"
          fill={line}
          fillOpacity="0.3"
        />
      ))}

      {/* Seal mark — a ringed dot, not a padlock */}
      <circle cx="220" cy="120" r="9" stroke="#C89A5B" strokeWidth="1.25" />
      <circle cx="220" cy="120" r="2.5" fill="#C89A5B" />
    </svg>
  );
}
