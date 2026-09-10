/**
 * The six houses.
 *
 * Content sourced from the "Campbell Homepage content" document supplied by
 * the client. Taglines, body copy, locations and city mapping are VERBATIM
 * from that document. Verification notes from the doc are NOT included —
 * only the published copy.
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
  rejected?: string;
  soon?: boolean;
}

export const HOUSES: House[] = [
  {
    slug: 'louve', n: '01', name: 'Louve',
    category: 'The Flagship', location: 'New Delhi · Khan Market', ink: '#7B2233',
    tagline: 'European dining, reimagined.',
    pull: 'Its language is rooted in classic architecture, refined interiors, thoughtful food and an elevated bar experience.',
    tags: ['Now Open', 'European · Mediterranean', 'Asian'],
    cuisine: ['European', 'Mediterranean', 'Italian', 'Asian'],
    body: [
      'Set in the heart of Lutyens’ Delhi, Louve brings European dining into a grand yet understated setting. Its language is rooted in classic architecture, refined interiors, thoughtful food and an elevated bar experience.',
    ],
    hero: brandLouve, gallery: [galleryDish], schemaType: 'Restaurant',
  },
  {
    slug: 'cosy-box', n: '02', name: 'Cosy Box',
    category: 'Cinematic Fine Dining', location: 'Delhi · Gurugram · Mumbai · More', ink: '#1F3A5F',
    tagline: 'Cannes energy. Indian nights.',
    pull: 'A cinematic world of global cuisine, cocktails, music and late-night energy.',
    tags: ['Mediterranean', 'Italian', 'Asian'],
    cuisine: ['Mediterranean', 'Italian', 'Asian'],
    body: [
      'Born at the Cannes Film Festival and brought to India, Cosy Box is where dining, glamour and nightlife come together.',
      'A cinematic world of global cuisine, cocktails, music and late-night energy — created for people who like their evenings to feel like an occasion.',
    ],
    hero: brandCosybox, gallery: [galleryCosybox], schemaType: 'Restaurant',
  },
  {
    slug: 'toy-room', n: '03', name: 'Toy Room',
    category: 'Globally Recognised Nightlife', location: 'Delhi · Mumbai', ink: '#4A2E6B',
    tagline: 'Play after dark.',
    pull: 'Built around music, energy and a crowd that comes to be seen.',
    tags: ['Nightlife', 'High-Energy Club', 'Eclectic Music'],
    cuisine: [],
    body: [
      'Internationally recognised. Unmistakably irreverent.',
      'Toy Room turns nightlife into a visual playground inspired by pop culture, toys, comics, graffiti and celebrity culture — built around music, energy and a crowd that comes to be seen.',
    ],
    hero: brandToyroom, gallery: [], schemaType: 'NightClub',
    rejected:
      'The only second Toy Room image on file is a phone snapshot of guests with a mascot. It is not editorial photography and is deliberately not used.',
  },
  {
    slug: 'ophelia', n: '04', name: 'Ophelia',
    category: 'Restaurant & Bar', location: 'New Delhi · The Ashok, Chanakyapuri', ink: '#5C3A52',
    tagline: 'An evening with a different point of view.',
    pull: 'A restaurant by day. A social destination by night.',
    tags: ['Turkish', 'Italian', 'Innovative Cocktails'],
    cuisine: ['Turkish', 'Italian'],
    body: [
      'At The Ashok, Ophelia brings together global flavours, cocktails, music and nightlife in a space designed for lingering evenings.',
      'A restaurant by day. A social destination by night.',
    ],
    hero: galleryOphelia, gallery: [brandOphelia], schemaType: 'Restaurant',
  },
  {
    slug: 'meette', n: '05', name: 'Meette',
    category: 'Atelier Patisserie', location: 'New Delhi', ink: '#4B5D3A',
    tagline: 'Handcrafted, from the heart.',
    pull: 'Every creation is made to feel personal.',
    tags: ['Artistic Pastry', 'Innovation', 'Tradition'],
    cuisine: ['Patisserie'],
    body: [
      'Meette is Campbell’s artisanal side — a celebration of slow processes, beautiful ingredients and the craft of baking.',
      'From laminated croissants to naturally fermented sourdough and bespoke cakes, every creation is made to feel personal.',
    ],
    hero: brandMeette, gallery: [galleryMeette], schemaType: 'Bakery',
  },
  {
    slug: 'dodicci', n: '06', name: 'Dodicci',
    category: 'The Newest House', location: 'New Delhi · The Ashok', ink: '#9A4A22',
    tagline: 'A new chapter in dining.',
    pull: 'A new expression of dining at The Ashok, Chanakyapuri.',
    tags: ['Coming Soon'],
    cuisine: [],
    body: [
      'A contemporary addition to Campbell’s hospitality portfolio, Dodicci brings a new expression of dining to The Ashok, Chanakyapuri.',
    ],
    // No photograph exists. brand-patiala.jpg is an orphan of Royal House of
    // Patiala, the house that used to occupy slot 06 — never reuse it here.
    hero: null, gallery: [], schemaType: null, soon: true,
  },
];

export const SHOTS = [
  'The room, wide — evening service, tables dressed',
  'The bar — a pour, low light, hands in frame',
  'One signature plate — overhead, daylight',
  'The arrival — entrance or terrace at dusk',
];

export const CITY_MAP: [string, string][] = [
  ['New Delhi', 'Louve · Ophelia · Dodicci · Meette · Cosy Box · Toy Room'],
  ['Gurugram', 'Cosy Box'],
  ['Mumbai', 'Cosy Box · Toy Room'],
  ['Kolkata', 'Campbell portfolio presence'],
  ['Pune', 'Campbell portfolio presence'],
];

export const PILLARS: [string, string][] = [
  ['Restaurants', 'Dining experiences built around food, design and conversation.'],
  ['Bars', 'Considered cocktails, distinctive spaces and evenings that unfold slowly.'],
  ['Nightlife', 'Music-led destinations made for the after-dark.'],
  ['Patisserie', 'Handcrafted creations where technique meets imagination.'],
  ['Private Experiences', 'Celebrations, launches, dinners and occasions designed around the guest.'],
];

export const STANDARDS: [string, string][] = [
  ['Design', 'Spaces that have a point of view.'],
  ['Culinary Craft', 'Food that respects its ingredients and its story.'],
  ['Hospitality', 'Service that feels intuitive, personal and effortless.'],
  ['Culture', 'Music, art, fashion and people shaping every experience.'],
  ['Experience', 'Because a great restaurant is more than what is on the plate.'],
];

export const PRESS: [string, string][] = [
  ['Cannes Film Festival', 'Official Food Partner · Cosy Box'],
  ['LuxeBook', 'Top 50 Powerful Women in Luxury'],
  ['The Ashok', 'New Delhi'],
];
