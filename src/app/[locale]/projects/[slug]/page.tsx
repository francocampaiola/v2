import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseView } from "@/components/cases/case-view";
import { FachaCase, fachaSummary } from "@/components/facha/facha-case";
import { cases } from "@/content/cases";
import { locales, type Locale } from "@/lib/i18n";

type Params = Promise<{ locale: string; slug: string }>;

// FACHA tiene su propia página (con su grilla de demos); el resto usa la plantilla de caso
const projects = cases.filter((c) => c.kind === "project");
const slugs = ["facha", ...projects.map((c) => c.slug)];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const data = projects.find((c) => c.slug === slug);
  const name = slug === "facha" ? "FACHA" : data?.name;
  const description = slug === "facha" ? fachaSummary(l) : data?.summary[l];
  if (!name) return {};
  return {
    title: name,
    description,
    alternates: { canonical: `/${l}/projects/${slug}`, languages: { es: `/es/projects/${slug}`, en: `/en/projects/${slug}` } },
    openGraph: { title: name, description, images: [slug === "facha" ? "/pixel/facha.webp" : data!.image] },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (slug === "facha") return <FachaCase locale={locale as Locale} />;
  const data = projects.find((c) => c.slug === slug);
  if (!data) notFound();
  return <CaseView data={data} locale={locale as Locale} />;
}
