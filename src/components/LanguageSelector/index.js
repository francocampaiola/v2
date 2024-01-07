"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="fxhidden lg:block lg:justify-items-end lg:text-right lg:mb-5">
      <a
        className="mr-3 text-2xl cursor-pointer"
        onClick={() => {
          changeLanguage("es");
        }}
      >
        🇪🇸
      </a>
      <a className="text-2xl cursor-pointer" onClick={() => {
          changeLanguage("en");
      }}>
        🇺🇸
      </a>
    </div>
  );
};

export default LanguageSelector;
