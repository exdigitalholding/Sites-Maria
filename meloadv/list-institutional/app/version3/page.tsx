import SmoothScroll3 from "@/components/three/SmoothScroll3";
import Nav3 from "@/components/three/Nav3";
import Hero3 from "@/components/three/Hero3";
import Specialties3 from "@/components/three/Specialties3";
import Services3 from "@/components/three/Services3";
import Diagnostic3 from "@/components/three/Diagnostic3";
import Parallax3 from "@/components/three/Parallax3";
import WhyList3 from "@/components/three/WhyList3";
import CTAFinal3 from "@/components/three/CTAFinal3";
import Footer3 from "@/components/three/Footer3";

export const metadata = {
  title: "LIST — Capítulo III / Direção Estratégica",
  description:
    "Marketing que pensa antes de gritar. Capítulo III do site da Agência LIST — minimalista, brutalista, estratégico.",
};

export default function PageVersionThree() {
  return (
    <main className="page-three relative">
      <SmoothScroll3 />
      <Nav3 />
      <Hero3 />
      <Specialties3 />
      <Services3 />
      <Diagnostic3 />
      <Parallax3 />
      <WhyList3 />
      <CTAFinal3 />
      <Footer3 />
    </main>
  );
}
