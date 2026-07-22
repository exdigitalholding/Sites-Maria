"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaPrimary, CtaGhost } from "./Cta";
import { whatsappHref, wa } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const TOTAL = 121;
const frameSrc = (i: number) =>
  `/hero-frames/frame_${String(i).padStart(3, "0")}.png`;

const panels = [
  {
    eyebrow: "Nacional Software House",
    lead: "Tudo o que está na sua cabeça,",
    accent: "a gente coloca no ar.",
    sub: "Sites, sistemas e produtos digitais com IA e um time de excelência. Você imagina, a gente executa.",
  },
  {
    eyebrow: "A ideia funcionando",
    lead: "A gente não vende site.",
    accent: "Vende a ideia funcionando.",
    sub: "IA acelera. Gente sênior garante. Você recebe produto, não promessa.",
  },
];

export default function HeroSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  const [loaded, setLoaded] = useState(false);
  const [percent, setPercent] = useState(0);
  const [panel, setPanel] = useState(0);

  // Preload the frame sequence
  useEffect(() => {
    let mounted = true;
    let done = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      const tick = () => {
        if (!mounted) return;
        done++;
        setPercent(Math.floor((done / TOTAL) * 100));
        if (done === TOTAL) setLoaded(true);
      };
      img.onload = tick;
      img.onerror = tick;
      imgs.push(img);
    }
    imagesRef.current = imgs;
    return () => {
      mounted = false;
    };
  }, []);

  const draw = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete) return;

    const { width: cw, height: ch } = canvas;
    ctx.fillStyle = "#05070a";
    ctx.fillRect(0, 0, cw, ch);

    const isDesktop = window.innerWidth >= 768;
    const ratio = isDesktop
      ? Math.min(cw / img.width, ch / img.height) * 0.94
      : Math.max(cw / img.width, ch / img.height);
    const w = img.width * ratio;
    const h = img.height * ratio;
    const x = isDesktop ? cw * 0.72 - w / 2 : (cw - w) / 2;
    ctx.drawImage(img, x, (ch - h) / 2, w, h);

    // Feather only the left edge of the portrait into the dark canvas.
    // This hides the hard vertical seam without softening the rest of the frame.
    if (isDesktop) {
      const featherWidth = Math.min(w * 0.2, cw * 0.11);
      const feather = ctx.createLinearGradient(x - 1, 0, x + featherWidth, 0);
      feather.addColorStop(0, "#05070a");
      feather.addColorStop(0.28, "rgba(5, 7, 10, 0.86)");
      feather.addColorStop(0.68, "rgba(5, 7, 10, 0.3)");
      feather.addColorStop(1, "rgba(5, 7, 10, 0)");
      ctx.fillStyle = feather;
      ctx.fillRect(x - 1, (ch - h) / 2, featherWidth + 2, h);
    }
  };

  // Size canvas to device pixels
  useEffect(() => {
    if (!loaded) return;
    const resize = () => {
      const canvas = canvasRef.current;
      const parent = canvas?.parentElement;
      if (!canvas || !parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      draw(frameRef.current);
      ScrollTrigger.refresh();
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [loaded]);

  // Scroll-scrubbed frame indexing (GSAP, synced with Lenis, no scroll listener)
  useEffect(() => {
    if (!loaded || !sectionRef.current) return;
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const idx = Math.min(TOTAL - 1, Math.round(self.progress * (TOTAL - 1)));
        if (idx !== frameRef.current) {
          frameRef.current = idx;
          requestAnimationFrame(() => draw(idx));
        }
        setPanel(self.progress > 0.52 ? 1 : 0);
      },
    });
    draw(0);
    return () => st.kill();
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative w-full"
      style={{ height: "320vh" }}
      aria-label="Apresentação Nacional Software House"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Canvas layer */}
        <div className="hero-sequence-visual absolute inset-0 z-0">
          <canvas ref={canvasRef} className="hero-sequence-canvas h-full w-full" />
          <div className="hero-neon-frame pointer-events-none absolute inset-[clamp(12px,2.5vw,34px)]" />
          <div className="hero-neon-scan pointer-events-none absolute inset-0" />
          {/* Legibility scrims + brand tint */}
          <div className="hero-image-gradient pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_72%_48%,rgba(38,224,138,0.18),transparent_68%)]" />
          <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" />
        </div>

        {/* Preloader */}
        <div
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
            loaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex items-end gap-1.5" aria-hidden>
            <span className="h-10 w-1 animate-pulse rounded-full bg-green" />
            <span
              className="h-14 w-1 animate-pulse rounded-full bg-gold"
              style={{ animationDelay: "120ms" }}
            />
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-text-dim">
            Preparando a experiência
          </p>
          <p className="mt-1 font-mono text-2xl font-semibold text-green">
            {percent}%
          </p>
        </div>

        {/* Narrative panels */}
        <div className="relative z-20 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 sm:px-8">
          <div className="relative max-w-3xl">
            {panels.map((p, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === panel
                    ? "opacity-100 blur-0"
                    : "pointer-events-none absolute inset-0 translate-y-6 opacity-0 blur-sm"
                }`}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-green-bright backdrop-blur-sm">
                  {p.eyebrow}
                </span>
                <h1 className="mt-6 font-display text-[clamp(1.95rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-tight text-text">
                  {p.lead}
                  <br />
                  <span className="text-brand-gradient">{p.accent}</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
                  {p.sub}
                </p>
                {i === 0 && (
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <CtaPrimary href={whatsappHref(wa.projeto)}>
                      Tirar a ideia do papel
                    </CtaPrimary>
                    <CtaGhost href="#processo">Ver o processo</CtaGhost>
                  </div>
                )}
              </div>
            ))}

            {/* Microcopy strip (below CTAs, single small element) */}
            <p className="mt-8 font-mono text-[11px] tracking-wide text-text-faint">
              A partir de R$ 3.500 · até 10x · primeira versão no ar em ~15 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
