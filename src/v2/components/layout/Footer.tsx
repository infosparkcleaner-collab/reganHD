import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10">
        <div className="cut-corner bg-white px-4 py-1.5">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={140} height={70} className="h-12 w-auto" />
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          {site.nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-white">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-white/50">{site.tagline}</p>
      </div>
    </footer>
  );
}
