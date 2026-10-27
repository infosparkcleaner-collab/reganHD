import { HomePage } from "@/components/HomePage";
import { Hero } from "@/components/sections/Hero";

// Banner 2: split hero (light panel, slanted video).
export default function Home() {
  return <HomePage hero={<Hero />} />;
}
