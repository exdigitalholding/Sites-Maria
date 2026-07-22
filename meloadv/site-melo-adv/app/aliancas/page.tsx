import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalHero from "@/components/InternalHero";
import SmoothScroll from "@/components/SmoothScroll";
import MeloSymbol from "@/components/MeloSymbol";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Alianças Estratégicas - Melo Advogados",
};

export default function Aliancas() {
  return (
    <main className="relative min-h-screen bg-ink">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <InternalHero
        title="Impulsione seu escritório com uma aliança estratégica em Direito Tributário."
        description="Seja parte de uma aliança que transforma conhecimento técnico em oportunidades reais. Atuamos junto a contabilidades e escritórios parceiros para gerar novos negócios e entregar resultados estratégicos para seus clientes."
        buttonText="Entre em contato"
        buttonHref={whatsappHref(whatsappMessages.consulta)}
      />

      {/* Bridge Block */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="flex-1">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bone leading-[1.1] mb-8">
            Uma ponte entre <span className="italic text-gold">especialistas tributários</span> e empresas.
          </h2>
          <div className="flex flex-col gap-6 text-bone/80 text-lg leading-relaxed">
            <p>
              As alianças representam parcerias estratégicas com contabilidades e escritórios que acompanham de perto a realidade tributária das empresas.
            </p>
            <p>
              A partir desse olhar, somamos nossa expertise para estruturar planejamentos e ações de recuperação de tributos, tanto na esfera judicial quanto administrativa, sempre com segurança técnica, estratégia clara e execução eficiente.
            </p>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-square max-w-[400px]">
          {/* Abstract Bridge / Connection Graphic */}
          <div className="absolute inset-0 rounded-full border border-gold/20 flex items-center justify-center">
            <div className="absolute top-0 right-0 size-32 bg-gold/5 blur-2xl rounded-full" />
            <MeloSymbol className="size-32 text-gold opacity-80" />
            
            {/* Connecting dots */}
            <div className="absolute top-1/4 -left-8 size-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
            <div className="absolute bottom-1/4 -right-8 size-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
            <div className="absolute w-[120%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent -rotate-45" />
          </div>
        </div>
      </section>

      {/* Why Ally Section */}
      <section className="relative py-24 px-6 sm:px-10 bg-white border-y border-bone/5">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] text-bone leading-[1.0] mb-6">
              Por que se <span className="italic text-gold">aliançar à Melo?</span>
            </h2>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bone/50">
              +60 anos de experiência, tecnologia de ponta e uma rede que gera negócios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Expertise tributária consolidada",
                desc: "Com mais de 60 anos de história, somos especialistas em Direito Tributário. Nossa equipe interna de advogados tributaristas e profissionais fiscais respira o assunto diariamente.",
              },
              {
                title: "Tecnologia exclusiva",
                desc: "Utilizamos automações, robôs e inteligência artificial para otimizar o fluxo de trabalho e fornecer informações fiscais precisas com agilidade.",
              },
              {
                title: "Atendimento transparente",
                desc: "Disponibilizamos um portal exclusivo e atualizações via WhatsApp com análises e relatórios visuais sobre as mudanças relevantes na legislação tributária.",
              },
              {
                title: "Rede de networking",
                desc: "A rede de alianças da Melo Advogados conecta mais de 130 escritórios, criando um ecossistema único de oportunidades e geração de valor contínuo.",
              },
            ].map((feature, i) => (
              <div key={i} className="group p-8 sm:p-12 rounded-2xl bg-smoke/50 border border-ink/5 hover:bg-white hover:border-gold/20 hover:shadow-xl transition-all duration-500">
                <div className="font-mono text-xs text-gold mb-6">0{i + 1} //</div>
                <h3 className="font-display text-2xl sm:text-3xl text-bone mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                <p className="text-bone/70 leading-relaxed text-[15px] sm:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-6 sm:px-10 text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#05080E]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-[1.1] mb-10 text-balance">
            Você também acredita no poder dos negócios em transformar o mundo?
          </h2>
          <a
            href={whatsappHref(whatsappMessages.consulta)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F38] hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
          >
            Entender modelo de aliança
            <span className="cta-arrow grid size-6 place-items-center rounded-full bg-[#0B1F38]/10 text-[#0B1F38]">
              <svg viewBox="0 0 24 24" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
