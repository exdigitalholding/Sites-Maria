import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalHero from "@/components/InternalHero";
import SmoothScroll from "@/components/SmoothScroll";
import FAQAccordion from "@/components/FAQAccordion";
import MeloSymbol from "@/components/MeloSymbol";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Ações Coletivas - Melo Advogados",
};

const faqItems = [
  {
    question: "O que são Ações Coletivas Tributárias?",
    answer: "As Ações Coletivas Tributárias são medidas judiciais propostas por entidades de classe em favor de seus associados. O objetivo é questionar a legalidade ou constitucionalidade de determinados tributos e assegurar a restituição dos valores pagos indevidamente por todos os integrantes da categoria representada.",
  },
  {
    question: "Qual a principal vantagem de uma Ação Coletiva para minha empresa?",
    answer: "Ao aderir, sua empresa passa a integrar uma defesa conduzida por especialistas, com custos compartilhados e redução de riscos. Além disso, por ser liderada por uma entidade de classe, a ação ganha ainda mais robustez e legitimidade.",
  },
  {
    question: "Como sei se minha empresa é elegível para participar?",
    answer: "A elegibilidade varia conforme a tese tributária e o segmento de atuação da empresa. Nossa equipe realiza uma análise criteriosa para identificar quais ações coletivas são efetivamente aplicáveis ao seu negócio, assegurando participação apenas em teses que correspondam à sua realidade.",
  },
];

export default function AcoesColetivas() {
  return (
    <main className="relative min-h-screen bg-ink">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <InternalHero
        title="Defenda seu negócio da cobrança ilegal de impostos."
        description="Há quase duas décadas, a Melo Advogados é a principal aliada de entidades de classe, defendendo os interesses de seus associados com ações coletivas tributárias. Nossa missão é clara: recuperar o que é seu por direito e garantir que seu negócio opere em um ambiente fiscal mais justo."
        buttonText="Fale com o nosso time"
        buttonHref={whatsappHref(whatsappMessages.consulta)}
      />

      {/* Origin of Illegal Taxes Block */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <MeloSymbol className="size-12 text-gold opacity-50 mb-8" />
          <h2 className="font-display text-[clamp(2rem,3vw,3rem)] text-bone leading-[1.1]">
            Como surge a <span className="italic text-gold">cobrança ilegal</span> de um imposto?
          </h2>
        </div>
        <div className="flex flex-col gap-8 text-bone/80 text-lg leading-relaxed pt-2">
          <p>
            A cobrança de um imposto pode se tornar ilegal quando legisladores ou órgãos fiscais municipais, estaduais ou federais editam normas em desacordo com a Constituição Federal ou outras leis superiores. Mesmo sendo indevidas, essas cobranças muitas vezes persistem, causando prejuízos financeiros contínuos às empresas.
          </p>
          <div className="p-8 rounded-2xl bg-white border border-gold/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
            <p className="relative z-10 text-bone font-medium">
              A via judicial é o único caminho para interromper a exigência e recuperar os valores pagos indevidamente. Nesse cenário, nossa advocacia tributária atua de forma estratégica para transformar disputas em oportunidades de restituição e em maior segurança fiscal para as empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Role Block */}
      <section className="relative py-24 px-6 sm:px-10 bg-[#05080E] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 mb-8 shadow-sm">
            <span className="size-2 rounded-full bg-gold" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/90">
              Força Coletiva
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] mb-8">
            O papel estratégico das <span className="italic text-gold">entidades de classe.</span>
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Acreditamos no papel estratégico das entidades de classe, como associações, federações e sindicatos, na defesa de seus representados. Na Melo Advogados, atuamos em parceria com essas instituições para que teses tributárias relevantes cheguem ao Judiciário de forma organizada e representativa, fortalecendo a busca por um sistema fiscal mais justo e assegurando que as empresas estejam sempre um passo à frente.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-6 sm:px-10 max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-bone leading-[1.1]">
            Dúvidas <span className="italic text-gold">Frequentes</span>
          </h2>
        </div>
        <FAQAccordion items={faqItems} />
      </section>

      <Footer />
    </main>
  );
}
