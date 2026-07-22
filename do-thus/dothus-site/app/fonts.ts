import { Space_Grotesk, Manrope, Newsreader } from "next/font/google";

/* Display geométrico — títulos e a marca (eco do logo rounded-geometric). */
export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

/* Corpo — leitura limpa, humanista, muito respiro. */
export const sansBody = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans-body",
  display: "swap",
});

/* Editorial serif — as frases-chave em itálico (como no deck). */
export const editorial = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  variable: "--font-editorial",
  display: "swap",
});
