import type { Metadata } from "next";

// NEXT_PUBLIC_SITE_URL wins; on Vercel the production domain is used automatically.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3111")
).replace(/\/$/, "");

export const abs = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

/** Per-page metadata: title, description, canonical, and matching Open Graph / Twitter tags. */
export function pageMetadata({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const full = absoluteTitle ? title : `${title} | Regan HD`;
  // A page-level openGraph object replaces the root one, so the share image must be repeated here.
  const image = { url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Regan HD: heavy-duty brake shoe rebuilding. Rebuilt to stop. Built in Canada." };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, type: "website", locale: "en_CA", siteName: "Regan HD", images: [image] },
    twitter: { card: "summary_large_image", title: full, description, images: [image.url] },
  };
}

/** BreadcrumbList for inner pages. */
export function breadcrumb(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name, item: abs(path) },
    ],
  };
}
