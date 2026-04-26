"use client";

import { createContext, useContext, useState } from "react";

type Lang = "pt" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  toggleLang: () => {},
});

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("lang");
  return stored === "en" ? "en" : "pt";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const toggleLang = () => {
    setLang((l) => {
      const next = l === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}