"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Parallax break section.
 *
 * Sits between Diagnostic and WhyList as an editorial break — the brutalist
 * collage anchors the LIST brand visually while the surrounding copy hits a
 * pause before the manifesto.
 */
export default function Parallax3() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tick = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      // 0 when section is fully below viewport, 1 when fully scrolled past.
      const raw = 1 - (rect.top + rect.height * 0.4) / viewH;
      const p = Math.max(-0.5, Math.min(1.5, raw));
      // amplitude ~140px feels filmic without parting from neighbouring content
      setOffset(p * 140);
    };

    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
      aria-labelledby="parallax-manifesto"
    >
      {/* base layers */}
      <div className="pattern-dots absolute inset-0 opacity-100" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(closest-side, #FF4E02 0%, transparent 75%)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-12 items-center gap-10 px-6 sm:px-10">
        {/* copy column */}
        <div className="col-span-12 md:col-span-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-acid" />
              Intermezzo &mdash; Cap&iacute;tulo III
            </span>
          </span>

          <h2
            id="parallax-manifesto"
            className="reveal mt-6 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.92] tracking-[-0.04em]"
          >
            N&atilde;o &eacute; sobre
            <br />
            <em className="italic text-acid">aparecer.</em>
            <br />
            <span className="text-bone/55">&Eacute; sobre </span>
            <em className="italic">acertar.</em>
          </h2>

          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-bone/70 sm:text-xl">
            A gente fala <em className="font-display italic text-acid">menos</em> e
            decide melhor. Cada movimento da marca nasce de uma escolha &mdash;
            e a List existe para tornar essa escolha clara.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/5">
            {[
              { v: "Pensa", k: "antes" },
              { v: "Decide", k: "com método" },
              { v: "Executa", k: "com direção" },
            ].map((c) => (
              <div key={c.v} className="bg-smoke px-5 py-4 text-center">
                <p className="font-display text-2xl italic leading-none text-bone sm:text-3xl">
                  {c.v}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                  {c.k}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* parallax visual column */}
        <div className="relative col-span-12 md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* orange brutalist slab behind the collage */}
            <div
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-acid"
              aria-hidden
            />
            {/* graphite ring */}
            <div
              className="absolute inset-0 translate-x-3 -translate-y-3 rounded-3xl border border-bone/20"
              aria-hidden
            />

            <div
              className="relative h-full w-full overflow-hidden rounded-3xl border border-bone/15 bg-bone shadow-[0_30px_90px_-30px_rgba(255,78,2,0.6)]"
              style={{
                transform: `translate3d(0, ${offset * -0.25}px, 0)`,
                willChange: "transform",
              }}
            >
              <Image
                src="/images/Design-sem-nome-8 (1).webp"
                alt="Colagem editorial LIST com monitor retrô, pomba halftone e sol laranja"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                priority={false}
                className="object-cover"
                style={{
                  transform: `translate3d(0, ${offset * 0.18}px, 0) scale(1.05)`,
                  willChange: "transform",
                }}
              />
              {/* corner tags to feel like editorial print */}
              <span className="absolute left-4 top-4 rounded-full bg-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-acid">
                E&middot;01 / Capa
              </span>
              <span className="absolute bottom-4 right-4 rounded-full border border-ink/30 bg-bone/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-ink">
                List &middot; 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
