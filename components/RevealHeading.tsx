"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export type RevealSegment = {
  text: string;
  className?: string;
};

type RevealHeadingProps = {
  as?: ElementType;
  className?: string;
  segments: RevealSegment[];
  staggerMs?: number;
  eager?: boolean;
};

function splitWords(text: string) {
  return text.split(/(\s+)/);
}

function countChars(segments: RevealSegment[]) {
  return segments.reduce(
    (total, segment) =>
      total + Array.from(segment.text.replace(/\s+/g, "")).length,
    0,
  );
}

export function RevealHeading({
  as: Tag = "h2",
  className = "",
  segments,
  staggerMs = 18,
  eager = false,
}: RevealHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
  const play = useRevealOnScroll(ref, { eager });
  const [done, setDone] = useState(false);
  const fullText = segments.map((s) => s.text).join("");
  const charCount = countChars(segments);

  useEffect(() => {
    if (!play) return;

    // Force every letter into its final state after the stagger finishes,
    // so a mid-flight animation can't leave ghosted/stuck characters.
    const settleMs = Math.max(0, charCount - 1) * staggerMs + 500;
    const id = window.setTimeout(() => setDone(true), settleMs);
    return () => window.clearTimeout(id);
  }, [play, charCount, staggerMs]);

  let charIndex = 0;

  return (
    <Tag
      ref={ref as never}
      className={`reveal-heading ${className}`.trim()}
      aria-label={fullText}
      data-play={play ? "true" : "false"}
      data-done={done ? "true" : "false"}
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
