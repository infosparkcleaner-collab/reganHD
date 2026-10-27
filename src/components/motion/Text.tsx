"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReduced";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  /** Pass a boolean to control the reveal (used by the hero). Omit to reveal on scroll into view. */
  trigger?: boolean;
  stagger?: number;
  delay?: number;
};

/** Headline that slides up word by word out of a mask. */
export function RevealLines({ lines, className = "", as = "h2", trigger, stagger = 0.07, delay = 0 }: RevealProps) {
  const M = motion[as] as typeof motion.h2;
  const mode =
    trigger === undefined
      ? { whileInView: "show", viewport: { once: true, margin: "0px 0px -12% 0px" } }
      : { animate: trigger ? "show" : "hide" };
  return (
    <M
      className={className}
      aria-label={lines.join(" ")}
      initial="hide"
      variants={{ hide: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...mode}
    >
      {lines.map((line, i) => (
        <span key={i} aria-hidden className="block">
          {line.split(" ").map((w, j) => (
            <span key={j} className="-mb-[0.14em] inline-block overflow-clip pb-[0.14em] align-bottom">
              <motion.span
                className="inline-block"
                variants={{ hide: { y: "115%" }, show: { y: "0%", transition: { duration: 0.95, ease } } }}
              >
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </M>
  );
}

function Word({ w, p, start, end }: { w: string; p: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(p, [start, end], [0.16, 1], { clamp: true });
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {w}
    </motion.span>
  );
}

/** Paragraph whose words light up as `progress` moves through `range`. */
export function ScrubText({
  text,
  progress,
  range = [0, 1],
  className = "",
}: {
  text: string;
  progress: MotionValue<number>;
  range?: [number, number];
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <p className={className}>{text}</p>;
  const words = text.split(" ");
  const span = range[1] - range[0];
  return (
    <p className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} w={w} p={progress} start={range[0] + span * (i / words.length)} end={range[0] + span * ((i + 1) / words.length)} />
      ))}
    </p>
  );
}
