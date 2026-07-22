"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function createParticlePositions(count: number) {
  const positions = new Float32Array(count * 3);
  let seed = 0x2f6e2b1;

  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0x100000000;
  };

  for (let index = 0; index < count; index++) {
    const radius = 3.2 + random() * 3.8;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }

  return positions;
}

const PARTICLE_POSITIONS = createParticlePositions(1400);

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.012;
    // gentle mouse parallax
    const { x, y } = state.pointer;
    ref.current.rotation.y += x * 0.0016;
    ref.current.rotation.x += y * 0.0016;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#26e08a"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Wire() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={2.1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#12b76a" wireframe transparent opacity={0.28} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ParticleField />
      <Wire />
    </Canvas>
  );
}
