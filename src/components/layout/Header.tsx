"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { demo, navShoes, site } from "@/content/site";
import { Magnetic } from "@/components/motion/Magnetic";

/** Demo only: flips between the two hero banners. Turn off with demo.showBannerSwitch in site.ts. */
function BannerSwitch() {
  const path = usePathname();
  if (!demo.showBannerSwitch) return null;
  return (
    <div role="group" aria-label="Choose hero banner" className="flex items-center border border-navy/20 bg-cloud p-0.5">
      <span className="px-2 font-display text-xs font-semibold text-navy/70">Banner</span>
      {demo.banners.map((b) => {
        const active = path === b.href;
        return (
          <a
            key={b.href}
            href={b.href}
            aria-label={b.label}
            aria-current={active ? "page" : undefined}
            className={`grid h-8 w-8 place-items-center font-display text-sm font-bold ${active ? "bg-navy text-white" : "text-navy hover:bg-hazard"}`}
          >
            {b.n}
          </a>
        );
      })}
    </div>
  );
}

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Slides away while scrolling down, returns on any upward scroll. Never hides while the menu is open.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240 && !open);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden ? "-140%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onFocusCapture={() => setHidden(false)}
      className="fixed inset-x-0 top-3 z-50 px-3"
    >
      <div className="cut-corner mx-auto flex h-14 max-w-6xl items-center justify-between bg-white pl-3 pr-2 ring-1 ring-navy/10 shadow-[0_10px_40px_-10px_rgba(14,42,107,0.45)] md:pr-2.5">
        <a href="/" aria-label="Regan HD home" className="block">
          <Image src="/images/brand/regan-hd-logo.jpeg" alt="Regan HD" width={160} height={80} className="h-12 w-auto" priority />
        </a>

        <nav aria-label="Main" className="flex items-center gap-1">
          <div className="mr-2 hidden lg:block">
            <BannerSwitch />
          </div>
          <ul className="hidden items-center lg:flex">
            {navShoes.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="group relative block px-3 py-2 font-display text-sm font-medium text-navy">
                  {n.label}
                  <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 bg-regan-red transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.contact.phoneHref}
            aria-label={`Call ${site.contact.phone}`}
            className="hidden items-center gap-2 px-3 py-2 font-display text-sm font-semibold text-navy hover:text-regan-red md:flex"
          >
            <Phone size={16} aria-hidden />
            <span className="hidden xl:inline">{site.contact.phone}</span>
          </a>
          <Magnetic strength={0.2}>
            <a href="#quote" className="cut-corner block bg-regan-red px-4 py-2.5 font-display text-sm font-semibold text-white hover:bg-navy sm:px-5">
              Request a quote
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center text-navy hover:text-regan-red lg:hidden"
          >
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="cut-corner mx-auto mt-2 max-w-6xl bg-white p-3 shadow-[0_20px_50px_-15px_rgba(10,31,77,0.5)] ring-1 ring-navy/10 lg:hidden"
          >
            <div className="mb-3 px-1" onClick={() => setOpen(false)}>
              <BannerSwitch />
            </div>
            <ul>
              {navShoes.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-navy/10 px-3 py-4 font-display text-xl font-semibold text-navy hover:text-regan-red">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <a href={site.contact.phoneHref} className="flex items-center justify-center gap-2 border-2 border-navy px-4 py-3 font-display font-semibold text-navy">
                <Phone size={18} aria-hidden />
                {site.contact.phone}
              </a>
              <a href="#quote" onClick={() => setOpen(false)} className="cut-corner block bg-regan-red px-4 py-3 text-center font-display font-semibold text-white">
                Request a quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
