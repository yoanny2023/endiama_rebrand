import Container from "@/components/layout/Container";
import Image from "next/image";
import { notFound } from "next/navigation";

type News = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
};

const news: News[] = [
  {
    slug: "catoca",
    title: "Expansão das operações no Leste de Angola",
    category: "Operações",
    date: "28 Nov 2023",
    image: "/images/catoca.jpg",
    content: `
           Este movimento estratégico visa compensar o natural esgotamento das reservas atuais, explorando o potencial geológico das províncias da Lunda Sul e Lunda Norte. Além do incremento na extração de minérios, a expansão deverá impulsionar o desenvolvimento socioeconómico regional através da criação de postos de trabalho diretos e do investimento em infraestruturas locais. 
           A iniciativa reforça o papel de Angola como um dos principais players no mercado mundial de diamantes, atraindo novos investimentos e tecnologia para o setor mineiro.
    `,
  },
  {
    slug: "luele",
    title: "Parceria no Leste de Angola",
    category: "Operações",
    date: "27 Nov 2023",
    image: "/images/luele.jpg",
    content: `
      Localizada na região de Saurimo, a nova unidade mineira representa um marco histórico para a economia nacional, com capacidade para processar milhões de toneladas de minério anualmente. Fruto de um investimento estruturante liderado pela Sociedade Mineira de Catoca, o projeto prevê a criação de milhares de postos de trabalho diretos e indiretos, impulsionando o desenvolvimento regional. 
      Com uma reserva estimada para durar várias décadas, o Luele deverá duplicar a produção de diamantes do país, reforçando a posição de Angola no mercado global e atraindo novos parceiros internacionais para a exploração de recursos minerais.
    `,
  },
  {
    slug: "sustentabilidade",
    title: "Sustentabilidade Leste de Angola",
    category: "Operações",
    date: "17 Jan 2017",
    image: "/images/projetos/endiagro.webp",
    content: `
           O projeto está a ser implementado estrategicamente nas províncias da Lunda Norte, Lunda Sul e Moxico, com o objetivo de reduzir a dependência de importações e combater a pobreza regional através da criação de emprego.
           Com investimentos em áreas como a Fazenda do Cuilo, a empresa já prepara centenas de hectares para a produção de arroz, milho e feijão, além de apostar na piscicultura. 
           Esta iniciativa agroindustrial aproveita a infraestrutura do setor diamantífero para gerar novas cadeias de valor, prevendo beneficiar milhares de famílias de agricultores locais e cooperativas ao longo do corredor de desenvolvimento
    `,
  },
];

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const article = news.find((n) => n.slug === slug);

  if (!article) return notFound();

  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative h-[60vh] flex items-end">
        
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <Container>
          <div className="relative pb-12 max-w-3xl">
            
            <span className="text-yellow-400 text-sm">
              {article.category}
            </span>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-sm text-zinc-300">
              {article.date}
            </p>

          </div>
        </Container>
      </section>

      <section className="py-24 bg-white text-zinc-900">
        <Container>
          <article className="max-w-3xl mx-auto">
            
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700 text-justify">
              {article.content.split("\n").map((p, i) =>
                p.trim() ? <p key={i}>{p}</p> : null
              )}
            </div>

          </article>
        </Container>
      </section>

      <section className="py-24 border-t border-zinc-800">
        <Container>
          <h2 className="text-2xl font-semibold">
            Outras notícias
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {news
              .filter((n) => n.slug !== article.slug)
              .slice(0, 2)
              .map((item, i) => (
                <div key={i} className="group">
                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-medium group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                </div>
              ))}
          </div>
        </Container>
      </section>

    </main>
  );
}