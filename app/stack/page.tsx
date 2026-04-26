const categories = [
  {
    name: "linguagens",
    items: ["TypeScript", "Go", "Python", "SQL"],
  },
  {
    name: "backend",
    items: ["Node.js", "Express", "Fastify", "NestJS"],
  },
  {
    name: "banco de dados",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "infra & devops",
    items: ["Docker", "AWS", "Linux", "GitHub Actions"],
  },
  {
    name: "ferramentas",
    items: ["Git", "Neovim", "Figma", "Notion"],
  },
];

export default function Stack() {
  return (
    <div className="px-6 py-24 lg:px-24">
      <h1 className="mb-12 text-3xl font-bold">03. stack</h1>
      <div className="grid gap-12 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              {category.name}
            </h2>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="text-white/70">
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

