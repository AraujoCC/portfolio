"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

const navItems = {
  pt: [
    { href: "/", label: "índice", num: "00" },
    { href: "/about", label: "sobre", num: "01" },
    { href: "/projects", label: "projetos", num: "02" },
    { href: "/stack", label: "stack", num: "03" },
    { href: "/contact", label: "contato", num: "04" },
  ],
  en: [
    { href: "/", label: "index", num: "00" },
    { href: "/about", label: "about", num: "01" },
    { href: "/projects", label: "projects", num: "02" },
    { href: "/stack", label: "stack", num: "03" },
    { href: "/contact", label: "contact", num: "04" },
  ],
};

export default function Nav() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLang();
  const items = navItems[lang];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black lg:h-full lg:w-56 lg:border-b-0 lg:border-r">
      <div className="flex h-14 items-center justify-between px-6 lg:h-full lg:flex-col lg:items-start lg:justify-start lg:px-8 lg:py-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-white lg:mb-10"
        >
          pedro isaac
        </Link>

        {/* Nav links */}
        <ul className="flex gap-5 lg:flex-col lg:gap-3 lg:w-full">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  <span className="text-xs text-white/20 font-mono">{item.num}.</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Lang toggle — bottom on desktop, hidden on mobile nav (shown in page) */}
        <div className="hidden lg:flex lg:mt-auto lg:pt-8">
          <button
            onClick={toggleLang}
            className="text-xs text-white/30 hover:text-white/70 transition-colors tracking-widest"
          >
            {lang === "pt" ? "PT / EN" : "EN / PT"}
          </button>
        </div>
      </div>
    </nav>
  );
}