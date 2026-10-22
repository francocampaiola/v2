import Link from "next/link";
import { ui, type Locale } from "@/lib/i18n";
import { formatDate, type Post } from "@/lib/writing";

export function PostList({ posts, locale }: { posts: Post[]; locale: Locale }) {
  const t = ui[locale];
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post.slug} className="border-t border-border first:border-t-0">
          <Link href={`/${locale}/writing/${post.slug}`} className="group block py-5">
            <p className="flex items-center gap-3 font-mono text-xs text-subtle">
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              <span>·</span>
              <span>
                {post.readingMinutes} {t.minRead}
              </span>
              {post.draft && <span className="rounded-full border border-accent/40 px-2 text-accent">{t.draft}</span>}
            </p>
            <h3 className="mt-2 font-medium tracking-tight transition-colors group-hover:text-accent">{post.title}</h3>
            <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{post.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
