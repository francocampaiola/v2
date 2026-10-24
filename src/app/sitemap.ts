import type { MetadataRoute } from "next";
import { profile, projects } from "@/content/data";
import { locales } from "@/lib/i18n";
import { getPosts } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts("es").filter((p) => !p.draft);
  const paths = [
    "",
    ...projects.filter((p) => p.slug).map((p) => `/projects/${p.slug}`),
    ...(posts.length > 0 ? ["/writing", ...posts.map((p) => `/writing/${p.slug}`)] : []),
  ];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${profile.url}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${profile.url}/${l}${path}`])),
      },
    })),
  );
}
