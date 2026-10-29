import Image from "next/image";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { SpeedRule } from "@/components/brand/SpeedRule";

/** Dark photographic hero for inner pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  position = "60% 50%",
  height = "min-h-[64vh]",
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  alt: string;
  position?: string;
  height?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`grain relative flex ${height} items-end overflow-hidden bg-ink-950 text-white`}>
      <Image src={image} alt={alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="settle -z-20 object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,13,26,.92)_0%,rgba(7,13,26,.7)_40%,rgba(7,13,26,.15)_80%)]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink-950/60 to-transparent" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-ink-950/50 md:hidden" aria-hidden />
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-40 md:px-8 md:pb-20">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[18ch] text-[2.375rem] font-bold leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">{title}</h1>
        <SpeedRule className="draw mt-6 text-blue-400" />
        {lead && <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-steel-300 md:text-xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
