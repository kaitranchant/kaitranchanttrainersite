"use client";

import { useEffect, useState } from "react";
import { BOOKING_HREF, navItems } from "@/lib/content";

export function SideNav() {
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur-md sm:px-10">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight text-foreground italic sm:text-2xl"
        >
          Kai Tranchant
        </a>
        <div className="flex items-center gap-3">
          <a
            href={BOOKING_HREF}
            className="btn-accent hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold tracking-wide text-accent-ink sm:inline-flex"
          >
            Book a Session
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-foreground transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-foreground transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-foreground transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[35] bg-background/95 px-6 pt-24 sm:px-10">
          <nav aria-label="Page sections" className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-serif text-3xl italic text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={BOOKING_HREF}
            onClick={() => setOpen(false)}
            className="btn-accent mt-10 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
          >
            Book a Session
          </a>
        </div>
      ) : null}

      <a
        href={BOOKING_HREF}
        aria-hidden={!showFab}
        tabIndex={showFab ? 0 : -1}
        className={`btn-accent fixed bottom-5 right-5 z-40 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-[0_10px_40px_rgba(125,150,166,0.35)] transition-all duration-300 sm:hidden ${
          showFab
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        Book a Session
      </a>
    </>
  );
}
