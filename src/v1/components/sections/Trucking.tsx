export function Trucking() {
  return (
    <section id="trucking" className="scroll-mt-16 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Built by people who run trucks</h2>
        <div className="space-y-4 text-lg leading-relaxed text-ink/75">
          {/* TODO: confirm trucking company name, services and regions with client */}
          <p>Regan HD is part of a Canadian trucking business. We know what an out-of-service truck costs, so we focus on parts that fit right and ship fast.</p>
          <p>Ask us about fleet pricing and repeat orders.</p>
        </div>
      </div>
    </section>
  );
}
