# LIST — Site da Agência

Site institucional da **Agência LIST** (Curitiba/PR) construído com Next.js 15 (App Router), React 19 e Tailwind CSS v4.

A direção de arte mistura tipografia editorial (Fraunces) com sans tight (Inter Tight) e mono (JetBrains Mono), patterns SVG (grid, pontos, xadrez, listras), grão de filme, marquees infinitos, custom cursor com mix-blend-mode e reveal-on-scroll — referências: Locomotive, Active Theory, Pentagram, Mubien.

## Stack

- Next.js 15 · App Router · React 19
- Tailwind CSS v4 (sem `tailwind.config.js`, tudo no [globals.css](app/globals.css))
- TypeScript estrito
- Fontes via `next/font/google` — zero CLS, com axes variáveis em Fraunces

## Rodar localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## Estrutura

```
app/
  globals.css        — tokens de cor, padrões SVG, cursor, marquee, animações
  fonts.ts           — next/font (Fraunces / Inter Tight / JetBrains Mono)
  layout.tsx         — chrome global (grain, cursor, reveal observer)
  page.tsx           — compõe as 9 seções da home
components/
  Cursor.tsx         — custom cursor com lerp + mix-blend-mode difference
  Reveal.tsx         — IntersectionObserver para .reveal → .is-visible
  Marquee.tsx        — ticker infinito CSS puro
  Nav.tsx            — navbar flutuante com relógio CWB
  Hero.tsx           — tipografia massiva + badge giratório + placeholder
  MarketingTicker.tsx— marquee de tags com estrelas
  Manifesto.tsx      — manifesto + métricas
  Services.tsx       — bento grid asymétrico (6 serviços)
  Specialties.tsx    — grid dark com 7 mercados verticais
  Diagnostic.tsx     — 3 etapas com numeração editorial
  WhyList.tsx        — 4 razões em fundo verde-ácido
  CTAFinal.tsx       — CTA central massivo
  Footer.tsx         — marquee + endereço + redes + tipo gigante
  Placeholder.tsx    — substituível por <Image /> (ver IMAGES.md)
public/
  images/            — colocar fotos reais aqui
```

## Paleta

| Token   | Hex      | Uso |
|---------|----------|-----|
| bone    | #F2EDE4  | fundo principal |
| cream   | #E8DFCE  | secundário quente |
| ink     | #0A0A0A  | texto / fundo dark |
| smoke   | #161616  | dark suave |
| acid    | #D6FF2F  | acento elétrico (CTA, sections) |
| signal  | #FF4719  | acento alerta / hover |
| violet  | #5B3DF5  | placeholder + acento criativo |
| mauve   | #C9C0E8  | apoio frio |

## Imagens

O site está com placeholders gráficos em todos os pontos onde haveria foto. Para trocar, veja **[IMAGES.md](IMAGES.md)** — inventário completo, sugestões de direção de arte e snippet pronto com `<Image>` do Next.

## Acessibilidade

- Foco visível em todos os controles (Tailwind padrão + cursor difference)
- `prefers-reduced-motion` respeitado (cursor, grain, marquee desativam)
- Contraste mínimo 4.5:1 em todos os pares texto/fundo
- Custom cursor desativado em dispositivos touch (`pointer: coarse`)
- Alt text obrigatório quando trocar placeholders por `<Image>`

## Próximos passos sugeridos

1. Substituir placeholders por fotografia real (ver IMAGES.md)
2. Plugar formulário do diagnóstico (sugestão: Resend + server action)
3. Adicionar OG image customizada (`app/opengraph-image.tsx`)
4. Plausible / GA via `next/script` em layout
5. Sitemap + robots via `app/sitemap.ts`

## Crédito

Direção de arte: paleta cream + acentos elétricos · tipografia editorial · patterns SVG · grain de filme · custom cursor.
