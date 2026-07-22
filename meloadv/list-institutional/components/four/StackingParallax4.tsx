"use client";

import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

/**
 * Stacking parallax — each card pins at the top of the viewport and the
 * next card slides up to cover it. The visual effect is "section entering
 * on top of section." Works with the global Lenis smooth scroll.
 *
 * Implementation is pure CSS sticky — no scroll listener — so it stays
 * cheap and survives `prefers-reduced-motion`.
 */

type Pillar = {
  n: string;
  title: string;
  body: string;
  bg: string;        // tailwind bg class
  text: string;      // tailwind text class
  accent: string;    // tailwind text class for accents
  metaLabel: string;
  ctaLabel: string;
};

const PILLARS: Pillar[] = [
  {
    n: "01",
    title: "Especialistas, em um só time.",
    body: "Estratégia, conteúdo, mídia, branding e tecnologia operando sob a mesma direção. Sem ruído entre áreas, sem terceirização escondida — quem desenha o plano também executa.",
    bg: "bg-smoke",
    text: "text-bone",
    accent: "text-acid",
    metaLabel: "Como pensamos",
    ctaLabel: "Conhecer o time",
  },
  {
    n: "02",
    title: "Visão de negócio, antes de marketing.",
    body: "Antes da campanha, o modelo. Olhamos margem, ciclo de venda, retenção e operação. O marketing é uma ferramenta — não a estratégia inteira do negócio.",
    bg: "bg-acid",
    text: "text-bone",
    accent: "text-ink",
    metaLabel: "Como decidimos",
    ctaLabel: "Ver método",
  },
  {
    n: "03",
    title: "Estratégia + execução, mesmo time.",
    body: "Pensar e fazer não são times separados aqui. Quem desenha a direção semana a semana é o mesmo grupo que assina a operação — sem gargalo de tradução.",
    bg: "bg-ink",
    text: "text-bone",
    accent: "text-acid",
    metaLabel: "Como entregamos",
    ctaLabel: "Ver entregáveis",
  },
  {
    n: "04",
    title: "Decisão baseada em dados, não tendências.",
    body: "Cada recomendação nasce de diagnóstico, dados e contexto. Não copiamos playbook de outra empresa — montamos um sob medida pra realidade do seu negócio.",
    bg: "bg-signal",
    text: "text-bone",
    accent: "text-ink",
    metaLabel: "Como medimos",
    ctaLabel: "Ver indicadores",
  },
];

const PILLAR_MESSAGES: Record<string, string> = {
  "Conhecer o time": whatsappMessages.time,
  "Ver método": whatsappMessages.metodo,
  "Ver entregáveis": whatsappMessages.entregaveis,
  "Ver indicadores": whatsappMessages.indicadores,
};

export default function StackingParallax4() {
  return (
    <section
      id="sobre"
      aria-label="Pilares — parallax empilhado"
      className="relative bg-ink"
    >
      {/* the section is the sum of all stickies. Each pillar gets a 100vh
          scroll budget so the cover effect feels deliberate. */}
      <div className="relative">
        {/* intro slab — sits below the stack so the first card slides over it */}
        <div className="relative z-0 bg-ink">
          <div className="pattern-grid absolute inset-0 opacity-100" aria-hidden />
          <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
            <header className="grid grid-cols-12 gap-y-6">
              <div className="col-span-12 flex items-center gap-3 md:col-span-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
                  <span className="inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-acid" />
                    (04) &mdash; A List
                  </span>
                </span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.04em] text-bone">
                  Quatro pilares.
                  <br />
                  <em className="italic text-acid">Um sistema.</em>
                </h2>
                <p className="mt-6 max-w-xl text-lg text-bone/70">
                  Role para baixo &mdash; cada cart&atilde;o vem por cima do
                  anterior. Como o pr&oacute;prio m&eacute;todo da List: cada
                  camada se ap&oacute;ia na que vem antes.
                </p>
              </div>
            </header>
          </div>
        </div>

        {/* the stack */}
        {PILLARS.map((p, i) => (
          <div
            key={p.n}
            className="sticky top-0 h-screen"
            style={{ zIndex: 10 + i }}
            aria-label={`Pilar ${p.n} — ${p.title}`}
          >
            <article
              className={`relative h-full w-full overflow-hidden ${p.bg} ${p.text}`}
            >
              {/* subtle pattern depends on background to add depth */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(${
                    p.bg === "bg-bone"
                      ? "rgba(18,18,18,0.18)"
                      : "rgba(255,255,255,0.10)"
                  } 1px, transparent 1px)`,
                  backgroundSize: "16px 16px",
                }}
                aria-hidden
              />

              {/* the rising-edge effect: each card has a rounded top so it
                  visually peels onto the previous one */}
              <div
                className="pointer-events-none absolute -top-px left-0 right-0 h-12 rounded-t-[32px] border-t border-bone/10"
                style={{ background: "inherit" }}
                aria-hidden
              />

              <div className="relative mx-auto grid h-full max-w-[1500px] grid-cols-12 items-center gap-10 px-6 sm:px-10">
                {/* left column */}
                <div className="col-span-12 md:col-span-7">
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-[clamp(4rem,10vw,9rem)] italic leading-none tracking-[-0.04em] ${p.accent}`}
                    >
                      {p.n}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                        {p.metaLabel}
                      </span>
                      <span className="h-px w-12 bg-current opacity-30" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                        {String(i + 1).padStart(2, "0")} / {String(PILLARS.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-8 font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.04em]">
                    {p.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-85 sm:text-xl">
                    {p.body}
                  </p>

                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappHref(PILLAR_MESSAGES[p.ctaLabel] ?? whatsappMessages.conversa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex cursor-pointer items-center gap-3 rounded-full px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                        p.bg === "bg-acid" || p.bg === "bg-signal"
                          ? "bg-ink text-bone hover:bg-smoke"
                          : p.bg === "bg-bone"
                          ? "bg-ink text-bone hover:bg-smoke"
                          : "bg-acid text-bone hover:bg-signal"
                      }`}
                    >
                      {p.ctaLabel}
                      <span className="cta-arrow cta-arrow-centered size-7 rounded-full bg-bone text-ink">
                        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                          <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* right column — a generative numeric figure to anchor the card */}
                <aside className="hidden md:col-span-5 md:block">
                  <div className="relative aspect-square w-full">
                    <div
                      className="absolute inset-0 rounded-3xl border opacity-25"
                      style={{ borderColor: "currentColor" }}
                      aria-hidden
                    />
                    <div
                      className="absolute inset-8 rounded-3xl border opacity-15"
                      style={{ borderColor: "currentColor" }}
                      aria-hidden
                    />
                    <div
                      className="absolute inset-16 rounded-3xl border opacity-10"
                      style={{ borderColor: "currentColor" }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-center">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
                          Pilar
                        </p>
                        <p
                          className={`mt-3 font-display text-[clamp(8rem,18vw,16rem)] italic leading-none tracking-[-0.05em] ${p.accent}`}
                        >
                          {p.n}
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </div>
        ))}

        {/* spacer below the stack so the next section reveals normally */}
        <div className="h-px" aria-hidden />
      </div>
    </section>
  );
}
