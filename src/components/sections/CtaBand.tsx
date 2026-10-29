import { Button } from "@/components/brand/Button";
import { Eyebrow } from "@/components/brand/Eyebrow";

export function CtaBand({ title, text, href = "/contact", label = "Request a quote" }: { title: string; text: string; href?: string; label?: string }) {
  return (
    <section className="border-t border-steel-200 bg-white">
      <div className="mx-auto grid max-w-[1280px] items-end gap-8 px-5 py-20 md:grid-cols-[1fr_auto] md:px-8 md:py-24">
        <div data-reveal>
          <Eyebrow>Quotes by part number</Eyebrow>
          <h2 className="mt-4 max-w-[22ch] text-[1.875rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[2.5rem]">{title}</h2>
          <p className="mt-4 max-w-[56ch] text-lg text-steel-500">{text}</p>
        </div>
        <div data-reveal>
          <Button href={href}>{label}</Button>
        </div>
      </div>
    </section>
  );
}
