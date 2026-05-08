import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

export const useThemes = () => {
  const initial = (getLocalStorage("theme") as 'light' | 'dark') || "light";
  const [theme, setThemeState] = useState<'light' | 'dark'>(initial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setLocalStorage("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, setTheme: toggleTheme };
};
