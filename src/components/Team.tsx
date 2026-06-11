import Image from "next/image";
import { HoverLift, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/AnimatedSection";
import { doctor, team } from "@/lib/site";

export default function Team() {
  return (
    <section id="team">
      <div className="surface-dark relative overflow-hidden text-white">
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-bright/20 blur-3xl" />

        <div className="grid lg:grid-cols-2">
          <div className="relative flex items-center justify-center px-10 py-16 lg:py-24">
            <Reveal className="relative w-full max-w-sm lg:max-w-md">
              <div className="panel-dark overflow-hidden rounded-sm">
                <div className="relative aspect-square">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1024px) 28rem, 24rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-brand/10" />
                </div>
              </div>
              <span
                className="hex absolute -top-8 -left-6 block h-20 w-[4.3rem] bg-brand-mist/90"
                aria-hidden="true"
              />
              <span
                className="hex absolute -right-5 -bottom-7 block h-14 w-12 bg-brand/75"
                aria-hidden="true"
              />
            </Reveal>
          </div>

          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-32 xl:px-24">
            <div>
              <Reveal>
                <p className="font-display text-lg text-brand-mist italic">Ihr Zahnarzt</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-3 inline-block border-b border-brand-mist/45 pb-4 font-display text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[2.9rem]">
                  {doctor.name}
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/78 sm:text-lg">
                  Als Praxisinhaber und Familienvater weiss Dr. Schärer, worauf es ankommt:
                  zuhören, ehrlich beraten und schonend behandeln. Patientinnen und Patienten
                  schätzen seine ruhige, gewissenhafte Art – Kinder seinen Humor.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                  {doctor.credentials?.map((c) => (
                    <li
                      key={c}
                      className="panel-dark rounded-sm px-3 py-2.5 text-[0.88rem] text-white/82"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.3}>
                <a href="#kontakt" className="btn btn-outline-light mt-10">
                  Termin bei Dr. Schärer
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-light relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
          <SectionHeading
            align="center"
            title="Unser Team"
            lead="Dreizehn Menschen, ein Anspruch: dass Sie sich bei uns gut aufgehoben fühlen – fachlich wie menschlich."
          />

          <Stagger className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <HoverLift>
                  <figure className="group">
                    <div className="panel overflow-hidden rounded-sm">
                      <div className="relative aspect-square overflow-hidden bg-brand-glow">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                    <figcaption className="mt-4">
                      <p className="font-display text-lg leading-snug text-brand-deep">{member.name}</p>
                      <p className="mt-1 text-sm text-slate/80">{member.role}</p>
                    </figcaption>
                  </figure>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
