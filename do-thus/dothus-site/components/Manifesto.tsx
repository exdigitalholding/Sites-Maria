"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

/**
 * Statement em tela cheia. A seção é alta (250vh) e o texto fica sticky no centro:
 * conforme você rola, cada palavra se acende. Uma ideia, muito ar — ritmo Apple.
 */
const WORDS = [
  { t: "Empresas", a: false },
  { t: "inteligentes", a: true },
  { t: "tomam", a: false },
  { t: "decisões", a: true },
  { t: "melhores.", a: true },
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[250vh] bg-abyss">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="halo absolute left-1/2 top-1/2 size-[70vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-25" />
        <div className="container-do relative">
          <p className="display-xl max-w-[16ch] text-[clamp(2.5rem,8vw,6.5rem)]">
            {WORDS.map((w, i) => {
              const start = 0.08 + (i / WORDS.length) * 0.72;
              const end = start + 0.72 / WORDS.length;
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  accent={w.a}
                >
                  {w.t}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const blur = useTransform(progress, range, ["6px", "0px"]);
  return (
    <motion.span
      style={{ opacity, filter: blur }}
      className={accent ? "editorial font-normal accent" : "text-snow"}
    >
      {children}{" "}
    </motion.span>
  );
}
