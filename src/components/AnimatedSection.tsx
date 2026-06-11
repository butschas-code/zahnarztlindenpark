"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.09,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
      };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  id,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: {
  id?: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const center = align === "center";
  const titleColor = tone === "light" ? "text-heading" : "text-white";
  const ruleColor = tone === "light" ? "border-brand-200" : "border-white/25";
  const leadColor = tone === "light" ? "text-body" : "text-white/75";

  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${className ?? ""}`}>
      <Reveal>
        <h2
          id={id}
          className={`inline-block border-b ${ruleColor} pb-4 font-display text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] sm:text-[2.5rem] lg:text-[3.1rem] ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.1}>
          <p
            className={`mt-6 text-base leading-relaxed sm:text-lg ${leadColor} ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
