"use client";

import { useEffect, useRef, useState } from "react";
import MeloSymbol from "./MeloSymbol";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

interface TextPanel {
  title: string;
  description: string;
}

export default function HeroScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  const panels: TextPanel[] = [
    {
      title: "Direção jurídica para quem decide.",
      description:
        "Estruturação societária, planejamento sucessório e proteção patrimonial focados em simplificar a complexidade de legados familiares e negócios de alto padrão.",
    },
    {
      title: "Sua história e conquistas protegidas.",
      description:
        "Estruturação jurídica personalizada para blindar seu patrimônio e garantir a continuidade e transição segura para as próximas gerações.",
    },
  ];

  // 1. Preload GIF Frames
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = 121;
    const tempImages: HTMLImageElement[] = [];
    let isMounted = true;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/hero-frames/frame_${frameNum}.webp`;

      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        const percent = Math.floor((loadedCount / totalFrames) * 100);
        setLoadPercent(percent);

        if (loadedCount === totalFrames) {
          imagesRef.current = tempImages;
          setImagesLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadedCount++;
        const percent = Math.floor((loadedCount / totalFrames) * 100);
        setLoadPercent(percent);

        if (loadedCount === totalFrames) {
          imagesRef.current = tempImages;
          setImagesLoaded(true);
        }
      };

      tempImages.push(img);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Draw canvas frame helper
  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img) return;

    // Clear background to matches site light cream color
    ctx.fillStyle = "#F3F1EC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    // Calculate aspect ratios (fits cover)
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    ctx.drawImage(img, x, y, newWidth, newHeight);
  };

  // 3. Handle Canvas Resize
  useEffect(() => {
    if (!imagesLoaded) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      const parent = canvas?.parentElement;
      if (!canvas || !parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      drawImage(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  // 4. Handle Scroll-driven frame indexing and narrative panels fading
  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollTop = -rect.top;
      const scrollHeight = rect.height - window.innerHeight;

      let progress = scrollTop / scrollHeight;
      progress = Math.max(0, Math.min(1, progress));

      // Synchronize frame indexes (0 - 120)
      const totalFrames = 120;
      const targetFrame = Math.floor(progress * totalFrames);

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        requestAnimationFrame(() => drawImage(targetFrame));
      }

      // Synchronize text panels (2 parts)
      let currentPanel = 0;
      if (progress > 0.5) {
        currentPanel = 1;
      }

      setActivePanel(currentPanel);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Draw initial frame

    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded]);

  const handleArrowClick = () => {
    // Scrolls to the end of the hero container to reveal practice areas
    const container = containerRef.current;
    if (container) {
      const targetScrollY = container.offsetTop + container.offsetHeight;
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    }
  };

  // Preloader UI
  if (!imagesLoaded) {
    return (
      <section className="relative flex h-screen w-full flex-col items-center justify-center bg-ink">
        <div className="flex flex-col items-center gap-6">
          <MeloSymbol className="size-16 animate-pulse text-gold" />
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/60">
              Iniciando Experiência
            </span>
            <span className="font-mono text-xl font-semibold text-gold">
              {loadPercent}%
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative w-full bg-ink"
      style={{ height: "250vh" }}
      aria-label="Apresentação interativa Melo Advogados"
    >
      {/* Sticky Frame Animation Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Fullscreen Canvas Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-ink">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />
          {/* Blue Overlay to ensure contrast */}
          <div className="absolute inset-0 bg-[#0B1F38]/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F38]/70 via-[#0B1F38]/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 pattern-dots opacity-[0.05] pointer-events-none" />
        </div>

        {/* Text Details Overlay */}
        <div className="relative z-20 flex h-full w-full flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 max-w-xl lg:max-w-2xl text-left">
          {panels.map((panel, idx) => (
            <div
              key={idx}
              className={`absolute flex flex-col items-start w-full pr-6 transition-all duration-700 transform ${
                idx === activePanel
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              {/* Title */}
              <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight text-white font-normal mb-6 sm:mb-8 drop-shadow-xl text-balance">
                {panel.title.split(" ").map((word, wIdx) => {
                  const isGold =
                    (idx === 0 && wIdx >= 3) || // "para quem decide."
                    (idx === 1 && wIdx >= 3); // "conquistas protegidas."
                  return (
                    <span
                      key={wIdx}
                      className={isGold ? "italic text-gold inline drop-shadow-md" : ""}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-balance text-base sm:text-[1.1rem] text-white/80 leading-relaxed mb-10 sm:mb-12 drop-shadow-lg">
                {panel.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5 items-center">
                <a
                  href={whatsappHref(whatsappMessages.consulta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-7 sm:px-9 py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F38] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300"
                >
                  Agendar Reunião
                  <span className="cta-arrow grid size-6 place-items-center rounded-full bg-[#0B1F38]/10 text-[#0B1F38]">
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <button
                  onClick={handleArrowClick}
                  className="group inline-flex items-center gap-2 rounded-full px-5 py-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors drop-shadow-md"
                >
                  Conhecer Atuação
                  <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity drop-shadow-lg">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-bone shadow-black drop-shadow-md">Scroll para explorar</span>
          <div className="w-5 h-8 border border-bone/40 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
