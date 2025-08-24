"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Megapix = () => {
  const [language, setLanguage] = useState("es");

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/"
            className="inline-flex items-center text-teal-300 hover:text-teal-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-2 rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
            {language === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded text-sm font-medium ${
                language === "es"
                  ? "bg-teal-400/10 text-teal-300"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded text-sm font-medium ${
                language === "en"
                  ? "bg-teal-400/10 text-teal-300"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-slate-200 mb-4">Megapix</h1>
        <p className="text-xl text-slate-300 mb-8">
          {language === "es"
            ? "Plataforma fintech de pagos de alto rendimiento integrada con el sistema PIX de Brasil"
            : "High-performance fintech payment platform integrated with Brazil's PIX system"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-slate-200 mb-4">
            {language === "es"
              ? "Descripción del Proyecto"
              : "Project Description"}
          </h2>
          <p className="text-slate-300 mb-4">
            {language === "es"
              ? "Megapix es una plataforma tecnológica innovadora desarrollada por la fintech argentina Polynomium para facilitar las transacciones financieras entre Argentina y Brasil. Integrada con la tecnología PIX, respaldada por el Banco Central de Brasil, Megapix permite a los comerciantes argentinos recibir pagos en reales brasileños y convertirlos instantáneamente a USDT."
              : "Megapix is an innovative technology platform developed by the Argentine fintech Polynomium to facilitate financial transactions between Argentina and Brazil. Integrated with PIX technology, backed by the Central Bank of Brazil, Megapix allows Argentine merchants to receive payments in Brazilian reais and instantly convert them to USDT."}
          </p>
          <p className="text-slate-300 mb-4">
            {language === "es"
              ? "Como desarrollador frontend, implementé arquitecturas escalables utilizando Next.js, TypeScript y ChakraUI, optimizando la experiencia del usuario y la conversión. Desarrollé sistemas avanzados de gestión de formularios, manejo eficiente de datos y validaciones robustas, asegurando estabilidad y rendimiento en producción."
              : "As a frontend developer, I implemented scalable architectures using Next.js, TypeScript and ChakraUI, optimizing user experience and conversion. I developed advanced form management systems, efficient data handling and robust validations, ensuring stability and performance in production."}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/megapix/megapix_phone.webp"
            alt="Megapix"
            width={150}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">
          {language === "es" ? "Características Principales" : "Key Features"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Integración PIX" : "PIX Integration"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Integración completa con el sistema PIX del Banco Central de Brasil, permitiendo transacciones instantáneas y seguras entre Argentina y Brasil."
                : "Complete integration with Brazil's Central Bank PIX system, enabling instant and secure transactions between Argentina and Brazil."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es"
                ? "Conversión de Divisas"
                : "Currency Conversion"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Conversión automática de reales brasileños a USDT y pesos argentinos, eliminando barreras tradicionales del cambio de divisas."
                : "Automatic conversion from Brazilian reais to USDT and Argentine pesos, eliminating traditional currency exchange barriers."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es"
                ? "Arquitectura Frontend"
                : "Frontend Architecture"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Desarrollé una arquitectura frontend escalable con Next.js, TypeScript y ChakraUI, optimizando rendimiento y experiencia de usuario."
                : "I developed a scalable frontend architecture with Next.js, TypeScript and ChakraUI, optimizing performance and user experience."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Gestión de Datos" : "Data Management"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Implementé sistemas avanzados de gestión de formularios con react-hook-form, TanStack Query para datos y validaciones con Zod."
                : "I implemented advanced form management systems with react-hook-form, TanStack Query for data and validations with Zod."}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">
          {language === "es" ? "Tecnologías Utilizadas" : "Technologies Used"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "TypeScript",
            "ChakraUI",
            "React Hook Form",
            "TanStack Query",
            "Zod",
            "Docker",
            "Jira",
            "Sentry",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-teal-400/10 text-teal-300 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">
          {language === "es" ? "Galería de Imágenes" : "Image Gallery"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-lg p-4">
            <Image
              src="/megapix/megapix_home.webp"
              alt="Megapix Home"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <p className="text-slate-400 text-center mt-2">
              {language === "es" ? "Página principal" : "Homepage"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <Image
              src="/megapix/megapix_negociossinlimites.webp"
              alt="Megapix Business Without Limits"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <p className="text-slate-400 text-center mt-2">
              {language === "es"
                ? "Negocios sin límites"
                : "Business without limits"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <Image
              src="/megapix/megapix_pagossinfronteras.webp"
              alt="Megapix Borderless Payments"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <p className="text-slate-400 text-center mt-2">
              {language === "es"
                ? "Pagos sin fronteras"
                : "Borderless payments"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <Image
              src="/megapix/megapix_phone.webp"
              alt="Megapix Mobile"
              width={150}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <p className="text-slate-400 text-center mt-2">
              {language === "es" ? "Vista móvil" : "Mobile view"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">
          {language === "es" ? "Resultados y Impacto" : "Results and Impact"}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">99.9%</div>
            <p className="text-slate-300">
              {language === "es" ? "Uptime en producción" : "Production uptime"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">2.5x</div>
            <p className="text-slate-300">
              {language === "es"
                ? "Mejora en rendimiento"
                : "Performance improvement"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">100%</div>
            <p className="text-slate-300">
              {language === "es" ? "Cobertura de pruebas" : "Test coverage"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-slate-200 mb-4">
          {language === "es"
            ? "Megapix: La revolución en pagos transfronterizos entre Argentina y Brasil"
            : "Megapix: The Revolution in Cross-Border Payments Between Argentina and Brazil"}
        </h3>
        <p className="text-slate-300">
          {language === "es"
            ? "Esta solución elimina las barreras tradicionales del cambio de divisas, minimiza la necesidad de manejar efectivo y elimina el uso de intermediarios de baja confiabilidad, mejorando y beneficiando el comercio, el consumo y el turismo entre ambos países."
            : "This solution eliminates traditional currency exchange barriers, minimizes the need to handle cash, and removes the use of unreliable intermediaries, enhancing and benefiting trade, consumption, and tourism between both countries."}
        </p>
      </div>
    </div>
  );
};

export default Megapix;
