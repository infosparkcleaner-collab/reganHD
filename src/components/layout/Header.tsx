import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { nav, site } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-white">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 md:px-6">
        <Link href="/" aria-label="Regan HD home" className="block shrink-0">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={160} height={80} className="h-11 w-auto" priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="py-2 text-base font-semibold text-navy underline-offset-[10px] decoration-2 hover:text-regan-blue hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a href={site.contact.phoneHref} className="hidden text-base font-semibold text-navy hover:text-regan-blue md:block">
            {site.contact.phone}
          </a>
          <CtaButton href="/contact" className="hidden sm:inline-flex">Request a quote</CtaButton>

          {/* Mobile menu: native <details>, works without JavaScript */}
          <details className="relative lg:hidden">
            <summary aria-label="Menu" className="grid h-11 w-11 cursor-pointer list-none place-items-center text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <Menu size={26} aria-hidden />
            </summary>
            <div className="absolute right-0 top-full mt-3 w-72 border border-rule bg-white shadow-md">
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="block border-b border-rule px-5 py-3.5 font-semibold text-navy hover:text-regan-blue">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <CtaButton href="/contact" className="w-full justify-center">Request a quote</CtaButton>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
