import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";

/** Visible Q&A plus matching FAQPage data, written for search and answer engines. */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <JsonLd
        data={{
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4" data-reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-[1.875rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[2.5rem] md:leading-[1.15]">Questions buyers ask.</h2>
          <p className="mt-5 max-w-[36ch] text-lg text-steel-500">Straight answers about rebuilt brake shoes, cores and the Stop Box Kit.</p>
        </div>
        <div className="divide-y divide-steel-200 border-y border-steel-200 lg:col-span-8" data-reveal>
          {faqs.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.125rem] font-semibold tracking-[-0.01em] marker:content-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-[inherit] text-[1.125rem] font-semibold">{f.q}</h3>
                <Plus size={20} aria-hidden className="shrink-0 text-steel-500 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="-mt-1 max-w-[64ch] pb-6 text-[16px] text-steel-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
