import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

const STEPS = [
  {
    n: "01",
    title: "Conversa inicial",
    body: "Entendemos onde sua marca está, o que ela vende, para quem vende e o que trava o crescimento hoje.",
    hint: "20 min · sem compromisso",
  },
  {
    n: "02",
    title: "Curadoria de contexto",
    body: "Mergulho em dados, métricas, canais, posicionamento e estrutura comercial. Mapeamos antes de opinar.",
    hint: "Análise interna",
  },
  {
    n: "03",
    title: "Diagnóstico estratégico",
    body: "Entregamos um documento com gargalos, oportunidades e prioridades — claro, acionável e sem achismo.",
    hint: "Relatório executivo",
  },
  {
    n: "04",
    title: "Plano de direção",
    body: "Se fizer sentido para os dois lados, montamos o plano de execução e seguimos juntos. Caso contrário, você leva o diagnóstico.",
    hint: "Decisão sua",
  },
];

export default function Diagnostic3() {
  return (
    <section id="diagnostico" className="relative overflow-hidden bg-ink text-bone">
      <div className="pattern-grid absolute inset-0 opacity-100" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(closest-side, #FF3206 0%, transparent 75%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
        <header className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-acid" />
                (03) &mdash; Diagn&oacute;stico
              </span>
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
              Entender,
              <br /> organizar <span className="text-bone/40">&amp;</span>{" "}
              <em className="italic text-acid">decidir</em>.
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg text-bone/70">
              Antes de propor solu&ccedil;&atilde;o, a gente investiga. Nosso
              processo de curadoria existe para que toda decis&atilde;o nasça
              de contexto &mdash; n&atilde;o de palpite.
            </p>
          </div>
        </header>

        <div className="mt-16 grid grid-cols-12 gap-6">
          {/* left visual ribbon */}
          <aside className="reveal relative col-span-12 overflow-hidden rounded-3xl border border-bone/10 p-10 text-bone md:col-span-4 md:p-12">
            <div className="absolute inset-0 bg-acid" aria-hidden />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,50,6,0.25) 0%, rgba(255,78,2,0) 60%)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(18,18,18,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,18,18,0.10) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />

            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/80">
                Como funciona
              </span>
              <span className="grid size-10 place-items-center rounded-full border border-bone/40 font-mono text-[11px] text-bone">
                4
              </span>
            </div>

            <h3 className="relative mt-12 font-display text-5xl leading-[0.95] tracking-[-0.03em] text-bone sm:text-6xl">
              Um processo,
              <br />
              <em className="italic">quatro etapas.</em>
            </h3>

            <p className="relative mt-6 text-base leading-relaxed text-bone/90">
              Do primeiro &ldquo;al&ocirc;&rdquo; ao plano de execu&ccedil;&atilde;o,
              voc&ecirc; ganha clareza em todo passo &mdash; mesmo que decida
              n&atilde;o trabalhar com a gente.
            </p>

            <a
              href={whatsappHref(whatsappMessages.comecar)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-12 inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone shadow-[0_10px_28px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-smoke"
            >
              Quero come&ccedil;ar
              <span className="cta-arrow grid size-7 place-items-center rounded-full bg-acid text-bone">
                <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <p className="relative mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70">
              <span className="size-1.5 animate-pulse rounded-full bg-bone" /> Resposta em at&eacute; 48h &uacute;teis
            </p>
          </aside>

          {/* right: steps */}
          <ol className="col-span-12 md:col-span-8">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="reveal group grid grid-cols-12 items-start gap-4 border-t border-bone/10 py-8 transition-colors duration-300 hover:bg-bone/[0.03] sm:gap-8 sm:py-10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="col-span-3 font-display text-6xl italic leading-none tracking-tight text-bone/25 transition-colors duration-300 group-hover:text-acid sm:col-span-2 sm:text-7xl">
                  {s.n}
                </span>
                <div className="col-span-9 sm:col-span-8">
                  <h4 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                    {s.title}
                  </h4>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-bone/70">
                    {s.body}
                  </p>
                </div>
                <span className="col-span-12 sm:col-span-2 sm:text-right">
                  <span className="inline-block rounded-full border border-bone/20 bg-bone/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/65">
                    {s.hint}
                  </span>
                </span>
              </li>
            ))}
            <li className="border-t border-bone/10" />
          </ol>
        </div>
      </div>
    </section>
  );
}
