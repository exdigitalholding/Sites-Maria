"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/**
 * VARIAÇÃO 1 — "Cinética"
 * Section pinada: o scroll esculpe a frase palavra por palavra (mask reveal
 * com rotação), texto fantasma gigante em parallax atrás, linhas de
 * velocidade cruzando em direções opostas e o card final virando em 3D.
 * Transform/opacity only — suave também no mobile.
 */

type WordDef = { t: string; accent?: boolean };

const WORDS: WordDef[] = [
  { t: "Uma" },
  { t: "software" },
  { t: "house" },
  { t: "que" },
  { t: "junta" },
  { t: "velocidade", accent: true },
  { t: "de", accent: true },
  { t: "IA", accent: true },
  { t: "com" },
  { t: "o" },
  { t: "cuidado" },
  { t: "de" },
  { t: "gente" },
  { t: "boa" },
  { t: "de" },
  { t: "código." },
];

function Word({
  progress,
  index,
  def,
}: {
  progress: MotionValue<number>;
  index: number;
  def: WordDef;
}) {
  const start = 0.04 + index * 0.031;
  const end = start + 0.14;
  const y = useTransform(progress, [start, end], ["115%", "0%"]);
  const rotate = useTransform(progress, [start, end], [10, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
      <motion.span
        style={{ y, rotate, opacity }}
        className={`inline-block origin-bottom-left will-change-transform ${
          def.accent ? "text-brand-gradient" : ""
        }`}
      >
        {def.t}
      </motion.span>
    </span>
  );
}

export default function ManifestoKinetic({ id = "manifesto" }: { id?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const ghostX = useTransform(scrollYProgress, [0, 1], ["4%", "-22%"]);
  const eyebrowOpacity = useTransform(scrollYProgress, [0.01, 0.06], [0, 1]);
  const subOpacity = useTransform(scrollYProgress, [0.6, 0.72], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.6, 0.72], [30, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.72, 0.86], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.72, 0.88], [90, 0]);
  const cardRotateX = useTransform(scrollYProgress, [0.72, 0.88], [42, 0]);
  const rail = useTransform(scrollYProgress, [0.04, 0.88], [0, 1]);
  const line1X = useTransform(scrollYProgress, [0, 1], ["-15%", "45%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["25%", "-40%"]);

  if (reduce) {
    return (
      <section id={id} className="relative overflow-hidden border-b border-line bg-ink py-28 sm:py-40">
        <div className="pattern-grid pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-text">
            Uma software house que junta{" "}
            <span className="text-brand-gradient">velocidade de IA</span> com o
            cuidado de gente boa de código.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg">
            IA em cada etapa, do briefing à entrega, para fazer em dias o que o
            mercado leva meses. Mas quem revisa e assina embaixo é um time de
            verdade. Rápido, sem entregar mal feito.
          </p>
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-green/25 bg-surface/50 p-8 backdrop-blur-sm">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
              Se você consegue descrever, a gente consegue construir.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={container}
      className="relative border-b border-line bg-ink"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <div className="pattern-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_45%,rgba(18,183,106,0.12),transparent_70%)]" />

        {/* Texto fantasma em parallax */}
        <motion.div
          aria-hidden
          style={{ x: ghostX }}
          className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 select-none whitespace-nowrap font-display text-[24vw] font-bold uppercase leading-none tracking-tighter text-transparent opacity-[0.06] [-webkit-text-stroke:1px_rgba(232,237,243,0.5)]"
        >
          Velocidade · Cuidado · Velocidade
        </motion.div>

        {/* Linhas de velocidade */}
        <motion.div
          aria-hidden
          style={{ x: line1X }}
          className="pointer-events-none absolute top-[20%] left-0 h-px w-[140%] bg-gradient-to-r from-transparent via-green/40 to-transparent"
        />
        <motion.div
          aria-hidden
          style={{ x: line2X }}
          className="pointer-events-none absolute top-[80%] left-0 h-px w-[140%] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              style={{ opacity: eyebrowOpacity }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright"
            >
              Manifesto
            </motion.p>

            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-text">
              {WORDS.map((w, i) => (
                <span key={i}>
                  <Word progress={scrollYProgress} index={i} def={w} />{" "}
                </span>
              ))}
            </h2>

            <motion.p
              style={{ opacity: subOpacity, y: subY }}
              className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg"
            >
              IA em cada etapa, do briefing à entrega, para fazer em dias o que
              o mercado leva meses. Mas quem revisa e assina embaixo é um time
              de verdade. Rápido, sem entregar mal feito.
            </motion.p>

            <div className="mt-14 [perspective:1200px]">
              <motion.div
                style={{
                  opacity: cardOpacity,
                  y: cardY,
                  rotateX: cardRotateX,
                  transformOrigin: "top center",
                }}
                className="mx-auto max-w-2xl rounded-2xl border border-green/25 bg-surface/50 p-8 backdrop-blur-sm will-change-transform"
              >
                <p className="font-display text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
                  Se você consegue descrever, a gente consegue construir.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trilho de progresso do scrub */}
        <div className="absolute bottom-8 left-1/2 h-px w-44 -translate-x-1/2 bg-line">
          <motion.div
            style={{ scaleX: rail }}
            className="h-full w-full origin-left bg-green"
          />
        </div>
      </div>
    </section>
  );
}
