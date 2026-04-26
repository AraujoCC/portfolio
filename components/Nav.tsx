"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "índice", num: "00" },
  { href: "/about", label: "sobre", num: "01" },
  { href: "/projects", label: "projetos", num: "02" },
  { href: "/stack", label: "stack", num: "03" },
  { href: "/contact", label: "contato", num: "04" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black lg:h-full lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex h-14 items-center justify-between px-6 lg:h-full lg:flex-col lg:items-start lg:justify-center lg:px-8">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight lg:mb-12 lg:text-base"
        >
          pietro.dev
        </Link>
        <ul className="flex gap-6 lg:flex-col lg:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 text-sm transition-opacity ${
                    isActive
                      ? "text-white opacity-100"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span className="text-xs text-white/30">{item.num}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

