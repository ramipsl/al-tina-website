import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------
 * Icons — a small, consistent set. Stroked, square-ish, never decorative.
 * ---------------------------------------------------------------------- */

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
    >
      <path
        d="M5.4 2.2 6.8 5 5.5 6.4a8.4 8.4 0 0 0 4.1 4.1L11 9.2l2.8 1.4v2.6c0 .5-.4.9-.9.8C6.9 13.5 2.5 9.1 2 3.1a.85.85 0 0 1 .85-.9H5.4Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
    >
      <rect
        x="2"
        y="3.5"
        width="12"
        height="9"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="m2 4.2 6 4.3 6-4.3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
    >
      <path
        d="M3 8h10m0 0L9.2 4.2M13 8l-3.8 3.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Buttons
 *
 * Square corners, hairline borders, no shadows. Hover shifts weight rather
 * than adding effects.
 * ---------------------------------------------------------------------- */

type ButtonVariant = "solid" | "outline" | "outline-dark";

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-forest text-ivory border border-forest hover:bg-forest-soft hover:border-forest-soft",
  outline:
    "border border-rule-strong text-forest hover:border-forest hover:bg-forest hover:text-ivory",
  "outline-dark":
    "border border-rule-dark text-ivory hover:border-gold hover:bg-gold hover:text-forest-deep",
};

export function ActionLink({
  href,
  variant = "solid",
  icon,
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium",
        "transition-colors duration-300 ease-out",
        variants[variant],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

/**
 * Text link with a gold underline that extends on hover — used for the
 * quieter, secondary actions.
 */
export function QuietLink({
  href,
  tone = "light",
  className,
  children,
}: {
  href: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 text-sm font-medium",
        tone === "dark" ? "text-ivory" : "text-forest",
        className,
      )}
    >
      <span className="relative py-1">
        {children}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-0"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform delay-150 duration-300 ease-out group-hover:scale-x-100"
        />
      </span>
      <ArrowIcon className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </a>
  );
}
