"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * Scroll-driven zoom parallax. Videos are fetched shortly before the section
 * arrives and only decode while the section is visible.
 */
type Tile = {
  pos: string;
  size: string;
  label: string;
  center?: boolean;
  video: string;
  poster: string;
};

const tiles: readonly Tile[] = [
  {
    pos: "",
    size: "h-[26vh] w-[62vw] sm:h-[32vh] sm:w-[26vw]",
    label: "Hero do projeto",
    center: true,
    video: "/video/tela-center.mp4",
    poster: "/video/tela-center.jpg",
  },
  {
    pos: "top-[-28vh] left-[6vw]",
    size: "h-[24vh] w-[38vw] sm:w-[22vw]",
    label: "Landing page",
    video: "/video/tela-landing.mp4",
    poster: "/video/tela-landing.jpg",
  },
  {
    pos: "top-[-8vh] left-[-32vw]",
    size: "h-[24vh] w-[42vw] sm:w-[22vw]",
    label: "Painel / SaaS",
    video: "/video/tela-painel.mp4",
    poster: "/video/tela-painel.jpg",
  },
  {
    pos: "top-[26vh] left-[24vw]",
    size: "h-[22vh] w-[40vw] sm:w-[20vw]",
    label: "Mobile app",
    video: "/video/tela-mobile.mp4",
    poster: "/video/tela-mobile.jpg",
  },
  {
    pos: "top-[24vh] left-[-30vw]",
    size: "h-[22vh] w-[38vw] sm:w-[22vw]",
    label: "Checkout",
    video: "/video/tela-checkout.mp4",
    poster: "/video/tela-checkout.jpg",
  },
  {
    pos: "top-[-30vh] left-[30vw]",
    size: "h-[20vh] w-[34vw] sm:w-[16vw]",
    label: "Automação",
    video: "/video/tela-automacao.mp4",
    poster: "/video/tela-automacao.jpg",
  },
];

const stars = [
  { left: "38%", top: "40%", size: 5, color: "#FFEA00" },
  { left: "55%", top: "46%", size: 4, color: "#7CFF6B" },
  { left: "46%", top: "54%", size: 3, color: "#FFF9C4" },
  { left: "60%", top: "38%", size: 3, color: "#7CFF6B" },
] as const;

function DeferredVideo({
  label,
  poster,
  shouldLoad,
  shouldPlay,
  src,
}: {
  label: string;
  poster: string;
  shouldLoad: boolean;
  shouldPlay: boolean;
  src: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!shouldLoad || !shouldPlay) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      // The poster remains visible if the browser temporarily blocks playback.
    });
  }, [shouldLoad, shouldPlay]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay={shouldPlay}
      loop
      muted
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
      aria-label={label}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export default function ZoomParallax() {
  const container = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [compactPlayback, setCompactPlayback] = useState(false);
  const shouldLoadVideos = useInView(container, {
    margin: "100% 0px 100% 0px",
  });
  const sectionIsVisible = useInView(container, {
    amount: 0.05,
  });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const syncPlaybackBudget = () => setCompactPlayback(query.matches);

    syncPlaybackBudget();
    query.addEventListener("change", syncPlaybackBudget);
    return () => query.removeEventListener("change", syncPlaybackBudget);
  }, []);

  const centerScale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const nearScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const farScale = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scales = [
    centerScale,
    nearScale,
    farScale,
    nearScale,
    farScale,
    nearScale,
  ];
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  if (reduce) {
    return (
      <section
        id="entregas"
        className="border-b border-line bg-ink px-5 py-20 text-center sm:px-8"
      >
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-text">
          Cada tela, pensada{" "}
          <span className="text-brand-gradient">no detalhe.</span>
        </h2>
      </section>
    );
  }

  return (
    <section
      id="entregas"
      ref={container}
      className="relative isolate border-b border-line bg-ink"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center overflow-hidden">
        {/* Static Brazil-inspired ambience: the same visual depth without
            continuous blur, rotation and ribbon repaints. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 5% 8%, rgba(0,155,58,0.14), transparent 34%), radial-gradient(circle at 92% 92%, rgba(255,223,0,0.11), transparent 32%), linear-gradient(135deg, rgba(0,155,58,0.045), transparent 45%, transparent 55%, rgba(255,223,0,0.045))",
          }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="h-[62vh] w-[62vh] rounded-[3rem] opacity-[0.07]"
              style={{
                transform: "rotate(45deg)",
                border: "2px solid #FFDF00",
                boxShadow: "inset 0 0 120px rgba(0,155,58,0.35)",
              }}
            />
          </div>

          <div
            className="absolute left-[-20%] top-[22%] h-[2px] w-[140%] opacity-35"
            style={{
              transform: "rotate(-14deg)",
              background:
                "linear-gradient(90deg, transparent, #00E676 45%, #39FF14 55%, transparent)",
              boxShadow: "0 0 18px 3px rgba(0,230,118,0.38)",
            }}
          />
          <div
            className="absolute bottom-[20%] left-[-20%] h-[2px] w-[140%] opacity-30"
            style={{
              transform: "rotate(10deg)",
              background:
                "linear-gradient(90deg, transparent, #FFD400 48%, #FFEA00 56%, transparent)",
              boxShadow: "0 0 18px 3px rgba(255,212,0,0.34)",
            }}
          />

          <div className="absolute inset-0 grid place-items-center">
            <div
              className="h-[46vh] w-[46vh] rounded-full opacity-20"
              style={{
                background:
                  "conic-gradient(from 200deg at 50% 50%, transparent 0deg, #00E676 26deg, #39FF14 40deg, transparent 66deg, transparent 360deg)",
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 62%, #000 63%, #000 70%, transparent 71%)",
                maskImage:
                  "radial-gradient(circle, transparent 62%, #000 63%, #000 70%, transparent 71%)",
                filter: "drop-shadow(0 0 12px rgba(0,230,118,0.42))",
              }}
            />
          </div>

          {stars.map((star) => (
            <div
              key={`${star.left}-${star.top}`}
              className="absolute rounded-full opacity-60"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                background: star.color,
                boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="pointer-events-none absolute z-40 px-6 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            O que a gente entrega
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,5vw,3.2rem)] font-semibold leading-[1.08] tracking-tight text-text">
            Cada tela, pensada
            <br />
            <span className="text-brand-gradient">no detalhe.</span>
          </h2>
        </motion.div>

        {tiles.map((tile, index) => {
          const shouldPlay =
            sectionIsVisible && (!compactPlayback || index < 3);

          return (
            <motion.div
              key={tile.video}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{
                scale: scales[index],
                zIndex: tile.center ? 10 : 1,
              }}
            >
              <div
                className={`relative ${tile.size} ${tile.pos} overflow-hidden rounded-2xl border border-line bg-surface-2`}
              >
                <DeferredVideo
                  src={tile.video}
                  poster={tile.poster}
                  label={tile.label}
                  shouldLoad={shouldLoadVideos}
                  shouldPlay={shouldPlay}
                />
                {tile.center && (
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 50% 50%, rgba(3,25,17,0.72) 0%, rgba(3,25,17,0.82) 45%, rgba(2,17,11,0.92) 100%)",
                    }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
