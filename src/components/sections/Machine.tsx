"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReduced";
import { videos } from "@/content/site";
import { RevealLines, ScrubText } from "@/components/motion/Text";
import { Magnetic } from "@/components/motion/Magnetic";
import { AutoVideo } from "@/components/motion/AutoVideo";

export function Machine() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const done = useMotionValue(1);
  const p = reduced ? done : scrollYProgress;

  // The clip grows from a window in the middle to the full screen, then the copy lights up.
  const clip = useTransform(p, [0, 0.38], ["inset(26% 32% 26% 32%)", "inset(0% 0% 0% 0%)"], { clamp: true });
  const mediaScale = useTransform(p, [0, 0.38], [1.35, 1], { clamp: true });
  const shade = useTransform(p, [0.1, 0.45], [0, 0.12], { clamp: true });
  const ctaO = useTransform(p, [0.7, 0.85], [0, 1], { clamp: true });
  const ctaY = useTransform(p, [0.7, 0.85], [24, 0], { clamp: true });

  return (
    <section id="machine" ref={ref} className={`relative bg-regan-blue text-white ${reduced ? "" : "h-[200vh]"}`}>
      <div className={`${reduced ? "min-h-dvh" : "sticky top-0 h-dvh"} overflow-clip`}>
        <div className="stripes pointer-events-none absolute inset-0 text-white/[0.06]" aria-hidden />
        <motion.div style={reduced ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: clip }} className="absolute inset-0">
          <motion.div style={reduced ? undefined : { scale: mediaScale }} className="absolute inset-0">
            {videos.blast ? (
              <AutoVideo className="h-full w-full object-cover" src={videos.blast} poster="/images/photos/worker-brake-shoe.jpeg" />
            ) : (
              <Image src="/images/photos/worker-brake-shoe.jpeg" alt="Sandblasting cabinet in the Regan HD workshop" fill sizes="100vw" className="object-cover" />
            )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/70" aria-hidden />
          <motion.div style={{ opacity: shade }} className="absolute inset-0 bg-navy" aria-hidden />
        </motion.div>

        <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-between gap-10 px-5 pb-14 pt-28">
          <RevealLines
            lines={["Blasted clean,", "not scrapped."]}
            className="max-w-3xl font-display text-[clamp(2.6rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.02em]"
          />
          <div>
            {/* TODO: client to confirm cabinet make, blast media and any inspection step after blasting */}
            <ScrubText
              text="Every core goes through our sandblasting cabinet before it is relined. Rust and old lining are stripped back to bare steel, so the new lining sits on a clean shoe."
              progress={p}
              range={[0.34, 0.68]}
              className="max-w-xl text-xl leading-relaxed md:text-2xl"
            />
            <motion.div style={reduced ? undefined : { opacity: ctaO, y: ctaY }} className="mt-8">
              <Magnetic>
                <a href="?type=refurbish#quote" className="cut-corner block bg-hazard px-7 py-4 font-display text-lg font-semibold text-navy hover:bg-white">
                  Send us your cores
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
