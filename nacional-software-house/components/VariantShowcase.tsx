"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import type { Group } from "three";
import { projects } from "@/lib/site";

export type ShowcaseVariant = "coverflow" | "tunnel" | "curve" | "deck";

const names = {
  tunnel: ["02", "Túnel Z", "Entre no portfólio"],
  curve: ["03", "Curva WebGL", "Projetos em outra dimensão"],
  deck: ["04", "Baralho empilhado", "Uma ideia por vez"],
} as const;

function Header({ variant }: { variant: Exclude<ShowcaseVariant, "coverflow"> }) {
  const [, label, title] = names[variant];
  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 pt-20 sm:px-8 sm:pt-24">
      <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-green-bright">
        <span>{label}</span><span className="h-px w-10 bg-green/40" />
        <span className="text-text-faint">Role para explorar</span>
      </div>
      <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-tight text-text">
        {title.split(" ").slice(0, -1).join(" ")} <span className="text-brand-gradient">{title.split(" ").at(-1)}.</span>
      </h2>
    </div>
  );
}

function ProjectFace({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <div className={`relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface shadow-[0_30px_100px_rgba(0,0,0,.65)]`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.tint} to-transparent`} />
      <div className="pattern-dots absolute inset-0 opacity-35" />
      <div className="absolute left-6 top-6 font-mono text-[11px] text-text-faint">0{index + 1}</div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 pt-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-green-bright">{project.tag}</p>
        <h3 className="mt-2 max-w-xs font-display text-xl font-semibold text-text sm:text-2xl">{project.title}</h3>
      </div>
    </div>
  );
}

function TunnelCard({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = index / projects.length;
  const local = useTransform(progress, [start - .18, start + .18], [0, 1]);
  const z = useTransform(local, [0, 1], [-1050, 260]);
  const y = useTransform(local, [0, 1], [index % 2 ? 55 : -55, 0]);
  const rotateZ = useTransform(local, [0, 1], [index % 2 ? 7 : -7, 0]);
  const opacity = useTransform(local, [0, .18, .82, 1], [0, 1, 1, 0]);
  const filter = useTransform(local, [0, .25, .8, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(4px)"]);
  return (
    <motion.article className="absolute left-1/2 top-1/2 h-[54vh] w-[78vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2" style={{ z, y, rotateZ, opacity, filter, transformStyle: "preserve-3d" }}>
      <ProjectFace project={projects[index]} index={index} />
    </motion.article>
  );
}

function Tunnel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: .35 });
  return (
    <section ref={ref} id="projetos" className="relative h-[500vh] border-b border-line bg-ink">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <Header variant="tunnel" />
        <div className="absolute inset-x-0 bottom-0 top-36 [perspective:1100px] [perspective-origin:50%_46%]">
          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-green/30 to-transparent shadow-[0_0_90px_30px_rgba(18,183,106,.1)]" />
          {projects.map((_, i) => <TunnelCard key={i} index={i} progress={progress} />)}
        </div>
      </div>
    </section>
  );
}

function Sculpture({ progress }: { progress: MotionValue<number> }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = -.75 + progress.get() * 1.5;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * .3) * .035 + progress.get() * .12;
  });
  return (
    <group ref={group} rotation={[0.15, -.4, -.15]}>
      {projects.map((_, i) => {
        const angle = (i - 2) * .42;
        return (
          <Float key={i} speed={1.1 + i * .08} rotationIntensity={.12} floatIntensity={.18}>
            <RoundedBox args={[2.5, 3.4, .08]} radius={.12} smoothness={3} position={[Math.sin(angle) * 4.6, (i - 2) * .08, Math.cos(angle) * 2 - 1]} rotation={[0, angle, 0]}>
              <meshStandardMaterial color={i % 2 ? "#152015" : "#0d1915"} metalness={.45} roughness={.28} />
            </RoundedBox>
          </Float>
        );
      })}
    </group>
  );
}

function Curve() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 75, damping: 24, mass: .4 });
  return (
    <section ref={ref} id="projetos" className="relative h-[340vh] border-b border-line bg-ink">
      <div className="sticky top-0 h-dvh overflow-hidden">
      <Header variant="curve" />
      <div className="relative h-[72vh] min-h-[520px]">
        <Canvas className="!absolute inset-0" dpr={[1, 1.5]} camera={{ position: [0, 0, 9], fov: 48 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
          <ambientLight intensity={1.1} />
          <directionalLight position={[5, 6, 7]} intensity={3.2} color="#26e08a" />
          <pointLight position={[-5, -2, 4]} intensity={20} color="#f5b921" />
          <Sculpture progress={progress} />
        </Canvas>
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center px-5">
          <div className="flex max-w-full gap-2 overflow-hidden rounded-full border border-white/10 bg-ink/75 p-2 backdrop-blur-xl">
            {projects.map((project, i) => <span key={project.title} className="whitespace-nowrap rounded-full border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-text-dim">0{i + 1} {project.tag}</span>)}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function DeckCard({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = index / projects.length;
  const end = start + .24;
  const y = useTransform(progress, [start, end], [index * 10, -700]);
  const rotateX = useTransform(progress, [start, end], [0, 18]);
  const rotateZ = useTransform(progress, [start, end], [(index - 2) * 1.4, index % 2 ? 8 : -8]);
  const opacity = useTransform(progress, [start, end - .02, end], [1, 1, 0]);
  return (
    <motion.article className="absolute left-1/2 top-1/2 h-[55vh] w-[82vw] max-w-[680px] -translate-x-1/2 -translate-y-1/2 origin-top" style={{ y, rotateX, rotateZ, opacity, zIndex: projects.length - index, transformStyle: "preserve-3d" }}>
      <ProjectFace project={projects[index]} index={index} />
    </motion.article>
  );
}

function Deck() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 85, damping: 24, mass: .35 });
  return (
    <section ref={ref} id="projetos" className="relative h-[480vh] border-b border-line bg-ink-2">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <Header variant="deck" />
        <div className="absolute inset-x-0 bottom-0 top-44 [perspective:1400px]">
          {[...projects].reverse().map((_, reverseIndex) => {
            const index = projects.length - 1 - reverseIndex;
            return <DeckCard key={index} index={index} progress={progress} />;
          })}
        </div>
      </div>
    </section>
  );
}

function StaticFallback({ variant }: { variant: Exclude<ShowcaseVariant, "coverflow"> }) {
  return (
    <section id="projetos" className="border-b border-line bg-ink px-5 py-20 sm:px-8">
      <Header variant={variant} />
      <div className="mx-auto mt-10 grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => <div key={project.title} className="h-72"><ProjectFace project={project} index={i} /></div>)}
      </div>
    </section>
  );
}

export default function VariantShowcase({ variant }: { variant: Exclude<ShowcaseVariant, "coverflow"> }) {
  const reduce = useReducedMotion();
  if (reduce) return <StaticFallback variant={variant} />;
  if (variant === "tunnel") return <Tunnel />;
  if (variant === "curve") return <Curve />;
  return <Deck />;
}
