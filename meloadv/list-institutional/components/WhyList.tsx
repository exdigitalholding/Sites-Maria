const REASONS = [
  {
    n: "I",
    title: "Ecossistema de Especialistas",
    body: "Empresas e profissionais que atuam em diferentes frentes do crescimento — marketing, vendas, tecnologia, tráfego, branding e performance.",
  },
  {
    n: "II",
    title: "Visão Estratégica de Negócio",
    body: "Não olhamos só para campanhas. Analisamos o negócio como um todo para criar estratégias alinhadas ao crescimento real.",
  },
  {
    n: "III",
    title: "Estratégia + Execução",
    body: "Da análise à ação. Estruturamos o plano e executamos com método, clareza e acompanhamento contínuo.",
  },
  {
    n: "IV",
    title: "Decisões Baseadas em Dados",
    body: "Cada recomendação nasce de diagnóstico, dados e contexto — não de tendências passageiras ou soluções genéricas.",
  },
];

export default function WhyList() {
  return (
    <section
      id="por-que"
      className="relative overflow-hidden bg-acid py-24 text-ink sm:py-32"
    >
      <div className="pattern-grid absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <header className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70">
              (05) — Manifesto
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.04em]">
              Mais que uma agência.
              <br />
              Um <em className="italic">ecossistema</em>{" "}
              <span className="text-ink/55">estratégico.</span>
            </h2>
          </div>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-ink/15 sm:grid-cols-2">
          {REASONS.map((r) => (
            <article
              key={r.n}
              className="reveal group relative bg-acid p-8 transition-colors hover:bg-bone sm:p-12"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-5xl italic leading-none tracking-tight text-ink/40 transition-colors group-hover:text-signal">
                  {r.n}
                </span>
                <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  {r.title}
                </h3>
              </div>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
