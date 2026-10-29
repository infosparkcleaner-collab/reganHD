import type { MetadataRoute } from "next";
import { nav } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3111";
  return nav.map((n) => ({ url: `${base}${n.href === "/" ? "" : n.href}` }));
}
