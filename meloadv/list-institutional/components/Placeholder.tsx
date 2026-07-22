type Variant = "violet" | "signal" | "acid" | "mauve" | "dark" | "checker" | "grid" | "lines";

type Props = {
  variant?: Variant;
  label?: string;
  ratio?: string;
  className?: string;
};

/**
 * Visual placeholder. Replace by an <Image /> from next/image once real assets
 * are added to /public/images. See IMAGES.md.
 */
export default function Placeholder({
  variant = "violet",
  label = "image",
  ratio = "aspect-[4/5]",
  className = "",
}: Props) {
  const palettes: Record<Variant, { bg: string; ink: string; pattern: string }> = {
    violet: { bg: "bg-violet", ink: "text-bone", pattern: "pattern-dots" },
    signal: { bg: "bg-signal", ink: "text-bone", pattern: "pattern-grid" },
    acid: { bg: "bg-acid", ink: "text-ink", pattern: "pattern-grid" },
    mauve: { bg: "bg-mauve", ink: "text-ink", pattern: "pattern-dots" },
    dark: { bg: "bg-ink", ink: "text-bone", pattern: "pattern-grid" },
    checker: { bg: "bg-bone", ink: "text-ink", pattern: "pattern-checker" },
    grid: { bg: "bg-cream", ink: "text-ink", pattern: "pattern-grid" },
    lines: { bg: "bg-bone", ink: "text-ink", pattern: "pattern-stripes" },
  };
  const { bg, ink, pattern } = palettes[variant];

  return (
    <figure
      className={`relative overflow-hidden rounded-3xl ${bg} ${ink} ${ratio} ${className}`}
      data-placeholder={label}
    >
      <div className={`absolute inset-0 ${pattern} opacity-60`} aria-hidden />
      <div className="absolute inset-0 flex items-end justify-between p-5 text-[10px] uppercase tracking-[0.2em] sm:p-6">
        <span className="font-mono opacity-80">{"///"} placeholder</span>
        <span className="font-mono opacity-80">{label}</span>
      </div>
      <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
        <svg viewBox="0 0 24 24" className="size-5 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M3 7h2M3 12h2M3 17h2M7 7h14M7 12h14M7 17h14" strokeLinecap="round" />
        </svg>
      </div>
    </figure>
  );
}
