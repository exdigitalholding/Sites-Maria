import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternalHero from "@/components/InternalHero";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Notícias Tributárias - Melo Advogados",
};

// Mock data based on the documentation
const mockPosts = [
  {
    title: "Retrospectiva Tributária do STJ: julgamentos 2025 e pauta 2026",
    date: "13 de janeiro de 2026",
    excerpt: "A 1ª Seção do Superior Tribunal de Justiça (STJ) encerrou o ano judiciário de 2025 com um volume recorde de julgamentos que impactam diretamente o planejamento fiscal das empresas brasileiras.",
    slug: "retrospectiva-tributaria-do-stj",
    category: "Notícias",
  },
  {
    title: "Créditos PIS Cofins Combustíveis: STJ Reafirma Proibição em Produtos Monofásicos",
    date: "1 de dezembro de 2025",
    excerpt: "A proibição de utilização de Créditos PIS Cofins Combustíveis em produtos sujeitos à tributação monofásica foi mais uma vez reafirmada, trazendo novos alertas para o setor de transportes.",
    slug: "creditos-pis-cofins-combustiveis",
    category: "Transportes",
  },
  {
    title: "Regras do Rearp: Lei nº 15.265 institui atualização e regularização patrimonial",
    date: "27 de novembro de 2025",
    excerpt: "A Lei nº 15.265, de 21 de novembro de 2025, estabeleceu oficialmente as regras do Rearp, abrindo uma janela de oportunidade para regularização de ativos com condições especiais.",
    slug: "regras-do-rearp",
    category: "Mercados",
  },
];

export default function BlogIndex() {
  return (
    <main className="relative min-h-screen bg-ink">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <InternalHero
        title="Insights tributários para a estratégia do seu negócio."
        description="Fique por dentro das decisões, oportunidades e atualizações fiscais que impactam diretamente a sua empresa. Nosso blog é a sua fonte de informação para transformar conhecimento em segurança e crescimento."
        imageBg="/books-mock.jpg" // Placeholder for the actual image
      />

      <section className="relative py-24 px-6 sm:px-10 max-w-[1500px] mx-auto min-h-screen">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 border-b border-bone/10 pb-8">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-bone/60">
            <a href="/noticias-tributarias" className="text-gold font-bold">Todos</a>
            <a href="/blog-transportes" className="hover:text-gold transition-colors">Transportes</a>
            <a href="/blog-industria" className="hover:text-gold transition-colors">Indústria</a>
            <a href="/blog-mercados" className="hover:text-gold transition-colors">Mercados</a>
            <a href="/blog-comercio" className="hover:text-gold transition-colors">Comércio</a>
            <a href="/blog-agronegocio" className="hover:text-gold transition-colors">Agronegócio</a>
            <a href="/blog-servicos" className="hover:text-gold transition-colors">Serviços</a>
          </div>

          <div className="relative w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Pesquisar ..." 
              className="w-full sm:w-72 bg-white border border-bone/20 rounded-full py-3 px-6 text-sm text-bone focus:outline-none focus:border-gold/50 transition-colors shadow-sm"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-bone/40 hover:text-gold transition-colors">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" /></svg>
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mockPosts.map((post, idx) => (
            <article key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-bone/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-500">
              {/* Image Placeholder (Dark abstract gradient) */}
              <a href={`/noticias-tributarias/${post.slug}`} className="relative w-full aspect-[4/3] bg-[#05080E] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-gold to-transparent mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                <span className="font-mono text-xs text-white/30 uppercase tracking-[0.3em]">Imagem</span>
              </a>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6 font-mono text-[10px] uppercase tracking-widest text-bone/50">
                  <span className="text-gold">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display text-2xl text-bone leading-tight mb-4 group-hover:text-gold transition-colors">
                  <a href={`/noticias-tributarias/${post.slug}`}>{post.title}</a>
                </h3>
                <p className="text-bone/70 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                <a href={`/noticias-tributarias/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:text-bone transition-colors font-bold w-fit">
                  Saiba Mais
                  <svg viewBox="0 0 24 24" className="size-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 font-mono text-xs text-bone/50">
          <button className="size-10 rounded-full border border-bone/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors opacity-50 cursor-not-allowed">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="size-10 rounded-full bg-gold text-white flex items-center justify-center font-bold">1</button>
          <button className="size-10 rounded-full border border-bone/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">2</button>
          <button className="size-10 rounded-full border border-bone/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">3</button>
          <span>...</span>
          <button className="size-10 rounded-full border border-bone/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">32</button>
          <button className="size-10 rounded-full border border-bone/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
