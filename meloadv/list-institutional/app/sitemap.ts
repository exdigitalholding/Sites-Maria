import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-07");

  return [
    ...publicRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    {
      url: absoluteUrl("/llms.txt"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: absoluteUrl("/llms-full.txt"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: absoluteUrl("/ai-summary.md"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];
}
