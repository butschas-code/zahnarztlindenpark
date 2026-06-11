"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeading } from "@/components/AnimatedSection";

export default function Intro() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, reduce ? 0 : -40]);
  const hexRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 18]);

  return (
    <section id="praxis" ref={ref} className="surface-light relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-soft/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:px-8 lg:pt-32 lg:pb-28">
        <SectionHeading
          align="center"
          title="Die Praxis im Lindenpark"
          lead="Helle Räume, moderne Technik und ein Team, das sich Zeit nimmt. Wir behandeln Generationen von Familien aus Kriens und Umgebung – vom ersten Milchzahn bis ins hohe Alter."
        />

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-12 items-end gap-5 lg:gap-8">
            <Reveal className="col-span-12 sm:col-span-5">
              <motion.div style={{ y: photoY }} className="panel panel-hover overflow-hidden rounded-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/praxis/empfang.jpg"
                    alt="Empfang der Zahnarztpraxis Lindenpark"
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/25 via-transparent to-transparent" />
                </div>
              </motion.div>
            </Reveal>

            <div className="col-span-12 hidden items-center justify-center pb-12 sm:col-span-2 sm:flex">
              <Reveal delay={0.12}>
                <motion.div style={{ rotate: hexRotate }} className="flex flex-col items-center gap-4">
                  <span className="hex block h-16 w-14 bg-gradient-to-b from-brand-mist to-ice" aria-hidden="true" />
                  <span className="hex block h-11 w-9 bg-brand/80" aria-hidden="true" />
                  <span className="hex block h-7 w-6 bg-brand-glow" aria-hidden="true" />
                </motion.div>
              </Reveal>
            </div>

            <Reveal delay={0.08} className="col-span-12 sm:col-span-5">
              <motion.div style={{ y: photoY }} className="panel panel-hover overflow-hidden rounded-sm sm:translate-y-12">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/praxis/zimmer-1.jpg"
                    alt="Behandlungszimmer mit moderner Ausstattung"
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
