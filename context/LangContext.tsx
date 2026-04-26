"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

type Lang = "pt" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  toggleLang: () => {},
});

function langReducer(_: Lang, action: { type: "SET"; payload: Lang } | { type: "TOGGLE" }, current?: Lang): Lang {
  if (action.type === "SET") return action.payload;
  return current === "pt" ? "en" : "pt";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, dispatch] = useReducer(
    (state: Lang, action: { type: "SET"; payload?: Lang } | { type: "TOGGLE" }) => {
      if (action.type === "SET" && action.payload) return action.payload;
      const next = state === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    },
    "pt"
  );

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en") {
      dispatch({ type: "SET", payload: "en" });
    }
  }, []);

  const toggleLang = () => dispatch({ type: "TOGGLE" });

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}