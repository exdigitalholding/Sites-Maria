"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { METHOD, CLIENTS } from "@/lib/content";

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="metodo" className="relative bg-abyss py-28 sm:py-40">
      <div className="container-do">
        {/* prova social, discreta */}
        <Reveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-text-faint">
            Um método já validado por
          </p>
        </Reveal>
        <div className="mask-x relative mb-28 overflow-hidden">
          <div className="flex w-max animate-[marquee_42s_linear_infinite] gap-3">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div
                key={i}
                className="flex h-12 shrink-0 items-center px-6 text-base font-medium text-text-faint"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <SectionHeading eyebrow="Como fazemos">
          Um método validado no mercado.{" "}
          <span className="editorial font-normal accent">Agora, seu.</span>
        </SectionHeading>

        {/* timeline vertical com linha desenhada no scroll */}
        <div ref={ref} className="relative mt-20 pl-8 sm:pl-0">
          {/* trilho */}
          <div className="absolute left-0 top-2 h-full w-px bg-line sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-electric to-electric/30"
            />
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {METHOD.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <div
                  key={s.n}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-16 ${
                    right ? "" : ""
                  }`}
                >
                  {/* ponto */}
                  <span className="absolute -left-8 top-1.5 flex size-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                    <span className="size-2.5 rounded-full bg-electric shadow-[0_0_12px_2px] shadow-electric/50" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      right
                        ? "sm:col-start-2"
                        : "sm:col-start-1 sm:text-right"
                    }
                  >
                    <span className="font-display text-4xl font-semibold text-electric/80">
                      {s.n}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-snow">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-sm text-base leading-relaxed text-text-dim ${
                        right ? "" : "sm:ml-auto"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
