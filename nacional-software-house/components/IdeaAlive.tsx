"use client";

import dynamic from "next/dynamic";
import { Pointer } from "lucide-react";
import { CtaPrimary } from "./Cta";
import { whatsappHref, wa } from "@/lib/site";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

const InteractiveOrb = dynamic(() => import("./InteractiveOrb"), { ssr: false });

export default function IdeaAlive() {
  const webgl = useWebGLSupport();

  return (
    <section id="ideia" className="relative overflow-hidden border-b border-line bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        {/* 3D stage */}
        <div className="relative order-1 h-[52vh] min-h-[320px] w-full lg:order-2 lg:h-[62vh]">
          {webgl ? (
            <InteractiveOrb />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-52 rounded-full bg-[radial-gradient(circle_at_35%_30%,#26e08a,#0d5f3a_60%,transparent)] opacity-80 blur-[1px]" />
            </div>
          )}
          <div className="aurora left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-green/20" />
          {webgl && (
            <span className="pointer-events-none absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-ink/70 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-text-dim backdrop-blur-sm">
              <Pointer size={14} strokeWidth={2.5} /> Arraste para girar
            </span>
          )}
        </div>

        {/* Copy */}
        <div className="order-2 lg:order-1">
          <h2 className="reveal font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text">
            Sua ideia ganha
            <br />
            <span className="text-brand-gradient">forma e movimento.</span>
          </h2>
          <p className="reveal mt-5 max-w-md text-base leading-relaxed text-text-dim" data-delay="100">
            Do abstrato ao produto que gira na sua mão. É esse cuidado com
            profundidade e detalhe que a gente coloca em cada entrega.
          </p>
          <div className="reveal mt-8" data-delay="160">
            <CtaPrimary href={whatsappHref(wa.projeto)}>
              Tirar a ideia do papel
            </CtaPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
