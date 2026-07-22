import Placeholder from "@/components/Placeholder";

export default function Hero2() {
  return (
    <section className="scene relative h-screen">
      <div className="flex h-screen items-center justify-center overflow-hidden">
        {/* faint grid */}
        <div className="pattern-grid absolute inset-0 opacity-50" aria-hidden />

        {/* glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 size-[900px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(214,255,47,0.25), transparent 70%)" }}
          aria-hidden
        />

        {/* parallax floating shapes */}
        <div className="absolute left-[8vw] top-[18vh]" data-parallax="0.35">
          <Placeholder variant="violet" label="float-01" ratio="aspect-[3/4]" className="w-44 sm:w-52" />
        </div>
        <div className="absolute right-[10vw] top-[12vh]" data-parallax="-0.28">
          <Placeholder variant="signal" label="float-02" ratio="aspect-square" className="w-44 sm:w-52" />
        </div>
        <div className="absolute left-[14vw] bottom-[12vh]" data-parallax="-0.22">
          <Placeholder variant="acid" label="float-03" ratio="aspect-[4/3]" className="w-40 sm:w-56" />
        </div>
        <div className="absolute right-[12vw] bottom-[14vh]" data-parallax="0.30">
          <Placeholder variant="mauve" label="float-04" ratio="aspect-[3/4]" className="w-40 sm:w-48" />
        </div>

        {/* central type */}
        <div className="relative z-10 px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60">
            (Capítulo II) — Experiência cinemática
          </p>

          <h1 className="mt-8 font-display leading-[0.82] tracking-[-0.05em]" data-parallax="-0.06">
            <span className="block text-[clamp(4rem,16vw,20rem)]">
              fora <span className="italic text-acid">do</span>
            </span>
            <span className="block text-[clamp(4rem,16vw,20rem)] italic">eixo<span className="not-italic text-signal">.</span></span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-balance text-base leading-relaxed text-bone/70 sm:text-lg" data-parallax="-0.1">
            Role para baixo — e para os lados, e na diagonal. Esta é a forma como pensamos
            estratégia: <em className="not-italic font-display italic">em todas as direções ao mesmo tempo.</em>
          </p>

          <div className="mt-12 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50 float-y">
            <span>scroll</span>
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 4v16M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* top corner numbers */}
        <div className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50 sm:left-10 sm:top-10">
          [ 00 — Intro ]
        </div>
        <div className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50 sm:right-10 sm:top-10">
          List / 2026
        </div>
      </div>
    </section>
  );
}
