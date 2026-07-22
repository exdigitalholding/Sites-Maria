import { clsx } from "@/lib/clsx";

/**
 * Wordmark do.thus. O ponto é SEMPRE Azul Elétrico (#00D2FF) — assinatura da marca.
 * Renderizado em texto para nitidez perfeita em qualquer densidade.
 */
export function Wordmark({
  className,
  tagline = false,
}: {
  className?: string;
  tagline?: boolean;
}) {
  return (
    <span className={clsx("inline-flex flex-col leading-none", className)}>
      <span className="font-display font-semibold tracking-tight text-snow">
        do<span className="text-electric">.</span>thus
      </span>
      {tagline && (
        <span className="mt-1 text-[0.5em] font-sans font-medium uppercase tracking-[0.34em] text-text-dim">
          Inteligência em Gestão
        </span>
      )}
    </span>
  );
}

/**
 * Monograma "d." — usado como watermark e favicon.
 * Baseado na forma do logotipo: um "d" geométrico com o ponto elétrico.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="do.thus"
      fill="none"
    >
      <path
        d="M63 12v45.5a24.5 24.5 0 1 1-13-21.66V12z"
        fill="currentColor"
      />
      <circle cx="79.5" cy="70.5" r="11.5" fill="#00D2FF" />
    </svg>
  );
}
