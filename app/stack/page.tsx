"use client";

import { useLang } from "@/context/LangContext";

const stack = {
  pt: [
    {
      category: "linguagens",
      items: ["Java 21", "TypeScript", "Python", "SQL"],
    },
    {
      category: "frameworks",
      items: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "Node.js", "React"],
    },
    {
      category: "mensageria & dados",
      items: ["Apache Kafka", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "arquitetura",
      items: ["Clean Architecture", "Hexagonal Architecture", "Microservices", "REST APIs", "WebSocket / STOMP"],
    },
    {
      category: "infra & devops",
      items: ["Docker", "AWS ECS", "GitHub Actions", "Testcontainers", "CI/CD"],
    },
    {
      category: "ferramentas",
      items: ["Git", "IntelliJ IDEA", "Postman", "Maven"],
    },
  ],
  en: [
    {
      category: "languages",
      items: ["Java 21", "TypeScript", "Python", "SQL"],
    },
    {
      category: "frameworks",
      items: ["Spring Boot 3", "Spring Security", "Spring Data JPA", "Node.js", "React"],
    },
    {
      category: "messaging & data",
      items: ["Apache Kafka", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "architecture",
      items: ["Clean Architecture", "Hexagonal Architecture", "Microservices", "REST APIs", "WebSocket / STOMP"],
    },
    {
      category: "infra & devops",
      items: ["Docker", "AWS ECS", "GitHub Actions", "Testcontainers", "CI/CD"],
    },
    {
      category: "tools",
      items: ["Git", "IntelliJ IDEA", "Postman", "Maven"],
    },
  ],
};

export default function Stack() {
  const { lang } = useLang();
  const categories = stack[lang];

  return (
    <div className="px-8 py-20 lg:px-16">
      <h1 className="mb-2 text-2xl font-bold">03. stack</h1>
      <p className="mb-12 text-sm text-white/40">
        {lang === "pt"
          ? "o que uso de verdade, não lista de palavras-chave"
          : "what I actually use, not a keyword list"}
      </p>

      <div className="max-w-2xl space-y-8">
        {categories.map((cat) => (
          <div key={cat.category}>
            <h2 className="mb-3 text-xs text-white/30 tracking-widest uppercase">
              {cat.category}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-white/70 border border-white/10 px-3 py-1 hover:border-white/30 hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}