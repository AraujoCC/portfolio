"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("seu@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-6 py-24 lg:px-24">
      <h1 className="mb-12 text-3xl font-bold">04. contato</h1>

      <div className="max-w-xl space-y-8">
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
            email
          </h2>
          <button
            onClick={copyEmail}
            className="text-lg text-white/70 transition-colors hover:text-white"
          >
            {copied ? "copiado!" : "seu@email.com"}
          </button>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
            redes
          </h2>
          <div className="flex flex-col gap-3">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-white/70 transition-colors hover:text-white"
            >
              → github
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-white/70 transition-colors hover:text-white"
            >
              → linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

