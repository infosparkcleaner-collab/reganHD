import Image from "next/image";
import { products, skus } from "@/content/site";

export function Marathon() {
  return (
    <section id="marathon" className="scroll-mt-4 bg-[#0b1430] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="cut-corner inline-block bg-white px-5 py-3">
              <Image src="/images/brand/marathon-logo.jpeg" alt="Marathon Brake Systems" width={240} height={120} className="h-20 w-auto" />
            </div>
            <h2 className="mt-8 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">Marathon brake systems</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              Brake chambers and air disc brake parts for heavy-duty trucks and trailers, supplied by Regan HD.
            </p>
          </div>

          {/* Placeholder photos: offset for rhythm, labelled until real photography arrives */}
          <ul className="grid grid-cols-3 gap-3 sm:gap-5">
            {products.map((p, i) => (
              <li key={p.src} className={i === 1 ? "translate-y-6" : i === 2 ? "translate-y-12" : ""}>
                <div className="cut-corner relative aspect-[4/5] bg-white">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 20vw, 30vw" className="object-contain p-2" />
                </div>
                <p className="mt-2 font-display text-sm font-semibold sm:text-base">{p.label}</p>
                <p className="text-xs text-white/50">Placeholder photo</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">Marathon part numbers</h3>
          <p className="mt-2 text-white/65">Pick a part number to start a quote. Specs and pricing on request.</p>
          <ul className="mt-8 grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-3 lg:grid-cols-4">
            {skus.map((sku) => (
              <li key={sku} className="bg-[#0b1430]">
                <a
                  href={`?sku=${sku}#quote`}
                  className="group flex h-full min-h-36 flex-col justify-between p-5 transition-colors hover:bg-regan-red focus-visible:bg-regan-red"
                >
                  <span className="font-mono text-4xl font-medium tracking-tight sm:text-5xl">{sku}</span>
                  <span className="mt-6 text-sm text-white/60 group-hover:text-white">Request a quote</span>
                </a>
              </li>
            ))}
            <li className="hidden bg-[#0b1430] lg:block" aria-hidden />
          </ul>
        </div>
      </div>
    </section>
  );
}
