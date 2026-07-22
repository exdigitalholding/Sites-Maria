"use client";

const phrases = [
  "Se você consegue descrever",
  "a gente consegue construir",
  "IA acelera",
  "gente garante",
  "do oi ao site no ar",
];

export default function Marquee() {
  const row = [...phrases, ...phrases];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-2 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8 will-change-transform">
        {row.map((p, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-medium tracking-tight text-text-dim sm:text-3xl">
              {p}
            </span>
            <span className="size-1.5 rounded-full bg-green" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
