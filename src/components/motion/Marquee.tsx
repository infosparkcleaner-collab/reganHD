"use client";

import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReduced";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const WORDS = ["Sandblast", "Reline", "Rivet", "Box", "Ship"];

/** Giant ticker that speeds up, and reverses, with scroll velocity. */
export function Marquee() {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const dir = useMotionValue(1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const f = factor.get();
    if (f < 0) dir.set(-1);
    else if (f > 0) dir.set(1);
    baseX.set(baseX.get() + dir.get() * (1.6 + Math.abs(f)) * (delta / 1000));
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, -v)}%`);

  const row = (
    <span className="flex shrink-0 items-center">
      {WORDS.map((w, i) => (
        <span key={w} className="flex items-center">
          <span
            className={`px-6 font-display text-[clamp(3.5rem,11vw,9rem)] font-bold uppercase leading-none tracking-tight ${
              i % 2 ? "text-transparent [-webkit-text-stroke:2px_#0a1f4d]" : "text-navy"
            }`}
          >
            {w}
          </span>
          <span className="slash-bars mx-3 h-[clamp(2.5rem,7vw,6rem)] w-[clamp(2.5rem,7vw,6rem)]" aria-hidden />
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-clip bg-hazard py-8" aria-hidden>
      <motion.div style={{ x }} className="flex w-max whitespace-nowrap">
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </div>
  );
}
