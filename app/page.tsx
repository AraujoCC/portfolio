"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

const content = {
  pt: {
    role: "Backend Engineer · Java · Spring Boot · Sistemas Distribuídos",
    sections: [
      {
        num: "00.",
        title: "Links principais",
        links: [
          { label: "GitHub", sub: "código", href: "https://github.com/AraujoCC", external: true },
          { label: "LinkedIn", sub: "trabalho", href: "https://linkedin.com/in/devgaldino", external: true },
          { label: "pedroisaacofc@gmail.com", sub: "email", href: "mailto:pedroisaacofc@gmail.com", external: false },
        ],
      },
      {
        num: "00.1",
        title: "Este site",
        links: [
          { label: "sobre", sub: "quem sou", href: "/about", external: false },
          { label: "projetos", sub: "o que construí", href: "/projects", external: false },
          { label: "stack", sub: "o que uso", href: "/stack", external: false },
          { label: "contato", sub: "fale comigo", href: "/contact", external: false },
        ],
      },
      {
        num: "00.2",
        title: "Projetos em destaque",
        links: [
          { label: "QueueFlow", sub: "gestão de filas hospitalares", href: "https://github.com/AraujoCC", external: true },
          { label: "Ticket Reservation API", sub: "concorrência real com Kafka e Stripe", href: "https://github.com/AraujoCC", external: true },
          { label: "HayhGang", sub: "e-commerce em produção", href: "https://github.com/AraujoCC", external: true },
        ],
      },
    ],
  },
  en: {
    role: "Backend Engineer · Java · Spring Boot · Distributed Systems",
    sections: [
      {
        num: "00.",
        title: "Main links",
        links: [
          { label: "GitHub", sub: "code", href: "https://github.com/AraujoCC", external: true },
          { label: "LinkedIn", sub: "work", href: "https://linkedin.com/in/devgaldino", external: true },
          { label: "pedroisaacofc@gmail.com", sub: "email", href: "mailto:pedroisaacofc@gmail.com", external: false },
        ],
      },
      {
        num: "00.1",
        title: "This site",
        links: [
          { label: "about", sub: "who I am", href: "/about", external: false },
          { label: "projects", sub: "what I've built", href: "/projects", external: false },
          { label: "stack", sub: "what I use", href: "/stack", external: false },
          { label: "contact", sub: "get in touch", href: "/contact", external: false },
        ],
      },
      {
        num: "00.2",
        title: "Featured projects",
        links: [
          { label: "QueueFlow", sub: "hospital queue management", href: "https://github.com/AraujoCC", external: true },
          { label: "Ticket Reservation API", sub: "real concurrency with Kafka and Stripe", href: "https://github.com/AraujoCC", external: true },
          { label: "HayhGang", sub: "e-commerce in production", href: "https://github.com/AraujoCC", external: true },
        ],
      },
    ],
  },
};

export default function Home() {
  const { lang, toggleLang } = useLang();
  const t = content[lang];

  return (
    <div className="px-8 py-20 lg:px-16 max-w-2xl">
      {/* Lang toggle mobile */}
      <button
        onClick={toggleLang}
        className="absolute top-4 right-6 text-xs text-white/30 hover:text-white/70 transition-colors tracking-widest lg:hidden"
      >
        {lang === "pt" ? "PT / EN" : "EN / PT"}
      </button>

      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">pedro isaac</h1>
      <p className="text-sm text-white/40 mb-16">{t.role}</p>

      {/* Sections */}
      <div className="space-y-14">
        {t.sections.map((section) => (
          <div key={section.num}>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs text-white/20">{section.num}</span>
              <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                {section.title}
              </h2>
            </div>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-baseline gap-3 group"
                  >
                    <span className="text-sm text-white group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <span className="text-xs text-white/25 group-hover:text-white/50 transition-colors">
                      {link.sub}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-20 text-xs text-white/15">pedroigaldino.vercel.app</p>
    </div>
  );
}