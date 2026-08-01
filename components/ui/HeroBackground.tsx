"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed hero wallpaper: a static poster paints immediately (cheap,
 * ~47KB), the motion loop is only mounted client-side and only once
 * `prefers-reduced-motion` is confirmed off — so reduced-motion visitors
 * never trigger the video request at all, and everyone else gets the poster
 * as their first paint instead of waiting on a video frame.
 */
export function HeroBackground() {
  const [playMotion, setPlayMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (mql.matches) {
        videoRef.current?.pause();
        setPlayMotion(false);
      } else {
        setPlayMotion(true);
      }
    };

    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative full-bleed background, not a next/image candidate */}
      <img
        src="/hero/al-tina-hero-poster.jpg"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {playMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero/al-tina-hero-loop.webm" type="video/webm" />
          <source src="/hero/al-tina-hero-loop.mp4" type="video/mp4" />
        </video>
      ) : null}
      {/* Flat scrim on mobile/tablet (single-column text can span the full
          width). From desktop up, a left-to-right wash: held at ~80-84%
          through the whole headline/body column (measured against the
          rendered text position, not just eyeballed — a wider swing here
          silently drops contrast below AA) and only easing off past the
          text column, so the wallpaper reads more clearly in the empty
          right column and the lower hero area. */}
      <div className="absolute inset-0 bg-ivory/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-ivory/84 lg:via-ivory/80 lg:via-55% lg:to-ivory/40" />
    </div>
  );
}
