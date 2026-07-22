"use client";

import dynamic from "next/dynamic";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function Manifesto() {
  const webgl = useWebGLSupport({ desktopOnly: true });
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-b border-line bg-ink py-28 sm:py-40"
    >
      {/* 3D depth field (only when WebGL is available) */}
      {webgl && (
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <ThreeScene />
        </div>
      )}
      <div className="pattern-grid pointer-events-none absolute inset-0" />
      {/* Radial green glow as depth fallback / reinforcement */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_45%,rgba(18,183,106,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="reveal font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-text">
            Uma software house que junta{" "}
            <span className="text-brand-gradient">velocidade de IA</span> com o
            cuidado de gente boa de código.
          </h2>
          <p
            className="reveal mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg"
            data-delay="120"
          >
            IA em cada etapa, do briefing à entrega, para fazer em dias o que o
            mercado leva meses. Mas quem revisa e assina embaixo é um time de
            verdade. Rápido, sem entregar mal feito.
          </p>

          <div
            className="reveal mx-auto mt-14 max-w-2xl rounded-2xl border border-green/25 bg-surface/50 p-8 backdrop-blur-sm"
            data-delay="220"
          >
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl">
              Se você consegue descrever, a gente consegue construir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
