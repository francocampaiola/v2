"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ExperienceCard from "../../Card/ExperienceCard";

const Experience = () => {
  const { language } = useLanguage();

  return (
    <>
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {language === "es" ? "Experiencia" : "Experience"}
      </h2>
      {language === "es" ? (
        <ExperienceCard
          dateInit={"2017"}
          dateEnd={"Presente"}
          company={"Novocap S.A."}
          companyUrl={"https://www.novocap.com"}
          description={"Español"}
          technologies={["React.js", "Next.js", "Docker", "GitHub"]}
        />
      ) : (
        <ExperienceCard
          dateInit={"2017"}
          dateEnd={"Present"}
          company={"Novocap S.A."}
          companyUrl={"https://www.novocap.com"}
          description={"Inglés"}
          technologies={["React.js", "Next.js", "Docker", "GitHub"]}
        />
      )}

      <div className="mt-2">
        {language === "es" ? (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-32"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ver CV completo (abriéndose en una nueva pestaña)"
          >
            <span>
              Ver <span></span>
              <span className="inline-block">
                detalle completo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        ) : (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-32"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View full resume (opens in a new tab)"
          >
            <span>
              View <span></span>
              <span className="inline-block">
                full resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        )}
      </div>
    </>
  );
};

export default Experience;
