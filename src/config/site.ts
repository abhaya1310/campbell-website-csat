/**
 * Campbell India — single source of truth for client-supplied facts.
 *
 * Every email, phone number, social handle and address on the site reads from
 * here. Nothing is hard-coded into a page. When the client confirms a detail,
 * it changes in ONE place.
 *
 * ⚠️ Anything marked UNVERIFIED is a placeholder we invented and must be
 * confirmed by Campbell India before go-live. Unset socials render as nothing
 * rather than as a dead link.
 */

/** Canonical production origin. Set PUBLIC_SITE_URL in the host env at deploy. */
export const SITE_URL = (
  import.meta.env.PUBLIC_SITE_URL || 'https://www.campbellindia.com'
).replace(/\/$/, '');

export const SITE = {
  name: 'Campbell India',
  legalName: 'Campbell Property & Hospitality',
  foundingYear: '2019',
  tagline: 'Luxury Hospitality',
  description:
    'Campbell India is a luxury hospitality house redefining dining and nightlife — blending global sophistication with Indian warmth. Home to Cosy Box, Toy Room, Ophelia, Meette, Louve and Dodicci.',
};

/** ⚠️ UNVERIFIED — confirm every address with the client before go-live. */
export const EMAILS = {
  general: 'hello@campbellindia.com',
  partnerships: 'partnerships@campbellindia.com',
  events: 'events@campbellindia.com',
  press: 'press@campbellindia.com',
};

/** ⚠️ UNVERIFIED — confirm before go-live. Empty string hides the row. */
export const PHONE = '';

/**
 * Social profiles. An empty string means "not supplied yet" — the icon is
 * omitted entirely rather than rendered as a dead href="#".
 * ⚠️ All UNVERIFIED — awaiting real handles from the client.
 */
export const SOCIALS: { label: string; href: string; icon: 'instagram' | 'facebook' | 'linkedin' }[] =
  [
    { label: 'Instagram', href: '', icon: 'instagram' },
    { label: 'Facebook', href: '', icon: 'facebook' },
    { label: 'LinkedIn', href: '', icon: 'linkedin' },
  ];

/** Cities the group operates in — used in copy and in the LocalBusiness schema. */
export const CITIES = ['New Delhi', 'Gurugram', 'Mumbai', 'Kolkata', 'Pune'];

/**
 * The map pin. This is the FLAGSHIP (Louve, Khan Market) — not a head office.
 * Labelled as such on the page so it doesn't contradict the pan-India copy.
 * ⚠️ Street address UNVERIFIED — confirm, or drop the address line.
 */
export const FLAGSHIP = {
  brand: 'Louve',
  label: 'Flagship — Louve',
  locality: 'Khan Market, New Delhi',
  region: 'Delhi',
  country: 'IN',
  lat: 28.6004,
  lng: 77.227,
  mapBbox: '77.217,28.595,77.237,28.606',
  directionsQuery: 'Louve Khan Market New Delhi',
  nearestMetro: 'Khan Market',
};

export const OFFICE_HOURS = {
  days: 'Monday – Saturday',
  hours: '10:00 AM – 7:00 PM (IST)',
};

/**
 * Form delivery. Set PUBLIC_FORMSPREE_ID in the host env to enable AJAX
 * delivery. When unset the form does NOT dead-end — it falls back to opening
 * the visitor's mail client with the message pre-filled, so an enquiry is
 * never silently lost.
 */
export const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID || '';

/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Empty = no analytics. */
export const GA_ID = import.meta.env.PUBLIC_GA_ID || '';

/** Default social-share image, relative to the site root. */
export const OG_IMAGE = '/og-image.jpg';
