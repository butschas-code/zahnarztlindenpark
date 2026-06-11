"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeading } from "@/components/AnimatedSection";
import { googleReviews, site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GoogleReviews() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="bewertungen" className="surface-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Was Patienten sagen"
            lead="Echte Rückmeldungen von Google – über Atmosphäre, Kompetenz und das Gefühl, gut aufgehoben zu sein."
          />

          <Reveal delay={0.1}>
            <div className="panel flex items-center gap-5 rounded-sm px-6 py-4">
              <div>
                <p className="font-display text-4xl leading-none text-brand">
                  {site.googleRating.toFixed(1).replace(".", ",")}
                </p>
                <StarRow rating={site.googleRating} />
              </div>
              <div className="h-10 w-px bg-line-brand" />
              <div>
                <p className="text-sm text-muted">Google Bewertungen</p>
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-brand underline-offset-4 hover:text-brand-hover hover:underline"
                >
                  Alle ansehen →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-brand-50 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-brand-50 to-transparent lg:block" />

          <motion.div
            ref={trackRef}
            className="review-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:gap-6"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {googleReviews.map((review, i) => (
              <motion.blockquote
                key={review.quote}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: EASE }}
                className="panel w-[min(88vw,22rem)] shrink-0 snap-start rounded-sm p-6 sm:w-[22rem] lg:w-[24rem]"
              >
                <StarRow rating={5} small />
                <p className="mt-4 font-display text-lg leading-snug text-heading">
                  «{review.quote}»
                </p>
                <footer className="mt-5 flex items-center justify-between gap-3 border-t border-line-soft pt-4 text-sm">
                  <span className="text-muted">{review.author}</span>
                  <span className="inline-flex items-center gap-1.5 text-faint">
                    <GoogleMark />
                    {review.source}
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>

          <div className="mt-6 hidden justify-end gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Vorherige Bewertung"
              className="btn btn-outline-dark !min-h-[2.5rem] !px-4 !text-sm"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Nächste Bewertung"
              className="btn btn-outline-dark !min-h-[2.5rem] !px-4 !text-sm"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarRow({ rating, small }: { rating: number; small?: boolean }) {
  const size = small ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div className={`mt-1 flex gap-0.5 ${small ? "" : "mt-2"}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`${size} ${i < Math.round(rating) ? "text-[#d4a017]" : "text-brand-200"}`}
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
