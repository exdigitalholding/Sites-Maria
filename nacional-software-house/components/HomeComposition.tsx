import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import HeroSequence from "@/components/HeroSequence";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ZoomParallax from "@/components/ZoomParallax";
import Capabilities from "@/components/Capabilities";
import CoverflowShowcase from "@/components/CoverflowShowcase";
import VariantShowcase, { type ShowcaseVariant } from "@/components/VariantShowcase";
import VariantNav from "@/components/VariantNav";
import Differentials from "@/components/Differentials";
import IdeaAlive from "@/components/IdeaAlive";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import Guarantees from "@/components/Guarantees";
import Faq from "@/components/Faq";
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
        <Manifesto />
        <ZoomParallax />
        <Capabilities />
        {variant === "coverflow" || !variant ? <CoverflowShowcase /> : <VariantShowcase variant={variant} />}
        <Differentials />
        <IdeaAlive />
        <Process />
        <Stats />
        <Pricing />
        <Guarantees />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
