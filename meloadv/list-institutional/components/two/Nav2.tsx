"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav2() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      setPct(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 text-bone sm:px-12">
          <Link href="/" className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] link-underline">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            List · home
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.22em]">Capítulo II / Cinemático</span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] tabular-nums">
            {pct.toFixed(0).padStart(2, "0")}%
          </span>
        </div>
      </header>

      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-px">
        <div
          className="h-full origin-left bg-acid"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
    </>
  );
}
