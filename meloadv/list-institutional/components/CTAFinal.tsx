export default function CTAFinal() {
  return (
    <section className="relative mx-auto max-w-[1500px] px-6 py-32 sm:px-10 sm:py-44">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[60%] max-w-4xl rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #FF4719 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="reveal text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
          (06) — Próximo passo
        </p>
        <h2 className="mt-10 balance font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-[-0.05em]">
          Do <em className="italic">diagnóstico</em>
          <br />
          à execução.
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-balance text-xl text-ink/70 sm:text-2xl">
          Realize o diagnóstico estratégico com a LIST e receba uma visão clara do que está
          travando seu crescimento e como corrigir.
        </p>

        <a
          href="#diagnostico"
          className="group mt-14 inline-flex items-center gap-4 rounded-full bg-ink px-10 py-6 text-base font-medium uppercase tracking-[0.2em] text-bone transition-all hover:bg-signal sm:text-lg"
        >
          Fazer diagnóstico estratégico
          <span className="cta-arrow grid size-10 place-items-center rounded-full bg-bone text-ink transition-colors group-hover:bg-ink group-hover:text-bone">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>

        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
          <span className="size-1.5 animate-pulse rounded-full bg-signal" />
          Resposta em até 48h úteis
        </div>
      </div>
    </section>
  );
}
