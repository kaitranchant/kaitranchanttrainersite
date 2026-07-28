"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SafePhoto } from "@/components/SafePhoto";

export type Testimonial = {
  name: string;
  tags: readonly string[];
  duration: string;
  quote: string;
  photo?: string;
  expandable?: boolean;
};

const LISA_PREVIEW_END = "safely and effectively.";

function TestimonialQuote({
  quote,
  expandable = false,
}: {
  quote: string;
  expandable?: boolean;
}) {
  const [open, setOpen] = useState(false);

  if (!expandable) {
    return (
      <p className="text-sm leading-[1.6] text-muted sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
    );
  }

  const cutIndex = quote.indexOf(LISA_PREVIEW_END);
  const splitAt =
    cutIndex === -1 ? Math.min(220, quote.length) : cutIndex + LISA_PREVIEW_END.length;
  const head = quote.slice(0, splitAt).trimEnd();
  const tail = quote.slice(splitAt).trimStart();

  return (
    <div>
      <p className="text-sm leading-[1.6] text-muted sm:text-base">
        &ldquo;{head}
        {!open ? "…" : null}
        {!open ? <>&rdquo;</> : null}
      </p>
      <div className="faq-answer" data-open={open}>
        <div>
          <p className="text-sm leading-[1.6] text-muted sm:text-base">
            {tail}&rdquo;
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="tap-row group mt-3 inline-flex items-center gap-2.5 py-1.5 text-left transition"
      >
        <span className="text-xs uppercase tracking-[0.16em] text-muted transition group-hover:text-foreground">
          {open ? "See less" : "See more"}
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
    </div>
  );
}

export function TestimonialsCarousel({
  items,
  header,
}: {
  items: readonly Testimonial[];
  header: ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const loopingRef = useRef(false);

  // Two copies so we can keep scrolling right into the start again.
  const loopItems = [...items, ...items];

  function cardStep() {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    return card ? card.offsetWidth + 24 : 0;
  }

  function setStart() {
    const el = scrollerRef.current;
    const step = cardStep();
    if (!el || !step) return;
    // Start on the first copy.
    el.scrollLeft = 0;
  }

  useEffect(() => {
    const id = requestAnimationFrame(() => setStart());
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  function normalizeLoop() {
    const el = scrollerRef.current;
    const step = cardStep();
    if (!el || !step || loopingRef.current) return;

    const setWidth = items.length * step;
    if (el.scrollLeft >= setWidth) {
      loopingRef.current = true;
      el.scrollLeft = el.scrollLeft - setWidth;
      requestAnimationFrame(() => {
        loopingRef.current = false;
      });
    }
  }

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    const step = cardStep();
    if (!el || !step) return;

    const setWidth = items.length * step;

    // Going left from the start: jump into the second copy, then scroll left.
    if (direction === -1 && el.scrollLeft <= 8) {
      loopingRef.current = true;
      el.scrollLeft = setWidth;
      requestAnimationFrame(() => {
        loopingRef.current = false;
        el.scrollBy({ left: -step, behavior: "smooth" });
      });
      return;
    }

    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-4 sm:gap-6">
        <div className="min-w-0 flex-1">{header}</div>
        <div className="mb-1 flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByCard(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg leading-none text-foreground transition hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByCard(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg leading-none text-foreground transition hover:border-accent hover:text-accent"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={normalizeLoop}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopItems.map((t, index) => (
          <blockquote
            key={`${t.name}-${index}`}
            data-testimonial-card
            className="w-full shrink-0 snap-start border-t border-border pt-6 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="mb-5 flex items-center gap-3">
              {t.photo ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-media border border-border sm:h-20 sm:w-20">
                  <SafePhoto
                    src={t.photo}
                    alt={t.name}
                    className="object-cover object-center"
                    sizes="80px"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label="Client photo"
                  className="h-16 w-16 shrink-0 rounded-media sm:h-20 sm:w-20"
                  ratio="aspect-square"
                />
              )}
              <div className="min-w-0">
                <p className="text-sm text-foreground">{t.name}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-ink whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted whitespace-nowrap">
                    {t.duration}
                  </span>
                </div>
              </div>
            </div>
            <TestimonialQuote
              quote={t.quote}
              expandable={"expandable" in t && t.expandable === true}
            />
          </blockquote>
        ))}
      </div>
    </div>
  );
}
