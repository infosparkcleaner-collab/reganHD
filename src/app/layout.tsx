import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { IntroProvider } from "@/components/motion/Intro";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

const display = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// NEXT_PUBLIC_SITE_URL wins; on Vercel the production domain is used automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3111");
const title = "Regan HD | Heavy-duty brake shoes, rebuilt in Canada";
const description =
  "Regan HD sandblasts, relines and rivets heavy-duty brake shoes and ships them in Marathon Stop Box Kits. Request a quote by part number.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
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
    <html lang="en-CA" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <IntroProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Cursor />
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}
