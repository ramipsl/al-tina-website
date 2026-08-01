import type { CSSProperties } from "react";

/**
 * Stagger helper for reveal-on-scroll. Sets the `--reveal-delay` custom
 * property consumed by the `[data-reveal]` transition in globals.css.
 */
export function delay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
