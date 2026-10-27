"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** A ring that trails the mouse and swells over anything clickable. Fine pointers only. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);
  const [big, setBig] = useState(false);
  const [onField, setOnField] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setOnField(!!t?.closest?.("input,select,textarea"));
      setBig(!!t?.closest?.("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      animate={{ scale: big ? 2 : 1, opacity: onField ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="pointer-events-none fixed left-0 top-0 z-[150] -ml-3.5 -mt-3.5 h-7 w-7 rounded-full border-2 border-white mix-blend-difference"
    />
  );
}
