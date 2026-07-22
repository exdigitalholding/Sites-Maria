import Placeholder from "./Placeholder";

const STEPS = [
  {
    n: "01",
    title: "Inicie o diagnóstico",
    body: "Dê o primeiro passo respondendo algumas perguntas sobre seu negócio, mercado e objetivos de crescimento.",
  },
  {
    n: "02",
    title: "Contexto do seu negócio",
    body: "Analisamos posicionamento, canais, estrutura comercial, marketing atual e metas para entender o cenário real.",
  },
  {
    n: "03",
    title: "Análise estratégica",
    body: "Nossa equipe cruza dados, identifica gargalos e oportunidades — entregando um diagnóstico acionável, sem achismo.",
  },
];

export default function Diagnostic() {
  return (
    <section id="diagnostico" className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
      <header className="grid grid-cols-12 gap-y-6">
        <div className="col-span-12 flex items-center gap-3 md:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
            (04) — Diagnóstico
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
            Entender,
            <br /> organizar <span className="italic text-ink/40">&amp;</span>{" "}
            <em className="italic">escalar</em>.
          </h2>
        </div>
      </header>

      <div className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <Placeholder variant="signal" label="diagnostic-cover" ratio="aspect-[4/5]" />
        </div>

        <ol className="col-span-12 space-y-2 md:col-span-7">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal group flex flex-col gap-4 border-t border-ink/15 py-8 transition-colors hover:bg-bone/40 sm:flex-row sm:gap-10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-7xl italic leading-none tracking-tight text-ink/30 transition-colors group-hover:text-signal sm:text-8xl">
                {s.n}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">{s.body}</p>
              </div>
              <span className="hidden self-start font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 sm:block">
                Etapa {i + 1}/3
              </span>
            </li>
          ))}
          <li className="border-t border-ink/15" />
        </ol>
      </div>
    </section>
  );
}
