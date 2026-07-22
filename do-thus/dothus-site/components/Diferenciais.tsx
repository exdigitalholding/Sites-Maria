"use client";

import { SectionHeading } from "./Section";
import { Stagger, StaggerItem } from "./Reveal";
import { DIFERENCIAIS } from "@/lib/content";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative bg-abyss py-28 sm:py-36">
      <div className="container-do">
        <SectionHeading eyebrow="Diferenciais">
          <span className="editorial font-normal accent">Por que</span> a do.thus
          é diferente.
        </SectionHeading>

        <Stagger className="mt-14 border-t border-line/70">
          {DIFERENCIAIS.map((d) => (
            <StaggerItem key={d.n}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-line/70 py-7 transition-colors duration-300 hover:bg-surface/30 sm:grid-cols-[auto_auto_1fr] sm:gap-8 sm:px-2">
                <span className="text-lg font-semibold text-electric">
                  {d.n}
                </span>
                <h3 className="text-lg font-semibold text-snow sm:text-xl">
                  {d.lead}
                </h3>
                <p className="col-span-2 text-base leading-relaxed text-text-dim sm:col-span-1">
                  {d.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
