"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import FrameSequence from "./FrameSequence";

/**
 * Scroll-driven zoom parallax (Olivier Larose technique): placeholder frames
 * scale up at different rates as you scroll, spreading into a composed grid.
 * Transform/opacity only -> smooth on mobile. Touch scroll drives it natively.
 */
const tiles = [
  { pos: "", size: "h-[26vh] w-[62vw] sm:h-[32vh] sm:w-[26vw]", label: "Hero do projeto", center: true },
  { pos: "top-[-28vh] left-[6vw]", size: "h-[24vh] w-[38vw] sm:w-[22vw]", label: "Landing page", sequence: { folderPath: "/frames-sites/landing-page", frameCount: 61, startFrame: 20, prefix: "ezgif-frame-" } },
  { pos: "top-[-8vh] left-[-32vw]", size: "h-[24vh] w-[42vw] sm:w-[22vw]", label: "Painel / SaaS" },
  { pos: "top-[26vh] left-[24vw]", size: "h-[22vh] w-[40vw] sm:w-[20vw]", label: "Mobile app" },
  { pos: "top-[24vh] left-[-30vw]", size: "h-[22vh] w-[38vw] sm:w-[22vw]", label: "Checkout" },
  { pos: "top-[-30vh] left-[30vw]", size: "h-[20vh] w-[34vw] sm:w-[16vw]", label: "Automação", sequence: { folderPath: "/frames-sites/automacao", frameCount: 115, startFrame: 45, prefix: "ezgif-frame-" } },
];

export default function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const s1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const s2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const s3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scales = [s1, s2, s3, s2, s3, s2];
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  if (reduce) {
    return (
      <section className="border-b border-line bg-ink px-5 py-20 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-text">
          Cada tela, pensada <span className="text-brand-gradient">no detalhe.</span>
        </h2>
      </section>
    );
  }

  return (
    <section id="entregas" ref={container} className="relative border-b border-line bg-ink"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center overflow-hidden">
        {/* Intro copy, fades out as zoom begins */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="pointer-events-none absolute z-20 px-6 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            O que a gente entrega
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,5vw,3.2rem)] font-semibold leading-[1.08] tracking-tight text-text">
            Cada tela, pensada
            <br />
            <span className="text-brand-gradient">no detalhe.</span>
          </h2>
        </motion.div>

        {tiles.map((t, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i] }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div
              className={`relative ${t.size} ${t.pos} overflow-hidden rounded-2xl border border-line bg-surface-2`}
            >
              {t.sequence ? (
                <FrameSequence
                  progress={scrollYProgress}
                  folderPath={t.sequence.folderPath}
                  frameCount={t.sequence.frameCount}
                  startFrame={t.sequence.startFrame}
                  prefix={t.sequence.prefix}
                />
              ) : (
                <>
                  <div className="pattern-dots absolute inset-0 opacity-40" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      t.center ? "from-green/20" : "from-white/[0.04]"
                    } to-transparent`}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint sm:text-[10px]">
                      {t.label}
                    </span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
