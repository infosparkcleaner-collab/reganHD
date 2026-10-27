import { Suspense } from "react";
import { Header } from "@/v1/components/layout/Header";
import { Footer } from "@/v1/components/layout/Footer";
import { Hero } from "@/v1/components/sections/Hero";
import { Marathon } from "@/v1/components/sections/Marathon";
import { Refurbish } from "@/v1/components/sections/Refurbish";
import { Trucking } from "@/v1/components/sections/Trucking";
import { QuoteForm } from "@/v1/components/sections/QuoteForm";

export default function HomeV1() {
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

