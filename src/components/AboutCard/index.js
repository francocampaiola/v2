"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutCard = () => {
  const { language } = useLanguage();

  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-40 lg:scroll-mt-24"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          <p>{language === "es" ? "Acerca de" : "About"}</p>
        </h2>
      </div>
      <div>
        <p className="mb-4">{language === "es" ? "Español" : "Ingles"}</p>
        <p className="mb-4">{language === "es" ? "Español" : "Ingles"}</p>
        <p>{language === "es" ? "Español" : "Ingles"}</p>
      </div>
    </section>
  );
};

export default AboutCard;
