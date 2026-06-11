"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/AnimatedSection";

export default function Lachgas() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, reduce ? 1.08 : 1]);

  return (
    <section id="lachgas" ref={ref} className="surface-accent relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-6 py-20 sm:px-10 lg:order-1 lg:px-16 lg:py-32 xl:px-24">
          <div>
            <Reveal>
              <p className="font-display text-lg text-brand italic">Für Angstpatienten &amp; Kinder</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 inline-block border-b border-brand-200 pb-4 font-display text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-heading sm:text-[2.5rem] lg:text-[2.9rem]">
                Entspannt behandelt – dank Lachgas
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-body sm:text-lg">
                Zahnarztangst ist weit verbreitet – und kein Grund, Behandlungen
                aufzuschieben. Mit der Lachgasanalgesie führen wir viele Eingriffe
                ruhig und nahezu stressfrei durch. Sie bleiben ansprechbar, die
                Wirkung verfliegt nach wenigen Minuten.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-8 space-y-3">
                {[
                  "Zertifizierte Lachgassedation (Fähigkeitsausweis SVK)",
                  "Geeignet für Kinder und Erwachsene",
                  "Sie bestimmen das Tempo – jeder Schritt wird erklärt",
                ].map((item) => (
                  <li
                    key={item}
                    className="panel rounded-sm px-4 py-3.5 font-display text-base text-heading sm:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#kontakt" className="btn btn-brand mt-10">
                Unverbindlich beraten lassen
              </a>
            </Reveal>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden lg:order-2 lg:min-h-0">
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src="/images/praxis/walross.jpg"
              alt="Walross-Wandbild im Behandlungszimmer – das Maskottchen der Praxis"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-scrim/25 via-transparent to-transparent lg:from-scrim/35" />
        </div>
      </div>
    </section>
  );
}
