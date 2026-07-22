"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import listLogo from "@/list.png";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export default function Nav3() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`mx-3 mt-3 flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:mx-6 sm:mt-6 sm:px-6 sm:py-3 ${
          scrolled
            ? "border-bone/10 bg-ink/80 text-bone shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
            : "border-bone/15 bg-bone/5 text-bone"
        }`}
      >
        <a href="#top" className="flex cursor-pointer items-center gap-3 link-underline">
          <Image
            src={listLogo}
            alt="List"
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] md:flex">
          <a href="#especialidades" className="cursor-pointer link-underline transition-colors hover:text-acid">Especialidades</a>
          <a href="#servicos" className="cursor-pointer link-underline transition-colors hover:text-acid">Servi&ccedil;os</a>
          <a href="#diagnostico" className="cursor-pointer link-underline transition-colors hover:text-acid">Diagn&oacute;stico</a>
          <a href="#sobre" className="cursor-pointer link-underline transition-colors hover:text-acid">A List</a>
        </nav>

        <a
          href={whatsappHref(whatsappMessages.diagnostico)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-bone shadow-[0_6px_22px_-6px_rgba(255,78,2,0.7)] transition-all duration-300 hover:bg-signal hover:shadow-[0_8px_26px_-4px_rgba(255,50,6,0.8)]"
        >
          Diagn&oacute;stico
          <span className="cta-arrow inline-block">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
