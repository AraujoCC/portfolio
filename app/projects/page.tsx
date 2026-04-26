"use client";

import ProjectCard from "@/components/ProjectCard";
import { useLang } from "@/context/LangContext";

const projects = [
  {
    title: "QueueFlow",
    status: "ativo",
    statusEn: "active",
    description:
      "Sistema de gestão de filas hospitalares com autenticação WebSocket via interceptor STOMP e JWT. Arquitetura Hexagonal com domínio zero-dependency, RBAC com 4 papéis, deploy no AWS ECS via GitHub Actions e testes com Testcontainers.",
    descriptionEn:
      "Hospital queue management system with WebSocket authentication via STOMP interceptor and JWT. Hexagonal Architecture with zero-dependency domain, RBAC with 4 roles, AWS ECS deploy via GitHub Actions, and Testcontainers testing.",
    tags: ["Java 21", "Spring Boot", "WebSocket", "STOMP", "JWT", "AWS ECS", "Hexagonal Architecture", "Testcontainers"],
    repo: "https://github.com/AraujoCC",
  },
  {
    title: "Ticket Reservation API",
    status: "ativo",
    statusEn: "active",
    description:
      "API de reserva de ingressos com controle de concorrência real via PESSIMISTIC_WRITE lock no PostgreSQL combinado com UNIQUE constraint como última linha de defesa. Kafka para auditoria assíncrona, Stripe para pagamento e expiração automática de reservas pendentes.",
    descriptionEn:
      "Ticket reservation API with real concurrency control using PESSIMISTIC_WRITE lock on PostgreSQL combined with UNIQUE constraint as the last line of defense. Kafka for async auditing, Stripe for payments, and automatic expiration of pending reservations.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Stripe", "PESSIMISTIC_WRITE"],
    repo: "https://github.com/AraujoCC",
  },
  {
    title: "Real-time Chat",
    status: "ativo",
    statusEn: "active",
    description:
      "Chat em tempo real com arquitetura de microserviços. Auth Service e Chat Service com comunicação via JWT e WebSocket STOMP — autenticação stateless sobre conexões persistentes, o que exige tratamento diferente do HTTP padrão.",
    descriptionEn:
      "Real-time chat with microservices architecture. Auth Service and Chat Service communicating via JWT and WebSocket STOMP — stateless auth over persistent connections, which requires different handling from standard HTTP.",
    tags: ["Java", "Spring Boot", "WebSocket", "STOMP", "JWT", "Microservices"],
    repo: "https://github.com/AraujoCC",
  },
  {
    title: "Event-driven E-commerce",
    status: "ativo",
    statusEn: "active",
    description:
      "E-commerce com arquitetura orientada a eventos via Kafka. Serviços desacoplados de Pedido, Pagamento, Estoque e Notificação — cada domínio isolado, comunicação assíncrona, sem dependência direta entre serviços.",
    descriptionEn:
      "E-commerce with event-driven architecture via Kafka. Decoupled Order, Payment, Inventory, and Notification services — each domain isolated, async communication, no direct service-to-service dependency.",
    tags: ["Java", "Spring Boot", "Kafka", "Microservices", "Event-driven"],
    repo: "https://github.com/AraujoCC",
  },
  {
    title: "HayhGang",
    status: "produção",
    statusEn: "production",
    description:
      "E-commerce fullstack construído, lançado e vendido. Continuo como responsável técnico. Único projeto com cliente real e receita. Stack: React · Node.js · TypeScript · MongoDB · Vercel.",
    descriptionEn:
      "Fullstack e-commerce I built, launched, and sold. I remain as technical owner. The only project with a real client and revenue. Stack: React · Node.js · TypeScript · MongoDB · Vercel.",
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Vercel"],
    repo: "https://github.com/AraujoCC",
  },
  {
    title: "AgendaPro",
    status: "ativo",
    statusEn: "active",
    description:
      "Sistema de automação de prazos jurídicos que substituiu um processo manual com alertas automáticos. Construído para o escritório JN Advocacia onde trabalhei como assistente administrativo.",
    descriptionEn:
      "Legal deadline automation system that replaced a manual process with automatic alerts. Built for JN Advocacia law firm where I worked as an administrative assistant.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Automation"],
    repo: "https://github.com/AraujoCC",
  },
];

export default function Projects() {
  const { lang } = useLang();

  return (
    <div className="px-8 py-20 lg:px-16">
      <h1 className="mb-2 text-2xl font-bold">
        {lang === "pt" ? "02. projetos" : "02. projects"}
      </h1>
      <p className="mb-12 text-sm text-white/40">
        {lang === "pt"
          ? "sistemas onde a falha tem custo real"
          : "systems where failure has a real cost"}
      </p>

      <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            status={lang === "pt" ? project.status : project.statusEn}
            description={project.description}
            descriptionEn={project.descriptionEn}
            tags={project.tags}
            repo={project.repo}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}