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

export const metadata: Metadata = {
  title:
    "Kai Tranchant | Hybrid Comp Prep & College Sport S&C — Horseheads, Elmira & Corning, NY",
  description:
    "Strength & conditioning for hybrid competition athletes (Hyrox, Deka, and more) and college-bound athletes. Off-season strength, race-day conditioning, programming built around your competition calendar. In person across the Twin Tiers or coached online.",
  openGraph: {
    title:
      "Kai Tranchant | Hybrid Comp Prep & College Sport S&C",
    description:
      "Peak when it counts. Competition prep and off-season S&C — in person across the Twin Tiers (Horseheads, Elmira, Corning) or coached online.",
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
