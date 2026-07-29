import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
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

/** Prefer custom domain when set; otherwise the current Vercel deployment host. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
