import Image from "next/image";
import { HoverLift, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/AnimatedSection";
import { moreServices, services } from "@/lib/site";

export default function Services() {
  return (
    <section id="behandlungen" className="surface-ice relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-brand/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Unsere Behandlungen"
            lead="Von der halbjährlichen Kontrolle bis zur komplexen Sanierung – alles unter einem Dach, alles in Ihrem Tempo."
          />
          <Reveal delay={0.12}>
            <a href="#kontakt" className="btn btn-outline-dark shrink-0">
              Beratung anfragen
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <HoverLift>
                <article className="panel panel-hover group flex h-full flex-col overflow-hidden rounded-sm">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-brand/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-[1.45rem] leading-snug text-white sm:text-[1.55rem]">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-brand/10 bg-gradient-to-b from-white/90 to-brand-glow/40 p-5 sm:p-6">
                    <p className="text-[0.95rem] leading-relaxed text-slate">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-block h-px w-10 bg-brand/35 transition-all duration-500 group-hover:w-16" />
                  </div>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="panel mt-12 rounded-sm px-6 py-5 sm:px-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
              Ausserdem
            </p>
            <p className="mt-3 font-display text-lg leading-relaxed text-slate">
              {moreServices.join("  ·  ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
