"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Propinita = () => {
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
        <h1 className="text-4xl font-bold text-slate-200 mb-4">Propinita</h1>
        <p className="text-xl text-slate-300 mb-8">
          {language === "es"
            ? "Chau efectivo, hola gratitud - Revolucionando las propinas digitales"
            : "Goodbye cash, hello gratitude - Revolutionizing digital tips"}
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
              ? "Propinita nace de una pregunta fundamental: ¿Por qué seguimos dando propinas como en el siglo pasado? Esta aplicación web innovadora, desarrollada como proyecto de tesis, revoluciona la forma en que expresamos gratitud en un mundo cada vez más digital. La plataforma conecta directamente a los clientes con los trabajadores, eliminando intermediarios y facilitando transacciones seguras y transparentes."
              : "Propinita was born from a fundamental question: Why do we still give tips like in the last century? This innovative web application, developed as a thesis project, revolutionizes how we express gratitude in an increasingly digital world. The platform directly connects customers with workers, eliminating intermediaries and facilitating secure and transparent transactions."}
          </p>
          <p className="text-slate-300 mb-4">
            {language === "es"
              ? "Como CEO y Fundador, diseñé e implementé una solución completa que incluye autenticación de usuarios, integración con MercadoPago, generación dinámica de códigos QR y un sistema de gestión de propinas. El proyecto demuestra la aplicación práctica de metodologías ágiles y mejores prácticas de desarrollo web moderno, con un enfoque en la filosofía 'win-win'."
              : "As CEO and Founder, I designed and implemented a complete solution that includes user authentication, MercadoPago integration, dynamic QR code generation and a tip management system. The project demonstrates the practical application of agile methodologies and modern web development best practices, with a focus on the 'win-win' philosophy."}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/propinita.png"
            alt="Propinita"
            width={300}
            height={200}
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
              {language === "es"
                ? "Integración MercadoPago"
                : "MercadoPago Integration"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Vinculación completa con MercadoPago para procesar pagos de manera segura y transparente, facilitando las transacciones digitales."
                : "Complete integration with MercadoPago to process payments securely and transparently, facilitating digital transactions."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "QR Dinámico" : "Dynamic QR"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Generación dinámica de códigos QR que permiten a los clientes escanear y realizar pagos de propinas de forma instantánea y cómoda."
                : "Dynamic QR code generation that allows customers to scan and make tip payments instantly and conveniently."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es"
                ? "Onboarding Intuitivo"
                : "Intuitive Onboarding"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Proceso de registro y onboarding simplificado que guía a los usuarios desde el registro hasta la vinculación con su billetera virtual."
                : "Simplified registration and onboarding process that guides users from registration to linking their virtual wallet."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Filosofía Win-Win" : "Win-Win Philosophy"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Diseño centrado en beneficiar tanto a proveedores como a usuarios, creando una cultura de agradecimiento y apoyo mutuo."
                : "Design centered on benefiting both providers and users, creating a culture of gratitude and mutual support."}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">
          {language === "es"
            ? "Metodología de Desarrollo"
            : "Development Methodology"}
        </h2>
        <div className="bg-slate-800 rounded-lg p-6">
          <p className="text-slate-300 mb-4">
            {language === "es"
              ? "Este proyecto fue desarrollado como tesis de grado, aplicando metodologías ágiles y mejores prácticas de desarrollo web moderno. El proceso incluyó investigación de mercado, diseño de UX/UI con la fuente Saira SemiCondensed, desarrollo iterativo y pruebas exhaustivas. El lanzamiento se realizará en la 23ª edición de la Feria Hotelga en agosto de 2025."
              : "This project was developed as a graduation thesis, applying agile methodologies and modern web development best practices. The process included market research, UX/UI design with Saira SemiCondensed font, iterative development and exhaustive testing. The launch will take place at the 23rd edition of Hotelga Fair in August 2025."}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-300 mb-2">6</div>
              <p className="text-slate-300 text-sm">
                {language === "es"
                  ? "Meses de desarrollo"
                  : "Months of development"}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-300 mb-2">
                Hotelga
              </div>
              <p className="text-slate-300 text-sm">
                {language === "es" ? "Lanzamiento 2025" : "Launch 2025"}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-300 mb-2">A+</div>
              <p className="text-slate-300 text-sm">
                {language === "es" ? "Calificación final" : "Final grade"}
              </p>
            </div>
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
            "MercadoPago",
            "QR Code",
            "React Hook Form",
            "Zod",
            "Saira SemiCondensed",
            "Git",
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
            <div className="bg-slate-700 rounded-lg p-8 h-48 flex items-center justify-center">
              <p className="text-slate-400 text-center">
                {language === "es"
                  ? "Captura de pantalla del dashboard"
                  : "Dashboard screenshot"}
              </p>
            </div>
            <p className="text-slate-400 text-center mt-2">
              {language === "es" ? "Landing page" : "Landing page"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="bg-slate-700 rounded-lg p-8 h-48 flex items-center justify-center">
              <p className="text-slate-400 text-center">
                {language === "es" ? "QR Code" : "QR Code"}
              </p>
            </div>
            <p className="text-slate-400 text-center mt-2">
              {language === "es" ? "Código QR dinámico" : "Dynamic QR code"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="bg-slate-700 rounded-lg p-8 h-48 flex items-center justify-center">
              <p className="text-slate-400 text-center">
                {language === "es" ? "Onboarding" : "Onboarding"}
              </p>
            </div>
            <p className="text-slate-400 text-center mt-2">
              {language === "es"
                ? "Proceso de registro"
                : "Registration process"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="bg-slate-700 rounded-lg p-8 h-48 flex items-center justify-center">
              <p className="text-slate-400 text-center">
                {language === "es" ? "MercadoPago" : "MercadoPago"}
              </p>
            </div>
            <p className="text-slate-400 text-center mt-2">
              {language === "es"
                ? "Integración de pagos"
                : "Payment integration"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-200 mb-4">
          {language === "es"
            ? "Resultados y Conclusiones"
            : "Results and Conclusions"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Logros Técnicos" : "Technical Achievements"}
            </h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                •{" "}
                {language === "es"
                  ? "Arquitectura full-stack escalable"
                  : "Scalable full-stack architecture"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Integración completa de pagos"
                  : "Complete payment integration"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Sistema de autenticación robusto"
                  : "Robust authentication system"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Optimización de rendimiento"
                  : "Performance optimization"}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Impacto del Proyecto" : "Project Impact"}
            </h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                •{" "}
                {language === "es"
                  ? "Solución innovadora para propinas digitales"
                  : "Innovative solution for digital tips"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Reducción de intermediarios"
                  : "Reduction of intermediaries"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Transparencia en transacciones"
                  : "Transaction transparency"}
              </li>
              <li>
                •{" "}
                {language === "es"
                  ? "Mejora en experiencia del usuario"
                  : "Improved user experience"}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-slate-200 mb-4">
          {language === "es"
            ? "Propinita: Revolucionando las propinas digitales"
            : "Propinita: Revolutionizing Digital Tips"}
        </h3>
        <p className="text-slate-300 mb-8">
          {language === "es"
            ? "Este proyecto de tesis demuestra la aplicación práctica de tecnologías modernas para resolver problemas reales, creando una solución que beneficia tanto a profesionales como a clientes en el ecosistema de propinas digitales."
            : "This thesis project demonstrates the practical application of modern technologies to solve real problems, creating a solution that benefits both professionals and clients in the digital tips ecosystem."}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://landing.propinita.app"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
            {language === "es" ? "Ver Landing Page" : "View Landing Page"}
          </a>

          <a
            href="https://propinita.app"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
            {language === "es" ? "Ver Aplicación" : "View Application"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Propinita;
