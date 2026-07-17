"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { audiences } from "@/lib/content";

export function AudienceCards() {
  const [active, setActive] = useState<(typeof audiences)[number] | null>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const requestClose = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, requestClose]);

  function open(item: (typeof audiences)[number]) {
    setActive(item);
    setVisible(false);
  }

  function handleTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "opacity") return;
    if (visible) return;
    setActive(null);
  }

  const dialog =
    active && mounted
      ? createPortal(
          <div
            className={`audience-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[rgba(28,25,21,0.45)] p-4${visible ? " is-visible" : " pointer-events-none"}`}
            onClick={requestClose}
            onTransitionEnd={handleTransitionEnd}
            role="presentation"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="audience-card-title"
              className={`audience-card w-full max-w-lg border border-border bg-background p-6 shadow-[0_20px_60px_rgba(28,25,21,0.25)] sm:p-8${visible ? " is-visible" : ""}`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="audience-card-title"
                  className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  {active.name}
                </h3>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={requestClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-lg leading-none text-foreground transition hover:border-accent hover:text-accent"
                >
                  ×
                </button>
              </div>
              <p className="mt-5 text-base leading-[1.6] text-muted">
                {active.description}
              </p>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          Learn more about how I train:
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {audiences.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => open(item)}
              className="rounded-full border border-accent/40 bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-110 active:scale-[0.97]"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {dialog}
    </>
  );
}
