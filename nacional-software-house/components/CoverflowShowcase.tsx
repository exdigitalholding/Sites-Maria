"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
  type MotionValue,
} from "motion/react";
import { team } from "@/lib/site";

const N = team.length;
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

// Visual compartilhado entre o coverflow 3D (desktop) e o slider (mobile).
function CardFace({ i, member }: { i: number; member: (typeof team)[number] }) {
  return (
    <>
      {/* Foto da pessoa. Enquanto `image` estiver vazio, mostra o placeholder. */}
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${member.tint} to-transparent`} />
          <div className="pattern-dots absolute inset-0 opacity-40" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="rounded-full border border-dashed border-line px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-text-faint">
              foto do time
            </span>
          </div>
        </>
      )}
      {/* Sheen for glassy depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07]" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-gradient-to-t from-ink via-ink/85 to-transparent p-8 pt-20">
        <span className="font-mono text-[10px] uppercase tracking-wider text-green-bright">
          {member.role}
        </span>
        <h3 className="font-display text-lg font-semibold tracking-tight text-text sm:text-xl">
          {member.name}
        </h3>
      </div>
      <span className="absolute right-5 top-5 font-mono text-xs text-text-faint">
        {String(i + 1).padStart(2, "0")}
      </span>
    </>
  );
}

function Card({
  i,
  pos,
  cardW,
  cardH,
  spacing,
  member,
}: {
  i: number;
  pos: MotionValue<number>;
  cardW: number;
  cardH: number;
  spacing: number;
  member: (typeof team)[number];
}) {
  const x = useTransform(pos, (p) => (i - p) * spacing);
  const rotateY = useTransform(pos, (p) => clamp(-(i - p) * 38, -52, 52));
  const z = useTransform(pos, (p) => -Math.min(Math.abs(i - p), 3) * 200);
  const scale = useTransform(pos, (p) => 1 - Math.min(Math.abs(i - p) * 0.12, 0.4));
  const opacity = useTransform(pos, (p) =>
    Math.abs(i - p) > 3.4 ? 0 : 1 - Math.min(Math.abs(i - p) * 0.26, 0.7)
  );
  const filter = useTransform(pos, (p) => `blur(${Math.min(Math.abs(i - p) * 1.1, 4)}px)`);
  const zIndex = useTransform(pos, (p) => 100 - Math.round(Math.abs(i - p) * 10));

  return (
    <motion.article
      style={{
        x,
        z,
        rotateY,
        scale,
        opacity,
        filter,
        zIndex,
        width: cardW,
        height: cardH,
        marginLeft: -cardW / 2,
        marginTop: -cardH / 2,
        transformStyle: "preserve-3d",
      }}
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
    >
      <CardFace i={i} member={member} />
    </motion.article>
  );
}

export default function CoverflowShowcase() {
  const wrap = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const [dims, setDims] = useState({ w: 0, cardW: 0, cardH: 0, spacing: 0 });
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // No mobile a section vira um slider horizontal simples (sem o coverflow 3D).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Measure the stage to size cards responsively
  useEffect(() => {
    const measure = () => {
      const w = stage.current?.clientWidth ?? 0;
      const cardW = clamp(w * 0.6, 200, 340);
      setDims({ w, cardW, cardH: cardW * 1.3, spacing: cardW * 0.64 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll drives the carousel position (sticky + useScroll = smooth on mobile,
  // it is not a scroll hijack: the page keeps scrolling normally).
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const posRaw = useTransform(scrollYProgress, [0.05, 0.95], [0, N - 1]);
  const pos = useSpring(posRaw, { stiffness: 90, damping: 24, mass: 0.4 });

  useMotionValueEvent(pos, "change", (v) => {
    setActive(clamp(Math.round(v), 0, N - 1));
  });

  // Mouse-tilt the whole stage for extra depth (desktop pointer only)
  const tiltX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const onMove = (e: React.MouseEvent) => {
    if (!stage.current) return;
    const r = stage.current.getBoundingClientRect();
    tiltY.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 10);
    tiltX.set((-(e.clientY - (r.top + r.height / 2)) / r.height) * 6);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // Reduced motion: simple, no 3D
  if (reduce) {
    return (
      <section id="time" className="border-b border-line bg-ink px-5 py-20 sm:px-8">
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
          <span className="h-px w-6 bg-green/60" aria-hidden />
          Quem constrói
        </span>
        <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight text-text">
          Conheça nossa <span className="text-brand-gradient">equipe.</span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-8">
              <span className="font-mono text-[10px] uppercase tracking-wider text-green-bright">
                {m.role}
              </span>
              <h3 className="font-display text-lg font-semibold text-text">{m.name}</h3>
              {m.focus && <p className="text-sm leading-relaxed text-text-dim">{m.focus}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Mobile: slider horizontal com scroll-snap (sem o coverflow 3D)
  if (isMobile) {
    return (
      <section id="time" className="border-b border-line bg-ink py-20">
        <div className="px-5">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            <span className="h-px w-6 bg-green/60" aria-hidden />
            Quem constrói
          </span>
          <h2 className="font-display text-[clamp(1.9rem,7vw,2.6rem)] font-semibold leading-[1.08] tracking-tight text-text">
            Conheça nossa <span className="text-brand-gradient">equipe.</span>
          </h2>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {team.map((m, i) => (
            <article
              key={m.name}
              className="relative aspect-[3/4] w-[78vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
            >
              <CardFace i={i} member={m} />
            </article>
          ))}
        </div>

        <p className="px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          Arraste para o lado
        </p>
      </section>
    );
  }

  return (
    <section
      ref={wrap}
      id="time"
      className="relative border-b border-line bg-ink"
      style={{ height: "340vh" }}
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden">
        {/* Heading */}
        <div className="mx-auto w-full max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-28">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
            <span className="h-px w-6 bg-green/60" aria-hidden />
            Quem constrói
          </span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-text">
            Conheça nossa <span className="text-brand-gradient">equipe.</span>
          </h2>
        </div>

        {/* 3D stage */}
        <div
          ref={stage}
          onMouseMove={onMove}
          onMouseLeave={resetTilt}
          className="relative flex-1"
          style={{ perspective: "1600px" }}
        >
          {dims.w > 0 && (
            <motion.div
              style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
              className="absolute inset-0"
            >
              {team.map((m, i) => (
                <Card
                  key={m.name}
                  i={i}
                  pos={pos}
                  cardW={dims.cardW}
                  cardH={dims.cardH}
                  spacing={dims.spacing}
                  member={m}
                />
              ))}
            </motion.div>
          )}

          {/* Reflection floor */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
        </div>

        {/* Active label + progress dots */}
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 pb-10 sm:px-8">
          <div className="min-h-[1.5rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim"
              >
                {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")} ·{" "}
                {team[active].role}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2">
            {team.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-green" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
