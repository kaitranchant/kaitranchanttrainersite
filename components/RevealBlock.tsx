"use client";

import {
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type RevealBlockProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delayMs?: number;
  eager?: boolean;
};

export function RevealBlock({
  as: Tag = "div",
  className = "",
  children,
  delayMs = 0,
  eager = false,
}: RevealBlockProps) {
  const ref = useRef<HTMLElement | null>(null);
  const play = useRevealOnScroll(ref, { eager });

  return (
    <Tag
      ref={ref as never}
      className={`reveal-block ${className}`.trim()}
      data-play={play ? "true" : "false"}
      style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
