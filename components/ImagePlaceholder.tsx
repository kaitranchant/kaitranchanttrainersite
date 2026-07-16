type ImagePlaceholderProps = {
  label: string;
  className?: string;
  ratio?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/5]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`placeholder-media relative flex items-end overflow-hidden ${ratio} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,150,166,0.18),transparent_45%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(28,25,21,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(28,25,21,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
      <p className="relative z-10 p-4 text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
    </div>
  );
}
