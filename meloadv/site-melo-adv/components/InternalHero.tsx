import React from "react";
import MeloSymbol from "./MeloSymbol";
import Link from "next/link";

interface InternalHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageBg?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function InternalHero({
  title,
  subtitle,
  description,
  imageBg,
  buttonText,
  buttonHref,
}: InternalHeroProps) {
  return (
    <section className="relative w-full min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden bg-[#05080E]">
      {/* Background Layer */}
      {imageBg ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageBg})` }}
          />
          {/* Overlays for contrast */}
          <div className="absolute inset-0 bg-[#05080E]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-[#05080E]/80 to-transparent" />
        </>
      ) : (
        <>
          {/* Solid dark theme backgrounds */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 pattern-grid opacity-[0.03] pointer-events-none" />
        </>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 flex flex-col items-start text-left">
        {/* Subtitle / Tagline */}
        {subtitle && (
          <div className="inline-flex items-center gap-3 mb-6">
            <MeloSymbol className="size-3 text-gold" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold/90">
              {subtitle}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-white font-normal mb-6 max-w-4xl text-balance drop-shadow-xl">
          {title.split(" ").map((word, idx, arr) => {
            // Highlight the last two words in gold/italic
            const isHighlight = arr.length >= 3 && idx >= arr.length - 2;
            return (
              <span
                key={idx}
                className={isHighlight ? "italic text-gold inline drop-shadow-md" : ""}
              >
                {word}{" "}
              </span>
            );
          })}
        </h1>

        {/* Description */}
        {description && (
          <p className="max-w-2xl text-balance text-base sm:text-lg text-white/80 leading-relaxed mb-10 drop-shadow-lg">
            {description}
          </p>
        )}

        {/* Action Button */}
        {buttonText && buttonHref && (
          <Link
            href={buttonHref}
            className="group relative inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-7 sm:px-9 py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F38] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_-10px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            {buttonText}
            <span className="cta-arrow grid size-6 place-items-center rounded-full bg-[#0B1F38]/10 text-[#0B1F38]">
              <svg viewBox="0 0 24 24" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
