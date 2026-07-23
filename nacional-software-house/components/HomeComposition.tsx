import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import HeroSequence from "@/components/HeroSequence";
import Marquee from "@/components/Marquee";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";
import ZoomParallax from "@/components/ZoomParallax";
// Section "O que fazemos" desativada — para reativar, descomente esta linha e o <Capabilities /> abaixo.
// import Capabilities from "@/components/Capabilities";
import CoverflowShowcase from "@/components/CoverflowShowcase";
import VariantShowcase, { type ShowcaseVariant } from "@/components/VariantShowcase";
import VariantNav from "@/components/VariantNav";
// Section "Por que a Nacional entrega diferente" desativada — para reativar, descomente esta linha e o <Differentials /> abaixo.
// import Differentials from "@/components/Differentials";
// Section "Sua ideia ganha forma e movimento" desativada — para reativar, descomente esta linha e o <IdeaAlive /> abaixo.
// import IdeaAlive from "@/components/IdeaAlive";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
// Section "O que você pode esperar de nós, sempre." desativada — para reativar, descomente esta linha e o <Guarantees /> abaixo.
// import Guarantees from "@/components/Guarantees";
// Section "Perguntas que quase todo mundo faz" (FAQ) desativada — para reativar, descomente esta linha e o <Faq /> abaixo.
// import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";

export default function HomeComposition({ variant }: { variant?: ShowcaseVariant }) {
  return (
    <>
      <Navbar />
      <BottomNav />
      {variant && <VariantNav active={variant} />}
      <main>
        <HeroSequence />
        <Marquee />
        <ManifestoSplit />
        <ZoomParallax />
        {/* Section "O que fazemos" desativada — para reativar, descomente esta linha e o import acima. */}
        {/* <Capabilities /> */}
        {variant === "coverflow" || !variant ? <CoverflowShowcase /> : <VariantShowcase variant={variant} />}
        {/* Section "Por que a Nacional entrega diferente" desativada — para reativar, descomente esta linha e o import acima. */}
        {/* <Differentials /> */}
        {/* Section "Sua ideia ganha forma e movimento" desativada — para reativar, descomente esta linha e o import acima. */}
        {/* <IdeaAlive /> */}
        <Process />
        <Stats />
        <Pricing />
        {/* Section "O que você pode esperar de nós, sempre." desativada — para reativar, descomente esta linha e o import acima. */}
        {/* <Guarantees /> */}
        {/* Section "Perguntas que quase todo mundo faz" (FAQ) desativada — para reativar, descomente esta linha e o import acima. */}
        {/* <Faq /> */}
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
