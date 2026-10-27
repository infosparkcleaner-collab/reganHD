import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="stripes pointer-events-none absolute -right-24 top-0 h-full w-2/3 text-white/[0.04]" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Air brakes for heavy loads. New from Marathon, or rebuilt by us.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Regan HD supplies Marathon brake chambers and air disc brake parts to Canadian fleets and shops, and refurbishes your used brake parts so they go back on the truck.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="cut-corner bg-regan-red px-6 py-3.5 font-display font-semibold hover:bg-white hover:text-ink">
              Request a quote
            </a>
            <a href="#refurbish" className="cut-corner border border-white/40 px-6 py-3.5 font-display font-semibold hover:border-white hover:bg-white/10">
              See how refurbishing works
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="cut-corner relative aspect-[4/3] bg-white">
            <Image
              src="/images/products/spring-brake-18-24.jpeg"
              alt="Spring brake chamber"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-contain p-4"
            />
          </div>
          <div className="absolute -bottom-4 left-6 flex items-center gap-3 bg-regan-red px-4 py-2 font-display text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
            Brake refurbishing available
          </div>
        </div>
      </div>
    </section>
  );
}
