"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 90]);
  const contentY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.55, 0.78]);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.95, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/hero.jpg"
          alt="Behandlungszimmer der Zahnarztpraxis Lindenpark in Kriens"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
      </motion.div>

      {/* Brand-tinted gradient stack */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand/55 to-night/70"
        style={{ opacity: overlayOpacity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_20%,rgba(102,102,212,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-night via-night/80 to-transparent" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-28 text-center sm:px-8"
      >
        <motion.p
          {...rise(0.08)}
          className="font-display text-xl text-brand-mist italic sm:text-2xl"
        >
          Willkommen im Lindenpark
        </motion.p>

        <motion.h1
          {...rise(0.2)}
          className="mt-5 font-display text-[2.75rem] leading-[1.05] font-light tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.75rem]"
        >
          Ihr Zahnarzt in Kriens –
          <br />
          für die ganze Familie
        </motion.h1>

        <motion.p
          {...rise(0.34)}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg"
        >
          Persönliche Zahnmedizin in ruhiger Atmosphäre. Sanft, ehrlich und ohne
          Hektik – seit vielen Jahren im Herzen von Kriens.
        </motion.p>

        <motion.div
          {...rise(0.48)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href="#kontakt" className="btn btn-ice w-full sm:w-auto">
            Termin vereinbaren
          </a>
          <a href={site.phoneLink} className="btn btn-outline-light w-full sm:w-auto">
            {site.phoneDisplay}
          </a>
        </motion.div>

        <motion.div {...rise(0.58)} className="mt-12 inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
          <StarRow rating={site.googleRating} />
          <span className="text-sm text-white/85">
            <strong className="font-semibold text-white">{site.googleRating.toFixed(1).replace(".", ",")}</strong>{" "}
            · Google Bewertungen
          </span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#praxis"
        aria-label="Nach unten scrollen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-12 w-px bg-gradient-to-b from-transparent via-brand-mist to-transparent"
        />
      </motion.a>
    </section>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < Math.round(rating) ? "text-amber-300" : "text-white/25"}`}
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
