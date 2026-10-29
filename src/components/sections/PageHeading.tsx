export function PageHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
        <h1 className="text-[2.125rem] leading-tight md:text-[2.75rem] md:leading-[1.15]">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate">{intro}</p>
      </div>
    </section>
  );
}
