"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReduced";
import { shoeStages, videos } from "@/content/site";
import { RevealLines } from "@/components/motion/Text";

type Media = { src: string | null; img: string; origin: string; zoom: number; alt: string };

// One real clip per stage. Until a stage's own clip exists, it borrows the nearest real footage.
const MEDIA: Media[] = [
  { src: videos.cores, img: "/images/photos/worker-brake-shoe.jpeg", origin: "47% 66%", zoom: 2.3, alt: "Worn, rusty used brake shoes on a workshop bench" },
  { src: videos.blast, img: "/images/photos/worker-brake-shoe.jpeg", origin: "36% 42%", zoom: 2.1, alt: "Sandblasting a brake shoe in the cabinet" },
  { src: videos.rivet ?? videos.banner, img: "/images/photos/worker-brake-shoe.jpeg", origin: "80% 70%", zoom: 1.6, alt: "Relining and riveting a brake shoe on the press" },
  { src: videos.pack ?? videos.box, img: "/images/photos/stop-box-kit.jpeg", origin: "50% 50%", zoom: 1, alt: "A finished Marathon Stop Box Kit" },
];

function Layer({ m, active }: { m: Media; active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (active && !reducedMotion) v.play().catch(() => {});
    else v.pause();
  }, [active, reducedMotion]);
  return (
    <motion.div
      aria-hidden={!active}
      initial={false}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.08 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      {m.src ? (
        <video ref={ref} className="h-full w-full object-cover" src={m.src} muted loop playsInline preload="metadata" aria-hidden />
      ) : (
        <Image src={m.img} alt={m.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" style={{ transform: `scale(${m.zoom})`, transformOrigin: m.origin }} />
      )}
    </motion.div>
  );
}

const stageAt = (p: number) => Math.min(3, Math.floor(p * 4));

export function ShoeJourney() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(stageAt(v)));
  const rail = useTransform(scrollYProgress, [0, 1], [0.02, 1]);

  return (
    <section id="process" ref={ref} className={`relative bg-cloud text-navy ${reduced ? "" : "h-[420vh]"}`}>
      <div className={`${reduced ? "" : "sticky top-0 h-dvh"} overflow-clip`}>
        <div className="mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr_auto] gap-5 px-5 pb-8 pt-24 md:grid-cols-[1.45fr_1fr] md:grid-rows-1 md:items-center md:gap-14 md:pb-10">
          <div className="relative md:order-1">
            <div className="absolute -bottom-3 -right-3 h-full w-full bg-hazard md:-bottom-4 md:-right-4" aria-hidden />
            <div className="cut-corner relative aspect-video overflow-clip bg-navy">
              {MEDIA.map((m, i) => (
                <Layer key={i} m={m} active={active === i} />
              ))}
              <div className="absolute left-0 top-0 grid h-14 w-14 place-items-center bg-hazard font-display text-3xl font-bold text-navy md:h-16 md:w-16 md:text-4xl">{active + 1}</div>
            </div>
          </div>

          <div className="md:order-2">
            <RevealLines
              lines={["Worn shoes in.", "Road-ready shoes out."]}
              className="font-display text-3xl font-bold leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl"
            />
            <div className="relative mt-6 hidden md:block">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-navy/15" aria-hidden />
              <motion.div style={{ scaleY: rail }} className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-regan-red" aria-hidden />
              <ol>
                {shoeStages.map((s, i) => (
                  <li key={s.title} className={`py-3 pl-6 pr-3 transition-colors duration-300 ${active === i || reduced ? "bg-white shadow-[0_10px_24px_-16px_rgba(10,31,77,0.5)]" : "bg-transparent"}`}>
                    <h3 className={`font-display text-xl ${active === i || reduced ? "font-bold" : "font-medium"}`}>
                      <span className="mr-2 text-regan-red">{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 max-w-sm text-[0.95rem] leading-relaxed text-navy/75">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="border-l-4 border-regan-red pl-4 md:hidden" aria-live="polite">
            <p className="font-display text-xl font-semibold">
              {active + 1}. {shoeStages[active].title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-navy/75">{shoeStages[active].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
