"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { videos } from "@/content/site";
import { useIntro } from "@/components/motion/Intro";
import { useReducedMotion } from "@/components/motion/useReduced";
import { RevealLines } from "@/components/motion/Text";
import { Magnetic } from "@/components/motion/Magnetic";
import { AutoVideo } from "@/components/motion/AutoVideo";

/** Banner 1: the clip fills the screen and the headline sits over it, tinted with the brand blue. */
export function HeroFull() {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntro();
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const shade = useTransform(scrollYProgress, [0, 1], [0, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const textO = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-clip bg-regan-blue text-white">
      <motion.div style={reduced ? undefined : { scale: mediaScale }} className="absolute inset-0 -z-20">
        <Image
          src="/images/photos/worker-brake-shoe.jpeg"
          alt="A Regan HD worker pressing a relined brake shoe, with a sandblasting cabinet behind him"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_50%] md:object-[62%_50%]"
        />
        {videos.banner && (
          <AutoVideo
            className="absolute inset-0 h-full w-full object-cover object-[80%_50%] md:object-[62%_50%]"
            src={videos.banner}
            poster="/images/photos/worker-brake-shoe.jpeg"
            control
            controlClass="bottom-5 right-5"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-regan-blue via-regan-blue/70 to-regan-blue/0" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden />
      <motion.div style={{ opacity: shade }} className="absolute inset-0 -z-10 bg-regan-blue" aria-hidden />

      <motion.div style={reduced ? undefined : { y: textY, opacity: textO }} className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:pb-24">
        <RevealLines
          as="h1"
          trigger={ready}
          stagger={0.09}
          delay={0.15}
          className="max-w-4xl font-display text-[clamp(3rem,8.5vw,8rem)] font-bold leading-[0.92] tracking-[-0.03em]"
          lines={["Brake shoes,", "rebuilt right."]}
        />
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl"
        >
          Regan HD sandblasts, relines and rivets heavy-duty brake shoes, then packs them in Marathon Stop Box Kits for fleets and shops across Canada.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Magnetic>
            <a href="#quote" className="cut-corner block bg-regan-red px-7 py-4 font-display text-lg font-semibold hover:bg-white hover:text-navy">
              Request a quote
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#process" className="block border-2 border-white/60 px-7 py-[0.875rem] font-display text-lg font-semibold hover:border-white hover:bg-white/10">
              See how we rebuild
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
