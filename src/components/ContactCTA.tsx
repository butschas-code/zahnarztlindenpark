import { Reveal } from "@/components/AnimatedSection";
import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section id="kontakt" className="surface-light relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-display text-xl text-brand italic sm:text-2xl">
            Wir freuen uns auf Sie
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.1] font-light tracking-[-0.02em] text-heading sm:text-5xl lg:text-[3.6rem]">
            Vereinbaren Sie jetzt
            <br />
            Ihren Termin
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            Rufen Sie uns an oder schreiben Sie uns eine E-Mail – wir melden uns
            rasch zurück. Neue Patientinnen und Patienten sind herzlich willkommen.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href={site.phoneLink} className="btn btn-brand w-full sm:w-auto">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline-dark w-full sm:w-auto">
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-12 inline-block border-t border-line pt-6 text-sm text-muted">
            Zahnärztlicher Notfalldienst ausserhalb der Öffnungszeiten:{" "}
            <a
              href={`tel:${site.emergencyPhoneDisplay.replace(/\s/g, "")}`}
              className="font-semibold text-brand hover:text-brand-hover"
            >
              {site.emergencyPhoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
