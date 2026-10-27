"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { MotionConfig, motion } from "motion/react";

const IntroContext = createContext(false);
/** True once the intro curtain has started lifting (or was skipped). */
export const useIntro = () => useContext(IntroContext);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("rhd-intro") === "1";
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      setReady(true);
      return;
    }
    const t0 = performance.now();
    const id = setInterval(() => {
      const k = Math.min(100, Math.round((performance.now() - t0) / 8));
      setN(k);
      if (k >= 100) {
        clearInterval(id);
        try {
          sessionStorage.setItem("rhd-intro", "1");
        } catch {}
        setReady(true);
        setTimeout(() => setShow(false), 800);
      }
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <IntroContext.Provider value={ready}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
      {show && (
        <motion.div
          aria-hidden
          initial={false}
          animate={{ clipPath: ready ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-white text-navy"
        >
          <div className="stripes absolute inset-0 text-regan-blue/[0.06]" />
          <div className="cut-corner relative border-2 border-navy/10 bg-white px-5 py-2 shadow-[0_20px_40px_-20px_rgba(14,42,107,0.5)]">
            <Image src="/images/brand/regan-hd-logo.jpeg" alt="" width={200} height={100} className="h-16 w-auto" priority />
          </div>
          <div className="relative w-64">
            <div className="h-1.5 w-full bg-navy/15">
              <div className="h-full bg-regan-red" style={{ width: `${n}%` }} />
            </div>
            <p className="mt-3 text-right font-display text-3xl font-semibold tabular-nums">
              {n}
              <span className="ml-1 text-sm font-normal text-navy/60">% ready</span>
            </p>
          </div>
        </motion.div>
      )}
    </IntroContext.Provider>
  );
}
