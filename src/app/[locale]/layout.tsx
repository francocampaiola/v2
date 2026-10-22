import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { themeScript } from "@/components/theme-toggle";
import { currentRole, profile } from "@/content/data";
import { isLocale, locales, ui } from "@/lib/i18n";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = `${profile.name} — ${profile.role[locale]}`;
  return {
    metadataBase: new URL(profile.url),
    title: { default: title, template: `%s — ${profile.name}` },
    description: profile.headline[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      type: "website",
      title,
      description: profile.headline[locale],
      url: `/${locale}`,
      siteName: profile.name,
      locale: locale === "es" ? "es_AR" : "en_US",
    },
    twitter: { card: "summary_large_image", creator: "@francocampaiola" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
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
  const t = ui[locale];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.url,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role[locale],
    description: profile.intro[locale],
    worksFor: { "@type": "Organization", name: currentRole.company, url: currentRole.url },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidad Tecnológica Nacional" },
      { "@type": "EducationalOrganization", name: "Escuela Da Vinci" },
    ],
    sameAs: profile.social.map((s) => s.href),
  };

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-dvh font-sans">
        <Header locale={locale} />
        {children}
        <footer className="mx-auto max-w-2xl px-6 pb-12 pt-8">
          <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
            <p>{t.builtWith}</p>
            <p className="font-mono">© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
