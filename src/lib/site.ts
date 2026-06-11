/**
 * Central content & contact data.
 * All facts verified against the original website (see /assets/original-site).
 */

export const site = {
  name: "Zahnarztpraxis Lindenpark",
  shortName: "Lindenpark",
  city: "Kriens",
  phoneDisplay: "041 320 37 47",
  phoneLink: "tel:+41413203747",
  emergencyPhoneDisplay: "0848 58 24 89",
  email: "praxis@zahnarzt-schaerer.ch",
  address: {
    street: "Schachenstrasse 9",
    zip: "6010",
    city: "Kriens",
    note: "2. Eingang hinter altem Gemeindehaus, 1. Stock",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Schachenstrasse+9,+6010+Kriens",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Zahnarztpraxis+Lindenpark,+Schachenstrasse+9,+6010+Kriens&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Zahnarztpraxis+Lindenpark+Schachenstrasse+9+6010+Kriens",
  googleRating: 4.8,
  url: "https://www.zahnarzt-lindenpark.ch",
};

export type Review = {
  quote: string;
  author: string;
  source: "Google";
};

/** Auszüge aus veröffentlichten Google-/Maps-Bewertungen (gekürzt). */
export const googleReviews: Review[] = [
  {
    quote:
      "An Kompetenz, Atmosphäre und Kundenorientierung kaum zu überbieten. Eine Praxis, der man vertraut.",
    author: "Patient/in",
    source: "Google",
  },
  {
    quote:
      "Sehr entspannter Besuch in ruhiger, freundlicher Atmosphäre – präzise und zufriedenstellend behandelt.",
    author: "Patient/in",
    source: "Google",
  },
  {
    quote:
      "Angenehme Atmosphäre, freundliches Personal und eine wunderschön eingerichtete Praxis.",
    author: "Patient/in",
    source: "Google",
  },
  {
    quote:
      "Herr Dr. Schärer nimmt sich ausreichend Zeit. Das gesamte Team vermittelt eine herzliche Atmosphäre.",
    author: "Patient/in",
    source: "Google",
  },
  {
    quote:
      "Top Zahnarzt und ganzes Team sehr sympathisch – würde ich jedermann weiterempfehlen.",
    author: "Patient/in",
    source: "Google",
  },
];

export const openingHours = [
  { day: "Montag", hours: "13.00 – 20.30 Uhr" },
  { day: "Dienstag", hours: "8.00 – 12.00 / 13.30 – 17.30 Uhr" },
  { day: "Mittwoch", hours: "8.00 – 12.00 / 13.30 – 17.30 Uhr" },
  { day: "Donnerstag", hours: "8.00 – 12.00 / 13.30 – 17.30 Uhr" },
  { day: "Freitag", hours: "8.00 – 12.00 / 13.30 – 16.00 Uhr" },
];

export const navLinks = [
  { label: "Praxis", href: "#praxis" },
  { label: "Behandlungen", href: "#behandlungen" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Team", href: "#team" },
  { label: "Angstpatienten", href: "#lachgas" },
  { label: "Kontakt", href: "#kontakt" },
];

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: "shield" | "child" | "school" | "cloud" | "heart" | "braces";
};

export const services: Service[] = [
  {
    title: "Prophylaxe & Zahnreinigung",
    description:
      "Regelmässige Kontrolle und professionelle Dentalhygiene halten Zähne nachweislich länger gesund – und senken langfristig die Behandlungskosten.",
    image: "/images/praxis/detail.jpg",
    icon: "shield",
  },
  {
    title: "Kinderzahnmedizin",
    description:
      "Wir haben selber Kinder. Mit viel Gefühl und einem Quäntchen Humor sorgen wir dafür, dass sich Ihr Kind auf den nächsten Besuch freut.",
    image: "/images/praxis/zimmer-1.jpg",
    icon: "child",
  },
  {
    title: "Schulzahnpflege",
    description:
      "Als Schulzahnarzt der Gemeinde Kriens begleiten wir Schülerinnen und Schüler bei der Zahngesundheit – vertraut und wohnortsnah.",
    image: "/images/praxis/empfang.jpg",
    icon: "school",
  },
  {
    title: "Lachgasbehandlung",
    description:
      "Viele Behandlungen lassen sich mit Lachgasanalgesie durchführen. Das reduziert die Angst deutlich – bei Kindern wie bei Erwachsenen.",
    image: "/images/praxis/walross.jpg",
    icon: "cloud",
  },
  {
    title: "Betreuung von Angstpatienten",
    description:
      "Wir nehmen uns Zeit, erklären jeden Schritt und behandeln in Ihrem Tempo. Seit vielen Jahren begleiten wir Angstpatienten erfolgreich.",
    image: "/images/praxis/zimmer-4.jpg",
    icon: "heart",
  },
  {
    title: "Zusammenarbeit mit Kieferorthopäden",
    description:
      "Bei Zahnstellungsproblemen arbeiten wir eng mit den Luzerner Kieferorthopäden zusammen – koordiniert und ohne Umwege.",
    image: "/images/praxis/zimmer-1.jpg",
    icon: "braces",
  },
];

/** Weitere Leistungen, wörtlich von der Behandlungsseite der aktuellen Website. */
export const moreServices = [
  "Karieskontrolle",
  "Füllungen",
  "Wurzelbehandlung",
  "Kronen & Brücken",
  "Parodontitis-Behandlung",
  "Extraktionen",
  "Weisheitszahnentfernung",
  "Bleaching",
];

export type TeamMember = {
  name: string;
  role: string;
  credentials?: string[];
  image: string;
};

export const doctor: TeamMember = {
  name: "Dr. med. dent. Martin Schärer",
  role: "Praxisinhaber & Zahnarzt",
  credentials: [
    "eidg. diplomierter Zahnarzt",
    "Mitglied SSO",
    "WBA SSO Allg. Zahnmedizin",
    "Fähigkeitsausweis Lachgassedation SVK",
  ],
  image: "/images/team/martin-schaerer.jpg",
};

export const team: TeamMember[] = [
  {
    name: "Sonja Schärer",
    role: "Zahnärztin SSO",
    credentials: ["M of dental medicine, med. dent.", "zur Zeit in Weiterbildung im LUKS"],
    image: "/images/team/sonja-schaerer.jpg",
  },
  {
    name: "Matthias Kellenberger",
    role: "Facharzt Kiefer- und Gesichtschirurgie FMH",
    credentials: ["Dr. med. dent. et Dr. med."],
    image: "/images/team/matthias-kellenberger.jpg",
  },
  {
    name: "Livia Henseler",
    role: "dipl. Dentalhygienikerin HF",
    image: "/images/team/livia-henseler.jpg",
  },
  {
    name: "Selma Demir",
    role: "Dentalhygienikerin HF im Praktikum",
    image: "/images/team/selma-demir.jpg",
  },
  {
    name: "Laura De Flumeri",
    role: "dipl. Prophylaxeassistentin SSO",
    image: "/images/team/laura-de-flumeri.jpg",
  },
  {
    name: "Tanja Wicki",
    role: "dipl. Prophylaxeassistentin SSO",
    image: "/images/team/tanja-wicki.jpg",
  },
  {
    name: "Nisopitha Sinnathurai",
    role: "Dentalassistentin",
    image: "/images/team/nisopitha-sinnathurai.jpg",
  },
  {
    name: "Jutta Albisser",
    role: "Dentalassistentin",
    image: "/images/team/jutta-albisser.jpg",
  },
  {
    name: "Irene Burkart",
    role: "Dentalassistentin",
    image: "/images/team/irene-burkart.jpg",
  },
  {
    name: "Lulya Habtom",
    role: "Dentalassistentin in Ausbildung",
    image: "/images/team/lulya-habtom.jpg",
  },
  {
    name: "Andrea Wyler",
    role: "Dentalassistentin von Dr. M. Kellenberger",
    image: "/images/team/andrea-wyler.jpg",
  },
  {
    name: "Georgette Schärer",
    role: "Kauffrau / Fachfrau Sterilisation",
    image: "/images/team/georgette-schaerer.jpg",
  },
];
