"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { Timer } from "lucide-react";

const EYEBROW = "Prazos reais, não promessas";
const TITLE_A = "A sua ideia no ar em semanas,";
const TITLE_B = "não em meses.";

const stats = [
  { prefix: "~", to: 15, range: 0, unit: "dias", label: "para a primeira versão no ar" },
  { prefix: "", to: 45, range: 35, unit: "dias", label: "para um projeto padrão ficar redondo" },
  { prefix: "", to: 3, range: 0, unit: "sprints", label: "de ajuste inclusos para lapidar tudo" },
  { prefix: "", to: 10, range: 0, unit: "x", label: "de parcelamento no plano essencial" },
];

function LabEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright"
    >
      <Timer size={13} strokeWidth={2.5} />
      {children}
    </motion.span>
  );
}

/* Count-up com easing, dispara ao entrar na viewport. */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!active) return;
    if (reduce) {
      const id = requestAnimationFrame(() => setVal(target));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);
  return val;
}

function StatNumber({
  stat,
  active,
}: {
  stat: (typeof stats)[number];
  active: boolean;
}) {
  const n = useCountUp(stat.to, active);
  return (
    <span className="font-display text-4xl font-semibold tabular-nums tracking-tight text-text sm:text-5xl">
      {stat.prefix}
      {stat.range ? `${stat.range}–${n}` : n}
      {stat.unit === "x" && "x"}
    </span>
  );
}

/* ============================================================= *
 * VARIAÇÃO 1 — "Contadores + comparação"
 * Números que sobem ao entrar na tela + barra semanas vs meses.
 * ============================================================= */
export function StatsV1() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative border-b border-line bg-ink py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <LabEyebrow>{EYEBROW}</LabEyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-text">
          {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-line pt-5"
            >
              <div className="flex items-baseline gap-1.5">
                <StatNumber stat={s} active={inView} />
                {s.unit !== "x" && (
                  <span className="font-mono text-sm text-green">{s.unit}</span>
                )}
              </div>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-text-dim">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * VARIAÇÃO 2 — "A corrida: semanas vs meses"
 * Duas barras que preenchem em velocidades diferentes ao entrar
 * na tela. A da Nacional dispara; a do mercado se arrasta.
 * ============================================================= */
export function StatsV2() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  const bars = [
    {
      label: "Com a Nacional",
      time: "~15 dias",
      width: "26%",
      grad: "from-green to-green-bright",
      duration: 1,
      glow: true,
    },
    {
      label: "Mercado tradicional",
      time: "3 a 6 meses",
      width: "100%",
      grad: "from-text-faint/40 to-text-faint/20",
      duration: 2.6,
      glow: false,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 py-20 sm:py-28">
      <div className="aurora left-[6%] top-6 h-64 w-64 bg-green/12" />
      <div ref={ref} className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <LabEyebrow>{EYEBROW}</LabEyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-text">
          {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
        </h2>

        <div className="mt-14 flex max-w-3xl flex-col gap-9">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="mb-3 flex items-baseline justify-between">
                <span className="font-display text-lg font-semibold text-text">
                  {b.label}
                </span>
                <span
                  className={`font-mono text-sm ${
                    b.glow ? "text-green-bright" : "text-text-faint"
                  }`}
                >
                  {b.time}
                </span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-line/60">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: b.width } : undefined}
                  transition={{
                    duration: reduce ? 0 : b.duration,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative h-full rounded-full bg-gradient-to-r ${b.grad} ${
                    b.glow ? "shadow-[0_0_24px_-2px_rgba(38,224,138,0.7)]" : ""
                  }`}
                >
                  {b.glow && !reduce && (
                    <span className="absolute inset-0 animate-pulse rounded-full bg-white/10" />
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 max-w-xl text-sm leading-relaxed text-text-dim"
        >
          Mesmo escopo, uma fração do tempo. IA comprime o trabalho pesado e o
          time sênior garante o acabamento.
        </motion.p>
      </div>
    </section>
  );
}

/* ============================================================= *
 * VARIAÇÃO 3 — "O calendário que encolhe"
 * Uma malha de dias (6 meses). Só as primeiras semanas acendem
 * em verde, mostrando visualmente 'semanas, não meses'.
 * ============================================================= */
export function StatsV3() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const TOTAL = 168; // ~6 meses
  const LIT = 15; // ~15 dias

  return (
    <section className="relative border-b border-line bg-ink py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div ref={ref}>
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-text">
            {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
          </h2>
          <div className="mt-8 flex items-baseline gap-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="font-display text-6xl font-bold text-brand-gradient sm:text-7xl"
            >
              ~15
            </motion.span>
            <div className="max-w-[12rem]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-bright">
                dias no ar
              </p>
              <p className="mt-1 text-sm text-text-dim">
                contra os meses que o mercado costuma levar.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="flex items-center gap-2 text-text">
              <span className="size-2.5 rounded-[3px] bg-green-bright" /> Nacional
            </span>
            <span className="flex items-center gap-2 text-text-faint">
              <span className="size-2.5 rounded-[3px] bg-line" /> Mercado
            </span>
          </div>
        </div>

        {/* Malha de dias */}
        <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1.5">
          {Array.from({ length: TOTAL }).map((_, i) => {
            const lit = i < LIT;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={
                  inView
                    ? {
                        opacity: lit ? 1 : 0.5,
                        scale: 1,
                        backgroundColor: lit ? "#26e08a" : "#1c232e",
                      }
                    : undefined
                }
                transition={{
                  duration: 0.35,
                  delay: reduce ? 0 : (lit ? i * 0.04 : 0.7 + i * 0.002),
                }}
                className={`aspect-square rounded-[3px] ${
                  lit ? "shadow-[0_0_8px_-1px_rgba(38,224,138,0.8)]" : ""
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
