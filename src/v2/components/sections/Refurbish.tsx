import { refurbSteps } from "@/content/site";
import { RefurbCompare } from "./RefurbCompare";

export function Refurbish() {
  return (
    <section id="refurbish" className="relative scroll-mt-0 bg-paper text-ink">
      <div className="slash-rule h-3" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-28">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">We also refurbish brakes</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/75">
            Don&apos;t replace a part that can be rebuilt. Send us your used brake parts and we&apos;ll inspect, rebuild and test them.
          </p>
          <ol className="mt-10 max-w-lg border-t border-ink/15">
            {refurbSteps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-ink/15 py-4">
                <span className="font-display text-2xl font-bold text-regan-red">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-0.5 text-[0.95rem] leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href="?type=refurbish#quote"
            className="cut-corner mt-10 inline-block bg-ink px-7 py-4 font-display text-lg font-semibold text-white hover:bg-regan-red"
          >
            Ask about refurbishing
          </a>
        </div>
        <RefurbCompare />
      </div>
    </section>
  );
}
