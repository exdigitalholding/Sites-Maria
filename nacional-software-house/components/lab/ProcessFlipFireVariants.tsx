"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Clock, Flame } from "lucide-react";
import { process as steps } from "@/lib/site";

/* ================================================================== *
 * "O processo" — ao passar o mouse, o card GIRA 360° (para de costas
 * pra frente) e a face de trás fica ENGOLFADA EM CHAMAS VFX (flambé):
 * mal dá pra ver o card. Sem relação com scroll/saída. Hover/foco
 * dispara; sai → volta. Fallback reduced-motion (sem giro/fogo).
 *
 * 4 estilos de fogo:
 *   V1 Flambé        — chamas subindo da base
 *   V2 Engolfada     — card inteiro em brasa + fumaça + distorção
 *   V3 Bordas em brasa — o fogo lambe as bordas (papel queimando)
 *   V4 Tempestade de brasas — enxame de faíscas + ondas de calor
 * ================================================================== */

type Step = (typeof steps)[number];

const CARD_PAD = "absolute inset-0 flex flex-col justify-between p-7 sm:p-9";

function CardBody({ step }: { step: Step }) {
  return (
    <>
      <span
        className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[10rem] font-bold leading-none text-white/[0.035] sm:text-[13rem]"
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

/* ----------------------------- Peças de fogo ----------------------------- */

const FLAME_GRAD =
  "radial-gradient(50% 62% at 50% 100%, #fff3b0 0%, #ffd21a 15%, #ff8a00 38%, #d63200 62%, rgba(43,10,0,0) 82%)";

// Distorção de calor (turbulência SVG animada) — dá o ar "VFX".
function HeatWarp({ id, scale = 22 }: { id: string; scale?: number }) {
  return (
    <svg className="absolute h-0 w-0" aria-hidden>
      <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.014 0.045" numOctaves={2} seed={7} result="n">
          <animate
            attributeName="baseFrequency"
            dur="7s"
            values="0.014 0.045;0.022 0.07;0.014 0.045"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale={scale} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

function Tongues({ rows = 1 }: { rows?: number }) {
  const list = Array.from({ length: 11 }, (_, i) => ({
    left: 3 + i * 8.6,
    w: 34 + ((i * 13) % 46),
    h: 46 + ((i * 29) % 46) + (rows > 1 ? 24 : 0),
    delay: `-${((i * 17) % 100) / 100}s`,
    dur: `${1 + ((i * 7) % 55) / 100}s`,
  }));
  return (
    <>
      {list.map((t, i) => (
        <span
          key={i}
          className="flame pointer-events-none absolute bottom-[-6%] mix-blend-screen blur-[5px]"
          style={{
            left: `${t.left}%`,
            width: t.w,
            height: `${t.h}%`,
            background: FLAME_GRAD,
            borderRadius: "50% 50% 46% 46% / 70% 70% 42% 42%",
            animationDelay: t.delay,
            animationDuration: t.dur,
          }}
        />
      ))}
    </>
  );
}

const EMBERS = Array.from({ length: 22 }, (_, i) => ({
  left: `${5 + ((i * 41) % 90)}%`,
  bottom: `${((i * 23) % 30)}%`,
  size: 2 + (i % 3),
  hot: i % 3 === 0,
  sx: `${((i * 19) % 44) - 22}px`,
  sy: `${-120 - ((i * 37) % 140)}px`,
  dur: `${1 + ((i * 13) % 90) / 100}s`,
  delay: `${((i * 29) % 120) / 100}s`,
}));

function Embers({ count = 22 }: { count?: number }) {
  return (
    <>
      {EMBERS.slice(0, count).map((e, i) => (
        <span
          key={i}
          className="spark pointer-events-none absolute rounded-full"
          style={
            {
              left: e.left,
              bottom: e.bottom,
              width: e.size,
              height: e.size,
              background: e.hot ? "#fff3b0" : "#ff8a00",
              boxShadow: `0 0 8px 2px ${e.hot ? "rgba(255,210,26,0.9)" : "rgba(255,90,0,0.85)"}`,
              animationDuration: e.dur,
              animationDelay: e.delay,
              "--sx": e.sx,
              "--sy": e.sy,
            } as React.CSSProperties
          }
        />
      ))}
    </>
  );
}

function Smoke() {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="smoke pointer-events-none absolute rounded-full bg-black/60 blur-xl"
          style={{
            left: `${12 + i * 18}%`,
            top: "6%",
            width: 90,
            height: 90,
            animationDelay: `-${i * 0.6}s`,
            animationDuration: `${2.8 + i * 0.3}s`,
          }}
        />
      ))}
    </>
  );
}

function BaseGlow() {
  return (
    <div
      className="fire-glow pointer-events-none absolute inset-x-0 bottom-0 h-2/3 mix-blend-screen"
      style={{
        background:
          "radial-gradient(80% 90% at 50% 100%, rgba(255,120,0,0.75), rgba(214,50,0,0.25) 45%, transparent 72%)",
      }}
    />
  );
}

/* --------------------------- 4 estilos de fogo --------------------------- */

function FireFlambe({ id }: { id: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <HeatWarp id={id} scale={18} />
      <BaseGlow />
      <div className="absolute inset-0" style={{ filter: `url(#${id})` }}>
        <div className="absolute inset-x-0 bottom-0 h-3/4">
          <Tongues />
        </div>
      </div>
      <Embers count={16} />
    </div>
  );
}

function FireEngulf({ id }: { id: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <HeatWarp id={id} scale={30} />
      <div className="fire-glow absolute inset-0 mix-blend-screen" style={{ background: "radial-gradient(70% 80% at 50% 85%, rgba(255,138,0,0.55), transparent 70%)" }} />
      <div className="absolute inset-0" style={{ filter: `url(#${id})` }}>
        <div className="absolute inset-x-0 bottom-0 h-[115%]">
          <Tongues rows={2} />
        </div>
      </div>
      <Embers count={22} />
      <Smoke />
    </div>
  );
}

function FireRim({ id }: { id: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <HeatWarp id={id} scale={24} />
      {/* borda em brasa */}
      <div
        className="fire-glow absolute inset-0 rounded-[2rem]"
        style={{
          boxShadow:
            "inset 0 0 24px 6px rgba(255,120,0,0.7), inset 0 0 60px 12px rgba(214,50,0,0.5)",
        }}
      />
      {/* chamas nas 4 bordas via máscara oca */}
      <div
        className="absolute inset-0"
        style={{
          filter: `url(#${id})`,
          maskImage:
            "linear-gradient(#000,#000) padding-box, radial-gradient(120% 120% at 50% 50%, transparent 52%, #000 74%)",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 50% 50%, transparent 52%, #000 74%)",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-[130%] rotate-180">
          <Tongues />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[130%]">
          <Tongues />
        </div>
      </div>
      {/* centro esfumaçado (mal dá pra ver) */}
      <div className="heat-haze absolute inset-6 rounded-2xl bg-black/30 blur-[2px]" />
      <Embers count={18} />
    </div>
  );
}

function FireEmberStorm({ id }: { id: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <HeatWarp id={id} scale={16} />
      {/* underglow quente */}
      <div
        className="fire-glow absolute inset-0 mix-blend-screen"
        style={{ background: "radial-gradient(60% 55% at 50% 70%, rgba(255,138,0,0.5), rgba(214,50,0,0.15) 55%, transparent 78%)" }}
      />
      {/* ondas de calor sobre o card */}
      <div className="heat-haze absolute inset-0" style={{ filter: `url(#${id})` }}>
        <div className="absolute inset-x-0 bottom-0 h-1/2">
          <Tongues />
        </div>
      </div>
      <Embers count={22} />
      <Embers count={22} />
    </div>
  );
}

const FIRES = {
  flambe: FireFlambe,
  engulf: FireEngulf,
  rim: FireRim,
  storm: FireEmberStorm,
} as const;
type FireKey = keyof typeof FIRES;

/* ------------------------------- Card flip ------------------------------- */

function FlipFireCard({ step, fire }: { step: Step; fire: FireKey }) {
  const [hot, setHot] = useState(false);
  const reduce = useReducedMotion();
  const Fire = FIRES[fire];
  const id = `warp-${fire}-${step.n}`;

  return (
    <div
      className="group relative h-[420px] w-full cursor-pointer [perspective:1500px]"
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      onFocus={() => setHot(true)}
      onBlur={() => setHot(false)}
      tabIndex={0}
      role="button"
      aria-label={`${step.n} ${step.title} — passe o mouse para flambar`}
    >
      <motion.div
        animate={{ rotateY: reduce ? 0 : hot ? 540 : 0 }}
        transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* frente */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-line bg-surface [backface-visibility:hidden]">
          <div className={CARD_PAD}>
            <CardBody step={step} />
          </div>
          <span className="absolute bottom-5 right-6 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-faint">
            <Flame size={12} strokeWidth={2.5} /> hover
          </span>
        </div>

        {/* verso flamejante */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-[#ff6a00]/40 bg-[#120602] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* card carbonizado, mal visível */}
          <div className={`${CARD_PAD} opacity-30 [filter:grayscale(0.7)_brightness(0.65)]`}>
            <CardBody step={step} />
          </div>
          {!reduce && hot && <Fire id={id} />}
        </div>
      </motion.div>
    </div>
  );
}

/* --------------------------------- Shell --------------------------------- */

function ProcessGrid({ hint, fire }: { hint: string; fire: FireKey }) {
  return (
    <section className="border-b border-line bg-ink-2 py-16 sm:py-20">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <FlipFireCard key={s.n} step={s} fire={fire} />
          ))}

          {/* finale */}
          <div className="flex h-[420px] flex-col justify-center rounded-[2rem] border border-green/30 bg-gradient-to-br from-surface to-ink p-8 sm:col-span-2 lg:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-green-bright">
              Do primeiro oi ao site refinado
            </p>
            <p className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-text sm:text-3xl">
              Em torno de <span className="text-brand-gradient">35 a 45 dias</span>,
              com você acompanhando cada passo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ EXPORTS: 4 variações ============ */
export function ProcessFireV1() {
  return <ProcessGrid fire="flambe" hint="Flambé: passe o mouse — o card gira e a face de trás sobe em chamas desde a base." />;
}
export function ProcessFireV2() {
  return <ProcessGrid fire="engulf" hint="Engolfada: o card inteiro vira brasa, com fumaça e distorção de calor. Mal dá pra ver o card." />;
}
export function ProcessFireV3() {
  return <ProcessGrid fire="rim" hint="Bordas em brasa: o fogo lambe as bordas como papel queimando, o centro esfumaça." />;
}
export function ProcessFireV4() {
  return <ProcessGrid fire="storm" hint="Tempestade de brasas: enxame de faíscas subindo + ondas de calor sobre a carta." />;
}
