"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Page-wide smooth scrolling using Lenis.
 * Keeps input fluid for custom scroll-triggered page reveals.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Check user preference for reduced motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
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
