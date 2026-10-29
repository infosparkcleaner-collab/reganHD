import type { Metadata } from "next";
import { Libre_Franklin, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const head = Libre_Franklin({ variable: "--font-head", subsets: ["latin"], weight: ["600", "700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600"] });

// NEXT_PUBLIC_SITE_URL wins; on Vercel the production domain is used automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3111");
const title = "Regan HD | Heavy-duty brake shoes, rebuilt in Canada";
const description =
  "Regan HD sandblasts, relines and rivets heavy-duty brake shoes and ships them in Marathon Stop Box Kits. Request a quote by part number.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Regan HD" },
  description,
  openGraph: { title, description, type: "website", locale: "en_CA", siteName: "Regan HD" },
  twitter: { card: "summary_large_image", title, description },
};

// Organization data only. Address, phone and email are left out until the client confirms real ones.
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Regan HD",
  url: siteUrl,
  logo: `${siteUrl}/images/brand/regan-hd-logo.jpeg`,
  description,
  areaServed: { "@type": "Country", name: "Canada" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${head.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-navy">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
