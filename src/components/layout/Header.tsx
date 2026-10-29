"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { SpeedRule } from "@/components/brand/SpeedRule";

// Routes that open on a dark photographic hero: the header starts transparent over them.
const OVER_HERO = ["/", "/services", "/trucking", "/contact"];

function Logo() {
  return (
    <span className="block rounded-[2px] bg-white px-2.5 py-2">
      <Image src="/images/brand/regan-hd-logo-tight.png" alt="Regan HD" width={1507} height={376} className="h-7 w-auto md:h-8" loading="eager" />
    </span>
  );
}

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = OVER_HERO.includes(path);
  const solid = scrolled || !overHero;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className={`overflow-hidden bg-ink-950 text-[13px] text-steel-300 transition-[height] duration-[240ms] ${scrolled ? "h-0" : "h-9"}`}>
        <div className="mx-auto flex h-9 max-w-[1280px] items-center justify-between px-5 md:px-8">
          <p className="truncate">Brake shoe rebuilding · Marathon Stop Box Kits · Trucking</p>
          <div className="hidden items-center gap-6 md:flex">
            <a href={site.contact.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <Phone size={13} aria-hidden /> {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail size={13} aria-hidden /> {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-[background-color,height,box-shadow,border-color] duration-[240ms] ${
          solid ? "h-16 border-steel-200 bg-white/90 shadow-[var(--shadow-1)] backdrop-blur-[14px] backdrop-saturate-[1.6]" : "h-[76px] border-white/10 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8">
          <Link href="/" aria-label="Regan HD home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((n) => {
                const active = path === n.href;
                return (
                  <li key={n.href} className="relative">
                    <Link
                      href={n.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-[15px] font-medium transition-colors ${solid ? "text-text hover:text-blue-600" : "text-white/90 hover:text-white"}`}
                    >
                      {n.label}
                    </Link>
                    {active && <span className={`absolute -bottom-2 left-0 h-[2px] w-full -skew-x-[18deg] ${solid ? "bg-blue-600" : "bg-white"}`} aria-hidden />}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden h-11 items-center gap-2 rounded-[2px] bg-red-600 px-5 text-[15px] font-semibold text-white transition-colors hover:bg-red-700 sm:inline-flex">
              Request a quote <span className="arrow" aria-hidden>→</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className={`grid h-11 w-11 place-items-center lg:hidden ${solid ? "text-text" : "text-white"}`}
            >
              <Menu size={24} aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="grain fixed inset-0 z-50 flex flex-col bg-ink-950 px-6 pb-8 pt-5 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center">
              <X size={26} aria-hidden />
            </button>
          </div>
          <ul className="mt-12 space-y-5">
            <li>
              <Link href="/" onClick={() => setOpen(false)} className="display text-[2rem] font-bold">Home</Link>
            </li>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="display text-[2rem] font-bold leading-tight">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <SpeedRule className="mt-10 text-blue-400" />
          <div className="mt-auto space-y-2 text-steel-300">
            <a href={site.contact.phoneHref} className="block text-lg text-white">{site.contact.phone}</a>
            <a href={`mailto:${site.contact.email}`} className="block">{site.contact.email}</a>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-6 flex h-12 items-center justify-center rounded-[2px] bg-red-600 font-semibold text-white">
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
