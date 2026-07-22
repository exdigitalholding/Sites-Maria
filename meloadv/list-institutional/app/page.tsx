import SmoothScroll3 from "@/components/three/SmoothScroll3";
import Nav3 from "@/components/three/Nav3";
import Hero3 from "@/components/three/Hero3";
import Specialties3 from "@/components/three/Specialties3";
import HorizontalScroll4 from "@/components/four/HorizontalScroll4";
import Diagnostic3 from "@/components/three/Diagnostic3";
import Parallax3 from "@/components/three/Parallax3";
import StackingParallax4 from "@/components/four/StackingParallax4";
import CTAFinal3 from "@/components/three/CTAFinal3";
import Footer3 from "@/components/three/Footer3";
import { siteConfig } from "@/lib/seo";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <main className="page-three relative">
      <SmoothScroll3 />
      <Nav3 />
      <Hero3 />
      <Specialties3 />
      {/* vertical → horizontal: services as a pinned horizontal track */}
      <HorizontalScroll4 />
      <Diagnostic3 />
      <Parallax3 />
      {/* parallax stack: cards entering on top of each other */}
      <StackingParallax4 />
      <CTAFinal3 />
      <Footer3 />
    </main>
  );
}
