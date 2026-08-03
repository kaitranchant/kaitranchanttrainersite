/** Canonical production domain — used for SEO, OG, sitemap, and schema. */
export const PRODUCTION_SITE_URL = "https://kaitranchant.com";

/**
 * Prefer an explicit env override, then the production domain outside local
 * development. Avoids per-deploy Vercel hosts that social scrapers can't fetch.
 */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return PRODUCTION_SITE_URL;
}

export const SITE = {
  name: "Kai Tranchant",
  legalName: "Kai Tranchant",
  email: "kaitranchant@gmail.com",
  phone: "+16073028491",
  phoneDisplay: "(607) 302-8491",
  locality: "Horseheads",
  region: "NY",
  country: "US",
  areaServed: ["Horseheads", "Elmira", "Corning"] as const,
  description:
    "Strength & conditioning for hybrid competition athletes (HYROX, DEKA, and more) and college-bound athletes. In person across the Twin Tiers or coached online.",
} as const;
