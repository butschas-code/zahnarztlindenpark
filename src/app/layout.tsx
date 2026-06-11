import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Zahnarzt Kriens – Zahnarztpraxis Lindenpark | Familienzahnarzt, Prophylaxe & Lachgas",
  description:
    "Familienzahnarztpraxis in Kriens: Prophylaxe, Kinderzahnmedizin, Lachgassedation und Betreuung von Angstpatienten. Dr. med. dent. Martin Schärer – 041 320 37 47.",
  keywords: [
    "Zahnarzt Kriens",
    "Familienzahnarzt",
    "Prophylaxe",
    "Lachgas",
    "Kinderzahnmedizin",
    "Angstpatienten",
    "Zahnarztpraxis Lindenpark",
  ],
  openGraph: {
    title: "Zahnarztpraxis Lindenpark – Familienzahnarzt in Kriens",
    description:
      "Persönliche Zahnmedizin für Kinder, Erwachsene und Angstpatienten. Prophylaxe, Kinderzahnmedizin und Lachgassedation in Kriens.",
    url: site.url,
    siteName: site.name,
    locale: "de_CH",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Behandlungszimmer der Zahnarztpraxis Lindenpark in Kriens" }],
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

/** LocalBusiness / Dentist structured data – facts verified from the live site. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: site.url,
  telephone: "+41413203747",
  email: site.email,
  image: `${site.url}/images/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "CH",
  },
  founder: {
    "@type": "Person",
    name: "Dr. med. dent. Martin Schärer",
    jobTitle: "Zahnarzt",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "13:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "13:30", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "13:30", closes: "16:00" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className={`${hanken.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
