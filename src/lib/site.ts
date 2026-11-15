import type { StaticImageData } from "next/image";
import imgFenster from "@/assets/images/leistung-fensterreinigung.jpg";
import imgTreppenhaus from "@/assets/images/leistung-treppenhausreinigung.jpg";
import imgBuero from "@/assets/images/leistung-bueroreinigung.jpg";

/**
 * Zentrale Unternehmensdaten.
 *
 * Alles hier stammt von der bisherigen Website (Stand 11/2026) oder ist als
 * offen markiert. Offene Punkte stehen in OPEN_ITEMS und erscheinen auf der
 * Website als sichtbar gekennzeichnete Platzhalter, solange
 * `showPlaceholders` aktiv ist.
 */

const PHONE_E164 = "+491722664403";

export const site = {
  name: "Gebäudereinigung Kienle",
  shortName: "Kienle",
  owner: "Oliver Kienle",
  /** Punycode für gebäudereinigung-großräschen.de */
  url: "https://xn--gebudereinigung-grorschen-ebc2jsa.de",
  displayDomain: "gebäudereinigung-großräschen.de",
  tagline: "Ihre Gebäudereinigung im Lausitzer Seenland",
  description:
    "Gebäudereinigung Kienle aus Großräschen: Fensterreinigung, Treppenhausreinigung und Büroreinigung im Lausitzer Seenland. Kostenloses Angebot innerhalb von 24 Stunden.",
  address: {
    street: "Seestraße 7",
    postalCode: "01983",
    city: "Großräschen",
    region: "Brandenburg",
    country: "DE",
  },
  phone: {
    display: "0172 2664403",
    international: "+49 172 2664403",
    href: `tel:${PHONE_E164}`,
  },
  // OFFEN: Startseite der alten Website nennt yahoo.com, Impressum und
  // Datenschutzerklärung nennen yahoo.de. Bis zur Klärung gilt die
  // Impressums-Adresse.
  email: {
    display: "oliver.kienle@yahoo.de",
    href: "mailto:oliver.kienle@yahoo.de?subject=Anfrage%20Geb%C3%A4udereinigung",
  },
  whatsapp: {
    href: `https://wa.me/${PHONE_E164.slice(1)}?text=${encodeURIComponent(
      "Hallo, ich interessiere mich für eine Gebäudereinigung und bitte um ein Angebot.",
    )}`,
  },
  taxNumber: "057/238/08288",
  taxOffice: "Finanzamt Senftenberg",
  /** Vor dem Livegang auf false setzen, sobald alle Platzhalter ersetzt sind. */
  showPlaceholders: true,
} as const;

export const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalNavigation = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export type ServiceIcon = "window" | "stairs" | "office";

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIcon;
  /** Kurztext von der bisherigen Website */
  summary: string;
  /** Ausführlicher Text, nur aus bestätigten Aussagen aufgebaut */
  description: string[];
  points: string[];
  image: StaticImageData;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "fensterreinigung",
    title: "Fensterreinigung",
    icon: "window",
    summary: "Klare Sicht – streifenfrei und sorgfältig, innen wie außen.",
    description: [
      "Saubere Fenster verändern den Eindruck eines ganzen Gebäudes. Wir reinigen Ihre Glasflächen streifenfrei und sorgfältig – innen wie außen.",
      "Ob einzelne Fensterfront oder ganzes Objekt: Den Umfang und den Rhythmus stimmen wir mit Ihnen ab und halten ihn im Angebot fest.",
    ],
    points: ["Streifenfreie Glasflächen", "Reinigung innen und außen", "Sorgfältige Ausführung bis ins Detail"],
    image: imgFenster,
    imageAlt: "Fensterabzieher zieht eine eingeseifte Glasscheibe streifenfrei ab",
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    icon: "stairs",
    summary: "Ein gepflegter erster Eindruck – wir kümmern uns um jede Etage.",
    description: [
      "Das Treppenhaus ist das Erste, was Bewohner, Kunden und Besucher von einem Haus sehen. Wir sorgen dafür, dass dieser Eindruck stimmt – auf jeder Etage.",
      "Sie bekommen feste Ansprechpartner und planbare Einsätze, damit die Reinigung verlässlich läuft, ohne dass Sie sich darum kümmern müssen.",
    ],
    points: ["Reinigung aller Etagen", "Planbare, regelmäßige Einsätze", "Feste Ansprechpartner"],
    image: imgTreppenhaus,
    imageAlt: "Reinigungskraft wischt die Stufen eines Treppenhauses mit dem Wischmopp",
  },
  {
    slug: "bueroreinigung",
    title: "Büroreinigung",
    icon: "office",
    summary: "Saubere Arbeitsplätze fördern Motivation!",
    description: [
      "In sauberen Räumen arbeitet es sich besser. Wir reinigen Büros und Praxen gründlich und zuverlässig, damit sich Mitarbeitende und Besucher wohlfühlen.",
      "Unsere Einsätze passen sich flexibel Ihrem Alltag an und überzeugen durch konstante Qualität.",
    ],
    points: ["Büros und Praxen", "Flexibel an Ihren Alltag angepasst", "Konstante Qualität"],
    image: imgBuero,
    imageAlt: "Reinigungskraft mit Handschuhen wischt einen Monitor an einem Büroarbeitsplatz ab",
  },
];

/** Leistungsversprechen von der bisherigen Website */
export const promises = [
  {
    icon: "quality",
    title: "Qualitätsgarantie",
    text: "Reinigungsmittel und Verfahren auf höchstem Niveau.",
  },
  {
    icon: "team",
    title: "Professionelles Team",
    text: "Geschult, pünktlich, freundlich – wir sorgen für den besten Eindruck.",
  },
  {
    icon: "speed",
    title: "Schnelle Angebote",
    text: "In nur 24 Stunden – einfach und kostenlos.",
  },
] as const;

/** Einsatzgebiet – typografische Ortsliste für die Startseite */
export const serviceArea = {
  base: "Großräschen",
  region: "Lausitzer Seenland",
  towns: [
    "Großräschen",
    "Senftenberg",
    "Lauchhammer",
    "Schwarzheide",
    "Cottbus",
    "Hoyerswerda",
    "Spremberg",
    "Calau",
  ] as string[],
};

/** Offene Punkte, die vor dem Livegang geklärt werden müssen. */
export const OPEN_ITEMS = [
  "E-Mail-Adresse bestätigen (yahoo.de laut Impressum, yahoo.com laut alter Startseite)",
  "Orte des Einsatzgebiets bestätigen",
  "Echte Fotos für Referenzen und Über uns liefern",
  "Persönlichen Text und Porträt von Oliver Kienle liefern",
  "Erreichbarkeit / Zeiten bestätigen",
  "Datenschutzerklärung und Impressum rechtlich prüfen und an die neue Website anpassen",
] as const;
