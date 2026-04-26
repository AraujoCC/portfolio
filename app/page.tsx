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
          { label: "QueueFlow", sub: "gestão de filas hospitalares", href: "https://github.com/AraujoCC/QueueFlow", external: true },
          { label: "Ticket Reservation API", sub: "concorrência real com Kafka e Stripe", href: "https://github.com/AraujoCC/ticket-reservation", external: true },
          { label: "HayhGang", sub: "e-commerce em produção", href: "https://github.com/AraujoCC/hayhgang", external: true },
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
          { label: "QueueFlow", sub: "hospital queue management", href: "https://github.com/AraujoCC/QueueFlow", external: true },
          { label: "Ticket Reservation API", sub: "real concurrency with Kafka and Stripe", href: "https://github.com/AraujoCC/ticket-reservation", external: true },
          { label: "HayhGang", sub: "e-commerce in production", href: "https://github.com/AraujoCC/hayhgang", external: true },
        ],
      },
    ],
  },
};

export default function Home() {
  const { lang, toggleLang } = useLang();
  const t = content[lang];

  return (
    <div className="min-h-[calc(100vh-3.5rem)] lg:min-h-screen flex flex-col">
      {/* Top bar — PT/EN only here */}
      <div className="flex justify-end px-8 pt-8 lg:px-16">
        <button
          onClick={toggleLang}
          className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-widest"
        >
          {lang === "pt" ? "PT / EN" : "EN / PT"}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16">
        <div className="max-w-xl w-full">
          {/* Header */}
          <h1 className="text-2xl font-normal mb-1 text-white">{lang === "pt" ? "pedro isaac" : "pedro isaac"}</h1>
          <p className="text-xs text-white/30 mb-14 tracking-widest uppercase">{t.role}</p>

          {/* Sections */}
          <div className="space-y-12">
            {t.sections.map((section) => (
              <div key={section.num}>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xs text-white/20 font-mono">{section.num}</span>
                  <h2 className="text-xs text-white/30 tracking-widest uppercase">
                    {section.title}
                  </h2>
                </div>

                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 py-2 group border-b border-white/5 hover:border-white/10 transition-colors"
                      >
                        <span className="text-sm font-normal text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
                          {link.label}
                        </span>
                        <span className="flex-1 border-b border-dotted border-white/10 group-hover:border-white/20 transition-colors" />
                        <span className="text-xs text-white/25 group-hover:text-white/50 transition-colors whitespace-nowrap">
                          {link.sub}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}