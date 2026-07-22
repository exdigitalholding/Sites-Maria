import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalHero from "@/components/InternalHero";
import SmoothScroll from "@/components/SmoothScroll";
import MeloSymbol from "@/components/MeloSymbol";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Serviços Jurídicos Tributários - Melo Advogados",
};

export default function Servicos() {
  return (
    <main className="relative min-h-screen bg-ink">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <InternalHero
        title="Advocacia tributária estratégica para o crescimento do seu negócio."
        description="Como especialistas em Direito Tributário, dedicamos todos os nossos esforços em uma única direção. Nosso Núcleo Tributário é composto por uma equipe focada em soluções completas, desde a recuperação de tributos até o planejamento e a gestão de passivos da sua empresa."
      />

      {/* Intro Block */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-[900px] mx-auto text-center">
        <MeloSymbol className="size-10 text-gold mx-auto mb-8 opacity-50" />
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bone leading-[1.1] mb-8">
          Núcleo <span className="italic text-gold">Tributário</span>
        </h2>
        <div className="flex flex-col gap-6 text-bone/80 text-lg leading-relaxed">
          <p>
            Atuamos de forma incisiva na recuperação de tributos, seja via administrativa ou judicial, garantindo que sua empresa pague apenas o que é justo.
          </p>
          <p>
            Nossa assessoria jurídica e contábil também atua preventivamente, oferecendo a segurança necessária para o crescimento sustentável de negócios em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="relative py-12 px-6 sm:px-10 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              sigla: "RJT",
              title: "Recuperação Judicial de Tributos",
              desc: "Discute, na esfera judicial, a legalidade de majorações indevidas e busca reaver tributos pagos a maior. Com apoio de tecnologia jurídica de ponta, buscamos a restituição por depósito em conta ou compensação.",
            },
            {
              sigla: "RAT",
              title: "Recuperação Administrativa de Tributos",
              desc: "Realizamos uma análise detalhada dos documentos fiscais e cruzamento de dados para identificar créditos e recuperar valores pagos indevidamente nos últimos cinco anos, sem a necessidade de ação judicial.",
            },
            {
              sigla: "GPT",
              title: "Gestão de Passivo Tributário",
              desc: "Atuação focada em identificar riscos, renegociar dívidas, prevenir autuações e estruturar soluções fiscais e societárias que garantem maior previsibilidade e alívio financeiro.",
            },
            {
              sigla: "CAT",
              title: "Consultoria e Assessoria Tributária",
              desc: "Atua de forma preventiva e estratégica, auxiliando na interpretação das normas vigentes, na estruturação de planejamentos fiscais e na correta classificação tributária da empresa.",
            },
          ].map((svc, i) => (
            <div key={i} className="group relative p-8 sm:p-12 rounded-3xl bg-white border border-bone/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <span className="font-mono text-4xl text-gold/10 font-bold group-hover:text-gold/20 transition-colors">{svc.sigla}</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
                    <span className="size-1.5 rounded-full bg-gold" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold font-bold">{svc.sigla}</span>
                  </div>
                  <h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] text-bone leading-tight mb-4 pr-12">{svc.title}</h3>
                  <p className="text-bone/70 leading-relaxed text-[15px] sm:text-base max-w-md">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentials */}
      <section className="relative py-32 px-6 sm:px-10 bg-[#05080E] text-white mt-20">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.0] mb-6">
              Diferenciais da <span className="italic text-gold">Melo Advogados</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 md:pr-12 flex flex-col items-center md:items-start gap-6">
              <div className="size-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">01</div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-gold">Tecnologia exclusiva</h3>
              <p className="text-white/60 leading-relaxed text-sm">Robôs para captura de publicações, automações e IA para cruzamento de informações fiscais em tempo real.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-12 flex flex-col items-center md:items-start gap-6">
              <div className="size-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">02</div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-gold">Expertise consolidada</h3>
              <p className="text-white/60 leading-relaxed text-sm">Respiramos Direito Tributário há mais de 60 anos, convertendo tradição em segurança e resultados sólidos.</p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-12 flex flex-col items-center md:items-start gap-6">
              <div className="size-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">03</div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-gold">Atendimento transparente</h3>
              <p className="text-white/60 leading-relaxed text-sm">Portal exclusivo, notificações via WhatsApp e dashboards visuais dinâmicos. Fim dos PDFs longos e confusos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Reform Section & CTA */}
      <section className="relative py-32 px-6 sm:px-10 text-center flex flex-col items-center justify-center">
        <div className="max-w-[800px] flex flex-col items-center">
          <h2 className="font-display text-[clamp(2.2rem,4vw,3rem)] text-bone leading-[1.1] mb-8 text-balance">
            Reforma tributária: <span className="italic text-gold">Entendendo os impactos</span> para sua empresa.
          </h2>
          <div className="flex flex-col gap-6 text-bone/80 text-lg leading-relaxed mb-12 text-left sm:text-center">
            <p>
              A substituição do ICMS, ISS, IPI, PIS e COFINS pelo novo sistema (CBS e IBS) trará mudanças profundas na forma como as empresas estruturam seus negócios.
            </p>
            <p>
              Nossa atuação consultiva prepara a sua empresa antecipadamente para essas transformações, garantindo total adequação e aproveitando janelas de oportunidade tributária.
            </p>
          </div>
          
          <a
            href={whatsappHref(whatsappMessages.consulta)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#0B1F38] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Fale com nosso time
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
