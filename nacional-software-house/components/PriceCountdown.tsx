"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

/* Ancoragem de preço: ao CHEGAR na section, segura em R$ 20.000 por
 * 1,7s, cai para R$ 10.000 e só então chega em R$ 3.500. Quando fecha
 * em 3.500, aparece um destaque sutil (pop + brilho + linha). */
const START = 20000;
const MID = 10000;
const END = 3500;
const HOLD_MS = 1700;

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const fmt = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

export default function PriceCountdown() {
  const ref = useRef<HTMLSpanElement>(null);
  // amount: 0.8 => só dispara quando o número está de fato visível na tela.
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(END); // SSR/base mostra o preço real
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(END);
      setDone(true);
      return;
    }

    let cancelled = false;
    let controls: ReturnType<typeof animate> | null = null;
    const step = (
      from: number,
      to: number,
      duration: number,
      ease: [number, number, number, number],
    ) => {
      controls = animate(from, to, {
        duration,
        ease,
        onUpdate: (v) => setVal(Math.round(v / 10) * 10),
      });
      return controls;
    };

    const run = async () => {
      setDone(false);
      setVal(START);
      await wait(HOLD_MS);
      if (cancelled) return;
      await step(START, MID, 1.0, [0.4, 0, 0.2, 1]); // desce firme até 10k
      if (cancelled) return;
      await wait(320); // pausa no waypoint
      if (cancelled) return;
      await step(MID, END, 1.0, [0.16, 1, 0.3, 1]); // só então chega em 3.500
      if (cancelled) return;
      setVal(END);
      setDone(true); // dispara o destaque
    };
    run();

    return () => {
      cancelled = true;
      controls?.stop();
    };
  }, [inView, reduce]);

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <motion.span
        className="text-brand-gradient inline-block"
        animate={done && !reduce ? { scale: [1, 1.07, 1] } : undefined}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
      >
        {fmt(val)}.
      </motion.span>

      {/* linha de destaque que se desenha embaixo ao fechar em 3.500 */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={done ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute inset-x-0 -bottom-2 mx-auto h-[3px] w-[88%] origin-center rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #26e08a 30%, #ffd45e 70%, transparent)",
        }}
      />

      {/* brilho suave que floresce e some atrás do número */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={done && !reduce ? { opacity: [0, 0.5, 0], scale: [0.6, 1.15, 1.3] } : { opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(38,224,138,0.5), rgba(255,212,94,0.25) 60%, transparent)",
        }}
      />
    </span>
  );
}
