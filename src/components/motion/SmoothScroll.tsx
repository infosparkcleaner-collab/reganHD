"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Inertia scrolling, plus eased jumps for in-page anchor links. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      // Next keeps previously visited pages hidden in the DOM, so the same id can exist twice.
      const el = [...document.querySelectorAll<HTMLElement>(`[id="${id}"]`)].find((n) => n.getClientRects().length > 0);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.5 });
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
