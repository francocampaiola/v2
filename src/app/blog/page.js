import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Notas de Franco Campaiola sobre cómo arma productos con IA, agentes de código, automatización y SEO.",
  alternates: { canonical: "/blog" },
};

const date = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  const posts = allPosts();
  return (
    <section aria-labelledby="blog-title" className="wrap pt-14 lg:pt-24">
      <p className="eyebrow">Blog</p>
      <h1 id="blog-title" className="mt-3 max-w-[720px] text-[36px] leading-[1.1] lg:text-[52px]">
        Cómo armo las cosas.
      </h1>
      <p className="c2 mt-4 max-w-[560px]">Notas sobre productos con IA, agentes que programan solos, automatización y SEO.</p>
      <ul className="mt-10 grid gap-3 lg:mt-14">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="card group grid gap-5 p-2.5 transition-colors hover:bg-[var(--s2)] lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div className="stage relative aspect-[1200/520] bg-[#0e1012]">
                <Image src={post.cover} alt="" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" priority />
              </div>
              <div className="px-2 pb-3 lg:pr-6">
                <p className="c3 text-[12px]">{date(post.date)}</p>
                <h2 className="mt-1.5 text-[20px] leading-7 lg:text-[24px] lg:leading-8">{post.es.title}</h2>
                <p className="c2 mt-2 text-[14px] leading-[22px]">{post.es.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium">
                  Leer nota <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
