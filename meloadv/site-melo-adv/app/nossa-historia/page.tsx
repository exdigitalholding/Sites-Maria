import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalHero from "@/components/InternalHero";
import Timeline, { TimelineItem } from "@/components/Timeline";
import SmoothScroll from "@/components/SmoothScroll";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

const timelineItems: TimelineItem[] = [
  {
    year: "1960",
    description: "O início — Moacir de Melo, recém-formado pela UFPR, inicia a carreira.",
    imageUrl: "/images/timeline/1960.jpg",
  },
  {
    year: "1978",
    description: "A primeira sede própria em União da Vitória.",
    imageUrl: "/images/timeline/1978.jpg",
  },
  {
    year: "1987",
    description: "Expansão para a capital — filial em Curitiba.",
    imageUrl: "/images/timeline/1987.jpg",
  },
  {
    year: "2003",
    description: "Reconhecimento nacional — entre as 40 melhores advocacias do país.",
    dividerText: "Excelência e foco em direito tributário",
    imageUrl: "/images/timeline/2003.jpg",
  },
  {
    year: "2005",
    description: "Prêmio Top of Mind Brazil (INBRAP).",
    imageUrl: "/images/timeline/2005.jpg",
  },
  {
    year: "2006",
    description: "As primeiras ações coletivas tributárias.",
    imageUrl: "/images/timeline/2006.jpg",
  },
  {
    year: "2012",
    description: "Consolidação na área tributária.",
    dividerText: "Referência em Direito Tributário",
    imageUrl: "/images/timeline/2012.jpg",
  },
  {
    year: "2017",
    description: "Sede estratégica em Curitiba (foco tributário).",
    imageUrl: "/images/timeline/2017.jpg",
  },
  {
    year: "2020",
    description: "A \"Tese do Século\" (exclusão do ICMS da base do PIS/COFINS).",
    dividerText: "Especialistas em Ações Coletivas",
    imageUrl: "/images/timeline/2020.jpg",
  },
  {
    year: "2021",
    description: "Expansão nacional (SC, SP, MS) — +100 parceiros, 50 entidades.",
    imageUrl: "/images/timeline/2021.jpg",
  },
  {
    year: "2022",
    description: "Alianças com APRAS e SETCEPAR.",
    imageUrl: "/images/timeline/2022.jpg",
  },
];

export const metadata = {
  title: "Nossa História - Melo Advogados - 60 anos de Tradição",
};

export default function NossaHistoria() {
  return (
    <main className="relative min-h-screen bg-ink">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <InternalHero
        title="São mais de 60 anos de história"
        description="Tradição, excelência técnica e visão empreendedora para transformar desafios jurídicos em oportunidades para empresas em todo o Brasil."
        buttonText="Fale com a nossa equipe"
        buttonHref={whatsappHref(whatsappMessages.consulta)}
      />

      {/* Intro Block */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-[1000px] mx-auto text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bone leading-[1.1] mb-12">
          Uma história construída com coragem, <span className="italic text-gold">visão e resultados.</span>
        </h2>
        <div className="flex flex-col gap-8 text-left sm:text-center text-bone/80 text-lg leading-relaxed">
          <p>
            Desde a fundação por Dr. Moacir de Melo, em 1960, a Melo Advogados se desenvolveu de um escritório no interior do Paraná para um dos principais nomes do Direito Empresarial e Tributário no Brasil. Ao longo de mais de seis décadas, expandimos com solidez e propósito, conectando uma equipe de mais de 100 profissionais, 300 escritórios parceiros e 160 entidades em todo o país.
          </p>
          <p>
            Nossa jornada é marcada pela excelência e pela atuação muito além do contencioso. Somos reconhecidos por aliar a tradição de quem acompanhou as maiores transformações fiscais do Brasil com a inovação necessária para estruturar soluções corporativas de altíssimo nível.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full bg-white border-y border-bone/5">
        <Timeline items={timelineItems} />
        
        {/* Final highlight quote */}
        <div className="max-w-[800px] mx-auto text-center py-32 px-6 sm:px-10">
          <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] text-bone leading-[1.2]">
            "Acreditamos no poder dos negócios e do empreendedorismo como meio de tornar o mundo um lugar mais justo e próspero."
          </h3>
        </div>
      </section>

      <Footer />
    </main>
  );
}
