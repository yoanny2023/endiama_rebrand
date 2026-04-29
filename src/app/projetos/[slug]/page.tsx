import Container from "@/components/layout/Container";
import DynamicPageAnimation from "@/components/ui/DynamicPageAnimation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projetos/projetosDinamico";

export default async function ProjectPage({
  params
}: {params: Promise<{ slug: string }>}) {

  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-zinc-950 text-white">
      <DynamicPageAnimation> 
        <section className="relative h-[60vh] flex items-end">
          
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <Container className="mx-0" centered={false}>
            <div className="heading relative pb-12">
              <span className="text-yellow-400 text-sm">
                {project.category}
              </span>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold lg:max-w-xl">
                {project.title}
              </h1>
            </div>
          </Container>
        </section>

        <section className="py-24 bg-white text-zinc-900">
          <Container>
            <div className="text-block max-w-3xl">
              <h2 className="text-2xl font-semibold">
                Sobre o projeto
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-700 text-justify hyphens-auto">
                {project.description}
              </p>
            </div>
          </Container>
        </section>
      </DynamicPageAnimation>
      <section className="py-24 border-t border-zinc-800">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div>
              <p className="text-sm text-zinc-400">Localização</p>
              <p className="mt-2 text-white">Angola</p>
            </div>

            <div>
              <p className="text-sm text-zinc-400">Ano</p>
              <p className="mt-2 text-white">2024</p>
            </div>

            <div>
              <p className="text-sm text-zinc-400">Estado</p>
              <p className="mt-2 text-emerald-400">Em andamento</p>
            </div>

          </div>
        </Container>
      </section>

      <section className="py-24 bg-zinc-900/40">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            
            {[1,2].map((_, i) => (
              <div key={i} className="relative h-72 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt="gallery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}

          </div>
        </Container>
      </section>

    </main>
  );
}