import React from 'react'
import Container from '@/components/layout/Container';
import Image from "next/image";
import Link from 'next/link';

type Project = {
  slug: string
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    slug: "exploracao-leste",
    title: "Exploração Mineira Leste",
    category: "Operações",
    image: "/images/catoca.jpg",
  },
  {
    slug: "parceria-xyz",
    title: "Parceria Internacional XYZ",
    category: "Parcerias",
    image: "/images/luaxe.jpg",
  },
  {
    slug: "centro-processamento",
    title: "Centro de Processamento",
    category: "Infraestrutura",
    image: "/images/luele.jpg",
  },
  {
    slug: "iniciativa",
    title: "Iniciativa Sustentável",
    category: "Sustentabilidade",
    image: "/images/catoca.jpg",
  },
];

export default function ProjetosPage() {
  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative py-32 text-center">
        <Container>
          <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern.svg')] bg-[length:300px] bg-repeat" />
          <p className="text-yellow-400 text-sm tracking-widest uppercase">
            Projetos
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Os nossos projetos estratégicos
          </h1>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Iniciativas que impulsionam o crescimento sustentável
            e posicionam Angola no mercado global.
          </p>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Todos", "Operações", "Parcerias", "Infraestrutura", "Sustentabilidade"].map((item, i) => (
              <button
                key={i}
                className="px-4 py-2 text-sm rounded-full border border-zinc-800 text-zinc-300 
                hover:text-emerald-500 hover:border-zinc-600 transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {projects.map((project, i) => (
              <Link
                href={`/projetos/${project.slug}`}
                key={i}
                className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs text-yellow-400 tracking-wide">
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-lg font-medium text-white group-hover:text-emerald-400 transition">
                    {project.title}
                  </h3>

                  <div className="mt-4 text-sm text-zinc-400 group-hover:text-white transition">
                    Ver detalhes →
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </Container>
      </section>

    </main>
  );
}
