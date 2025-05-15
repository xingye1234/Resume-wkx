import { createContext, useEffect, useState, useContext } from "react";
import type { SetStateAction } from "react";
import { language as languageText } from "../data/language";

export interface I18n {
  language: string;
  setLanguage: (value: SetStateAction<string>) => void;
  t: (str: string) => string;
}

const I18nContext = createContext<I18n | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within a I18nProvider");
  }
  return context;
}

const useTransformLanguage = (type: string) => {
  const lang = languageText[type];
  return (str: string) => {
    const _str = str.split(".");
    if (!_str.length) throw new Error("invalid key");

    if (_str.length === 1) return lang[_str[0].toLowerCase()];

    const val = lang[_str[0]];
    _str.shift();

    return _str.reduce((acc, cur) => {
      if (typeof acc === "object") {
        return (acc = acc[cur]);
      }
      return acc;
    }, val);
  };
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t: useTransformLanguage(language),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};
