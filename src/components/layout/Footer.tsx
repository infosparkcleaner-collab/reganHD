import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1.3fr] md:px-6">
        <div>
          <div className="inline-block rounded-sm bg-white px-3 py-1.5">
            <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={140} height={70} className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-[0.9375rem] text-white/75">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold">Pages</p>
          <ul className="mt-3 space-y-2 text-[0.9375rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/80 hover:text-white hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-1.5 text-[0.9375rem] not-italic text-white/80">
          <p className="font-semibold text-white">Contact</p>
          <p className="pt-1.5">
            <a href={c.phoneHref} className="hover:underline">{c.phone}</a>
          </p>
          <p>
            <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
          </p>
          <p>{c.address}</p>
          <p>{c.hours}</p>
          {c.placeholder && <p className="pt-2 text-xs text-white/50">Placeholder contact details, to be replaced before launch.</p>}
        </address>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-[0.8125rem] text-white/60 md:px-6">© Regan HD. Marathon Brake Systems and its logo belong to their owners.</p>
      </div>
    </footer>
  );
}
