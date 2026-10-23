import Link from "next/link";
import { notFound } from "next/navigation";
import { EMAIL, POSTS, SITE_URL } from "@/content/site";
import { readingTime, renderMarkdown } from "@/lib/markdown";
import { getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.es.title,
    description: post.es.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.es.title,
      description: post.es.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Franco Campaiola"],
    },
  };
}

const date = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.es.title,
    description: post.es.description,
    datePublished: post.date,
    inLanguage: "es-AR",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}${post.cover}`,
    author: { "@type": "Person", name: "Franco Campaiola", url: SITE_URL },
  };
  return (
    <article className="wrap pt-10 lg:pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <div className="mx-auto max-w-[720px]">
        <Link href="/blog" className="c2 text-[13px] hover:text-[var(--ink)]">
          ← Blog
        </Link>
        <h1 className="mt-5 text-[32px] leading-[1.12] lg:text-[44px]">{post.es.title}</h1>
        <p className="c3 mt-4 text-[13px]">
          Franco Campaiola · {date(post.date)} · {readingTime(post.body)} min de lectura
        </p>
        <div className="prose-post mt-10">{renderMarkdown(post.body)}</div>
        <div className="card mt-14 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="c2 text-[14px]">
            <strong className="text-[var(--ink)]">Franco Campaiola</strong> es desarrollador full stack y fundador de FACHA.
          </p>
          <a href={`mailto:${EMAIL}`} className="btn btn-quiet">
            Escribime
          </a>
        </div>
      </div>
    </article>
  );
}
