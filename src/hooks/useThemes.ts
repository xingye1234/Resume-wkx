import { useState } from "react";
import { getLocalStorage } from "../utils/storage";

export const useThemes = () => {
  const [theme, setTheme] = useState<string>(getLocalStorage("theme") || "light");

  return { theme, setTheme };
};
