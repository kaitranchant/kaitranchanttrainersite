import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo, Manrope } from "next/font/google";
import { BookCtaTracker } from "@/components/BookCtaTracker";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title:
    "Kai Tranchant | Hybrid Comp Prep & College Sport S&C — Horseheads, Elmira & Corning, NY",
  description:
    "Strength & conditioning for hybrid competition athletes (HYROX, DEKA, and more) and college-bound athletes. Off-season strength, race-day conditioning, programming built around your competition calendar. In person across the Twin Tiers or coached online.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kai Tranchant",
    title: "Kai Tranchant | Hybrid Comp Prep & College Sport S&C",
    description:
      "Peak when it counts. Competition prep and off-season S&C — in person across the Twin Tiers (Horseheads, Elmira, Corning) or coached online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Tranchant | Hybrid Comp Prep & College Sport S&C",
    description:
      "Peak when it counts. Competition prep and off-season S&C — in person across the Twin Tiers or coached online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <LocalBusinessJsonLd />
        {children}
        <BookCtaTracker />
        <Analytics />
      </body>
    </html>
  );
}
