import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/brand/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/seo";
import { skus } from "@/content/site";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jbmono", subsets: ["latin"], weight: ["500"] });

const title = "Heavy-Duty Brake Shoe Rebuilding in Canada | Regan HD";
const description =
  "Regan HD rebuilds heavy-duty truck brake shoes in Canada: sandblasted, relined and riveted, then shipped in Marathon Stop Box Kits. Quotes by part number.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Regan HD" },
  description,
  applicationName: "Regan HD",
  category: "Automotive parts",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { title, description, url: "/", type: "website", locale: "en_CA", siteName: "Regan HD" },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#070d1a" };

// Site-wide structured data. Address, phone and email are left out until the client confirms real ones.
const orgId = `${siteUrl}/#organization`;
const graph = [
  {
    "@type": "Organization",
    "@id": orgId,
    name: "Regan HD",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/images/brand/regan-hd-logo-tight.png`, width: 1507, height: 376 },
    image: `${siteUrl}/opengraph-image.jpg`,
    description,
    slogan: "Rebuilt to stop. Built in Canada.",
    areaServed: { "@type": "Country", name: "Canada" },
    knowsAbout: ["Heavy-duty brake shoe rebuilding", "Brake shoe relining", "Brake shoe cores", "Marathon Stop Box Kit", "Trucking"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marathon Stop Box Kit part numbers",
      itemListElement: skus.map((sku) => ({
        "@type": "Offer",
        url: `${siteUrl}/contact?sku=${sku}`,
        itemOffered: { "@type": "Product", name: `Marathon Stop Box Kit ${sku}`, sku, brand: { "@type": "Brand", name: "Marathon Brake Systems" } },
      })),
    },
  },
  { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Regan HD", inLanguage: "en-CA", publisher: { "@id": orgId } },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${archivo.variable} ${inter.variable} ${mono.variable} h-full antialiased`}>
      <body id="top" className="flex min-h-full flex-col">
        <JsonLd data={graph} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
