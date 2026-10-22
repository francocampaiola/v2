import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@/components/icons";
import { profile } from "@/content/data";
import { locales, ui, type Locale } from "@/lib/i18n";
import { formatDate, getPost, getPosts } from "@/lib/writing";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getPosts(locale).map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale as Locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/${locale}/writing/${slug}`,
      languages: { es: `/es/writing/${slug}`, en: `/en/writing/${slug}` },
    },
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: post.date, authors: [profile.name] },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const post = getPost(locale, slug);
  if (!post) notFound();
  const t = ui[locale];

  return (
    <main className="mx-auto max-w-2xl px-6 pb-16 pt-10">
      <Link href={`/${locale}/writing`} className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
        <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
        {t.sections.writing}
      </Link>

      <article className="rise mt-10">
        <p className="flex items-center gap-3 font-mono text-xs text-subtle">
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <span>·</span>
          <span>
            {post.readingMinutes} {t.minRead}
          </span>
          {post.draft && <span className="rounded-full border border-accent/40 px-2 text-accent">{t.draft}</span>}
        </p>
        <h1 className="mt-4 text-balance text-3xl font-medium tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{post.summary}</p>
        <div className="prose-post mt-10 border-t border-border pt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-6 text-sm">
        <p className="font-medium">{profile.name}</p>
        <p className="mt-1 text-muted">{profile.tagline[locale]}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
          {profile.social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-fg">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
