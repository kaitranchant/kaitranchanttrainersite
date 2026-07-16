"use client";

import { useEffect, useState, type RefObject } from "react";

type UseRevealOnScrollOptions = {
  /** Play immediately (hero / above the fold) */
  eager?: boolean;
};

export function useRevealOnScroll(
  ref: RefObject<HTMLElement | null>,
  { eager = false }: UseRevealOnScrollOptions = {},
) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlay(true);
      return;
    }

    if (eager) {
      const frame = requestAnimationFrame(() => setPlay(true));
      return () => cancelAnimationFrame(frame);
    }

    let started = false;
    let safetyId = 0;

    const start = () => {
      if (started) return;
      started = true;
      window.clearTimeout(safetyId);
      setPlay(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(el);

    // Never leave text stuck invisible if the observer misfires.
    safetyId = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh && rect.bottom > 0) start();
    }, 2500);

    return () => {
      window.clearTimeout(safetyId);
      observer.disconnect();
    };
  }, [eager]);

  return play;
}
