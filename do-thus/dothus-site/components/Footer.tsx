import { Wordmark } from "./Logo";
import { NAV } from "@/lib/content";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line bg-abyss-2 py-14">
      <div className="container-do flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Wordmark className="text-2xl" tagline />
          <p className="mt-5 text-sm leading-relaxed text-text-faint">
            Inteligência em Gestão. Unimos gestão, tecnologia e IA para decisões
            mais inteligentes.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-text-faint">
            Navegação
          </span>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-text-dim transition-colors hover:text-snow"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container-do mt-12 flex flex-col gap-2 border-t border-line/60 pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} do.thus · Inteligência em Gestão. Todos os direitos reservados.</p>
        <p>Tecnologia, Sistemas e Inteligência de Dados · SaaS / B2B</p>
      </div>
    </footer>
  );
}
