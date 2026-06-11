"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:h-[4.25rem] lg:px-10">
          {/* Left: nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.95rem] text-white/82 transition-colors hover:text-brand-mist"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile: brand left */}
          <a
            href="#top"
            className="flex items-center gap-2.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            aria-label="Zahnarztpraxis Lindenpark – zur Startseite"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={26}
              height={40}
              className="h-9 w-auto brightness-0 invert"
              priority
            />
            <span className="leading-tight">
              <span className="block font-display text-[1rem] tracking-tight text-white">
                Zahnarztpraxis Lindenpark
              </span>
              <span className="block text-[0.62rem] font-medium tracking-[0.3em] text-brand-mist uppercase">
                Kriens
              </span>
            </span>
          </a>

          {/* Right: actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#kontakt" className="btn btn-ice !min-h-[2.6rem] !text-[0.95rem]">
              Termin vereinbaren
            </a>
            <a
              href={site.phoneLink}
              className="btn btn-outline-light !min-h-[2.6rem] !text-[0.95rem]"
            >
              {site.phoneDisplay}
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            className="flex h-10 w-10 items-center justify-center border border-white/25 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute top-0 left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? "top-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute top-3 left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? "top-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 bg-brand lg:hidden"
              aria-label="Mobile Navigation"
            >
              <div className="space-y-0.5 px-4 py-5 sm:px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 px-1 py-3.5 font-display text-xl text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-3 pt-5">
                  <a
                    href="#kontakt"
                    onClick={() => setOpen(false)}
                    className="btn btn-ice flex-1 !text-[0.95rem]"
                  >
                    Termin vereinbaren
                  </a>
                  <a href={site.phoneLink} className="btn btn-outline-light flex-1 !text-[0.95rem]">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Sticky bottom action bar – mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a
            href={site.phoneLink}
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-white"
          >
            <PhoneIcon className="h-5 w-5 text-brand-mist" />
            Anrufen
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-white"
          >
            <RouteIcon className="h-5 w-5 text-brand-mist" />
            Route
          </a>
          <a
            href="#kontakt"
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-white"
          >
            <CalendarIcon className="h-5 w-5 text-brand-mist" />
            Termin
          </a>
        </div>
      </div>
    </>
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
