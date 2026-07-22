"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

interface FrameSequenceProps {
  progress: MotionValue<number>;
  folderPath: string;
  frameCount: number;
  startFrame?: number;
  endFrame?: number;
  prefix: string;
  extension?: string;
}

export default function FrameSequence({
  progress,
  folderPath,
  frameCount,
  startFrame = 1,
  endFrame,
  prefix,
  extension = "png",
}: FrameSequenceProps) {
  const finalEndFrame = endFrame ?? frameCount;
  const totalFramesToLoad = finalEndFrame - startFrame + 1;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = startFrame; i <= finalEndFrame; i++) {
      const img = new Image();
      // pad index to 3 digits, e.g. 001
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `${folderPath}/${prefix}${paddedIndex}.${extension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFramesToLoad) {
          setLoaded(true);
        }
      };
      // To ensure we don't stall completely if an image fails:
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFramesToLoad) {
          setLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [folderPath, startFrame, finalEndFrame, prefix, extension]);

  const drawFrame = (v: number) => {
    if (!loaded || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    let frameIndex = Math.floor(v * totalFramesToLoad);
    if (frameIndex < 0) frameIndex = 0;
    if (frameIndex >= totalFramesToLoad) frameIndex = totalFramesToLoad - 1;

    const img = imagesRef.current[frameIndex];
    if (img && img.complete && img.naturalWidth !== 0) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const canvasRatio = canvasRef.current.width / canvasRef.current.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvasRef.current.width;
      let drawHeight = canvasRef.current.height;
      let offsetX = 0;
      let offsetY = 0;

      // object-fit: cover simulation
      if (canvasRatio > imgRatio) {
        drawHeight = canvasRef.current.width / imgRatio;
        offsetY = (canvasRef.current.height - drawHeight) / 2;
      } else {
        drawWidth = canvasRef.current.height * imgRatio;
        offsetX = (canvasRef.current.width - drawWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useMotionValueEvent(progress, "change", (v) => {
    drawFrame(v);
  });

  useEffect(() => {
    if (loaded) {
      drawFrame(progress.get());
    }
  }, [loaded, progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(progress.get());
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [loaded, progress]);

  return (
    <div className="absolute inset-0 h-full w-full bg-ink">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center bg-ink">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
            Carregando...
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
