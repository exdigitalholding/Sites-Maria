import { notFound } from "next/navigation";
import HomeComposition from "@/components/HomeComposition";
import type { ShowcaseVariant } from "@/components/VariantShowcase";

const variants: Record<string, ShowcaseVariant> = {
  "2": "coverflow",
  "3": "tunnel",
  "4": "curve",
  "5": "deck",
};

export function generateStaticParams() {
  return Object.keys(variants).map((variant) => ({ variant }));
}

export default async function VariantPage({ params }: { params: Promise<{ variant: string }> }) {
  const { variant: slug } = await params;
  const variant = variants[slug];
  if (!variant) notFound();
  return <HomeComposition variant={variant} />;
}
