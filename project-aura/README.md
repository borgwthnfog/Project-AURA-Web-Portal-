# Project AURA — Multi-Page React Scaffold (Vite)

This scaffold is a starting point for the Project AURA multi-page site (Vision, Technology, Roadmap, Join/Donate, Updates, Press, Contact).
It is configured for deployment on Netlify or GitHub Pages (build output in `dist`).

## Quick start (locally)
1. `npm install`
2. `npm run dev` (development)
3. `npm run build` (production build)
4. `npm run preview` (preview production build)

## Deployment (Netlify)
1. Push this repo to GitHub.
2. Sign in to Netlify and choose “New site from Git” → connect GitHub → select the repo.
3. Build command: `npm run build`  Publish directory: `dist`

## Replace placeholders
- PayPal donate links are placeholders in `/src/components/DonateModal.jsx`.
- Stripe / Crypto placeholders exist in `/src/components/DonateModal.jsx`.
- MailerLite embed placeholder is in `/src/components/MailerLiteForm.jsx`.

Design notes: uses Orbitron font for futuristic look; "crystal/energy" motif implemented via gradients and simple Three.js placeholder (CrystalLogo component).

---
Generated automatically for you. Good luck — Ivan Miholić / Project AURA
