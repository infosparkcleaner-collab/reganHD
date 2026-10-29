import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="border-t-4 border-hazard bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <div className="inline-block bg-white px-4 py-1.5">
            <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={140} height={70} className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/80 hover:text-hazard">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-2 text-sm not-italic text-white/80">
          <p>
            <a href={c.phoneHref} className="font-display text-lg font-semibold text-white hover:text-hazard">
              {c.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${c.email}`} className="hover:text-hazard">
              {c.email}
            </a>
          </p>
          <p>{c.address}</p>
          <p>{c.hours}</p>
          {c.placeholder && <p className="mt-3 inline-block bg-hazard px-2 py-1 text-xs font-semibold text-navy">Placeholder contact details</p>}
        </address>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-4 text-xs text-white/65">© Regan HD. Marathon Brake Systems and its logo belong to their owners.</p>
      </div>
    </footer>
  );
}
