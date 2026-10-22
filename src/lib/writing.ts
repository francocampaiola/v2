import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import type { Locale } from "@/lib/i18n";

// Un artículo por idioma: content/writing/<slug>.<locale>.md
const dir = path.join(process.cwd(), "content/writing");

export type Post = {
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  date: string;
  draft: boolean;
  readingMinutes: number;
  html: string;
};

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Falta el frontmatter en ${file}`);
  const meta = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const i = line.indexOf(":");
      return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1")];
    }),
  );
  const [slug, locale] = file.replace(/\.md$/, "").split(".");
  const body = match[2];
  return {
    slug,
    locale: locale as Locale,
    title: meta.title,
    summary: meta.summary,
    date: meta.date,
    draft: meta.draft === "true",
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
    html: marked.parse(body, { async: false }),
  };
}

// Los borradores se ven en desarrollo y en los previews de Vercel, nunca en producción
const showDrafts = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV !== "production"
  : process.env.NODE_ENV !== "production";

export function getPosts(locale: Locale): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(`.${locale}.md`))
    .map(parse)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): Post | undefined {
  return getPosts(locale).find((p) => p.slug === slug);
}

export function formatDate(date: string, locale: Locale) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(locale === "es" ? "es-AR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
