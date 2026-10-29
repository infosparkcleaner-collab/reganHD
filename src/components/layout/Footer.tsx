import Image from "next/image";
import Link from "next/link";
import { nav, site, skus } from "@/content/site";
import { SpeedRule } from "@/components/brand/SpeedRule";
import { Button } from "@/components/brand/Button";

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
      <SpeedRule width={24} className="text-blue-400" />
      {children}
    </p>
  );
}

export function Footer() {
  const c = site.contact;
  return (
    <footer className="grain relative bg-ink-950 text-steel-300">
      <div className="mx-auto max-w-[1280px] px-5 pt-24 md:px-8">
        <div className="grid items-end gap-8 border-b border-ink-700 pb-16 md:grid-cols-[1fr_auto]">
          <h2 className="max-w-[20ch] text-[2rem] font-bold leading-[1.1] tracking-[-0.015em] text-white md:text-[2.5rem]">
            Need shoes by part number? Send us the list.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">Request a quote</Button>
            <Button href="/products" variant="ghost">View part numbers</Button>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="inline-block rounded-[2px] bg-white px-3 py-2.5">
              <Image src="/images/brand/regan-hd-logo-tight.png" alt="Regan HD" width={1507} height={376} className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-[32ch] text-[15px] leading-relaxed">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ColHead>Company</ColHead>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              <li><Link href="/" className="ulink hover:text-white">Home</Link></li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="ulink hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ColHead>Part numbers</ColHead>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 font-mono text-[14px] tracking-[0.04em]">
              {skus.map((s) => (
                <li key={s}>
                  <Link href={`/contact?sku=${s}`} className="ulink hover:text-white">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <address className="not-italic">
            <ColHead>Contact</ColHead>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              <li><a href={c.phoneHref} className="text-white ulink">{c.phone}</a></li>
              <li><a href={`mailto:${c.email}`} className="ulink hover:text-white">{c.email}</a></li>
              <li>{c.address}</li>
              <li>{c.hours}</li>
            </ul>
            {c.placeholder && <p className="mt-4 text-xs text-steel-500">Contact details to be confirmed before launch.</p>}
          </address>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-700 py-6 text-[13px] text-steel-500 md:flex-row md:items-center md:justify-between">
          <p>© Regan HD. Marathon and Stop Box Kit are trademarks of their respective owner.</p>
          <a href="#top" className="ulink hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
