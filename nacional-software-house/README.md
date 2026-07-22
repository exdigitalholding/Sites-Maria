# Nacional Software House

Landing page one-page dark-tech para a Nacional Software House. Next.js 16 + React 19 + TypeScript + Tailwind v4, com scroll-telling (GSAP + Lenis), profundidade 3D (Three.js) e micro-interações (Motion).

## Rodar

Requisitos: Node.js 20 ou mais recente e Yarn 1.22.22.

```bash
yarn install
yarn dev       # http://localhost:3000
yarn build     # build de produção
yarn start     # servir o build
```

Depois da primeira instalação, normalmente basta entrar nesta pasta e executar
`yarn dev`.

## Qualidade

```bash
yarn lint
yarn typecheck
yarn validate  # executa lint e verificação de tipos
```

## Arquitetura

- `app/` — layout, página, fontes (Space Grotesk / Inter Tight / JetBrains Mono), `globals.css` (design system dark travado, tokens de marca).
- `components/` — uma seção por arquivo.
- `hooks/` — detecção reutilizável de recursos disponíveis no navegador.
  - `HeroSequence` — sequência de 121 frames em `<canvas>`, dirigida por scroll (GSAP ScrollTrigger, sincronizado com Lenis).
  - `Process` — o "coração": scroll horizontal (pinned) das 7 etapas, com fallback vertical em `prefers-reduced-motion`.
  - `ThreeScene` — campo de partículas + wireframe em WebGL (só monta se houver suporte a WebGL).
  - `TiltCard` / `MagneticButton` — profundidade no eixo Z e botões magnéticos (motion values, sem re-render).
- `lib/site.ts` — TODO o conteúdo e config num só lugar.

## O que você precisa trocar (placeholders)

1. **`lib/site.ts` → `whatsapp`** — número real (formato `55DDDNÚMERO`).
2. **`lib/site.ts` → `email`** — e-mail real.
3. **`public/hero-frames/`** — a sequência atual mostra uma fachada com a marca "MELO advogados" (veio da referência). Troque pelos SEUS frames (mesmo padrão `frame_000.webp` … `frame_120.webp`, 121 quadros). Basta substituir os arquivos.
4. **Cards de "O que fazemos"** — marcador "IMAGEM DO PROJETO" (Capabilities).
5. **Seção "O que a gente entrega" (ZoomParallax)** — 6 tiles com zoom no scroll, cada um marcado com um rótulo. Troque por prints reais.
6. **Seção "Ideias que viraram produto" (Showcase)** — galeria com swipe; cada card tem "imagem do projeto". Coloque os mockups reais.
7. **`public/brand/nacional-logo-white.png`** — sua logo original salva aqui.

## Seções imersivas (o "wow")

- **HeroSequence** — sequência de frames no scroll.
- **ZoomParallax** — imagens que dão zoom conforme o scroll (estilo Apple), leve no mobile (só transform).
- **CoverflowShowcase** — carrossel 3D coverflow dirigido por scroll: os cards giram num arco e recuam no eixo Z (rotateY + translateZ + blur + scale). Sticky + useScroll (suave no mobile, sem hijack) e tilt de mouse no desktop.
- **IdeaAlive** — objeto 3D distorcido que o usuário **arrasta e gira** (touch no mobile, via Three.js + OrbitControls). Degrada para um orbe CSS se o aparelho não tiver WebGL.
- **Process** — pin horizontal (desktop) e swipe nativo (mobile).

## Mobile

Textos enxutos, textos secundários escondidos no mobile, alturas com `100dvh`, o campo de partículas ambiente do Manifesto é desktop-only (o orbe interativo é o momento 3D do mobile) e o Process troca o scroll-hijack por swipe nativo no celular.

## Notas de marca

- Tema dark travado (logo branco precisa de fundo escuro).
- Acento principal: verde `#12b76a` (do logo). Ouro `#f5b921` usado com parcimônia (barras + gradientes).
- Sem travessões (—) em nenhum texto, por regra de design.
