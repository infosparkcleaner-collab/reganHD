import Image from "next/image";
import Link from "next/link";
import { audiences, img, shoeStages, skus } from "@/content/site";
import { Button } from "@/components/brand/Button";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { SpeedRule } from "@/components/brand/SpeedRule";
import { ProcessFacts } from "@/components/sections/ProcessFacts";

const W = "mx-auto w-full max-w-[1280px] px-5 md:px-8";
const H2 = "text-[1.875rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[2.5rem] md:leading-[1.15]";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative flex min-h-[640px] items-center overflow-hidden bg-ink-950 text-white md:min-h-[92vh]">
        <Image
          src={img.heroShop}
          alt="The Regan HD rebuild shop: racks of rebuilt brake shoes, a sandblasting cabinet and a riveting press"
          fill
          loading="eager" fetchPriority="high"
          sizes="100vw"
          className="settle -z-20 object-cover object-[80%_50%] md:object-[70%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,13,26,.92)_0%,rgba(7,13,26,.65)_40%,rgba(7,13,26,0)_72%)]" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[30%] bg-gradient-to-t from-ink-950/50 to-transparent" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-ink-950/55 md:hidden" aria-hidden />
        <div className={`${W} pb-32 pt-44 md:pb-40`}>
          <div className="max-w-[640px]">
            <Eyebrow dark>Heavy-duty brake shoes</Eyebrow>
            <h1 className="display-x mt-6 text-[2.75rem] font-extrabold leading-[1.06] md:text-[4.5rem] md:leading-[1.04]">
              Rebuilt to stop. Built in Canada.
            </h1>
            <SpeedRule className="draw mt-7 text-blue-400" />
            <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-steel-300 md:text-xl">
              Regan HD sandblasts, relines and rivets heavy-duty brake shoes, then ships them in Marathon Stop Box Kits to fleets, shops and distributors.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Request a quote</Button>
              <Button href="/services" variant="ghost">How we rebuild</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process facts, overlapping the hero */}
      <div className={`${W} relative z-10 -mt-16`}>
        <ProcessFacts />
      </div>

      {/* Who we serve */}
      <section className="bg-paper">
        <div className={`${W} py-24 md:py-32`}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4" data-reveal>
              <Eyebrow>Who we work with</Eyebrow>
              <h2 className={`${H2} mt-4`}>Built for the people who keep trucks moving.</h2>
            </div>
            <ul className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
              {audiences.map((a, i) => (
                <li key={a.t} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }} className="border-t-2 border-text pt-6">
                  <h3 className="text-[1.25rem] font-semibold leading-snug tracking-[-0.01em]">{a.t}</h3>
                  <p className="mt-3 text-[16px] text-steel-500">{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rebuild process */}
      <section className="bg-white">
        <div className={`${W} py-24 md:py-32`}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start" data-reveal>
              <Eyebrow>The rebuild</Eyebrow>
              <h2 className={`${H2} mt-4`}>From worn core to boxed kit.</h2>
              <p className="mt-5 max-w-[40ch] text-lg text-steel-500">Four stages, done in our own shop. Every shoe is stripped to bare steel before it gets new lining.</p>
              <Button href="/services" variant="link" className="mt-7">See the full process</Button>
            </div>
            {/* TODO: client to confirm real steps and wording */}
            <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:col-span-8">
              {shoeStages.map((s, i) => (
                <li key={s.title} data-reveal style={{ ["--d" as string]: `${(i % 2) * 70}ms` }}>
                  <div className="zoom overflow-hidden rounded-[4px] bg-ink-900">
                    <Image src={s.image} alt={s.alt} width={1200} height={900} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <p className="mt-5 font-mono text-[13px] tracking-[0.04em] text-steel-500">0{i + 1}</p>
                  <h3 className="mt-1 text-[1.375rem] font-semibold tracking-[-0.01em]">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-steel-500">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Dark band: the real shop */}
      <section className="grain relative bg-ink-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[640px]">
            <Image src={img.worker} alt="A Regan HD technician pressing a relined brake shoe" fill sizes="(min-width: 1024px) 50vw, 100vw" className="graded object-cover object-[65%_50%]" />
          </div>
          <div className="flex items-center px-5 py-20 md:px-16 lg:py-24">
            <div className="max-w-[520px]" data-reveal>
              <Eyebrow dark>Real shop, real parts</Eyebrow>
              <h2 className={`${H2} mt-4`}>Every shoe passes through our hands.</h2>
              <ol className="mt-8 divide-y divide-ink-700 border-y border-ink-700">
                {shoeStages.map((s, i) => (
                  <li key={s.title} className="flex items-baseline gap-5 py-4">
                    <span className="font-mono text-[13px] text-steel-300">0{i + 1}</span>
                    <span className="text-[17px] font-medium">{s.title}</span>
                  </li>
                ))}
              </ol>
              <Button href="/services" variant="linkDark" className="mt-8">How we rebuild</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Box Kit */}
      <section className="bg-steel-100">
        <div className={`${W} grid items-center gap-12 py-24 md:py-32 lg:grid-cols-12`}>
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Marathon Stop Box Kit</Eyebrow>
            <h2 className={`${H2} mt-4`}>One box, ready for the shop floor.</h2>
            <p className="mt-5 max-w-[46ch] text-lg text-steel-500">A heavy-duty brake shoe kit from Marathon Brake Systems, packed and shipped by Regan HD. Order by part number.</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {skus.map((s) => (
                <li key={s}>
                  <Link href={`/contact?sku=${s}`} className="inline-block rounded-[2px] border border-steel-200 bg-white px-3 py-1.5 font-mono text-[14px] tracking-[0.04em] text-text transition-colors hover:border-text">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/products" variant="secondary">View products</Button>
            </div>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <div className="zoom overflow-hidden rounded-[4px] shadow-[var(--shadow-2)]">
              <Image src={img.box} alt="Marathon Stop Box Kit, assembled in Canada" width={1526} height={1031} sizes="(min-width: 1024px) 680px, 100vw" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Trucking teaser */}
      <section className="grain relative flex min-h-[60vh] items-center overflow-hidden bg-ink-950 text-white">
        <Image src={img.truck} alt="A Regan HD semi truck on a Canadian highway at dawn" fill sizes="100vw" className="-z-20 object-cover object-[70%_50%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,13,26,.85)_0%,rgba(7,13,26,.5)_35%,rgba(7,13,26,0)_55%)]" aria-hidden />
        <div className={`${W} py-24`}>
          <div className="max-w-[460px]" data-reveal>
            <Eyebrow dark>Trucking</Eyebrow>
            <h2 className={`${H2} mt-4`}>We haul it too.</h2>
            <p className="mt-5 text-lg text-steel-300">Regan HD is part of a Canadian trucking business, so we know what a truck off the road costs.</p>
            <Button href="/trucking" variant="linkDark" className="mt-7">About our trucking</Button>
          </div>
        </div>
      </section>
    </>
  );
}
