"use client";

import Image from "next/image";
import { useState } from "react";

type SafePhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function SafePhoto({ src, alt, className = "", sizes }: SafePhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-surface text-[10px] uppercase tracking-[0.14em] text-muted ${className}`}
        aria-label={alt}
      >
        Photo
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
