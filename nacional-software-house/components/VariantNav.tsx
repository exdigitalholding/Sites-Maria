"use client";

import Link from "next/link";
import type { ShowcaseVariant } from "./VariantShowcase";

const options = [
  ["coverflow", "/2", "Coverflow"],
  ["tunnel", "/3", "Túnel Z"],
  ["curve", "/4", "Curva WebGL"],
  ["deck", "/5", "Baralho"],
] as const;

export default function VariantNav({ active }: { active: ShowcaseVariant }) {
  return (
    <nav aria-label="Comparar versões da galeria" className="fixed inset-x-0 bottom-4 z-[65] mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full border border-white/10 bg-ink/85 p-1.5 shadow-2xl backdrop-blur-xl">
      <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {options.map(([id, href, label], index) => (
          <Link
            key={id}
            href={href}
            aria-current={active === id ? "page" : undefined}
            className={`flex min-h-11 shrink-0 items-center rounded-full px-3 text-[11px] font-semibold transition-colors sm:px-4 ${active === id ? "bg-green text-ink" : "text-text-dim hover:bg-white/5 hover:text-text"}`}
          >
            <span className="mr-1.5 font-mono opacity-60">{index + 1}</span>{label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
