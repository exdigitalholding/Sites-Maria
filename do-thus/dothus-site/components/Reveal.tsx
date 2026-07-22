"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Reveal com blur+slide — a entrada elegante padrão do site. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  once = true,
  as = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span" | "li" | "p";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y, filter: "blur(10px)" }
      }
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container — filhos entram em sequência. */
export function Stagger({
  children,
  className,
  step = 0.09,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ show: { transition: { staggerChildren: step } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
