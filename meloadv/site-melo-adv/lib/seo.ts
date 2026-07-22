const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://meloadvogados.com.br";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "Melo Advogados",
  shortName: "Melo Adv",
  url: siteUrl,
  locale: "pt_BR",
  language: "pt-BR",
  title: "Melo Advogados | Advocacia Corporativa e Patrimonial de Alta Performance",
  description:
    "Escritório boutique especializado em direito societário, planejamento sucessório, proteção patrimonial e soluções tributárias estratégicas para empresas e grupos familiares.",
  keywords: [
    "Melo Advogados",
    "advocacia de negócios",
    "advocacia empresarial Curitiba",
    "direito societário",
    "holding familiar",
    "planejamento tributário",
    "proteção patrimonial",
    "planejamento sucessório",
    "escritório de advocacia premium",
    "advogado societário Curitiba",
  ],
  address: {
    streetAddress: "Av. do Batel, 1230 - Batel",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "80420-090",
    addressCountry: "BR",
  },
  email: "contato@meloadvogados.com.br",
  phone: "+55 41 3012-3456",
  whatsapp: "+55 41 99999-9999",
  foundingDate: "2018",
  serviceArea: "Brasil",
  services: [
    "Direito Societário",
    "Planejamento Sucessório",
    "Proteção Patrimonial",
    "Planejamento Tributário",
    "Contratos de Alta Complexidade",
    "Consultoria Jurídica Estratégica",
  ],
  markets: [
    "Empresarial",
    "Grupos Familiares",
    "Holding e Investimentos",
    "Agronegócio",
    "Imobiliário",
    "Tecnologia e Startups",
  ],
};

export const publicRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
];

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
