const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agencialist.com.br";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "Agencia LIST",
  shortName: "LIST",
  url: siteUrl,
  locale: "pt_BR",
  language: "pt-BR",
  title: "Agencia LIST | Direcao estrategica em marketing",
  description:
    "Agencia de direcao estrategica em Curitiba para marcas que querem crescer com metodo, dados e previsibilidade.",
  keywords: [
    "agencia de marketing em Curitiba",
    "marketing estrategico",
    "direcao estrategica",
    "branding",
    "trafego pago",
    "copywriting",
    "marketing de conteudo",
    "consultoria de marketing",
    "diagnostico de marketing",
    "agencia para restaurantes",
  ],
  address: {
    streetAddress: "Av. Republica Argentina, 2056",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  email: "agencialistmarketing@gmail.com",
  phone: "+55 41 9 9290-7200",
  whatsapp: "+55 41 9 9994-9251",
  foundingDate: "2020",
  serviceArea: "Brasil",
  services: [
    "Marketing de Conteudo",
    "Copywriting",
    "Trafego Pago",
    "Estrategia e Posicionamento",
    "Branding",
    "Consultoria",
    "Diagnostico Estrategico",
  ],
  markets: [
    "Gastronomico",
    "Industrias",
    "Imobiliario",
    "Advocacia",
    "Saude",
    "Estetica Automotiva",
    "Contabilidade",
  ],
};

export const publicRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/version1",
    priority: 0.35,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/version2",
    priority: 0.35,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/version3",
    priority: 0.35,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/2",
    priority: 0.2,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/3",
    priority: 0.2,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/4",
    priority: 0.2,
    changeFrequency: "monthly" as const,
  },
];

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
