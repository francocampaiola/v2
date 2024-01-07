"use client"
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Menu = () => {

  const { language } = useLanguage();

  const [menuItems, setMenuItems] = useState([
    { id: "about", title_es: "Acerca de mí", title_en: "About", active: true },
    { id: "experience", title_es: "Experiencia", title_en: "Experience", active: false },
    { id: "projects", title_es: "Proyectos", title_en: "Projects", active: false },
  ]);

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
    <nav
      className="nav hidden lg:block"
      aria-label="In-page jump links"
    >
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
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
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
