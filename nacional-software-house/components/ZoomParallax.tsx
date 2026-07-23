"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Scroll-driven zoom parallax (Olivier Larose technique): looping muted videos
 * scale up at different rates as you scroll, spreading into a composed grid.
 * Transform/opacity only -> smooth on mobile. Touch scroll drives it natively.
 */
const tiles = [
  { pos: "", size: "h-[26vh] w-[62vw] sm:h-[32vh] sm:w-[26vw]", label: "Hero do projeto", center: true, video: "/video/tela-center.mp4" },
  { pos: "top-[-28vh] left-[6vw]", size: "h-[24vh] w-[38vw] sm:w-[22vw]", label: "Landing page", video: "/video/tela-landing.mp4" },
  { pos: "top-[-8vh] left-[-32vw]", size: "h-[24vh] w-[42vw] sm:w-[22vw]", label: "Painel / SaaS", video: "/video/tela-painel.mp4" },
  { pos: "top-[26vh] left-[24vw]", size: "h-[22vh] w-[40vw] sm:w-[20vw]", label: "Mobile app", video: "/video/tela-mobile.mp4" },
  { pos: "top-[24vh] left-[-30vw]", size: "h-[22vh] w-[38vw] sm:w-[22vw]", label: "Checkout", video: "/video/tela-checkout.mp4" },
  { pos: "top-[-30vh] left-[30vw]", size: "h-[20vh] w-[34vw] sm:w-[16vw]", label: "Automação", video: "/video/tela-automacao.mp4" },
];

export default function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const s1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const s2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const s3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scales = [s1, s2, s3, s2, s3, s2];
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  if (reduce) {
    return (
      <section className="border-b border-line bg-ink px-5 py-20 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-text">
          Cada tela, pensada <span className="text-brand-gradient">no detalhe.</span>
        </h2>
      </section>
    );
  }

  return (
    <section id="entregas" ref={container} className="relative border-b border-line bg-ink"
      style={{ height: "260vh" }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center overflow-hidden">
        {/* Brazil-inspired ambient backdrop: green/yellow glows + flag lozenge,
            heavily blurred at low opacity so it only harmonizes the section */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Green glow — slow drift + breathing */}
          <motion.div
            className="absolute left-[-10%] top-[-5%] h-[55vh] w-[55vh] rounded-full opacity-[0.10] blur-[120px]"
            style={{ background: "radial-gradient(circle, #009B3A 0%, transparent 70%)" }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Yellow glow — counter drift */}
          <motion.div
            className="absolute bottom-[-8%] right-[-8%] h-[50vh] w-[50vh] rounded-full opacity-[0.08] blur-[120px]"
            style={{ background: "radial-gradient(circle, #FFDF00 0%, transparent 70%)" }}
            animate={{ x: [0, -50, 0], y: [0, -25, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Flag lozenge (losango) — slow spin + faint pulse */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              className="h-[62vh] w-[62vh] rounded-[3rem] blur-[6px]"
              style={{ border: "2px solid #FFDF00", boxShadow: "inset 0 0 120px rgba(0,155,58,0.35)" }}
              animate={{ rotate: [45, 51, 45], opacity: [0.05, 0.09, 0.05] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* Diagonal green→yellow wash — gentle hue shimmer */}
          <motion.div
            className="absolute inset-0 blur-[40px]"
            style={{ background: "linear-gradient(135deg, #009B3A 0%, transparent 45%, transparent 55%, #FFDF00 100%)" }}
            animate={{ opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Neon ribbons — thin glowing bands sliding across in flag colors */}
          <motion.div
            className="absolute left-[-20%] top-[22%] h-[3px] w-[140%] blur-[2px]"
            style={{ rotate: "-14deg", background: "linear-gradient(90deg, transparent, #00E676 45%, #39FF14 55%, transparent)", boxShadow: "0 0 24px 4px rgba(0,230,118,0.55)" }}
            animate={{ x: ["-8%", "8%", "-8%"], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[-20%] top-[27%] h-[2px] w-[140%] blur-[1px]"
            style={{ rotate: "-14deg", background: "linear-gradient(90deg, transparent, #FFEA00 50%, transparent)", boxShadow: "0 0 20px 3px rgba(255,234,0,0.5)" }}
            animate={{ x: ["6%", "-6%", "6%"], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[-20%] h-[3px] w-[140%] blur-[2px]"
            style={{ rotate: "10deg", background: "linear-gradient(90deg, transparent, #FFD400 48%, #FFEA00 56%, transparent)", boxShadow: "0 0 24px 4px rgba(255,212,0,0.5)" }}
            animate={{ x: ["-7%", "7%", "-7%"], opacity: [0.2, 0.42, 0.2] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Flag banner arc — curved band evoking "Ordem e Progresso", slowly orbiting */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              className="h-[46vh] w-[46vh] rounded-full opacity-25 blur-[1px]"
              style={{
                background: "conic-gradient(from 200deg at 50% 50%, transparent 0deg, #00E676 26deg, #39FF14 40deg, transparent 66deg, transparent 360deg)",
                WebkitMaskImage: "radial-gradient(circle, transparent 62%, #000 63%, #000 70%, transparent 71%)",
                maskImage: "radial-gradient(circle, transparent 62%, #000 63%, #000 70%, transparent 71%)",
                filter: "drop-shadow(0 0 14px rgba(0,230,118,0.55))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Constellation stars — twinkling neon dots like the flag's celestial sphere */}
          {[
            { l: "38%", t: "40%", s: 5, c: "#FFEA00", g: "rgba(255,234,0,0.7)", d: 2.4 },
            { l: "55%", t: "46%", s: 4, c: "#7CFF6B", g: "rgba(57,255,20,0.6)", d: 3.1 },
            { l: "46%", t: "54%", s: 3, c: "#FFF9C4", g: "rgba(255,234,0,0.55)", d: 2.8 },
            { l: "60%", t: "38%", s: 3, c: "#7CFF6B", g: "rgba(57,255,20,0.5)", d: 3.6 },
          ].map((st, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ left: st.l, top: st.t, height: st.s, width: st.s, background: st.c, boxShadow: `0 0 ${st.s * 2}px ${st.s / 2}px ${st.g}` }}
              animate={{ opacity: [0.25, 0.75, 0.25], scale: [0.8, 1.25, 0.8] }}
              transition={{ duration: st.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}
        </div>

        {/* Intro copy, fades out as zoom begins */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="pointer-events-none absolute z-20 px-6 text-center"
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

        {tiles.map((t, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i] }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div
              className={`relative ${t.size} ${t.pos} overflow-hidden rounded-2xl border border-line bg-surface-2`}
            >
              <video
                src={t.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label={t.label}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {t.center && (
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
        ))}
      </div>
    </section>
  );
}
