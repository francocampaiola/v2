import Link from "next/link";
import { profile } from "@/content/data";
import { ui, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/writing";
import { LangSwitch } from "./lang-switch";
import { ThemeToggle } from "./theme-toggle";

export function Header({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const links = [
    { href: `/${locale}#building`, label: t.nav.building },
    { href: `/${locale}#work`, label: t.nav.work },
    ...(getPosts(locale).length > 0 ? [{ href: `/${locale}/writing`, label: t.nav.writing }] : []),
    { href: `/${locale}#about`, label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-transparent bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/60">
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="text-sm font-medium tracking-tight">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch locale={locale} label={locale === "es" ? "EN" : "ES"} ariaLabel={t.switchLangLabel} />
          <ThemeToggle label={t.theme} />
        </nav>
      </div>
    </header>
  );
}
