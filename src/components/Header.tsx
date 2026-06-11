"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line-brand bg-surface-raised/98 shadow-[0_1px_0_var(--color-line-soft),0_4px_24px_-8px_rgba(34,34,74,0.08)] backdrop-blur-sm">
        <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:grid lg:h-[4.5rem] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-6 lg:px-8 xl:gap-8 xl:px-10">
          {/* Left nav — desktop */}
          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-8"
            aria-label="Hauptnavigation links"
          >
            {leftLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Logo — always visible, centered on desktop */}
          <LogoLink className="lg:justify-self-center" />

          {/* Right nav + CTAs — desktop */}
          <div className="hidden items-center justify-end gap-5 lg:flex xl:gap-7">
            <nav className="flex items-center gap-6 xl:gap-8" aria-label="Hauptnavigation rechts">
              {rightLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex shrink-0 items-center gap-2 border-l border-brand/15 pl-5 xl:pl-6">
              <a
                href={site.phoneLink}
                className="btn btn-outline-dark !min-h-[2.5rem] !px-3.5 !text-[0.88rem] xl:!px-4 xl:!text-[0.92rem]"
              >
                {site.phoneDisplay}
              </a>
              <a
                href="#kontakt"
                className="btn btn-brand !min-h-[2.5rem] !px-3.5 !text-[0.88rem] xl:!px-4 xl:!text-[0.92rem]"
              >
                Termin
              </a>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <MobileMenuButton open={open} onToggle={() => setOpen(!open)} />
        </div>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-brand bg-surface-raised pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_16px_-4px_rgba(34,34,74,0.06)] md:hidden">
        <div className="grid grid-cols-3 divide-x divide-brand/10">
          <a
            href={site.phoneLink}
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-brand"
          >
            <PhoneIcon className="h-5 w-5" />
            Anrufen
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-brand"
          >
            <RouteIcon className="h-5 w-5" />
            Route
          </a>
          <a
            href="#kontakt"
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-brand"
          >
            <CalendarIcon className="h-5 w-5" />
            Termin
          </a>
        </div>
      </div>
    </>
  );
}

function LogoLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`flex shrink-0 items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label="Zahnarztpraxis Lindenpark – zur Startseite"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={36}
        height={56}
        className="h-10 w-auto sm:h-11"
        priority
      />
      <span className="leading-tight">
        <span className="block max-w-[9.5rem] font-display text-[0.82rem] leading-snug tracking-tight text-heading sm:max-w-none sm:text-[0.95rem] xl:text-[1.02rem]">
          Zahnarztpraxis Lindenpark
        </span>
        <span className="block text-[0.58rem] font-semibold tracking-[0.28em] text-brand uppercase sm:text-[0.62rem]">
          Kriens
        </span>
      </span>
    </a>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="whitespace-nowrap text-[0.92rem] font-medium text-body transition-colors hover:text-brand xl:text-[0.95rem]"
    >
      {children}
    </a>
  );
}

function MobileMenuButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-label={open ? "Menü schliessen" : "Menü öffnen"}
      className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand/20 lg:hidden"
    >
      <span className="relative block h-3.5 w-5">
        <span
          className={`absolute top-0 left-0 h-0.5 w-full bg-brand transition-all duration-300 ${open ? "top-1.5 rotate-45" : ""}`}
        />
        <span
          className={`absolute top-1.5 left-0 h-0.5 w-full bg-brand transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`absolute top-3 left-0 h-0.5 w-full bg-brand transition-all duration-300 ${open ? "top-1.5 -rotate-45" : ""}`}
        />
      </span>
    </button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-brand/10 bg-white lg:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-0.5 px-4 py-5 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block border-b border-line-soft px-1 py-3.5 font-display text-xl text-heading transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-5">
              <a href="#kontakt" onClick={onClose} className="btn btn-brand flex-1 !text-[0.95rem]">
                Termin vereinbaren
              </a>
              <a href={site.phoneLink} className="btn btn-outline-dark flex-1 !text-[0.95rem]">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}
