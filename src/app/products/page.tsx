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
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-14">
        <Image src="/images/photos/stop-box-kit.jpeg" alt="Marathon and Regan HD Stop Box Kit, a heavy-duty brake shoe kit" width={1526} height={1031} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full rounded-sm" />
        <div>
          <Image src="/images/brand/marathon-logo.jpeg" alt="Marathon Brake Systems" width={240} height={120} className="h-14 w-auto" />
          <h2 className="mt-6 text-[1.875rem] leading-tight">The Stop Box Kit</h2>
          <p className="mt-4 max-w-md text-slate">A heavy-duty brake shoe kit from Marathon, packed and shipped by Regan HD. One box, ready for the shop floor.</p>
        </div>
      </section>
      <section className="border-t border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
          <h2 className="text-[1.875rem] leading-tight">Marathon part numbers</h2>
          <p className="mt-2 text-slate">Specs and pricing on request.</p>
          {/* TODO: client to supply shoe sizes and truck fitment per part number */}
          <table className="mt-8 w-full max-w-3xl border-collapse bg-white text-left">
            <thead>
              <tr className="border-b-2 border-navy text-sm text-slate">
                <th className="px-4 py-3 font-semibold">Part number</th>
                <th className="px-4 py-3 font-semibold">Details</th>
                <th className="px-4 py-3 text-right font-semibold"><span className="sr-only">Quote</span></th>
              </tr>
            </thead>
            <tbody>
              {skus.map((sku) => (
                <tr key={sku} className="border-b border-rule">
                  <td className="tnum px-4 py-3.5 text-lg font-semibold">{sku}</td>
                  <td className="px-4 py-3.5 text-slate">Specs on request</td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href={`/contact?sku=${sku}`} className="font-semibold text-regan-blue hover:underline">Request a quote</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-slate">
            Need another size or fitment? <Link href="/contact" className="font-semibold text-regan-blue hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
