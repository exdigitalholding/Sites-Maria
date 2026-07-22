import { ScrollProvider } from "@/components/ScrollProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Problem } from "@/components/Problem";
import { Union } from "@/components/Union";
import { Stats } from "@/components/Stats";
import { HorizontalSolutions } from "@/components/HorizontalSolutions";
import { PinnedShowcase } from "@/components/PinnedShowcase";
import { Method } from "@/components/Method";
import { Diferenciais } from "@/components/Diferenciais";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProvider />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Problem />
        <Union />
        <Stats />
        <HorizontalSolutions />
        <PinnedShowcase />
        <Method />
        <Diferenciais />
        <Contact />
      </main>
      <Footer />
      <JsonLd />
    </>
  );
}

/* Schema.org — organização, para SEO. */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "do.thus",
    description:
      "Inteligência em Gestão. Assessoria, dashboards em tempo real, IA e software sob medida para decisões orientadas por dados.",
    slogan: "A união da gestão com o poder da tecnologia.",
    areaServed: "BR",
    knowsAbout: [
      "Gestão empresarial",
      "Business Intelligence",
      "Inteligência Artificial",
      "Engenharia de dados",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
