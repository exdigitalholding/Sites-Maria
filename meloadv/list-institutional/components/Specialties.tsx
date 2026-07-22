import Placeholder from "./Placeholder";

const ITEMS: { name: string; variant: "violet" | "signal" | "acid" | "mauve" | "dark" | "checker" | "grid" | "lines" }[] = [
  { name: "Gastronômico", variant: "signal" },
  { name: "Indústrias", variant: "dark" },
  { name: "Imobiliário", variant: "mauve" },
  { name: "Advocacia", variant: "grid" },
  { name: "Contabilidade", variant: "checker" },
  { name: "Saúde", variant: "acid" },
  { name: "Estética Automotiva", variant: "violet" },
];

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden bg-ink py-24 text-bone sm:py-32"
    >
      <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        <header className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              (03) — Especialidade
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
              Mercados onde
              <br />
              <em className="italic text-acid">sabemos vencer.</em>
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg text-bone/70">
              Verticalidade traz contexto. Contexto vira velocidade. Velocidade vira resultado
              previsível.
            </p>
          </div>
        </header>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {ITEMS.map((item, i) => (
            <article
              key={item.name}
              className={`reveal group relative overflow-hidden rounded-3xl border border-bone/10 transition-all duration-500 hover:border-acid hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Placeholder
                variant={item.variant}
                label={item.name.toLowerCase()}
                ratio={i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/5]"}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                <h3 className="font-display text-2xl leading-tight tracking-tight text-bone sm:text-3xl">
                  {item.name}
                </h3>
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-bone/90 text-ink transition-all group-hover:rotate-45 group-hover:bg-acid">
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
