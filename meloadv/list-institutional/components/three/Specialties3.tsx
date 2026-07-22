import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

type Item = {
  code: string;
  name: string;
  body: string;
  highlight?: boolean;
  icon: React.ReactNode;
};

const ICON_STROKE = "stroke-current";

const items: Item[] = [
  {
    code: "M/01",
    name: "Gastronômico",
    highlight: true,
    body: "Restaurantes, bares, cafeterias e marcas de food service. Posicionamento, ticket médio e ocupação tratados como métricas, não como sorte.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M14 6v18a4 4 0 0 0 8 0V6M18 6v36" strokeLinecap="round" />
        <path d="M34 6c-3 3-5 7-5 12s2 6 5 6h0v18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: "M/02",
    name: "Indústrias",
    body: "Manufatura, operações B2B e fornecedores estratégicos.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M6 40h36M10 40V22l10 6V22l10 6V14l8 4v22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "M/03",
    name: "Imobiliário",
    body: "Construtoras, incorporadoras e lançamentos de alto valor.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M6 24L24 8l18 16M10 22v18h28V22M20 40V28h8v12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "M/04",
    name: "Advocacia",
    body: "Escritórios e profissionais liberais com posicionamento de autoridade.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M24 6v36M12 16l-4 12a6 6 0 0 0 12 0L16 16M32 16l-4 12a6 6 0 0 0 12 0L36 16M10 42h28" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "M/05",
    name: "Saúde",
    body: "Clínicas, consultórios e marcas pessoais em saúde.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M24 12c-6-10-22-2-12 12 4 6 12 12 12 12s8-6 12-12c10-14-6-22-12-12Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "M/06",
    name: "Estética Automotiva",
    body: "Studios premium e cadeias de serviços para o carro do cliente final.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M6 28l4-10a4 4 0 0 1 4-3h20a4 4 0 0 1 4 3l4 10v8H6Z" strokeLinejoin="round" />
        <circle cx="14" cy="36" r="3" />
        <circle cx="34" cy="36" r="3" />
      </svg>
    ),
  },
  {
    code: "M/07",
    name: "Contabilidade",
    body: "Escritórios contábeis modernos, prontos para captar e reter cliente.",
    icon: (
      <svg viewBox="0 0 48 48" className={`size-10 ${ICON_STROKE}`} fill="none" strokeWidth="1.5" aria-hidden>
        <path d="M10 6h22l6 6v30H10ZM16 22h16M16 30h16M16 14h10" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Specialties3() {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden bg-ink text-bone"
    >
      <div className="pattern-grid absolute inset-0 opacity-100" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #FF4E02 0%, transparent 75%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
        {/* header */}
        <header className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-acid" />
                (01) &mdash; Especialidades
              </span>
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
              Mercados onde
              <br />
              <em className="italic text-acid">sabemos vencer.</em>
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg text-bone/70">
              Verticalidade traz contexto, contexto vira velocidade, velocidade
              vira resultado &mdash; previs&iacute;vel, n&atilde;o
              acidental.
            </p>
          </div>
        </header>

        {/* destaque gastronomia */}
        <article
          className="reveal mt-16 grid grid-cols-12 gap-0 overflow-hidden rounded-3xl border border-bone/10 shadow-[0_40px_120px_-40px_rgba(255,78,2,0.35)]"
        >
          <div className="col-span-12 flex flex-col justify-between gap-10 bg-smoke p-10 text-bone md:col-span-7 md:p-14">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
                {items[0].code}
              </span>
              <span className="rounded-full border border-acid/60 bg-acid/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
                Vertical de destaque
              </span>
            </div>

            <div>
              <h3 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em]">
                {items[0].name}
                <span className="text-acid">.</span>
              </h3>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone/80">
                {items[0].body}
              </p>
            </div>

            <a
              href={whatsappHref(whatsappMessages.restaurante)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-acid px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone shadow-[0_10px_36px_-10px_rgba(255,78,2,0.7)] transition-all duration-300 hover:bg-signal"
            >
              Diagn&oacute;stico para seu restaurante
              <span className="cta-arrow grid size-7 place-items-center rounded-full bg-ink text-acid">
                <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* the visual side */}
          <div className="relative col-span-12 min-h-[280px] overflow-hidden bg-acid md:col-span-5">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(18,18,18,0.4) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, transparent 40%, rgba(255,50,6,0.5) 100%)",
              }}
              aria-hidden
            />

            <svg
              viewBox="0 0 48 48"
              className="absolute inset-0 m-auto size-2/3 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              aria-hidden
            >
              <path d="M14 6v18a4 4 0 0 0 8 0V6M18 6v36" strokeLinecap="round" />
              <path d="M34 6c-3 3-5 7-5 12s2 6 5 6h0v18" strokeLinecap="round" />
            </svg>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/80">
              <span>fork &middot; knife &middot; performance</span>
              <span className="rounded-full bg-ink/90 px-2 py-1 text-bone">+40 marcas</span>
            </div>
          </div>
        </article>

        {/* outros mercados */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.slice(1).map((it) => (
            <article
              key={it.code}
              className="reveal group flex h-full cursor-pointer flex-col justify-between gap-8 rounded-3xl border border-bone/10 bg-smoke/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-acid/60 hover:bg-smoke hover:shadow-[0_18px_60px_-20px_rgba(255,78,2,0.45)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50 group-hover:text-acid">
                  {it.code}
                </span>
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-bone/20 transition-all duration-300 group-hover:rotate-45 group-hover:border-acid group-hover:bg-acid group-hover:text-bone">
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="text-bone/80 transition-colors duration-300 group-hover:text-acid">
                {it.icon}
              </div>

              <div>
                <h3 className="font-display text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
                  {it.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">
                  {it.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* footer cta */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/55">
          <span>N&atilde;o encontrou seu mercado? A gente conversa.</span>
          <a
            href={whatsappHref(whatsappMessages.time)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-bone/30 px-4 py-2 text-bone transition-all duration-300 hover:border-acid hover:bg-acid hover:text-bone"
          >
            Falar com o time
            <span className="cta-arrow">
              <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
