"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./Section";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { PROBLEMS } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative bg-abyss py-28 sm:py-40">
      <div className="container-do">
        <SectionHeading eyebrow="O problema">
          Muito ruído na operação.{" "}
          <span className="editorial font-normal accent">
            Pouca clareza na decisão.
          </span>
        </SectionHeading>

        <Stagger className="mt-16 flex flex-col">
          {PROBLEMS.map((p) => (
            <StaggerItem key={p.pain}>
              <div className="group flex flex-col gap-2 border-t border-line/70 py-8 transition-colors duration-300 hover:border-electric/30 md:flex-row md:items-center md:justify-between md:gap-10">
                <span className="text-xl font-semibold text-snow md:text-2xl">
                  {p.pain}
                </span>
                <span className="flex items-center gap-3 text-base text-text-dim md:max-w-sm md:text-right">
                  <ArrowRight className="size-4 shrink-0 text-electric/70 md:hidden" />
                  {p.effect}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-2xl text-2xl font-medium leading-snug text-snow sm:text-3xl">
            Gestão frágil e dados desorganizados custam{" "}
            <span className="editorial font-normal accent">
              tempo, dinheiro e oportunidades.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
