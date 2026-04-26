import Container from "@/components/layout/Container";
import Image from "next/image";
import { notFound } from "next/navigation";

type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    slug: "catoca",
    title: "Catoca: O Coração da Produção de Diamantes em Angola",
    category: "exploração Mineira",
    image: "/images/catoca.jpg",
    description: "A Catoca é a maior empresa do setor diamantífero em Angola e explora o quarto maior quimberlito do mundo, na província da Lunda Sul. Responsável por mais de 75% da produção nacional de diamantes, a sociedade destaca-se pela sua robustez operacional e tecnológica a céu aberto. Além do impacto económico, é o principal motor de desenvolvimento social na região, gerando milhares de empregos e apoiando projetos comunitários essenciais."
  },
  {
    slug: "endiagro",
    title: "Endiagro: Impulsionando a Diversificação e Segurança Alimentar",
    category: "Agricultura",
    image: "/images/projetos/endiagro.webp",
    description:   "A Endiagro é a subsidiária da ENDIAMA focada na diversificação económica através do desenvolvimento do potencial agrícola e pecuário das Lundas. O projeto gere fazendas de grande escala que produzem cereais, carne e hortícolas, visando a autossuficiência alimentar da região e o abastecimento das unidades mineiras. É um pilar fundamental para criar novas cadeias de valor e garantir a sustentabilidade económica fora da dependência exclusiva dos recursos minerais."  
  },
  {
    slug: "luele",
    title: "Luele: A Nova Fronteira e o Futuro da Mineração Mundial",
    category: "Exploração Mineira",
    image: "/images/luele.jpg",
    description:   "O Luele representa o novo marco da mineração global, focado na exploração da maior chaminé quimberlítica descoberta em Angola nas últimas décadas. Com uma infraestrutura moderna inaugurada recentemente, este projeto tem o potencial estratégico de duplicar a capacidade de produção de diamantes do país nos próximos anos. É uma iniciativa de longo prazo que simboliza a modernização do setor e a atração de investimento estrangeiro qualificado para o leste angolano."
  },
  {
    slug: "lueji",
    title: "ULAN: Excelência Académica e Formação do Capital Humano",
    category: "Educação",
    image: "/images/projetos/lueji.jpg",
    description: "Fruto de um investimento estratégico da ENDIAMA, o novo campus da ULAN no Dundo é uma infraestrutura de ensino superior de referência internacional. Com capacidade para mais de 8.000 estudantes, o complexo inclui faculdades modernas, bibliotecas e laboratórios de alta tecnologia para cursos como Medicina, Direito e Economia. Este projeto reflete o compromisso com a formação de quadros nacionais, preparando a juventude local para os desafios do mercado de trabalho global."
  }
];

export default async function ProjectPage({params}: {
  params: Promise<{ slug: string }>
}
) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative h-[60vh] flex items-end">
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <Container>
          <div className="relative pb-12">
            <span className="text-yellow-400 text-sm">
              {project.category}
            </span>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold">
              {project.title}
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white text-zinc-900">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Sobre o projeto
            </h2>

            <p className="mt-6 leading-relaxed text-zinc-700 text-justify hyphens-auto">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

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