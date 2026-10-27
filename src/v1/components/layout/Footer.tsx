import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10">
        <div className="bg-white px-3 py-1">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={140} height={70} className="h-12 w-auto mix-blend-multiply" />
        </div>
        <p className="text-sm text-white/70">{site.tagline}</p>
        <p className="text-sm text-white/50">© Regan HD</p>
      </div>
    </footer>
  );
}
