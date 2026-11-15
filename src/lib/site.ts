/**
 * Zentrale Unternehmensdaten für Gebäudereinigung Kienle.
 */

const PHONE_E164 = "+491722664403";

export const site = {
  name: "Gebäudereinigung Kienle",
  shortName: "Kienle",
  owner: "Oliver Kienle",
  /** Punycode für gebäudereinigung-großräschen.de */
  url: "https://xn--gebudereinigung-grorschen-ebc2jsa.de",
  displayDomain: "gebäudereinigung-großräschen.de",
  tagline: "Gebäudereinigung im Lausitzer Seenland",
  description:
    "Gebäudereinigung Kienle aus Großräschen: streifenfreie Fenster-, Treppenhaus- und Büroreinigung für Hausverwaltungen und Unternehmen im Lausitzer Seenland.",
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
  email: {
    display: "oliver.kienle@yahoo.de",
    href: "mailto:oliver.kienle@yahoo.de?subject=Anfrage%20Geb%C3%A4udereinigung",
  },
  whatsapp: {
    href: `https://wa.me/${PHONE_E164.slice(1)}?text=${encodeURIComponent(
      "Guten Tag, ich bitte um ein Angebot zur Gebäudereinigung.",
    )}`,
  },
  taxNumber: "057/238/08288",
  taxOffice: "Finanzamt Senftenberg",
  showPlaceholders: true,
} as const;

export const navigation = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalNavigation = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "fensterreinigung",
    title: "Fensterreinigung",
    summary: "Streifenfreie Glasflächen innen und außen – klar, hell, verlässlich.",
    description: [
      "Saubere Fenster prägen den Eindruck eines Gebäudes. Wir reinigen Glasflächen streifenfrei und sorgfältig – innen wie außen.",
      "Ob einzelne Fensterfront oder ganzes Objekt: Umfang und Rhythmus stimmen wir mit Ihnen ab und halten sie im Angebot fest.",
    ],
    points: ["Streifenfreie Glasflächen", "Reinigung innen und außen", "Planbare Intervalle"],
    image: "/images/service-fenster.jpg",
    imageAlt: "Fensterreinigung mit Abzieher an einer Glasfläche",
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    summary: "Helle Zugänge und Etagen – diskret, regelmäßig, gut erreichbar.",
    description: [
      "Das Treppenhaus ist der erste Eindruck für Bewohner und Besucher. Wir sorgen dafür, dass dieser Eindruck stimmt – auf jeder Etage.",
      "Feste Ansprechpartner und planbare Einsätze halten die Reinigung verlässlich, ohne dass Sie sich darum kümmern müssen.",
    ],
    points: ["Alle Etagen und Zugänge", "Regelmäßige, planbare Einsätze", "Feste Ansprechpartner"],
    image: "/images/service-treppenhaus.jpg",
    imageAlt: "Helles Treppenhaus mit Glasgeländer und Tageslicht",
  },
  {
    slug: "bueroreinigung",
    title: "Büroreinigung",
    summary: "Saubere Arbeitsräume für Büros und Praxen, angepasst an Ihren Alltag.",
    description: [
      "Wir reinigen Büros und Praxen gründlich und zuverlässig, damit Mitarbeitende und Besucher in gepflegten Räumen ankommen.",
      "Unsere Einsätze passen sich Ihrem Betrieb an und halten eine konstante Qualität.",
    ],
    points: ["Büros und Praxen", "Flexible Einsatzzeiten", "Konstante Qualität"],
    image: "/images/service-buero.jpg",
    imageAlt: "Heller Büroraum mit Glaswänden",
  },
];

export const clients = ["Hausverwaltungen", "Wohnungsgesellschaften", "Büros und Praxen"] as const;

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

export const galleryPlaceholders = [
  {
    src: "/images/referenz-fenster.jpg",
    alt: "Professionelle Fensterreinigung an einer Glasfläche",
    caption: "Fenster",
    span: "wide" as const,
  },
  {
    src: "/images/referenz-treppenhaus.jpg",
    alt: "Helles Treppenhaus mit Glasgeländer",
    caption: "Treppenhaus",
    span: "tall" as const,
  },
  {
    src: "/images/referenz-buero.jpg",
    alt: "Heller Büroraum nach der Reinigung",
    caption: "Büro",
    span: "normal" as const,
  },
];

export const aboutFacts = [
  { label: "Standort", value: "Großräschen" },
  { label: "Erfahrung", value: "Über 10 Jahre" },
  { label: "Region", value: "Lausitzer Seenland" },
] as const;

export const OPEN_ITEMS = [
  "Eigene Objektfotos liefern (Stock-Beispielfotos ersetzen)",
  "Persönlichen Text und Porträt von Oliver Kienle liefern",
  "Erreichbarkeit / Zeiten bestätigen",
  "Datenschutzerklärung und Impressum rechtlich prüfen",
] as const;
