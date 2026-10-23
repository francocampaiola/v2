import { readFileSync } from "node:fs";
import { join } from "node:path";
import { POSTS } from "@/content/site";

// Las notas del blog: los metadatos viven en src/content/site.js y el cuerpo en src/content/posts/<slug>.md.
export function getPost(slug) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  const body = readFileSync(join(process.cwd(), "src/content/posts", `${slug}.md`), "utf8");
  return { ...post, body };
}

export function allPosts() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
