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

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

