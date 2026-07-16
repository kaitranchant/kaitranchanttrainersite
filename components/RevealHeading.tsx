"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

export type RevealSegment = {
  text: string;
  className?: string;
};

type RevealHeadingProps = {
  as?: ElementType;
  className?: string;
  segments: RevealSegment[];
  /** Ms between each character appearing */
  staggerMs?: number;
};

function splitWords(text: string) {
  return text.split(/(\s+)/);
}

export function RevealHeading({
  as: Tag = "h2",
  className = "",
  segments,
  staggerMs = 18,
}: RevealHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [play, setPlay] = useState(false);
  const fullText = segments.map((s) => s.text).join("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlay(true);
      return;
    }

    let started = false;
    let timeoutId = 0;

    const start = () => {
      if (started) return;
      started = true;
      window.clearTimeout(timeoutId);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPlay(true);
        });
      });
    };

    // Never leave text permanently invisible
    timeoutId = window.setTimeout(start, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      },
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  let charIndex = 0;

  return (
    <Tag
      ref={ref as never}
      className={`reveal-heading ${className}`.trim()}
      aria-label={fullText}
      data-play={play ? "true" : "false"}
    >
      <span aria-hidden="true">
        {segments.map((segment, segmentIndex) => (
          <span key={segmentIndex} className={segment.className}>
            {splitWords(segment.text).map((chunk, chunkIndex) => {
              if (/^\s+$/.test(chunk)) {
                return (
                  <span key={`s-${segmentIndex}-${chunkIndex}`}>{chunk}</span>
                );
              }

              return (
                <span
                  key={`w-${segmentIndex}-${chunkIndex}`}
                  className="reveal-word"
                >
                  {Array.from(chunk).map((char, localIndex) => {
                    const i = charIndex++;
                    return (
                      <span
                        key={`${i}-${localIndex}`}
                        className="reveal-char"
                        style={
                          {
                            "--reveal-delay": `${i * staggerMs}ms`,
                          } as CSSProperties
                        }
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Tag>
  );
}
