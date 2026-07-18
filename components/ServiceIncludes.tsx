"use client";

import { useState } from "react";

export function ServiceIncludes({ items }: { items: readonly string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <button
        type="button"
        className="tap-row group inline-flex items-center gap-2.5 py-1.5 text-left transition"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-xs uppercase tracking-[0.16em] text-muted transition group-hover:text-foreground">
          What&apos;s included
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-sm leading-none text-muted transition group-hover:border-accent group-hover:text-accent group-active:scale-95 ${
            open ? "rotate-45 border-accent text-accent" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div className="faq-answer" data-open={open}>
        <div>
          <ul className="mt-2 space-y-2.5 pb-2 text-sm leading-[1.6] text-muted sm:text-base">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
