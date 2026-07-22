export default function DiagonalScene() {
  const items = [
    { v: "violet", n: "Dados" },
    { v: "signal", n: "Insight" },
    { v: "mauve", n: "Plano" },
    { v: "acid", n: "Execução" },
    { v: "checker", n: "Resultado" },
    { v: "grid", n: "Iteração" },
  ] as const;

  return (
    <section className="scene relative overflow-hidden bg-smoke py-32 sm:py-40">
      <div className="pattern-dots absolute inset-0 opacity-20" aria-hidden />

      {/* left column moves up-right (diagonal positive) */}
      <div className="diag-col absolute -left-10 top-0 flex flex-col gap-6 opacity-90" data-diag="0.18,-0.22">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl border border-bone/10 bg-ink/60 px-6 py-3 backdrop-blur"
          >
            <span className={`size-2 rounded-full bg-${it.v === "violet" ? "violet" : it.v === "signal" ? "signal" : it.v === "acid" ? "acid" : "mauve"}`} />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-bone/70">{it.n} · {String(i + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>

      {/* right column moves down-left (diagonal negative) */}
      <div className="diag-col absolute -right-10 bottom-0 flex flex-col gap-6 opacity-90" data-diag="-0.18,0.22">
        {items.slice().reverse().map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl border border-bone/10 bg-ink/60 px-6 py-3 backdrop-blur"
          >
            <span className={`size-2 rounded-full bg-${it.v === "violet" ? "violet" : it.v === "signal" ? "signal" : it.v === "acid" ? "acid" : "mauve"}`} />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-bone/70">{it.n}</span>
          </div>
        ))}
      </div>

      {/* center large type */}
      <div className="relative mx-auto max-w-[1500px] px-6 text-center sm:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
          (03) — Direção em todos os eixos
        </p>
        <h2 className="mt-10 font-display text-[clamp(3rem,10vw,11rem)] leading-[0.88] tracking-[-0.04em]">
          <span className="block">vertical,</span>
          <span className="block text-stroke italic">horizontal,</span>
          <span className="block">
            <span className="italic text-signal">diagonal</span>.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-balance text-base leading-relaxed text-bone/70 sm:text-lg">
          Não tratamos marketing como uma linha reta. Tratamos como{" "}
          <em className="font-display italic text-acid">campo de força</em> — múltiplos vetores agindo simultaneamente sobre o crescimento.
        </p>
      </div>

      {/* floating diagonal lines decoration */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="diag-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#D6FF2F" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FF4719" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M0,500 L1000,100" stroke="url(#diag-gradient)" strokeWidth="1.5" fill="none" />
        <path d="M0,600 L1000,200" stroke="url(#diag-gradient)" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M0,400 L1000,0" stroke="url(#diag-gradient)" strokeWidth="0.8" fill="none" opacity="0.4" />
      </svg>
    </section>
  );
}
