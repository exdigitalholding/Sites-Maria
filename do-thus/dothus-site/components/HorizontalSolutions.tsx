"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  LineChart,
  MessageSquareText,
  Zap,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

type Sol = {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  highlight: string;
};

const SOLUTIONS: Sol[] = [
  {
    n: "01",
    icon: Users,
    title: "Assessoria em Gestão",
    desc: "Processos claros e metas mensuráveis para uma gestão",
    highlight: "ágil, previsível e eficiente.",
  },
  {
    n: "02",
    icon: LineChart,
    title: "Dashboards Estratégicos",
    desc: "Painéis por nível hierárquico, em tempo real:",
    highlight: "decida com dados, não com achismo.",
  },
  {
    n: "03",
    icon: MessageSquareText,
    title: "do.thus IA",
    desc: "Respostas e alertas antes do problema crescer:",
    highlight: "inteligência a seu serviço, 24/7.",
  },
  {
    n: "04",
    icon: Zap,
    title: "Automações",
    desc: "Relatórios, integrações e alertas no automático:",
    highlight: "mais produtividade, menos erros.",
  },
  {
    n: "05",
    icon: MonitorSmartphone,
    title: "Software sob medida",
    desc: "Sistemas que se adaptam à sua operação:",
    highlight: "tecnologia que trabalha para você.",
  },
];

export function HorizontalSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section || reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: tween,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      className="relative overflow-hidden bg-carbon"
    >
      <div
        ref={trackRef}
        className="flex h-[100svh] w-max items-center gap-6 px-[clamp(1.25rem,5vw,5rem)] will-change-transform"
      >
        {/* painel de abertura */}
        <div className="flex h-full w-[86vw] max-w-[560px] shrink-0 flex-col justify-center">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-electric">
            Soluções
          </span>
          <h2 className="display-xl text-[clamp(2.4rem,6vw,5rem)] text-snow">
            O que entregamos{" "}
            <span className="editorial font-normal accent">na prática.</span>
          </h2>
          <p className="mt-8 max-w-sm text-lg text-text-dim">
            Cinco frentes que trabalham juntas — da estratégia à execução
            tecnológica. Continue rolando.
          </p>
          <span className="mt-10 inline-flex items-center gap-2 text-sm text-text-faint">
            <span className="h-px w-10 bg-electric" /> Arraste ou role
          </span>
        </div>

        {/* cards */}
        {SOLUTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.n}
              className="group relative flex h-[68vh] max-h-[600px] w-[80vw] max-w-[440px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface/50 p-9 transition-colors duration-500 hover:border-electric/40"
            >
              <div className="absolute -right-20 -top-20 size-52 rounded-full bg-electric/5 blur-3xl transition-all duration-700 group-hover:bg-electric/12" />
              <div className="relative flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-line bg-abyss text-electric transition-colors duration-300 group-hover:border-electric/50">
                  <Icon className="size-7" strokeWidth={1.6} />
                </span>
                <span className="font-display text-5xl font-semibold text-line-soft transition-colors duration-300 group-hover:text-electric/30">
                  {s.n}
                </span>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-snow">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-text-dim">
                  {s.desc}{" "}
                  <span className="font-medium text-electric">
                    {s.highlight}
                  </span>
                </p>
              </div>
            </article>
          );
        })}

        {/* painel de fecho */}
        <div className="flex h-full w-[70vw] max-w-[420px] shrink-0 flex-col justify-center pr-[5vw]">
          <p className="editorial text-3xl font-normal leading-snug text-snow">
            Tudo isso,{" "}
            <span className="accent">integrado e sob medida</span> para a sua
            operação.
          </p>
        </div>
      </div>
    </section>
  );
}
