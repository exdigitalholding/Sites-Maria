"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { DataField } from "./DataField";
import { CTAButton } from "./Button";
import { Reveal } from "./Reveal";
import { CONTACTS, PRIMARY_WHATSAPP } from "@/lib/content";

export function Contact() {
  const people = [CONTACTS.rafael, CONTACTS.andre];

  return (
    <section id="contato" className="relative overflow-hidden bg-carbon py-32 sm:py-44">
      <div className="absolute inset-0 -z-10">
        <DataField className="opacity-40" density={0.9} interactive={false} />
        <div className="aura absolute inset-0" />
      </div>

      <div className="container-do relative text-center">
        <Reveal as="span" className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.32em] text-electric">
          Vamos começar?
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.03] text-snow">
            Sua próxima decisão pode ser{" "}
            <span className="editorial font-normal accent">muito melhor.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-dim">
            Converse com a do.thus e veja, na prática, como transformar gestão e
            dados em decisões mais inteligentes.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <CTAButton href={PRIMARY_WHATSAPP} className="px-8 py-4 text-base">
              Agendar demonstração
            </CTAButton>
          </div>
        </Reveal>

        {/* cartões dos diretores */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-4 sm:grid-cols-2">
          {people.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/50 p-5 text-left transition-all duration-300 hover:border-electric/40 hover:bg-surface-2"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric transition-colors group-hover:bg-electric group-hover:text-carbon">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-snow">{p.name}</p>
                <p className="text-sm text-text-dim">{p.role}</p>
                <p className="mt-0.5 text-sm font-medium text-electric">
                  {p.phone}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
