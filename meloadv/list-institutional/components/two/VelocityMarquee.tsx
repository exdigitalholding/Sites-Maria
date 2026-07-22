"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "Estratégia",
  "Performance",
  "Diagnóstico",
  "Direção",
  "Crescimento",
  "Previsibilidade",
  "Branding",
  "Conversão",
];

export default function VelocityMarquee() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const tracks = wrap.querySelectorAll<HTMLElement>("[data-line]");
    if (tracks.length < 2) return;

    // each line's inner contains the row twice — measure half-width for seamless wrap
    let widthA = 0;
    let widthB = 0;
    let offsetA = 0;
    let offsetB = 0;
    let raf = 0;

    const measure = () => {
      widthA = tracks[0].scrollWidth / 2;
      widthB = tracks[1].scrollWidth / 2;
    };

    measure();
    const t1 = window.setTimeout(measure, 300);
    const t2 = window.setTimeout(measure, 1200);
    const ro = new ResizeObserver(measure);
    ro.observe(tracks[0]);
    ro.observe(tracks[1]);

    const wrapMod = (val: number, mod: number) => ((val % mod) + mod) % mod;

    const tick = () => {
      const v = Number(getComputedStyle(document.documentElement).getPropertyValue("--sv")) || 0;
      const cappedV = Math.max(-40, Math.min(40, v));
      // base drift is slow and steady; velocity scales it modestly
      const baseSpeed = 0.35;
      const velBoost = Math.abs(cappedV) * 0.08;
      const speed = baseSpeed + velBoost;

      offsetA -= speed;
      offsetB += speed;

      if (widthA > 0) offsetA = -wrapMod(-offsetA, widthA);
      if (widthB > 0) offsetB = wrapMod(offsetB, widthB);

      const skew = Math.max(-7, Math.min(7, cappedV * -0.15));

      tracks[0].style.transform = `translate3d(${offsetA.toFixed(2)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`;
      tracks[1].style.transform = `translate3d(${(-offsetB).toFixed(2)}px, 0, 0) skewX(${(-skew).toFixed(2)}deg)`;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      ro.disconnect();
    };
  }, []);

  const row = (
    <span className="inline-flex shrink-0 items-center gap-16 whitespace-nowrap pr-16">
      {WORDS.map((w, i) => (
        <span key={i} className="inline-flex shrink-0 items-center gap-16">
          <span className="font-display text-[clamp(4rem,11vw,11rem)] italic leading-none tracking-tight">
            {w}
          </span>
          <svg viewBox="0 0 24 24" className="size-12 shrink-0 text-acid" fill="currentColor" aria-hidden>
            <path d="M12 2l2.5 7.5H22l-6.25 4.5L18 22l-6-4.5L6 22l2.25-8L2 9.5h7.5z" />
          </svg>
        </span>
      ))}
    </span>
  );

  return (
    <section
      ref={ref}
      className="scene relative my-24 overflow-hidden border-y border-bone/10 py-12 sm:py-20"
    >
      <div className="pattern-dots absolute inset-0 opacity-15" aria-hidden />
      <div className="relative">
        <div
          data-line
          className="flex w-max whitespace-nowrap will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {row}
          {row}
        </div>
        <div
          data-line
          className="mt-8 flex w-max whitespace-nowrap will-change-transform text-stroke"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {row}
          {row}
        </div>
      </div>

      <p className="absolute right-6 top-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50 sm:right-12">
        velocity ∝ scroll
      </p>
    </section>
  );
}
