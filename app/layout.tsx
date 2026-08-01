import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";

import { business, founder, meta, siteUrl } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.title,
    template: `%s — ${meta.shortTitle}`,
  },
  description: meta.description,
  applicationName: business.name,
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  publisher: business.legalName,
  keywords: [
    "healthcare operations consulting",
    "pharmacy consulting Calgary",
    "clinic operations Alberta",
    "SOP development healthcare",
    "audit readiness pharmacy",
    "physician-led clinic consulting",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: business.name,
    title: meta.ogTitle,
    description: meta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.ogTitle,
    description: meta.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#163F32",
  colorScheme: "light",
};

/**
 * Organization markup. Deliberately limited to facts that are confirmed —
 * no ratings, no review counts, no invented credentials.
 */
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    legalName: business.legalName,
    description: meta.description,
    url: siteUrl,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${business.location.province}, ${business.location.country}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: business.location.city,
      addressRegion: "AB",
      addressCountry: "CA",
    },
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    },
    knowsAbout: [
      "Healthcare operations",
      "Pharmacy operations",
      "Clinic workflow design",
      "Standard operating procedures",
      "Audit readiness",
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${newsreader.variable} ${manrope.variable} h-full`}
    >
      <head>
        {/* Reveal animations must never hide content when JS is unavailable. */}
        <noscript>
          <style>{`[data-reveal],[data-reveal-rule]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
