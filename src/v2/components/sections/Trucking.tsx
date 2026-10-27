export function Trucking() {
  return (
    <section id="trucking" className="scroll-mt-4 bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-32">
        {/* TODO: confirm trucking company name, services and regions with client */}
        <p className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          We run trucks too, so we know what a truck off the road costs.
        </p>
        <div className="mt-10 h-1.5 w-full max-w-4xl bg-[repeating-linear-gradient(90deg,#17409a_0_36px,transparent_36px_60px)]" aria-hidden />
        <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-ink/75 md:grid-cols-2">
          <p>Regan HD is part of a Canadian trucking business. That is why we focus on parts that fit right and ship fast.</p>
          <p>
            Running a fleet or a repair shop? Ask us about fleet pricing and repeat orders.{" "}
            <a href="#quote" className="font-semibold text-regan-red underline underline-offset-4">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
