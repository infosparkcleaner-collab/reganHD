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
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div className="relative border border-navy/15 p-6 sm:p-8">
          <Suspense>
            <QuoteForm />
          </Suspense>
        </div>
        <address className="space-y-3 not-italic text-lg">
          <h2 className="font-display text-2xl font-semibold">Reach us directly</h2>
          <p>
            <a href={c.phoneHref} className="font-semibold text-regan-blue hover:text-regan-red">
              {c.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${c.email}`} className="text-regan-blue hover:text-regan-red">
              {c.email}
            </a>
          </p>
          <p>{c.address}</p>
          <p>{c.hours}</p>
          {c.placeholder && <p className="inline-block bg-hazard px-2 py-1 text-xs font-semibold">Placeholder contact details</p>}
        </address>
      </section>
    </>
  );
}
