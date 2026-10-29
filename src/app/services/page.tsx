import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/sections/PageHeading";
import { shoeStages } from "@/content/site";

export const metadata: Metadata = {
  title: "Brake shoe rebuilding",
  description: "Regan HD sandblasts, relines and rivets heavy-duty brake shoes. See how a worn core becomes a boxed, ready-to-fit kit.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHeading title="Brake shoe rebuilding" intro="We take worn heavy-duty brake shoe cores and rebuild them: cleaned to bare steel, relined, riveted and boxed." />
      <section className="mx-auto max-w-4xl px-5 py-16">
        {/* TODO: client to confirm real steps and wording */}
        <ol className="space-y-8">
          {shoeStages.map((s, i) => (
            <li key={s.title} className="flex gap-5 border-b border-navy/10 pb-8 last:border-0">
              <span className="font-display text-4xl font-bold text-regan-red">{i + 1}</span>
              <div>
                <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-navy/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link href="/contact?type=refurbish" className="mt-4 inline-block bg-regan-red px-7 py-3.5 font-display text-lg font-semibold text-white hover:bg-navy">
          Get a rebuild quote
        </Link>
      </section>
    </>
  );
}
