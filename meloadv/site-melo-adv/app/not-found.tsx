import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Página não encontrada - Melo Advogados",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#05080E] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
        {/* Background decorative glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 pattern-grid opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="font-display text-[clamp(6rem,15vw,12rem)] leading-none text-gold/20 mb-4 select-none">
            404
          </span>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white mb-6">
            Página não encontrada
          </h1>
          <p className="text-white/60 text-lg max-w-md mb-12 leading-relaxed text-balance">
            O endereço que você tentou acessar não existe mais ou foi movido. Nossa equipe já mapeou os caminhos corretos.
          </p>
          
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F38] hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
          >
            Voltar para o início
            <span className="cta-arrow grid size-6 place-items-center rounded-full bg-[#0B1F38]/10 text-[#0B1F38]">
              <svg viewBox="0 0 24 24" className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
