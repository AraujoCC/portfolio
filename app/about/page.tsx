export default function About() {
  return (
    <div className="px-6 py-24 lg:px-24">
      <h1 className="mb-12 text-3xl font-bold">01. sobre</h1>
      <div className="max-w-2xl space-y-6 text-white/70">
        <p>
          Sou um engenheiro de software focado em backend. Trabalho com
          arquitetura de sistemas, APIs e infraestrutura.
        </p>
        <p>
          Minha trajetória começou com curiosidade sobre como as coisas
          funcionam por baixo dos panos. Hoje construo sistemas escaláveis e
          mantenho código com qualidade.
        </p>
        <div className="border-t border-white/10 pt-6">
          <h2 className="mb-4 text-sm font-bold text-white">panorama</h2>
          <ul className="space-y-2 text-sm">
            <li>→ backend-first, mas entendo o frontend</li>
            <li>→ APIs REST e arquitetura limpa</li>
            <li>→ bancos de dados relacionais e NoSQL</li>
            <li>→ deploy e infra com Docker e cloud</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

