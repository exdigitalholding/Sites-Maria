"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { pricing, whatsappHref, wa } from "@/lib/site";

const EYEBROW = "Transparência total";
const TITLE_A = "Investimento claro,";
const TITLE_B = "sem “depende” solto.";
const INTRO =
  "O valor acompanha a complexidade. Você sempre sabe o número antes de assinar.";

function LabEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright"
    >
      <ShieldCheck size={13} strokeWidth={2.5} />
      {children}
    </motion.span>
  );
}

function LabHeading({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <LabEyebrow>{EYEBROW}</LabEyebrow>
      <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text">
        {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
      </h2>
      <p className={`mt-5 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
        {INTRO}
      </p>
    </div>
  );
}

/* ============================================================= *
 * VARIAÇÃO 1 — "Spotlight cards"
 * Borda que acende sob o cursor + entrada escalonada dos itens.
 * ============================================================= */
export function PricingV1() {
  return (
    <section className="relative border-b border-line bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <LabHeading />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <SpotlightCard key={plan.name} plan={plan} i={i} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-faint">
          Nada de custo escondido. Você aprova o valor na proposta antes de
          qualquer código ser escrito.
        </p>
      </div>
    </section>
  );
}

function SpotlightCard({
  plan,
  i,
}: {
  plan: (typeof pricing)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
        plan.highlight
          ? "border-green/50 bg-gradient-to-b from-green/[0.08] to-surface"
          : "border-line bg-surface"
      }`}
    >
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(38,224,138,0.1), transparent 60%)",
        }}
      />
      {plan.highlight && (
        <span className="absolute right-6 top-6 rounded-full bg-green px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#04120b]">
          Mais procurado
        </span>
      )}
      <div className="relative">
        <h3 className="font-display text-lg font-semibold tracking-tight text-text">
          {plan.name}
        </h3>
        <p className="mt-1 text-sm text-text-dim">{plan.for}</p>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold tracking-tight text-text">
            {plan.price}
          </span>
        </div>
        <span className="mt-1 font-mono text-xs text-text-faint">{plan.note}</span>
        <ul className="mt-7 flex flex-col gap-3">
          {plan.features.map((f, j) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + j * 0.08 }}
              className="flex items-start gap-2.5 text-sm text-text-dim"
            >
              <Check strokeWidth={3} className="mt-0.5 shrink-0 text-green" />
              {f}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="relative mt-8 pt-2">
        <a
          href={whatsappHref(wa.proposta)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
            plan.highlight
              ? "bg-green text-[#04120b] hover:bg-green-bright"
              : "border border-line text-text hover:border-green/50 hover:text-green-bright"
          }`}
        >
          Tirar a ideia do papel
        </a>
      </div>
    </motion.div>
  );
}

/* ============================================================= *
 * VARIAÇÃO 2 — "Foco que expande"
 * Cartões que reagem ao hover: o focado cresce e ganha borda
 * gradiente animada; os outros recuam. Preço com brilho.
 * ============================================================= */
export function PricingV2() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-24 sm:py-32">
      <div className="aurora left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 bg-green/10" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <LabHeading align="center" />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricing.map((plan, i) => {
            const isFocus = hover === null ? plan.highlight : hover === i;
            return (
              <motion.div
                key={plan.name}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                animate={{
                  scale: isFocus ? 1.03 : 1,
                  opacity: hover === null || isFocus ? 1 : 0.6,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl p-[1.5px]"
              >
                {/* Borda gradiente animada quando em foco */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    isFocus ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, #12b76a, #f5b921, transparent 60%)",
                  }}
                  aria-hidden
                />
                <div className="relative flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                  {plan.highlight && (
                    <span className="absolute right-6 top-6 rounded-full bg-green px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#04120b]">
                      Mais procurado
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold tracking-tight text-text">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-dim">{plan.for}</p>
                  <div className="mt-6">
                    <span
                      className={`font-display text-4xl font-semibold tracking-tight ${
                        isFocus ? "text-brand-gradient" : "text-text"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <div className="mt-1 font-mono text-xs text-text-faint">
                      {plan.note}
                    </div>
                  </div>
                  <ul className="mt-7 flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-text-dim"
                      >
                        <Check strokeWidth={3} className="mt-0.5 shrink-0 text-green" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-2">
                    <a
                      href={whatsappHref(wa.proposta)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                        isFocus
                          ? "bg-green text-[#04120b] hover:bg-green-bright"
                          : "border border-line text-text hover:border-green/50 hover:text-green-bright"
                      }`}
                    >
                      Tirar a ideia do papel
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * VARIAÇÃO 3 — "Slider de complexidade"
 * Interativo: arraste a complexidade e o plano/valor se ajustam.
 * Traduz 'o valor acompanha a complexidade' em gesto.
 * ============================================================= */
export function PricingV3() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const plan = pricing[idx];
  const levels = ["Simples", "Intermediário", "Complexo"];

  return (
    <section className="relative border-b border-line bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <LabHeading align="center" />

        <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-10">
          {/* Controle */}
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-green-bright">
            <SlidersHorizontal size={14} /> Ajuste a complexidade do projeto
          </div>

          <div className="mt-6">
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={idx}
              onChange={(e) => setIdx(Number(e.target.value))}
              aria-label="Nível de complexidade do projeto"
              className="lab-range w-full"
            />
            <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-wider">
              {levels.map((l, i) => (
                <button
                  key={l}
                  onClick={() => setIdx(i)}
                  className={`cursor-pointer transition-colors ${
                    idx === i ? "text-green-bright" : "text-text-faint hover:text-text-dim"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Painel do plano */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-green/30 bg-gradient-to-b from-green/[0.06] to-surface p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={plan.name}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-bright">
                      Plano sugerido
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-dim">{plan.for}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-4xl font-semibold text-brand-gradient">
                      {plan.price}
                    </div>
                    <span className="font-mono text-xs text-text-faint">
                      {plan.note}
                    </span>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-text-dim"
                    >
                      <Check strokeWidth={3} className="mt-0.5 shrink-0 text-green" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Medidor de complexidade */}
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-line">
              <motion.div
                animate={{ width: `${((idx + 1) / 3) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-green to-gold"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={whatsappHref(wa.proposta)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-8 py-3.5 text-sm font-semibold text-[#04120b] transition-colors hover:bg-green-bright"
            >
              Receber proposta para esse escopo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
