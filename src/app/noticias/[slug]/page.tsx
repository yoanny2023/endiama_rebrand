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
    slug: "expansao-leste",
    title: "Expansão das operações no Leste de Angola",
    category: "Operações",
    date: "12 Mar 2026",
    image: "/images/catoca.jpg",
    content: `
A empresa anunciou a expansão das suas operações mineiras na região leste de Angola, reforçando o compromisso com o crescimento sustentável.
Este projeto irá aumentar significativamente a capacidade de produção, ao mesmo tempo que introduz novas tecnologias para melhorar a eficiência operacional.
Além disso, a iniciativa prevê a criação de novos empregos e o fortalecimento das comunidades locais.
    `,
  },
  {
    slug: "parceria-global",
    title: "Parceria no Leste de Angola",
    category: "Operações",
    date: "12 Mar 2026",
    image: "/images/luele.jpg",
    content: `
A empresa anunciou a expansão das suas operações mineiras na região leste de Angola, reforçando o compromisso com o crescimento sustentável.
Este projeto irá aumentar significativamente a capacidade de produção, ao mesmo tempo que introduz novas tecnologias para melhorar a eficiência operacional.
Além disso, a iniciativa prevê a criação de novos empregos e o fortalecimento das comunidades locais.
    `,
  },
  {
    slug: "sustentabilidade",
    title: "Sustentabilidade Leste de Angola",
    category: "Operações",
    date: "12 Mar 2026",
    image: "/images/luaxe.jpg",
    content: `
A empresa anunciou a expansão das suas operações mineiras na região leste de Angola, reforçando o compromisso com o crescimento sustentável.
Este projeto irá aumentar significativamente a capacidade de produção, ao mesmo tempo que introduz novas tecnologias para melhorar a eficiência operacional.
Além disso, a iniciativa prevê a criação de novos empregos e o fortalecimento das comunidades locais.
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
            
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
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