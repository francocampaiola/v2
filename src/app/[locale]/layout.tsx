import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { jobs, profile } from "@/content/data";
import { isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const instrumentSerif = localFont({
  src: [
    { path: "../../fonts/instrument-serif-latin-400-normal.woff2", style: "normal", weight: "400" },
    { path: "../../fonts/instrument-serif-latin-400-italic.woff2", style: "italic", weight: "400" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = `${profile.name} — ${profile.role[locale]}`;
  const description = profile.intro[locale];
  return {
    metadataBase: new URL(profile.url),
    title: { default: title, template: `%s — ${profile.name}` },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${locale}`,
      siteName: profile.name,
      locale: locale === "es" ? "es_AR" : "en_US",
    },
    twitter: { card: "summary_large_image", creator: "@francocampaiola" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const current = jobs[0];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.url,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role[locale],
    description: profile.intro[locale],
    worksFor: { "@type": "Organization", name: current.company, url: current.url },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidad Tecnológica Nacional" },
      { "@type": "EducationalOrganization", name: "Escuela Da Vinci" },
    ],
    sameAs: profile.social.map((s) => s.href),
  };

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-dvh overflow-x-hidden font-sans">
        <Header locale={locale} />
        {children}
        <footer className="mx-auto max-w-[1280px] px-5 pb-14 sm:px-10">
          <p className="font-mono text-xs text-subtle">© {new Date().getFullYear()} {profile.name}</p>
        </footer>
      </body>
    </html>
  );
}
