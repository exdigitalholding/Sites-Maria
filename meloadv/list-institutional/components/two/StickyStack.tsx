"use client";

import { useEffect, useRef } from "react";
import Placeholder from "@/components/Placeholder";

type Card = {
  k: string;
  title: string;
  body: string;
  variant: "violet" | "signal" | "acid" | "mauve" | "dark" | "checker" | "grid" | "lines";
};

const CARDS: Card[] = [
  { k: "I", title: "Ecossistema", body: "Empresas e profissionais que atuam em diferentes frentes do crescimento — marketing, vendas, tecnologia, tráfego, branding e performance.", variant: "violet" },
  { k: "II", title: "Visão de Negócio", body: "Não olhamos só para campanhas. Analisamos o negócio como um todo para estratégias alinhadas ao crescimento real.", variant: "signal" },
  { k: "III", title: "Estratégia + Execução", body: "Da análise à ação. Estruturamos o plano e executamos com método, clareza e acompanhamento contínuo.", variant: "acid" },
  { k: "IV", title: "Dados, não achismo", body: "Cada recomendação nasce de diagnóstico, dados e contexto — não de tendências passageiras.", variant: "mauve" },
];

export default function StickyStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = ref.current;
    if (!sec) return;
    const slots = sec.querySelectorAll<HTMLElement>("[data-stack-slot]");
    let raf = 0;

    const tick = () => {
      const winH = window.innerHeight;
      slots.forEach((slot, i) => {
        const card = slot.querySelector<HTMLElement>("[data-stack-card]");
        const next = slots[i + 1] as HTMLElement | undefined;
        if (!card) return;
        if (!next) {
          card.style.transform = "";
          card.style.opacity = "1";
          return;
        }
        const nextRect = next.getBoundingClientRect();
        // start transforming when next slot top crosses 70% of viewport,
        // fully behind when next slot top reaches 12vh (sticky position)
        const startY = winH * 0.7;
        const endY = winH * 0.12;
        const p = Math.max(
          0,
          Math.min(1, (startY - nextRect.top) / Math.max(1, startY - endY))
        );
        const scale = 1 - p * 0.06;
        const opacity = 1 - p * 0.35;
        const rotate = (p * (i % 2 === 0 ? -2.5 : 2.5)).toFixed(2);
        card.style.transform = `scale(${scale.toFixed(4)}) rotate(${rotate}deg)`;
        card.style.opacity = opacity.toFixed(3);
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={ref} className="scene relative px-6 py-32 sm:px-12 sm:py-40">
      <header className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
          (04) — Quatro razões
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
          Por que <em className="italic text-acid">List</em>?
        </h2>
      </header>

      <div className="mx-auto mt-16 max-w-5xl">
        {CARDS.map((c, i) => (
          <div
            key={c.k}
            data-stack-slot
            className="relative"
            style={{
              height: "82vh",
              zIndex: i + 10,
              marginBottom: i === CARDS.length - 1 ? 0 : "0",
            }}
          >
            <article
              data-stack-card
              className="sticky top-[12vh] grid origin-top grid-cols-1 overflow-hidden rounded-3xl border border-bone/10 bg-smoke shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] md:grid-cols-2"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="p-10 sm:p-14">
                <div className="flex items-center gap-4">
                  <span className="font-display text-6xl italic leading-none tracking-tight text-acid">
                    {c.k}
                  </span>
                  <span className="h-px flex-1 bg-bone/15" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
                    razão {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-5xl leading-tight tracking-tight sm:text-6xl">
                  {c.title}
                </h3>
                <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70 sm:text-lg">
                  {c.body}
                </p>
              </div>
              <div className="relative min-h-[280px] md:min-h-[440px]">
                <Placeholder
                  variant={c.variant}
                  label={`stack / ${c.k}`}
                  ratio="aspect-auto"
                  className="absolute inset-0 rounded-none"
                />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
