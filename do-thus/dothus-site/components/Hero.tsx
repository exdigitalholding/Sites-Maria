"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { DataField } from "./DataField";
import { CTAButton } from "./Button";
import { PRIMARY_WHATSAPP } from "@/lib/content";
import { Monogram } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);

  return (
    <section ref={ref} id="top" className="screen relative overflow-hidden">
      {/* fundo: quieto, muito ar */}
      <div className="absolute inset-0 -z-10 bg-abyss">
        <DataField className="opacity-[0.38]" density={0.85} />
        {/* halo central grande */}
        <motion.div
          style={{ scale: glowScale }}
          className="halo absolute left-1/2 top-1/2 size-[80vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-60"
        />
        {/* watermark d. gigante, quase imperceptível */}
        <motion.div
          style={{ opacity: markOpacity }}
          className="pointer-events-none absolute -right-[8%] bottom-[-12%] w-[52vw] max-w-[720px] text-carbon"
        >
          <Monogram className="w-full" />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-abyss" />
      </div>

      <motion.div style={{ y, opacity }} className="container-do w-full">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 inline-flex items-center gap-2.5 text-sm font-medium tracking-wide text-text-dim"
        >
          <span className="size-1.5 rounded-full bg-electric shadow-[0_0_12px_2px] shadow-electric/60" />
          <span>
            do<span className="text-electric">.</span>thus — Inteligência em
            Gestão
          </span>
        </motion.span>

        <h1 className="display-xl text-[clamp(3rem,10vw,8.5rem)] text-snow">
          <Line delay={0.08}>Decisões mais</Line>
          <Line delay={0.2}>
            <span className="editorial font-normal accent">inteligentes.</span>
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="mt-10 max-w-md text-xl leading-relaxed text-text-dim"
        >
          Gestão, dados e inteligência artificial em um só lugar. Para você
          decidir com clareza — não com achismo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.62 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <CTAButton href={PRIMARY_WHATSAPP}>Agendar demonstração</CTAButton>
          <CTAButton href="#solucoes" variant="ghost" arrow={false}>
            Explorar
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* cue de scroll minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute inset-x-0 bottom-9 flex flex-col items-center gap-2"
      >
        <span className="text-[0.68rem] uppercase tracking-[0.3em] text-text-faint">
          Role
        </span>
        <motion.span
          className="h-8 w-px bg-gradient-to-b from-electric to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
