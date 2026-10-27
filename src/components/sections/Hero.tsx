"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReduced";
import { AutoVideo } from "@/components/motion/AutoVideo";
import { videos } from "@/content/site";
import { useIntro } from "@/components/motion/Intro";
import { RevealLines } from "@/components/motion/Text";
import { Magnetic } from "@/components/motion/Magnetic";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntro();
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-clip bg-cloud text-navy">
      {/* The panel edge is cut at the slant of the logo's stripes */}
      <style>{`.hero-cut{clip-path:polygon(0 9%,100% 0,100% 100%,0 100%)}.hero-cut-back{clip-path:polygon(0 4%,100% 0,100% 100%,0 100%)}@media (min-width:768px){.hero-cut{clip-path:polygon(24% 0,100% 0,100% 100%,0 100%)}.hero-cut-back{clip-path:polygon(18% 0,100% 0,100% 100%,-8% 100%)}}`}</style>
      <div className="stripes pointer-events-none absolute inset-0 -z-20 text-regan-blue/[0.045]" aria-hidden />

      <div className="hero-cut-back absolute inset-x-0 bottom-0 -z-10 h-[46svh] bg-hazard md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[62%]" aria-hidden />
      <div className="hero-cut absolute inset-x-0 bottom-0 -z-10 h-[44svh] overflow-clip bg-navy md:inset-y-0 md:left-auto md:right-0 md:h-auto md:w-[62%]">
        <motion.div style={reduced ? undefined : { scale: mediaScale, y: mediaY }} className="absolute inset-0">
          {/* Photo is the poster and the fallback; the Flow clip plays over it */}
          <Image
            src="/images/photos/worker-brake-shoe.jpeg"
            alt="A Regan HD worker pressing a relined brake shoe, with a sandblasting cabinet behind him"
            fill
            priority
            sizes="(min-width: 768px) 62vw, 100vw"
            className="object-cover object-[70%_50%]"
          />
          {videos.banner && (
            <AutoVideo className="absolute inset-0 h-full w-full object-cover object-[70%_50%]" src={videos.banner} poster="/images/photos/worker-brake-shoe.jpeg" control controlClass="bottom-5 right-5" />
          )}
        </motion.div>
      </div>

      <motion.div style={reduced ? undefined : { y: textY, opacity: textO }} className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-start px-5 pb-[48svh] pt-28 md:justify-center md:pb-24 md:pt-32">
        <div className="md:max-w-[44%]">
          <RevealLines
            as="h1"
            trigger={ready}
            stagger={0.09}
            delay={0.15}
            className="font-display text-[clamp(2.8rem,5.7vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.03em]"
            lines={["Brake shoes,", "rebuilt", "right."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-md text-lg leading-relaxed text-navy/80 md:mt-6 md:text-xl"
          >
            Regan HD sandblasts, relines and rivets heavy-duty brake shoes, then packs them in Marathon Stop Box Kits for fleets and shops across Canada.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4"
          >
            <Magnetic>
              <a href="#quote" className="cut-corner block bg-regan-red px-6 py-3.5 font-display text-lg font-semibold text-white hover:bg-navy md:px-7 md:py-4">
                Request a quote
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#process" className="block border-2 border-navy px-6 py-[0.8rem] font-display text-lg font-semibold hover:bg-navy hover:text-white md:px-7 md:py-[0.875rem]">
                See how we rebuild
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
