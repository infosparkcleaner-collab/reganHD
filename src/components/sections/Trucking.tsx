"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { ScrubText } from "@/components/motion/Text";
import { Magnetic } from "@/components/motion/Magnetic";

export function Trucking() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });

  return (
    <section id="trucking" ref={ref} className="relative scroll-mt-4 overflow-clip bg-hazard text-navy">
      <style>{`@keyframes lane{from{background-position:0 0}to{background-position:-120px 0}}.lane{animation:lane 1.1s linear infinite}@media (prefers-reduced-motion:reduce){.lane{animation:none}}`}</style>
      <div className="mx-auto max-w-7xl px-5 py-24 lg:py-36">
        {/* TODO: confirm trucking company name, services and regions with client */}
        <ScrubText
          text="We run trucks too, so we know what a truck off the road costs."
          progress={scrollYProgress}
          range={[0, 0.7]}
          className="max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="lane mt-12 h-2.5 w-full origin-left bg-[repeating-linear-gradient(90deg,#17409a_0_60px,transparent_60px_120px)]"
          aria-hidden
        />
        <div className="mt-10 grid max-w-4xl gap-6 text-lg leading-relaxed text-navy/85 md:grid-cols-2">
          <p>Regan HD is part of a Canadian trucking business. That is why we focus on parts that fit right and ship fast.</p>
          <div>
            <p>Running a fleet or a repair shop? Ask us about fleet pricing and repeat orders.</p>
            <div className="mt-5">
              <Magnetic>
                <a href="#quote" className="cut-corner block bg-navy px-6 py-3.5 font-display font-semibold text-white hover:bg-regan-red">
                  Talk to us
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
