import { createContext, useContext, useEffect, useState } from "react";
import type { SetStateAction } from "react";
import { language as languageText } from "../data/language";

export interface I18n {
  language: string;
  setLanguage: (value: SetStateAction<string>) => void;
  t: (str: string) => string;
}

export const In18Context = createContext<I18n | null>(null);

export const useIn18 = () => useContext(In18Context);

export const useTransformLanguage = (type: string) => {
  const lang = languageText[type];
  return (str: string) => {
    const _str = str.split(".");
    if (!_str.length) throw new Error("invalid key");

    if (_str.length === 1) return lang[_str[0].toLowerCase()];

    let val = lang[_str[0]];
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
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <In18Context.Provider
      value={{
        language,
        setLanguage,
        t: useTransformLanguage(language),
      }}
    >
      {children}
    </In18Context.Provider>
  );
};
