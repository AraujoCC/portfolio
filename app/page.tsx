"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";

const content = {
  pt: {
    heading: "04. contato",
    subtitle: "aberto para oportunidades júnior em fintech ou startup de produto.",
    copied: "copiado!",
    copy: "copiar email",
    links: [
      { label: "github", href: "https://github.com/AraujoCC" },
      { label: "linkedin", href: "https://linkedin.com/in/devgaldino" },
    ],
  },
  en: {
    heading: "04. contact",
    subtitle: "open to junior opportunities at fintechs or product startups.",
    copied: "copied!",
    copy: "copy email",
    links: [
      { label: "github", href: "https://github.com/AraujoCC" },
      { label: "linkedin", href: "https://linkedin.com/in/devgaldino" },
    ],
  },
};

const EMAIL = "pedroisaacofc@gmail.com";

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-8 py-20 lg:px-16">
      <h1 className="mb-2 text-2xl font-bold">{t.heading}</h1>
      <p className="mb-12 text-sm text-white/40">{t.subtitle}</p>

      <div className="max-w-sm space-y-6">
        {/* Email */}
        <div className="border border-white/10 p-5 flex flex-col gap-3">
          <span className="text-sm text-white/70">{EMAIL}</span>
          <div className="flex gap-4">
            <Link
              href={`mailto:${EMAIL}`}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              → abrir email
            </Link>
            <button
              onClick={handleCopy}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              → {copied ? t.copied : t.copy}
            </button>
          </div>
        </div>

        {/* Other links */}
        <ul className="space-y-3">
          {t.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                → {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}