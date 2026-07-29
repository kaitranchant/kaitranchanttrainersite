"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

/** Tracks clicks on any [data-book-cta] (hero, sections, floating button). */
export function BookCtaTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest(
        "[data-book-cta]",
      );
      if (!(target instanceof HTMLElement)) return;

      track("Book Consult Click", {
        location: target.dataset.bookLocation ?? "unknown",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
