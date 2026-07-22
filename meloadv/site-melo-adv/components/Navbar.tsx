"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/seo";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    // Check initial state
    handleScrollEvent();
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "border-b border-bone/5 bg-smoke/85 backdrop-blur-md py-0 shadow-sm" 
          : "border-transparent bg-transparent py-2"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] h-20 items-center justify-between px-6 sm:px-10 transition-all duration-500">
        {/* Brand Logo */}
        <a href="#inicio" onClick={(e) => handleScrollTo(e, "inicio")} className="relative flex items-center gap-3 group">
          <Image
            src="/melo-advogados (1).svg"
            alt={siteConfig.name}
            width={150}
            height={33}
            className={`h-8 w-auto object-contain transition-all duration-500 ${
              !isScrolled ? "brightness-0 invert drop-shadow-md" : ""
            }`}
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden xl:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${
          isScrolled ? "text-bone/60" : "text-white/80 drop-shadow-sm"
        }`}>
          <a href="/" className={`link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>Início</a>
          <a href="/nossa-historia" className={`link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>O Escritório</a>
          <a href="/servicos-juridicos-tributarios" className={`link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>Serviços</a>
          <a href="/aliancas" className={`link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>Alianças</a>
          <a href="/acoes-coletivas" className={`link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>Ações Coletivas</a>
          <a href="/noticias-tributarias" className={`link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>Blog</a>
          <a href="https://meloadvogados.atlassian.net/servicedesk/customer/user/login" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 link-underline transition-colors duration-300 ${isScrolled ? "hover:text-bone" : "hover:text-white"}`}>
            Portal do Cliente
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href={whatsappHref(whatsappMessages.consulta)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-500 ${
              isScrolled 
                ? "border-gold/40 text-gold bg-transparent hover:border-gold hover:bg-gold hover:text-ink" 
                : "border-white/40 text-white bg-transparent hover:border-white hover:bg-white hover:text-ink backdrop-blur-sm"
            }`}
          >
            Falar com Advogado
            <span className="cta-arrow size-4">
              <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
