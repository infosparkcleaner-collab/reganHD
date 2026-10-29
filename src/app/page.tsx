import Image from "next/image";
import Link from "next/link";
import { shoeStages } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";

const link = "font-semibold text-regan-blue hover:underline";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="text-[2.5rem] leading-[1.12] md:text-5xl md:leading-[1.12]">Heavy-duty brake shoes, rebuilt right.</h1>
            <p className="mt-5 max-w-lg text-xl leading-relaxed text-slate">
              Regan HD sandblasts, relines and rivets heavy-duty brake shoes, then packs them in Marathon Stop Box Kits for fleets and shops across Canada.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CtaButton href="/contact">Request a quote</CtaButton>
              <Link href="/services" className={link}>How we rebuild</Link>
            </div>
          </div>
          <Image
            src="/images/photos/worker-brake-shoe.jpeg"
            alt="A Regan HD worker pressing a relined brake shoe, with a sandblasting cabinet behind him"
            width={1200}
            height={800}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full rounded-sm"
          />
        </div>
      </section>

      <section className="border-y border-rule bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:gap-0 md:px-6 md:py-20">
          {[
            { t: "Brake shoe rebuilding", d: "Used cores are sandblasted, relined and riveted so they go back on the road.", href: "/services", cta: "See the process" },
            { t: "Marathon Stop Box Kits", d: "Heavy-duty brake shoe kits from Marathon, packed and shipped by Regan HD.", href: "/products", cta: "View part numbers" },
            { t: "Trucking", d: "Regan HD is part of a Canadian trucking business, so we know what downtime costs.", href: "/trucking", cta: "About our trucking" },
          ].map((c, i) => (
            <div key={c.t} className={`md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-rule"} ${i === 2 ? "md:pr-0" : ""}`}>
              <h2 className="text-xl">{c.t}</h2>
              <p className="mt-3 text-slate">{c.d}</p>
              <Link href={c.href} className={`${link} mt-4 inline-block`}>{c.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
          <h2 className="text-[1.875rem] leading-tight">From worn core to boxed kit</h2>
          {/* TODO: client to confirm real steps and wording */}
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {shoeStages.map((s, i) => (
              <li key={s.title} className="border-t-2 border-navy pt-4">
                <p className="font-display text-sm font-semibold text-slate">Step {i + 1}</p>
                <h3 className="mt-1 text-lg">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-14">
          <Image src="/images/photos/stop-box-kit.jpeg" alt="Marathon and Regan HD Stop Box Kit, a heavy-duty brake shoe kit" width={1526} height={1031} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full rounded-sm" />
          <div>
            <h2 className="text-[1.875rem] leading-tight">The Stop Box Kit</h2>
            <p className="mt-4 max-w-md text-slate">A heavy-duty brake shoe kit from Marathon, packed and shipped by Regan HD. One box, ready for the shop floor.</p>
            <Link href="/products" className={`${link} mt-5 inline-block`}>View part numbers</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-6 md:py-16">
          <h2 className="text-[1.875rem] leading-tight">Need brake shoes or a rebuild?</h2>
          <p className="mx-auto mt-3 max-w-lg text-slate">Tell us the part number. We&apos;ll reply with price and availability.</p>
          <div className="mt-7">
            <CtaButton href="/contact">Request a quote</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
