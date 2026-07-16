"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f0ebe4] px-6 text-[#1c1915]">
      <p className="font-serif text-2xl italic">Something went wrong loading the page.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-[#7d96a6] px-5 py-2.5 text-sm font-semibold text-[#0b1014]"
      >
        Try again
      </button>
      <a href="/" className="text-sm underline">
        Go to homepage
      </a>
    </div>
  );
}
