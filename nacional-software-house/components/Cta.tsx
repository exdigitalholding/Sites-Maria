import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

/** Primary emerald CTA. Text stays on one line, AA contrast (dark text on green). */
export function CtaPrimary({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const inner = (
    <span className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-green px-8 py-4 text-[13px] font-semibold text-[#04120b] shadow-[0_18px_50px_-14px_rgba(18,183,106,0.7)] transition-colors duration-300 hover:bg-green-bright">
      {children}
      <ArrowUpRight
        strokeWidth={3}
        className="cta-arrow size-4"
        aria-hidden
      />
    </span>
  );
  return (
    <MagneticButton strength={0.35}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link href={href}>{inner}</Link>
      )}
    </MagneticButton>
  );
}

/** Secondary ghost link with a bordered stroke (readable over dark). */
export function CtaGhost({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const inner = (
    <span className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-7 py-4 text-[13px] font-medium text-text transition-colors duration-300 hover:border-green/60 hover:text-green-bright">
      {children}
      <ArrowUpRight strokeWidth={3} className="cta-arrow size-4" aria-hidden />
    </span>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <Link href={href}>{inner}</Link>;
}
