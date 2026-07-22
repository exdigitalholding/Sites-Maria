import Image from "next/image";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#05080E] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8 lg:pr-8">
            <Image
              src="/melo-advogados (1).svg"
              alt={siteConfig.name}
              width={180}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert drop-shadow-md"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Tradição, excelência técnica e visão empreendedora para transformar desafios jurídicos em oportunidades.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Entre em contato</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:554133225551" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-3">
                <span className="size-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="size-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                41 3322-5551
              </a>
              <a href="https://api.whatsapp.com/send?phone=5541991567228" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-3">
                <span className="size-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="size-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
                </span>
                41 99156-7228
              </a>
              <a href="mailto:melo@meloadvogados.com.br" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-3">
                <span className="size-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="size-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                melo@meloadvogados.com.br
              </a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Nos encontre</h4>
            <div className="flex flex-col gap-4">
              <a href="https://br.linkedin.com/company/meloadvogados" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:pl-2 transition-all duration-300 text-sm">LinkedIn</a>
              <a href="https://www.instagram.com/meloadvogados.associados/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:pl-2 transition-all duration-300 text-sm">Instagram</a>
              <a href="https://www.facebook.com/MeloAdvogados/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:pl-2 transition-all duration-300 text-sm">Facebook</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Acesso Rápido</h4>
            <div className="flex flex-col gap-4">
              <a href="https://meloadvogados.atlassian.net/servicedesk/customer/user/login" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                Portal do Cliente
                <svg viewBox="0 0 24 24" className="size-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/nossa-historia" className="text-white/80 hover:text-white transition-colors text-sm">Nossa História</a>
              <a href="/aliancas" className="text-white/80 hover:text-white transition-colors text-sm">Alianças Estratégicas</a>
              <a href="/carreiras" className="text-white/80 hover:text-white transition-colors text-sm">Carreiras</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Melo Advogados Associados. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="https://modallab.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              Desenvolvido por Modal Lab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
