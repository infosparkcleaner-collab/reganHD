import Image from "next/image";
import { products, skus } from "@/content/site";

export function Marathon() {
  return (
    <section id="marathon" className="scroll-mt-16 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Marathon brake systems</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Brake chambers and air disc brake parts for heavy-duty trucks and trailers, available from Regan HD.
            </p>
          </div>
          <Image src="/images/brand/marathon-logo.jpeg" alt="Marathon Brake Systems" width={220} height={110} className="h-20 w-auto mix-blend-multiply" />
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.src} className="group border border-steel bg-white">
              <div className="relative aspect-[4/3] bg-white">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="border-t border-steel p-4 font-display text-lg font-semibold text-ink">{p.label}</div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-ink">Part numbers in stock</h3>
          <p className="mt-1 text-sm text-ink/70">Pick a part number to request a quote. Specs and pricing are shared on request.</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {skus.map((sku) => (
              <li key={sku}>
                <a
                  href={`?sku=${sku}#quote`}
                  className="block border-2 border-ink bg-white px-5 py-3 font-display text-lg font-semibold text-ink hover:bg-ink hover:text-white"
                >
                  {sku}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
