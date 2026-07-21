"use client";

import { useEffect, useState } from "react";
import { BOOKING_HREF } from "@/lib/content";

function anyCtaInView() {
  const ctas = document.querySelectorAll<HTMLElement>("[data-book-cta]");
  const vh = window.innerHeight;
  const topInset = vh * 0.12;

  for (const el of ctas) {
    const rect = el.getBoundingClientRect();
    if (rect.bottom > topInset && rect.top < vh) return true;
  }
  return false;
}

export function SideNav() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const sync = () => setShowFab(!anyCtaInView());

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <a
      href={BOOKING_HREF}
      aria-hidden={!showFab}
      tabIndex={showFab ? 0 : -1}
      data-visible={showFab ? "true" : "false"}
      className="btn-accent book-fab fixed bottom-5 right-5 z-40 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-[0_10px_40px_rgba(255,92,31,0.35)] sm:bottom-7 sm:right-7 sm:px-6 sm:py-3.5"
    >
      Book your consult
    </a>
  );
}
