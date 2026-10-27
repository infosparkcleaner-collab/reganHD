"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { videos } from "@/content/site";
import { AutoVideo } from "@/components/motion/AutoVideo";
import { RevealLines } from "@/components/motion/Text";
import { Magnetic } from "@/components/motion/Magnetic";

export function StopBox() {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Tilt toward the mouse, like turning the box in your hands.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 160, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 18 });

  return (
    <section id="stopbox" ref={ref} className="relative scroll-mt-4 overflow-clip bg-white text-navy">
      <div className="slash-rule h-3" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-32">
        <motion.div style={{ y: parallax, perspective: 1200 }} className="relative">
          <div className="absolute -bottom-4 -right-4 h-full w-full bg-hazard" aria-hidden />
          <motion.div
            ref={frame}
            data-cursor
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            onMouseMove={(e) => {
              const r = frame.current!.getBoundingClientRect();
              mx.set((e.clientX - r.left) / r.width - 0.5);
              my.set((e.clientY - r.top) / r.height - 0.5);
            }}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            initial={{ clipPath: "inset(12% 12% 12% 12%)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="cut-corner relative overflow-clip bg-[#dfe1e5]"
          >
            {videos.box ? (
              <AutoVideo className="h-auto w-full" src={videos.box} poster="/images/photos/stop-box-kit.jpeg" />
            ) : (
              <Image src="/images/photos/stop-box-kit.jpeg" alt="Marathon and Regan HD Stop Box Kit, a heavy-duty brake shoe kit" width={1526} height={1031} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full" />
            )}
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="cut-corner inline-block border-2 border-navy/10 bg-white px-5 py-3"
          >
            <Image src="/images/brand/marathon-logo.jpeg" alt="Marathon Brake Systems" width={240} height={120} className="h-16 w-auto" />
          </motion.div>
          <RevealLines lines={["The Stop", "Box Kit"]} className="mt-8 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-navy/75"
          >
            A heavy-duty brake shoe kit from Marathon, packed and shipped by Regan HD. One box, ready for the shop floor.
          </motion.p>
          <div className="mt-8">
            <Magnetic>
              <a href="#quote" className="cut-corner block bg-regan-red px-7 py-4 font-display text-lg font-semibold text-white hover:bg-navy">
                Request a quote
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
