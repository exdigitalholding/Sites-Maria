"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global scroll engine for /2.
 *
 * 1. Lenis drives a smooth scroll on the page (wheel + touch).
 * 2. In the same rAF, we read elements with [data-parallax], [data-parallax-x]
 *    and [data-diag="sx,sy"] and apply translate3d.
 * 3. Exposes --sv (smoothed scroll velocity) on :root for the velocity marquee.
 *
 * Pinned sections compute their own pin-progress via getBoundingClientRect.
 */
export default function ScrollEngine() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    const root = document.documentElement;
    let raf = 0;

    const parallaxYEls = () =>
      document.querySelectorAll<HTMLElement>("[data-parallax]");
    const parallaxXEls = () =>
      document.querySelectorAll<HTMLElement>("[data-parallax-x]");
    const diagEls = () => document.querySelectorAll<HTMLElement>("[data-diag]");

    const tick = (time: number) => {
      lenis.raf(time);

      const v = lenis.velocity || 0;
      root.style.setProperty("--sv", v.toFixed(2));

      const winH = window.innerHeight;

      for (const el of parallaxYEls()) {
        const speed = Number(el.dataset.parallax ?? "0.2");
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - winH / 2;
        el.style.transform = `translate3d(0, ${(-center * speed).toFixed(2)}px, 0)`;
      }

      for (const el of parallaxXEls()) {
        const speed = Number(el.dataset.parallaxX ?? "0.2");
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - winH / 2;
        el.style.transform = `translate3d(${(-center * speed).toFixed(2)}px, 0, 0)`;
      }

      for (const el of diagEls()) {
        const [sx, sy] = (el.dataset.diag ?? "0,0").split(",").map(Number);
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - winH / 2;
        const tx = (-center * (sx || 0)).toFixed(2);
        const ty = (-center * (sy || 0)).toFixed(2);
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
