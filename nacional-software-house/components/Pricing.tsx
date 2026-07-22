import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { pricing, whatsappHref, wa } from "@/lib/site";

export default function Pricing() {
  return (
    <section
      id="investimento"
      className="relative border-b border-line bg-ink-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          title="Investimento claro,"
          accent={"sem “depende” solto."}
          intro="O valor acompanha a complexidade. Você sempre sabe o número antes de assinar."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-3xl border p-8 ${
                plan.highlight
                  ? "border-green/50 bg-gradient-to-b from-green/[0.08] to-surface"
                  : "border-line bg-surface"
              }`}
            >
              {plan.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-green px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#04120b]">
                  Mais procurado
                </span>
              )}
              <h3 className="font-display text-lg font-semibold tracking-tight text-text">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-text-dim">{plan.for}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight text-text">
                  {plan.price}
                </span>
              </div>
              <span className="mt-1 font-mono text-xs text-text-faint">
                {plan.note}
              </span>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-dim">
                    <Check
                      strokeWidth={3}
                      className="mt-0.5 shrink-0 text-green"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <a
                  href={whatsappHref(wa.proposta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-green text-[#04120b] hover:bg-green-bright"
                      : "border border-line text-text hover:border-green/50 hover:text-green-bright"
                  }`}
                >
                  Tirar a ideia do papel
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm text-text-faint">
          Nada de custo escondido. Você aprova o valor na proposta antes de
          qualquer código ser escrito.
        </p>
      </div>
    </section>
  );
}
