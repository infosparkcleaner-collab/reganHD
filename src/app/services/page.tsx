import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/sections/PageHeading";
import { CtaButton } from "@/components/ui/CtaButton";
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
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.2fr_1fr]">
        {/* TODO: client to confirm real steps and wording */}
        <ol>
          {shoeStages.map((s, i) => (
            <li key={s.title} className="flex gap-5 border-b border-rule py-7 first:pt-0 last:border-0">
              <span className="font-display w-8 shrink-0 text-2xl font-semibold text-slate">{i + 1}</span>
              <div>
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-2 text-slate">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div>
          <Image src="/images/photos/worker-brake-shoe.jpeg" alt="A Regan HD worker pressing a relined brake shoe" width={1200} height={800} sizes="(min-width: 1024px) 440px, 100vw" className="h-auto w-full rounded-sm" />
          <div className="mt-8">
            <CtaButton href="/contact?type=refurbish">Get a rebuild quote</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
