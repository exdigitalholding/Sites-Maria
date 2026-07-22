"use client";

import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";
import { useEffect, useRef, useState } from "react";

/**
 * Vertical scroll → horizontal track.
 *
 * - Outer section is tall (≈ 380vh) so the user has scroll runway.
 * - Inside, a 100vh sticky stage pins the track while the page scrolls.
 * - We measure the actual track width and translate it by the amount that
 *   leaves the last card aligned to the right edge of the viewport at p=1.
 *
 * The smoothing comes from Lenis (already mounted at the page level).
 */

type Card = {
  code: string;
  name: string;
  short: string;
  bullets: string[];
  accent: "orange" | "hot" | "graphite" | "bone";
};

const CARDS: Card[] = [
  {
    code: "S/01",
    name: "Marketing de Conteúdo",
    short: "Conteúdo que constrói autoridade — não só engajamento.",
    bullets: ["Estratégia editorial", "Produção multiformato", "Distribuição orgânica", "Métricas de funil"],
    accent: "orange",
  },
  {
    code: "S/02",
    name: "Copywriting",
    short: "Texto que vende — sem soar como vendedor.",
    bullets: ["Sites e LPs", "Sequências de e-mail", "Anúncios pagos", "Materiais comerciais"],
    accent: "hot",
  },
  {
    code: "S/03",
    name: "Tráfego Pago",
    short: "Mídia paga com previsibilidade — não apostas.",
    bullets: ["Meta & Google", "Estrutura de campanhas", "Otimização contínua", "Relatório executivo"],
    accent: "graphite",
  },
  {
    code: "S/04",
    name: "Estratégia & Posicionamento",
    short: "Saber o que dizer antes de decidir onde gritar.",
    bullets: ["Diagnóstico de marca", "Mensagem central", "Diferencial competitivo", "Roadmap estratégico"],
    accent: "bone",
  },
  {
    code: "S/05",
    name: "Branding",
    short: "Marca como sistema — não como logotipo.",
    bullets: ["Identidade visual", "Identidade verbal", "Guia de marca", "Narrativa de marca"],
    accent: "orange",
  },
  {
    code: "S/06",
    name: "Consultoria",
    short: "Direção estratégica contínua, para quem decide.",
    bullets: ["Comitês mensais", "Análise de dados", "Priorização de iniciativas", "Mentoria executiva"],
    accent: "hot",
  },
];

const ACCENT: Record<
  Card["accent"],
  { bg: string; text: string; chipBg: string; chipText: string; isLight: boolean }
> = {
  orange:   { bg: "bg-acid",   text: "text-bone", chipBg: "bg-ink",  chipText: "text-acid",   isLight: false },
  hot:      { bg: "bg-signal", text: "text-bone", chipBg: "bg-ink",  chipText: "text-signal", isLight: false },
  graphite: { bg: "bg-smoke",  text: "text-bone", chipBg: "bg-acid", chipText: "text-bone",   isLight: false },
  bone:     { bg: "bg-bone",   text: "text-ink",  chipBg: "bg-ink",  chipText: "text-bone",   isLight: true  },
};

export default function HorizontalScroll4() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef<number>(0);
  const currentRef = useRef<number>(0);
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!wrapper || !stage || !track) return;

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    let cleanupDesktop: (() => void) | undefined;

    const startDesktopScroll = () => {
      const measure = () => {
        const trackWidth = track.scrollWidth;
        const stageWidth = stage.clientWidth;
        return Math.max(0, trackWidth - stageWidth);
      };

      const update = () => {
        const rect = wrapper.getBoundingClientRect();
        const viewport = window.innerHeight;
        const scrollable = rect.height - viewport;
        const scrolled = -rect.top;
        const p = scrollable > 0 ? scrolled / scrollable : 0;
        targetRef.current = Math.max(0, Math.min(1, p));
      };

      const tick = () => {
        const current = currentRef.current;
        const target = targetRef.current;
        // smoother than reading scroll directly; mirrors the hero canvas lerp
        const next = current + (target - current) * 0.18;
        currentRef.current = next;

        const maxX = measure();
        track.style.transform = `translate3d(${-(next * maxX)}px, 0, 0)`;
        setProgressBar(next);

        rafRef.current = requestAnimationFrame(tick);
      };

      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      rafRef.current = requestAnimationFrame(tick);

      return () => {
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    };

    const syncMode = () => {
      cleanupDesktop?.();
      cleanupDesktop = undefined;

      if (desktopQuery.matches) {
        cleanupDesktop = startDesktopScroll();
        return;
      }

      track.style.transform = "";
      targetRef.current = 0;
      currentRef.current = 0;
    };

    syncMode();
    desktopQuery.addEventListener("change", syncMode);

    return () => {
      cleanupDesktop?.();
      desktopQuery.removeEventListener("change", syncMode);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateMobileProgress = () => {
      if (window.matchMedia("(min-width: 768px)").matches) return;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      setProgressBar(maxScroll > 0 ? slider.scrollLeft / maxScroll : 0);
    };

    updateMobileProgress();
    slider.addEventListener("scroll", updateMobileProgress, { passive: true });
    window.addEventListener("resize", updateMobileProgress);

    return () => {
      slider.removeEventListener("scroll", updateMobileProgress);
      window.removeEventListener("resize", updateMobileProgress);
    };
  }, []);

  return (
    <section
      id="servicos"
      ref={wrapperRef}
      className="relative bg-ink md:h-[380vh]"
      aria-label="Serviços em scroll horizontal"
    >
      <div
        ref={stageRef}
        className="relative min-h-screen w-full overflow-hidden pb-24 md:sticky md:top-0 md:h-screen md:pb-0"
      >
        <div className="pattern-dots absolute inset-0 opacity-100" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
          style={{ background: "radial-gradient(closest-side, #FF4E02 0%, transparent 75%)" }}
          aria-hidden
        />

        {/* header */}
        <header className="relative z-10 grid grid-cols-12 items-end gap-y-4 px-6 pt-24 sm:px-10">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-acid" />
                (02) &mdash; Servi&ccedil;os
              </span>
            </span>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-display text-[clamp(2rem,5.4vw,4.6rem)] leading-[0.92] tracking-[-0.04em] text-bone">
              Seis frentes,
              <br />
              <em className="italic text-acid">role para o lado.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="text-base leading-snug text-bone/65 md:text-right">
              N&uacute;cleo estrat&eacute;gico &uacute;nico. Cada cart&atilde;o
              ao lado &eacute; uma frente integrada do time.
            </p>
          </div>
        </header>

        {/* track */}
        <div
          ref={sliderRef}
          className="relative z-10 mt-10 overflow-x-auto scroll-smooth px-6 pb-5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:absolute md:inset-x-0 md:top-1/2 md:z-auto md:mt-12 md:-translate-y-1/2 md:overflow-visible md:px-0 md:pb-0 sm:mt-8"
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory items-stretch gap-4 will-change-auto md:gap-8 md:px-[6vw] md:will-change-transform"
          >
            {CARDS.map((c, i) => {
              const a = ACCENT[c.accent];
              return (
                <article
                  key={c.code}
                  className={`relative flex h-[58vh] w-[82vw] shrink-0 snap-start scroll-ml-6 flex-col justify-between overflow-hidden rounded-3xl border border-bone/10 p-7 sm:h-[60vh] sm:w-[44vw] sm:p-10 md:scroll-ml-0 lg:w-[34vw] ${a.bg} ${a.text}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-25`}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${
                        a.isLight ? "rgba(18,18,18,0.10)" : "rgba(255,255,255,0.10)"
                      } 1px, transparent 1px), linear-gradient(to bottom, ${
                        a.isLight ? "rgba(18,18,18,0.10)" : "rgba(255,255,255,0.10)"
                      } 1px, transparent 1px)`,
                      backgroundSize: "48px 48px",
                    }}
                    aria-hidden
                  />

                  <header className="relative flex items-start justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] ${a.chipBg} ${a.chipText}`}
                    >
                      {c.code}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                        a.isLight ? "text-ink/55" : "text-bone/65"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
                    </span>
                  </header>

                  <div className="relative">
                    <h3 className="font-display text-[clamp(2rem,3.4vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                      {c.name}
                    </h3>
                    <p
                      className={`mt-5 max-w-md text-base leading-snug sm:text-lg ${
                        a.isLight ? "text-ink/75" : "text-bone/80"
                      }`}
                    >
                      {c.short}
                    </p>
                  </div>

                  <ul className="relative grid grid-cols-2 gap-2">
                    {c.bullets.map((b) => (
                      <li
                        key={b}
                        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
                          a.isLight
                            ? "border-ink/15 text-ink/80"
                            : "border-bone/20 text-bone/85"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            a.isLight ? "bg-ink" : "bg-bone"
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            {/* final CTA card so the track has a punctuated end */}
            <article className="relative flex h-[58vh] w-[82vw] shrink-0 snap-start scroll-ml-6 flex-col justify-between overflow-hidden rounded-3xl border border-acid/40 bg-ink p-7 text-bone sm:h-[60vh] sm:w-[44vw] sm:p-10 md:scroll-ml-0 lg:w-[34vw]">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(80% 60% at 0% 0%, rgba(255,78,2,0.35) 0%, transparent 60%), radial-gradient(80% 60% at 100% 100%, rgba(255,50,6,0.25) 0%, transparent 60%)",
                }}
                aria-hidden
              />

              <span className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                Fim da esteira
              </span>

              <div className="relative">
                <h3 className="font-display text-[clamp(2rem,3.4vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                  Pronto pra
                  <br />
                  <em className="italic text-acid">construir junto?</em>
                </h3>
                <p className="mt-5 max-w-md text-base leading-snug text-bone/75 sm:text-lg">
                  Comece pelo diagn&oacute;stico estrat&eacute;gico. A direção
                  certa &eacute; antes da execu&ccedil;&atilde;o.
                </p>
              </div>

              <a
                href={whatsappHref(whatsappMessages.comecar)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-acid px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-bone shadow-[0_10px_36px_-10px_rgba(255,78,2,0.7)] transition-colors duration-300 hover:bg-signal"
              >
                Iniciar diagn&oacute;stico
                <span className="cta-arrow grid size-7 place-items-center rounded-full bg-ink text-acid">
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </article>
          </div>
        </div>

        {/* scroll hint + progress bar */}
        <div className="relative z-10 mt-2 px-6 pb-12 md:absolute md:inset-x-0 md:bottom-8 md:mt-0 md:px-10 md:pb-0 sm:bottom-10">
          <div className="flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 sm:text-[11px]">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-3 -rotate-90" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 4v16M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              arraste para o lado
            </span>
            <span>
              {String(Math.round(progressBar * (CARDS.length))).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-3 h-px w-full overflow-hidden bg-bone/15">
            <div
              className="h-full bg-acid transition-[width] duration-150"
              style={{ width: `${progressBar * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
