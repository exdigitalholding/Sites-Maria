"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Html, Environment, Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";
import MeloSymbol from "./MeloSymbol";

export interface TimelineItem {
  year: string;
  description: string;
  dividerText?: string;
  imageUrl?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const scrollState = { progress: 0 };

function BackgroundMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, -2, -15]} scale={12}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial 
          color="#D4AF37" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.8} 
          roughness={0.2} 
          distort={0.5} 
          speed={1.5} 
          transparent 
          opacity={0.08}
        />
      </mesh>
    </Float>
  );
}

function Scene({ items }: { items: TimelineItem[] }) {
  const groupRef = useRef<THREE.Group>(null);
  const { width } = useThree((state) => state.viewport);
  
  // Adjust dimensions based on viewport for responsiveness
  const isMobile = width < 5;
  const radius = isMobile ? 3 : 6;
  const heightGap = isMobile ? 6 : 5;

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Total height of the scrollable area in 3D units
    const scrollMax = (items.length - 1) * heightGap;
    const scrollY = scrollState.progress * scrollMax;
    
    // Smoothly animate group Y position
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      scrollY,
      4,
      state.delta
    );
  });

  return (
    <group ref={groupRef}>
      {items.map((item, i) => {
        // Arrange in a helix structure
        const angle = i * 0.8;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const y = -i * heightGap;

        return (
          <group key={i} position={[x, y, z]} rotation={[0, angle, 0]}>
            
            {/* Massive Background Year */}
            <Text
              position={[0, 0, -3]}
              fontSize={isMobile ? 3 : 5}
              color="#D4AF37"
              fillOpacity={0.05}
              anchorX="center"
              anchorY="middle"
              depthOffset={2}
            >
              {item.year}
            </Text>

            {/* Glowing Accent Line */}
            <mesh position={[-2, 0, -0.5]}>
                <boxGeometry args={[0.02, 3, 0.02]} />
                <meshBasicMaterial color="#D4AF37" transparent opacity={0.3} />
            </mesh>
            
            {/* Glassmorphic HTML Card */}
            <Html 
              transform 
              distanceFactor={isMobile ? 6 : 5} 
              position={[0, 0, 0]}
              occlude="blending"
              className="pointer-events-auto"
            >
              <div className="w-[300px] md:w-[400px] p-6 md:p-8 rounded-3xl bg-[#0B0E14]/60 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col gap-4 text-white hover:bg-[#0B0E14]/80 hover:border-gold/40 transition-all duration-500 ease-out group">
                <div className="flex items-center justify-between">
                  <div className="text-[#D4AF37] font-display text-4xl md:text-5xl tracking-tighter drop-shadow-md">
                    {item.year}
                  </div>
                  {!item.imageUrl && (
                    <MeloSymbol className="w-8 h-8 text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors" />
                  )}
                </div>
                
                {item.dividerText && (
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D4AF37]/80 font-mono font-bold">
                    {item.dividerText}
                  </div>
                )}
                
                <div className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  {item.description}
                </div>
                
                {item.imageUrl && (
                  <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden mt-2 border border-white/10 relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img 
                      src={item.imageUrl} 
                      alt={`Registro de ${item.year}`} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                  </div>
                )}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function Timeline({ items }: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${items.length * 150}%`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            scrollState.progress = self.progress;
          }
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, [items.length]);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] w-full bg-[#0B0E14] overflow-hidden" aria-label="Linha do Tempo da Melo Advogados">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-[#0B0E14] to-[#0B0E14] z-0 pointer-events-none" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#D4AF37" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
          
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          
          <Environment preset="city" />
          
          <BackgroundMesh />
          
          <Scene items={items} />
        </Canvas>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 mix-blend-screen pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-mono">Role para explorar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
