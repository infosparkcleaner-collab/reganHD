import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { abs, breadcrumb, pageMetadata, siteUrl } from "@/lib/seo";
import Image from "next/image";
import { Suspense } from "react";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { SpeedRule } from "@/components/brand/SpeedRule";
import { img, site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote for Heavy-Duty Brake Shoes",
  description:
    "Request a quote by part number and quantity for rebuilt heavy-duty brake shoes or Marathon Stop Box Kits. Regan HD replies by email with price and availability.",
  path: "/contact",
});

const W = "mx-auto w-full max-w-[1280px] px-5 md:px-8";

export default function Contact() {
  const c = site.contact;
  return (
    <>
      <JsonLd
        data={[
          { "@type": "ContactPage", name: "Request a quote", url: abs("/contact"), about: { "@id": `${siteUrl}/#organization` } },
          breadcrumb("Contact", "/contact"),
        ]}
      />
      <section className="grain relative bg-ink-900 text-white">
        <div className={`${W} pb-48 pt-44 md:pb-56 md:pt-48`}>
          <Eyebrow dark>Contact</Eyebrow>
          <h1 className="mt-5 text-[2.375rem] font-bold leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">Request a quote.</h1>
          <SpeedRule className="draw mt-6 text-blue-400" />
          <p className="mt-6 max-w-[52ch] text-lg text-steel-300 md:text-xl">Send part numbers and quantities. We reply by email with price and availability.</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${W} relative -mt-36 grid gap-8 pb-24 md:-mt-40 md:pb-32 lg:grid-cols-12`}>
          <div className="relative rounded-[4px] bg-white p-6 shadow-[var(--shadow-2)] sm:p-10 lg:col-span-7">
            <Suspense>
              <QuoteForm />
            </Suspense>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <address className="rounded-[4px] border border-steel-200 bg-white p-8 not-italic shadow-[var(--shadow-1)]">
              <p className="eyebrow text-steel-500">Reach us directly</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">Phone</dt>
                  <dd className="mt-1 text-[1.25rem] font-semibold"><a href={c.phoneHref} className="ulink">{c.phone}</a></dd>
                </div>
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">Email</dt>
                  <dd className="mt-1"><a href={`mailto:${c.email}`} className="font-semibold text-blue-600 ulink">{c.email}</a></dd>
                </div>
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">Address</dt>
                  <dd className="mt-1">{c.address}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">Hours</dt>
                  <dd className="mt-1">{c.hours}</dd>
                </div>
              </dl>
              {c.placeholder && <p className="mt-6 border-t border-steel-200 pt-4 text-[13px] text-steel-500">To be confirmed: these contact details are placeholders.</p>}
            </address>
            <div className="overflow-hidden rounded-[4px]">
              <Image src={img.warehouse} alt="Warehouse racking stocked with boxed kits" loading="eager" width={1600} height={900} sizes="(min-width: 1024px) 480px, 100vw" className="aspect-[4/3] w-full object-cover" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
