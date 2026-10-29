import type { MetadataRoute } from "next";
import { abs, siteUrl } from "@/lib/seo";

// Open to search engines and AI answer engines alike; only the form API is excluded.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"], allow: "/", disallow: "/api/" },
    ],
    sitemap: abs("/sitemap.xml"),
    host: siteUrl,
  };
}
