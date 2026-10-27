"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { skus } from "@/content/site";
import { RevealLines } from "@/components/motion/Text";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/** Digits roll up like a truck odometer when the tile scrolls into view. */
function Odometer({ value, delay }: { value: string; delay: number }) {
  return (
    <span className="flex h-[1em] overflow-clip font-mono text-4xl font-medium leading-none tracking-tight sm:text-5xl" aria-label={value}>
      {value.split("").map((d, i) => (
        <span key={i} className="relative block h-[1em] w-[0.62em] overflow-clip" aria-hidden>
          <motion.span
            className="block"
            initial={{ y: "0%" }}
            whileInView={{ y: `-${Number(d) * 10}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 + i * 0.18, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {DIGITS.map((n) => (
              <span key={n} className="block h-[1em] leading-none">
                {n}
              </span>
            ))}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Parts() {
  return (
    <section id="parts" className="scroll-mt-4 bg-steel text-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:py-32">
        <RevealLines lines={["Marathon", "part numbers"]} className="font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl" />
        <p className="mt-5 max-w-md text-lg text-navy/75">Pick a part number to start a quote. Specs and pricing on request.</p>
        {/* TODO: client to supply shoe sizes and truck fitment per part number */}
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skus.map((sku, i) => (
            <li key={sku}>
              <Link
                href={`?sku=${sku}#quote`}
                scroll={false}
                onClick={() =>
                  [...document.querySelectorAll<HTMLElement>('[id="quote"]')].find((n) => n.getClientRects().length > 0)?.scrollIntoView({ behavior: "smooth" })
                }
                className="cut-corner group relative flex h-full min-h-44 flex-col justify-between overflow-clip border border-navy/20 bg-white p-5 text-navy shadow-[0_12px_30px_-18px_rgba(14,42,107,0.5)] transition-colors duration-300 hover:text-white focus-visible:text-white"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-regan-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100" aria-hidden />
                <span className="absolute inset-x-0 top-0 h-1.5 bg-hazard" aria-hidden />
                <span className="relative mt-2"><Odometer value={sku} delay={i * 0.08} /></span>
                <span className="relative mt-6 text-sm font-semibold text-navy underline decoration-regan-red decoration-2 underline-offset-4 transition-colors group-hover:text-hazard">Request a quote</span>
              </Link>
            </li>
          ))}
          <li>
            <a href="#quote" className="cut-corner flex h-full min-h-44 flex-col justify-between bg-navy p-5 text-white hover:bg-regan-red">
              <span className="font-display text-2xl font-bold leading-tight">Need another size or fitment?</span>
              <span className="mt-6 text-sm font-semibold underline decoration-hazard decoration-2 underline-offset-4">Ask us</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
