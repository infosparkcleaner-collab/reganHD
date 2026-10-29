import type { MetadataRoute } from "next";
import { nav } from "@/content/site";
import { abs } from "@/lib/seo";

const priority: Record<string, number> = { "/": 1, "/services": 0.9, "/products": 0.9, "/contact": 0.8, "/trucking": 0.6 };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-30");
  return ["/", ...nav.map((n) => n.href)].map((path) => ({
    url: abs(path),
    lastModified,
    changeFrequency: "monthly",
    priority: priority[path] ?? 0.5,
  }));
}
