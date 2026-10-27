import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { HeroFull } from "@/components/sections/HeroFull";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// Banner 1: full-screen video hero with the headline over it.
export default function Banner1() {
  return <HomePage hero={<HeroFull />} />;
}
