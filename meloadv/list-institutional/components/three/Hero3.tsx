import ScrollFrames from "./ScrollFrames";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export default function Hero3() {
  return (
    <ScrollFrames scrollHeightVh={420} stageClassName="text-bone">
      {/* top meta strip */}
      <div className="flex items-start justify-between gap-4 px-6 pt-28 font-mono text-[10px] uppercase tracking-[0.28em] text-bone/65 sm:px-10 sm:pt-32 sm:text-[11px]">
        <span className="flex items-center gap-2">
          <span className="size-1.5 animate-pulse rounded-full bg-acid" />
          Curitiba / BR &middot; Est. 2020
        </span>
        <span className="hidden sm:inline">Cap&iacute;tulo III / Edi&ccedil;&atilde;o 2026</span>
        <span className="text-right">Dire&ccedil;&atilde;o Estrat&eacute;gica</span>
      </div>

      {/* center stage */}
      <div className="flex flex-1 items-center px-6 sm:px-10">
        <div className="mx-auto w-full max-w-[1500px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-acid" />
              (00) &mdash; Manifesto
            </span>
          </p>

          <h1 className="mt-6 font-display leading-[0.82] tracking-[-0.05em]">
            <span className="block text-[clamp(3.2rem,12vw,13rem)]">
              Marketing
            </span>
            <span className="-mt-2 block text-[clamp(3.2rem,12vw,13rem)] italic">
              que pensa
            </span>
            <span className="-mt-2 flex flex-wrap items-end gap-x-5 text-[clamp(3.2rem,12vw,13rem)]">
              <span>antes</span>
              <span className="relative inline-block px-[0.12em]">
                {/* brush highlight — irregular SVG path so it reads as a
                    marker stroke, not a rounded rectangle. Sits behind text
                    via document order; both layers are inside the same
                    inline-block so the highlight tracks the text width. */}
                <svg
                  aria-hidden
                  className="absolute inset-y-0 -inset-x-[0.04em] h-full w-[108%] -rotate-[1.2deg]"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4,30 C10,14 38,20 78,17 C120,13 158,18 188,22 C198,26 198,40 184,46 C148,52 96,50 50,48 C20,46 -2,42 4,30 Z"
                    fill="#FF4E02"
                  />
                </svg>
                <span className="relative italic text-bone">
                  de gritar<span className="not-italic text-ink">.</span>
                </span>
              </span>
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-12 gap-6">
            <p className="col-span-12 max-w-xl text-balance text-lg leading-snug text-bone/85 md:col-span-6 md:text-2xl">
              Somos a <em className="font-display italic text-acid">List</em> &mdash; ag&ecirc;ncia de
              dire&ccedil;&atilde;o estrat&eacute;gica para marcas que querem crescer
              com m&eacute;todo, n&atilde;o com sorte.
            </p>

            <div className="col-span-12 flex flex-wrap items-end justify-start gap-3 md:col-span-6 md:justify-end">
              <a
                href={whatsappHref(whatsappMessages.diagnostico)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-acid px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone shadow-[0_10px_40px_-10px_rgba(255,78,2,0.6)] transition-all duration-300 hover:bg-signal hover:shadow-[0_14px_46px_-8px_rgba(255,50,6,0.75)]"
              >
                Fazer diagn&oacute;stico
                <span className="cta-arrow grid size-7 place-items-center rounded-full bg-ink text-acid">
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#servicos"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-bone/40 bg-bone/5 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone backdrop-blur-sm transition-colors duration-300 hover:border-acid hover:bg-bone hover:text-ink"
              >
                Ver servi&ccedil;os
              </a>
            </div>
          </div>

          {/* fine print metrics row */}
          <div className="mt-16 hidden grid-cols-4 gap-6 border-t border-bone/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 sm:grid">
            <div>
              <span className="block font-display text-2xl font-normal not-italic tracking-tight text-bone">+40</span>
              <span>marcas conduzidas</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-normal not-italic tracking-tight text-bone">6</span>
              <span>frentes integradas</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-normal not-italic tracking-tight text-bone">2020</span>
              <span>in&iacute;cio da opera&ccedil;&atilde;o</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-normal not-italic tracking-tight text-acid">CWB</span>
              <span>base &middot; Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom hint + scroll cue */}
      <div className="flex items-end justify-between gap-4 px-6 pb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 sm:px-10 sm:pb-10 sm:text-[11px]">
        <span>List &copy; 2026</span>

        <span className="float-y flex items-center gap-2">
          role para revelar
          <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 4v16M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="hidden text-right sm:inline">Cap. III</span>
      </div>
    </ScrollFrames>
  );
}
