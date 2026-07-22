import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      {/* faint grid background */}
      <div className="absolute inset-0 pattern-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 size-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #D6FF2F 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10">
        {/* meta strip */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
          <span>[ Curitiba · Brasil · Est. 2020 ]</span>
          <span className="hidden sm:inline">Edição 26 / Vol. I</span>
          <span>Direção Estratégica</span>
        </div>

        {/* MAIN TYPE */}
        <div className="mt-10 grid grid-cols-12 gap-y-6">
          <h1 className="col-span-12 font-display leading-[0.82] tracking-[-0.05em]">
            <span className="block text-[clamp(4rem,16vw,18rem)]">List<span className="text-signal">.</span></span>
            <span className="-mt-2 block text-[clamp(4rem,16vw,18rem)] italic text-ink/90">
              dire<span className="not-italic">ç</span>ão
            </span>
            <span className="-mt-2 flex flex-wrap items-end gap-x-6 gap-y-2 text-[clamp(4rem,16vw,18rem)]">
              <span>estrat</span>
              <span className="inline-block translate-y-[0.1em] rounded-full border border-ink px-[0.18em] py-[0.02em] text-[0.92em]">
                égica.
              </span>
            </span>
          </h1>
        </div>

        {/* Sub-meta + Big image plate */}
        <div className="mt-12 grid grid-cols-12 gap-6 sm:mt-16 sm:gap-8">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <p className="text-balance text-2xl leading-tight sm:text-3xl">
              Mais que uma agência. Direcionamos marcas com{" "}
              <em className="font-display italic">inteligência</em>, dados e foco em
              resultado.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#diagnostico"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone transition-all hover:bg-acid hover:text-ink"
              >
                Fazer diagnóstico
                <span className="cta-arrow grid size-7 place-items-center rounded-full bg-bone text-ink group-hover:bg-ink group-hover:text-acid">
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-bone"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* center floating badge */}
          <div className="col-span-12 hidden items-center justify-center md:col-span-2 md:flex">
            <div className="relative grid place-items-center">
              <svg viewBox="0 0 200 200" className="size-44 spin-slow" aria-hidden>
                <defs>
                  <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text className="font-mono uppercase tracking-[0.2em] fill-ink" fontSize="11">
                  <textPath href="#circle">
                    Direção · Execução · Performance · Direção · Execução · Performance ·
                  </textPath>
                </text>
              </svg>
              <span className="absolute font-display text-5xl italic">★</span>
            </div>
          </div>

          {/* hero placeholder image */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <Placeholder
              variant="violet"
              label="hero-art"
              ratio="aspect-[5/6] sm:aspect-[6/5]"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
