"use client";

import {
  useRef,
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

export function RevealHeading({
  as: Tag = "h2",
  className = "",
  segments,
  staggerMs = 18,
  eager = false,
}: RevealHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
  const play = useRevealOnScroll(ref, { eager });
  const fullText = segments.map((s) => s.text).join("");

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
