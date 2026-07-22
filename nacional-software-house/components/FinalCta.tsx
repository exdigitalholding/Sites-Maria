import { CtaPrimary } from "./Cta";
import { whatsappHref, wa } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-28 sm:py-40">
      {/* Aurora depth */}
      <div className="aurora left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 bg-green/25" />
      <div className="aurora bottom-0 right-10 h-72 w-72 translate-y-1/3 bg-gold/15" />
      <div className="pattern-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="reveal mx-auto mb-8 flex h-9 w-fit items-center gap-1" aria-hidden>
          <span className="h-full w-1 rounded-full bg-green" />
          <span className="h-full w-1 rounded-full bg-gold" />
        </span>
        <h2 className="reveal font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.03] tracking-tight text-text">
          Sua ideia já existe.{" "}
          <span className="text-brand-gradient">Falta colocá-la no ar.</span>
        </h2>
        <p className="reveal mx-auto mt-7 max-w-xl text-lg leading-relaxed text-text-dim" data-delay="100">
          Você chegou até aqui porque tem algo na cabeça esperando pra sair. A
          gente cuida do resto, do primeiro rascunho ao produto funcionando.
        </p>
        <div className="reveal mt-10 flex justify-center" data-delay="180">
          <CtaPrimary href={whatsappHref(wa.comecar)}>
            Começar meu projeto
          </CtaPrimary>
        </div>
        <p className="reveal mt-8 font-mono text-[11px] tracking-wide text-text-faint" data-delay="240">
          A partir de R$ 3.500 · até 10x · primeira versão no ar em ~15 dias
        </p>
      </div>
    </section>
  );
}
