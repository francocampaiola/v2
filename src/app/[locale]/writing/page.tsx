import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import { PostList } from "@/components/post-list";
import { ui, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/writing";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return {
    title: ui[locale].sections.writing,
    alternates: { canonical: `/${locale}/writing`, languages: { es: "/es/writing", en: "/en/writing" } },
  };
}

export default async function WritingIndex({ params }: { params: Params }) {
  const locale = (await params).locale as Locale;
  const t = ui[locale];
  const posts = getPosts(locale);

  return (
    <main className="mx-auto max-w-2xl px-6 pb-16 pt-10">
      <Link href={`/${locale}`} className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
        <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
        {t.back}
      </Link>
      <h1 className="rise mt-10 text-3xl font-medium tracking-tight sm:text-4xl">{t.sections.writing}</h1>
      <p className="rise mt-3 text-pretty text-lg leading-relaxed text-muted" style={{ "--i": 1 } as React.CSSProperties}>
        {t.writingIntro}
      </p>
      <div className="rise mt-12" style={{ "--i": 2 } as React.CSSProperties}>
        {posts.length > 0 ? <PostList posts={posts} locale={locale} /> : <p className="text-muted">{t.noPosts}</p>}
      </div>
    </main>
  );
}
