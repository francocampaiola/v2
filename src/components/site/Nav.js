"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCopy } from "./hooks";

const SECTIONS = ["milestones", "projects", "experience", "skills"];

// Barra fija arriba: nombre, anclas de la home, blog y el selector de idioma.
export default function Nav() {
  const { ui, lang } = useCopy();
  const { changeLanguage } = useLanguage();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(11,12,14,0.82)] backdrop-blur-md">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-medium">
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-lg bg-[var(--accent)] text-[13px] font-bold text-[var(--accent-ink)]"
          >
            FC
          </span>
          <span className="max-sm:hidden">Franco Campaiola</span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1 text-[13px]">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`/#${id}`}
              className="rounded-lg px-2.5 py-1.5 text-[var(--ink-2)] transition-colors hover:bg-[var(--s2)] hover:text-[var(--ink)] max-md:hidden"
            >
              {ui.nav[id]}
            </a>
          ))}
          <Link
            href="/blog"
            className="rounded-lg px-2.5 py-1.5 text-[var(--ink-2)] transition-colors hover:bg-[var(--s2)] hover:text-[var(--ink)]"
          >
            {ui.nav.blog}
          </Link>
          <div role="group" aria-label={ui.language} className="ml-1 flex rounded-lg bg-[var(--s2)] p-0.5">
            {["es", "en"].map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => changeLanguage(code)}
                className={`h-7 rounded-md px-2 text-[12px] font-medium uppercase transition-colors ${
                  lang === code ? "bg-[var(--ink)] text-[var(--bg)]" : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
