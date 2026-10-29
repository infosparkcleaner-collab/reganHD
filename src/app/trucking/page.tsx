import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Trucking",
  description: "Regan HD is part of a Canadian trucking business. We focus on brake parts that fit right and ship fast.",
  alternates: { canonical: "/trucking" },
};

const W = "mx-auto w-full max-w-[1280px] px-5 md:px-8";
const H2 = "text-[1.875rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[2.5rem] md:leading-[1.15]";

// TODO: confirm trucking company name, services and regions with client. Copy below is deliberately general.
const points = [
  { t: "We run trucks", d: "Regan HD is part of a Canadian trucking business. Our own equipment depends on the brakes we rebuild." },
  { t: "We know downtime", d: "A truck off the road costs money every hour. That is why we focus on parts that fit right and ship fast." },
  { t: "Fleet accounts", d: "Running a fleet or a repair shop? Ask us about fleet pricing and repeat orders." },
];

export default function Trucking() {
  return (
    <>
      <PageHero
        eyebrow="Trucking"
        title="Freight, handled by the same team."
        lead="We run trucks too, so we know what a truck off the road costs."
        image={img.truck}
        alt="A semi truck on a Canadian highway at dawn"
        position="75% 60%"
        height="min-h-[80vh]"
      />

      <section className="bg-paper">
        <div className={`${W} py-24 md:py-32`}>
          <div className="max-w-[620px]" data-reveal>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className={`${H2} mt-4`}>Parts people who also drive the miles.</h2>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {points.map((p, i) => (
              <li key={p.t} className="border-t-2 border-text pt-6" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                <p className="font-mono text-[13px] text-steel-500">0{i + 1}</p>
                <h3 className="mt-2 text-[1.375rem] font-semibold tracking-[-0.01em]">{p.t}</h3>
                <p className="mt-3 text-[16px] text-steel-500">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grain relative flex aspect-[4/3] items-end overflow-hidden bg-ink-950 text-white md:aspect-[21/9]">
        <Image src={img.fleet} alt="Semi tractors parked in a fleet yard at dusk" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,13,26,0)_30%,rgba(7,13,26,.9)_100%)]" aria-hidden />
        <div className={`${W} grid gap-6 pb-12 md:grid-cols-2 md:pb-16`} data-reveal>
          <h2 className={H2}>Same yard, same standards.</h2>
          <p className="self-end text-lg text-steel-300">The shoes we rebuild go on trucks like ours. Ask about routes, regions and capacity.</p>
        </div>
      </section>

      <CtaBand title="Talk to us about trucking." text="Tell us what you need moved or maintained, and we'll get back to you." label="Contact us" />
    </>
  );
}
