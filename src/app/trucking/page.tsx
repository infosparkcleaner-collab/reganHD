import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/sections/PageHeading";

export const metadata: Metadata = {
  title: "Trucking",
  description: "Regan HD is part of a Canadian trucking business. We focus on brake parts that fit right and ship fast.",
  alternates: { canonical: "/trucking" },
};

export default function Trucking() {
  return (
    <>
      <PageHeading title="Trucking" intro="We run trucks too, so we know what a truck off the road costs." />
      {/* TODO: confirm trucking company name, services and regions with client */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-navy/85">
        <p>Regan HD is part of a Canadian trucking business. That is why we focus on parts that fit right and ship fast.</p>
        <p className="mt-5">Running a fleet or a repair shop? Ask us about fleet pricing and repeat orders.</p>
        <Link href="/contact" className="mt-8 inline-block bg-regan-red px-7 py-3.5 font-display text-lg font-semibold text-white hover:bg-navy">
          Talk to us
        </Link>
      </section>
    </>
  );
}
