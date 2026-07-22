import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarketingTicker from "@/components/MarketingTicker";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Diagnostic from "@/components/Diagnostic";
import WhyList from "@/components/WhyList";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LIST — Agência de Direção Estratégica",
  description:
    "Mais que uma agência. Direção Estratégica. Marketing orientado a crescimento e previsibilidade.",
};

export default function HomeV1() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <MarketingTicker />
      <Manifesto />
      <Services />
      <Specialties />
      <Diagnostic />
      <WhyList />
      <CTAFinal />
      <Footer />
    </main>
  );
}
