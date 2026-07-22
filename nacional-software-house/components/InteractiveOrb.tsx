"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Icosahedron } from "@react-three/drei";

/**
 * Draggable distorted orb. OrbitControls handles mouse + touch (rotate only),
 * so it is interactive on mobile too. Kept low-DPR and single-mesh for perf.
 */
export default function InteractiveOrb() {
  return (
    <Canvas
      className="!absolute inset-0 cursor-grab active:cursor-grabbing"
      camera={{ position: [0, 0, 4.4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 4]} intensity={1.5} color="#26e08a" />
      <directionalLight position={[-4, -2, -2]} intensity={0.9} color="#f5b921" />
      <Icosahedron args={[1.4, 16]}>
        <MeshDistortMaterial
          color="#0d5f3a"
          emissive="#12b76a"
          emissiveIntensity={0.18}
          roughness={0.2}
          metalness={0.65}
          distort={0.4}
          speed={1.8}
        />
      </Icosahedron>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
        rotateSpeed={0.7}
      />
    </Canvas>
  );
}
