"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Menu from "../Menu";
import Social from "../Social";

const Sidebar = () => {

  const { language } = useLanguage();

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Franco Campaiola
          </h1>
          <h2 className="mb-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {language === "es" ? "Desarrollador web frontend" : "Frontend web developer"}
          </h2>
          <p className="max-w-xs leading-normal">
            {language === 'es' ? 'Construyo aplicaciones web basadas en la filosofía pixel-perfect, accesibles para todo el mundo.' : 'I build pixel-perfect, accessible products for the web and beyond.'}
          </p>
          <Menu />
      <Social />
      </header>
    </>
  );
};

export default Sidebar;
