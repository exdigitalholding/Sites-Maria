export default function Manifesto() {
  return (
    <section className="relative mx-auto max-w-[1500px] px-6 py-32 sm:px-10 sm:py-44">
      <div className="grid grid-cols-12 gap-y-10">
        <div className="col-span-12 flex items-center gap-3 md:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            (01) — Manifesto
          </span>
        </div>

        <p className="reveal balance col-span-12 font-display text-[clamp(2rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.03em] md:col-span-9">
          Marketing <em className="italic">estratégico</em> orientado a{" "}
          <span className="relative inline-block">
            crescimento
            <svg
              viewBox="0 0 300 20"
              className="absolute -bottom-2 left-0 h-3 w-full text-signal"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              aria-hidden
            >
              <path d="M2 12 Q 75 2, 150 10 T 298 8" strokeLinecap="round" />
            </svg>
          </span>{" "}
          e <span className="text-ink/40">previsibilidade.</span>
        </p>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-6">
        <div className="reveal col-span-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { k: "+ 6", v: "Anos de atuação" },
            { k: "07", v: "Mercados verticais" },
            { k: "100%", v: "Direção própria" },
            { k: "1", v: "Foco: resultado" },
          ].map(({ k, v }) => (
            <div key={k} className="border-t border-ink/20 pt-4">
              <p className="font-display text-5xl tracking-tight sm:text-6xl">{k}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
