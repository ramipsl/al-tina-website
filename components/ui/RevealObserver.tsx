"use client";

import { useEffect } from "react";

/**
 * Mounted once in the root layout.
 *
 * Rather than making every animated element a client component, this observes
 * all `data-reveal` nodes on the page and flips `data-revealed`, which the
 * stylesheet transitions. That keeps every section a server component and
 * holds the page's client bundle to this single effect.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-rule]"),
    );

    if (nodes.length === 0) return;

    const show = (node: HTMLElement) => {
      node.dataset.revealed = "true";
    };
    const showAll = () => nodes.forEach(show);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    nodes.forEach((node) => observer.observe(node));

    /*
     * Failsafe. Copy must never stay invisible because the observer did not
     * report — on this site that would hide the entire page. The timer is
     * armed only while the tab is actually visible, so a page opened in a
     * background tab still animates normally when the reader switches to it.
     * Under normal conditions the observer resolves within a frame and this
     * never has any visible effect.
     */
    let failsafe: number | undefined;

    const armFailsafe = () => {
      if (document.visibilityState !== "visible" || failsafe !== undefined) {
        return;
      }
      failsafe = window.setTimeout(() => {
        showAll();
        observer.disconnect();
      }, 4000);
    };

    armFailsafe();
    document.addEventListener("visibilitychange", armFailsafe);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", armFailsafe);
      if (failsafe !== undefined) clearTimeout(failsafe);
    };
  }, []);

  return null;
}
