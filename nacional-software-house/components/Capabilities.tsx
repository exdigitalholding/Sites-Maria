"use client";

import {
  Monitor,
  LayoutGrid,
  Sparkles,
  Cable,
  type LucideIcon as Icon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { capabilities } from "@/lib/site";

const icons: Record<string, Icon> = {
  sites: Monitor,
  sistemas: LayoutGrid,
  ia: Sparkles,
  integracoes: Cable,
};

// Bento spans: big / small / small / big for rhythm (not 4 equal cards)
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"];
const withMedia = [true, false, false, true];

export default function Capabilities() {
  return (
    <section
      id="capacidades"
      className="relative border-b border-line bg-ink-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Do site ao sistema que"
          accent="roda a sua operação."
          intro="Muda o escopo, não o padrão de entrega."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {capabilities.map((cap, i) => {
            const Ico = icons[cap.id];
            return (
              <TiltCard
                key={cap.id}
                className={`reveal ${spans[i]}`}
                max={7}
              >
                <div className="spotlight group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface-2 text-green-bright transition-colors group-hover:border-green/50">
                      <Ico size={24} strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs text-text-faint">
                      {cap.index}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-text-dim">
                    {cap.body}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {cap.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-ink/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-faint"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {withMedia[i] && (
                    <div className="pointer-events-none absolute -right-10 -top-10 hidden size-52 place-items-center rounded-full border border-dashed border-line/70 text-center text-[10px] font-mono uppercase tracking-widest text-text-faint sm:grid">
                      {/* PLACEHOLDER: print/screenshot do projeto */}
                      <span className="opacity-50">imagem<br />do projeto</span>
                    </div>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>

        <p className="reveal mt-10 hidden max-w-2xl text-base text-text-dim sm:block">
          Não achou o que precisa aqui? Melhor ainda. Sob medida é o que a gente
          faz.
        </p>
      </div>
    </section>
  );
}
