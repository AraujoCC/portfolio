import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/10 p-6 transition-colors hover:border-white/30"
    >
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-4 text-sm text-white/60">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-white/40">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

