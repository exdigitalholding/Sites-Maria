import { Space_Grotesk, Inter_Tight, JetBrains_Mono } from "next/font/google";

// Display: geometric, technical, distinctive. Not a default serif.
export const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Body: tight grotesk, pairs with the display, reads clean on dark.
export const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Mono: technical labels, code motifs, step indices.
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
