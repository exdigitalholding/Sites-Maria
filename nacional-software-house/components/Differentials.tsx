import { differentials } from "@/lib/site";

export default function Differentials() {
  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Sticky heading column */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <h2 className="reveal font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.06] tracking-tight text-text">
            Por que a Nacional{" "}
            <span className="text-brand-gradient">entrega diferente.</span>
          </h2>
          <p className="reveal mt-6 max-w-md text-base leading-relaxed text-text-dim" data-delay="100">
            Quatro coisas que a gente não abre mão. É o que separa produto de
            gambiarra, e prazo cumprido de promessa vazia.
          </p>
          <div
            className="reveal mt-10 hidden rounded-2xl border border-line bg-surface p-6 lg:block"
            data-delay="180"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-semibold text-green">
                ~15
              </span>
              <span className="text-sm text-text-dim">
                dias para a primeira
                <br />
                versão no ar
              </span>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="flex flex-col">
          {differentials.map((d, i) => (
            <div
              key={d.kicker}
              className="reveal group relative border-t border-line py-9 first:border-t-0 lg:py-11"
              data-delay={`${i * 60}`}
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-sm text-text-faint transition-colors group-hover:text-green">
                  0{i + 1}
                </span>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-bright">
                    {d.kicker}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-dim">
                    {d.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
