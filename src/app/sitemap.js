import { POSTS, SITE_URL } from "@/content/site";

export default function sitemap() {
  const pages = ["", "/blog", "/projects/grayola", "/projects/megapix", "/projects/propinita"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: "2026-10-23",
  }));
  const posts = POSTS.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: post.date }));
  return [...pages, ...posts];
}
