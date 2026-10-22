# francocampaiola.com

Sitio personal de Franco Campaiola. Next.js 16, React 19, Tailwind CSS v4 y TypeScript. Deploy en Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Dónde está cada cosa

- `src/content/data.ts`: todo el contenido del sitio (perfil, casos, experiencia, sitios), en español e inglés.
- `content/writing/<slug>.<es|en>.md`: los escritos, en Markdown con frontmatter (`title`, `summary`, `date`, `draft`).
  Con `draft: true` se ven en desarrollo y en los previews de Vercel, pero no en producción.
- `src/lib/i18n.ts`: los textos de la interfaz. Las rutas van por idioma (`/es`, `/en`); `/` redirige a `/es`.
- `public/`: imágenes de los casos.

`/llms.txt`, `/sitemap.xml`, `/robots.txt`, las imágenes de Open Graph y los íconos se generan desde el mismo contenido.
