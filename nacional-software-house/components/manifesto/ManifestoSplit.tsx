"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * VARIAÇÃO 2 — "Duas Forças"
 * A animação conta a mensagem: a tela nasce dividida entre a máquina
 * (velocidade de IA, chuva de código) e o time (cuidado de gente, dourado).
 * O scroll abre as duas portas — que se fundem na frase única no centro.
 * GSAP ScrollTrigger com pin + timeline scrubada.
 */

const CODE_LINES = [
  "const site = await ai.build(briefing)",
  "review: humano ✓  lighthouse: 98",
  "deploy --prod · 14 dias",
  "agents.run('copy', 'ui', 'seo')",
  "git push origin main",
  "tests 214/214 ✓",
  "npm run ship",
  "perf.audit() → 100",
  "a11y: AA ✓",
  "entrega.assinada(time)",
];

type WordDef = { t: string; accent?: "green" | "gold" };

const WORDS: WordDef[] = [
  { t: "Da" },
  { t: "sua" },
  { t: "cabeça", accent: "green" },
  { t: "direto" },
  { t: "pro" },
  { t: "mundo", accent: "gold" },
  { t: "real.", accent: "gold" },
];

function accentClass(a?: "green" | "gold") {
  if (a === "green") return "text-brand-gradient";
  if (a === "gold") return "text-gold-soft";
  return "";
}

function Rain() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <div className="ms-rain absolute inset-x-0 top-0 flex flex-col gap-4 px-6 py-4">
        {[...CODE_LINES, ...CODE_LINES].map((line, i) => (
          <p
            key={i}
            className={`whitespace-nowrap font-mono text-[11px] text-green/70 ${
              i % 3 === 0 ? "pl-10" : i % 3 === 1 ? "pl-24" : ""
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ManifestoSplit({ id = "manifesto" }: { id?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set([".ms-door-left", ".ms-door-right", ".ms-seam"], { autoAlpha: 0 });
        return;
      }

      // Loops de ambiente (não scrubados)
      gsap.to(".ms-rain", { yPercent: -50, ease: "none", duration: 18, repeat: -1 });
      gsap.to(".ms-breath", {
        scale: 1.18,
        opacity: 0.7,
        yoyo: true,
        repeat: -1,
        duration: 3.2,
        ease: "sine.inOut",
      });

      // Estados iniciais do conteúdo unificado (escondido atrás das portas)
      gsap.set(".ms-word", { yPercent: 120, opacity: 0 });
      gsap.set(".ms-sub", { y: 40, opacity: 0 });
      gsap.set(".ms-card", { y: 80, opacity: 0, rotateX: 32, transformOrigin: "top center" });
      gsap.set(".ms-unified", { scale: 0.94 });
      gsap.set(".ms-seam", { scaleY: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=280%",
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl
        // tensão: as duas metades se comprimem levemente
        .to(".ms-door-left-inner", { xPercent: -14, ease: "power1.in", duration: 0.9 }, 0)
        .to(".ms-door-right-inner", { xPercent: 14, ease: "power1.in", duration: 0.9 }, 0)
        // a costura central acende
        .to(".ms-seam", { scaleY: 1, opacity: 1, ease: "power2.out", duration: 0.35 }, 0.15)
        // as portas se abrem
        .to(".ms-door-left", { xPercent: -101, ease: "power3.inOut", duration: 1.2 }, 0.4)
        .to(".ms-door-right", { xPercent: 101, ease: "power3.inOut", duration: 1.2 }, 0.4)
        .to(".ms-seam", { opacity: 0, duration: 0.3 }, 1.25)
        // a frase única se monta
        .to(".ms-unified", { scale: 1, duration: 1.1, ease: "power2.out" }, 0.6)
        .to(
          ".ms-word",
          { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.7, ease: "power3.out" },
          0.8
        )
        .to(".ms-sub", { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 1.6)
        .to(".ms-card", { y: 0, opacity: 1, rotateX: 0, duration: 0.6, ease: "power2.out" }, 1.8);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={root} className="relative h-screen overflow-hidden border-b border-line bg-ink">
      {/* ===== Conteúdo unificado (revelado quando as portas abrem) ===== */}
      <div className="ms-unified absolute inset-0 z-10 flex items-center justify-center">
        <div className="pattern-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_45%,rgba(18,183,106,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            Manifesto
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-text">
            {WORDS.map((w, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <span className={`ms-word inline-block will-change-transform ${accentClass(w.accent)}`}>
                    {w.t}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h2>
          <p className="ms-sub mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg">
            Você imagina o extraordinário. A gente coloca no ar.
          </p>
          <div className="mt-12 [perspective:1200px]">
            <div className="ms-card mx-auto max-w-2xl rounded-2xl border border-green/25 bg-surface/50 p-8 backdrop-blur-sm will-change-transform">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
                Se você consegue descrever, a gente consegue construir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Costura central ===== */}
      <div
        aria-hidden
        className="ms-seam absolute left-1/2 top-0 z-30 h-full w-px origin-center bg-gradient-to-b from-transparent via-green-bright to-transparent shadow-[0_0_24px_rgba(38,224,138,0.6)]"
      />

      {/* ===== Porta esquerda — a máquina ===== */}
      <div className="ms-door-left absolute inset-y-0 left-0 z-20 w-1/2 overflow-hidden border-r border-green/20 bg-ink will-change-transform">
        <Rain />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_5px,rgba(38,224,138,0.02)_6px)]"
        />
        <div className="ms-door-left-inner flex h-full flex-col items-center justify-center px-6 text-center will-change-transform">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            01 · A ideia
          </p>
          <p className="mt-5 font-display text-[clamp(2.2rem,6vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-text">
            Na sua
            <br />
            <span className="text-brand-gradient">cabeça</span>
          </p>
          <p className="mt-6 max-w-[240px] font-mono text-xs leading-relaxed text-text-dim">
            aquilo que você imagina, por maior que seja.
          </p>
        </div>
      </div>

      {/* ===== Porta direita — o time ===== */}
      <div className="ms-door-right absolute inset-y-0 right-0 z-20 w-1/2 overflow-hidden border-l border-gold/20 bg-ink-2 will-change-transform">
        <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="ms-breath pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,185,33,0.14),transparent_65%)]"
        />
        <div className="ms-door-right-inner flex h-full flex-col items-center justify-center px-6 text-center will-change-transform">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            02 · No mundo real
          </p>
          <p className="mt-5 font-display text-[clamp(2.2rem,6vw,5.5rem)] font-semibold uppercase leading-[0.98] tracking-tight text-text">
            No <br className="hidden sm:block" />
            <span className="text-gold-soft">ar</span>
          </p>
          <p className="mt-6 max-w-[240px] text-xs leading-relaxed text-text-dim">
            no ar, funcionando, pronto pra usar.
          </p>
        </div>
      </div>
    </section>
  );
}
