import Marquee from "./Marquee";

const TAGS = [
  "Estratégia",
  "Branding",
  "Tráfego Pago",
  "Conteúdo",
  "Copywriting",
  "Consultoria",
  "Posicionamento",
  "Performance",
  "Diagnóstico",
];

export default function MarketingTicker() {
  return (
    <div className="border-y border-ink/10 bg-bone py-5">
      <Marquee
        items={TAGS.map((tag, i) => (
          <span key={i} className="font-display text-3xl italic tracking-tight sm:text-5xl">
            {tag}
          </span>
        ))}
        separator={
          <span aria-hidden className="inline-block translate-y-[-2px]">
            <svg viewBox="0 0 24 24" className="size-6 text-signal" fill="currentColor" aria-hidden>
              <path d="M12 2l2.5 7.5H22l-6.25 4.5L18 22l-6-4.5L6 22l2.25-8L2 9.5h7.5z" />
            </svg>
          </span>
        }
      />
    </div>
  );
}
