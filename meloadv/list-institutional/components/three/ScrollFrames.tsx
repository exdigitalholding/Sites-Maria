"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Apple-style scroll-driven frame sequence.
 *
 * - Wrapper has a tall scroll height (configurable via `scrollHeight`).
 * - Inside, a sticky 100vh container hosts a <canvas> that draws the
 *   frame matching the current scroll progress.
 * - Frames are preloaded progressively (every Nth first, then the rest).
 * - Children render on top of the canvas inside the sticky stage, so the
 *   hero copy stays pinned over the playing footage.
 */

const TOTAL_FRAMES = 298;
const FRAME_PATH = (i: number) =>
  `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

type Props = {
  /** Total scroll length, in vh units. */
  scrollHeightVh?: number;
  /** Optional className for the outer wrapper. */
  className?: string;
  /** Content rendered ON TOP of the canvas inside the sticky stage. */
  children?: React.ReactNode;
  /** Optional className for the sticky stage. */
  stageClassName?: string;
};

export default function ScrollFrames({
  scrollHeightVh = 360,
  className = "",
  stageClassName = "",
  children,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  // Preload images
  useEffect(() => {
    let cancelled = false;
    const arr: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let count = 0;

    const loadOne = (idx: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.loading = "eager";
        img.src = FRAME_PATH(idx + 1);
        img.onload = () => {
          if (cancelled) return resolve();
          arr[idx] = img;
          count += 1;
          setLoaded(count);
          // Mark ready once we have the first frame so the canvas can paint.
          if (idx === 0) setReady(true);
          resolve();
        };
        img.onerror = () => resolve();
      });

    (async () => {
      // 1) Load every 8th frame first to get a flickerable preview fast.
      const priority: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 8) priority.push(i);
      // ensure first + last in priority
      if (!priority.includes(0)) priority.unshift(0);
      if (!priority.includes(TOTAL_FRAMES - 1)) priority.push(TOTAL_FRAMES - 1);

      await Promise.all(priority.map(loadOne));
      if (cancelled) return;

      // 2) Then load the rest in small concurrent batches.
      const remaining: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!arr[i]) remaining.push(i);
      }

      const CONCURRENCY = 6;
      let cursor = 0;
      const worker = async () => {
        while (cursor < remaining.length && !cancelled) {
          const idx = remaining[cursor++];
          await loadOne(idx);
        }
      };
      await Promise.all(
        Array.from({ length: CONCURRENCY }, () => worker())
      );
    })();

    imagesRef.current = arr;
    return () => {
      cancelled = true;
    };
  }, []);

  // Resize canvas to device pixel ratio.
  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = stage.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      drawFrame(currentFrameRef.current, true);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(stage);
    window.addEventListener("resize", resize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Scroll progress → target frame (smoothed via rAF lerp).
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateTarget = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Progress while the sticky stage is pinned: from top hitting 0
      // until the bottom of the wrapper reaches the bottom of the viewport.
      const scrollable = rect.height - viewport;
      const scrolled = -rect.top;
      const raw = scrollable > 0 ? scrolled / scrollable : 0;
      const p = Math.max(0, Math.min(1, raw));
      targetFrameRef.current = p * (TOTAL_FRAMES - 1);
    };

    const tick = () => {
      // Smooth current frame toward target. Higher = snappier.
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;
      const next = current + (target - current) * 0.18;
      currentFrameRef.current = next;
      drawFrame(next);
      rafRef.current = requestAnimationFrame(tick);
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  function drawFrame(frameFloat: number, force = false) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const idx = Math.max(
      0,
      Math.min(TOTAL_FRAMES - 1, Math.round(frameFloat))
    );

    let img = imagesRef.current[idx];
    if (!img) {
      // Fallback: find nearest loaded frame.
      const arr = imagesRef.current;
      let nearest: HTMLImageElement | undefined;
      for (let d = 1; d < TOTAL_FRAMES; d++) {
        if (arr[idx - d]) {
          nearest = arr[idx - d];
          break;
        }
        if (arr[idx + d]) {
          nearest = arr[idx + d];
          break;
        }
      }
      img = nearest!;
      if (!img) return;
    }

    if (!force && (img as HTMLImageElement & { __lastDrawn?: number }).__lastDrawn === idx)
      return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    if (!iw || !ih) return;

    // cover-fit
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  const progressPct = Math.round((loaded / TOTAL_FRAMES) * 100);

  return (
    <section
      ref={wrapperRef}
      className={`scene relative ${className}`}
      style={{ height: `${scrollHeightVh}vh`, isolation: "isolate" }}
    >
      <div
        ref={stageRef}
        className={`scroll-frames-pin ${stageClassName}`}
      >
        <canvas
          ref={canvasRef}
          className="frames-canvas absolute inset-0 h-full w-full"
          aria-hidden
        />
        {/* Color grade stack: tint → noise → scanlines → readability gradient.
            Each layer is subtle on its own; together they disguise the raw
            JPEG quality and give the footage a directed, filmic look. */}
        <div className="pointer-events-none absolute inset-0 frames-tint" aria-hidden />
        <div className="pointer-events-none absolute inset-0 frames-noise" aria-hidden />
        <div className="pointer-events-none absolute inset-0 frames-scanlines" aria-hidden />
        <div className="pointer-events-none absolute inset-0 frames-grade" aria-hidden />

        {/* loader (fades out once we have a few frames) */}
        {!ready && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-ink text-bone">
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60">
                Carregando experi&ecirc;ncia
              </p>
              <p className="mt-4 font-display text-5xl italic text-acid">{progressPct}%</p>
              <div className="mx-auto mt-6 h-px w-32 overflow-hidden bg-bone/15">
                <div
                  className="h-full bg-acid transition-[width] duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Foreground content (hero copy etc.) */}
        <div className="relative z-10 flex h-full w-full flex-col">
          {children}
        </div>
      </div>
    </section>
  );
}
