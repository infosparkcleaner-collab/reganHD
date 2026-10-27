import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/motion/Marquee";
import { ShoeJourney } from "@/components/sections/ShoeJourney";
import { Machine } from "@/components/sections/Machine";
import { StopBox } from "@/components/sections/StopBox";
import { Parts } from "@/components/sections/Parts";
import { Trucking } from "@/components/sections/Trucking";
import { QuoteForm } from "@/components/sections/QuoteForm";

/** Everything except the hero, so the two banner pages share the same body. */
export function HomePage({ hero }: { hero: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {hero}
        <Marquee />
        <ShoeJourney />
        <Machine />
        <StopBox />
        <Parts />
        <Trucking />
        <Suspense>
          <QuoteForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
