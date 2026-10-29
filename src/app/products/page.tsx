import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/sections/PageHeading";
import { skus } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Marathon Stop Box Kits and heavy-duty brake shoe part numbers, packed and shipped by Regan HD.",
  alternates: { canonical: "/products" },
};

export default function Products() {
  return (
    <>
      <PageHeading title="Products" intro="Marathon Stop Box Kits and heavy-duty brake shoes. Pick a part number to start a quote." />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
        <Image src="/images/photos/stop-box-kit.jpeg" alt="Marathon and Regan HD Stop Box Kit, a heavy-duty brake shoe kit" width={1526} height={1031} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full border border-navy/15" />
        <div>
          <Image src="/images/brand/marathon-logo.jpeg" alt="Marathon Brake Systems" width={240} height={120} className="h-16 w-auto" />
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight">The Stop Box Kit</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-navy/80">
            A heavy-duty brake shoe kit from Marathon, packed and shipped by Regan HD. One box, ready for the shop floor.
          </p>
        </div>
      </section>
      <section className="bg-steel">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight">Marathon part numbers</h2>
          <p className="mt-2 text-navy/75">Specs and pricing on request.</p>
          {/* TODO: client to supply shoe sizes and truck fitment per part number */}
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skus.map((sku) => (
              <li key={sku} className="border border-navy/15 border-t-4 border-t-hazard bg-white p-5">
                <p className="font-mono text-3xl font-medium">{sku}</p>
                <Link href={`/contact?sku=${sku}`} className="mt-5 inline-block text-sm font-semibold text-regan-blue underline decoration-regan-red decoration-2 underline-offset-4 hover:text-regan-red">
                  Request a quote
                </Link>
              </li>
            ))}
            <li className="bg-navy p-5 text-white">
              <p className="font-display text-xl font-bold leading-tight">Need another size or fitment?</p>
              <Link href="/contact" className="mt-5 inline-block text-sm font-semibold underline decoration-hazard decoration-2 underline-offset-4">
                Ask us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
