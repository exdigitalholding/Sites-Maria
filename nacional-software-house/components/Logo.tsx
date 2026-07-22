import Image from "next/image";

/** Official Nacional wordmark supplied by the client. */
export default function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      role="img"
      aria-label="Nacional Software House"
      className={`relative inline-block shrink-0 overflow-hidden ${
        compact ? "h-7 w-[142px]" : "h-8 w-[164px]"
      } ${className}`}
    >
      <Image
        src="/brand/nacional-logo-white.png"
        alt=""
        width={1920}
        height={1080}
        priority
        sizes={compact ? "142px" : "164px"}
        className="pointer-events-none absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 select-none"
      />
    </span>
  );
}
