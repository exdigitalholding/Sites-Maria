"use client";

import { useState } from "react";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

type Service = {
  code: string;
  name: string;
  short: string;
  body: string;
  bullets: string[];
  accent: "orange" | "hot" | "graphite" | "bone";
};

const SERVICES: Service[] = [
  {
    code: "S/01",
    name: "Marketing de Conteúdo",
    short: "Conteúdo que constrói autoridade — não só engajamento.",
    body: "Planejamento editorial, produção e distribuição alinhados ao funil do seu negócio. Tratamos conteúdo como ativo: ele educa o público, gera demanda qualificada e prepara o cliente para a venda.",
    bullets: ["Estratégia editorial", "Produção multiformato", "Distribuição orgânica", "Métricas de funil"],
    accent: "orange",
  },
  {
    code: "S/02",
    name: "Copywriting",
    short: "Texto que vende — sem soar como vendedor.",
    body: "Construção de mensagem para sites, landing pages, e-mails, anúncios e materiais comerciais. Baseado em pesquisa de público, comportamento e oferta — não em frases prontas.",
    bullets: ["Sites e LPs", "Sequências de e-mail", "Anúncios pagos", "Materiais comerciais"],
    accent: "hot",
  },
  {
    code: "S/03",
    name: "Tráfego Pago",
    short: "Mídia paga com previsibilidade — não com apostas.",
    body: "Gestão integrada de Meta Ads, Google Ads e canais complementares, com foco em CAC, LTV e métricas de negócio. Não vendemos cliques: vendemos previsibilidade.",
    bullets: ["Meta & Google", "Estrutura de campanhas", "Otimização contínua", "Relatório executivo"],
    accent: "graphite",
  },
  {
    code: "S/04",
    name: "Estratégia & Posicionamento",
    short: "Saber o que dizer antes de decidir onde gritar.",
    body: "Clareza de mensagem, diferencial competitivo e direção estratégica. Mapeamos público, ofertas e mercado para encontrar onde a sua marca tem o direito de ganhar.",
    bullets: ["Diagnóstico de marca", "Mensagem central", "Diferencial competitivo", "Roadmap estratégico"],
    accent: "bone",
  },
  {
    code: "S/05",
    name: "Branding",
    short: "Marca como sistema — não como logotipo.",
    body: "Identidade visual, verbal e narrativa construída em sistema. Coerência em todos os pontos de contato, do anúncio ao atendimento.",
    bullets: ["Identidade visual", "Identidade verbal", "Guia de marca", "Narrativa de marca"],
    accent: "orange",
  },
  {
    code: "S/06",
    name: "Consultoria",
    short: "Direção estratégica contínua, para quem decide.",
    body: "Acompanhamento próximo da diretoria — análise de dados, decisão de prioridades, orientação de marketing e produto. Pensamos com você, não por você.",
    bullets: ["Comitês mensais", "Análise de dados", "Priorização de iniciativas", "Mentoria executiva"],
    accent: "hot",
  },
];

const ACCENT: Record<
  Service["accent"],
  { bg: string; chip: string; titleColor: string; counter: string }
> = {
  orange: {
    bg: "bg-acid",
    chip: "bg-ink text-acid",
    titleColor: "text-bone",
    counter: "text-bone/70",
  },
  hot: {
    bg: "bg-signal",
    chip: "bg-ink text-signal",
    titleColor: "text-bone",
    counter: "text-bone/70",
  },
  graphite: {
    bg: "bg-smoke",
    chip: "bg-acid text-bone",
    titleColor: "text-bone",
    counter: "text-bone/60",
  },
  bone: {
    bg: "bg-bone",
    chip: "bg-ink text-bone",
    titleColor: "text-ink",
    counter: "text-ink/60",
  },
};

export default function Services3() {
  const [active, setActive] = useState<number>(0);
  const current = SERVICES[active];
  const accent = ACCENT[current.accent];
  const isLightAccent = current.accent === "bone";

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#0a0a0a] text-bone"
    >
      <div className="pattern-dots absolute inset-0 opacity-100" aria-hidden />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
        {/* header */}
        <header className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-acid" />
                (02) &mdash; Servi&ccedil;os
              </span>
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
              Seis frentes,
              <br />
              <em className="italic text-acid">um s&oacute; time.</em>
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg text-bone/70">
              Servi&ccedil;os integrados, conduzidos pelo mesmo
              n&uacute;cleo estrat&eacute;gico. Sem terceiriza&ccedil;&atilde;o
              escondida, sem ru&iacute;do entre &aacute;reas.
            </p>
          </div>
        </header>

        {/* navigable list */}
        <div className="mt-16 grid grid-cols-12 gap-6 md:gap-10">
          {/* left: tab list */}
          <ul className="col-span-12 flex flex-col md:col-span-5">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.code}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group flex w-full cursor-pointer items-center justify-between gap-6 border-t border-bone/10 py-6 text-left transition-colors duration-300 last-of-type:border-b ${
                      isActive ? "text-acid" : "text-bone hover:text-bone/80"
                    }`}
                  >
                    <span className="flex items-baseline gap-5">
                      <span
                        className={`font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                          isActive ? "text-acid" : "text-bone/40"
                        }`}
                      >
                        {s.code}
                      </span>
                      <span className="font-display text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
                        {s.name}
                      </span>
                    </span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-acid bg-acid text-bone shadow-[0_8px_24px_-6px_rgba(255,78,2,0.6)]"
                          : "border-bone/25 group-hover:border-bone"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`size-3.5 transition-transform duration-300 ${isActive ? "rotate-0" : "-rotate-45"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* right: active service detail */}
          <div className="col-span-12 md:col-span-7">
            <div
              key={current.code}
              className="relative overflow-hidden rounded-3xl border border-bone/10 shadow-[0_30px_90px_-30px_rgba(255,78,2,0.35)]"
            >
              {/* accent header */}
              <div className={`relative ${accent.bg} p-8 sm:p-12`}>
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${
                      isLightAccent ? "rgba(18,18,18,0.10)" : "rgba(255,255,255,0.10)"
                    } 1px, transparent 1px), linear-gradient(to bottom, ${
                      isLightAccent ? "rgba(18,18,18,0.10)" : "rgba(255,255,255,0.10)"
                    } 1px, transparent 1px)`,
                    backgroundSize: "64px 64px",
                  }}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-6">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] ${accent.chip}`}
                  >
                    {current.code}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${accent.counter}`}
                  >
                    {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={`relative mt-10 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.92] tracking-[-0.03em] ${accent.titleColor}`}
                >
                  {current.name}
                </h3>
                <p
                  className={`relative mt-4 max-w-xl text-lg leading-snug ${
                    isLightAccent ? "text-ink/80" : "text-bone/85"
                  }`}
                >
                  {current.short}
                </p>
              </div>

              {/* body */}
              <div className="bg-smoke p-8 sm:p-12">
                <p className="max-w-xl text-base leading-relaxed text-bone/80 sm:text-lg">
                  {current.body}
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {current.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 rounded-2xl border border-bone/10 bg-ink/40 px-4 py-3 text-sm text-bone/85"
                    >
                      <span className="size-1.5 rounded-full bg-acid" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappHref(whatsappMessages.servico(current.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-acid px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone shadow-[0_10px_36px_-10px_rgba(255,78,2,0.7)] transition-all duration-300 hover:bg-signal"
                  >
                    Quero esse servi&ccedil;o
                    <span className="cta-arrow grid size-7 place-items-center rounded-full bg-ink text-acid">
                      <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={whatsappHref(whatsappMessages.time)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-bone/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-acid hover:bg-bone hover:text-ink"
                  >
                    Falar com o time
                  </a>
                </div>
              </div>
            </div>

            {/* mini nav hint */}
            <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
              <span>Selecione um servi&ccedil;o ao lado</span>
              <span className="text-acid">{current.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
