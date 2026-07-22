import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import Marquee from "@/components/Marquee";
import MeloSymbol from "@/components/MeloSymbol";
import NetworkMap from "@/components/NetworkMap";
import ServicesScroll from "@/components/ServicesScroll";
import { siteConfig } from "@/lib/seo";
import { whatsappHref, whatsappMessages } from "@/lib/whatsapp";

const servicesData = [
  {
    title: "Direito Societário",
    desc: "Constituição de holdings, acordos de sócios, planejamento tributário societário e estruturação de M&A com foco absoluto em segurança jurídica.",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Planejamento Sucessório",
    desc: "Estruturação de processos sucessórios familiares de forma harmônica, visando a continuidade dos negócios e a preservação do legado familiar.",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Proteção Patrimonial",
    desc: "Blindagem legal de ativos contra contingências operacionais, através de ferramentas corporativas legítimas e seguras.",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Planejamento Tributário",
    desc: "Estratégias legais de elisão fiscal para otimizar a carga tributária de empresas e reorganizações societárias de alta performance.",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Contratos de Alta Complexidade",
    desc: "Redação e auditoria de contratos corporativos estratégicos, parcerias internacionais e instrumentos de governança de alta complexidade.",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Consultoria Estratégica",
    desc: "Assessoria jurídica preventiva para conselhos de administração, direcionada à tomada de decisões críticas e controle de riscos.",
    colSpan: "lg:col-span-1",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <HeroScrollAnimation />

      {/* Marquee Separator */}
      <Marquee speed="medium" />

      {/* Services Sticky Scroll Section */}
      <ServicesScroll />

      {/* Decorative Divider */}
      <div className="relative flex items-center justify-center py-12 bg-ink overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="relative z-10 bg-ink px-8">
          <MeloSymbol className="size-8 text-gold/30 hover:text-gold/80 transition-colors duration-500" />
        </div>
      </div>

      {/* About Section */}
      <section
        id="sobre"
        className="relative bg-ink pb-24 sm:pb-32 overflow-hidden"
        aria-label="Sobre o escritório"
      >
        <div className="pattern-dots absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 z-10">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 items-center">
            {/* Left text column */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
              <span className="reveal font-mono text-[10px] uppercase tracking-[0.2em] text-gold flex items-center gap-2">
                <MeloSymbol className="size-3 text-gold" />
                (02) &mdash; O Escritório
              </span>
              <h2 className="reveal font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] text-bone">
                Compromisso com o
                <br />
                <span className="italic text-gold">seu legado empresarial.</span>
              </h2>
              <p className="reveal text-base sm:text-lg text-bone/70 leading-relaxed mt-4 max-w-xl">
                O Melo Advogados nasceu do propósito de oferecer uma advocacia altamente técnica, focada no relacionamento direto e na inteligência societária. Unimos o rigor intelectual de grandes bancas com o atendimento ágil, personalizado e discreto de um escritório boutique.
              </p>
              <p className="reveal text-sm text-bone/60 leading-relaxed max-w-xl">
                Nossa atuação é focada em soluções sob medida, pois entendemos que cada negócio e cada família possuem nuances singulares. Desenvolvemos estratégias robustas que garantem a segurança jurídica necessária para o crescimento contínuo de nossos clientes.
              </p>

              {/* Stats badges */}
              <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 border-t border-bone/5 pt-8">
                <div>
                  <div className="font-display text-3xl sm:text-4xl text-gold font-normal">Boutique</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-bone/40 mt-1">Atendimento Dedicado</div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl text-gold font-normal">8+ Anos</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-bone/40 mt-1">Experiência Societária</div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl text-gold font-normal">100%</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-bone/40 mt-1">Foco Corporativo e Familiar</div>
                </div>
              </div>
            </div>

            {/* Right geometric figure decoration */}
            <aside className="reveal col-span-12 lg:col-span-5 hidden lg:block">
              <div className="relative aspect-square w-full max-w-[450px] mx-auto flex items-center justify-center">
                {/* Outer spinning dash borders */}
                <div className="absolute inset-0 rounded-full border border-gold/10 animate-spin" style={{ animationDuration: "180s" }} />
                <div className="absolute inset-8 rounded-full border border-gold/5 animate-spin" style={{ animationDuration: "90s", animationDirection: "reverse" }} />
                <div className="absolute inset-16 rounded-full border border-gold/15 animate-pulse" />
                
                {/* Center glowing symbol */}
                <div className="absolute inset-24 rounded-full border border-gold/20 bg-smoke/40 flex flex-col justify-center items-center text-center backdrop-blur-md shadow-[inset_0_0_40px_rgba(212,175,55,0.08)] group">
                  <MeloSymbol className="size-24 text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
                  <span className="absolute bottom-10 font-mono text-[8px] uppercase tracking-[0.4em] text-bone/50">
                    Melo Advogados
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Network / Alliances Section */}
      <NetworkMap />

      <Footer />
    </main>
  );
}
