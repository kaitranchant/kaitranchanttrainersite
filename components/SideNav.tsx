"use client";

import { useEffect, useState } from "react";
import { BOOKING_HREF } from "@/lib/content";

export function SideNav() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const targets = [
      ...(hero ? [hero] : []),
      ...Array.from(document.querySelectorAll<HTMLElement>("[data-book-cta]")),
    ];

    if (!targets.length) return;

    const visibility = new Map<Element, boolean>();
    const update = () => {
      const anyVisible = [...visibility.values()].some(Boolean);
      setShowFab(!anyVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target, entry.isIntersecting);
        }
        update();
      },
      { threshold: 0, rootMargin: "-12% 0px 0px 0px" },
    );

    for (const el of targets) {
      visibility.set(el, false);
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={BOOKING_HREF}
      aria-hidden={!showFab}
      tabIndex={showFab ? 0 : -1}
      className={`btn-accent fixed bottom-5 right-5 z-40 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-[0_10px_40px_rgba(125,150,166,0.35)] transition-[opacity,transform,filter] duration-500 ease-out sm:bottom-7 sm:right-7 sm:px-6 sm:py-3.5 ${
        showFab
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0"
      }`}
    >
      Book a Session
    </a>
  );
}
