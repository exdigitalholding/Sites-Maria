"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Provider único de scroll: Lenis (suavidade) + GSAP ScrollTrigger (pin/scrub),
 * sincronizados no mesmo ticker para as animações fixadas ficarem no ponto.
 * Respeita prefers-reduced-motion (desliga suavidade, mantém conteúdo acessível).
 */
export function ScrollProvider() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    if (reduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Lenis dita o scroll -> ScrollTrigger atualiza a cada frame
    lenis.on("scroll", ScrollTrigger.update);

    // handle p/ testes/validação (screenshots). Inócuo em produção.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    const onRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    // navegação por âncora suave
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    // garante medidas corretas após fontes/imagens
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      clearTimeout(t);
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(onRaf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return null;
}
