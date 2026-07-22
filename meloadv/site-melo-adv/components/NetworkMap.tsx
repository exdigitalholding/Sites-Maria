"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

const CITIES = [
  "Curitiba",
  "Londrina",
  "Betim",
  "Ponta Grossa",
  "Campo Largo",
  "Carambeí",
  "Cascavel",
  "Castro",
];

export default function NetworkMap() {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentCityIndex((prev) => (prev + 1) % CITIES.length);
        setFade(true);
      }, 500); // Wait for fade out before changing text
    }, 2500); // Change city every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-ink py-24 sm:py-32 overflow-hidden border-t border-bone/5">
      <div className="absolute inset-0 pattern-dots opacity-[0.15] pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <h2 className="reveal font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-bone mb-6">
            Rede de alianças <span className="italic text-gold block sm:inline">estratégicas.</span>
          </h2>
          <p className="reveal text-base sm:text-lg text-bone/70 leading-relaxed max-w-3xl mx-auto">
            Nossa rede de parceiros oferece o suporte necessário para que você possa gerar mais valor para seus clientes, com o conhecimento de um time especialista e a força de uma comunidade que cresce em conjunto.
          </p>
        </div>

        {/* Map & Animated Cities Container */}
        <div className="reveal w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative">
          
          {/* Animated Text Left Side */}
          <div className="lg:flex-1 w-full flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bone/60 mb-2">
              A Melo
            </h3>
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bone/60 mb-6">
              Advogados está em:
            </h3>
            
            {/* Animated City Name */}
            <div className="h-20 sm:h-28 flex items-center justify-center lg:justify-end w-full">
              <span
                className={`font-display text-[clamp(3rem,6vw,5.5rem)] text-gold transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {CITIES[currentCityIndex]}
              </span>
            </div>

            <div className="mt-10 lg:mt-16">
              <a
                href={whatsappHref(whatsappMessages.consulta)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex cursor-pointer items-center gap-3 rounded-full bg-gold px-8 py-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-hover shadow-[0_12px_40px_-12px_rgba(212,175,55,0.4)] transition-all duration-300"
              >
                Conheça nossas alianças
                <span className="cta-arrow grid size-6 place-items-center rounded-full bg-ink text-gold">
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* 3D Map Image Right Side */}
          <div className="lg:flex-1 w-full max-w-2xl flex justify-center lg:justify-center relative animate-float">
            {/* Subtle glow behind map */}
            <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full scale-75" />
            
            <Image
              src="/mapa_brasil_gold_transparent.png"
              alt="Mapa do Brasil Rede de Alianças"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
              priority
            />
            
            {/* Pulsing Dot indicating presence (just decorative over Paraná region) */}
            <div className="absolute bottom-[28%] left-[55%] z-20">
              <span className="relative flex size-4 sm:size-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full size-4 sm:size-5 bg-gold border-[3px] border-ink"></span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
