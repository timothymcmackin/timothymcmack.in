# timothymcmack.in

Personal site built with [Astro](https://astro.build/).

http://timothymcmack.in/

## Development

```bash
npm install
npm run dev      # dev server at localhost:4000
npm run build    # production build to dist/
npm run preview  # preview production build locally
```

## Project structure

```
src/
  components/    Masthead, AuthorSidebar, Footer
  layouts/       Base.astro, SidebarLayout.astro, SplashLayout.astro
  pages/         index, portfolio, resume, blog/, tags/, 404
  content/blog/  published blog posts (Markdown)
  data/          YAML data files (portfolio, resume sections, navigation)
public/
  assets/
    css/main.css   compiled Minimal Mistakes CSS
    js/            portfolioTags.js + MM main.min.js
    images/        site images
  files/           PDF resume
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.
