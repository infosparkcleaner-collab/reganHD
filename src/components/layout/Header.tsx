import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5">
        <Link href="/" aria-label="Regan HD home" className="block shrink-0">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={160} height={80} className="h-14 w-auto" priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block px-3 py-2 font-display text-sm font-medium text-navy hover:text-regan-red">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.contact.phoneHref} className="hidden items-center gap-2 font-display text-sm font-semibold text-navy hover:text-regan-red md:flex">
            <Phone size={16} aria-hidden />
            {site.contact.phone}
          </a>
          <Link href="/contact" className="hidden bg-regan-red px-5 py-2.5 font-display text-sm font-semibold text-white hover:bg-navy sm:block">
            Request a quote
          </Link>

          {/* Mobile menu: native <details>, works without JavaScript */}
          <details className="group relative lg:hidden">
            <summary aria-label="Menu" className="grid h-11 w-11 cursor-pointer list-none place-items-center text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <Menu size={26} aria-hidden />
            </summary>
            <div className="absolute right-0 top-full mt-3 w-72 border border-navy/10 bg-white shadow-lg">
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="block border-b border-navy/10 px-4 py-3.5 font-display font-semibold text-navy hover:text-regan-red">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block bg-regan-red px-4 py-3.5 text-center font-display font-semibold text-white">
                Request a quote
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
