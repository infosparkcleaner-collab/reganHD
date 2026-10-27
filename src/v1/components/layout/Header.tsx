import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-steel bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" aria-label="Regan HD home" className="block">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={160} height={80} className="h-14 w-auto mix-blend-multiply" priority />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="font-display text-sm font-medium text-ink hover:text-regan-red">
              {n.label}
            </a>
          ))}
          <a href="#quote" className="cut-corner bg-regan-red px-5 py-2.5 font-display text-sm font-semibold text-white hover:bg-ink">
            Request a quote
          </a>
        </nav>
        <a href="#quote" className="cut-corner bg-regan-red px-4 py-2 font-display text-sm font-semibold text-white md:hidden">
          Quote
        </a>
      </div>
    </header>
  );
}
