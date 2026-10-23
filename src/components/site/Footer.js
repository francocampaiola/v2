"use client";

import { EMAIL, LINKS } from "@/content/site";
import { useCopy } from "./hooks";

export default function Footer() {
  const { ui, lang } = useCopy();
  return (
    <footer id="contact" className="mt-24 border-t border-[var(--line)] lg:mt-36">
      <div className="wrap grid gap-8 py-14 lg:grid-cols-2 lg:items-end lg:py-20">
        <div>
          <h2 className="text-[28px] leading-tight lg:text-[40px]">{ui.sections.contact.title}</h2>
          <p className="c2 mt-3 max-w-[420px]">{ui.sections.contact.lead}</p>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          <a href={`mailto:${EMAIL}`} className="btn btn-solid">
            {EMAIL}
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener" className="btn btn-quiet">
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener" className="btn btn-quiet">
            GitHub
          </a>
          <a href={LINKS.cv[lang]} target="_blank" rel="noopener" className="btn btn-quiet">
            {ui.hero.cv}
          </a>
        </div>
      </div>
      <div className="wrap c3 flex justify-between border-t border-[var(--line)] py-6 text-[13px]">
        <span>© 2026 Franco Campaiola</span>
        <a href={LINKS.x} target="_blank" rel="noopener" className="hover:text-[var(--ink)]">
          X / Twitter
        </a>
      </div>
    </footer>
  );
}
