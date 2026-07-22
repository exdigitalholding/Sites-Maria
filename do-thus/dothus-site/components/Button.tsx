import { clsx } from "@/lib/clsx";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

/**
 * CTA. O primário usa Azul Elétrico — o 10% de "ação" da regra 60-30-10.
 * Contatos abrem WhatsApp (canal principal do deck).
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 will-change-transform",
        "px-6 py-3.5",
        variant === "primary" &&
          "bg-electric text-carbon hover:bg-electric-soft hover:shadow-[0_18px_50px_-14px_rgba(0,210,255,0.6)] active:scale-[0.97]",
        variant === "ghost" &&
          "border border-line bg-surface/40 text-text hover:border-electric/50 hover:text-snow active:scale-[0.97]",
        className
      )}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
