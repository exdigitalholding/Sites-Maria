"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Monogram } from "./Logo";

/**
 * "Casamento perfeito existe" — Gestão + Tecnologia.
 * Duas esferas de vidro que deslizam uma em direção à outra no scroll,
 * com o monograma d. se acendendo na interseção.
 */
export function Union() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "center 0.5"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-70, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const coreScale = useTransform(scrollYProgress, [0.4, 1], [0.4, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.45, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-structure py-28 text-graphite sm:py-36">
      <div className="container-do grid items-center gap-16 lg:grid-cols-2">
        {/* texto */}
        <div>
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.32em] text-electric-deep">
            O que nos torna únicos
          </span>
          <Reveal>
            <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.03] text-carbon">
              Casamento{" "}
              <span className="editorial font-normal text-electric-deep">
                perfeito
              </span>{" "}
              existe.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-xl font-medium text-carbon/80">
              A união da gestão, com o poder da tecnologia.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite/80">
              A do.thus nasce da fusão de especialistas em gestão, engenharia de
              dados e inteligência artificial, construindo um modelo de gestão{" "}
              <strong className="font-semibold text-carbon">
                forte, inteligente e estratégico.
              </strong>
            </p>
          </Reveal>
        </div>

        {/* visual: esferas */}
        <div ref={ref} className="relative mx-auto h-[340px] w-full max-w-lg">
          <motion.div
            style={{ x: leftX }}
            className="absolute left-[6%] top-1/2 flex size-56 -translate-y-1/2 items-center justify-center rounded-full sm:size-64"
          >
            <Sphere label="Gestão" />
          </motion.div>
          <motion.div
            style={{ x: rightX }}
            className="absolute right-[6%] top-1/2 flex size-56 -translate-y-1/2 items-center justify-center rounded-full sm:size-64"
          >
            <Sphere label="Tecnologia" light />
          </motion.div>

          {/* núcleo — monograma na interseção */}
          <motion.div
            style={{ scale: coreScale, opacity: coreOpacity }}
            className="absolute left-1/2 top-1/2 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-carbon shadow-[0_20px_60px_-15px_rgba(11,25,44,0.6)] ring-4 ring-structure"
          >
            <Monogram className="w-9 text-snow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sphere({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div
      className="relative flex size-full items-center justify-center rounded-full"
      style={{
        background: light
          ? "radial-gradient(circle at 32% 28%, #cfe3f5, #6f9bc4 62%, #4a76a0)"
          : "radial-gradient(circle at 32% 28%, #7fa6c9, #375d86 60%, #2a4b6e)",
        boxShadow:
          "inset 0 -18px 50px rgba(0,0,0,0.28), 0 30px 60px -20px rgba(11,25,44,0.45)",
      }}
    >
      <span className="text-xl font-semibold text-snow/95 drop-shadow">
        {label}
      </span>
    </div>
  );
}
