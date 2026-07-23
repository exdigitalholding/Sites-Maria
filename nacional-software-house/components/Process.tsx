"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { CheckCircle2, Clock } from "lucide-react";
import { process as steps } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article
      className="group relative flex h-[62vh] w-[86vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-surface p-8 sm:w-[560px] sm:p-10"
      style={{ transform: `translateZ(0)` }}
    >
      {/* Giant ghost number for depth */}
      <span
        className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[13rem] font-bold leading-none text-white/[0.03] sm:text-[16rem]"
        aria-hidden
      >
        {step.n}
      </span>

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-green/40 bg-green/10 font-mono text-sm font-semibold text-green-bright">
            {step.n}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-faint">
            <Clock size={12} strokeWidth={3} /> {step.when}
          </span>
        </div>
        <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-dim sm:text-base">
          {step.body}
        </p>
      </div>

      <div className="relative flex items-start gap-2.5 rounded-2xl border border-line bg-ink/50 p-4">
        <CheckCircle2
          size={18}
          className="mt-0.5 shrink-0 text-green"
        />
        <p className="text-sm text-text">
          <span className="text-text-faint">Entregável: </span>
          {step.deliverable}
        </p>
      </div>
    </article>
  );
}

export default function Process() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  // 'stack' (reduced motion) | 'snap' (touch/mobile, native swipe) | 'pin' (desktop GSAP)
  const [mode, setMode] = useState<"stack" | "snap" | "pin">("snap");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (reduce) {
        setMode("stack");
        return;
      }

      setMode(window.matchMedia("(min-width: 1024px)").matches ? "pin" : "snap");
    });

    return () => window.cancelAnimationFrame(frame);
  }, [reduce]);

  useEffect(() => {
    if (mode !== "pin" || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const getDistance = () =>
        track.current!.scrollWidth - window.innerWidth + 32;

      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [mode]);

  const ClosingPanel = (
    <div className="flex h-[62vh] w-[86vw] shrink-0 snap-center flex-col justify-center rounded-[2rem] border border-green/30 bg-gradient-to-br from-surface to-ink p-8 sm:w-[520px] sm:p-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-green-bright">
        Do primeiro oi ao site refinado
      </p>
      <p className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
        Em torno de{" "}
        <span className="text-brand-gradient">35 a 45 dias</span>, com você
        acompanhando cada passo.
      </p>
    </div>
  );

  return (
    <section id="processo" className="relative border-b border-line bg-ink-2">
      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-28">
        <span className="reveal mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
          <span className="h-px w-6 bg-green/60" aria-hidden />O processo
        </span>
        <h2 className="reveal max-w-3xl font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text">
          Colocamos seu site no ar:{" "}
          <span className="text-brand-gradient">como a gente trabalha.</span>
        </h2>
        <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg" data-delay="100">
          Cada etapa tem entregável e prazo. É assim que a sua ideia vira
          produto.
        </p>
      </div>

      {mode === "stack" && (
        <div className="mx-auto grid max-w-3xl gap-5 px-5 py-16 sm:px-8">
          {steps.map((step) => (
            <StepCard key={step.n} step={step} />
          ))}
          {ClosingPanel}
        </div>
      )}

      {mode === "snap" && (
        // Mobile / touch: native horizontal swipe (smooth, no scroll hijack)
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((step) => (
            <StepCard key={step.n} step={step} />
          ))}
          {ClosingPanel}
          <div className="w-1 shrink-0" aria-hidden />
        </div>
      )}

      {mode === "pin" && (
        <div ref={wrap} className="relative mt-14 overflow-hidden">
          <div
            ref={track}
            className="flex items-center gap-5 px-5 sm:px-8"
            style={{ height: "78vh", perspective: "1200px" }}
          >
            {steps.map((step) => (
              <StepCard key={step.n} step={step} />
            ))}
            {ClosingPanel}
          </div>

          {/* Progress bar */}
          <div className="pointer-events-none absolute bottom-8 left-0 right-0 mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green to-gold transition-[width] duration-150"
                style={{ width: `${Math.max(4, progress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
