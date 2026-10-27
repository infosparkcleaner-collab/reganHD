import { refurbSteps } from "@/content/site";

export function Refurbish() {
  return (
    <section id="refurbish" className="scroll-mt-16 bg-regan-blue text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">We also refurbish brakes</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Don&apos;t replace a part that can be rebuilt. Send us your used brake parts and we&apos;ll inspect, rebuild and test them.
          </p>
        </div>
        <ol className="mt-10 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-5">
          {refurbSteps.map((s, i) => (
            <li key={s.title} className="border-b border-r border-white/20 p-6">
              <span className="font-display text-sm text-white/60">Step {i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{s.text}</p>
            </li>
          ))}
        </ol>
        <a href="?type=refurbish#quote" className="cut-corner mt-10 inline-block bg-white px-6 py-3.5 font-display font-semibold text-ink hover:bg-regan-red hover:text-white">
          Ask about refurbishing
        </a>
      </div>
    </section>
  );
}
