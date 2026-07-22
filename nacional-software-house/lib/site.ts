// Central content + config. All copy adapted from the client brief.
// No em-dashes anywhere (brand + design rule).

export const site = {
  name: "Nacional Software House",
  shortName: "Nacional",
  tagline: "Você imagina, a gente constrói.",
  whatsapp: "5599999999999", // TODO: substituir pelo número real
  email: "contato@nacionalsoftware.com.br",
  priceFrom: "R$ 3.500",
  installments: "10x",
  firstVersionDays: "~15 dias",
};

export function whatsappHref(message: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const wa = {
  projeto:
    "Olá! Vim pelo site da Nacional. Quero tirar minha ideia do papel e entender como funciona.",
  proposta:
    "Olá! Vim pelo site da Nacional. Quero receber uma proposta para o meu projeto.",
  comecar:
    "Olá! Quero começar meu projeto com a Nacional Software House.",
};

export const nav = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "O que fazemos", href: "#capacidades" },
  { label: "Processo", href: "#processo" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#faq" },
];

export const capabilities = [
  {
    id: "sites",
    index: "01",
    title: "Sites e Landing Pages",
    body: "Carregam rápido, aparecem no Google e convertem. Sob medida, nunca template.",
    tags: ["Institucional", "Landing", "SEO"],
  },
  {
    id: "sistemas",
    index: "02",
    title: "Sistemas e Plataformas",
    body: "Painéis, portais e SaaS. A ferramenta que prateleira nenhuma resolve.",
    tags: ["SaaS", "Painéis", "Portais"],
  },
  {
    id: "ia",
    index: "03",
    title: "Automações e IA",
    body: "Leads, atendimento e integrações. IA onde ela economiza tempo e dinheiro.",
    tags: ["Automação", "Agentes", "Fluxos"],
  },
  {
    id: "integracoes",
    index: "04",
    title: "Integrações",
    body: "Pagamentos, WhatsApp, sistemas fiscais, CRMs. Tudo conversando de verdade.",
    tags: ["Pagamentos", "WhatsApp", "CRM"],
  },
] as const;

export const projects = [
  { title: "Landing de alta conversão", tag: "Landing Page", tint: "from-green/20" },
  { title: "Painel SaaS sob medida", tag: "Plataforma", tint: "from-gold/20" },
  { title: "Site institucional premium", tag: "Institucional", tint: "from-green/15" },
  { title: "Automação de atendimento", tag: "IA aplicada", tint: "from-gold/15" },
  { title: "Portal com área de login", tag: "Sistema", tint: "from-green/20" },
] as const;

export const differentials = [
  {
    kicker: "IA em cada etapa",
    title: "Velocidade de IA, do briefing ao deploy.",
    body: "A IA comprime prazo e custo. O time foca no que máquina nenhuma faz: decisão e acabamento.",
  },
  {
    kicker: "Time de excelência",
    title: "Gente sênior revisa, testa e garante.",
    body: "IA acelera, gente garante. Você não recebe um Frankenstein, recebe produto.",
  },
  {
    kicker: "Prazo cumprido",
    title: "Primeira versão no ar em ~15 dias.",
    body: "Ciclos datados, sem sumiço. Você acompanha cada etapa em tempo real.",
  },
  {
    kicker: "Você no controle",
    title: "Até 3 rodadas de ajuste inclusas.",
    body: "A gente constrói, você direciona. A V1 é ponto de partida, não ponto final.",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Call de Discovery",
    body: "A primeira conversa. Entendemos o que você quer de verdade e o que precisa resolver. Escutamos antes de propor.",
    deliverable: "Entendimento do seu objetivo.",
    when: "Dia 0",
  },
  {
    n: "02",
    title: "Proposta Comercial",
    body: "Escopo, prazo e investimento numa proposta clara. Sem letra miúda.",
    deliverable: "Proposta transparente.",
    when: "Dias 1 a 3",
  },
  {
    n: "03",
    title: "Contrato",
    body: "Fechamos contrato. Segurança para os dois lados e sinal verde para começar.",
    deliverable: "Contrato assinado.",
    when: "Dia 3",
  },
  {
    n: "04",
    title: "Call de Kickoff",
    body: "Coletamos logo, cores, referências e preferências. Sai daqui com a identidade definida.",
    deliverable: "Briefing visual completo.",
    when: "Dia 4",
  },
  {
    n: "05",
    title: "Call de Alinhamento",
    body: "Em até 5 dias voltamos com direções para você ver e sentir. Ajustamos a rota antes de construir.",
    deliverable: "Direção aprovada.",
    when: "Até 5 dias",
  },
  {
    n: "06",
    title: "Entrega da V1",
    body: "Cerca de 10 dias depois, a primeira versão vai ao ar. Real, funcionando, navegável.",
    deliverable: "V1 publicada.",
    when: "~10 dias",
  },
  {
    n: "07",
    title: "Ciclos de Ajuste",
    body: "Evoluímos, mudamos e refinamos. Até 3 Sprints de ~10 dias para deixar tudo do seu jeito.",
    deliverable: "Até 3 Sprints inclusos.",
    when: "~10 dias / Sprint",
  },
] as const;

export const pricing = [
  {
    name: "Essencial",
    price: "R$ 3.500",
    note: "em até 10x",
    highlight: true,
    for: "Site institucional ou landing page.",
    features: [
      "Design sob medida, não template",
      "Responsivo e rápido",
      "Otimizado para o Google",
      "Até 3 rodadas de ajuste",
    ],
  },
  {
    name: "Avançado",
    price: "Sob consulta",
    note: "orçado por escopo",
    highlight: false,
    for: "Sites maiores e multi-página.",
    features: [
      "Múltiplas páginas e seções",
      "Integrações e automações",
      "Recursos de IA aplicada",
      "Painel de conteúdo",
    ],
  },
  {
    name: "Sistemas e Plataformas",
    price: "Por escopo",
    note: "horas e complexidade",
    highlight: false,
    for: "SaaS, painéis, portais e ferramentas internas.",
    features: [
      "Arquitetura sob medida",
      "Área de login e permissões",
      "Integrações de negócio",
      "Cálculo item por item",
    ],
  },
] as const;

export const guarantees = [
  {
    title: "Prazo cumprido",
    body: "Data combinada é data entregue. Mudou algo, você sabe antes.",
  },
  {
    title: "Até 3 rodadas de ajuste",
    body: "Espaço real para lapidar até ficar do seu jeito.",
  },
  {
    title: "Acompanhamento total",
    body: "Você sabe onde o projeto está o tempo todo.",
  },
  {
    title: "Código revisado por gente",
    body: "IA acelera, time sênior garante. Sem gambiarra.",
  },
  {
    title: "Proposta transparente",
    body: "Escopo, prazo e valor assinados antes de qualquer código.",
  },
] as const;

export const faqs = [
  {
    q: "Preciso saber exatamente o que quero antes de falar com vocês?",
    a: "Não. É para isso que existe a Call de Discovery. Você chega com a ideia, mesmo que solta, e a gente ajuda a dar forma. Se você consegue descrever, a gente consegue construir.",
  },
  {
    q: "Em quanto tempo meu site fica pronto?",
    a: "A primeira versão vai ao ar em torno de 15 dias após o kickoff. Com os ciclos de ajuste, um projeto padrão fica redondo em cerca de 35 a 45 dias.",
  },
  {
    q: "Quanto custa?",
    a: "Projetos mais simples partem de R$ 3.500, parcelável em até 10x. Escopos maiores são calculados por horas e complexidade, e você aprova o valor na proposta antes de tudo.",
  },
  {
    q: "E se eu não gostar da primeira versão?",
    a: "Por isso existem os Sprints de ajuste. Você tem até 3 rodadas para mudar, refinar e evoluir o que quiser. A V1 é ponto de partida, não ponto final.",
  },
  {
    q: "Vocês usam IA. Então é tudo automático e genérico?",
    a: "Ao contrário. A IA acelera o trabalho pesado; as decisões, o design e o acabamento passam por desenvolvedores de excelência. Você recebe algo sob medida, só que mais rápido e mais barato.",
  },
  {
    q: "Vocês fazem só site?",
    a: "Não. Fazemos sites, sistemas, plataformas, automações e integrações. Se é digital e resolve um problema seu, a gente constrói.",
  },
  {
    q: "E se meu projeto for muito específico ou diferente?",
    a: "Melhor ainda. Software sob medida é o que a gente faz de melhor. Software de prateleira qualquer um vende.",
  },
] as const;
