"use client";

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {/* Sol en modo oscuro, luna en modo claro */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="hidden size-4 dark:block" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-4 dark:hidden" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

// Se ejecuta antes del primer paint para evitar el flash de tema incorrecto
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})()`;
