import { ImageResponse } from "next/og";

import { business, meta } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${business.name} — ${meta.ogTitle}`;

/**
 * Open Graph card, rendered from the design tokens rather than a static
 * export, so it stays in step with the brand if the palette changes.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#163F32",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 44, height: 48 }}>
            <svg viewBox="0 0 24 27" width="44" height="48" fill="none">
              <path
                d="M12 1.25 22.25 5.4v7.35c0 5.6-4.2 9.55-10.25 11.5C5.95 22.3 1.75 18.35 1.75 12.75V5.4L12 1.25Z"
                stroke="#C89A5B"
                strokeWidth="1.35"
                strokeLinejoin="round"
              />
              <path
                d="M11.05 8.35h1.9v2.6h2.6v1.9h-2.6v2.6h-1.9v-2.6h-2.6v-1.9h2.6v-2.6Z"
                fill="#F5F1E8"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, color: "#F5F1E8", letterSpacing: -0.5 }}>
              {business.name}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#AAB8AE",
                letterSpacing: 2.4,
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              {business.parent}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 96, height: 2, backgroundColor: "#C89A5B" }} />
          <div
            style={{
              fontSize: 60,
              color: "#F5F1E8",
              lineHeight: 1.14,
              marginTop: 36,
              maxWidth: 900,
              letterSpacing: -1.4,
            }}
          >
            Building stronger systems for pharmacies and physician-led clinics.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 36,
            fontSize: 20,
            color: "#AAB8AE",
            borderTop: "1px solid #2C5748",
            paddingTop: 28,
          }}
        >
          <span>Healthcare operations advisory</span>
          <span style={{ color: "#C89A5B" }}>·</span>
          <span>Calgary, Alberta</span>
        </div>
      </div>
    ),
    size,
  );
}
