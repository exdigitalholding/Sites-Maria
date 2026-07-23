"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { Pointer, Sparkles } from "lucide-react";
import { CtaPrimary } from "../Cta";
import { whatsappHref, wa } from "@/lib/site";

const EYEBROW = "Do conceito ao produto";
const INTRO =
  "Do abstrato ao produto que gira na sua mão. É esse cuidado com profundidade e detalhe que a gente coloca em cada entrega.";

function LabEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright"
    >
      <Sparkles size={13} strokeWidth={2.5} />
      {children}
    </motion.span>
  );
}

/* Título com reveal palavra-a-palavra (blur + subida). */
function WordsReveal({
  lead,
  accent,
  className,
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = [
    ...lead.split(" ").map((w) => ({ w, accent: false })),
    ...accent.split(" ").map((w) => ({ w, accent: true })),
  ];
  return (
    <h2 className={className}>
      {words.map((item, i) => {
        return (
          <motion.span
              key={i}
              initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className={`inline-block ${item.accent ? "text-brand-gradient" : ""}`}
            >
              {item.w}
              {" "}
            </motion.span>
          );
      })}
    </h2>
  );
}

/* ============================================================= *
 * VARIAÇÃO 1 — "Blob que respira"
 * Blob de gradiente que muda de forma (border-radius morph),
 * flutua e reage ao scroll com parallax. Texto entra por palavra.
 * ============================================================= */
export function IdeaAliveV1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-line bg-ink-2 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* Palco */}
        <div className="relative order-1 grid h-[52vh] min-h-[320px] place-items-center lg:order-2 lg:h-[60vh]">
          <motion.div style={reduce ? undefined : { y, rotate }} className="relative">
            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      borderRadius: [
                        "42% 58% 63% 37% / 41% 44% 56% 59%",
                        "63% 37% 41% 59% / 58% 63% 37% 42%",
                        "42% 58% 63% 37% / 41% 44% 56% 59%",
                      ],
                      scale: [1, 1.05, 1],
                    }
              }
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="size-56 bg-[radial-gradient(circle_at_35%_30%,#26e08a,#0a7d47_55%,#04120b_92%)] shadow-[0_40px_120px_-30px_rgba(18,183,106,0.7)] sm:size-72"
            />
            {/* Anel orbital */}
            <motion.div
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-[-14%] rounded-full border border-dashed border-green/30"
            />
            <span className="pointer-events-none absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_20px_4px_rgba(245,185,33,0.6)]" />
          </motion.div>
          <div className="aurora absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-green/20" />
        </div>

        {/* Copy */}
        <div className="order-2 lg:order-1">
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <WordsReveal
            lead="Sua ideia ganha"
            accent="forma e ||movimento."
            className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text"
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-dim">
            {INTRO}
          </p>
          <div className="mt-8">
            <CtaPrimary href={whatsappHref(wa.projeto)}>
              Tirar a ideia do papel
            </CtaPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * VARIAÇÃO 2 — "Wireframe vira produto"
 * O scroll transforma um cubo de arame (abstrato) num produto
 * sólido (concreto). Scrub controlado por scrollYProgress.
 * ============================================================= */
export function IdeaAliveV2() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center 40%"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const wire = useTransform(p, [0, 1], [1, 0]);
  const solid = useTransform(p, [0, 1], [0, 1]);
  const rotate = useTransform(p, [0, 1], [0, 45]);
  const labelX = useTransform(p, [0, 1], ["0%", "100%"]);
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-line bg-ink py-20 sm:py-28"
    >
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <div>
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <WordsReveal
            lead="Sua ideia ganha"
            accent="forma e ||movimento."
            className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text"
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-dim">
            {INTRO}
          </p>

          {/* Barra abstrato → concreto */}
          <div className="mt-8 max-w-sm">
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
              <span>abstrato</span>
              <span className="text-green-bright">produto</span>
            </div>
            <div className="relative mt-2 h-1.5 rounded-full bg-line">
              <motion.div
                style={{ scaleX: reduce ? 1 : solid }}
                className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-green to-gold"
              />
              <motion.span
                style={{ left: reduce ? "100%" : labelX }}
                className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-green-bright"
              />
            </div>
          </div>
          <div className="mt-8">
            <CtaPrimary href={whatsappHref(wa.projeto)}>
              Tirar a ideia do papel
            </CtaPrimary>
          </div>
        </div>

        {/* Palco: wireframe + sólido sobrepostos */}
        <div className="relative grid h-[52vh] min-h-[320px] place-items-center [perspective:900px]">
          <motion.div
            style={{ rotateY: reduce ? 32 : rotate, rotateX: 18 }}
            className="relative size-52 [transform-style:preserve-3d] sm:size-64"
          >
            {/* Sólido */}
            <motion.div
              style={{ opacity: reduce ? 1 : solid }}
              className="absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,#26e08a,#0a7d47)] shadow-[0_40px_100px_-30px_rgba(18,183,106,0.7)]"
            />
            {/* Wireframe */}
            <motion.div
              style={{ opacity: reduce ? 0 : wire }}
              className="absolute inset-0 rounded-3xl border-2 border-dashed border-green/60"
            >
              <div className="absolute inset-3 rounded-2xl border border-green/25" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-green/20" />
              <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-green/20" />
            </motion.div>
          </motion.div>
          <div className="aurora absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 bg-green/15" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================= *
 * VARIAÇÃO 3 — "Pegue e gire"
 * Cartão de produto arrastável (drag físico com mola) + título
 * cinético. Convida o usuário a interagir de verdade.
 * ============================================================= */
export function IdeaAliveV3() {
  const reduce = useReducedMotion();
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-2 py-20 sm:py-28">
      <div className="aurora left-[10%] top-4 h-72 w-72 bg-green/15" />
      <div className="aurora bottom-4 right-[8%] h-64 w-64 bg-gold/10" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <LabEyebrow>{EYEBROW}</LabEyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.02] tracking-tight text-text">
            Sua ideia ganha{" "}
            <motion.span
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-brand-gradient inline-block"
            >
              forma
            </motion.span>{" "}
            e{" "}
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 20, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
              className="text-brand-gradient inline-block"
            >
              movimento.
            </motion.span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-dim">
            {INTRO}
          </p>
          <div className="mt-8">
            <CtaPrimary href={whatsappHref(wa.projeto)}>
              Tirar a ideia do papel
            </CtaPrimary>
          </div>
        </div>

        {/* Palco arrastável */}
        <div
          ref={dragRef}
          className="relative order-1 grid h-[52vh] min-h-[320px] place-items-center lg:order-2"
        >
          <motion.div
            drag={!reduce}
            dragConstraints={dragRef}
            dragElastic={0.18}
            whileDrag={{ scale: 1.06, cursor: "grabbing" }}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 18 }}
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-60 cursor-grab select-none rounded-[1.8rem] border border-green/25 bg-surface/80 p-6 shadow-[0_50px_120px_-40px_rgba(18,183,106,0.6)] backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-9 place-items-center rounded-xl bg-green/15 text-green-bright">
                <Sparkles size={16} />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-text-faint">
                v1.0
              </span>
            </div>
            <div className="mt-6 h-24 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#26e08a,#0a7d47_60%,transparent)]" />
            <p className="mt-5 font-display text-lg font-semibold tracking-tight text-text">
              Seu produto
            </p>
            <p className="mt-1 text-xs text-text-dim">
              girando na sua mão.
            </p>
          </motion.div>
          <span className="pointer-events-none absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-ink/70 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-text-dim backdrop-blur-sm">
            <Pointer size={14} strokeWidth={2.5} /> Arraste o cartão
          </span>
        </div>
      </div>
    </section>
  );
}
