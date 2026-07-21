"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="tap-row group flex min-h-[3.25rem] w-full items-center justify-between gap-4 py-4 text-left transition hover:bg-[rgba(243,241,237,0.04)] sm:gap-6 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base text-foreground sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xl leading-none text-foreground transition group-hover:border-accent group-hover:text-accent group-active:scale-95 ${
                  isOpen ? "rotate-45 border-accent text-accent" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div className="faq-answer" data-open={isOpen}>
              <div>
                <p className="pb-5 pr-12 max-w-2xl text-sm leading-[1.6] text-muted sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
