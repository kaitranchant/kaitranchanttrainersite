"use client";

import { useEffect, useState } from "react";
import { BOOKING_HREF, navItems } from "@/lib/content";

export function SideNav() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur-md lg:left-56 lg:px-10">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight text-foreground italic sm:text-2xl"
        >
          Kai Tranchant
        </a>
        <div className="flex items-center gap-3">
          <a
            href={BOOKING_HREF}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold tracking-wide text-accent-ink transition hover:brightness-110 sm:inline-flex"
          >
            Book a Session
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
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

      <aside className="fixed bottom-0 left-0 top-0 z-30 hidden w-56 flex-col justify-between border-r border-border bg-background px-6 py-8 lg:flex">
        <div>
          <p className="mb-10 text-[11px] uppercase tracking-[0.22em] text-muted">
            Strength &amp; Performance
          </p>
          <nav aria-label="Page sections" className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link w-fit text-sm text-muted"
                data-active={active === item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="space-y-3 text-xs text-muted">
          <a
            href="https://instagram.com/kaitranchant"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition hover:text-foreground"
          >
            @kaitranchant
          </a>
          <a
            href="mailto:kaitranchant@gmail.com"
            className="block transition hover:text-foreground"
          >
            Email
          </a>
        </div>
      </aside>

      {open ? (
        <div className="fixed inset-0 z-[35] bg-background/95 px-6 pt-24 lg:hidden">
          <nav aria-label="Mobile sections" className="flex flex-col gap-6">
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
            className="mt-10 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
          >
            Book a Session
          </a>
        </div>
      ) : null}

      <a
        href={BOOKING_HREF}
        className="fixed bottom-5 right-5 z-40 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-[0_10px_40px_rgba(125,150,166,0.35)] transition hover:brightness-110 sm:hidden"
      >
        Book a Session
      </a>
    </>
  );
}
