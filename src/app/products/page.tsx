import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { abs, breadcrumb, pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { img, skus } from "@/content/site";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { Button } from "@/components/brand/Button";
import { SpeedRule } from "@/components/brand/SpeedRule";

export const metadata: Metadata = pageMetadata({
  title: "Marathon Stop Box Kits & Brake Shoe Part Numbers",
  description:
    "Marathon Stop Box Kit heavy-duty brake shoe kits, packed and shipped by Regan HD. Part numbers 4707, 4709, 4711, 4719, 4720, 4702 and 4515. Request a quote.",
  path: "/products",
});

const W = "mx-auto w-full max-w-[1280px] px-5 md:px-8";
const H2 = "text-[1.875rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[2.5rem] md:leading-[1.15]";

export default function Products() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "ItemList",
            name: "Marathon Stop Box Kit part numbers",
            numberOfItems: skus.length,
            itemListElement: skus.map((sku, i) => ({ "@type": "ListItem", position: i + 1, name: `Marathon Stop Box Kit ${sku}`, url: abs(`/contact?sku=${sku}`) })),
          },
          breadcrumb("Products", "/products"),
        ]}
      />
      <section className="bg-white pt-[100px] md:pt-[112px]">
        <div className={`${W} grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12`}>
          <div className="lg:col-span-5">
            <Eyebrow>Products</Eyebrow>
            <h1 className="mt-5 text-[2.375rem] font-bold leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">Marathon Stop Box Kit.</h1>
            <SpeedRule className="draw mt-6 text-blue-600" />
            <p className="mt-6 max-w-[46ch] text-lg text-steel-500">
              Heavy-duty brake shoe kits from Marathon Brake Systems, packed and shipped by Regan HD. Pick a part number to start a quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#part-numbers" variant="secondary">See part numbers</Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[4px] shadow-[var(--shadow-2)]">
              <Image src={img.box} alt="Marathon Stop Box Kit, assembled in Canada" width={1526} height={1031} loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 680px, 100vw" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-paper">
        <div className={`${W} grid gap-10 py-16 md:grid-cols-3`}>
          {[
            { k: "What is inside", v: "Brake shoes and hardware for the listed part number.", note: "Kit contents to be confirmed" },
            { k: "Origin", v: "Assembled in Canada", note: "As printed on the box" },
            { k: "Brand", v: "Marathon Brake Systems", note: "Packed and shipped by Regan HD" },
          ].map((c) => (
            <div key={c.k} data-reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">{c.k}</p>
              <p className="mt-2 text-[1.25rem] font-semibold tracking-[-0.01em]">{c.v}</p>
              <p className="mt-1 text-[14px] text-steel-500">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="part-numbers" className="scroll-mt-24 bg-white">
        <div className={`${W} py-24 md:py-28`}>
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <Eyebrow>Catalogue</Eyebrow>
              <h2 className={`${H2} mt-4`}>Part numbers.</h2>
            </div>
            <p className="max-w-[40ch] text-steel-500">Specs, fitment and pricing on request. Choose a part to start a quote.</p>
          </div>
          {/* TODO: client to supply shoe sizes and truck fitment per part number */}
          <div className="mt-10 overflow-hidden rounded-[4px] border border-steel-200" data-reveal>
            <table className="w-full border-collapse text-left">
              <thead className="bg-paper">
                <tr className="text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-500">
                  <th scope="col" className="px-6 py-4">Part #</th>
                  <th scope="col" className="hidden px-6 py-4 md:table-cell">Description</th>
                  <th scope="col" className="hidden px-6 py-4 sm:table-cell">Brand</th>
                  <th scope="col" className="px-6 py-4 text-right"><span className="sr-only">Action</span></th>
                </tr>
              </thead>
              <tbody>
                {skus.map((sku) => (
                  <tr key={sku} className="group relative border-t border-steel-200 transition-colors hover:bg-steel-100">
                    <td className="relative h-16 px-6 font-mono text-[15px] font-medium tracking-[0.04em]">
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-red-600 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                      {sku}
                    </td>
                    <td className="hidden px-6 text-steel-500 md:table-cell">Details on request</td>
                    <td className="hidden px-6 sm:table-cell">Marathon</td>
                    <td className="px-6 text-right">
                      <Link href={`/contact?sku=${sku}`} className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue-600">
                        <span className="ulink">Request quote</span> <span className="arrow" aria-hidden>→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-steel-500">
            Need another size or fitment?{" "}
            <Link href="/contact" className="font-semibold text-blue-600 ulink">Ask us</Link>.
          </p>
        </div>
      </section>

      <section className="grain relative flex min-h-[50vh] items-center overflow-hidden bg-ink-950 text-white">
        <Image src={img.warehouse} alt="Warehouse racking stocked with boxed kits" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,13,26,.9)_0%,rgba(7,13,26,.55)_45%,rgba(7,13,26,.1)_80%)]" aria-hidden />
        <div className={`${W} py-20`}>
          <h2 className={`${H2} max-w-[20ch]`} data-reveal>Order by part number. We&apos;ll confirm stock and lead time.</h2>
          <div className="mt-8" data-reveal>
            <Button href="/contact">Request a quote</Button>
          </div>
        </div>
      </section>
    </>
  );
}
