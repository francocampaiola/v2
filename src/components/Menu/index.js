"use client"
import React, { useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: "about", active: true },
    { id: "experience", active: false },
    { id: "projects", active: false },
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
                {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
