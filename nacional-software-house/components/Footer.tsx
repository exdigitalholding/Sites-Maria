import { MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo";
import { nav, site, whatsappHref, wa } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 border-b border-line pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-text-dim">
              Você imagina, a gente constrói. Sites, sistemas e produtos digitais
              com Inteligência Artificial e um time de excelência.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappHref(wa.rodape)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-[13px] font-semibold text-[#04120b] transition-colors hover:bg-green-bright"
              >
                <MessageCircle size={16} fill="currentColor" />
                Falar no WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[13px] font-medium text-text transition-colors hover:border-green/50"
              >
                <Mail size={16} strokeWidth={2.5} />
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-faint">
              Navegar
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-[15px] text-text-dim transition-colors hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-faint">
              Frases que valem
            </span>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] text-text-dim">
              <li>IA acelera. Gente garante.</li>
              <li>Do oi ao site no ar, em semanas.</li>
              <li>Se você descreve, a gente constrói.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-text-faint">
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="font-mono text-[11px] text-text-faint">
            A partir de {site.priceFrom} · {site.installments} · V1 em{" "}
            {site.firstVersionDays}
          </p>
        </div>
      </div>
    </footer>
  );
}
