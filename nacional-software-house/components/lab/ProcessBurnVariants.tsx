"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { CheckCircle2, Clock } from "lucide-react";
import { process as steps } from "@/lib/site";

/* ================================================================== *
 * "O processo" — o card QUEIMA (verde/amarelo) ao sair pela lateral.
 *
 * Como funciona: o scroll vertical fica preso (sticky) e move a
 * trilha na horizontal; cada card mede a própria posição em tempo
 * real e calcula um `burn` (0→1). O efeito só liga quando o card se
 * aproxima da borda esquerda e chega a 100% preenchido POUCO ANTES de
 * sumir. Como o burn deriva da posição, tudo é reversível ao rolar de
 * volta. `prefers-reduced-motion` cai num grid estático.
 *
 * Detalhes pedidos:
 * - O card 01 começa CENTRALIZADO e limpo (sem efeito ao dar scroll),
 *   e queima ACELERADO / mais rápido que os demais (flag `fast`).
 * - O finale é um painel de LARGURA TOTAL: ao entrar, ele empurra os
 *   últimos cards (06/07) totalmente pra fora — então eles também
 *   queimam antes de sumir.
 *
 * Duas famílias:
 *   BURN  (grupo 05): Glitch · Neon · Sparks
 *   SOFT  (grupo 06): Aurora · Light sweep · Bloom  (clean/soft/bonito)
 * ================================================================== */

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

type Step = (typeof steps)[number];
type CardProps = { step: Step; x: MotionValue<number>; fast: boolean };

/* Hook: cada card calcula seu próprio burn a partir da trilha (x). */
function useCardBurn(x: MotionValue<number>, fast: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const burn = useMotionValue(0);

  const recompute = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const W = r.width || 1;
    // Janela de queima. `fast` = janela mais curta perto da borda +
    // easing acelerado (começa devagar e dispara).
    const start = fast ? W * 0.12 : W * 0.35;
    const end = fast ? -W * 0.22 : -W * 0.6;
    const raw = clamp01((start - r.left) / (start - end));
    burn.set(fast ? raw * raw : raw); // raw² = aceleração
  };

  useMotionValueEvent(x, "change", recompute);
  useEffect(() => {
    recompute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, burn };
}

/* Conteúdo do card (compartilhado por todas as variações). */
function CardBody({ step }: { step: Step }) {
  return (
    <>
      <span
        className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[11rem] font-bold leading-none text-white/[0.035] sm:text-[14rem]"
        aria-hidden
      >
        {step.n}
      </span>
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-green/40 bg-green/10 font-mono text-sm font-semibold text-green-bright">
            {step.n}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-faint">
            <Clock size={12} strokeWidth={3} /> {step.when}
          </span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-text sm:text-[1.7rem]">
          {step.title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-text-dim">
          {step.body}
        </p>
      </div>
      <div className="relative flex items-start gap-2.5 rounded-2xl border border-line bg-ink/50 p-4">
        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green" />
        <p className="text-sm text-text">
          <span className="text-text-faint">Entregável: </span>
          {step.deliverable}
        </p>
      </div>
    </>
  );
}

// Frame dimensionado (recorta o efeito) + camada de conteúdo absoluta
// (para receber filter/transform sem quebrar o justify-between).
const CARD_FRAME =
  "group relative h-[58vh] min-h-[360px] w-[min(82vw,420px)] shrink-0 overflow-hidden rounded-[2rem] border border-line bg-surface";
const CARD_PAD = "absolute inset-0 flex flex-col justify-between p-7 sm:p-9";

/* ================================================================== *
 * FAMÍLIA BURN (grupo 05)
 * ================================================================== */

/* --- 05.1 GLITCH: RGB-split verde/dourado + scanlines + bandas --- */
function GlitchCard({ step, x, fast }: CardProps) {
  const { ref, burn } = useCardBurn(x, fast);
  const eff = useTransform(burn, [0, 0.85], [0, 1]);
  const fade = useTransform(burn, [0.8, 1], [1, 0]);
  const scale = useTransform(burn, [0.8, 1], [1, 0.96]);

  const split = useTransform(eff, [0, 1], [0, 5]);
  const chroma = useTransform(
    split,
    (v) =>
      `drop-shadow(${v}px 0 rgba(38,224,138,0.85)) drop-shadow(${-v}px 0 rgba(255,212,94,0.85))`,
  );
  const scanOp = useTransform(eff, [0.12, 1], [0, 0.5]);
  const fillOp = useTransform(eff, [0.5, 1], [0, 0.85]);
  const glow = useTransform(
    eff,
    (v) => `0 0 ${v * 46}px rgba(38,224,138,${0.12 + v * 0.55})`,
  );
  const borderOp = useTransform(eff, [0, 1], [0.15, 0.9]);

  return (
    <motion.div ref={ref} style={{ opacity: fade, scale }} className={CARD_FRAME}>
      <motion.div style={{ filter: chroma }} className={CARD_PAD}>
        <CardBody step={step} />
      </motion.div>

      <motion.div
        style={{ opacity: scanOp }}
        className="burn-scanlines pointer-events-none absolute inset-0 mix-blend-screen"
        aria-hidden
      />

      <motion.div
        style={{ opacity: eff }}
        className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen"
        aria-hidden
      >
        {[
          { top: "12%", h: "10px", c: "rgba(38,224,138,0.9)", d: "0s" },
          { top: "40%", h: "6px", c: "rgba(255,212,94,0.9)", d: "-0.4s" },
          { top: "66%", h: "14px", c: "rgba(38,224,138,0.8)", d: "-0.7s" },
          { top: "84%", h: "5px", c: "rgba(255,212,94,0.85)", d: "-0.2s" },
        ].map((b, i) => (
          <span
            key={i}
            className="burn-band absolute left-[-10%] w-[120%]"
            style={{ top: b.top, height: b.h, background: b.c, animationDelay: b.d }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ opacity: fillOp }}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        aria-hidden
      >
        <div className="burn-flicker h-full w-full bg-[linear-gradient(118deg,#26e08a_0%,rgba(38,224,138,0)_42%,rgba(255,212,94,0)_58%,#ffd45e_100%)]" />
      </motion.div>

      <motion.div
        style={{ boxShadow: glow, opacity: borderOp }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] border border-green-bright"
        aria-hidden
      />
    </motion.div>
  );
}

/* --- 05.2 NEON FILL: energia consome o card da borda de saída --- */
function NeonCard({ step, x, fast }: CardProps) {
  const { ref, burn } = useCardBurn(x, fast);
  const eff = useTransform(burn, [0, 0.85], [0, 1]);
  const fade = useTransform(burn, [0.82, 1], [1, 0]);

  const fillScale = useTransform(eff, [0, 1], [0, 1]);
  const edgeLeft = useTransform(eff, [0, 1], ["0%", "100%"]);
  const edgeOp = useTransform(eff, [0.05, 0.5, 1], [0, 1, 0.6]);
  const glow = useTransform(
    eff,
    (v) =>
      `0 0 ${v * 34}px rgba(38,224,138,${v * 0.7}), inset 0 0 ${v * 46}px rgba(38,224,138,${v * 0.4})`,
  );
  const borderOp = useTransform(eff, [0, 0.4, 1], [0.2, 0.7, 1]);
  const contentShift = useTransform(eff, [0.7, 1], [0, -6]);

  return (
    <motion.div ref={ref} style={{ opacity: fade }} className={CARD_FRAME}>
      <motion.div style={{ x: contentShift }} className={CARD_PAD}>
        <CardBody step={step} />
      </motion.div>

      <motion.div
        style={{ scaleX: fillScale }}
        className="pointer-events-none absolute inset-0 origin-left mix-blend-screen"
        aria-hidden
      >
        <div className="h-full w-full bg-[linear-gradient(90deg,#26e08a_0%,rgba(38,224,138,0.45)_46%,rgba(255,212,94,0.55)_78%,#ffd45e_100%)] opacity-80" />
      </motion.div>

      <motion.div
        style={{ left: edgeLeft, opacity: edgeOp }}
        className="pointer-events-none absolute top-0 h-full w-[3px] -translate-x-1/2 bg-white/90 shadow-[0_0_18px_6px_rgba(38,224,138,0.9)]"
        aria-hidden
      />

      <motion.div style={{ opacity: eff }} className="pointer-events-none absolute inset-3" aria-hidden>
        {["left-0 top-0", "right-0 top-0", "left-0 bottom-0", "right-0 bottom-0"].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} size-2 rounded-full bg-gold-soft shadow-[0_0_12px_3px_rgba(255,212,94,0.8)]`}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ boxShadow: glow, opacity: borderOp }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] border-2 border-green-bright"
        aria-hidden
      />
    </motion.div>
  );
}

/* --- 05.3 SPARKS: brasa sobe + faíscas + desintegração --- */
const SPARKS = Array.from({ length: 16 }, (_, i) => ({
  left: `${8 + ((i * 37) % 84)}%`,
  bottom: `${4 + ((i * 53) % 40)}%`,
  size: 3 + (i % 3),
  gold: i % 2 === 0,
  sx: `${((i * 29) % 40) - 20}px`,
  sy: `${-90 - ((i * 41) % 90)}px`,
  dur: `${0.8 + ((i * 17) % 70) / 100}s`,
  delay: `${((i * 23) % 60) / 100}s`,
}));

function SparkCard({ step, x, fast }: CardProps) {
  const { ref, burn } = useCardBurn(x, fast);
  const eff = useTransform(burn, [0, 0.85], [0, 1]);
  const fade = useTransform(burn, [0.85, 1], [1, 0]);
  const scale = useTransform(burn, [0.75, 1], [1, 0.9]);
  const blur = useTransform(burn, [0.7, 1], [0, 5]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const emberScale = useTransform(eff, [0, 1], [0, 1]);
  const glow = useTransform(eff, (v) => `0 0 ${v * 40}px rgba(255,212,94,${v * 0.6})`);
  const borderOp = useTransform(eff, [0, 1], [0.15, 0.85]);
  const sparkOp = useTransform(eff, [0.15, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{ opacity: fade, scale, filter }} className={CARD_FRAME}>
      <div className={CARD_PAD}>
        <CardBody step={step} />
      </div>

      <motion.div
        style={{ scaleY: emberScale }}
        className="pointer-events-none absolute inset-0 origin-bottom mix-blend-screen"
        aria-hidden
      >
        <div className="h-full w-full bg-[linear-gradient(0deg,#ffd45e_0%,#26e08a_45%,rgba(38,224,138,0.15)_78%,transparent_100%)] opacity-85" />
        <div className="absolute inset-x-0 top-0 h-3 bg-white/70 blur-[3px]" />
      </motion.div>

      <motion.div style={{ opacity: sparkOp }} className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="spark absolute rounded-full"
            style={
              {
                left: s.left,
                bottom: s.bottom,
                width: s.size,
                height: s.size,
                background: s.gold ? "#ffd45e" : "#26e08a",
                boxShadow: `0 0 8px 2px ${s.gold ? "rgba(255,212,94,0.9)" : "rgba(38,224,138,0.9)"}`,
                animationDuration: s.dur,
                animationDelay: s.delay,
                "--sx": s.sx,
                "--sy": s.sy,
              } as React.CSSProperties
            }
          />
        ))}
      </motion.div>

      <motion.div
        style={{ boxShadow: glow, opacity: borderOp }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] border border-gold-soft"
        aria-hidden
      />
    </motion.div>
  );
}

/* ================================================================== *
 * FAMÍLIA SOFT (grupo 06) — clean, suave, sem linhas/glitch.
 * ================================================================== */

/* --- 06.1 AURORA: o card se dissolve pela borda de saída numa
   aurora verde→dourada, com brilho macio. Sem linhas. --- */
function SoftAuroraCard({ step, x, fast }: CardProps) {
  const { ref, burn } = useCardBurn(x, fast);
  const eff = useTransform(burn, [0, 0.9], [0, 1]);
  const fade = useTransform(burn, [0.78, 1], [1, 0]);
  const scale = useTransform(burn, [0, 1], [1, 1.04]);

  // Dissolve suave a partir da esquerda (borda de saída).
  const mask = useTransform(
    eff,
    (v) =>
      `linear-gradient(90deg, rgba(0,0,0,0) ${v * 52}%, rgba(0,0,0,1) ${v * 52 + 26}%)`,
  );
  const auroraOp = useTransform(eff, [0.05, 1], [0, 0.9]);
  const bright = useTransform(eff, (v) => `saturate(${1 + v * 0.6}) brightness(${1 + v * 0.12})`);
  const glow = useTransform(eff, (v) => `0 0 ${v * 60}px rgba(38,224,138,${v * 0.45})`);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: fade,
        scale,
        maskImage: mask,
        WebkitMaskImage: mask,
        boxShadow: glow,
      }}
      className={CARD_FRAME}
    >
      <motion.div style={{ filter: bright }} className={CARD_PAD}>
        <CardBody step={step} />
      </motion.div>

      {/* aurora macia (blur alto, sem bordas duras) */}
      <motion.div
        style={{ opacity: auroraOp }}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        aria-hidden
      >
        <div className="absolute -inset-8 bg-[radial-gradient(60%_80%_at_15%_60%,#26e08a_0%,rgba(38,224,138,0)_60%),radial-gradient(55%_70%_at_70%_35%,#ffd45e_0%,rgba(255,212,94,0)_60%)] blur-2xl" />
      </motion.div>
    </motion.div>
  );
}

/* --- 06.2 LIGHT SWEEP: uma faixa de luz verde→dourada varre o card
   (suave, borrada) enquanto ele levanta e desfoca. Vidro fosco. --- */
function SoftSweepCard({ step, x, fast }: CardProps) {
  const { ref, burn } = useCardBurn(x, fast);
  const eff = useTransform(burn, [0, 0.9], [0, 1]);
  const fade = useTransform(burn, [0.8, 1], [1, 0]);
  const lift = useTransform(burn, [0, 1], [0, -26]);
  const blurV = useTransform(burn, [0.45, 1], [0, 4]);
  const filter = useTransform(blurV, (v) => `blur(${v}px)`);

  const sweepX = useTransform(eff, [0, 1], ["-60%", "120%"]);
  const sweepOp = useTransform(eff, [0.05, 0.5, 1], [0, 1, 0.85]);
  const tintOp = useTransform(eff, [0.5, 1], [0, 0.55]);
  const borderOp = useTransform(eff, [0, 1], [0.18, 0.7]);
  const glow = useTransform(eff, (v) => `0 0 ${v * 44}px rgba(38,224,138,${v * 0.4})`);

  return (
    <motion.div ref={ref} style={{ opacity: fade, y: lift }} className={CARD_FRAME}>
      <motion.div style={{ filter }} className={CARD_PAD}>
        <CardBody step={step} />
      </motion.div>

      {/* tinta suave verde→dourada preenchendo */}
      <motion.div
        style={{ opacity: tintOp }}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        aria-hidden
      >
        <div className="h-full w-full bg-[linear-gradient(120deg,rgba(38,224,138,0.9),rgba(255,212,94,0.9))]" />
      </motion.div>

      {/* faixa de luz varrendo (larga e borrada) */}
      <motion.div
        style={{ x: sweepX, opacity: sweepOp }}
        className="pointer-events-none absolute -inset-y-6 left-0 w-1/2 mix-blend-screen"
        aria-hidden
      >
        <div className="h-full w-full rotate-12 bg-[linear-gradient(90deg,transparent,rgba(38,224,138,0.6)_35%,rgba(255,212,94,0.75)_60%,transparent)] blur-2xl" />
      </motion.div>

      <motion.div
        style={{ opacity: borderOp, boxShadow: glow }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] border border-green-bright/70"
        aria-hidden
      />
    </motion.div>
  );
}

/* --- 06.3 BLOOM: um brilho quente floresce de dentro, com poucas
   motas de luz macias subindo. Versão suave das faíscas. --- */
const MOTES = Array.from({ length: 9 }, (_, i) => ({
  left: `${14 + ((i * 41) % 72)}%`,
  bottom: `${10 + ((i * 47) % 45)}%`,
  size: 10 + ((i * 7) % 14),
  gold: i % 3 === 0,
  sx: `${((i * 19) % 30) - 15}px`,
  sy: `${-70 - ((i * 37) % 70)}px`,
  dur: `${1.6 + ((i * 13) % 80) / 100}s`,
  delay: `${((i * 29) % 90) / 100}s`,
}));

function SoftBloomCard({ step, x, fast }: CardProps) {
  const { ref, burn } = useCardBurn(x, fast);
  const eff = useTransform(burn, [0, 0.9], [0, 1]);
  const fade = useTransform(burn, [0.8, 1], [1, 0]);
  const scale = useTransform(burn, [0, 1], [1, 0.97]);

  const bloomOp = useTransform(eff, [0.05, 1], [0, 0.95]);
  const bloomScale = useTransform(eff, [0, 1], [0.6, 1.15]);
  const moteOp = useTransform(eff, [0.2, 0.55], [0, 1]);
  const borderOp = useTransform(eff, [0, 1], [0.16, 0.75]);
  const glow = useTransform(eff, (v) => `0 0 ${v * 52}px rgba(255,212,94,${v * 0.45})`);

  return (
    <motion.div ref={ref} style={{ opacity: fade, scale, boxShadow: glow }} className={CARD_FRAME}>
      <div className={CARD_PAD}>
        <CardBody step={step} />
      </div>

      {/* bloom radial macio verde→dourado */}
      <motion.div
        style={{ opacity: bloomOp, scale: bloomScale }}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_55%_at_50%_58%,#26e08a_0%,rgba(38,224,138,0.35)_45%,transparent_72%),radial-gradient(38%_42%_at_52%_44%,#ffd45e_0%,rgba(255,212,94,0)_70%)] blur-xl" />
      </motion.div>

      {/* motas de luz suaves */}
      <motion.div style={{ opacity: moteOp }} className="pointer-events-none absolute inset-0" aria-hidden>
        {MOTES.map((m, i) => (
          <span
            key={i}
            className="spark absolute rounded-full blur-[2px]"
            style={
              {
                left: m.left,
                bottom: m.bottom,
                width: m.size,
                height: m.size,
                background: m.gold
                  ? "radial-gradient(circle,#ffd45e,rgba(255,212,94,0))"
                  : "radial-gradient(circle,#26e08a,rgba(38,224,138,0))",
                animationDuration: m.dur,
                animationDelay: m.delay,
                "--sx": m.sx,
                "--sy": m.sy,
              } as React.CSSProperties
            }
          />
        ))}
      </motion.div>

      <motion.div
        style={{ opacity: borderOp }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] border border-gold-soft/70"
        aria-hidden
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * Painel finale — LARGURA TOTAL. Ao entrar, empurra os últimos cards
 * (06/07) totalmente pra fora, então eles também queimam. Não queima.
 * ------------------------------------------------------------------ */
function FinalePanel() {
  return (
    <div className="grid h-[58vh] min-h-[360px] w-screen shrink-0 place-items-center px-5 sm:px-8">
      <div className="max-w-xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-green-bright">
          Do primeiro oi ao site refinado
        </p>
        <p className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
          Em torno de <span className="text-brand-gradient">35 a 45 dias</span>,
          com você acompanhando cada passo.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Shell: header + trilha horizontal presa (sticky) pelo scroll.
 * ------------------------------------------------------------------ */
function ProcessShell({
  bg,
  hint,
  Card,
}: {
  bg: string;
  hint: string;
  Card: (p: CardProps) => React.ReactElement;
}) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      setDist(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const Header = (
    <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
        <span className="h-px w-6 bg-green/60" aria-hidden />O processo
      </span>
      <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-semibold leading-[1.06] tracking-tight text-text">
        Do &ldquo;oi&rdquo; ao site no ar:{" "}
        <span className="text-brand-gradient">como a gente trabalha.</span>
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-dim sm:text-base">
        {hint}
      </p>
    </div>
  );

  // Fallback acessível: grid estático, sem hijack de scroll.
  if (reduce) {
    return (
      <section className={`border-b border-line ${bg} py-16`}>
        {Header}
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 px-5 sm:px-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-line bg-surface p-7 sm:p-9"
            >
              <CardBody step={s} />
            </div>
          ))}
          <div className="rounded-[2rem] border border-green/30 bg-gradient-to-br from-surface to-ink p-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-green-bright">
              Do primeiro oi ao site refinado
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-text">
              Em torno de <span className="text-brand-gradient">35 a 45 dias</span>,
              com você acompanhando cada passo.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={wrapRef}
      className={`relative border-b border-line ${bg}`}
      style={{ height: `calc(100vh + ${dist}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-20">
        {Header}
        {/* O card 01 começa CENTRALIZADO (limpo) graças ao padding-left. */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-10 flex items-center gap-6 pl-[max(1.25rem,calc(50vw-min(41vw,210px)))]"
        >
          {steps.map((s, i) => (
            <Card key={s.n} step={s} x={x} fast={i === 0} />
          ))}
          <FinalePanel />
        </motion.div>

        <p className="mx-auto mt-8 w-full max-w-[1400px] px-5 font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint sm:px-8">
          role para ver os cards queimarem ao sair →
        </p>
      </div>
    </section>
  );
}

/* ============ EXPORTS ============ */
/* Família BURN (grupo 05) */
export function ProcessBurnV1() {
  return (
    <ProcessShell
      bg="bg-ink-2"
      hint="Glitch verde/amarelo — RGB-split, scanlines e bandas, 100% preenchido pouco antes de sumir."
      Card={GlitchCard}
    />
  );
}
export function ProcessBurnV2() {
  return (
    <ProcessShell
      bg="bg-ink"
      hint="Energia neon consome o card a partir da borda de saída, moldura acende e vira placa verde→dourada."
      Card={NeonCard}
    />
  );
}
export function ProcessBurnV3() {
  return (
    <ProcessShell
      bg="bg-ink-2"
      hint="Brasa sobe consumindo o card, faíscas verde/dourado voam e ele se desintegra incandescente."
      Card={SparkCard}
    />
  );
}

/* Família SOFT (grupo 06) — clean / soft / bonito */
export function ProcessSoftV1() {
  return (
    <ProcessShell
      bg="bg-ink"
      hint="Aurora: o card se dissolve pela borda de saída numa névoa verde→dourada macia. Sem linhas, bem suave."
      Card={SoftAuroraCard}
    />
  );
}
export function ProcessSoftV2() {
  return (
    <ProcessShell
      bg="bg-ink-2"
      hint="Light sweep: uma faixa de luz verde→dourada varre o card enquanto ele levanta e desfoca. Vidro fosco."
      Card={SoftSweepCard}
    />
  );
}
export function ProcessSoftV3() {
  return (
    <ProcessShell
      bg="bg-ink"
      hint="Bloom: um brilho quente floresce de dentro, com motas de luz suaves subindo. Elegante e calmo."
      Card={SoftBloomCard}
    />
  );
}
