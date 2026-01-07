# Combined GetEducate Website

This repository contains a unified static website that combines the GetEducate main site and the Portfolio page.

Structure:
- index.html — main landing page
- portfolio/index.html — portfolio (second page)
- jobs.html — job posting page
- auth.html, application.html, success.html — simple auth/application flows
- style.css — shared styles
- script.js — client-side behavior

How to run locally:
1. Clone the repo.
2. From the repo root run a static server:
   - With Node (recommended): `npx serve .` (install `serve` if needed)
   - Or with Python: `python -m http.server 8000`
3. Open http://localhost:5000 (or http://localhost:8000) in your browser.

Deploying to GitHub Pages:
- Push this code to a repository called `geteducate` (or other).
- In repository Settings → Pages, set branch to `main` and folder to `/ (root)`.
- If you want `username.github.io` style user pages, name the repo `geteducate.github.io` and push to main.

Notes & next steps:
- I reconstructed the combined static site from your repositories [geteducate/geteducate](https://github.com/geteducate/geteducate) and [geteducate/Portfolio](https://github.com/geteducate/Portfolio). The GitHub reads used while building this may be incomplete; please verify the original repos if you need exact lines of original source preserved.
- If you want the Portfolio app preserved as a React/Vite application (instead of a static portfolio/index.html), I can integrate the Portfolio source into a /portfolio React app and provide a build workflow so /portfolio serves the app (requires installing NPM deps and building).
- If you want me to create a branch or PR in your actual repository with these files, tell me which repo to push into (I can provide exact git commands or prepare a patch).

If you want an exact byte-for-byte copy of your original Portfolio app (built production output) integrated into /portfolio, tell me whether you prefer:
- I produce a Vite/React app in /portfolio with full source (I will copy the Portfolio src files into it) — you'll then run `npm install` and `npm run build`.
- OR I provide a static build folder for /portfolio (I can produce a sample build, but to create a precise build I need the original Portfolio source files and package.json build step).

Which would you like next:
- I can push these files into a repo structure and give you git commands to upload, or
- I can convert the original Portfolio source into an integrated Vite app under /portfolio and provide the full source + build instructions.

Reply with which option you want and whether you want me to prepare a PR/patch for a specific repository.