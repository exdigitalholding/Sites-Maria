const stats = [
  { value: "~15", unit: "dias", label: "para a primeira versão no ar" },
  { value: "35–45", unit: "dias", label: "para um projeto padrão ficar redondo" },
  { value: "3", unit: "sprints", label: "de ajuste inclusos para lapidar tudo" },
  { value: "10x", unit: "", label: "de parcelamento no plano essencial" },
];

export default function Stats() {
  return (
    <section className="relative border-b border-line bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <span className="reveal mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
          <span className="h-px w-6 bg-green/60" aria-hidden />
          Prazos
        </span>
        <h2 className="reveal max-w-2xl font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-text">
          A sua ideia no ar em semanas,{" "}
          <span className="text-brand-gradient">não em meses.</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal border-t border-line pt-5"
              data-delay={`${i * 80}`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="font-mono text-sm text-green">{s.unit}</span>
                )}
              </div>
              <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-text-dim">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 hidden font-mono text-[11px] text-text-faint sm:block">
          Prazos são estimativas de projetos padrão. Escopos maiores têm
          cronograma proporcional, sempre acordado antes de começar.
        </p>
      </div>
    </section>
  );
}
