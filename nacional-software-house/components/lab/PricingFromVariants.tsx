"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  CreditCard,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { site, whatsappHref, wa } from "@/lib/site";

/* ================================================================== *
 * "Investimento claro, sem 'depende' solto."
 * UMA única âncora: A PARTIR DE R$ 3.500. O valor final vem de um
 * orçamento sob medida (por complexidade), e o cliente aprova antes.
 * 5 linguagens visuais, todas objetivas e voltadas ao clique no CTA.
 * ================================================================== */

const EYEBROW = "Investimento";
const TITLE_A = "Investimento claro,";
const TITLE_B = "sem “depende” solto.";
const AMOUNT = 3500;
const EXPLAIN =
  "Todo projeto começa em R$ 3.500. O valor final vem de um orçamento sob medida, feito pela complexidade do seu escopo, e você aprova antes de qualquer linha de código. Sem surpresa no fim.";
const CHIPS = [
  { icon: FileCheck2, label: "Você aprova antes de começar" },
  { icon: CreditCard, label: `Parcelável em ${site.installments}` },
  { icon: ShieldCheck, label: "Sem custo escondido" },
];
const CTA = "Quero meu orçamento";

/* Número que sobe até R$ 3.500 ao entrar na tela. */
function CountUp({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(AMOUNT);
      return;
    }
    const controls = animate(0, AMOUNT, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      R$ {val.toLocaleString("pt-BR")}
    </span>
  );
}

function Eyebrow() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright"
    >
      <ShieldCheck size={13} strokeWidth={2.5} />
      {EYEBROW}
    </motion.span>
  );
}

function Heading({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow />
      <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text">
        {TITLE_A} <span className="text-brand-gradient">{TITLE_B}</span>
      </h2>
    </div>
  );
}

function PrimaryCta({ children = CTA, msg = wa.proposta }: { children?: React.ReactNode; msg?: string }) {
  return (
    <a
      href={whatsappHref(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-green px-8 py-4 text-sm font-semibold text-[#04120b] shadow-[0_18px_50px_-14px_rgba(18,183,106,0.7)] transition-colors duration-300 hover:bg-green-bright"
    >
      {children}
      <ArrowUpRight strokeWidth={3} className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function GhostCta({ children, msg = wa.projeto }: { children: React.ReactNode; msg?: string }) {
  return (
    <a
      href={whatsappHref(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-4 text-sm font-medium text-text transition-colors duration-300 hover:border-green/60 hover:text-green-bright"
    >
      {children}
    </a>
  );
}

function Chips({ center = false }: { center?: boolean }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${center ? "justify-center" : ""}`}>
      {CHIPS.map(({ icon: Icon, label }) => (
        <li key={label} className="inline-flex items-center gap-2 text-sm text-text-dim">
          <Icon size={15} className="shrink-0 text-green" strokeWidth={2.5} /> {label}
        </li>
      ))}
    </ul>
  );
}

/* ============================================================= *
 * V1 — NÚMERO-ÂNCORA GIGANTE (hero minimal, count-up)
 * ============================================================= */
export function PricingFromV1() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 py-24 sm:py-32">
      <div className="aurora left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 bg-green/10" />
      <div className="relative mx-auto max-w-[1400px] px-5 text-center sm:px-8">
        <Heading align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-text-faint">
            A partir de
          </span>
          <div className="mt-2 flex items-end justify-center gap-3">
            <CountUp className="font-display text-[clamp(3.5rem,12vw,8rem)] font-semibold leading-none tracking-tight text-brand-gradient" />
          </div>
          <span className="mt-3 inline-block font-mono text-sm text-text-dim">
            em até {site.installments} sem juros
          </span>
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg">
          {EXPLAIN}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <PrimaryCta />
          <Chips center />
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * V2 — ORÇAMENTO SOB MEDIDA (cartão estilo proposta/recibo)
 * ============================================================= */
export function PricingFromV2() {
  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Heading />
          <p className="mt-6 max-w-md text-base leading-relaxed text-text-dim sm:text-lg">
            {EXPLAIN}
          </p>
          <div className="mt-8 hidden lg:block">
            <PrimaryCta />
          </div>
        </div>

        {/* cartão proposta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-green/30 bg-gradient-to-b from-green/[0.07] to-surface p-8 sm:p-10"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-bright">
              Ponto de partida
            </span>
            <BadgeCheck size={20} className="text-green" />
          </div>

          <div className="mt-4 flex items-end gap-3">
            <span className="font-display text-[clamp(2.8rem,7vw,4.5rem)] font-semibold leading-none tracking-tight text-text">
              R$ 3.500
            </span>
          </div>
          <span className="font-mono text-xs text-text-faint">
            parcelável em {site.installments}
          </span>

          <div className="my-7 border-t border-dashed border-line" />

          <ul className="flex flex-col gap-3">
            {[
              "Escopo final calculado pela complexidade",
              "Orçamento sob medida, sem pacote engessado",
              "Você aprova o valor antes de começar",
              "Sem custo escondido, sem letra miúda",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-text-dim">
                <Check strokeWidth={3} className="mt-0.5 size-4 shrink-0 text-green" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <PrimaryCta>Receber meu orçamento</PrimaryCta>
          </div>
        </motion.div>

        <div className="lg:hidden">
          <PrimaryCta />
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * V3 — COMO O PREÇO FUNCIONA (3 passos, mata o "depende")
 * ============================================================= */
export function PricingFromV3() {
  const steps = [
    {
      k: "01",
      title: "Parte de R$ 3.500",
      body: "Esse é o piso de qualquer projeto, parcelável em 10x. Nada começa abaixo disso.",
    },
    {
      k: "02",
      title: "A gente calcula o escopo",
      body: "Analisamos páginas, integrações e complexidade e montamos um orçamento sob medida.",
    },
    {
      k: "03",
      title: "Você aprova o valor final",
      body: "Recebe o número fechado antes de tudo. Aceita e a gente começa, ou repensa junto.",
    },
  ];
  return (
    <section className="relative border-b border-line bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Heading align="center" />
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-text-dim sm:text-lg">
          Transparente do começo ao fim. Veja como o valor é definido.
        </p>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
          {/* linha conectora */}
          <div className="pointer-events-none absolute left-0 right-0 top-[54px] hidden h-px bg-gradient-to-r from-transparent via-green/40 to-transparent lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl border bg-surface p-8 ${
                i === 0 ? "border-green/40" : "border-line"
              }`}
            >
              <span
                className={`relative z-10 grid size-11 place-items-center rounded-full font-mono text-sm font-semibold ${
                  i === 0
                    ? "bg-green text-[#04120b]"
                    : "border border-line bg-ink text-green-bright"
                }`}
              >
                {s.k}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-text">
                {i === 0 ? (
                  <>
                    Parte de <span className="text-brand-gradient">R$ 3.500</span>
                  </>
                ) : (
                  s.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <PrimaryCta />
          <span className="font-mono text-xs text-text-faint">
            Orçamento sem compromisso.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * V4 — ESTIMADOR DE PISO (slider: piso fixo + escopo sob medida)
 * ============================================================= */
export function PricingFromV4() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const tiers = [
    { level: "Simples", scope: "Landing page ou site institucional", final: "Geralmente perto do piso." },
    { level: "Intermediário", scope: "Site multi-página, com integrações e automações", final: "Orçamento sob medida." },
    { level: "Complexo", scope: "Sistema, painel ou plataforma sob medida", final: "Orçamento por escopo e horas." },
  ];
  const t = tiers[idx];

  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Heading align="center" />

        <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-text-faint">
                A partir de
              </span>
              <div className="mt-1 font-display text-[clamp(2.8rem,7vw,4.2rem)] font-semibold leading-none tracking-tight text-brand-gradient">
                R$ 3.500
              </div>
              <span className="font-mono text-xs text-text-faint">
                em até {site.installments}, seja qual for o projeto
              </span>
            </div>
            <div className="text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-green-bright">
                Valor final
              </span>
              <AnimatePresence mode="wait">
                <motion.p
                  key={t.final}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 max-w-[15rem] text-sm text-text-dim"
                >
                  {t.final}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-green-bright">
              <SlidersHorizontal size={14} /> Ajuste a complexidade
            </div>
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={idx}
              onChange={(e) => setIdx(Number(e.target.value))}
              aria-label="Complexidade do projeto"
              className="lab-range w-full"
            />
            <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-wider">
              {tiers.map((tt, i) => (
                <button
                  key={tt.level}
                  onClick={() => setIdx(i)}
                  className={`cursor-pointer transition-colors ${
                    idx === i ? "text-green-bright" : "text-text-faint hover:text-text-dim"
                  }`}
                >
                  {tt.level}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.scope}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-2xl border border-line bg-ink/50 p-5 text-sm text-text-dim"
            >
              <span className="text-text-faint">Seu escopo: </span>
              {t.scope}. O piso continua R$ 3.500 e você aprova o valor fechado antes de começar.
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 text-center">
            <PrimaryCta>Receber orçamento para {t.level.toLowerCase()}</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * V5 — SELO DE TRANSPARÊNCIA (painel split: número + garantias)
 * ============================================================= */
export function PricingFromV5() {
  const guarantees = [
    "Você aprova o valor antes de começar",
    "Orçamento sob medida pela complexidade",
    `Parcelável em ${site.installments} sem juros`,
    "Sem custo escondido, sem letra miúda",
  ];
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Heading align="center" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 grid overflow-hidden rounded-[2rem] border border-green/30 bg-surface lg:grid-cols-[1.1fr_1fr]"
        >
          {/* número */}
          <div className="relative flex flex-col justify-center gap-3 bg-gradient-to-br from-green/[0.1] to-transparent p-10 sm:p-12">
            <div className="aurora left-6 top-6 h-40 w-40 bg-green/20" />
            <span className="relative font-mono text-xs uppercase tracking-[0.35em] text-green-bright">
              A partir de
            </span>
            <div className="relative font-display text-[clamp(3rem,9vw,5.5rem)] font-semibold leading-none tracking-tight text-text">
              R$ 3.500
            </div>
            <span className="relative font-mono text-sm text-text-dim">
              em até {site.installments} sem juros
            </span>
            <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-text-dim">
              {EXPLAIN}
            </p>
          </div>

          {/* garantias + CTA */}
          <div className="flex flex-col justify-center border-t border-line p-10 sm:p-12 lg:border-l lg:border-t-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-faint">
              O que está garantido
            </span>
            <ul className="mt-5 flex flex-col gap-3.5">
              {guarantees.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-text">
                  <BadgeCheck size={18} className="mt-0.5 shrink-0 text-green" />
                  {g}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <GhostCta>
                <MessageCircle size={16} /> Tirar dúvidas
              </GhostCta>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
