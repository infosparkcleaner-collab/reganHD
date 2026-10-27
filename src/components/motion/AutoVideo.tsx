"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "@/components/motion/useReduced";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** Show a pause/play button (WCAG 2.2.2). Parent must be positioned. */
  control?: boolean;
  controlClass?: string;
};

/**
 * Muted looping clip that loads metadata only, plays while on screen, and never autoplays
 * for visitors who ask for reduced motion (they see the poster frame).
 */
export function AutoVideo({ src, poster, className = "", control = false, controlClass = "bottom-4 right-4" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const heldByUser = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !heldByUser.current) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <>
      <video
        ref={ref}
        className={className}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {control && (
        <button
          type="button"
          onClick={() => {
            const v = ref.current;
            if (!v) return;
            if (v.paused) {
              heldByUser.current = false;
              v.play().catch(() => {});
            } else {
              heldByUser.current = true;
              v.pause();
            }
          }}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className={`absolute z-10 grid h-11 w-11 place-items-center bg-white/90 text-navy shadow-md hover:bg-hazard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-regan-blue ${controlClass}`}
        >
          {playing ? <Pause size={18} aria-hidden /> : <Play size={18} aria-hidden />}
        </button>
      )}
    </>
  );
}
