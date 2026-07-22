import type { Metadata, Viewport } from "next";
import { grotesk, sansBody, editorial } from "./fonts";
import "./globals.css";

const SITE_URL = "https://dothus.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "do.thus — Inteligência em Gestão",
    template: "%s · do.thus",
  },
  description:
    "A união da gestão com o poder da tecnologia. Assessoria, dashboards em tempo real, IA e software sob medida para empresas decidirem com dados, não com achismo.",
  keywords: [
    "inteligência em gestão",
    "dashboards estratégicos",
    "inteligência artificial para gestão",
    "assessoria em gestão",
    "software sob medida",
    "business intelligence",
    "do.thus",
  ],
  authors: [{ name: "do.thus" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "do.thus",
    title: "do.thus — Inteligência em Gestão",
    description:
      "Decida com dados, não com achismo. Gestão, tecnologia e IA em um só lugar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "do.thus — Inteligência em Gestão",
    description: "A união da gestão com o poder da tecnologia.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050c16",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${grotesk.variable} ${sansBody.variable} ${editorial.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
