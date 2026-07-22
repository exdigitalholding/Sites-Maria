/* Conteúdo da do.thus — extraído da apresentação oficial. Sem Lorem Ipsum. */

export const CONTACTS = {
  rafael: {
    name: "Rafael Farias",
    role: "Diretor Executivo",
    phone: "(34) 9.9315-7856",
    whatsapp: "https://wa.me/5534993157856",
  },
  andre: {
    name: "André Chaves",
    role: "Diretor de Negócios",
    phone: "(85) 9.9696-5030",
    whatsapp: "https://wa.me/5585996965030",
  },
} as const;

/** WhatsApp principal para os CTAs de conversão. */
export const PRIMARY_WHATSAPP =
  "https://wa.me/5585996965030?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da do.thus e quero agendar uma demonstração."
  );

export const NAV = [
  { label: "Método", href: "#metodo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;

export const PROBLEMS = [
  {
    pain: "Gestão sem método e indicadores",
    effect: "Decisões no achismo e problemas vistos tarde",
  },
  {
    pain: "Metas e áreas desalinhadas",
    effect: "Cada setor enxerga só uma parte do negócio",
  },
  {
    pain: "Dados espalhados em vários sistemas",
    effect: "A diretoria não enxerga a empresa com clareza",
  },
  {
    pain: "Relatórios manuais e planilhas soltas",
    effect: "Perda de tempo, retrabalho e risco de erro",
  },
] as const;

export const CLIENTS = [
  "Ceres Investimentos",
  "Cultura Agromais",
  "Nosso Atacarejo",
  "Handara",
  "Grupo Minercon",
  "Alares",
] as const;

export const METHOD = [
  {
    n: "01",
    title: "Diagnóstico da situação atual",
    desc: "Entendemos o cenário atual da empresa e seus principais desafios de gestão.",
  },
  {
    n: "02",
    title: "Definição dos objetivos",
    desc: "Definimos aonde a empresa quer chegar e as metas que vão guiar as decisões.",
  },
  {
    n: "03",
    title: "Análise dos dados e do modelo de gestão",
    desc: "Avaliamos os dados disponíveis e o modelo de gestão que sustenta o negócio.",
  },
  {
    n: "04",
    title: "Ajustes na gestão e adoção de tecnologias",
    desc: "Ajustamos o modelo de gestão e construímos as visões estratégicas do negócio.",
  },
  {
    n: "05",
    title: "Acompanhamento e melhoria contínua",
    desc: "Acompanhamos os resultados e aperfeiçoamos constantemente os pontos de melhoria.",
  },
] as const;

export const DIFERENCIAIS = [
  {
    n: "01",
    lead: "Estratégia, tecnologia, gestão e método",
    desc: "Analisamos e acompanhamos o seu negócio em todos os níveis.",
  },
  {
    n: "02",
    lead: "Soluções sob medida",
    desc: "Adaptadas às pessoas, processos, dados e objetivos de cada empresa.",
  },
  {
    n: "03",
    lead: "Estruturamos antes de visualizar",
    desc: "Base de dados confiável antes de qualquer visualização.",
  },
  {
    n: "04",
    lead: "IA prática, feita por experts",
    desc: "Construída por especialistas de mercado em gestão e tecnologia.",
  },
  {
    n: "05",
    lead: "Foco em decisão, não em relatório",
    desc: "O objetivo não é entregar telas, é melhorar resultados.",
  },
] as const;
