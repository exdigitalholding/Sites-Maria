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
import { BrazilFlag } from "./BrazilFlag";

/* ================================================================== *
 * "O processo" — o card é ENVOLVIDO pela bandeira do Brasil ao sair
 * pela lateral esquerda. Tecido suave (verde, losango amarelo, círculo
 * "Ordem e Progresso"), 100% coberto pouco antes de sumir. Reversível,
 * com fallback reduced-motion. Todos os cards se comportam igual (sem
 * aceleração no 01); o 01 apenas começa centralizado e limpo.
 *
 * 4 linguagens de "envolver":
 *   V1 Drapejar   — a bandeira cobre a partir da borda de saída
 *   V2 Girar 3D   — o card gira e a face de trás é a bandeira
 *   V3 Desenrolar — a bandeira desce como um estandarte
 *   V4 Virar tecido — o card inteiro se transforma na bandeira (mask)
 * ================================================================== */

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

type Step = (typeof steps)[number];
type CardProps = { step: Step; x: MotionValue<number> };

function useCardBurn(x: MotionValue<number>) {
  const ref = useRef<HTMLDivElement>(null);
  const burn = useMotionValue(0);

  const recompute = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const W = r.width || 1;
    const start = W * 0.35;
    const end = -W * 0.6;
    burn.set(clamp01((start - r.left) / (start - end)));
  };

  useMotionValueEvent(x, "change", recompute);
  useEffect(() => {
    recompute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, burn };
}

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

const CARD_FRAME =
  "group relative h-[58vh] min-h-[360px] w-[min(82vw,420px)] shrink-0 rounded-[2rem] border border-line bg-surface";
const CARD_CLIP = CARD_FRAME + " overflow-hidden";
const CARD_PAD = "absolute inset-0 flex flex-col justify-between p-7 sm:p-9";

/* Fases compartilhadas: flag 100% coberta em burn 0.8, some entre 0.9→1. */
function usePhases(burn: MotionValue<number>) {
  const eff = useTransform(burn, [0, 0.8], [0, 1]);
  const fade = useTransform(burn, [0.9, 1], [1, 0]);
  return { eff, fade };
}

/* --- V1 DRAPEJAR: a bandeira cobre a partir da borda de saída --- */
function FlagDrapeCard({ step, x }: CardProps) {
  const { ref, burn } = useCardBurn(x);
  const { eff, fade } = usePhases(burn);
  const edgeLeft = useTransform(eff, [0, 1], ["0%", "100%"]);
  const edgeOp = useTransform(eff, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity: fade }} className={CARD_CLIP}>
      <div className={CARD_PAD}>
        <CardBody step={step} />
      </div>

      {/* bandeira drapejando da esquerda */}
      <motion.div
        style={{ scaleX: eff }}
        className="pointer-events-none absolute inset-0 origin-left"
        aria-hidden
      >
        <BrazilFlag className="h-full w-full" />
      </motion.div>

      {/* dobra de luz na borda que avança (tecido enrolando) */}
      <motion.div
        style={{ left: edgeLeft, opacity: edgeOp }}
        className="pointer-events-none absolute inset-y-0 w-10 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.35)_60%,rgba(255,255,255,0.35))]"
        aria-hidden
      />
    </motion.div>
  );
}

/* --- V2 GIRAR 3D: o card gira e a face de trás é a bandeira --- */
function FlagFlipCard({ step, x }: CardProps) {
  const { ref, burn } = useCardBurn(x);
  const { fade } = usePhases(burn);
  const rotate = useTransform(burn, [0, 0.85], [0, -168]);
  const shade = useTransform(burn, [0, 0.45, 0.9], [0, 0.5, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: fade, perspective: 1100 }}
      className={CARD_FRAME}
    >
      <motion.div
        style={{ rotateY: rotate, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        {/* face frente: conteúdo */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] border border-line bg-surface [backface-visibility:hidden]"
        >
          <div className={CARD_PAD}>
            <CardBody step={step} />
          </div>
        </div>

        {/* face verso: bandeira */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <BrazilFlag className="h-full w-full" />
        </div>
      </motion.div>

      {/* sombra do vinco durante o giro */}
      <motion.div
        style={{ opacity: shade }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] bg-black"
        aria-hidden
      />
    </motion.div>
  );
}

/* --- V3 DESENROLAR: a bandeira desce como um estandarte --- */
function FlagUnfurlCard({ step, x }: CardProps) {
  const { ref, burn } = useCardBurn(x);
  const { eff, fade } = usePhases(burn);
  const edgeTop = useTransform(eff, [0, 1], ["0%", "100%"]);
  const edgeOp = useTransform(eff, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity: fade }} className={CARD_CLIP}>
      <div className={CARD_PAD}>
        <CardBody step={step} />
      </div>

      {/* bandeira desenrolando de cima */}
      <motion.div
        style={{ scaleY: eff }}
        className="pointer-events-none absolute inset-0 origin-top"
        aria-hidden
      >
        <BrazilFlag className="h-full w-full" />
      </motion.div>

      {/* barra inferior do estandarte descendo */}
      <motion.div
        style={{ top: edgeTop, opacity: edgeOp }}
        className="pointer-events-none absolute inset-x-0 h-8 -translate-y-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4)_60%,rgba(255,255,255,0.3))]"
        aria-hidden
      />
    </motion.div>
  );
}

/* --- V4 VIRAR TECIDO: o card inteiro se transforma na bandeira --- */
function FlagMorphCard({ step, x }: CardProps) {
  const { ref, burn } = useCardBurn(x);
  const { eff, fade } = usePhases(burn);
  const contentOp = useTransform(eff, [0.1, 0.7], [1, 0]);
  const mask = useTransform(
    eff,
    (v) =>
      `linear-gradient(90deg, rgba(0,0,0,1) ${v * 100}%, rgba(0,0,0,0) ${v * 100 + 14}%)`,
  );

  return (
    <motion.div ref={ref} style={{ opacity: fade }} className={CARD_CLIP}>
      <motion.div style={{ opacity: contentOp }} className={CARD_PAD}>
        <CardBody step={step} />
      </motion.div>

      {/* bandeira revelada suavemente a partir da borda de saída */}
      <motion.div
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <BrazilFlag className="h-full w-full" />
      </motion.div>
    </motion.div>
  );
}

/* Painel finale — largura total; empurra os últimos cards pra fora. */
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
          {steps.map((s) => (
            <Card key={s.n} step={s} x={x} />
          ))}
          <FinalePanel />
        </motion.div>

        <p className="mx-auto mt-8 w-full max-w-[1400px] px-5 font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint sm:px-8">
          role para ver a bandeira envolver os cards →
        </p>
      </div>
    </section>
  );
}

/* ============ EXPORTS: 4 variações de bandeira ============ */
export function ProcessFlagV1() {
  return (
    <ProcessShell
      bg="bg-ink-2"
      hint="Drapejar: a bandeira cobre o card a partir da borda de saída, como um tecido puxado por cima."
      Card={FlagDrapeCard}
    />
  );
}
export function ProcessFlagV2() {
  return (
    <ProcessShell
      bg="bg-ink"
      hint="Girar 3D: o card gira suave e a face de trás é a bandeira — vira bandeira ao sair."
      Card={FlagFlipCard}
    />
  );
}
export function ProcessFlagV3() {
  return (
    <ProcessShell
      bg="bg-ink-2"
      hint="Desenrolar: a bandeira desce como um estandarte, cobrindo o card de cima para baixo."
      Card={FlagUnfurlCard}
    />
  );
}
export function ProcessFlagV4() {
  return (
    <ProcessShell
      bg="bg-ink"
      hint="Virar tecido: o card inteiro se transforma na bandeira, revelada suavemente da borda de saída."
      Card={FlagMorphCard}
    />
  );
}
