/**
 * Prefer an explicit site URL, then Vercel's stable production host.
 * Do not use VERCEL_URL alone — those per-deploy hosts are often protected and
 * social scrapers can't fetch og:image from them.
 */
export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  );
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
