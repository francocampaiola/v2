"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="hidden lg:block lg:justify-items-end lg:text-right lg:mb-5">
      {language === "es" ? (
        <a
          className="mr-3 text-2xl cursor-pointer"
          onClick={() => {
            changeLanguage("en");
          }}
        >
          🇺🇸
        </a>
      ) : (
        <a
          className="mr-3 text-2xl cursor-pointer"
          onClick={() => {
            changeLanguage("es");
          }}
        >
          🇪🇸
        </a>
      )}
    </div>
  );
};

export default LanguageSelector;
