"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { differentials } from "@/lib/site";

/* Eyebrow (texto acima do título) — compartilhado pelas 3 variações. */
const EYEBROW = "O padrão Nacional";
const TITLE_A = "Por que a Nacional";
const TITLE_B = "entrega diferente.";
const INTRO =
  "Quatro coisas que a gente não abre mão. É o que separa produto de gambiarra, e prazo cumprido de promessa vazia.";

function LabEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-bright" />
      </span>
      {children}
    </motion.span>
  );
}

/* ============================================================= *
 * VARIAÇÃO 1 — "Ledger vivo"
 * Linha vertical que se desenha conforme o scroll; cada pilar
 * entra com clip-path + número que sobe; spotlight no hover.
 * ============================================================= */
export function DifferentialsV1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-24 sm:py-32">
      <div className="pattern-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight text-text">
            {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-dim">
            {INTRO}
          </p>
        </div>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-14">
          {/* Trilho + linha viva */}
          <div className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-line sm:left-[7px]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-green via-green-bright to-gold sm:left-[7px]"
          />
          <div className="flex flex-col gap-3">
            {differentials.map((d, i) => (
              <LedgerRow key={d.kicker} d={d} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LedgerRow({
  d,
  i,
}: {
  d: (typeof differentials)[number];
  i: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={rowRef}
      initial={reduce ? false : { opacity: 0, y: 26, clipPath: "inset(0 0 100% 0)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
          : undefined
      }
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-transparent px-5 py-6 transition-colors duration-300 hover:border-line hover:bg-surface/60"
    >
      {/* Marcador na linha */}
      <span className="absolute -left-8 top-8 grid size-3.5 place-items-center rounded-full border border-green/50 bg-ink sm:-left-14">
        <span className="size-1.5 rounded-full bg-green-bright transition-transform duration-300 group-hover:scale-150" />
      </span>
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
        <span className="font-display text-2xl font-semibold tabular-nums text-text-faint transition-colors duration-300 group-hover:text-green">
          0{i + 1}
        </span>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-bright">
            {d.kicker}
          </span>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
            {d.title}
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-text-dim">
            {d.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================= *
 * VARIAÇÃO 2 — "Cartões 3D magnéticos"
 * Grid 2x2 de cartões de vidro com tilt 3D no cursor, borda
 * spotlight e entrada em mola escalonada.
 * ============================================================= */
export function DifferentialsV2() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 py-24 sm:py-32">
      <div className="aurora left-[8%] top-10 h-72 w-72 bg-green/15" />
      <div className="aurora bottom-0 right-[6%] h-72 w-72 bg-gold/10" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight text-text">
            {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-dim">
            {INTRO}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {differentials.map((d, i) => (
            <TiltPillar key={d.kicker} d={d} i={i} reduce={!!reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltPillar({
  d,
  i,
  reduce,
}: {
  d: (typeof differentials)[number];
  i: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * 9);
    ry.set(px * 11);
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.08,
      }}
      className="[perspective:1100px]"
    >
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry }}
        className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface/70 p-8 backdrop-blur-sm will-change-transform [transform-style:preserve-3d]"
      >
        {/* Spotlight que segue o cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(340px circle at var(--mx) var(--my), rgba(38,224,138,0.12), transparent 65%)",
          }}
        />
        <div className="relative [transform:translateZ(40px)]">
          <div className="flex items-center justify-between">
            <span className="grid size-11 place-items-center rounded-2xl border border-green/30 bg-green/10 font-display text-lg font-semibold text-green-bright">
              0{i + 1}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-bright">
              {d.kicker}
            </span>
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
            {d.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-text-dim">
            {d.body}
          </p>
        </div>
        {/* Linha inferior que acende no hover */}
        <div className="absolute inset-x-8 bottom-6 h-px origin-left scale-x-0 bg-gradient-to-r from-green to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </motion.div>
    </motion.div>
  );
}

/* ============================================================= *
 * VARIAÇÃO 3 — "Foco sticky"
 * Coluna esquerda fixa com número gigante que troca conforme
 * o pilar ativo; direita com pilares que acendem no scroll.
 * ============================================================= */
export function DifferentialsV3() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 55%", "end 65%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      differentials.length - 1,
      Math.max(0, Math.floor(v * differentials.length))
    );
    setActive(idx);
  });

  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Coluna sticky */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight text-text">
            {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-dim">
            {INTRO}
          </p>

          <div className="relative mt-10 h-32 overflow-hidden">
            {differentials.map((d, i) => (
              <motion.div
                key={d.kicker}
                animate={{
                  opacity: active === i ? 1 : 0,
                  y: active === i ? 0 : 24,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center gap-5"
              >
                <span className="font-display text-7xl font-bold leading-none text-green/25">
                  0{i + 1}
                </span>
                <span className="max-w-[12rem] font-mono text-[11px] uppercase tracking-[0.28em] text-green-bright">
                  {d.kicker}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Progresso */}
          <div className="mt-6 flex gap-2">
            {differentials.map((d, i) => (
              <span
                key={d.kicker}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                  active >= i ? "bg-green" : "bg-line"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Pilares */}
        <div ref={ref} className="flex flex-col gap-4">
          {differentials.map((d, i) => (
            <div
              key={d.kicker}
              onMouseEnter={() => setActive(i)}
              className={`rounded-3xl border p-8 transition-all duration-500 ${
                active === i
                  ? "border-green/40 bg-surface"
                  : "border-line bg-surface/40 opacity-55"
              }`}
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
                {d.title}
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-dim">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
