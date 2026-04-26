"use client";

import { useLang } from "@/context/LangContext";

const content = {
  pt: {
    heading: "01. sobre",
    intro: [
      "Sou Pedro Isaac, desenvolvedor backend com foco em Java, Spring Boot e sistemas distribuídos. Tenho 19 anos, estou no 3º semestre de Ciência da Computação na UNIFACS e busco minha primeira oportunidade em fintech ou startup de produto.",
      "Aprendo construindo problemas reais — fila hospitalar que não pode perder uma senha, reserva de ingresso que não pode vender o mesmo assento duas vezes, chat que não pode vazar token em conexão persistente. Cada projeto foi escolhido porque o custo da falha é real.",
      "Antes de focar em backend, fundei o HayhGang, um e-commerce fullstack que construí, lancei, vendi e ainda mantenho como responsável técnico. É o único projeto com cliente real e receita.",
    ],
    panoramaTitle: "panorama",
    panorama: [
      { label: "base", value: "Salvador, Bahia — Brasil" },
      { label: "formação", value: "Ciência da Computação · UNIFACS · 3º semestre" },
      { label: "foco", value: "backend · sistemas distribuídos · arquitetura limpa" },
      { label: "stack principal", value: "Java 21 · Spring Boot 3 · Kafka · PostgreSQL" },
      { label: "infraestrutura", value: "Docker · AWS ECS · GitHub Actions · Testcontainers" },
      { label: "aberto para", value: "primeira oportunidade júnior · fintech · produto" },
    ],
  },
  en: {
    heading: "01. about",
    intro: [
      "I'm Pedro Isaac, a backend developer focused on Java, Spring Boot and distributed systems. I'm 19, in my 3rd semester of Computer Science at UNIFACS, and looking for my first opportunity at a fintech or product startup.",
      "I learn by building real problems — a hospital queue that can't lose a ticket, a ticket reservation that can't sell the same seat twice, a chat that can't leak a JWT token over a persistent connection. Every project was chosen because failure has a real cost.",
      "Before focusing on backend, I founded HayhGang, a fullstack e-commerce I built, launched, sold, and still maintain as technical owner. It's the only project with a real client and revenue.",
    ],
    panoramaTitle: "overview",
    panorama: [
      { label: "base", value: "Salvador, Bahia — Brazil" },
      { label: "education", value: "Computer Science · UNIFACS · 3rd semester" },
      { label: "focus", value: "backend · distributed systems · clean architecture" },
      { label: "main stack", value: "Java 21 · Spring Boot 3 · Kafka · PostgreSQL" },
      { label: "infra", value: "Docker · AWS ECS · GitHub Actions · Testcontainers" },
      { label: "open to", value: "first junior role · fintech · product company" },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="px-8 py-20 lg:px-16">
      <h1 className="mb-12 text-2xl font-bold">{t.heading}</h1>

      <div className="max-w-2xl space-y-8">
        {/* Intro paragraphs */}
        <div className="space-y-5">
          {t.intro.map((p, i) => (
            <p key={i} className="text-sm text-white/65 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Panorama */}
        <div className="border-t border-white/10 pt-8">
          <h2 className="mb-5 text-xs font-bold text-white tracking-widest uppercase">
            {t.panoramaTitle}
          </h2>
          <dl className="space-y-3">
            {t.panorama.map((item) => (
              <div key={item.label} className="flex gap-4 text-sm">
                <dt className="text-white/30 w-32 shrink-0">{item.label}</dt>
                <dd className="text-white/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}