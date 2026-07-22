import Placeholder from "./Placeholder";

type Service = {
  index: string;
  name: string;
  body: string;
  variant: "violet" | "signal" | "acid" | "mauve" | "dark" | "checker" | "grid" | "lines";
  span: string;
};

const SERVICES: Service[] = [
  {
    index: "S/01",
    name: "Marketing de Conteúdo",
    body: "Conteúdo estratégico para atrair, educar e preparar o público para a venda, alinhado ao posicionamento da marca.",
    variant: "acid",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    index: "S/02",
    name: "Copywriting",
    body: "Textos persuasivos orientados a conversão, com base em dados, comportamento do consumidor e objetivos de negócio.",
    variant: "violet",
    span: "md:col-span-5",
  },
  {
    index: "S/03",
    name: "Tráfego Pago",
    body: "Gestão de mídia com foco em performance, previsibilidade e escala — integrada à estratégia e ao funil de vendas.",
    variant: "signal",
    span: "md:col-span-5",
  },
  {
    index: "S/04",
    name: "Estratégia e Posicionamento",
    body: "Definição clara de mensagem, diferencial competitivo e direção estratégica para crescimento sustentável.",
    variant: "dark",
    span: "md:col-span-4",
  },
  {
    index: "S/05",
    name: "Branding",
    body: "Construção e fortalecimento de marcas que comunicam valor, autoridade e coerência em todos os pontos de contato.",
    variant: "mauve",
    span: "md:col-span-4",
  },
  {
    index: "S/06",
    name: "Consultoria",
    body: "Análise profunda do negócio, diagnóstico de marketing e orientação estratégica contínua para tomada de decisão.",
    variant: "checker",
    span: "md:col-span-4",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
      <header className="grid grid-cols-12 gap-y-6">
        <div className="col-span-12 flex items-center gap-3 md:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            (02) — Serviços
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
            Estratégia, <span className="italic">execução</span>
            <br />
            <span className="text-ink/40">&amp;</span> performance.
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg text-ink/70">
            Seis frentes integradas, conduzidas por um único time. Sem ruído, sem terceirização escondida,
            sem playbook genérico.
          </p>
        </div>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {SERVICES.map((s) => (
          <article
            key={s.name}
            className={`reveal group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-bone p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ink hover:shadow-[0_30px_60px_-20px_rgba(10,10,10,0.25)] sm:p-9 md:col-span-12 ${s.span}`}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
                {s.index}
              </span>
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-ink/20 transition-all group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
                <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div className="mt-10 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                  {s.name}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
                  {s.body}
                </p>
              </div>

              <Placeholder
                variant={s.variant}
                label={`service / ${s.index.toLowerCase()}`}
                ratio="aspect-[4/3]"
                className="w-full"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
