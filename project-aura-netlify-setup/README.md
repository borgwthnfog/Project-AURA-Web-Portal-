# Project-AURA Netlify Setup Package

This package contains CI/CD workflow and setup instructions to deploy *Project-AURA* using GitHub Actions + Netlify.

## Included files
- `.github/workflows/netlify.yml` — GitHub Actions workflow that builds and deploys to Netlify.
- `docs/NETLIFY_SETUP.md` — step-by-step Netlify setup guide.
- `.env.example` — example environment variables to copy to `.env`.
- `README.md` — this file.
- `assets/preview-logo.png` — placeholder preview logo used in README.

## 3D Preview
The live site uses `src/components/CrystalLogo3D.jsx` (react-three-fiber). Ensure `three` and `@react-three/fiber` are dependencies in `package.json` before deploying.

## How to use
1. Unzip into your repo root (or copy files into your repository).
2. Commit and push to `main` branch.
3. In GitHub repo settings → Secrets → Actions, add:
   - `NETLIFY_AUTH_TOKEN` (from Netlify User Settings → Applications)
   - `NETLIFY_SITE_ID` (from Netlify Site Settings → General → Site information)
4. Connect repository in Netlify (or let GitHub Actions handle deploy if using `nwtgck/actions-netlify`).

## Contact
If you need help with any specific step, reply here with details and I'll guide you through it.
