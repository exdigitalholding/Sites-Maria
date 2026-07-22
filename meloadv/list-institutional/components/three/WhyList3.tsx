import Image from "next/image";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

const PILLARS = [
  {
    n: "I",
    title: "Ecossistema de especialistas",
    body: "Estratégia, conteúdo, mídia, branding e tecnologia sob a mesma direção. Sem ruído entre áreas, sem terceirização escondida.",
  },
  {
    n: "II",
    title: "Visão de negócio, não só de marketing",
    body: "Antes de propor campanha, entendemos o modelo. Olhamos margem, ciclo de venda, retenção e operação.",
  },
  {
    n: "III",
    title: "Estratégia + execução",
    body: "Pensamos e fazemos. O time que desenha o plano é o mesmo que assina a operação semana a semana.",
  },
  {
    n: "IV",
    title: "Decisão baseada em dados",
    body: "Cada recomendação nasce de diagnóstico, dados e contexto — nunca de tendências passageiras ou playbook genérico.",
  },
];

const STATS = [
  { v: "+40", k: "marcas conduzidas" },
  { v: "6", k: "frentes integradas" },
  { v: "2020", k: "início da operação" },
  { v: "CWB", k: "base · Brasil" },
];

export default function WhyList3() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#0a0a0a] text-bone">
      <div className="pattern-dots absolute inset-0 opacity-100" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-20%] top-[10%] h-[640px] w-[640px] rounded-full opacity-25 blur-[160px]"
        style={{ background: "radial-gradient(closest-side, #FF4E02 0%, transparent 75%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32">
        <header className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-acid" />
                (04) &mdash; A List
              </span>
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.04em]">
              Mais que ag&ecirc;ncia.
              <br />
              Um <em className="italic text-acid">sistema</em>
              <span className="text-bone/55"> estrat&eacute;gico.</span>
            </h2>
            <p className="reveal mt-6 max-w-xl text-lg text-bone/70">
              A List nasceu para resolver o que campanha solta n&atilde;o
              resolve: dire&ccedil;&atilde;o. Construimos m&eacute;todo onde
              havia improviso, e previsibilidade onde havia aposta.
            </p>
          </div>
        </header>

        {/* team photo block */}
        <div className="reveal mt-16 grid grid-cols-12 gap-6">
          <figure className="relative col-span-12 overflow-hidden rounded-3xl border border-bone/10 md:col-span-8">
            <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
              <Image
                src="/images/WhatsApp Image 2026-05-19 at 9.28.01 AM.jpeg"
                alt="Time da agência LIST no escritório em Curitiba"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
              {/* readability gradient bottom-up */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(18,18,18,0) 45%, rgba(18,18,18,0.85) 100%)",
                }}
                aria-hidden
              />
              {/* corner tags */}
              <span className="absolute left-5 top-5 rounded-full bg-acid px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone shadow-[0_6px_20px_-4px_rgba(255,78,2,0.55)]">
                Quem faz
              </span>
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-2xl italic leading-tight tracking-tight text-bone sm:text-3xl">
                    Direção, estratégia
                    <br />
                    &amp; execução.
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70">
                    Curitiba &middot; Brasil
                  </p>
                </div>
                <span className="hidden rounded-full border border-bone/40 bg-ink/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone backdrop-blur-sm sm:inline-block">
                  Time List
                </span>
              </figcaption>
            </div>
          </figure>

          <div className="col-span-12 flex flex-col justify-between gap-6 rounded-3xl border border-bone/10 bg-smoke p-8 sm:p-10 md:col-span-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                O time
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Um núcleo
                <br />
                <em className="italic text-acid">multidisciplinar.</em>
              </h3>
              <p className="mt-5 text-base leading-relaxed text-bone/70">
                Estrategistas, copywriters, mídia, branding e tecnologia. Mesma
                sala, mesma régua, mesma direção &mdash; sem terceirização
                escondida.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/5">
              <div className="bg-ink p-4">
                <p className="font-display text-3xl leading-none text-acid">100%</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                  in-house
                </p>
              </div>
              <div className="bg-ink p-4">
                <p className="font-display text-3xl leading-none text-bone">1</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                  ponto focal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* manifest line */}
        <div className="reveal mt-12 border-y border-bone/10 py-12">
          <p className="font-display text-[clamp(1.6rem,3.6vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
            &ldquo;A gente n&atilde;o vende m&iacute;dia, vende{" "}
            <em className="italic text-acid">dire&ccedil;&atilde;o</em>.
            E dire&ccedil;&atilde;o boa &eacute; aquela que cabe no seu
            neg&oacute;cio &mdash; n&atilde;o no playbook de outra
            empresa.&rdquo;
          </p>
        </div>

        {/* pillars */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/4 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className="reveal group relative bg-smoke p-8 transition-colors duration-300 hover:bg-[#3a3a3a] sm:p-12"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-display text-5xl italic leading-none tracking-tight text-bone/30 transition-colors duration-300 group-hover:text-acid">
                  {p.n}
                </span>
                <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  {p.title}
                </h3>
              </div>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/75">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* numbers strip */}
        <div className="reveal mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.k}
              className={`group bg-smoke p-8 transition-colors duration-300 hover:bg-[#3a3a3a] sm:p-10 ${
                i === 0 ? "" : ""
              }`}
            >
              <p
                className={`font-display text-5xl leading-none tracking-tight sm:text-6xl ${
                  i === 0 || i === 3 ? "text-acid" : "text-bone"
                }`}
              >
                {s.v}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
                {s.k}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-balance text-lg text-bone/75 sm:text-xl">
            Se voc&ecirc; busca uma ag&ecirc;ncia que pensa o neg&oacute;cio
            antes de pensar a campanha, voc&ecirc; encontrou.
          </p>
          <a
            href={whatsappHref(whatsappMessages.conversa)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-acid px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bone shadow-[0_10px_36px_-10px_rgba(255,78,2,0.7)] transition-all duration-300 hover:bg-signal"
          >
            Conversar com a List
            <span className="cta-arrow grid size-7 place-items-center rounded-full bg-ink text-acid">
              <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
