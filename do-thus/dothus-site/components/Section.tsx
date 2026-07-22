import { clsx } from "@/lib/clsx";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Rótulo de seção — caixa alta, tracking largo, ciano discreto. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      as="span"
      className={clsx(
        "inline-block text-xs font-semibold uppercase tracking-[0.32em] text-electric",
        className
      )}
    >
      {children}
    </Reveal>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <Reveal delay={0.08}>
        <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02] text-snow">
          {children}
        </h2>
      </Reveal>
    </div>
  );
}
