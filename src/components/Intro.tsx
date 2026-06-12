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
  const circleY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 16, reduce ? 0 : -16]);

  return (
    <section id="praxis" ref={ref} className="surface-light relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />

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
                  <div className="absolute inset-0 bg-gradient-to-t from-scrim/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </Reveal>

            <div className="col-span-12 hidden items-center justify-center sm:col-span-2 sm:flex">
              <Reveal delay={0.12}>
                <motion.div
                  style={{ y: circleY }}
                  className="relative mx-auto h-44 w-full max-w-[7rem]"
                  aria-hidden="true"
                >
                  {/* Frosted circles — echoes the bubble glass in the practice photos */}
                  <span className="absolute top-[6%] left-[10%] h-[4.25rem] w-[4.25rem] rounded-full border border-white/70 bg-violet-100/80 shadow-[0_10px_28px_-14px_rgba(74,98,181,0.28)]" />
                  <span className="absolute top-[34%] left-[38%] h-[3.1rem] w-[3.1rem] rounded-full border border-white/60 bg-brand/88 shadow-sm" />
                  <span className="absolute top-[58%] left-[8%] h-14 w-14 rounded-full border border-white/75 bg-cerulean-100/85" />
                  <span className="absolute top-[18%] left-[54%] h-10 w-10 rounded-full bg-brand-200/90" />
                  <span className="absolute top-[68%] left-[48%] h-7 w-7 rounded-full border border-white/55 bg-plum-100/80" />
                  <span className="absolute top-[44%] left-[68%] h-5 w-5 rounded-full bg-brand-100/90" />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-scrim/15 via-transparent to-transparent" />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
