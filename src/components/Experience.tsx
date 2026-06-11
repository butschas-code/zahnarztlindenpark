import Image from "next/image";
import { HoverLift, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/AnimatedSection";

const reasons = [
  {
    title: "Zeit statt Fliessband",
    text: "Wir planen grosszügig, erklären verständlich und entscheiden gemeinsam mit Ihnen.",
  },
  {
    title: "Eine Praxis für die ganze Familie",
    text: "Vom Milchzahn bis zur Krone – Generationen aus Kriens vertrauen uns ihre Zähne an.",
  },
  {
    title: "Ehrliche, transparente Beratung",
    text: "Wir empfehlen nur, was nötig ist – mit klaren Kosten, bevor wir beginnen.",
  },
  {
    title: "Schulzahnarzt der Gemeinde Kriens",
    text: "Fest in der Gemeinde verankert und für die Zahngesundheit der Schulkinder mitverantwortlich.",
  },
];

export default function Experience() {
  return (
    <section className="surface-light relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Warum Lindenpark?"
              lead="Vier Gründe, weshalb sich Patientinnen und Patienten seit Jahren für uns entscheiden."
            />

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <StaggerItem key={reason.title}>
                  <HoverLift>
                    <div className="panel panel-hover h-full rounded-sm p-5 sm:p-6">
                      <span className="mb-4 block h-1 w-8 bg-brand-300" />
                      <h3 className="font-display text-[1.25rem] leading-snug text-heading sm:text-[1.35rem]">
                        {reason.title}
                      </h3>
                      <p className="mt-2.5 text-[0.92rem] leading-relaxed text-body">
                        {reason.text}
                      </p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="relative">
            <div className="panel overflow-hidden rounded-sm">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/praxis/zimmer-4.jpg"
                  alt="Behandlungszimmer der Zahnarztpraxis Lindenpark"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-scrim/15 via-transparent to-cerulean-50/50" />
              </div>
            </div>
            <span
              className="hex absolute -top-5 -right-4 block h-16 w-14 bg-brand sm:-right-6"
              aria-hidden="true"
            />
            <span
              className="hex absolute -bottom-7 left-6 block h-20 w-[4.3rem] bg-plum-100"
              aria-hidden="true"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
