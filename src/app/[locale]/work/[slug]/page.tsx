import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseView } from "@/components/cases/case-view";
import { cases } from "@/content/cases";
import { locales, type Locale } from "@/lib/i18n";

type Params = Promise<{ locale: string; slug: string }>;

const work = cases.filter((c) => c.kind === "work");

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => work.map((c) => ({ locale, slug: c.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = work.find((c) => c.slug === slug);
  if (!data) return {};
  const l = locale as Locale;
  return {
    title: data.name,
    description: data.summary[l],
    alternates: { canonical: `/${l}/work/${slug}`, languages: { es: `/es/work/${slug}`, en: `/en/work/${slug}` } },
    openGraph: { title: data.name, description: data.summary[l], images: [data.image] },
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const data = work.find((c) => c.slug === slug);
  if (!data) notFound();
  return <CaseView data={data} locale={locale as Locale} />;
}
