"use client";

import { useEffect, useRef } from "react";
import Placeholder from "@/components/Placeholder";

type Card = {
  index: string;
  title: string;
  body: string;
  variant: "violet" | "signal" | "acid" | "mauve" | "dark" | "checker" | "grid" | "lines";
};

const CARDS: Card[] = [
  { index: "01", title: "Estratégia", body: "Mensagem clara, diferencial competitivo e direção para crescimento sustentável.", variant: "acid" },
  { index: "02", title: "Branding", body: "Marcas que comunicam valor, autoridade e coerência em todos os pontos de contato.", variant: "mauve" },
  { index: "03", title: "Conteúdo", body: "Conteúdo estratégico para atrair, educar e preparar o público para a venda.", variant: "violet" },
  { index: "04", title: "Copywriting", body: "Textos persuasivos orientados a conversão com base em dados e comportamento.", variant: "signal" },
  { index: "05", title: "Tráfego", body: "Mídia paga com foco em performance, previsibilidade e escala.", variant: "checker" },
  { index: "06", title: "Consultoria", body: "Diagnóstico contínuo e orientação estratégica para a tomada de decisão.", variant: "grid" },
];

export default function HorizontalScroll() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!wrap || !track) return;

    let raf = 0;
    let maxScroll = 0;
    let pinDistance = 0;

    const measure = () => {
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      maxScroll = Math.max(0, track.scrollWidth - winW);
      pinDistance = maxScroll;
      // wrap height = 1 viewport (the pin) + the horizontal distance to scroll through
      wrap.style.height = `${winH + pinDistance}px`;
    };

    measure();
    window.addEventListener("resize", measure);

    // re-measure after fonts load
    const t1 = window.setTimeout(measure, 250);
    const t2 = window.setTimeout(measure, 1000);

    const tick = () => {
      const rect = wrap.getBoundingClientRect();
      // pin starts when rect.top reaches 0
      // pin ends when rect.top reaches -pinDistance
      const p =
        pinDistance > 0 ? Math.max(0, Math.min(1, -rect.top / pinDistance)) : 0;
      track.style.transform = `translate3d(${(-maxScroll * p).toFixed(2)}px, 0, 0)`;
      if (bar) bar.style.transform = `scaleX(${p.toFixed(4)})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <section ref={wrapRef} className="scene relative">
      <div className="h-scroll-pin">
        <header className="relative z-10 flex items-end justify-between gap-6 px-6 pt-12 sm:px-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
              (02) — Frentes integradas
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.9] tracking-tight sm:text-7xl">
              Seis frentes.<br />
              <em className="italic text-acid">Um time só.</em>
            </h2>
          </div>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50 sm:block">
            ← role para o lado →
          </p>
        </header>

        <div ref={trackRef} className="h-scroll-track mt-6">
          {CARDS.map((card, i) => (
            <article
              key={card.index}
              className={`relative flex h-[68vh] w-[78vw] shrink-0 flex-col justify-between rounded-3xl border border-bone/10 bg-smoke p-8 sm:w-[44vw] sm:p-10 ${
                i % 2 === 0 ? "translate-y-6" : "-translate-y-6"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
                  {card.index} / 06
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
                  · {card.variant}
                </span>
              </div>

              <div className="flex-1 py-8">
                <Placeholder
                  variant={card.variant}
                  label={`h-card / ${card.index}`}
                  ratio="aspect-[5/3]"
                />
              </div>

              <div>
                <h3 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-bone/70">
                  {card.body}
                </p>
              </div>
            </article>
          ))}

          {/* end-card */}
          <article className="flex h-[68vh] w-[78vw] shrink-0 flex-col items-start justify-center rounded-3xl border border-acid/30 bg-acid/5 p-10 sm:w-[44vw]">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
              fim do horizonte
            </span>
            <h3 className="mt-6 font-display text-5xl italic leading-[0.95] tracking-tight text-acid sm:text-6xl">
              continue<br />rolando para baixo.
            </h3>
            <svg viewBox="0 0 24 24" className="mt-10 size-12 text-acid" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M12 4v16M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </article>
        </div>

        {/* progress bar */}
        <div className="pointer-events-none absolute inset-x-12 bottom-8 h-px overflow-hidden bg-bone/10">
          <div ref={barRef} className="h-full origin-left bg-acid" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
}
