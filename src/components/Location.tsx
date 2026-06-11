import { Reveal } from "@/components/AnimatedSection";
import { openingHours, site } from "@/lib/site";

export default function Location() {
  return (
    <section id="standort" className="surface-soft">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-0">
          <iframe
            src={site.mapsEmbedUrl}
            title="Karte: Zahnarztpraxis Lindenpark, Schachenstrasse 9, 6010 Kriens"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        <div className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
          <Reveal>
            <h2 className="inline-block border-b border-brand-200 pb-4 font-display text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-heading sm:text-[2.4rem]">
              So finden Sie uns
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <address className="panel mt-7 rounded-sm p-5 text-base leading-relaxed text-body not-italic sm:text-lg">
              <span className="font-display text-xl text-heading">{site.name}</span>
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              <span className="text-[0.95rem] text-muted">{site.address.note}</span>
            </address>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="panel mt-6 rounded-sm px-5 py-2">
              {openingHours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-baseline justify-between gap-6 border-b border-line-soft py-3 first:border-t"
                >
                  <dt className="font-display text-lg text-heading">{row.day}</dt>
                  <dd className="text-right text-[0.95rem] text-body">{row.hours}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Route planen
              </a>
              <a href={site.phoneLink} className="btn btn-brand">
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
