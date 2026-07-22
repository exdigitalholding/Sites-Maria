"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Stat = { value: number | string; suffix?: string; label: string };

const STATS: Stat[] = [
  { value: 6, label: "grupos que já confiam na do.thus" },
  { value: 5, label: "frentes de solução integradas" },
  { value: 4, label: "níveis de decisão acompanhados" },
  { value: "24/7", label: "inteligência sempre ativa" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative border-y border-line/60 bg-abyss-2 py-24 sm:py-28">
      <div
        ref={ref}
        className="container-do grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <div key={i} className="text-center lg:text-left">
            <div className="display-xl text-[clamp(3rem,7vw,5.5rem)] text-snow">
              {typeof s.value === "number" ? (
                <Counter to={s.value} start={inView} />
              ) : (
                <span className="accent">{s.value}</span>
              )}
              {s.suffix}
            </div>
            <p className="mt-3 text-sm leading-snug text-text-dim">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ to, start }: { to: number; start: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, to]);
  return <span>{val}</span>;
}
