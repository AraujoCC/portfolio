import Link from "next/link";

interface ProjectCardProps {
  title: string;
  status: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
  href?: string;
  repo?: string;
  lang?: "pt" | "en";
}

export default function ProjectCard({
  title,
  status,
  description,
  descriptionEn,
  tags,
  href,
  repo,
  lang = "pt",
}: ProjectCardProps) {
  const desc = lang === "en" && descriptionEn ? descriptionEn : description;

  return (
    <div className="border border-white/10 p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-bold text-white">{title}</h3>
        <span className="text-xs text-white/30 shrink-0 mt-0.5">{status}</span>
      </div>

      <p className="text-sm text-white/60 leading-relaxed">{desc}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/40 border border-white/10 px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {(href || repo) && (
        <div className="flex gap-4 mt-auto pt-2">
          {repo && (
            <Link
              href={repo}
              target="_blank"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              → repo
            </Link>
          )}
          {href && href !== "#" && (
            <Link
              href={href}
              target="_blank"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              → live
            </Link>
          )}
        </div>
      )}
    </div>
  );
}