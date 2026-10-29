import Image from "next/image";
import Link from "next/link";
import { shoeStages } from "@/content/site";

const btnRed = "inline-block bg-regan-red px-7 py-3.5 font-display text-lg font-semibold text-white hover:bg-navy";

export default function Home() {
  return (
    <>
      <section className="bg-regan-blue text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">Brake shoes, rebuilt right.</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
              Regan HD sandblasts, relines and rivets heavy-duty brake shoes, then packs them in Marathon Stop Box Kits for fleets and shops across Canada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className={btnRed}>
                Request a quote
              </Link>
              <Link href="/services" className="inline-block border-2 border-white/60 px-7 py-3 font-display text-lg font-semibold hover:border-white hover:bg-white/10">
                How we rebuild
              </Link>
            </div>
          </div>
          <Image
            src="/images/photos/worker-brake-shoe.jpeg"
            alt="A Regan HD worker pressing a relined brake shoe, with a sandblasting cabinet behind him"
            width={1200}
            height={800}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full border-4 border-white/20 object-cover"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">What we do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Brake shoe rebuilding", d: "Used cores are sandblasted, relined and riveted so they go back on the road.", href: "/services", cta: "See the process" },
              { t: "Marathon Stop Box Kits", d: "Heavy-duty brake shoe kits from Marathon, packed and shipped by Regan HD.", href: "/products", cta: "View part numbers" },
              { t: "Trucking", d: "Regan HD is part of a Canadian trucking business, so we know what downtime costs.", href: "/trucking", cta: "About our trucking" },
            ].map((c) => (
              <div key={c.t} className="border border-navy/15 border-t-4 border-t-hazard bg-white p-6">
                <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                <p className="mt-3 leading-relaxed text-navy/75">{c.d}</p>
                <Link href={c.href} className="mt-5 inline-block font-semibold text-regan-blue underline decoration-regan-red decoration-2 underline-offset-4 hover:text-regan-red">
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">From worn core to boxed kit</h2>
          {/* TODO: client to confirm real steps and wording */}
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shoeStages.map((s, i) => (
              <li key={s.title} className="bg-white p-6 shadow-sm">
                <span className="font-display text-3xl font-bold text-regan-red">{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Need brake shoes or a rebuild?</h2>
            <p className="mt-2 text-white/80">Tell us the part number. We&apos;ll reply with price and availability.</p>
          </div>
          <Link href="/contact" className={btnRed}>
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
