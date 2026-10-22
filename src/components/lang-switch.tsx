"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LangSwitch({
  locale,
  label,
  ariaLabel,
}: {
  locale: Locale;
  label: string;
  ariaLabel: string;
}) {
  const pathname = usePathname();
  const target: Locale = locale === "es" ? "en" : "es";
  const href = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${target}`);

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={ariaLabel}
      className="rounded-full px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {label}
    </Link>
  );
}
