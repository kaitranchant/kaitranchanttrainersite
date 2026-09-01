"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { results } from "@/lib/content";

type Result = (typeof results)[number];
type Change = Extract<Result, { kind: "changes" }>["changes"][number];
type Comparison = Extract<Result, { kind: "comparison" }>;

function ChangeArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <span
      className="inline-flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-[3px] bg-positive text-accent-ink"
      aria-hidden
    >
      <svg
        viewBox="0 0 12 12"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "up" ? (
          <path d="M6 9.25V2.75M6 2.75 2.75 6M6 2.75 9.25 6" />
        ) : (
          <path d="M6 2.75v6.5M6 9.25 2.75 6M6 9.25 9.25 6" />
        )}
      </svg>
    </span>
  );
}

function changeLabel(change: Change) {
  const verb = change.direction === "down" ? "Lost" : "Gained";
  return `${verb} ${change.value} ${change.label}`;
}

function CardHeader({
  name,
  tag,
  context,
}: {
  name: string;
  tag: string;
  context?: string;
}) {
  return (
    <div>
      <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
        {tag}
      </span>
      <h3 className="mt-3 font-display text-xl font-bold tracking-tight sm:text-2xl">
        {name}
      </h3>
      {context ? <p className="mt-1 text-sm text-muted">{context}</p> : null}
    </div>
  );
}

function Highlights({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-4 space-y-1">
      {items.map((item) => (
        <p key={item} className="text-sm font-semibold text-positive">
          {item}
        </p>
      ))}
    </div>
  );
}

function ChangesBody({
  changes,
}: {
  changes: readonly Change[];
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
      {changes.map((change) => (
        <div key={`${change.value}-${change.label}`}>
          <p className="sr-only">{changeLabel(change)}</p>
          <div className="flex items-center gap-2" aria-hidden>
            <ChangeArrow direction={change.direction} />
            <span className="font-display text-[1.75rem] font-extrabold leading-none tracking-tight sm:text-3xl">
              {change.value}
            </span>
          </div>
          <p className="mt-1.5 pl-7 text-sm text-muted" aria-hidden>
            {change.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ result }: { result: Comparison }) {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-[1fr_minmax(0,1fr)_minmax(0,1fr)] items-end gap-x-3 border-b border-border pb-2 text-[11px] uppercase tracking-[0.14em] text-muted">
        <span className="sr-only">Stat</span>
        <span className="col-start-2">{result.beforeLabel}</span>
        <span>{result.afterLabel}</span>
      </div>
      <ul className="divide-y divide-border">
        {result.rows.map((row) => (
          <li
            key={row.label}
            className="grid grid-cols-[1fr_minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-3 py-2.5"
          >
            <span className="text-sm text-muted">{row.label}</span>
            <span className="text-sm text-muted">{row.before}</span>
            <span className="flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {row.after}
              </span>
              <ChangeArrow direction={row.direction} />
              <span className="sr-only">
                {row.label} improved from {row.before} to {row.after}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function resultContext(result: Result) {
  switch (result.kind) {
    case "changes":
      return "context" in result ? result.context : undefined;
    case "snapshot":
      return result.context;
    case "comparison":
      return "context" in result ? result.context : undefined;
    case "story":
      return undefined;
  }
}

function ResultBody({ result }: { result: Result }) {
  switch (result.kind) {
    case "changes":
      return <ChangesBody changes={result.changes} />;
    case "story":
      return (
        <div className="mt-6">
          <p className="font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
            {result.headline}
          </p>
          <p className="mt-2 text-sm leading-[1.6] text-muted">
            {result.context}
          </p>
        </div>
      );
    case "snapshot":
      return (
        <>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
            {result.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[1.75rem] font-extrabold leading-none tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          {"highlights" in result && result.highlights ? (
            <Highlights items={result.highlights} />
          ) : null}
        </>
      );
    case "comparison":
      return (
        <>
          <ComparisonTable result={result} />
          {"highlights" in result && result.highlights ? (
            <Highlights items={result.highlights} />
          ) : null}
        </>
      );
  }
}

export function Results({ header }: { header: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const loopingRef = useRef(false);
  const scrollRafRef = useRef(0);
  const [viewportHeight, setViewportHeight] = useState<number>();
  const loopItems = [...results, ...results];

  function getCards() {
    return scrollerRef.current?.querySelectorAll<HTMLElement>("[data-result-card]") ?? [];
  }

  function syncActiveIndex() {
    const el = scrollerRef.current;
    if (!el || loopingRef.current) return;

    const cards = getCards();
    if (!cards.length) return;

    let closest = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - el.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    activeIndexRef.current = closest % results.length;
  }

  function syncViewportHeight() {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = getCards();
    if (!cards.length) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const paddingBottom =
      Number.parseFloat(window.getComputedStyle(scroller).paddingBottom) || 0;
    const visibleLogical = new Set<number>();

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.right > scrollerRect.left + 1 && rect.left < scrollerRect.right - 1) {
        visibleLogical.add(index % results.length);
      }
    });

    if (visibleLogical.size === 0) {
      visibleLogical.add(activeIndexRef.current);
    }

    let maxHeight = 0;
    visibleLogical.forEach((logicalIndex) => {
      const card = cards[logicalIndex];
      if (!card) return;
      maxHeight = Math.max(maxHeight, card.offsetHeight, card.scrollHeight);
    });

    const nextHeight = maxHeight + paddingBottom;
    setViewportHeight((prev) => (prev === nextHeight ? prev : nextHeight));
  }

  function scrollToPhysical(index: number, behavior: ScrollBehavior = "smooth") {
    const el = scrollerRef.current;
    const cards = getCards();
    const card = cards[index];
    if (!el || !card) return;

    el.scrollTo({ left: card.offsetLeft, behavior });
  }

  function afterScrollEnd(onDone: () => void) {
    const el = scrollerRef.current;
    if (!el) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.removeEventListener("scrollend", finish);
      window.clearTimeout(fallbackId);
      onDone();
    };

    const fallbackId = window.setTimeout(finish, 450);
    el.addEventListener("scrollend", finish, { once: true });
  }

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el || loopingRef.current) return;

    const cards = getCards();
    const count = results.length;
    if (!cards.length) return;

    const current = activeIndexRef.current;
    const next = (current + direction + count) % count;

    if (direction === 1 && current === count - 1) {
      loopingRef.current = true;
      scrollToPhysical(count, "smooth");
      afterScrollEnd(() => {
        el.scrollLeft = cards[0].offsetLeft;
        activeIndexRef.current = 0;
        loopingRef.current = false;
        syncViewportHeight();
      });
      return;
    }

    if (direction === -1 && current === 0) {
      loopingRef.current = true;
      el.scrollLeft = cards[count].offsetLeft;
      requestAnimationFrame(() => {
        scrollToPhysical(count - 1, "smooth");
        afterScrollEnd(() => {
          activeIndexRef.current = count - 1;
          loopingRef.current = false;
          syncViewportHeight();
        });
      });
      return;
    }

    activeIndexRef.current = next;
    scrollToPhysical(next, "smooth");
    afterScrollEnd(() => syncViewportHeight());
  }

  function handleScroll() {
    syncActiveIndex();
    cancelAnimationFrame(scrollRafRef.current);
    scrollRafRef.current = requestAnimationFrame(() => syncViewportHeight());
  }

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => syncViewportHeight());
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const resizeObserver = new ResizeObserver(() => syncViewportHeight());
    scroller.querySelectorAll<HTMLElement>("[data-result-card]").forEach((card) => {
      resizeObserver.observe(card);
    });

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncViewportHeight);

    return () => {
      cancelAnimationFrame(scrollRafRef.current);
      scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", syncViewportHeight);
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex items-end justify-between gap-4 sm:gap-6">
        <div className="min-w-0 flex-1">{header}</div>
        <div className="mb-1 flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Previous results"
            onClick={() => scrollByCard(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg leading-none text-foreground transition hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next results"
            onClick={() => scrollByCard(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg leading-none text-foreground transition hover:border-accent hover:text-accent"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="mt-12 overflow-visible transition-[height] duration-300 ease-out motion-reduce:transition-none"
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        <div
          ref={scrollerRef}
          className="flex items-start snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain pb-2 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopItems.map((result, index) => (
            <article
              key={`${result.name}-${index}`}
              data-result-card
              className="w-full shrink-0 snap-start border border-border bg-background p-6 sm:w-[calc((100%-1.5rem)/2)] sm:p-7 lg:w-[calc((100%-3rem)/3)]"
            >
              <CardHeader
                name={result.name}
                tag={result.tag}
                context={resultContext(result)}
              />
              <ResultBody result={result} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
