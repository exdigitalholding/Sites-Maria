# Documentação Completa do Site — Melo Advogados Associados

**Domínio:** https://meloadvogados.com.br  
**Desenvolvido por:** Modal Lab (https://modallab.com.br/)  
**Plataforma/Builder identificado:** WordPress + Oxygen Builder (classes `oxygen-*`, slider `unslider`)  
**Segmento:** Escritório de advocacia — Direito Tributário, Societário e Empresarial  
**Localização:** Curitiba – PR (atendimento em todo o Brasil)

---

## 1. IDENTIDADE VISUAL (Design System)

### 1.1 Tipografia
| Uso | Fonte |
|-----|-------|
| Títulos / Headings (H1, H2, H3) | **Libre Baskerville** (serifada) |
| Corpo de texto / parágrafos / menu | **Work Sans** (sans-serif) |

> Observação: títulos usam serifada elegante (Libre Baskerville) transmitindo tradição; textos usam Work Sans para leitura moderna.

### 1.2 Paleta de Cores (extraída via CSS computado)
| Cor | HEX aprox. | RGB | Uso |
|-----|-----------|-----|-----|
| Dourado/Ouro (marca) | `#978341` | rgb(151,131,65) | Cor institucional principal, títulos em destaque, ícones, hover de menu |
| Dourado escuro | `#716231` | rgb(113,98,49) | Variação / gradientes |
| Cinza chumbo (texto) | `#404040` | rgb(64,64,64) | Cor padrão do corpo de texto |
| Preto | `#000000` | rgb(0,0,0) | Títulos, contrastes |
| Azul petróleo escuro | `#174C66` | rgb(23,76,102) | Rodapé / faixas de seção |
| Azul petróleo médio | `#227397` | rgb(34,115,151) | Detalhes / faixas |
| Azul link padrão | `#0000EE` | rgb(0,0,238) | Botões CTA (ex.: "Fale com a nossa equipe") |
| Bege claro | `#F3E8BE` | rgb(243,232,190) | Fundos suaves de seção |
| Amarelo-ouro claro | `#F0D061` | rgb(240,208,97) | Sobreposição diagonal do banner hero |
| Cinza claro fundo | `#F0F0F0` | rgb(240,240,240) | Fundos de seção |
| Branco | `#FFFFFF` | rgb(255,255,255) | Fundos e textos sobre imagem |

### 1.3 Gradientes / Sobreposições
- **Gradiente de seção base:** `linear-gradient(rgb(238,238,238), rgb(255,255,255) 40%)` — do cinza claro (#EEEEEE) para o branco.
- **Hero da Home:** imagem de fundo (armazém/logística) com **sobreposição diagonal dourada semitransparente** (formato de "recorte" em ângulo, cor amarelo-ouro rgb(240,208,97) sobre a imagem).
- **Hero de artigos (posts):** faixa retangular sólida em **dourado (#978341)** cobrindo o topo, com título e data centralizados em branco.
- **Hero "Nossa História":** imagem em P&B (fundadores) com overlay escuro; título em dourado.
- **Hero "Notícias/Insights":** foto de estante de livros com overlay escuro/sépia; título dourado.

### 1.4 Elementos recorrentes
- **Logo:** símbolo de coluna/capitel clássico + "MELO / Advogados Associados" (tipografia serifada, cor dourada/preta). Sempre no topo à esquerda, linkando para a Home (`/`).
- **Menu:** botão hambúrguer (☰) no canto superior direito que abre um **menu overlay** (painel cinza claro deslizante, itens alinhados à direita, item ativo em dourado). Fecha com "✕".
- **Cookie banner:** faixa com botão **"Eu Concordo"** (atenção: `href="http://"` — link vazio/quebrado).
- **Rodapé:** faixa azul petróleo (#174C66) com contatos, redes sociais e assinatura "Desenvolvido por Modal Lab".

---

## 2. NAVEGAÇÃO GLOBAL (Menu Principal)

Botão hambúrguer → abre overlay com os itens:

| Item de menu | Slug / URL | Destino |
|--------------|-----------|---------|
| Home | `/` | Página inicial |
| Nossa História | `/nossa-historia/` | Página institucional / linha do tempo |
| Alianças | `/aliancas/` | Página de parcerias |
| Áreas de Atuação | `/servicos-juridicos-tributarios/` | Página de serviços |
| Notícias | `/noticias-tributarias/` | Blog / listagem de artigos |
| Carreiras | `/carreiras/` | Trabalhe conosco |
| Ações Coletivas | `/acoes-coletivas/` | Página de ações coletivas |
| Portal do Cliente | Atlassian Service Desk* | Login externo do cliente |

\* **Portal do Cliente:** `https://meloadvogados.atlassian.net/servicedesk/customer/user/login` (área de suporte/ticket externa, hospedada no Atlassian). *No link do menu há erro `http://` duplicado — corrigir.*

---

## 3. RODAPÉ GLOBAL (presente em todas as páginas)

**Título:** "Entre em contato"

| Elemento | Valor | Link |
|----------|-------|------|
| Telefone fixo | 41 3322-5551 | `tel:554133225551` |
| WhatsApp / celular | 41 99156-7228 | `https://api.whatsapp.com/send?phone=5541991567228` |
| E-mail | melo@meloadvogados.com.br | `mailto:melo@meloadvogados.com.br` |

**Subtítulo:** "Nos encontre nas redes sociais"

| Rede | URL |
|------|-----|
| Facebook | `https://www.facebook.com/MeloAdvogados/` |
| Instagram | `https://www.instagram.com/meloadvogados.associados/` |
| LinkedIn | `https://br.linkedin.com/company/meloadvogados` |

**Assinatura:** "Desenvolvido por Modal Lab" → `https://modallab.com.br/`

---

## 4. TELAS / PÁGINAS

---

### 4.1 HOME — `/`
**Title (SEO):** "Home - Melo Advogados - Advocacia - Atendemos todo o Brasil."

#### Seção Hero (Carrossel — 4 slides, autoplay)
- Estrutura: slider `unslider` com autoplay, 4 slides (paginação por bolinhas "1 2 3 4"), setas **Prev / Next**.
- **Slide 1 (capturado):**
  - Título: "Advocacia Tributária em Curitiba: Recuperação de impostos com segurança e tecnologia"
  - Texto: "Escritório de advocacia em Curitiba, especializado em direito tributário, societário e empresarial. Atuamos com estratégias de defesa fiscal e planejamento tributário, além da estruturação societária e da assessoria corporativa, para proteger patrimônio, reduzir riscos e sustentar o crescimento das empresas."
- Slides 2, 3 e 4: mesmo layout (fundo com overlay diagonal dourado); variam título/imagem. *(carregam dinamicamente)*

#### Seção "Planejamento e gestão tributária para empresas"
- Subtítulo: "Recupere créditos, reduza passivos e otimize sua carga fiscal com segurança jurídica."
- **4 cards de serviço** (cada um com sigla, título e botão "Saiba Mais"):

| Card | Sigla | Título | Texto | Botão → |
|------|-------|--------|-------|---------|
| 1 | RJT | Recuperação Judicial de Tributos | "Recupere impostos pagos indevidamente com segurança jurídica. Utilizamos a via judicial para reaver créditos fiscais, transformando tributos em caixa para sua empresa." | Saiba Mais → `/servicos-juridicos-tributarios/` |
| 2 | RAT | Recuperação Administrativa de Tributos | "Quer reembolso de impostos sem acionar a justiça? Atuamos diretamente com os órgãos competentes para recuperar créditos fiscais de forma ágil e eficiente." | Saiba Mais |
| 3 | GPT | Gestão de Passivo Tributário | "Evite bloqueios e execuções fiscais. Com nossa gestão ativa de passivos tributários, sua empresa ganha fôlego financeiro e proteção patrimonial." | Saiba Mais |
| 4 | CAT | Consultoria e Assessoria Tributária | "Planeje seus impostos com inteligência. Nossa consultoria ajuda sua empresa a economizar, evitar riscos e manter total conformidade com a legislação." | Saiba Mais |

> ⚠️ Na versão atual os botões "Saiba Mais" da home apontam para `/somos-especialistas/` (404). Recomendado apontar para `/servicos-juridicos-tributarios/`.

#### Seção "A força da Melo em números"
- **+65** Anos de história
- **+300** Escritórios parceiros em todo o Brasil
- **+160** Entidades parceiras

#### Seção institucional (texto)
- Parágrafo: "Somos um escritório de advocacia em Curitiba, com atuação integrada em três frentes: no direito tributário, com soluções em planejamento, recuperação de tributos e defesa fiscal; no direito societário, com foco em governança, acordos de sócios e planejamento patrimonial e sucessório; e no direito empresarial, com assessoria contínua às demandas corporativas. Nossa experiência alia técnica, tecnologia e visão estratégica para proteger o patrimônio, reduzir riscos e sustentar o crescimento das empresas."
- **Botão:** "Conheça nossas especialidades" → `/insights/` (⚠️ hoje 404)

#### Seção "Rede de alianças estratégicas"
- Texto: "Nossa rede de parceiros oferece o suporte necessário para que você possa gerar mais valor para seus clientes, com o conhecimento de um time especialista e a força de uma comunidade que cresce em conjunto."
- Frase de mapa: "A Melo Advogados está em:" (provável mapa/estados interativo)
- **Botão:** "Conheça nossas alianças" → `/aliancas/`

#### Seção "Melo Advogados: advocacia empresarial com propósito."
- Textos:
  - "Na Melo Advogados, nossa história e inovação caminham juntas. Atuamos com um espírito empreendedor, proativos e focados em entregar mais do que o esperado para cada cliente."
  - "Nossa experiência em Direito Tributário é a base do nosso trabalho, mas nossa atuação se estende também ao direito societário e empresarial."
  - "Acreditamos que, ao defender a saúde fiscal, estruturar relações societárias e fortalecer a rotina corporativa, contribuímos para empresas mais sólidas e para um mercado mais justo e próspero. Aqui, você encontra uma advocacia que valoriza sua voz e transforma cada desafio em oportunidade de crescimento."
- **Botão:** "Conheça nossa história" → `/nossa-historia/`

#### Seção "Entidades de Classe parceiras"
- Texto: "Mais de 160 entidades de classe confiam na Melo Advogados"
- **Botão:** "Conheça todas as entidades parceiras" → `/acoes-coletivas/`

#### Seção "Insights em destaque" (3 últimos posts)
| Post | Data | Chamada | Link |
|------|------|---------|------|
| Retrospectiva Tributária do STJ: julgamentos 2025 e pauta 2026 | 13 de janeiro de 2026 | "A 1ª Seção do Superior Tribunal de Justiça (STJ) encerrou o ano judiciário de 2025 com um volume recorde de […]" | `/retrospectiva-tributaria-do-stj/` |
| Créditos PIS Cofins Combustíveis: STJ Reafirma Proibição em Produtos Monofásicos | 1 de dezembro de 2025 | "A proibição de utilização de Créditos PIS Cofins Combustíveis em produtos sujeitos à tributação monofásica […]" | `/creditos-pis-cofins-combustiveis/` |
| Regras do Rearp: Lei nº 15.265 institui atualização e regularização patrimonial | 27 de novembro de 2025 | "A Lei nº 15.265, de 21 de novembro de 2025, estabeleceu oficialmente as regras do Rearp […]" | `/regras-do-rearp/` |

Cada card com botão **"Saiba Mais"**.
- **Botão da seção:** "Acompanhe as últimas notícias" → `/insights/` (⚠️ hoje 404 — apontar para `/noticias-tributarias/`)

#### Rodapé (ver Seção 3)

---

### 4.2 NOSSA HISTÓRIA — `/nossa-historia/`
**Title:** "Nossa História - Melo Advogados - 60 anos de Tradição."

#### Hero
- Fundo: foto P&B dos fundadores, overlay escuro.
- Título: "São mais de 60 anos de história"
- Subtítulo: "Tradição, excelência técnica e visão empreendedora para transformar desafios jurídicos em oportunidades para empresas em todo o Brasil."
- **Botão CTA (azul):** "Fale com a nossa equipe." *(destino de contato — WhatsApp/formulário)*

#### Bloco introdutório (texto)
- "Desde a fundação por Dr. Moacir de Melo, em 1960, a Melo Advogados se desenvolveu de um escritório no interior do Paraná para um dos principais nomes do Direito Empresarial e Tributário no Brasil. Ao longo de mais de seis décadas, expandimos com solidez e propósito, conectando uma equipe de mais de 100 profissionais, 300 escritórios parceiros e 160 entidades em todo o país."
- + 3 parágrafos sobre excelência, atuação além do contencioso, e tradição + inovação.
- Frase de destaque: "Uma história construída com coragem, visão e resultados."

#### Linha do Tempo (Timeline)
| Ano | Marco |
|-----|-------|
| 1960 | O início — Moacir de Melo, recém-formado pela UFPR, inicia a carreira. |
| 1978 | A primeira sede própria em União da Vitória. |
| 1987 | Expansão para a capital — filial em Curitiba. |
| *(divisor)* | **Excelência e foco em direito tributário** |
| 2003 | Reconhecimento nacional — entre as 40 melhores advocacias do país. |
| 2005 | Prêmio Top of Mind Brazil (INBRAP). |
| 2006 | As primeiras ações coletivas tributárias. |
| *(divisor)* | **Referência em Direito Tributário** |
| 2012 | Consolidação na área tributária. |
| 2017 | Sede estratégica em Curitiba (foco tributário). |
| *(divisor)* | **Especialistas em Ações Coletivas Tributárias** |
| 2020 | A "Tese do Século" (exclusão do ICMS da base do PIS/COFINS). |
| 2021 | Expansão nacional (SC, SP, MS) — +100 parceiros, 50 entidades. |
| 2022 | Alianças com APRAS e SETCEPAR. |

- Frase de destaque final: "Acreditamos no poder dos negócios e do empreendedorismo como meio de tornar o mundo um lugar mais justo e próspero"

#### Seção "Entidades de Classe parceiras"
- "Mais de 160 entidades de classe confiam na Melo Advogados" *(provável carrossel de logos)*

#### Rodapé (ver Seção 3)

---

### 4.3 ALIANÇAS — `/aliancas/`
**Title:** "Alianças Estratégicas - Melo Advogados - Curitiba - PR."

#### Hero
- Título: "Impulsione seu escritório com uma aliança estratégica em Direito Tributário."
- Texto: "Seja parte de uma aliança que transforma conhecimento técnico em oportunidades reais. Atuamos junto a contabilidades e escritórios parceiros para gerar novos negócios e entregar resultados estratégicos para seus clientes."

#### Bloco "Uma ponte entre especialistas tributários e empresas…"
- "As alianças representam parcerias estratégicas com contabilidades e escritórios que acompanham de perto a realidade tributária das empresas."
- "A partir desse olhar, somamos nossa expertise para estruturar planejamentos e ações de recuperação de tributos, tanto na esfera judicial quanto administrativa, sempre com segurança técnica, estratégia clara e execução eficiente."

#### Seção "Por que se aliançar à Melo?"
- Subtítulo: "+60 anos de experiência, tecnologia de ponta e uma rede que gera negócios."
- **4 blocos de diferenciais:**
  1. **Expertise tributária consolidada** — "Com mais de 60 anos de história, somos especialistas em Direito Tributário. Nossa equipe interna de advogados tributaristas e profissionais fiscais respira o assunto diariamente…"
  2. **Tecnologia exclusiva** — "…automações, robôs e inteligência artificial para otimizar o fluxo de trabalho e fornecer informações fiscais precisas…"
  3. **Atendimento estratégico e transparente** — "…portal exclusivo e atualizações via WhatsApp… análises e relatórios visuais sobre as mudanças relevantes na legislação tributária."
  4. **Rede de networking** — "A rede de alianças da Melo Advogados conecta mais de 130 escritórios, criando um ecossistema único de oportunidades…"

#### Seção "Experiências que fortalecem nossa rede" (Depoimentos)
- Subtítulo: "Confira como nossos parceiros têm expandido seus negócios e conquistado resultados ao lado da Melo Advogados."
- **Depoimentos (carrossel):**
  1. Dra. Bianca Regina Rodrigues da Silva – Escritório Mariano Advocacia
  2. Vitor Torres – Contador do Escritório X – Capital
  3. Luís Eduardo Laraya Barreto – Empresário atuante na região de Curitiba
  4. Mirandir Bonissoni – Contador do Escritório Condor de Contabilidade
  5. Dr. Gustavo Pedron da Silveira – Advogado atuante na região de Curitiba
  *(textos completos dos depoimentos preservados na página original)*

#### CTA final
- Frase: "Você também acredita no poder dos negócios em transformar o mundo?"
- **Botão:** "Entre em contato para entender nosso modelo de aliança" *(→ contato/WhatsApp)*

#### Rodapé (ver Seção 3)

---

### 4.4 ÁREAS DE ATUAÇÃO / SERVIÇOS — `/servicos-juridicos-tributarios/`
**Title:** "Serviços Jurídicos Tributários - Melo Advogados - Atendemos todo o Brasil."

#### Hero
- Título: "Advocacia tributária estratégica para o crescimento do seu negócio."
- Texto: "Como especialistas em Direito Tributário, dedicamos todos os nossos esforços em uma única direção. Nosso Núcleo Tributário é composto por uma equipe focada em soluções completas, desde a recuperação de tributos até o planejamento e a gestão de passivos da sua empresa."

#### Bloco "Núcleo Tributário" (introdução)
- 2 parágrafos sobre recuperação de tributos (via administrativa/judicial) e assessoria jurídica/contábil.

#### Blocos de Serviços (4 — RJT, RAT, GPT, CAT)
| Sigla | Serviço | Descrição resumida |
|-------|---------|--------------------|
| RJT | Recuperação Judicial de Tributos | "…discute, na esfera judicial, a legalidade de majorações indevidas e busca reaver tributos pagos a maior. Com apoio de tecnologia jurídica… restituição por depósito em conta ou compensação…" |
| RAT | Recuperação Administrativa de Tributos | "…análise detalhada dos documentos fiscais… cruzamento de dados para identificar créditos… recuperar valores pagos indevidamente nos últimos cinco anos, sem necessidade de ação judicial." |
| GPT | Gestão de Passivo Tributário | "…identificar riscos, renegociar dívidas, prevenir autuações e estruturar soluções que garantem maior previsibilidade financeira." |
| CAT | Consultoria e Assessoria Tributária | "…atua de forma preventiva, auxiliando na interpretação das normas, na estruturação de planejamentos e na correta classificação tributária." |

#### Seção "Diferenciais da Melo Advogados" (3 blocos)
1. **Tecnologia exclusiva** — robôs para captura de publicações, automações, IA para cruzamento de informações fiscais.
2. **Expertise tributária consolidada** — "Respiramos Direito Tributário há mais de 60 anos…"
3. **Atendimento estratégico e transparente** — portal exclusivo, notificações via WhatsApp, dashboards visuais (sem "PDFs longos").

#### Seção "Reforma tributária: Entendendo os impactos para sua empresa."
- 3 parágrafos explicando CBS e IBS (substituição de ICMS, ISS, IPI, PIS e COFINS) e a atuação consultiva do escritório.
- **Botão:** "Fale com nosso time" *(→ contato/WhatsApp)*

#### Rodapé (ver Seção 3)

---

### 4.5 NOTÍCIAS / BLOG — `/noticias-tributarias/`
**Title:** "Notícias Tributárias - Melo Advogados Curitiba -PR"

#### Hero
- Fundo: foto de estante de livros com overlay escuro/sépia.
- Título: "Insights tributários para a estratégia do seu negócio."
- Texto: "Fique por dentro das decisões, oportunidades e atualizações fiscais que impactam diretamente a sua empresa. Nosso blog é a sua fonte de informação para transformar conhecimento em segurança e crescimento."

#### Ferramentas de listagem
- **Barra de busca:** input com placeholder "Pesquisar …" e ícone de lupa.
- **Grade de artigos** (cards com título, data e "Saiba Mais").
- **Paginação:** páginas de 2 até **32** (`/noticias-tributarias/page/2/` … `/page/32/`). → blog extenso, ~32 páginas de posts.

#### Categorias de Blog por Segmento (páginas dedicadas)
| Categoria | Slug |
|-----------|------|
| Transportes | `/blog-transportes/` |
| Indústria | `/blog-industria/` |
| Mercados | `/blog-mercados/` |
| Comércio | `/blog-comercio/` |
| Agronegócio | `/blog-agronegocio/` |
| Serviços | `/blog-servicos/` |

#### Exemplos de posts individuais (slugs)
- `/retrospectiva-tributaria-do-stj/`
- `/creditos-pis-cofins-combustiveis/`
- `/regras-do-rearp/`
- `/alteracao-processo-administrativo-fiscal/`
- `/deducao-de-jcp/`
- `/pl-1087-2025/`
- `/edital-de-transacao-tributaria/`
- `/stj-veta-creditos-de-icms/`
- `/planejamento-sucessorio-com-herdeiros-menores/`
- `/stf-define-limites-do-itcmd-em-transmissoes-internacionais/`
- `/pgfn-2025-parcelamento-de-debitos-previdenciarios-para-municipios/`
- `/reforma-do-imposto-de-renda-novas-regras-para-dividendos-e-seus-efeitos-nas-empresas/`

#### Rodapé (ver Seção 3)

---

### 4.6 TEMPLATE DE ARTIGO / POST (ex.: `/regras-do-rearp/`)
**Title (padrão):** [Título do artigo]

#### Hero do post
- Faixa retangular sólida **dourada (#978341)** no topo.
- Título centralizado (Libre Baskerville, branco).
- **Data** de publicação centralizada abaixo (ex.: "27 de novembro de 2025").
- **Botões de compartilhamento social** (ícones redondos): Facebook, Twitter/X, LinkedIn, Tumblr.
  - Facebook: `http://www.facebook.com/sharer.php?u=[URL]`
  - Twitter: `http://twitter.com/share?url=[URL]&text=[TÍTULO]`
  - LinkedIn: `http://www.linkedin.com/shareArticle?mini=true&url=[URL]`
  - Tumblr: `http://www.tumblr.com/share/link?url=[URL]`

#### Corpo do artigo
- Texto com subtítulos H2/H3. Ex. (Rearp): "Atualização do valor de bens móveis e imóveis", "Regularização de bens e direitos não declarados", "Condições de pagamento e parcelamento", "Apoio jurídico especializado".

#### Seção "Recomendados"
- Bloco de posts relacionados ao final do artigo.

#### Rodapé (ver Seção 3)

---

### 4.7 CARREIRAS — `/carreiras/`
**Title:** "Carreiras - Melo Advogados"

#### Hero
- Título: "Por trás de cada estratégia, pessoas comprometidas com o seu resultado."
- Texto: "Profissionais movidos pelo inconformismo, pelo espírito empreendedor, e que acreditam que podemos sim mudar o mundo."

#### Bloco "Um time de especialistas dedicado ao seu sucesso."
- 2 parágrafos sobre atuação integrada (tributária, societária, empresarial) e visão estratégica.

#### CTA intermediário
- Frase: "Você também acredita no poder do empreendedorismo em mudar o mundo?"
- Frase: "Faça parte do time de especialistas da Melo Advogados."
- Parágrafo sobre propósito ("um mundo mais justo e próspero…").

#### Seção "Nossos Valores: O Que Buscamos em Você"
- Texto: "Procuramos profissionais que compartilhem dos nossos valores e atitudes. Mais do que um currículo, nos importamos com o seu espírito."
- **3 valores:**
  1. **VALOR 1 –
#### Seção "Nossos Valores: O Que Buscamos em Você"
- Texto: "Procuramos profissionais que compartilhem dos nossos valores e atitudes. Mais do que um currículo, nos importamos com o seu espírito."
- **3 valores (cards):**

| Card | Rótulo | Título | Texto |
|------|--------|--------|-------|
| 1 | VALOR 1 | **Pertencimento** | "Nós sonhamos grande e valorizamos quem acredita em um propósito comum. Buscamos pessoas que sejam abertas, respeitosas e que atuem com sinceridade e transparência. Na Melo Advogados, você faz parte de algo maior." |
| 2 | VALOR 2 | **Espírito empreendedor** | "Acreditamos que o inconformismo e a vontade de fazer mais nos levam a resultados excepcionais. Se você é proativo, está sempre em busca de aprender e trabalha com alegria, você já tem o que é preciso para fazer parte do nosso time de especialistas." |
| 3 | VALOR 3 | **Foco no cliente** | "Nossa busca pela excelência se traduz em um compromisso total com o cliente. Buscamos profissionais que pensam fora da caixa e que estão sempre dispostos a fazer mais do que o esperado para gerar valor e garantir o sucesso de cada negócio." |

#### CTA final
- **Botão:** "Envie seu currículo." *(destino de envio de currículo — provável e-mail `melo@meloadvogados.com.br` ou formulário; validar no site atual)*

#### Rodapé (ver Seção 3)

---

### 4.8 AÇÕES COLETIVAS — `/acoes-coletivas/`
**Title:** "Ações Coletivas - Melo Advogados"

#### Hero
- Título: "Defenda seu negócio da cobrança ilegal de impostos."
- Texto: "Há quase duas décadas, a Melo Advogados é a principal aliada de entidades de classe, defendendo os interesses de seus associados com ações coletivas tributárias. Nossa missão é clara: recuperar o que é seu por direito e garantir que seu negócio opere em um ambiente fiscal mais justo."

#### Seção "Como surge a cobrança ilegal de um imposto?"
- Parágrafo 1: "A cobrança de um imposto pode se tornar ilegal quando legisladores ou órgãos fiscais municipais, estaduais ou federais editam normas em desacordo com a Constituição Federal ou outras leis superiores. Mesmo sendo indevidas, essas cobranças muitas vezes persistem, causando prejuízos financeiros contínuos às empresas."
- Parágrafo 2: "A via judicial é o único caminho para interromper a exigência e recuperar os valores pagos indevidamente. Nesse cenário, nossa advocacia tributária atua de forma estratégica para transformar disputas em oportunidades de restituição e em maior segurança fiscal para as empresas."

#### Seção "O papel estratégico das entidades de classe"
- Texto: "Acreditamos no papel estratégico das entidades de classe, como associações, federações e sindicatos, na defesa de seus representados. Na Melo Advogados, atuamos em parceria com essas instituições para que teses tributárias relevantes cheguem ao Judiciário de forma organizada e representativa, fortalecendo a busca por um sistema fiscal mais justo e assegurando que as empresas estejam sempre um passo à frente."

#### Seção FAQ / Perguntas-chave (formato pergunta → resposta)
| Pergunta | Resposta |
|----------|----------|
| O que são Ações Coletivas Tributárias? | "As Ações Coletivas Tributárias são medidas judiciais propostas por entidades de classe em favor de seus associados. O objetivo é questionar a legalidade ou constitucionalidade de determinados tributos e assegurar a restituição dos valores pagos indevidamente por todos os integrantes da categoria representada." |
| Qual a principal vantagem de uma Ação Coletiva para minha empresa? | "Ao aderir, sua empresa passa a integrar uma defesa conduzida por especialistas, com custos compartilhados e redução de riscos. Além disso, por ser liderada por uma entidade de classe, a ação ganha ainda mais robustez e legitimidade." |
| Como sei se minha empresa é elegível para participar? | "A elegibilidade varia conforme a tese tributária e o segmento de atuação da empresa. Nossa equipe realiza uma análise criteriosa para identificar quais ações coletivas são efetivamente aplicáveis ao seu negócio, assegurando participação apenas em teses que correspondam à sua realidade." |

#### CTA final
- **Botão:** "Fale com o nosso time"
  - ⚠️ URL atual **quebrada**: `http://https//api.whatsapp.com/send?phone=5541991567228`.
  - **Corrigir para:** `https://api.whatsapp.com/send?phone=5541991567228`

#### Rodapé (ver Seção 3)

---

### 4.9 BLOG POR SEGMENTO (páginas de categoria)
Estrutura idêntica entre si (listagem de artigos filtrados por segmento). Cada uma tem Title próprio.

| Página | Slug | Title |
|--------|------|-------|
| Blog Transportes | `/blog-transportes/` | "Blog Transportes - Melo Advogados" |
| Blog Indústria | `/blog-industria/` | "Blog Indústria - Melo Advogados" |
| Blog Mercados | `/blog-mercados/` | "Blog Mercados - Melo Advogados" |
| Blog Comércio | `/blog-comercio/` | "Blog Comércio - Melo Advogados" |
| Blog Agronegócio | `/blog-agronegocio/` | "Blog Agronegócio - Melo Advogados" |
| Blog Serviços | `/blog-servicos/` | "Blog Serviços - Melo Advogados" |

- **Layout:** listagem de posts do segmento (cards com título/data/"Saiba Mais"), mesmo template visual do blog principal.
- Exemplo de conteúdo (Blog Transportes): abre com artigo sobre "Solução de Consulta nº 155/2023" (créditos de PIS e COFINS sobre despesas, combustível de máquinas, uniforme/fardamento, locação de equipamentos).

---

### 4.10 PÁGINA 404 (Não encontrada)
**Title:** "Página não encontrada - Melo Advogados"
- Exibida em rotas inexistentes.
- Mantém cabeçalho (logo + menu) e rodapé padrão.
- ⚠️ Links da Home que hoje caem em 404 e precisam ser corrigidos no novo site:
  - `/somos-especialistas/` (botões "Saiba Mais" dos 4 cards de serviço e botão do banner)
  - `/insights/` (botões "Conheça nossas especialidades" e "Acompanhe as últimas notícias")

---

### 4.11 PORTAL DO CLIENTE (externo)
- **URL:** `https://meloadvogados.atlassian.net/servicedesk/customer/user/login`
- Área de suporte/atendimento (Atlassian Jira Service Desk) — tela de login externa, fora do WordPress.
- ⚠️ No menu o link está como `http://` duplicado — corrigir.

---

## 5. MAPA COMPLETO DE SLUGS / URLs

### Páginas institucionais
/ → Home
/nossa-historia/ → Nossa História
/aliancas/ → Alianças
/servicos-juridicos-tributarios/ → Áreas de Atuação / Serviços
/noticias-tributarias/ → Notícias (blog principal)
/noticias-tributarias/page/2..32/ → Paginação do blog
/carreiras/ → Carreiras
/acoes-coletivas/ → Ações Coletivas

### Categorias de blog
/blog-transportes/
/blog-industria/
/blog-mercados/
/blog-comercio/
/blog-agronegocio/
/blog-servicos/
Aqui está a continuação do .md, a partir de onde parou (Seção 4.7 – "Nossos Valores") até o final do documento.
markdown
#### Seção "Nossos Valores: O Que Buscamos em Você"
- Texto: "Procuramos profissionais que compartilhem dos nossos valores e atitudes. Mais do que um currículo, nos importamos com o seu espírito."
- **3 valores (cards):**

| Card | Rótulo | Título | Texto |
|------|--------|--------|-------|
| 1 | VALOR 1 | **Pertencimento** | "Nós sonhamos grande e valorizamos quem acredita em um propósito comum. Buscamos pessoas que sejam abertas, respeitosas e que atuem com sinceridade e transparência. Na Melo Advogados, você faz parte de algo maior." |
| 2 | VALOR 2 | **Espírito empreendedor** | "Acreditamos que o inconformismo e a vontade de fazer mais nos levam a resultados excepcionais. Se você é proativo, está sempre em busca de aprender e trabalha com alegria, você já tem o que é preciso para fazer parte do nosso time de especialistas." |
| 3 | VALOR 3 | **Foco no cliente** | "Nossa busca pela excelência se traduz em um compromisso total com o cliente. Buscamos profissionais que pensam fora da caixa e que estão sempre dispostos a fazer mais do que o esperado para gerar valor e garantir o sucesso de cada negócio." |

#### CTA final
- **Botão:** "Envie seu currículo." *(destino de envio de currículo — provável e-mail `melo@meloadvogados.com.br` ou formulário; validar no site atual)*

#### Rodapé (ver Seção 3)

---

### 4.8 AÇÕES COLETIVAS — `/acoes-coletivas/`
**Title:** "Ações Coletivas - Melo Advogados"

#### Hero
- Título: "Defenda seu negócio da cobrança ilegal de impostos."
- Texto: "Há quase duas décadas, a Melo Advogados é a principal aliada de entidades de classe, defendendo os interesses de seus associados com ações coletivas tributárias. Nossa missão é clara: recuperar o que é seu por direito e garantir que seu negócio opere em um ambiente fiscal mais justo."

#### Seção "Como surge a cobrança ilegal de um imposto?"
- Parágrafo 1: "A cobrança de um imposto pode se tornar ilegal quando legisladores ou órgãos fiscais municipais, estaduais ou federais editam normas em desacordo com a Constituição Federal ou outras leis superiores. Mesmo sendo indevidas, essas cobranças muitas vezes persistem, causando prejuízos financeiros contínuos às empresas."
- Parágrafo 2: "A via judicial é o único caminho para interromper a exigência e recuperar os valores pagos indevidamente. Nesse cenário, nossa advocacia tributária atua de forma estratégica para transformar disputas em oportunidades de restituição e em maior segurança fiscal para as empresas."

#### Seção "O papel estratégico das entidades de classe"
- Texto: "Acreditamos no papel estratégico das entidades de classe, como associações, federações e sindicatos, na defesa de seus representados. Na Melo Advogados, atuamos em parceria com essas instituições para que teses tributárias relevantes cheguem ao Judiciário de forma organizada e representativa, fortalecendo a busca por um sistema fiscal mais justo e assegurando que as empresas estejam sempre um passo à frente."

#### Seção FAQ / Perguntas-chave (formato pergunta → resposta)
| Pergunta | Resposta |
|----------|----------|
| O que são Ações Coletivas Tributárias? | "As Ações Coletivas Tributárias são medidas judiciais propostas por entidades de classe em favor de seus associados. O objetivo é questionar a legalidade ou constitucionalidade de determinados tributos e assegurar a restituição dos valores pagos indevidamente por todos os integrantes da categoria representada." |
| Qual a principal vantagem de uma Ação Coletiva para minha empresa? | "Ao aderir, sua empresa passa a integrar uma defesa conduzida por especialistas, com custos compartilhados e redução de riscos. Além disso, por ser liderada por uma entidade de classe, a ação ganha ainda mais robustez e legitimidade." |
| Como sei se minha empresa é elegível para participar? | "A elegibilidade varia conforme a tese tributária e o segmento de atuação da empresa. Nossa equipe realiza uma análise criteriosa para identificar quais ações coletivas são efetivamente aplicáveis ao seu negócio, assegurando participação apenas em teses que correspondam à sua realidade." |

#### CTA final
- **Botão:** "Fale com o nosso time"
  - ⚠️ URL atual **quebrada**: `http://https//api.whatsapp.com/send?phone=5541991567228`.
  - **Corrigir para:** `https://api.whatsapp.com/send?phone=5541991567228`

#### Rodapé (ver Seção 3)

---

### 4.9 BLOG POR SEGMENTO (páginas de categoria)
Estrutura idêntica entre si (listagem de artigos filtrados por segmento). Cada uma tem Title próprio.

| Página | Slug | Title |
|--------|------|-------|
| Blog Transportes | `/blog-transportes/` | "Blog Transportes - Melo Advogados" |
| Blog Indústria | `/blog-industria/` | "Blog Indústria - Melo Advogados" |
| Blog Mercados | `/blog-mercados/` | "Blog Mercados - Melo Advogados" |
| Blog Comércio | `/blog-comercio/` | "Blog Comércio - Melo Advogados" |
| Blog Agronegócio | `/blog-agronegocio/` | "Blog Agronegócio - Melo Advogados" |
| Blog Serviços | `/blog-servicos/` | "Blog Serviços - Melo Advogados" |

- **Layout:** listagem de posts do segmento (cards com título/data/"Saiba Mais"), mesmo template visual do blog principal.
- Exemplo de conteúdo (Blog Transportes): abre com artigo sobre "Solução de Consulta nº 155/2023" (créditos de PIS e COFINS sobre despesas, combustível de máquinas, uniforme/fardamento, locação de equipamentos).

---

### 4.10 PÁGINA 404 (Não encontrada)
**Title:** "Página não encontrada - Melo Advogados"
- Exibida em rotas inexistentes.
- Mantém cabeçalho (logo + menu) e rodapé padrão.
- ⚠️ Links da Home que hoje caem em 404 e precisam ser corrigidos no novo site:
  - `/somos-especialistas/` (botões "Saiba Mais" dos 4 cards de serviço e botão do banner)
  - `/insights/` (botões "Conheça nossas especialidades" e "Acompanhe as últimas notícias")

---

### 4.11 PORTAL DO CLIENTE (externo)
- **URL:** `https://meloadvogados.atlassian.net/servicedesk/customer/user/login`
- Área de suporte/atendimento (Atlassian Jira Service Desk) — tela de login externa, fora do WordPress.
- ⚠️ No menu o link está como `http://` duplicado — corrigir.

---

## 5. MAPA COMPLETO DE SLUGS / URLs

### Páginas institucionais
/ → Home
 /nossa-historia/ → Nossa História
 /aliancas/ → Alianças
 /servicos-juridicos-tributarios/ → Áreas de Atuação / Serviços
 /noticias-tributarias/ → Notícias (blog principal)
 /noticias-tributarias/page/2..32/ → Paginação do blog
 /carreiras/ → Carreiras
 /acoes-coletivas/ → Ações Coletivas

### Categorias de blog
/blog-transportes/
 /blog-industria/
 /blog-mercados/
 /blog-comercio/
 /blog-agronegocio/
 /blog-servicos/

### Posts (exemplos)
/retrospectiva-tributaria-do-stj/
 /creditos-pis-cofins-combustiveis/
 /regras-do-rearp/
 /alteracao-processo-administrativo-fiscal/
 /deducao-de-jcp/
 /pl-1087-2025/
 /edital-de-transacao-tributaria/
 /stj-veta-creditos-de-icms/
 /planejamento-sucessorio-com-herdeiros-menores/
 /stf-define-limites-do-itcmd-em-transmissoes-internacionais/
 /pgfn-2025-parcelamento-de-debitos-previdenciarios-para-municipios/
 /reforma-do-imposto-de-renda-novas-regras-para-dividendos-e-seus-efeitos-nas-empresas/

### Links externos
Portal do Cliente → https://meloadvogados.atlassian.net/servicedesk/customer/user/login
 WhatsApp → https://api.whatsapp.com/send?phone=5541991567228
 Telefone → tel:554133225551
 E-mail → mailto:melo@meloadvogados.com.br
 Facebook → https://www.facebook.com/MeloAdvogados/
 Instagram → https://www.instagram.com/meloadvogados.associados/
 LinkedIn → https://br.linkedin.com/company/meloadvogados
 Dev (rodapé) → https://modallab.com.br/

### Rotas que retornam 404 (corrigir no novo site)
/somos-especialistas/ (usada em botões da Home)
 /insights/ (usada em botões da Home)

---

## 6. COMPONENTES REUTILIZÁVEIS (para o novo projeto)

1. **Header** — logo (esq.) + botão hambúrguer (dir.) → menu overlay deslizante (fundo cinza claro, itens à direita, ativo em dourado, botão ✕ para fechar).
2. **Hero de página interna** — imagem de fundo + overlay (escuro ou dourado) + título serifado + subtítulo + (opcional) botão CTA.
3. **Hero de post** — faixa dourada sólida + título + data + ícones de compartilhamento.
4. **Carrossel Hero (Home)** — 4 slides, autoplay, setas Prev/Next, paginação em bolinhas, overlay diagonal dourado.
5. **Card de Serviço** — sigla + título + descrição + botão "Saiba Mais" (grid de 4).
6. **Bloco de números/estatísticas** — número em destaque + legenda (3 itens).
7. **Card de Valor** — rótulo ("VALOR N") + título + descrição (grid de 3).
8. **Card de Post/Insight** — imagem + título + data + chamada + "Saiba Mais".
9. **Bloco de depoimento** — texto + autor/empresa (carrossel).
10. **Bloco FAQ** — pergunta (destaque) + resposta.
11. **Timeline** — ano + descrição, com divisores de fase.
12. **Barra de busca** — input "Pesquisar …" + ícone lupa (na listagem de blog).
13. **Carrossel de logos** — "Entidades de Classe parceiras".
14. **Footer** — faixa azul petróleo, contatos, redes sociais, assinatura.
15. **Cookie banner** — mensagem + botão "Eu Concordo".

---

## 7. TOM DE VOZ E COPY (diretrizes para preservar)

- **Posicionamento:** tradição (60+ anos) + inovação/tecnologia (IA, robôs, automação, dashboards).
- **Palavras-chave recorrentes:** segurança jurídica, recuperação de tributos, planejamento tributário, passivo tributário, propósito, espírito empreendedor, "um mundo mais justo e próspero".
- **Público:** empresas, contabilidades, escritórios parceiros e entidades de classe.
- **CTAs padrão:** "Saiba Mais", "Fale com nosso time", "Fale com a nossa equipe", "Entre em contato", "Conheça…", "Envie seu currículo".
- ⚠️ Toda a copy acima deve ser mantida **inalterada** — o objetivo é refação apenas visual.

---