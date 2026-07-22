import Marquee from "./Marquee";

export default function Footer() {
  const services = [
    "Marketing de Conteúdo",
    "Copywriting",
    "Tráfego Pago",
    "Estratégia e Posicionamento",
    "Branding",
    "Consultoria",
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-bone">
      <div className="border-y border-white/10 py-8">
        <Marquee
          items={Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-7xl italic leading-none text-acid sm:text-[9rem]">
              List — Direção Estratégica —
            </span>
          ))}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Endereço</p>
            <p className="mt-3 text-lg leading-snug">
              Av. Rep. Argentina, 2056<br />
              Água Verde · Curitiba · PR
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Contato</p>
            <a
              href="mailto:agencialistmarketing@gmail.com"
              className="mt-3 block text-lg link-underline"
            >
              agencialistmarketing@gmail.com
            </a>
            <a href="tel:+5541992907200" className="mt-1 block text-lg link-underline">
              +55 41 9 9290-7200
            </a>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Atendimento</p>
            <p className="mt-3 text-lg">Seg — Sex · 09h às 18h</p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Serviços</p>
            <ul className="mt-4 space-y-2 text-base">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="link-underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Redes</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-base">
              {[
                { name: "Instagram", href: "#" },
                { name: "YouTube", href: "#" },
                { name: "X / Twitter", href: "#" },
                { name: "WhatsApp", href: "#" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 transition-colors hover:border-acid hover:text-acid"
                  >
                    {s.name}
                    <span className="cta-arrow">
                      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#diagnostico"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-acid/60 px-5 py-3 text-sm uppercase tracking-[0.2em] text-acid transition-colors hover:bg-acid hover:text-ink"
            >
              Quero meu diagnóstico
              <span className="cta-arrow">
                <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <h2 className="font-display text-[clamp(5rem,18vw,18rem)] italic leading-[0.85] tracking-[-0.05em] text-bone">
            list<span className="text-signal">.</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/60 md:text-right">
            Agência LIST © 2026 · Todos os direitos reservados · Curitiba / BR
          </p>
        </div>
      </div>
    </footer>
  );
}
