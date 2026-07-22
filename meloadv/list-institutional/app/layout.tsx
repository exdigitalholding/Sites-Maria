import type { Metadata } from "next";
import "./globals.css";
import { display, sans, mono } from "./fonts";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: "%s | Agencia LIST",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Marketing estrategico",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
    types: {
      "text/plain": [{ url: "/llms.txt", title: "Resumo para IAs e LLMs" }],
      "text/markdown": [
        { url: "/ai-summary.md", title: "Perfil da Agencia LIST para IAs" },
        { url: "/llms-full.txt", title: "Contexto completo da Agencia LIST para LLMs" },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/Design-sem-nome-8%20(1).webp"),
        width: 1200,
        height: 630,
        alt: "Agencia LIST - direcao estrategica em marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/images/Design-sem-nome-8%20(1).webp")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  other: {
    "ai-summary": absoluteUrl("/ai-summary.md"),
    "llms-txt": absoluteUrl("/llms.txt"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: siteConfig.foundingDate,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        areaServed: siteConfig.serviceArea,
        knowsAbout: siteConfig.services,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#professional-service`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        image: absoluteUrl("/images/Design-sem-nome-8%20(1).webp"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        areaServed: {
          "@type": "Country",
          name: siteConfig.serviceArea,
        },
        serviceType: siteConfig.services,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: siteConfig.language,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="grain" aria-hidden />
        <Cursor />
        <Reveal />
        {children}
      </body>
    </html>
  );
}
