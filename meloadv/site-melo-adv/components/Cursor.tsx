"use client";

import { useEffect } from "react";

/**
 * Custom cursor component.
 * Tracks pointer events and maps smooth coordinates using CSS variables
 * with difference blend-modes. Respects prefers-reduced-motion.
 */
export default function Cursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let mx = tx;
    let my = ty;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      tx += (mx - tx) * 0.18;
      ty += (my - ty) * 0.18;
      document.documentElement.style.setProperty("--cursor-x", `${tx}px`);
      document.documentElement.style.setProperty("--cursor-y", `${ty}px`);
      raf = requestAnimationFrame(tick);
    };

    const onEnterInteractive = () => document.body.classList.add("cursor-hovering");
    const onLeaveInteractive = () => document.body.classList.remove("cursor-hovering");

    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>(
        "a, button, [data-cursor], input, textarea, select, [role='button']"
      );
      els.forEach((el) => {
        el.addEventListener("pointerenter", onEnterInteractive);
        el.addEventListener("pointerleave", onLeaveInteractive);
      });
      return els;
    };

    let cleanupEls = attach();
    const mo = new MutationObserver(() => {
      cleanupEls.forEach((el) => {
        el.removeEventListener("pointerenter", onEnterInteractive);
        el.removeEventListener("pointerleave", onLeaveInteractive);
      });
      cleanupEls = attach();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      cleanupEls.forEach((el) => {
        el.removeEventListener("pointerenter", onEnterInteractive);
        el.removeEventListener("pointerleave", onLeaveInteractive);
      });
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" aria-hidden />
      <div className="cursor-dot" aria-hidden />
    </>
  );
}
