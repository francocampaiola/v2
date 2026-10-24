# francocampaiola.com

Sitio personal de Franco Campaiola. Next.js 16, React 19, Tailwind CSS v4 y TypeScript. Deploy en Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Dónde está cada cosa

- `src/content/data.ts`: el contenido del sitio (perfil, trabajos, proyectos personales e hitos), en español e inglés.
- `src/lib/i18n.ts`: los textos de la interfaz. Las rutas van por idioma (`/es`, `/en`); `/` redirige a `/es`.
- `src/components/hero-particles.tsx`: la escultura de partículas del hero (Three.js, solo en escritorio; en el celular va un anillo de CSS).
- `src/app/[locale]/projects/[slug]/page.tsx` y `src/components/facha/`: el caso de FACHA y sus demos animadas, recreadas con el lenguaje de la landing de facha.app.
- `public/pixel/`: las ilustraciones en pixel art de cada trabajo y proyecto. `public/facha-demo/`: fotos e íconos de las demos.
- `content/writing/<slug>.<es|en>.md`: los escritos, en Markdown con frontmatter (`title`, `summary`, `date`, `draft`).
  Con `draft: true` se ven en desarrollo y en los previews de Vercel, pero no en producción.

`/llms.txt`, `/sitemap.xml`, `/robots.txt`, las imágenes de Open Graph y los íconos se generan desde el mismo contenido.
