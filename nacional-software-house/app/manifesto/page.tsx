import type { Metadata } from "next";
import ManifestoKinetic from "@/components/manifesto/ManifestoKinetic";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";
import ManifestoDecode from "@/components/manifesto/ManifestoDecode";

export const metadata: Metadata = {
  title: "Manifesto — 3 variações",
  robots: { index: false, follow: false },
};

const variants = [
  {
    anchor: "v1",
    n: "01",
    name: "Cinética",
    desc: "o scroll esculpe a frase",
  },
  {
    anchor: "v2",
    n: "02",
    name: "Duas Forças",
    desc: "IA × time se fundem",
  },
  {
    anchor: "v3",
    n: "03",
    name: "Decode",
    desc: "título descriptografa + lanterna",
  },
];

function VariantLabel({ n, name, desc }: { n: string; name: string; desc: string }) {
  return (
    <div className="pointer-events-none sticky top-4 z-40 h-0 px-4 sm:px-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/85 px-4 py-2 shadow-2xl backdrop-blur-xl">
        <span className="font-mono text-[10px] text-green-bright">{n}</span>
        <span className="text-xs font-semibold text-text">{name}</span>
        <span className="hidden text-[11px] text-text-dim sm:inline">— {desc}</span>
      </span>
    </div>
  );
}

export default function ManifestoPreviewPage() {
  return (
    <main>
      {/* Intro */}
      <section className="border-b border-line bg-ink px-5 pb-20 pt-28 text-center sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
          Preview interno · escolha 1
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Section Manifesto — 3 variações
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim">
          Mesma copy, três linguagens de animação diferentes. Role a página (ou
          use a barra abaixo) e escolha a favorita. A versão atual do site
          continua intacta.
        </p>
      </section>

      {/* Variação 1 */}
      <div id="v1" className="relative">
        <VariantLabel n="01" name="Cinética" desc="o scroll esculpe a frase, palavra por palavra" />
        <ManifestoKinetic id="m1" />
      </div>

      {/* Variação 2 */}
      <div id="v2" className="relative">
        <VariantLabel n="02" name="Duas Forças" desc="IA × time: as portas se abrem e se fundem" />
        <ManifestoSplit id="m2" />
      </div>

      {/* Variação 3 */}
      <div id="v3" className="relative">
        <VariantLabel n="03" name="Decode" desc="scramble + lanterna de código + tilt 3D (passe o mouse)" />
        <ManifestoDecode id="m3" />
      </div>

      <footer className="bg-ink px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-faint">
          fim do preview — qual das três vai pro ar?
        </p>
      </footer>

      {/* Barra de comparação */}
      <nav
        aria-label="Comparar variações do manifesto"
        className="fixed inset-x-0 bottom-4 z-[65] mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full border border-white/10 bg-ink/85 p-1.5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {variants.map((v) => (
            <a
              key={v.anchor}
              href={`#${v.anchor}`}
              className="flex min-h-11 shrink-0 items-center rounded-full px-3 text-[11px] font-semibold text-text-dim transition-colors hover:bg-white/5 hover:text-text sm:px-4"
            >
              <span className="mr-1.5 font-mono opacity-60">{v.n}</span>
              {v.name}
            </a>
          ))}
        </div>
      </nav>
    </main>
  );
}
