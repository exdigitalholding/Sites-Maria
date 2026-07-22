"use client";

import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";
import MeloSymbol from "@/components/MeloSymbol";

const servicesData = [
  {
    title: "Direito Societário",
    desc: "Constituição de holdings, acordos de sócios, planejamento tributário societário e estruturação de M&A com foco absoluto em segurança jurídica corporativa.",
  },
  {
    title: "Planejamento Sucessório",
    desc: "Estruturação de governança familiar e transição de forma harmônica, protegendo a longevidade dos negócios e a preservação do patrimônio ao longo de gerações.",
  },
  {
    title: "Contratos Corporativos",
    desc: "Elaboração, revisão e negociação de contratos de alta complexidade. Proteção de interesses estratégicos com cláusulas blindadas contra litígios comerciais.",
  },
  {
    title: "Tributário Estratégico",
    desc: "Análise avançada para recuperação de créditos, defesas em autuações fiscais complexas e desenhos de elisão fiscal permitidos por lei.",
  },
];

export default function ServicesScroll() {
  return (
    <section id="servicos" className="relative w-full bg-[#05080E] overflow-x-clip">
      {/* Container for the sticky full-screen sections */}
      <div className="relative w-full">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className="sticky top-0 w-full h-[100dvh] flex items-center justify-center overflow-hidden border-t border-white/5 shadow-2xl"
            style={{ 
              zIndex: i + 1, 
              backgroundColor: i % 2 === 0 ? "#0A101C" : "#0D1524" // alternating luxurious dark blues
            }}
          >
            <div className="absolute inset-0 pattern-dots opacity-[0.02] pointer-events-none" />
            
            <div className="relative z-10 max-w-[1500px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 h-full py-16 sm:py-24">
              
              {/* Left Text Column */}
              <div className="flex-1 flex flex-col justify-center max-w-2xl text-left w-full h-full lg:h-auto overflow-y-auto lg:overflow-visible hide-scrollbar pt-12 lg:pt-0">
                
                {/* Custom Tag */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8 shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gold shadow-[0_0_15px_rgba(212,175,55,0.05)] backdrop-blur-md">
                    <MeloSymbol className="size-3" />
                    Áreas de Especialização
                  </span>
                  <span className="font-mono text-[10px] text-white/20">
                    S/{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                
                <h3 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-tight text-white mb-6 sm:mb-8 shrink-0">
                  {svc.title}
                </h3>
                
                <p className="text-base sm:text-xl text-white/70 leading-relaxed mb-10 sm:mb-12 font-light shrink-0">
                  {svc.desc}
                </p>

                <a
                  href={whatsappHref(whatsappMessages.servico(svc.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex cursor-pointer items-center gap-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 w-fit shrink-0"
                >
                  Consultar Especialista
                  <span className="cta-arrow grid size-6 place-items-center rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Right Image Placeholder Column */}
              <div className="flex-1 w-full h-[40vh] min-h-[300px] lg:h-[75vh] lg:min-h-0 rounded-[2rem] overflow-hidden relative group bg-[#050912] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex-shrink-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white/10 group-hover:text-gold/40 transition-colors duration-700 bg-gradient-to-tr from-transparent to-white/[0.02]">
                  <MeloSymbol className="size-16 sm:size-24 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-center max-w-[200px] leading-relaxed">
                    Espaço Reservado<br />para Fotografia<br />
                    <span className="opacity-50 mt-2 block">(Vertical)</span>
                  </span>
                </div>
                
                {/* 
                  TODO: Futuramente, basta inserir a TAG de imagem real aqui em cima dessa div:
                  <Image src="/sua-foto.jpg" fill className="object-cover" alt={svc.title} /> 
                */}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
