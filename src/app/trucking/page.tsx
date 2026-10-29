import type { Metadata } from "next";
import { PageHeading } from "@/components/sections/PageHeading";
import { CtaButton } from "@/components/ui/CtaButton";

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
      <section className="mx-auto max-w-3xl px-5 py-14 text-lg md:px-6 md:py-20">
        <p>Regan HD is part of a Canadian trucking business. That is why we focus on parts that fit right and ship fast.</p>
        <p className="mt-5">Running a fleet or a repair shop? Ask us about fleet pricing and repeat orders.</p>
        <div className="mt-8">
          <CtaButton href="/contact">Talk to us</CtaButton>
        </div>
      </section>
    </>
  );
}
