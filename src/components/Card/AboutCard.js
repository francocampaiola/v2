"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutCard = () => {
  const { language } = useLanguage();

  return (
    <div>
      <p className="mb-4">{language === "es" ? "Español" : "Ingles"}</p>
      <p className="mb-4">{language === "es" ? "Español" : "Ingles"}</p>
      <p>{language === "es" ? "Español" : "Ingles"}</p>
    </div>
  );
};

export default AboutCard;
