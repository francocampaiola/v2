"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Menu from "../Menu";
import Social from "../Social";

const Sidebar = () => {
  const { language } = useLanguage();

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Franco Campaiola
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {language === "es" ? "Desarrollador frontend" : "Frontend Engineer"}
          </h2>
          <p className="mt-3 max-w-xs leading-normal">
            {language === "es"
              ? "Creo productos digitales accesibles y adaptables, diseñados para destacar en la web y adaptarse a diversos entornos."
              : "I create accessible and adaptable digital products, designed to stand out on the web and adapt to various  environments."}
          </p>
          <Menu />
        </div>
        <Social />
      </header>
    </>
  );
};

export default Sidebar;
