"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000 * 30);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`mx-3 mt-3 flex items-center justify-between rounded-full border border-ink/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 sm:mx-6 sm:mt-6 sm:px-6 sm:py-3 ${
          scrolled ? "bg-bone/85 shadow-[0_6px_30px_rgba(0,0,0,0.06)]" : "bg-bone/40"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 link-underline">
          <span className="grid size-7 place-items-center rounded-full bg-ink text-bone">
            <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
              <path d="M5 4h3v13h11v3H5z" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em]">List<span className="text-signal">.</span></span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.18em] md:flex">
          <a href="#servicos" className="link-underline">Serviços</a>
          <a href="#especialidades" className="link-underline">Mercados</a>
          <a href="#diagnostico" className="link-underline">Diagnóstico</a>
          <a href="#por-que" className="link-underline">Manifesto</a>
          <a
            href="/version2"
            className="inline-flex items-center gap-1.5 rounded-full bg-acid px-3 py-1 text-ink"
          >
            ★ Cap. II
          </a>
        </nav>

        <div className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.18em] md:flex">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-signal" /> CWB · {time}
          </span>
        </div>

        <a
          href="#diagnostico"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-bone transition-all hover:bg-acid hover:text-ink"
        >
          Diagnóstico
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
