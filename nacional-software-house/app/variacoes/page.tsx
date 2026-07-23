import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  DifferentialsV1,
  DifferentialsV2,
  DifferentialsV3,
} from "@/components/lab/DifferentialsVariants";
import {
  IdeaAliveV1,
  IdeaAliveV2,
  IdeaAliveV3,
} from "@/components/lab/IdeaAliveVariants";
import { StatsV1, StatsV2, StatsV3 } from "@/components/lab/StatsVariants";
import {
  PricingFromV1,
  PricingFromV2,
  PricingFromV3,
  PricingFromV4,
  PricingFromV5,
} from "@/components/lab/PricingFromVariants";
import {
  ProcessFireV1,
  ProcessFireV2,
  ProcessFireV3,
  ProcessFireV4,
} from "@/components/lab/ProcessFlipFireVariants";

export const metadata: Metadata = {
  title: "Variações de sections — preview interno",
  robots: { index: false, follow: false },
};

type Group = {
  anchor: string;
  n: string;
  section: string;
  variants: {
    id: string;
    name: string;
    desc: string;
    Comp: () => React.ReactElement;
  }[];
};

const groups: Group[] = [
  {
    anchor: "diferenciais",
    n: "01",
    section: "Por que a Nacional entrega diferente",
    variants: [
      { id: "dif-1", name: "Ledger vivo", desc: "linha se desenha no scroll", Comp: DifferentialsV1 },
      { id: "dif-2", name: "Cartões 3D", desc: "tilt magnético + spotlight", Comp: DifferentialsV2 },
      { id: "dif-3", name: "Foco sticky", desc: "número gigante troca no scroll", Comp: DifferentialsV3 },
    ],
  },
  {
    anchor: "ideia",
    n: "02",
    section: "Sua ideia ganha forma e movimento",
    variants: [
      { id: "idea-1", name: "Blob que respira", desc: "forma morph + parallax", Comp: IdeaAliveV1 },
      { id: "idea-2", name: "Wireframe vira produto", desc: "scrub abstrato → concreto", Comp: IdeaAliveV2 },
      { id: "idea-3", name: "Pegue e gire", desc: "cartão arrastável físico", Comp: IdeaAliveV3 },
    ],
  },
  {
    anchor: "prazos",
    n: "03",
    section: "A sua ideia no ar em semanas, não em meses",
    variants: [
      { id: "stat-1", name: "Contadores", desc: "números sobem ao entrar", Comp: StatsV1 },
      { id: "stat-2", name: "A corrida", desc: "semanas vs meses em barras", Comp: StatsV2 },
      { id: "stat-3", name: "Calendário que encolhe", desc: "malha de dias acende", Comp: StatsV3 },
    ],
  },
  {
    anchor: "investimento",
    n: "04",
    section: "Investimento claro — a partir de R$ 3.500 (preço único)",
    variants: [
      { id: "price-1", name: "Número-âncora", desc: "R$ 3.500 gigante + count-up", Comp: PricingFromV1 },
      { id: "price-2", name: "Orçamento sob medida", desc: "cartão estilo proposta", Comp: PricingFromV2 },
      { id: "price-3", name: "Como o preço funciona", desc: "3 passos, mata o 'depende'", Comp: PricingFromV3 },
      { id: "price-4", name: "Estimador de piso", desc: "slider: piso fixo + escopo", Comp: PricingFromV4 },
      { id: "price-5", name: "Selo de transparência", desc: "número + garantias", Comp: PricingFromV5 },
    ],
  },
  {
    anchor: "processo",
    n: "05",
    section: "O processo — o card gira e flamba (hover em cada card)",
    variants: [
      { id: "fire-1", name: "Flambé", desc: "chamas sobem da base ao girar", Comp: ProcessFireV1 },
      { id: "fire-2", name: "Engolfada", desc: "card inteiro em brasa + fumaça", Comp: ProcessFireV2 },
      { id: "fire-3", name: "Bordas em brasa", desc: "fogo lambe as bordas", Comp: ProcessFireV3 },
      { id: "fire-4", name: "Tempestade de brasas", desc: "faíscas + ondas de calor", Comp: ProcessFireV4 },
    ],
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

export default function SectionsPreviewPage() {
  return (
    <main>
      <Reveal />

      {/* Intro */}
      <section className="border-b border-line bg-ink px-5 pb-20 pt-28 text-center sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-bright">
          Preview interno · escolha 1 por section
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Sections e variações — escolha 1 de cada
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-dim">
          Cada section agora tem um texto acima do título e três linguagens de
          animação diferentes. Role, interaja (arraste, passe o mouse) e escolha
          a favorita de cada. O site em{" "}
          <span className="font-mono text-text">/</span> continua intacto.
        </p>
      </section>

      {groups.map((g) => (
        <div key={g.anchor} id={g.anchor}>
          {/* Cabeçalho da section */}
          <div className="border-b border-line bg-ink-2 px-5 py-16 text-center sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-text-faint">
              Section {g.n}
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              {g.section}
            </h2>
          </div>

          {g.variants.map((v, i) => {
            const Comp = v.Comp;
            return (
              <div key={v.id} id={v.id} className="relative">
                <VariantLabel
                  n={`${g.n}.${i + 1}`}
                  name={v.name}
                  desc={v.desc}
                />
                <Comp />
              </div>
            );
          })}
        </div>
      ))}

      <footer className="bg-ink px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-faint">
          fim do preview — me diga a favorita de cada section
        </p>
      </footer>

      {/* Barra de navegação entre sections */}
      <nav
        aria-label="Navegar entre as sections"
        className="fixed inset-x-0 bottom-4 z-[65] mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full border border-white/10 bg-ink/85 p-1.5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {groups.map((g) => (
            <a
              key={g.anchor}
              href={`#${g.anchor}`}
              className="flex min-h-11 shrink-0 items-center rounded-full px-3 text-[11px] font-semibold text-text-dim transition-colors hover:bg-white/5 hover:text-text sm:px-4"
            >
              <span className="mr-1.5 font-mono opacity-60">{g.n}</span>
              {g.anchor}
            </a>
          ))}
        </div>
      </nav>
    </main>
  );
}
