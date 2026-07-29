import { BOOKING_HREF, INSTAGRAM_HREF, services } from "@/lib/content";
import { SITE, getSiteUrl } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: SITE.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [INSTAGRAM_HREF],
    knowsAbout: [
      "Hybrid competition prep",
      "HYROX",
      "DEKA",
      "Strength and conditioning",
      "College athlete development",
      "Online personal training",
      "Nutrition coaching",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Training programs",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.for,
        },
        url: `${siteUrl}/#services`,
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BOOKING_HREF,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Free consult",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
