import { Suspense } from "react";
import { Header } from "@/v2/components/layout/Header";
import { Footer } from "@/v2/components/layout/Footer";
import { Hero } from "@/v2/components/sections/Hero";
import { Marathon } from "@/v2/components/sections/Marathon";
import { Refurbish } from "@/v2/components/sections/Refurbish";
import { Trucking } from "@/v2/components/sections/Trucking";
import { QuoteForm } from "@/v2/components/sections/QuoteForm";

export default function HomeV2() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Refurbish />
        <Marathon />
        <Trucking />
        <Suspense>
          <QuoteForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

