import ScrollEngine from "@/components/two/ScrollEngine";
import Nav2 from "@/components/two/Nav2";
import Hero2 from "@/components/two/Hero2";
import MissionReveal from "@/components/two/MissionReveal";
import HorizontalScroll from "@/components/two/HorizontalScroll";
import DiagonalScene from "@/components/two/DiagonalScene";
import StickyStack from "@/components/two/StickyStack";
import VelocityMarquee from "@/components/two/VelocityMarquee";
import ParallaxGallery from "@/components/two/ParallaxGallery";
import Outro2 from "@/components/two/Outro2";

export const metadata = {
  title: "LIST — Capítulo II / Experiência Cinemática",
  description:
    "Direção estratégica em todas as direções — vertical, horizontal, diagonal. Capítulo II do site da Agência LIST.",
};

export default function PageVersionTwo() {
  return (
    <main className="page-two relative">
      <ScrollEngine />
      <Nav2 />
      <Hero2 />
      <MissionReveal />
      <HorizontalScroll />
      <DiagonalScene />
      <StickyStack />
      <VelocityMarquee />
      <ParallaxGallery />
      <Outro2 />
    </main>
  );
}
