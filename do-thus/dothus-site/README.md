# do.thus — Site institucional

Landing page única (one-page) da **do.thus — Inteligência em Gestão**.
Estética minimalista e cinematográfica inspirada na Apple (menos é mais,
scroll interativo, fundo animado no lugar de vídeo), 100% fiel à identidade
visual do manual da marca.

## Stack
- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4 (design tokens em `app/globals.css`)
- `motion` (Framer Motion) para reveals, parallax e text-reveal
- Lenis (smooth scroll)
- Canvas 2D nativo (`components/DataField.tsx`) para o fundo "campo de dados"
- Lucide Icons

## Rodar
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run validate   # lint + typecheck
```

## Identidade (do manual da marca)
- **Azul Carbono** `#0B192C` · **Azul Absoluto** `#050C16` — peso institucional
- **Cinza Grafite** `#2A3647` · **Cinza Estrutura** `#F4F6F9` · **Branco** `#FFFFFF`
- **Azul Elétrico** `#00D2FF` — acento (regra 60-30-10): só CTAs e palavras-chave
- O ponto da logo é sempre Azul Elétrico. Nunca preto puro.
- Tipografia: Space Grotesk (display) · Manrope (corpo) · Newsreader itálico (editorial)

## Estrutura da página (`app/page.tsx`)
Hero → Manifesto → Problema → União (Gestão+Tecnologia) → Método+Clientes →
Soluções → Showcase (Dashboards / IA / Automações) → Diferenciais → Contato → Footer.

Todo o conteúdo (copy, contatos, clientes, método) vive em `lib/content.ts`.

## A fazer antes do deploy
- Substituir o wordmark em texto pelo SVG oficial da logo, se desejado
  (hoje é reproduzido fielmente em `components/Logo.tsx`).
- Confirmar os números de WhatsApp em `lib/content.ts`.
- Adicionar OG image em `app/` (`opengraph-image.png`) e domínio real em `layout.tsx`.
- Deploy na Vercel (projeto pronto para build imediato).
