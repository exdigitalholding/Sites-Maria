"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative border-b border-line bg-ink-2 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <h2 className="reveal font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight text-text">
            Perguntas que quase{" "}
            <span className="text-brand-gradient">todo mundo faz.</span>
          </h2>
          <p className="reveal mt-5 max-w-sm text-base leading-relaxed text-text-dim" data-delay="100">
            Se a sua não estiver aqui, é só chamar. A gente responde antes de
            você fechar qualquer coisa.
          </p>
        </div>

        <div className="reveal flex flex-col">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t border-line last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium tracking-tight text-text sm:text-xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-green/50 text-green-bright"
                        : "border-line text-text-dim"
                    }`}
                  >
                    <Plus size={16} strokeWidth={3} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-text-dim">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
