import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

// Create an array of themes
const themes = ["light", "dark"];

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check if localStorage exists and has an item 'theme' and set the default theme state to that
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }

    // if the user's selected theme is dark, set the dfault theme state to dark, else set it to light
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  //   This function checks if the theme state is dark or light and sets it in the localStorage accordingly
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  //   Everytime the theme state changes, we check to see if it's light then we set it to dark,
  //  else we remove the dark class from the document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-slate-300 dark:bg-zinc-600">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? `bg-shady-blue text-black` : "text-white"
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Theme Switcher"
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
