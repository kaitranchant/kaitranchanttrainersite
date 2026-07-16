import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Kai Tranchant | Personal Trainer in Horseheads, Elmira & Corning, NY",
  description:
    "Strength & performance coaching for athletes and hybrid athletes. 1,000+ sessions coached. In-home training across the Twin Tiers (Horseheads, Elmira, Corning) plus online coaching anywhere.",
  openGraph: {
    title:
      "Kai Tranchant | Personal Trainer — Horseheads, Elmira & Corning",
    description:
      "Train like an athlete — whatever that means for you. 1,000+ sessions coached. Strength, muscle, and conditioning for sport and everyday life.",
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
      className={`${instrument.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
