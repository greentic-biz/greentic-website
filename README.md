# Greentic Website

This repository is a Vite + React static site. Local development runs with Vite, and production deployment is handled by GitHub Actions publishing a static `dist/` artifact to GitHub Pages.

## Local Build

- Install dependencies with `npm ci`
- Start local development with `npm run dev`
- Create the production Pages artifact with `npm run build`

`npm run build` runs the Vite production build and then prepares the output for GitHub Pages by adding `.nojekyll`, a SPA-safe `404.html`, and an optional `CNAME` file.

## Pages Deployment

The workflow is [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). On every push to `main`, GitHub Actions:

- installs dependencies with `npm ci`
- builds the static site into `dist/`
- adds Pages-specific files via `scripts/prepare-pages.mjs`
- uploads `dist/` with `actions/upload-pages-artifact`
- deploys it with `actions/deploy-pages`

The repo should use `Settings -> Pages -> Source -> GitHub Actions`.

## Base Paths And Assets

The site is configured to work in both of these modes without changing source paths:

- GitHub Pages project URL, such as `https://<owner>.github.io/<repo>/`
- custom-domain root, such as `https://www.greentic.ai/`

Implementation details:

- Vite uses `base: "./"` so built JS, CSS, fonts, and image assets are emitted with relative paths
- React Router detects whether the site is running under `/<repo>/` on `github.io` and sets `BrowserRouter` `basename` at runtime
- public asset references that need a stable root path are prefixed at runtime so `/repo/` and `/` both work
- `dist/404.html` redirects GitHub Pages deep links back into the SPA so refreshes do not break

## Switching To `www.greentic.ai`

You do not need to change application code when the custom domain is ready.

1. Verify the domain in GitHub first.
2. In repo `Settings -> Pages`, set the custom domain to `www.greentic.ai`.
3. Add a repository variable named `PAGES_CUSTOM_DOMAIN` with value `www.greentic.ai`.
4. Redeploy by pushing to `main` or running the workflow manually.
5. After DNS is correct, enable HTTPS in the Pages settings.

The build writes a `CNAME` file only when `PAGES_CUSTOM_DOMAIN` is set, so the current project URL keeps working until you are ready to switch.

## DNS Later

When moving to the custom domain, prefer `www.greentic.ai` as the canonical host and redirect the apex domain to it.

- `www.greentic.ai`: `CNAME` to `<owner>.github.io`
- `greentic.ai`: provider-supported `ALIAS` or `ANAME` to `<owner>.github.io`, or GitHub Pages apex `A` records if your DNS provider requires them

If your DNS provider does not support apex `ALIAS` or `ANAME`, use GitHub Pages apex records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Keep the Pages custom domain set to `www.greentic.ai`, then configure your DNS provider to forward `greentic.ai` to `https://www.greentic.ai/`.
