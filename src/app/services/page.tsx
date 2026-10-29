import type { Metadata } from "next";
import Image from "next/image";
import { img, processFacts, shoeStages } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/brand/Eyebrow";

export const metadata: Metadata = {
  title: "Brake shoe rebuilding",
  description: "Regan HD sandblasts, relines and rivets heavy-duty brake shoes. See how a worn core becomes a boxed, ready-to-fit kit.",
  alternates: { canonical: "/services" },
};

const W = "mx-auto w-full max-w-[1280px] px-5 md:px-8";
const H2 = "text-[1.875rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[2.5rem] md:leading-[1.15]";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Brake shoe rebuilding."
        lead="Worn heavy-duty brake shoe cores, stripped to bare steel, relined with new friction material, riveted and boxed."
        image={img.sandblast}
        alt="A brake shoe being sandblasted inside a blast cabinet"
        position="65% 50%"
      />

      <section className="bg-paper">
        <div className={`${W} grid gap-12 py-24 md:py-28 lg:grid-cols-12`}>
          <p className="text-xl leading-relaxed text-text md:text-[1.375rem] lg:col-span-7" data-reveal>
            A rebuilt shoe is only as good as the steel under the lining. That is why every core is sandblasted clean before anything new goes on, and why we rivet on the press rather than bond and hope.
          </p>
          <dl className="divide-y divide-steel-200 border-y border-steel-200 lg:col-span-4 lg:col-start-9" data-reveal>
            {processFacts.map((f) => (
              <div key={f.k} className="flex justify-between gap-4 py-3.5">
                <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">{f.k}</dt>
                <dd className="text-right text-[15px] font-semibold">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${W} py-24 md:py-32`}>
          <div className="max-w-[620px]" data-reveal>
            <Eyebrow>The process</Eyebrow>
            <h2 className={`${H2} mt-4`}>Four stages, one shop.</h2>
          </div>
          {/* TODO: client to confirm real steps and wording */}
          <ol className="relative mt-16 space-y-20 md:space-y-28">
            {shoeStages.map((s, i) => (
              <li key={s.title} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                <div className={`zoom overflow-hidden rounded-[4px] bg-ink-900 md:col-span-6 ${i % 2 ? "md:order-2" : ""}`} data-reveal>
                  <Image src={s.image} alt={s.alt} width={1200} height={900} sizes="(min-width: 768px) 600px, 100vw" className="aspect-[4/3] w-full object-cover" />
                </div>
                <div className={`md:col-span-5 ${i % 2 ? "md:col-start-1 md:order-1" : "md:col-start-8"}`} data-reveal>
                  <p className="font-mono text-[13px] tracking-[0.04em] text-steel-500">Stage 0{i + 1}</p>
                  <h3 className="mt-2 text-[1.75rem] font-bold leading-tight tracking-[-0.015em]">{s.title}</h3>
                  <p className="mt-4 text-lg text-steel-500">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grain relative flex min-h-[50vh] items-end overflow-hidden bg-ink-950 text-white">
        <Image src={img.worker} alt="A Regan HD technician at the riveting press" fill sizes="100vw" className="graded -z-20 object-cover object-[60%_45%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,13,26,.2)_0%,rgba(7,13,26,.85)_100%)]" aria-hidden />
        <div className={`${W} py-20`}>
          <p className="display-x max-w-[18ch] text-[2.25rem] font-extrabold leading-[1.08] md:text-[3.5rem]" data-reveal>
            Bare steel, new lining, tight rivets.
          </p>
        </div>
      </section>

      <CtaBand title="Have worn cores?" text="Tell us how many cores you have and which part numbers you need back. We'll reply with price and turnaround." href="/contact?type=refurbish" label="Get a rebuild quote" />
    </>
  );
}
