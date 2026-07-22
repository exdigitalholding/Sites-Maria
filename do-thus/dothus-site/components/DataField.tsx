"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; hot: boolean };

/**
 * Campo de dados animado — a "malha viva" da do.thus.
 * Nós fluindo com conexões em Azul Elétrico sobre Azul Carbono.
 * Substitui o vídeo de fundo com algo leve, próprio e sempre nítido.
 *
 * Cuidados de performance:
 *  - DPR limitado a 1.5
 *  - contagem de nós proporcional à área (capada)
 *  - pausa fora da viewport (IntersectionObserver)
 *  - respeita prefers-reduced-motion (render estático)
 */
export function DataField({
  className,
  density = 1,
  interactive = true,
}: {
  className?: string;
  density?: number;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 132; // distância máxima de conexão

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(
        110,
        Math.round((w * h) / 15000) * density
      );
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.6,
        hot: Math.random() < 0.16, // ~16% dos nós "acesos" em ciano
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // conexões
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const alpha = (1 - dist / LINK) * 0.5;
            const lit = a.hot || b.hot;
            ctx.strokeStyle = lit
              ? `rgba(0, 210, 255, ${alpha * 0.7})`
              : `rgba(93, 166, 220, ${alpha * 0.28})`;
            ctx.lineWidth = lit ? 0.8 : 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nós
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        if (n.hot) {
          ctx.fillStyle = "rgba(0, 210, 255, 0.95)";
          ctx.shadowColor = "rgba(0, 210, 255, 0.9)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = "rgba(147, 179, 214, 0.55)";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        if (interactive) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 120 && d > 0.01) {
            const f = (120 - d) / 120;
            n.x += (dx / d) * f * 1.1;
            n.y += (dy / d) * f * 1.1;
          }
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    let raf = 0;
    let running = false;
    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onResize = () => {
      build();
      if (reduced) draw();
    };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();
    draw();

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener("resize", onResize);
    if (interactive) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
