"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { DashboardMock, AiChatMock, AutomationMock } from "./mockups";

const EASE = [0.22, 1, 0.36, 1] as const;

const PANELS: {
  eyebrow: string;
  title: ReactNode;
  desc: string;
  mock: ReactNode;
}[] = [
  {
    eyebrow: "Dashboards Estratégicos",
    title: (
      <>
        O que{" "}
        <span className="editorial font-normal accent">realmente importa</span>,
        em tempo real.
      </>
    ),
    desc: "Painéis por área e nível hierárquico, com os indicadores certos para cada decisão.",
    mock: <DashboardMock />,
  },
  {
    eyebrow: "do.thus IA",
    title: (
      <>
        <span className="editorial font-normal accent">Converse</span> com os
        dados da sua empresa.
      </>
    ),
    desc: "Gestores perguntam, a IA responde com análises e alertas. Inteligência a seu serviço, 24/7.",
    mock: <AiChatMock />,
  },
  {
    eyebrow: "Automações",
    title: (
      <>
        Menos operacional. Mais{" "}
        <span className="editorial font-normal accent">estratégico.</span>
      </>
    ),
    desc: "Relatórios, integrações e alertas que rodam sozinhos e avisam quando algo sai do plano.",
    mock: <AutomationMock />,
  },
];

export function PinnedShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(PANELS.length - 1, Math.floor(v * PANELS.length));
    setActive(idx);
  });

  return (
    <section ref={ref} className="relative h-[320vh] bg-abyss">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="container-do grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* texto que troca */}
          <div className="relative">
            {/* trilha de progresso vertical */}
            <div className="mb-8 flex gap-2">
              {PANELS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i === active ? "bg-electric" : "bg-line"
                  }`}
                />
              ))}
            </div>

            <div className="relative min-h-[300px]">
              {PANELS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    y: i === active ? 0 : 20,
                    filter: i === active ? "blur(0px)" : "blur(6px)",
                  }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="absolute inset-0"
                  style={{ pointerEvents: i === active ? "auto" : "none" }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">
                    {p.eyebrow}
                  </span>
                  <h3 className="mt-5 text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.05] text-snow">
                    {p.title}
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-text-dim">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* mockups que trocam com crossfade + parallax */}
          <div className="relative flex h-[440px] items-center justify-center">
            {PANELS.map((p, i) => (
              <Panel
                key={i}
                index={i}
                active={active}
                progress={scrollYProgress}
              >
                {p.mock}
              </Panel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({
  children,
  index,
  active,
  progress,
}: {
  children: ReactNode;
  index: number;
  active: number;
  progress: MotionValue<number>;
}) {
  // leve parallax dentro do trecho de cada painel
  const y = useTransform(progress, [0, 1], [30, -30]);
  const isActive = index === active;
  return (
    <motion.div
      style={{ y }}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.94,
      }}
      transition={{ duration: 0.6, ease: EASE }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full max-w-md">{children}</div>
    </motion.div>
  );
}
