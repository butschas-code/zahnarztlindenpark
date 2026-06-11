# Zahnarztpraxis Lindenpark – Homepage-Konzept

Modernes, konversionsorientiertes Homepage-Prototyp für die **Zahnarztpraxis Lindenpark, Kriens** (Dr. med. dent. Martin Schärer). Gebaut als Pitch-Vorlage auf Basis der Inhalte der bestehenden Website [zahnarzt-lindenpark.ch](https://www.zahnarzt-lindenpark.ch).

## Projekt starten

```bash
npm install
npm run dev      # Entwicklung → http://localhost:3000
npm run build    # Produktions-Build
npm start        # Produktionsserver
```

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Struktur

```
assets/                  Gescrapte Original-Assets (Archiv, nicht im Build)
├── original-site/       HTML + extrahierter Text aller Originalseiten
├── images/              Original-Bilder in voller Auflösung (Team, Praxis, Karten, Stock)
└── logo/                Original-Logo

public/images/           Optimierte, im Prototyp verwendete Bilder
src/
├── app/                 Layout (SEO, Schema.org, Fonts) + Seite
├── components/          Header, Hero, Intro, Services/ServiceCard, Lachgas,
│                        Team/TeamCard, Experience, Location, ContactCTA,
│                        Footer, AnimatedSection (Scroll-Animationen)
└── lib/site.ts          Zentrale Inhalte: Kontaktdaten, Öffnungszeiten,
                         Behandlungen, Team (alle Fakten von der Original-Site)
```

## Inhalte von der Original-Website übernommen

Alle Fakten wurden am 11.06.2026 von der Live-Site gescrapt und verifiziert (Quellen unter `assets/original-site/*.txt`):

- **Kontakt:** 041 320 37 47 · praxis@zahnarzt-schaerer.ch · Schachenstrasse 9, 6010 Kriens (2. Eingang hinter altem Gemeindehaus, 1. Stock)
- **Öffnungszeiten** inkl. Montagabend bis 20.30 Uhr
- **Anreise:** Bus-Linien, Velo-Abstellplätze, Parkhäuser (Kontaktseite)
- **Behandlungen:** Prophylaxe/Dentalhygiene, Kinderzahnmedizin, Schulzahnpflege (Schulzahnarzt Gemeinde Kriens), Lachgasbehandlung, Angstpatienten, Zusammenarbeit mit Luzerner Kieferorthopäden; weitere Leistungen (Füllungen, Wurzelbehandlung, Kronen, Brücken, Parodontitis, Extraktionen, Weisheitszähne, Bleaching)
- **Lachgas:** «seit vielen Jahren erfolgreich» bei Kindern und erwachsenen Angstpatienten – wörtlich von der Behandlungsseite
- **Team:** alle 13 Mitglieder mit Original-Porträts und exakten Berufsbezeichnungen; Qualifikationen Dr. Schärer (eidg. dipl. Zahnarzt, Mitglied SSO, WBA SSO Allg. Zahnmedizin, Fähigkeitsausweis Lachgassedation SVK)
- **Notfall-Hinweis** inkl. Notfallzahnarzt 0848 58 24 89

Marketing-Texte wurden neu geschrieben, ohne die faktische Aussage zu verändern. Keine erfundenen Auszeichnungen, Zahlen oder medizinischen Versprechen.

## SEO & Technik

- Title/Meta-Description auf «Zahnarzt Kriens, Familienzahnarzt, Prophylaxe, Lachgas» ausgerichtet
- Schema.org `Dentist` (JSON-LD) mit verifizierten Kontaktdaten und Öffnungszeiten
- OpenGraph-Bild, semantische Headings, `lang="de-CH"`
- Bilder via `next/image` (Lazy Loading, responsive Grössen), Alt-Texte
- Animationen respektieren `prefers-reduced-motion`
- Sticky Glas-Navigation + mobile Bottom-Bar (Anrufen / Route / Termin)

## Nächste Iteration (Empfehlungen)

1. **Kontaktformular anbinden** – aktuell Prototyp ohne Backend (z. B. E-Mail-Versand via API-Route oder Praxissoftware-Anbindung)
2. **Online-Terminbuchung** evaluieren (z. B. Doctena/medicosearch)
3. **Professionelle Fotos** von Dr. Schärer & Team im Praxisumfeld – die Arktis-Innenarchitektur ist ein starkes, einzigartiges Markenelement und verdient ein eigenes Shooting
4. **Unterseiten** (Behandlungen im Detail, Team, Notfall, Datenschutz/Impressum)
5. **Patientenstimmen/Google-Bewertungen** einbinden (nach Freigabe)
6. **Mehrsprachigkeit** (EN) prüfen
7. Echte **Datenschutzerklärung & Impressum** verlinken (Footer-Platzhalter)
