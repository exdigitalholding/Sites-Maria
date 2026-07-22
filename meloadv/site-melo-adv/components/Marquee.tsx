import React from "react";
import MeloSymbol from "./MeloSymbol";

interface MarqueeProps {
  speed?: "slow" | "medium" | "fast";
  reverse?: boolean;
}

export default function Marquee({ speed = "medium", reverse = false }: MarqueeProps) {
  const items = [
    "Parceiro",
    "Parceiro",
    "Parceiro",
    "Parceiro",
    "Parceiro",
    "Parceiro",
    "Parceiro",
    "Parceiro",
  ];

  const duration = speed === "slow" ? "40s" : speed === "fast" ? "15s" : "30s";

  return (
    <div className="relative w-full overflow-hidden border-y border-ink/5 bg-smoke py-8 select-none">
      {/* Decorative gradient shadows for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-smoke to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-smoke to-transparent pointer-events-none" />

      <div className="flex w-max">
        {/* Row wrapper */}
        <div
          className={`flex shrink-0 items-center gap-16 px-8 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
          style={{ animationDuration: duration }}
        >
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-16">
              <span className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-[0.2em] text-bone/10 hover:text-bone/30 transition-colors duration-500 cursor-default">
                {item}
              </span>
              <MeloSymbol className="size-6 text-bone/10 shrink-0" />
            </div>
          ))}
        </div>

        {/* Duplicate row for seamless loop */}
        <div
          className={`flex shrink-0 items-center gap-16 px-8 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
          style={{ animationDuration: duration }}
          aria-hidden="true"
        >
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-16">
              <span className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-[0.2em] text-bone/10 hover:text-bone/30 transition-colors duration-500 cursor-default">
                {item}
              </span>
              <MeloSymbol className="size-6 text-bone/10 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
