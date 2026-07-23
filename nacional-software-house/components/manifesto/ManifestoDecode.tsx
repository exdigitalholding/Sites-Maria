"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useSpring,
  useReducedMotion,
} from "motion/react";

/**
 * VARIAÇÃO 3 — "Decode"
 * Interativa, sem pin: o título se "descriptografa" (scramble de caracteres,
 * palavra por palavra) quando entra na tela; uma lanterna segue o cursor
 * revelando código escondido no fundo; o card final tem tilt 3D magnético
 * com borda spotlight.
 */

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

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

const HIDDEN_CODE = [
  "if (voce.consegue.descrever) { nos.construimos() }",
  "const prazo = dias(14) // não meses",
  "ai.draft() → humano.review() → deploy()",
  "stack: next · fastify · prisma · ia",
  "lighthouse: 98 · a11y: AA · seo: ✓",
  "git log --oneline | eleito o melhor",
  "npm run entrega --sem-mal-feito",
  "team.assina(embaixo) === true",
  "while (ideia) { shipar(ideia) }",
  "briefing.ouvido; detalhe.cuidado;",
  "if (voce.consegue.descrever) { nos.construimos() }",
  "const prazo = dias(14) // não meses",
  "ai.draft() → humano.review() → deploy()",
  "stack: next · fastify · prisma · ia",
];

function ScrambleWord({
  text,
  active,
  delay,
  className,
}: {
  text: string;
  active: boolean;
  delay: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active || reduce) return;
    let frame = 0;
    const interval = window.setInterval(() => {
      frame++;
      if (frame <= delay) {
        setDisplay(
          text
            .split("")
            .map(() => GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
            .join("")
        );
        return;
      }
      const solved = Math.floor((frame - delay) / 3);
      if (solved >= text.length) {
        setDisplay(text);
        window.clearInterval(interval);
        return;
      }
      setDisplay(
        text
          .split("")
          .map((c, i) =>
            i < solved ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
          .join("")
      );
    }, 28);
    return () => window.clearInterval(interval);
  }, [active, delay, text, reduce]);

  return <span className={className}>{display}</span>;
}

export default function ManifestoDecode({ id = "manifesto" }: { id?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headingRef, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 18 });

  const onSectionMove = (e: React.PointerEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onCardMove = (e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateX.set(-py * 10);
    rotateY.set(px * 12);
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onCardLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      onPointerMove={onSectionMove}
      className="group relative overflow-hidden border-b border-line bg-ink py-28 sm:py-40"
      style={{ "--mx": "50%", "--my": "40%" } as React.CSSProperties}
    >
      <div className="pattern-grid pointer-events-none absolute inset-0" />

      {/* Código escondido — só aparece sob a lanterna do cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 py-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          WebkitMaskImage:
            "radial-gradient(280px circle at var(--mx) var(--my), #000 0%, transparent 75%)",
          maskImage:
            "radial-gradient(280px circle at var(--mx) var(--my), #000 0%, transparent 75%)",
        }}
      >
        {HIDDEN_CODE.map((line, i) => (
          <p
            key={i}
            className={`whitespace-nowrap font-mono text-xs text-green-bright/60 ${
              i % 3 === 0 ? "pl-[8%]" : i % 3 === 1 ? "pl-[38%]" : "pl-[64%]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Brilho que acompanha o cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx) var(--my), rgba(18,183,106,0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            ~/manifesto $ decode --run
          </p>

          <h2
            ref={headingRef}
            className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-text"
          >
            {WORDS.map((w, i) => (
              <span key={i}>
                <ScrambleWord
                  text={w.t}
                  active={inView}
                  delay={i * 4}
                  className={`inline-block ${w.accent ? "text-brand-gradient" : ""}`}
                />{" "}
              </span>
            ))}
            <span
              aria-hidden
              className="ml-1 inline-block h-[0.85em] w-[0.45ch] animate-pulse bg-green-bright align-middle"
            />
          </h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg"
          >
            IA em cada etapa, do briefing à entrega, para fazer em dias o que o
            mercado leva meses. Mas quem revisa e assina embaixo é um time de
            verdade. Rápido, sem entregar mal feito.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mt-14 [perspective:1000px]"
          >
            <motion.div
              ref={cardRef}
              onPointerMove={onCardMove}
              onPointerLeave={onCardLeave}
              style={{ rotateX, rotateY }}
              className="spotlight mx-auto max-w-2xl rounded-2xl border border-green/25 bg-surface/50 p-8 backdrop-blur-sm will-change-transform [transform-style:preserve-3d]"
            >
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl [transform:translateZ(30px)]">
                Se você consegue descrever, a gente consegue construir.
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint [transform:translateZ(18px)]">
                &gt;_ input aceito em português
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
