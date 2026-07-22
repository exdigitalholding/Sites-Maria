import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export default function CTAFinal3() {
  return (
    <section className="relative overflow-hidden bg-acid text-bone">
      {/* base color is acid (#FF4E02). Overlay a diagonal hot-orange glow
          and a soft dotted grid so the slab has texture, not flat paint. */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, rgba(255,50,6,0.55) 0%, transparent 55%), radial-gradient(80% 60% at 100% 100%, rgba(18,18,18,0.45) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-32 sm:px-10 sm:py-44">
        <div className="reveal text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/85">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-bone" />
              (05) &mdash; Pr&oacute;ximo passo
            </span>
          </p>
          <h2 className="mt-10 balance font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-[-0.05em] text-bone">
            Do <em className="italic">diagn&oacute;stico</em>
            <br />
            &agrave; execu&ccedil;&atilde;o.
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-balance text-xl text-bone/90 sm:text-2xl">
            Realize o diagn&oacute;stico estrat&eacute;gico com a LIST e
            receba uma vis&atilde;o clara do que est&aacute; travando seu
            crescimento &mdash; e como corrigir.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappHref(whatsappMessages.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-4 rounded-full bg-ink px-10 py-6 text-base font-medium uppercase tracking-[0.2em] text-bone shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-smoke sm:text-lg"
            >
              Fazer diagn&oacute;stico estrat&eacute;gico
              <span className="cta-arrow grid size-10 place-items-center rounded-full bg-acid text-bone transition-colors group-hover:bg-bone group-hover:text-ink">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <a
              href="mailto:agencialistmarketing@gmail.com"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-bone/60 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-bone backdrop-blur-sm transition-colors duration-300 hover:bg-bone hover:text-ink"
            >
              Falar por e-mail
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/80">
            <span className="size-1.5 animate-pulse rounded-full bg-bone" />
            Resposta em at&eacute; 48h &uacute;teis
          </div>
        </div>
      </div>
    </section>
  );
}
