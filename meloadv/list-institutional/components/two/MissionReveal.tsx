"use client";

import { useEffect, useRef } from "react";

const SENTENCE =
  "Estratégia, execução e visão de negócio em um único lugar. Da análise à ação, com método e clareza.";

const WORDS = SENTENCE.split(" ");

export default function MissionReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = ref.current;
    if (!sec) return;
    const words = sec.querySelectorAll<HTMLSpanElement>("[data-word]");
    let raf = 0;

    const tick = () => {
      const rect = sec.getBoundingClientRect();
      const pinDistance = sec.offsetHeight - window.innerHeight;
      const p =
        pinDistance > 0 ? Math.max(0, Math.min(1, -rect.top / pinDistance)) : 0;

      // word reveal between 5% and 90% of pin
      const t = Math.max(0, Math.min(1, (p - 0.05) / 0.85));

      words.forEach((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const local = Math.max(0, Math.min(1, (t - start) / Math.max(0.0001, end - start)));
        w.style.opacity = (0.1 + local * 0.9).toFixed(3);
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={ref} className="scene relative h-[230vh]">
      <div className="sticky top-0 flex h-screen items-center px-6 sm:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
            (01) — Manifesto
          </p>
          <p className="mt-10 font-display text-[clamp(2rem,6.5vw,6rem)] leading-[1.02] tracking-[-0.03em] text-bone">
            {WORDS.map((w, i) => (
              <span
                key={i}
                data-word
                className="inline-block opacity-15 transition-opacity duration-[180ms] ease-out"
                style={{ marginRight: "0.22em" }}
              >
                {w}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
