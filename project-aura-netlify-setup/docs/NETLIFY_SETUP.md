# Netlify Setup for Project-AURA

Follow these steps to connect your GitHub repository (Project-AURA) with Netlify and enable automated deployments.

## 1) Create a Netlify account
- Go to https://app.netlify.com and sign up (use GitHub to make linking easier).

## 2) Create a new site from Git
- Click **Add new site → Import an existing project**.
- Choose **GitHub** and authorize Netlify to access your repositories.
- Select the `Project-AURA` repository.

## 3) Build settings
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Netlify will detect Vite/React projects automatically in most cases.

## 4) Personal Access Token (for GitHub Actions)
- In Netlify: **User Settings → Applications → Personal access tokens** → Generate a token (copy it).
- In GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**:
  - `NETLIFY_AUTH_TOKEN` = (the token you generated)
  - `NETLIFY_SITE_ID` = (From Netlify: Site settings → General → Site information → Site ID)

## 5) Push to main
- Commit and push the `.github/workflows/netlify.yml` file to `main`.
- GitHub Actions will run the workflow; once build completes, Netlify will host the site.

## 6) Custom domain & HTTPS
- In Netlify site dashboard: **Domain management → Add custom domain**.
- Add DNS records as Netlify instructs; HTTPS via Let's Encrypt will be provisioned automatically.

If you want me to generate the secrets file content or help with any step, tell me which part you'd like assistance with.
