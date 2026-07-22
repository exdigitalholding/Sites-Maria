export default function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
          <span className="h-px w-6 bg-green/60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-text">
        {title}{" "}
        {accent && <span className="text-brand-gradient">{accent}</span>}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed text-text-dim sm:text-lg ${align === "center" ? "mx-auto" : ""} max-w-2xl`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
