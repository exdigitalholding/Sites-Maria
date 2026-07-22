"use client";

import { useEffect, useState } from "react";

interface WebGLSupportOptions {
  desktopOnly?: boolean;
}

/**
 * Detecta WebGL somente no navegador e respeita a preferência por menos
 * movimento. A verificação acontece no próximo frame para manter a hidratação
 * previsível e evitar trabalho síncrono durante a montagem do componente.
 */
export function useWebGLSupport({ desktopOnly = false }: WebGLSupportOptions = {}) {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const canvas = document.createElement("canvas");
        const context =
          canvas.getContext("webgl2") ?? canvas.getContext("webgl");
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const matchesDevice =
          !desktopOnly || window.matchMedia("(min-width: 1024px)").matches;

        setIsSupported(Boolean(context) && !prefersReducedMotion && matchesDevice);
      } catch {
        setIsSupported(false);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [desktopOnly]);

  return isSupported;
}
