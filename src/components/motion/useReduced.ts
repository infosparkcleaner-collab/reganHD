"use client";

import { useEffect, useState } from "react";

/**
 * True when the visitor asked for reduced motion. Starts false and updates after hydration so the
 * first client render matches the server HTML (Motion's own hook reads the preference during the
 * first render, which makes pinned layouts mismatch).
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
