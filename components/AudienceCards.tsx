"use client";

import { useEffect, useRef, useState } from "react";
import { audiences } from "@/lib/content";

const SLIDE_MS = 350;

export function AudienceCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contentIndex, setContentIndex] = useState(0);
  const reopenTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (reopenTimer.current !== null) {
        window.clearTimeout(reopenTimer.current);
      }
    };
  }, []);

  function clearReopenTimer() {
    if (reopenTimer.current !== null) {
      window.clearTimeout(reopenTimer.current);
      reopenTimer.current = null;
    }
  }

  function toggle(index: number) {
    clearReopenTimer();

    if (openIndex === index) {
      setOpenIndex(null);
      return;
    }

    // Already open on another tab — slide shut, then open the new one.
    if (openIndex !== null) {
      setOpenIndex(null);
      reopenTimer.current = window.setTimeout(() => {
        setContentIndex(index);
        setOpenIndex(index);
        reopenTimer.current = null;
      }, SLIDE_MS);
      return;
    }

    setContentIndex(index);
    setOpenIndex(index);
  }

  return (
    <div className="mt-8">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">
        Learn more about how I train:
      </p>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {audiences.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <button
              key={item.name}
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition active:scale-[0.97] ${
                isOpen
                  ? "border-accent bg-accent text-accent-ink brightness-110"
                  : "border-accent/40 bg-accent text-accent-ink hover:brightness-110"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="faq-answer mt-1" data-open={openIndex !== null}>
        <div>
          <p className="pt-4 max-w-2xl text-sm leading-[1.6] text-muted sm:text-base">
            {audiences[contentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
