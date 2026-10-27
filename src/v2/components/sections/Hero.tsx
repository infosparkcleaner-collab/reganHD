"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { BrakeAssembly } from "@/v2/components/brake/BrakeAssembly";

const TOP_SPEED = 6; // degrees per frame at highway speed

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // The brake bites over the first 85% of the scroll, then holds.
  const braked = useTransform(scrollYProgress, [0, 0.85], [0, 1], { clamp: true });
  const speed = useTransform(braked, (b) => (reduced ? 0 : TOP_SPEED * Math.pow(1 - b, 2)));
  const heat = useTransform(braked, (b) => (reduced ? 0.25 : Math.pow(1 - b, 1.5)));
  const kmh = useTransform(speed, (s) => Math.round((s / TOP_SPEED) * 100));

  const angle = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    angle.set(angle.get() + speed.get() * (delta / 16.67));
  });

  const stoppedOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const stoppedY = useTransform(scrollYProgress, [0.7, 0.9], [16, 0]);

  return (
    <section ref={ref} className="relative h-[190vh] bg-[#080b14] text-white">
      <div className="sticky top-0 h-screen overflow-clip">
        <div className="stripes pointer-events-none absolute inset-y-0 left-0 w-1/2 text-white/[0.025]" aria-hidden />

        {/* Rotor bleeds off the right edge */}
        <div className="absolute -right-[32%] top-[46%] w-[135vw] -translate-y-1/2 md:-right-[6%] md:top-1/2 md:w-[min(108vh,58vw)] lg:right-[1%] lg:w-[min(108vh,56vw)]">
          <BrakeAssembly rotate={angle} heat={heat} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080b14] via-[#080b14]/70 to-transparent md:via-[#080b14]/30" aria-hidden />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pb-10 pt-24">
          <h1 className="font-display text-[clamp(3.4rem,11vw,9.5rem)] font-bold leading-[0.9] tracking-[-0.03em]">
            Built
            <br />
            to stop.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75 md:text-xl">
            Marathon air brake parts for heavy-duty trucks and trailers, and a brake refurbishing service for fleets and shops across Canada.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#quote" className="cut-corner bg-regan-red px-7 py-4 font-display text-lg font-semibold hover:bg-white hover:text-ink">
              Request a quote
            </a>
            <a href="#refurbish" className="border-2 border-white/35 px-7 py-[0.875rem] font-display text-lg font-semibold hover:border-white hover:bg-white/10">
              Brake refurbishing
            </a>
          </div>

          <div className="absolute bottom-8 left-5 hidden items-baseline gap-2 text-white/60 sm:flex" aria-hidden>
            <motion.span className="font-display text-3xl font-semibold tabular-nums text-white">{kmh}</motion.span>
            <span className="text-sm">wheel speed</span>
          </div>

          <motion.div
            style={reduced ? undefined : { opacity: stoppedOpacity, y: stoppedY }}
            className="absolute inset-x-5 bottom-5 border-l-4 border-regan-red bg-[#0d1220]/90 p-4 backdrop-blur-md sm:left-auto sm:max-w-xs md:bottom-10 md:right-8"
          >
            <p className="font-display text-xl font-semibold">Worn out? Don&apos;t scrap it.</p>
            <p className="mt-1 text-sm leading-relaxed text-white/75">We refurbish used brakes so they go back on the truck.</p>
            <a href="#refurbish" className="mt-3 inline-block font-display text-sm font-semibold underline decoration-regan-red decoration-2 underline-offset-4 hover:text-regan-red">
              See how refurbishing works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

