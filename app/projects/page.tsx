import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "QueueFlow",
    description:
      "Sistema de filas e processamento assíncrono com alta throughput.",
    tags: ["Go", "Redis", "Docker"],
    href: "#",
  },
  {
    title: "Tickets API",
    description:
      "API de gerenciamento de tickets com autenticação e autorização.",
    tags: ["Node.js", "PostgreSQL", "JWT"],
    href: "#",
  },
  {
    title: "Chat",
    description: "Aplicação de chat em tempo real com WebSockets.",
    tags: ["TypeScript", "Socket.io", "MongoDB"],
    href: "#",
  },
  {
    title: "HayhGang",
    description: "Plataforma de colaboração para equipes de desenvolvimento.",
    tags: ["React", "Next.js", "Prisma"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <div className="px-6 py-24 lg:px-24">
      <h1 className="mb-12 text-3xl font-bold">02. projetos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

