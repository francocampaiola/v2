"use client";
import React from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

const Megapix = () => {
  const { language } = useLanguage();
  return (
    <div
      class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background:
          "radial-gradient(600px at 325px 446px, rgba(29, 78, 216, 0.15), transparent 80%);",
      }}
    >
      <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a
          href="#content"
          class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div class="lg:py-24">
          <a
            class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Franco Campaiola
          </a>
          {language === "es" ? (
            <>
              <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Todos los proyectos
              </h1>
            </>
          ) : (
            <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              All Projects
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <LanguageProvider>
      <Megapix />
    </LanguageProvider>
  );
};

export default Page;
