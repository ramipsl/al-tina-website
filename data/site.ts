/**
 * Al-Tina — single source of truth for business information and page copy.
 *
 * Everything a non-developer might need to change lives in this file.
 *
 * Anything not yet confirmed uses `null` rather than a bracketed placeholder.
 * Components check for `null` and either omit that row entirely or fall back
 * to a clean, non-clickable line of text — so nothing bracketed ever reaches
 * the rendered page. Search this file for `null as` to find every one of
 * these outstanding items.
 */

/* -------------------------------------------------------------------------
 * Business information
 * ---------------------------------------------------------------------- */

export const business = {
  name: "Al-Tina",
  parent: "A Division of Tina Alliance Ltd.",
  legalName: "Tina Alliance Ltd.",
  tagline: "Alberta healthcare operations advisory",

  phone: {
    display: "+1 (587) 966-9624",
    href: "tel:+15879669624",
  },

  /** Not yet confirmed. While `href` is null, every render site shows clean, non-clickable text instead. */
  email: {
    display: null as string | null,
    href: null as string | null,
  },

  /** While `href` is null, LinkedIn renders as plain text — never a dead link. */
  linkedin: {
    display: "LinkedIn",
    href: null as string | null,
  },

  location: {
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
    display: "Calgary, Alberta",
    /** Only set this if a street address is meant to be public. */
    address: null as string | null,
  },

  registration: {
    label: "Business registration",
    number: null as string | null,
  },

  /** A short, honest line for the footer while a formal privacy policy is pending. */
  privacyNote: "Privacy information available on request.",

  domain: "al-tina.ca",

  /**
   * `public/al-tina.png` IS a genuine transparent PNG (confirmed by alpha
   * channel inspection) — not a mockup. It's left null anyway because its
   * format doesn't fit the header/footer slot: it's a single flat image with
   * the shield, "Al-Tina" wordmark and tagline stacked vertically for
   * large-format display, so squeezed into the current 44–48px inline badge
   * the fine-print tagline (~19px tall at native resolution) becomes
   * illegible. It also bakes in one fixed dark-green stroke colour with no
   * light/dark variant — that green has only ~1.6:1 contrast against the
   * dark footer background, versus 8.4:1 on the light header, so it would
   * nearly disappear in the footer. The current SVG lockup adapts colour via
   * `currentColor` and stays crisp at any size, which a static raster can't
   * do without a second colour variant. See public/README.md for what a
   * usable replacement needs to look like.
   */
  logoSrc: null as string | null,

  /** Real founder portrait, supplied as public/founder.jpg. */
  founderPortraitSrc: "/founder.jpg" as string | null,
} as const;

/**
 * Canonical origin used by metadata, the sitemap and robots.txt.
 * Falls back to a reserved `.example` host (can never resolve to a real
 * site) if `business.domain` is ever cleared back to a placeholder.
 */
export const domainIsPlaceholder = business.domain.includes("[");

export const siteUrl = domainIsPlaceholder
  ? "https://al-tina.example"
  : `https://${business.domain}`;

export const founder = {
  name: 'Usama "Sam" Algamli',
  shortName: "Sam",
  role: "Founder and Principal Consultant",
  /** Confirmed: Sam is a practising pharmacist based in Calgary. */
  standing: "Practising pharmacist, Calgary",
  /** Shown as a detail row only once confirmed — otherwise omitted, not blanked. */
  credentials: null as string | null,
  registration: null as string | null,
  /** Optional extra biography paragraph. Omitted from the page while null. */
  biographyNote: null as string | null,
} as const;

/* -------------------------------------------------------------------------
 * Navigation
 * ---------------------------------------------------------------------- */

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Founder", href: "#founder" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------
 * Hero
 * ---------------------------------------------------------------------- */

export const hero = {
  label: "Alberta healthcare operations advisory",
  headline: "Stronger systems for healthcare practices that are ready to grow.",
  body: "Al-Tina helps healthcare business owners — pharmacies, physicians, and clinics alike — bring structure to daily operations, reduce avoidable friction, and build workflows that support confident, sustainable growth.",
  credibility: ["Founder-led", "Alberta-based", "Confidential by design"],
} as const;

/* -------------------------------------------------------------------------
 * Introduction
 * ---------------------------------------------------------------------- */

export const introduction = {
  label: "Introduction",
  headline: "Built around how your practice already runs — not a template.",
  principle: {
    title: "Not a generic template",
    body: "Al-Tina works alongside your practice rather than applying a standard system on top of it. The way your team already works is the starting point, not an obstacle.",
  },
  points: [
    {
      title: "Understand the current workflow",
      body: "Every engagement starts with how the organization actually runs today.",
    },
    {
      title: "Identify where friction shows up",
      body: "We pinpoint where things slow down and what the owner is working toward.",
    },
    {
      title: "Build processes the team can keep using",
      body: "The result is a system your team recognizes — not a binder that stops being opened.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Common problems
 * ---------------------------------------------------------------------- */

export const problems = {
  label: "Common problems",
  headline: "Operational problems that quietly slow a practice down.",
  intro:
    "Most pharmacy owners, physicians and clinic owners are too busy running the practice to step back and diagnose why something feels harder than it should. These are the patterns that show up most often.",
  items: [
    {
      title: "Your team depends too much on memory and informal habits.",
      body: "Key steps live in someone's head instead of a written process, so consistency depends on who happens to be working that day.",
    },
    {
      title: "Documentation becomes stressful when it is needed most.",
      body: "Records get pulled together under pressure, right when an audit, inspection or review is already underway.",
    },
    {
      title: "Growth creates more complexity than the current workflow can handle.",
      body: "More patients, more staff and more locations add strain to processes that were only ever built for a smaller operation.",
    },
    {
      title: "Owners know something is inefficient, but don't have time to diagnose it.",
      body: "The friction is real, but stepping back to find its source means stepping away from the work that keeps the practice running.",
    },
    {
      title: "Different staff members handle the same task in different ways.",
      body: "Without a shared process, the same request gets a different answer depending on who's on shift.",
    },
    {
      title: "The business is moving, but the system behind it is not keeping up.",
      body: "The momentum is there. The structure to support it consistently, day after day, is not yet in place.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Services
 * ---------------------------------------------------------------------- */

export type Service = {
  number: string;
  title: string;
  summary: string;
  problem: string;
  work: string;
  outcome: string;
};

export const services = {
  label: "Services",
  headline: "Four areas of work.",
  intro:
    "Engagements usually start in one area and expand into others as the picture gets clearer. Each is scoped to your organization.",
  items: [
    {
      number: "01",
      title: "Pharmacy and Clinic Operations",
      summary:
        "Improve everyday workflows, staff coordination, process consistency, and operational structure.",
      problem:
        "Daily work runs on habit, so the same task is handled differently shift to shift.",
      work: "We map how work moves through the practice and define the steps that stay consistent.",
      outcome: "More consistent execution across the team, with less friction from shift to shift.",
    },
    {
      number: "02",
      title: "Growth and Performance",
      summary:
        "Identify operational barriers, strengthen business performance, and build systems that support sustainable growth.",
      problem:
        "The practice wants to grow, but its operations were built for a smaller stage.",
      work: "We find where capacity is lost, which constraints are structural, and what needs to be in place first.",
      outcome: "Real visibility into where performance is held back, and a stronger structure to grow into.",
    },
    {
      number: "03",
      title: "Documentation and Audit Readiness",
      summary:
        "Organize records, improve documentation processes, develop SOPs, and help organizations prepare with greater confidence.",
      problem:
        "Documentation is solid in some areas, thin in others, and prep starts only once a date is set.",
      work: "We organize existing records, standardize how documentation is produced, and build SOPs that reflect real practice.",
      outcome: "Calmer, steadier preparation, and the clarity of knowing where everything is.",
    },
    {
      number: "04",
      title: "Workflow and Digital Systems",
      summary:
        "Coordinate existing tools, processes, and digital workflows so the organization's systems work together more effectively.",
      problem:
        "Tools have piled up over time. Each works fine alone, but staff bridge the gaps manually.",
      work: "We review the tools already in use, cut duplicated steps, and map how information should move.",
      outcome: "Less day-to-day friction between your tools, and a clearer picture of how work moves.",
    },
  ] satisfies Service[],
} as const;

/* -------------------------------------------------------------------------
 * Approach
 * ---------------------------------------------------------------------- */

export const approach = {
  label: "Approach",
  headline: "How an engagement works.",
  intro:
    "Engagements are tailored to your organization, not built from a standard package. This is the shape most of them follow.",
  steps: [
    {
      number: "01",
      title: "Introductory Conversation",
      body: "A direct conversation with Sam to understand the organization and determine whether there is a strong fit. If there is not, we will say so.",
    },
    {
      number: "02",
      title: "Operational Assessment",
      body: "A review of existing workflows, documentation, systems, goals and friction points, based on how the practice runs day to day.",
    },
    {
      number: "03",
      title: "Strategy and System Design",
      body: "Practical recommendations and tailored processes developed around the organization's real environment, staffing and constraints.",
    },
    {
      number: "04",
      title: "Implementation and Optimization",
      body: "Working alongside the team to put the system into practice, refine it against real use, and strengthen long-term consistency.",
    },
  ],
  /**
   * Deliberately makes no claim about cost — that commercial term isn't
   * confirmed yet. Once it is, this can say "complimentary" outright.
   */
  note: "There's no obligation attached to the introductory conversation — it exists to confirm there's a fit, for both sides, before anything moves forward.",
} as const;

/* -------------------------------------------------------------------------
 * Founder
 * ---------------------------------------------------------------------- */

export const founderSection = {
  label: "Founder",
  headline: "Healthcare operations, understood from inside the work.",
  body: [
    "Al-Tina was founded by Usama “Sam” Algamli, a practising pharmacist based in Calgary. The perspective behind the work is a clinical one: Sam has spent his career inside healthcare operations rather than observing them from outside.",
    "That matters in practice. Recommendations are made with an understanding of what a dispensary or clinic can realistically absorb during a working day, what staff will maintain once the engagement ends, and where a well-intentioned process quietly falls apart.",
    "Sam leads every engagement personally. The person you speak with in the first conversation is the person doing the work.",
  ],
  principles: [
    {
      title: "Direct founder involvement",
      body: "The conversation starts with the person responsible for understanding the practice, identifying friction, and shaping the operational approach — not a sales team.",
    },
    {
      title: "No anonymous handoffs",
      body: "Work is not passed to an unnamed team once the engagement begins.",
    },
    {
      title: "Personal accountability",
      body: "Recommendations carry his name, and he stays with them through implementation.",
    },
    {
      title: "Confidential engagements",
      body: "Client identities and internal operations are treated as private by default.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Why Al-Tina
 * ---------------------------------------------------------------------- */

export const whyAlTina = {
  label: "Why Al-Tina",
  headline: "What working with us is like.",
  items: [
    {
      title: "Pharmacist-led perspective",
      body: "The work is led by a practising pharmacist who understands healthcare operations from the inside.",
    },
    {
      title: "Direct founder involvement",
      body: "Sam is present throughout the engagement, from the first conversation to implementation.",
    },
    {
      title: "Alberta-focused healthcare experience",
      body: "The work is grounded in the Alberta operating environment and the realities of practising here.",
    },
    {
      title: "Tailored operational systems",
      body: "Processes are designed around your practice, your staffing and the tools you already use.",
    },
    {
      title: "Built for regulated healthcare environments",
      body: "Recommendations are shaped around the realities of pharmacies, clinics, documentation, workflows, and healthcare quality expectations.",
    },
    {
      title: "Practical implementation, not generic reports",
      body: "The work continues past the recommendation, into the part where it becomes routine.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Who we serve
 * ---------------------------------------------------------------------- */

export const whoWeServe = {
  label: "Who we serve",
  headline: "Healthcare practices with operational complexity.",
  intro:
    "Al-Tina supports pharmacy businesses, physician-led clinics, and growing healthcare organizations with practical systems for growth, consistency, and operational control.",
  groups: [
    {
      heading: "Pharmacy",
      items: [
        {
          title: "Community pharmacies",
          body: "Multi-staff dispensaries balancing volume, consistency and documentation.",
        },
        {
          title: "Independent pharmacy owners",
          body: "Owner-operators carrying both the clinical and the business load.",
        },
        {
          title: "Growing healthcare organizations",
          body: "Operations adding locations, staff or services faster than their systems were built for.",
        },
      ],
    },
    {
      heading: "Physician-led practice",
      items: [
        {
          title: "Physician-led clinics",
          body: "Practices where clinical leadership also carries operational responsibility.",
        },
        {
          title: "Family medicine practices",
          body: "Teams managing continuity of care alongside administrative demands.",
        },
        {
          title: "Specialty clinics",
          body: "Focused practices with referral, scheduling and documentation requirements of their own.",
        },
      ],
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Confidentiality
 * ---------------------------------------------------------------------- */

export const confidentiality = {
  label: "Confidentiality",
  headline: "Confidentiality and protection of health information.",
  intro:
    "Privacy and responsible information handling are built into every engagement Al-Tina undertakes. The same governance and risk-reduction awareness applies across healthcare operations, patient-related information, clinical workflows, documentation, and the business systems that support them.",
  regulations: ["HIA", "PIPA", "HIPAA where relevant"],
  pillars: [
    {
      title: "Privacy and regulatory awareness",
      body: "Every engagement is approached with an understanding of applicable privacy legislation and professional obligations.",
    },
    {
      title: "Controlled information handling",
      body: "Records and engagement materials are shared only with those directly involved in the work.",
    },
    {
      title: "Clinical governance and quality systems",
      body: "Recommendations reflect the governance and quality standards expected in regulated healthcare environments.",
    },
  ],
  closingNote:
    "Formal confidentiality agreements or data protection agreements can be established before work begins, where required.",
} as const;

/* -------------------------------------------------------------------------
 * Contact
 * ---------------------------------------------------------------------- */

export const contact = {
  label: "Contact",
  headline:
    "Every healthcare organization operates differently. Start with a direct conversation.",
  body: "Start with a direct conversation about your practice, your current systems, and where operations feel harder than they should.",
  primaryCta: "Call Sam directly",
  secondaryCta: "Email Al-Tina",
  /** Shown only once a response-time commitment is confirmed; omitted while null. */
  responseNote: null as string | null,
} as const;

/* -------------------------------------------------------------------------
 * Metadata
 * ---------------------------------------------------------------------- */

export const meta = {
  title: "Al-Tina — Healthcare Operations Advisory | Calgary, Alberta",
  shortTitle: "Al-Tina",
  description:
    "Al-Tina is a founder-led healthcare operations and growth consulting practice in Calgary, Alberta, working with pharmacies and physician-led clinics on workflows, documentation, audit readiness and sustainable growth.",
  ogTitle: "Al-Tina — Healthcare Operations Advisory",
  ogDescription:
    "Founder-led operations and growth consulting for pharmacies and physician-led clinics in Calgary, Alberta.",
} as const;
