import { processFacts } from "@/content/site";

/** Factual process strip, used instead of invented stats. */
export function ProcessFacts({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid grid-cols-2 divide-steel-200 rounded-[4px] border border-steel-200 bg-white shadow-[var(--shadow-2)] sm:grid-cols-4 sm:divide-x lg:grid-cols-5 ${className}`}>
      {processFacts.map((f, i) => (
        <li key={f.k} className={`border-steel-200 px-6 py-6 ${i === 4 ? "hidden lg:block" : ""} ${i < 2 ? "border-b sm:border-b-0" : ""}`}>
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-steel-500">{f.k}</p>
          <p className="mt-1.5 text-[16px] font-semibold text-text">{f.v}</p>
        </li>
      ))}
    </ul>
  );
}
