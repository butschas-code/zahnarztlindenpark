import Image from "next/image";
import { navLinks, openingHours, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-deep pb-20 text-white md:pb-0">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={26}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="font-display text-lg leading-tight">
                Zahnarztpraxis
                <br />
                Lindenpark
              </p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Persönliche Zahnmedizin für die ganze Familie – im Herzen von Kriens.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-mist uppercase">
              Kontakt
            </p>
            <address className="mt-4 space-y-1.5 text-sm leading-relaxed text-white/75 not-italic">
              <p>
                {site.address.street}, {site.address.zip} {site.address.city}
              </p>
              <p>
                <a href={site.phoneLink} className="hover:text-brand-mist">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-brand-mist">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-mist uppercase">
              Öffnungszeiten
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75">
              {openingHours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="text-right text-white/55">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-mist uppercase">
              Navigation
            </p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/75 hover:text-brand-mist">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.city}
          </p>
          <p>
            Notfalldienst:{" "}
            <a
              href={`tel:${site.emergencyPhoneDisplay.replace(/\s/g, "")}`}
              className="text-white/65 hover:text-brand-mist"
            >
              {site.emergencyPhoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
