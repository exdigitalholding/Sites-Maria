import Marquee from "../Marquee";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export default function Footer3() {
  const services = [
    "Marketing de Conteúdo",
    "Copywriting",
    "Tráfego Pago",
    "Estratégia & Posicionamento",
    "Branding",
    "Consultoria",
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="border-y border-bone/10 py-8">
        <Marquee
          items={Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-7xl italic leading-none text-acid sm:text-[9rem]"
            >
              List &mdash; Capítulo III &mdash;
            </span>
          ))}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
              Endereço
            </p>
            <p className="mt-3 text-lg leading-snug">
              Av. Rep. Argentina, 2056
              <br />
              Água Verde · Curitiba · PR
            </p>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
              Contato
            </p>
            <a
              href="mailto:agencialistmarketing@gmail.com"
              className="mt-3 block cursor-pointer text-lg link-underline transition-colors hover:text-acid"
            >
              agencialistmarketing@gmail.com
            </a>
            <a
              href="tel:+5541992907200"
              className="mt-1 block cursor-pointer text-lg link-underline transition-colors hover:text-acid"
            >
              +55 41 9 9290-7200
            </a>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
              Atendimento
            </p>
            <p className="mt-3 text-lg">Seg — Sex · 09h às 18h</p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
              Serviços
            </p>
            <ul className="mt-4 space-y-2 text-base">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="cursor-pointer link-underline transition-colors hover:text-acid"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
              Capítulos
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-base">
              {[
                { name: "Capítulo I", href: "/" },
                { name: "Capítulo II", href: "/version2" },
                { name: "Capítulo III", href: "/version3" },
                { name: "Instagram", href: "#" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="group flex cursor-pointer items-center justify-between rounded-2xl border border-bone/10 bg-bone/2 px-4 py-3 transition-colors duration-300 hover:border-acid hover:bg-acid/10 hover:text-acid"
                  >
                    {s.name}
                    <span className="cta-arrow">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path
                          d="M7 17L17 7M9 7h8v8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappHref(whatsappMessages.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full border border-acid/60 bg-acid/5 px-5 py-3 text-sm uppercase tracking-[0.2em] text-acid transition-all duration-300 hover:bg-acid hover:text-bone"
            >
              Quero meu diagnóstico
              <span className="cta-arrow">
                <svg
                  viewBox="0 0 24 24"
                  className="size-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    d="M7 17L17 7M9 7h8v8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <h2 className="font-display text-[clamp(5rem,18vw,18rem)] italic leading-[0.85] tracking-tighter text-bone">
            list<span className="text-acid">.</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/60 md:text-right">
            Agência LIST © 2026 · Todos os direitos reservados · Curitiba / BR
          </p>
        </div>
      </div>
    </footer>
  );
}
