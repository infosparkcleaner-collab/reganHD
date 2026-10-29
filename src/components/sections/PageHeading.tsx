export function PageHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="bg-regan-blue text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
      </div>
    </section>
  );
}
