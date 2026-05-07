import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

export const useThemes = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getLocalStorage("theme") || "light");

  const setThemeAndStorage = () => {
    setTheme(pre => pre === "light" ? "dark" : "light");
    setLocalStorage("theme", theme === "light" ? "dark" : "light");
  };

  return { theme, setTheme: setThemeAndStorage };
};
