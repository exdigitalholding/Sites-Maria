import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalHero from "@/components/InternalHero";
import SmoothScroll from "@/components/SmoothScroll";
import MeloSymbol from "@/components/MeloSymbol";

export const metadata = {
  title: "Carreiras - Melo Advogados",
};

export default function Carreiras() {
  return (
    <main className="relative min-h-screen bg-ink">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <InternalHero
        title="Por trás de cada estratégia, pessoas comprometidas com o seu resultado."
        description="Profissionais movidos pelo inconformismo, pelo espírito empreendedor, e que acreditam que podemos sim mudar o mundo."
        buttonText="Envie seu currículo"
        buttonHref="mailto:melo@meloadvogados.com.br"
      />

      {/* Dedicated Team Block */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-[1000px] mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-gold/30 bg-white mb-10 shadow-sm">
          <span className="size-2 rounded-full bg-gold" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Um time de especialistas
          </span>
        </div>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-bone leading-[1.1] mb-12">
          Dedicado ao <span className="italic text-gold">seu sucesso.</span>
        </h2>
        <div className="flex flex-col gap-8 text-left sm:text-center text-bone/80 text-lg leading-relaxed">
          <p>
            Nossa atuação integrada entre as áreas tributária, societária e empresarial exige uma equipe de profissionais altamente capacitados, ágeis e com visão estratégica apurada.
          </p>
          <p>
            Valorizamos profundamente a troca de conhecimento e o desenvolvimento contínuo. Aqui, o sucesso individual de cada advogado e especialista reflete diretamente no sucesso dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-6 sm:px-10 bg-[#05080E] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1]">
                Nossos Valores: O Que <span className="italic text-gold">Buscamos em Você</span>
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Procuramos profissionais que compartilhem dos nossos valores e atitudes. Mais do que um currículo, nos importamos com o seu espírito.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "VALOR 01",
                  title: "Pertencimento",
                  desc: "Nós sonhamos grande e valorizamos quem acredita em um propósito comum. Buscamos pessoas que sejam abertas, respeitosas e que atuem com sinceridade e transparência. Na Melo Advogados, você faz parte de algo maior.",
                },
                {
                  label: "VALOR 02",
                  title: "Espírito empreendedor",
                  desc: "Acreditamos que o inconformismo e a vontade de fazer mais nos levam a resultados excepcionais. Se você é proativo, está sempre em busca de aprender e trabalha com alegria, você já tem o que é preciso.",
                },
                {
                  label: "VALOR 03",
                  title: "Foco no cliente",
                  desc: "Nossa busca pela excelência se traduz em um compromisso total com o cliente. Buscamos profissionais que pensam fora da caixa e que estão sempre dispostos a fazer mais do que o esperado para gerar valor.",
                },
              ].map((val, i) => (
                <div key={i} className={`p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-gold/30 transition-all duration-500 ${i === 2 ? "md:col-span-2 md:w-1/2 md:justify-self-center" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-gold mb-4">{val.label}</div>
                  <h3 className="font-display text-2xl text-white mb-4">{val.title}</h3>
                  <p className="text-white/60 leading-relaxed text-[15px]">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intermediary / Final CTA */}
      <section className="relative py-32 px-6 sm:px-10 text-center flex flex-col items-center justify-center bg-white border-y border-bone/5">
        <MeloSymbol className="size-16 text-gold/20 mb-8" />
        <div className="max-w-[800px] flex flex-col items-center">
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] text-bone leading-[1.1] mb-6 text-balance">
            Você também acredita no poder do empreendedorismo em <span className="italic text-gold">mudar o mundo?</span>
          </h2>
          <p className="text-bone/70 text-lg mb-12">
            Faça parte do time de especialistas da Melo Advogados.
          </p>
          
          <a
            href="mailto:melo@meloadvogados.com.br"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#0B1F38] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(11,31,56,0.3)]"
          >
            Envie seu currículo
            <span className="cta-arrow grid size-6 place-items-center rounded-full bg-white/10">
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
