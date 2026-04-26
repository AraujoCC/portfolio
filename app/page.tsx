import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-24 lg:px-24">
      <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl">
        pietro
      </h1>
      <p className="mb-12 text-lg text-white/60">backend engineer</p>

      <div className="flex flex-col gap-4">
        <Link
          href="https://github.com"
          target="_blank"
          className="text-white/60 transition-colors hover:text-white"
        >
          → github
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-white/60 transition-colors hover:text-white"
        >
          → linkedin
        </Link>
        <Link
          href="mailto:seu@email.com"
          className="text-white/60 transition-colors hover:text-white"
        >
          → email
        </Link>
      </div>
    </div>
  );
}

