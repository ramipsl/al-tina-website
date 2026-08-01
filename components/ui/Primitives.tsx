import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------
 * Container — the single horizontal measure used across the site.
 * ---------------------------------------------------------------------- */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-gutter", className)}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Section — light or dark band with consistent vertical rhythm.
 * ---------------------------------------------------------------------- */

const surfaces = {
  ivory: "bg-ivory text-charcoal",
  white: "bg-white-warm text-charcoal",
  sage: "bg-sage-tint text-charcoal",
  forest: "bg-forest text-ivory",
  "forest-deep": "bg-forest-deep text-ivory",
} as const;

export type Surface = keyof typeof surfaces;

export function Section({
  id,
  surface = "white",
  className,
  children,
}: {
  id?: string;
  surface?: Surface;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-[6.5rem] py-section", surfaces[surface], className)}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------
 * SectionLabel — small uppercase label, optionally preceded by a number.
 * ---------------------------------------------------------------------- */

export function SectionLabel({
  children,
  number,
  tone = "light",
  className,
}: {
  children: ReactNode;
  number?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-label font-medium uppercase",
        tone === "dark" ? "text-sage" : "text-muted",
        className,
      )}
    >
      {number ? (
        <span
          className={cn(
            "font-sans tabular-nums",
            tone === "dark" ? "text-gold" : "text-gold-deep",
          )}
        >
          {number}
        </span>
      ) : null}
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-6 shrink-0",
          tone === "dark" ? "bg-rule-dark" : "bg-gold/70",
        )}
      />
      <span>{children}</span>
    </p>
  );
}

/* -------------------------------------------------------------------------
 * Rule — hairline divider that draws itself in on reveal.
 * ---------------------------------------------------------------------- */

export function Rule({
  tone = "light",
  accent = false,
  className,
}: {
  tone?: "light" | "dark";
  accent?: boolean;
  className?: string;
}) {
  return (
    <hr
      data-reveal-rule=""
      className={cn(
        "h-px border-0",
        accent
          ? "bg-gold"
          : tone === "dark"
            ? "bg-rule-dark"
            : "bg-rule",
        className,
      )}
    />
  );
}

/* -------------------------------------------------------------------------
 * SectionHeading — the editorial serif heading used at the top of sections.
 * ---------------------------------------------------------------------- */

export function SectionHeading({
  as: Tag = "h2",
  tone = "light",
  className,
  children,
}: {
  as?: ElementType;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "text-h2 max-w-[22ch]",
        tone === "dark" ? "text-ivory" : "text-forest",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
 * Lead — the introductory paragraph beneath a section heading.
 * ---------------------------------------------------------------------- */

export function Lead({
  tone = "light",
  className,
  children,
}: {
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-lead max-w-[58ch]",
        tone === "dark" ? "text-sage" : "text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
