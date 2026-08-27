/**
 * The six houses.
 *
 * EVERY factual field here — name, index, category, location, tags, cuisine and
 * both body paragraphs — is VERBATIM from the copy Campbell supplied. Do not
 * paraphrase, and do not reintroduce a location that was deliberately dropped
 * from a label (Khan Market, The Ashok: see commits e718ee7 and 8a47832).
 *
 * `tagline` and `pull` are the only new prose. Each is a compression of that
 * house's own paragraph, written for the design. They carry no new claim.
 *
 * `ink` is the house's single colour. It is spent on the folio numeral, the
 * rules, the CTA underline, the full-bleed band and the page transition —
 * never as a second palette. The group's own metal is gold, and gold appears
 * on group pages only.
 */
import type { ImageMetadata } from 'astro';

import brandLouve from '../assets/images/brand-louve.jpg';
import brandCosybox from '../assets/images/brand-cosybox.jpg';
import brandToyroom from '../assets/images/brand-toyroom.jpg';
import brandMeette from '../assets/images/brand-meette.jpg';
import galleryLouve from '../assets/images/gallery-louve.jpg';
import galleryCosybox from '../assets/images/gallery-cosybox.jpg';
import galleryOphelia from '../assets/images/gallery-ophelia.jpg';
import galleryMeette from '../assets/images/gallery-meette.jpg';
import galleryDish from '../assets/images/gallery-dish.jpg';
import brandOphelia from '../assets/images/brand-ophelia.jpg';

export interface House {
  slug: string;
  n: string;
  name: string;
  category: string;
  location: string;
  ink: string;
  tagline: string;
  pull: string;
  tags: string[];
  cuisine: string[];
  body: string[];
  hero: ImageMetadata | null;
  gallery: ImageMetadata[];
  schemaType: string | null;
  /** Set when an asset exists but is deliberately NOT used. */
  rejected?: string;
  /** House announced but not open — carries no photograph and no substitute. */
  soon?: boolean;
}

export const HOUSES: House[] = [
  {
    slug: 'louve', n: '01', name: 'Louve',
    category: 'The Flagship', location: 'New Delhi', ink: '#7B2233',
    tagline: 'Latin charm, met with contemporary elegance.',
    pull: 'A multi-level, immersive dining experience that blends Latin charm with contemporary elegance.',
    tags: ['Now Open', 'European · Mediterranean', 'Asian'],
    cuisine: ['European', 'Mediterranean', 'Italian', 'Asian'],
    body: [
      "Campbell India's flagship, unveiled in February 2026 in Delhi's most prestigious retail destination — Khan Market. Spanning over 3,000 square metres with a capacity of 300+ guests, Louve offers a multi-level, immersive dining experience that blends Latin charm with contemporary elegance.",
      'A stunning open-air terrace hosts intimate evenings and premium lifestyle events. The ground level showcases progressive European, Mediterranean and contemporary Italian cuisine, while the upper level offers an elevated take on classic Asian fare.',
    ],
    hero: brandLouve, gallery: [galleryDish], schemaType: 'Restaurant',
  },
  {
    slug: 'cosy-box', n: '02', name: 'Cosy Box',
    category: 'Cinematic Fine Dining', location: 'Delhi · Gurugram · Mumbai · Kolkata', ink: '#1F3A5F',
    tagline: 'From the Cannes Film Festival to four Indian cities.',
    pull: 'Opulent settings that celebrate the allure of the silver screen.',
    tags: ['Mediterranean', 'Italian', 'Asian'],
    cuisine: ['Mediterranean', 'Italian', 'Asian'],
    body: [
      'From its origins as the official food partner of the Cannes Film Festival, Cosy Box brings cinematic glamour to India.',
      'Across Delhi, Gurugram, Mumbai and Kolkata, it offers a fusion of Mediterranean, Italian and Asian cuisines within opulent settings that celebrate the allure of the silver screen.',
    ],
    hero: brandCosybox, gallery: [galleryCosybox], schemaType: 'Restaurant',
  },
  {
    slug: 'toy-room', n: '03', name: 'Toy Room',
    category: 'Globally Recognised Nightlife', location: 'Delhi · Mumbai · Kolkata · Pune', ink: '#4A2E6B',
    tagline: 'The global nightlife name, in its Indian rooms.',
    pull: 'A discerning clientele seeking exclusive entertainment.',
    tags: ['Nightlife', 'High-Energy Club', 'Eclectic Music'],
    cuisine: [],
    body: [
      'As a globally recognised nightlife brand, Toy Room delivers high-energy club experiences. Known for its vibrant ambiance and eclectic music, it caters to a discerning clientele seeking exclusive entertainment.',
      "With thriving locations in Delhi, Mumbai, Kolkata and Pune, Toy Room brings its signature blend of luxury and nightlife to India's most dynamic cities.",
    ],
    hero: brandToyroom, gallery: [], schemaType: 'NightClub',
    rejected:
      'The only second Toy Room image on file is a phone snapshot of guests with a mascot. It is not editorial photography and is deliberately not used.',
  },
  {
    slug: 'ophelia', n: '04', name: 'Ophelia',
    category: 'Restaurant & Bar', location: 'New Delhi', ink: '#5C3A52',
    tagline: 'A Shakespearean era, in Renaissance-inspired décor.',
    pull: 'Guests are transported to a Shakespearean era.',
    tags: ['Turkish', 'Italian', 'Innovative Cocktails'],
    cuisine: ['Turkish', 'Italian'],
    body: [
      "Nestled in Delhi's iconic The Ashok, Ophelia transports guests to a Shakespearean era with its Renaissance-inspired décor.",
      'Offering a menu that spans Turkish to Italian delicacies, it provides an evocative dining experience complemented by ambient vibes and innovative cocktails.',
    ],
    hero: galleryOphelia, gallery: [brandOphelia], schemaType: 'Restaurant',
  },
  {
    slug: 'meette', n: '05', name: 'Meette',
    category: 'Atelier Patisserie', location: 'Founded 2015', ink: '#4B5D3A',
    tagline: 'Pastry as artistry, since 2015.',
    pull: 'Food is an expression of artistry.',
    tags: ['Artistic Pastry', 'Innovation', 'Tradition'],
    cuisine: ['Patisserie'],
    body: [
      'Founded in 2015 with a deep passion for culinary craftsmanship, Meette was born from a gap in the market for refined, artistic pastries that balance innovation with tradition.',
      'Here, food is an expression of artistry — every creation crafted with meticulous attention to detail for a clientele who share an appreciation for the beauty in every bite.',
    ],
    hero: brandMeette, gallery: [galleryMeette], schemaType: 'Bakery',
  },
  {
    slug: 'dodicci', n: '06', name: 'Dodicci',
    category: 'The Newest House', location: 'Coming Soon', ink: '#9A4A22',
    tagline: 'Taking shape.',
    pull: 'Full details will be unveiled soon.',
    tags: ['Coming Soon'],
    cuisine: [],
    body: [
      'Dodicci is the newest addition to the Campbell India portfolio — an intimate new dining concept currently taking shape.',
      'Full details will be unveiled soon.',
    ],
    // No photograph exists. brand-patiala.jpg is an orphan of Royal House of
    // Patiala, the house that used to occupy slot 06 — never reuse it here.
    hero: null, gallery: [], schemaType: null, soon: true,
  },
];

/** The four plates the gallery is designed around, in shooting order. */
export const SHOTS = [
  'The room, wide — evening service, tables dressed',
  'The bar — a pour, low light, hands in frame',
  'One signature plate — overhead, daylight',
  'The arrival — entrance or terrace at dusk',
];

/** Read off the houses above. Meette carries no city, so it appears in none. */
export const CITY_MAP: [string, string][] = [
  ['New Delhi', 'Louve · Ophelia · Cosy Box · Toy Room'],
  ['Gurugram', 'Cosy Box'],
  ['Mumbai', 'Cosy Box · Toy Room'],
  ['Kolkata', 'Cosy Box · Toy Room'],
  ['Pune', 'Toy Room'],
];

export const PILLARS: [string, string][] = [
  ['Dining', 'Three open houses across European, Mediterranean, Italian, Asian and Turkish kitchens, and a fourth still taking shape.'],
  ['Patisserie', 'Meette works to the standards of an atelier: small batches, technical pastry, and a display case treated as a shopfront.'],
  ['Nightlife', 'Toy Room arrives with an international reputation and runs the late half of the evening in four cities.'],
];
