import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, sans, mono } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://nacionalsoftware.com.br"),
  title: {
    default: "Nacional Software House | Sites, Sistemas e IA sob medida",
    template: "%s | Nacional Software House",
  },
  description:
    "Tudo o que está na sua cabeça, a gente coloca no ar. Sites e sistemas com IA e um time de excelência. A partir de R$ 3.500, em até 10x. Primeira versão em ~15 dias.",
  keywords: [
    "software house",
    "criação de sites",
    "landing page",
    "sistemas web",
    "automação",
    "inteligência artificial",
    "desenvolvimento sob medida",
  ],
  openGraph: {
    title: "Nacional Software House | Você imagina, a gente constrói",
    description:
      "Veja como funciona nossa contratação, prazos e investimento. Sites e sistemas com IA e um time de excelência.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="bg-ink text-text antialiased">
        <SmoothScroll />
        <Reveal />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
