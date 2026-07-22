"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Page-wide smooth scrolling for /3 using Lenis.
 *
 * Keeps wheel/touch input fluid so the canvas frame sequence in <Hero3 />
 * receives a steady stream of scroll events instead of stutter.
 */
export default function SmoothScroll3() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
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
