# Campbell India — Group Hospitality Website

A luxury hospitality **group umbrella site** for **Campbell India** (since 2019), built on **Astro + Tailwind** in the "Dark Luxe" editorial style. It showcases the group's six brands — Cosy Box, Toy Room, Ophelia, Meette, Louve and the Royal House of Patiala — plus its founders and vision.

This is a **client instance** of the reusable hospitality template (kept pristine in `../restaurant-website-template/`). The shared design system — tokens, layout spine, components — is unchanged; only content, imagery and page structure are tailored to Campbell India.

---

## Quick start

```bash
npm install
npm run dev      # local dev server (hot reload)
npm run build    # static output → dist/
npm run preview  # serve the production build locally
```

`dist/` is plain static HTML/CSS — deploy anywhere (Vercel auto-detects Astro static, Netlify, S3, Server C, etc.).

---

## Pages

```
src/pages/
  index.astro    → /          Group landing: hero · featured brands · founders · the Campbell standard · presence · enquiry CTA
  brands.astro   → /brands    All six brands as an editorial portfolio (anchors: #louve #cosy-box #toy-room #ophelia #meette #patiala)
  about.astro    → /about      Background · vision · founder bios (Ashish & Shikha Begwani)
  contact.astro  → /contact    Enquiry form · group contact details · flagship map
```

Shared shell: `src/layouts/Base.astro` + `src/components/Nav.astro` + `Footer.astro`. Design tokens in `tailwind.config.mjs`; custom CSS in `src/styles/global.css`.

Navigation is 4-page (Home / Brands / About / Contact); the template's Menu and Reservations pages were dropped — a group has no single menu or booking.

---

## Imagery

All photography in `public/images/` was extracted from the client's own pitch deck (`Campbell india.pdf`) — real venue renders, brand interiors, food and the founder portrait. No stock placeholders.

**Note:** Royal House of Patiala had no photography in the deck — its card currently borrows an atmospheric Louve render (`brand-patiala.jpg`). Swap for a real RHoP image when available.

---

## Before going live

- [ ] **Confirm contact details** — `hello@campbellindia.com`, the `events@/partnerships@/press@` aliases, the flagship address and office hours are sensible placeholders. Replace with the client's real domain, emails and phone.
- [ ] **Wire the forms** — contact / newsletter post to Formspree once `PUBLIC_FORMSPREE_ID` is set (env / Vercel project var). Until then they validate and show a friendly "not configured" notice.
- [ ] **Map** — currently centred on Khan Market (the Louve flagship) via a keyless OpenStreetMap embed. Re-point bbox/marker if a different address is canonical.
- [ ] **Social links** — Instagram / Facebook hrefs in Nav/Footer/Contact are placeholders (`#`).
- [ ] **Swap the Patiala image** (see above).

---

*Template: Dark Luxe editorial (Bodoni Moda + Hanken Grotesk, brass accent on near-black). Client build: Campbell India group site.*
