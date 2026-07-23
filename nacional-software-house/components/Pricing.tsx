import { ArrowUpRight } from "lucide-react";
import PriceCountdown from "./PriceCountdown";
import { site, whatsappHref, wa } from "@/lib/site";

const steps = [
  {
    k: "01",
    title: "Parte de R$ 3.500",
    body: `O piso de qualquer projeto, parcelável em ${site.installments} sem juros. Nada começa abaixo disso.`,
    highlight: true,
  },
  {
    k: "02",
    title: "A gente calcula o escopo",
    body: "Páginas, integrações e complexidade viram um orçamento sob medida, item por item.",
    highlight: false,
  },
  {
    k: "03",
    title: "Você aprova antes de começar",
    body: "Recebe o número fechado, com tudo detalhado. Aceita e a gente começa, ou ajusta o escopo junto.",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="investimento"
      className="relative border-b border-line bg-ink-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            <span className="h-px w-6 bg-green/60" aria-hidden />
            Investimento
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text">
            <span className="block">Todo projeto começa em</span>
            <span className="mt-1 block">
              <PriceCountdown />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg">
            Esse é o piso, parcelável em {site.installments}. Daí pra cima o valor
            é sob medida pela complexidade, e você aprova o número fechado antes
            de qualquer linha de código. Nada de “depende” solto.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
          {/* linha conectora entre os passos */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[54px] hidden h-px bg-gradient-to-r from-transparent via-green/40 to-transparent lg:block"
            aria-hidden
          />

          {steps.map((s, i) => (
            <div
              key={s.k}
              className={`reveal relative rounded-3xl border bg-surface p-8 ${
                s.highlight ? "border-green/40" : "border-line"
              }`}
              data-delay={i * 100}
            >
              <span
                className={`relative z-10 grid size-11 place-items-center rounded-full font-mono text-sm font-semibold ${
                  s.highlight
                    ? "bg-green text-[#04120b]"
                    : "border border-line bg-ink text-green-bright"
                }`}
              >
                {s.k}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-text">
                {s.highlight ? (
                  <>
                    Parte de{" "}
                    <span className="text-brand-gradient">R$ 3.500</span>
                  </>
                ) : (
                  s.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-4" data-delay="150">
          <a
            href={whatsappHref(wa.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-green px-8 py-4 text-sm font-semibold text-[#04120b] shadow-[0_18px_50px_-14px_rgba(18,183,106,0.7)] transition-colors duration-300 hover:bg-green-bright"
          >
            Quero meu orçamento
            <ArrowUpRight
              strokeWidth={3}
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <span className="font-mono text-xs text-text-faint">
            Orçamento sem compromisso. Sem custo escondido, sem letra miúda.
          </span>
        </div>
      </div>
    </section>
  );
}
