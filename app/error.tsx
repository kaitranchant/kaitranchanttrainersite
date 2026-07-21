"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#111110] px-6 text-[#f3f1ed]">
      <p className="font-display text-2xl font-bold">Something went wrong loading the page.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-[#ff5c1f] px-5 py-2.5 text-sm font-semibold text-[#0d0c0b]"
      >
        Try again
      </button>
      <a href="/" className="text-sm underline">
        Go to homepage
      </a>
    </div>
  );
}
