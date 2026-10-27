import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <div className="cut-corner mx-auto flex h-14 max-w-6xl items-center justify-between bg-white pl-3 pr-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] md:pr-2.5">
        <Link href="/" aria-label="Regan HD home" className="block">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={160} height={80} className="h-12 w-auto" priority />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1">
          <ul className="hidden items-center md:flex">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="px-4 py-2 font-display text-sm font-medium text-ink hover:text-regan-red">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#quote" className="cut-corner bg-regan-red px-5 py-2.5 font-display text-sm font-semibold text-white hover:bg-ink">
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
