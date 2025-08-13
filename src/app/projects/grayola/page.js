"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Grayola = () => {
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
        <h1 className="text-4xl font-bold text-slate-200 mb-4">Grayola</h1>
        <p className="text-xl text-slate-300 mb-8">
          {language === "es"
            ? "Plataforma digital B2B innovadora basada en el modelo DaaS (Design as a Service)"
            : "Innovative B2B digital platform based on the DaaS (Design as a Service) model"}
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
              ? "Grayola es una plataforma digital B2B revolucionaria que transforma la forma en que las empresas acceden a servicios de diseño. Basada en el modelo DaaS (Design as a Service), la plataforma conecta empresas con diseñadores talentosos a través de un sistema de suscripciones con créditos."
              : "Grayola is a revolutionary B2B digital platform that transforms how companies access design services. Based on the DaaS (Design as a Service) model, the platform connects companies with talented designers through a subscription system with credits."}
          </p>
          <p className="text-slate-300 mb-4">
            {language === "es"
              ? "Como Tech Lead, lideré el desarrollo técnico y estratégico desde la concepción hasta el despliegue del MVP, construyendo una arquitectura full-stack escalable que optimiza la experiencia del usuario y genera valor medible para el negocio."
              : "As Tech Lead, I led the technical and strategic development from conception to MVP deployment, building a scalable full-stack architecture that optimizes user experience and generates measurable business value."}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-slate-800 rounded-lg p-8 w-full h-64 flex items-center justify-center">
            <p className="text-slate-400 text-center">
              {language === "es"
                ? "Imagen del proyecto Grayola"
                : "Grayola project image"}
            </p>
          </div>
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
                ? "Arquitectura Full-Stack"
                : "Full-Stack Architecture"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Desarrollé una arquitectura escalable utilizando Next.js, Supabase y AWS, optimizada para alto rendimiento y escalabilidad."
                : "I developed a scalable architecture using Next.js, Supabase and AWS, optimized for high performance and scalability."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Sistema de Pagos" : "Payment System"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Integración completa con Stripe para manejo de suscripciones, pagos recurrentes y gestión de créditos."
                : "Complete integration with Stripe for subscription management, recurring payments and credit management."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es"
                ? "Gestión de Proyectos"
                : "Project Management"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Sistema avanzado de gestión de proyectos con flujos de trabajo personalizables y seguimiento en tiempo real."
                : "Advanced project management system with customizable workflows and real-time tracking."}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-teal-300 mb-3">
              {language === "es" ? "Experiencia de Usuario" : "User Experience"}
            </h3>
            <p className="text-slate-300">
              {language === "es"
                ? "Diseño centrado en el usuario con Shadcn UI, optimizando la conversión y facilitando la navegación."
                : "User-centered design with Shadcn UI, optimizing conversion and facilitating navigation."}
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
            "Supabase",
            "Stripe",
            "Shadcn UI",
            "Amazon Web Services (AWS)",
            "Docker",
            "TypeScript",
            "React Hook Form",
            "Zod",
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
          <div className="bg-slate-800 rounded-lg p-8 h-64 flex items-center justify-center">
            <p className="text-slate-400 text-center">
              {language === "es"
                ? "Captura de pantalla del dashboard"
                : "Dashboard screenshot"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 h-64 flex items-center justify-center">
            <p className="text-slate-400 text-center">
              {language === "es"
                ? "Vista de gestión de proyectos"
                : "Project management view"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 h-64 flex items-center justify-center">
            <p className="text-slate-400 text-center">
              {language === "es"
                ? "Interfaz de pagos y suscripciones"
                : "Payments and subscriptions interface"}
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 h-64 flex items-center justify-center">
            <p className="text-slate-400 text-center">
              {language === "es" ? "Panel de administración" : "Admin panel"}
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
            <div className="text-3xl font-bold text-teal-300 mb-2">100%</div>
            <p className="text-slate-300">
              {language === "es" ? "Cobertura de pruebas" : "Test coverage"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">99.9%</div>
            <p className="text-slate-300">
              {language === "es" ? "Uptime en producción" : "Production uptime"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-300 mb-2">3x</div>
            <p className="text-slate-300">
              {language === "es"
                ? "Mejora en rendimiento"
                : "Performance improvement"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grayola;
