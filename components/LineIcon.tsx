export function LineIcon({
  name,
  className = "h-5 w-5 text-accent",
}: {
  name:
    | "home"
    | "globe"
    | "clock"
    | "laptop"
    | "leaf"
    | "badge"
    | "book"
    | "sessions"
    | "strength";
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-6-3.8-9s1.3-6.2 3.8-9Z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
    case "laptop":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M2 19h20" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" />
          <path d="M5 19c3-5 7-9 14-14" />
        </svg>
      );
    case "badge":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v16.5H7.5A2.5 2.5 0 0 0 5 21V4.5Z" />
          <path d="M5 18.5h12" />
        </svg>
      );
    case "sessions":
      return (
        <svg {...common}>
          <path d="M4 19V9" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M20 19v-3" />
        </svg>
      );
    case "strength":
      return (
        <svg {...common}>
          <path d="M4 9v6" />
          <path d="M20 9v6" />
          <path d="M7 8v8" />
          <path d="M17 8v8" />
          <path d="M7 12h10" />
          <path d="M2 11v2" />
          <path d="M22 11v2" />
        </svg>
      );
    default:
      return null;
  }
}
