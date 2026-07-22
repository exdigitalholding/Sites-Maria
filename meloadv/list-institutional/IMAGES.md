# Substituição das imagens placeholder

O site usa o componente [`<Placeholder />`](components/Placeholder.tsx) em todos os pontos onde haveria uma imagem real. Cada bloco tem um atributo `data-placeholder` (e um label visível no canto) indicando o que deve entrar ali.

Como trocar — passo a passo
---------------------------

1. Salve a imagem real em [`public/images/`](public/images/) — use `.webp` ou `.avif` quando possível.
2. No arquivo correspondente (lista abaixo), troque:

   ```tsx
   import Placeholder from "./Placeholder";
   ...
   <Placeholder variant="violet" label="hero-art" ratio="aspect-[6/5]" />
   ```

   por:

   ```tsx
   import Image from "next/image";
   ...
   <div className="relative aspect-[6/5] overflow-hidden rounded-3xl">
     <Image
       src="/images/hero-art.webp"
       alt="Texto descritivo da imagem"
       fill
       priority   /* só no hero */
       sizes="(max-width: 768px) 100vw, 50vw"
       className="object-cover"
     />
   </div>
   ```

3. Mantenha o mesmo `aspect-ratio` para não quebrar o layout.

Inventário dos placeholders
---------------------------

| Componente | Label | O que precisa entrar | Sugestão de direção |
|---|---|---|---|
| [Hero.tsx](components/Hero.tsx) | `hero-art` | Imagem-chave do site, 5:6 ou 6:5 | Retrato editorial em alto contraste, paleta violeta + grain, foto de equipe / ambiente da agência, ou colagem abstrata. **Esta é a imagem mais importante.** |
| [Services.tsx](components/Services.tsx) | `service / s/01` — Conteúdo | 4:3 | Mood: tipografia + textura papel. Foto de notebook escrevendo, prancheta, board de pauta. |
| [Services.tsx](components/Services.tsx) | `service / s/02` — Copywriting | 4:3 | Detalhe macro de máquina de escrever, marcação em texto físico, caderno aberto. |
| [Services.tsx](components/Services.tsx) | `service / s/03` — Tráfego Pago | 4:3 | Dashboard de métricas (estilizado), gráficos abstratos, neon. |
| [Services.tsx](components/Services.tsx) | `service / s/04` — Estratégia | 4:3 | Foto B&W de reunião, post-its, mapeamento em parede de vidro. |
| [Services.tsx](components/Services.tsx) | `service / s/05` — Branding | 4:3 | Mockup de identidade visual, cartão, papelaria, pantone. |
| [Services.tsx](components/Services.tsx) | `service / s/06` — Consultoria | 4:3 | Reunião 1:1, dois cafés, fluxograma feito à mão. |
| [Specialties.tsx](components/Specialties.tsx) | `gastronômico` (destaque, 2x2) | quadrada ou alta | Cozinha em alta resolução, prato autoral, vapor. |
| [Specialties.tsx](components/Specialties.tsx) | `indústrias` | 4:5 | Ambiente fabril, máquinas em B&W. |
| [Specialties.tsx](components/Specialties.tsx) | `imobiliário` | 4:5 | Fachada arquitetônica minimalista. |
| [Specialties.tsx](components/Specialties.tsx) | `advocacia` | 4:5 | Detalhe de balança, livro, mãos. |
| [Specialties.tsx](components/Specialties.tsx) | `contabilidade` | 4:5 | Mesa com calculadora vintage, planilha física. |
| [Specialties.tsx](components/Specialties.tsx) | `saúde` | 4:5 | Consultório, jaleco, atmosfera clean. |
| [Specialties.tsx](components/Specialties.tsx) | `estética automotiva` | 4:5 | Carro em detalhe macro, brilho, espuma, polidora. |
| [Diagnostic.tsx](components/Diagnostic.tsx) | `diagnostic-cover` | 4:5 | Composição editorial: relatório aberto, post-its, gráfico, mãos analisando. |

Variantes / paleta dos placeholders atuais
------------------------------------------

Caso queira só recolorir um placeholder específico (ex. trocar uma cor que não combina com a imagem final escolhida), use o prop `variant`:

- `violet` — fundo violeta + padrão de pontos
- `signal` — fundo laranja-sinal + grid
- `acid` — fundo verde-ácido + grid
- `mauve` — lavanda suave + pontos
- `dark` — preto + grid (modo noturno)
- `checker` — xadrez clássico
- `grid` — creme + grid técnico
- `lines` — listras diagonais

Dica de direção de arte
-----------------------

A identidade pede tratamento editorial: **alto contraste, grão de filme, recortes assimétricos**. Evite imagens "stock corporativo" (apertos de mão, headsets). Prefira fotografias com mood, texturas táteis, recortes inusitados — o tipo de direção que se vê em Pentagram, Mubien, Locomotive Studio. Se faltar fotografia própria, vale mais manter o placeholder gráfico do que entrar com stock genérico.
