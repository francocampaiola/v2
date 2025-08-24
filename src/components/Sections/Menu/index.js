"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Menu = () => {
  const { language } = useLanguage();
  const [menuItems, setMenuItems] = useState([
    { id: "about", title_es: "Acerca de mí", title_en: "About", active: true },
    {
      id: "experience",
      title_es: "Experiencia",
      title_en: "Experience",
      active: false,
    },
    {
      id: "projects",
      title_es: "Proyectos",
      title_en: "Projects",
      active: false,
    },
    {
      id: "websites",
      title_es: "Sitios Web",
      title_en: "Websites",
      active: false,
    },
  ]);

  const sectionsRef = useRef({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleItemClick(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        sectionsRef.current[item.id] = section;
        observer.observe(section);
      }
    });

    return () => {
      menuItems.forEach((item) => {
        const section = sectionsRef.current[item.id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [menuItems]);

  const handleItemClick = (itemId) => {
    const updatedMenuItems = menuItems.map((item) => {
      return {
        ...item,
        active: item.id === itemId,
      };
    });
    setMenuItems(updatedMenuItems);
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              className={`group flex items-center py-3 ${
                item.active ? "active" : ""
              }`}
              href={`#${item.id}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-gradient-to-r from-slate-600 to-slate-500 transition-all group-hover:w-16 group-hover:from-teal-400 group-hover:to-blue-400 group-focus-visible:w-16 group-focus-visible:from-teal-400 group-focus-visible:to-blue-400 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 transition-colors duration-200">
                {language === "es" ? item.title_es : item.title_en}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
