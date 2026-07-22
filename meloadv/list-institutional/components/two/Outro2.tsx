import Link from "next/link";

export default function Outro2() {
  return (
    <section className="scene relative overflow-hidden px-6 py-32 sm:px-12 sm:py-48">
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[60%] max-w-4xl rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #D6FF2F 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1500px] text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
          (06) — Convite
        </p>
        <h2 className="mt-10 font-display text-[clamp(3.5rem,14vw,16rem)] leading-[0.84] tracking-[-0.05em]">
          <span className="block text-stroke italic">vamos</span>
          <span className="block">direcionar</span>
          <span className="block">
            sua <em className="italic text-acid">marca</em><span className="text-signal">.</span>
          </span>
        </h2>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#diagnostico"
            className="group inline-flex items-center gap-4 rounded-full bg-acid px-10 py-6 text-base font-medium uppercase tracking-[0.2em] text-ink transition-all hover:bg-bone"
          >
            Iniciar diagnóstico
            <span className="cta-arrow grid size-10 place-items-center rounded-full bg-ink text-acid">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-bone/30 px-8 py-6 text-base uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            ← Voltar à versão principal
          </Link>
        </div>

        <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/40">
          List · Curitiba / BR · 2026 · Capítulo II — Encerramento
        </p>
      </div>
    </section>
  );
}
