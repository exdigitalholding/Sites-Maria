"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, whatsappHref, wa } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "my-2 rounded-full border border-line/80 bg-ink/70 py-2.5 backdrop-blur-xl"
            : "my-3 border border-transparent py-3"
        }`}
      >
        <a href="#top" aria-label="Nacional Software House" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[13px] font-medium text-text-dim transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappHref(wa.menu)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-[12.5px] font-semibold text-[#04120b] transition-colors hover:bg-green-bright"
          >
            Tirar a ideia do papel
            <ArrowUpRight strokeWidth={3} className="cta-arrow size-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
