"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Home, Layers, Sparkles, MessageCircle } from "lucide-react";
import { Wordmark } from "./Logo";
import { CTAButton } from "./Button";
import { NAV, PRIMARY_WHATSAPP } from "@/lib/content";
import { clsx } from "@/lib/clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* --- Top bar (desktop) --- */}
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          className={clsx(
            "mx-auto mt-3 flex max-w-[1200px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
              : "border border-transparent bg-transparent"
          )}
          style={{ marginInline: "clamp(0.75rem, 4vw, 2rem)" }}
        >
          <a href="#top" aria-label="do.thus — início" className="shrink-0">
            <Wordmark className="text-xl" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-dim transition-colors hover:text-snow"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <CTAButton href={PRIMARY_WHATSAPP} className="px-5 py-2.5">
              Agendar demonstração
            </CTAButton>
          </div>

          {/* mobile: só o CTA compacto (a navegação vai no bottom-nav) */}
          <a
            href={PRIMARY_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-electric px-4 py-2 text-xs font-semibold text-carbon md:hidden"
          >
            Agendar
          </a>
        </motion.div>
      </header>

      {/* --- Bottom navigation (mobile, estilo app) --- */}
      <BottomNav />
    </>
  );
}

const MOBILE_ITEMS = [
  { label: "Início", href: "#top", icon: Home },
  { label: "Soluções", href: "#solucoes", icon: Layers },
  { label: "Diferenciais", href: "#diferenciais", icon: Sparkles },
  { label: "Contato", href: "#contato", icon: MessageCircle },
];

function BottomNav() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = MOBILE_ITEMS.map((i) => i.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive("#" + e.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.9)]">
        {MOBILE_ITEMS.map((item) => {
          const isActive = active === item.href;
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-0.5 rounded-full px-4 py-1.5"
            >
              {isActive && (
                <motion.span
                  layoutId="bottomnav-pill"
                  className="absolute inset-0 rounded-full bg-electric/15"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                className={clsx(
                  "relative size-5 transition-colors",
                  isActive ? "text-electric" : "text-text-dim"
                )}
              />
              <span
                className={clsx(
                  "relative text-[0.62rem] font-medium transition-colors",
                  isActive ? "text-snow" : "text-text-faint"
                )}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
