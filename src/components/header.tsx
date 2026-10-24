import Link from "next/link";
import { profile } from "@/content/data";
import { ui, type Locale } from "@/lib/i18n";
import { LangSwitch } from "./lang-switch";

export function Header({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const links = [
    { href: `/${locale}#trabajo`, label: t.nav.work },
    { href: `/${locale}#proyectos`, label: t.nav.projects },
    { href: `/${locale}#hitos`, label: t.nav.milestones },
  ];

  return (
    <header className="relative z-20 mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-10 sm:py-6">
      <Link href={`/${locale}`} className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-[10px] bg-fg text-sm font-semibold tracking-tight text-bg">
          FC
        </span>
        <span className="text-[15px] font-medium tracking-tight">{profile.name}</span>
      </Link>
      <nav aria-label={locale === "es" ? "Principal" : "Main"} className="flex items-center gap-5 text-sm sm:gap-7">
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-muted transition-colors hover:text-fg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <LangSwitch locale={locale} label={locale === "es" ? "EN" : "ES"} ariaLabel={t.switchLangLabel} />
        <Link
          href={`/${locale}#contacto`}
          className="rounded-full bg-fg px-[18px] py-2.5 font-medium text-bg transition-opacity hover:opacity-85"
        >
          {t.nav.contact}
        </Link>
      </nav>
    </header>
  );
}
