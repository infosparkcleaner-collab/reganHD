import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeading } from "@/components/sections/PageHeading";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact and quotes",
  description: "Request a quote from Regan HD by part number, or contact us about brake shoe rebuilding.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const c = site.contact;
  return (
    <>
      <PageHeading title="Contact and quotes" intro="Tell us the part number or what you need rebuilt. We'll reply with price and availability." />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.7fr_1fr]">
        <div className="relative">
          <Suspense>
            <QuoteForm />
          </Suspense>
        </div>
        <address className="h-fit space-y-2 bg-paper p-6 not-italic">
          <h2 className="text-xl">Reach us directly</h2>
          <p>
            <a href={c.phoneHref} className="font-semibold text-regan-blue hover:underline">
              {c.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${c.email}`} className="text-regan-blue hover:underline">
              {c.email}
            </a>
          </p>
          <p>{c.address}</p>
          <p>{c.hours}</p>
          {c.placeholder && <p className="pt-2 text-xs text-slate">Placeholder contact details, to be replaced before launch.</p>}
        </address>
      </section>
    </>
  );
}
