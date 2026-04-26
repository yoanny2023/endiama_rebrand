import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Container from '@/components/layout/Container';

type News = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

const news: News[] = [
  {
    slug: "expansao-leste",
    title: "Expansão das operações no Leste de Angola",
    category: "Operações",
    date: "12 Mar 2026",
    image: "/images/catoca.jpg",
    excerpt: "A empresa anunciou a expansão das suas operações com foco em eficiência e sustentabilidade.",
  },
  {
    slug: "parceria-global",
    title: "Nova parceria internacional reforça presença global",
    category: "Parcerias",
    date: "28 Fev 2026",
    image: "/images/luele.jpg",
    excerpt: "Acordo estratégico com parceiros internacionais abre novas oportunidades no mercado global.",
  },
  {
    slug: "sustentabilidade",
    title: "Iniciativas sustentáveis ganham destaque",
    category: "Sustentabilidade",
    date: "10 Fev 2026",
    image: "/images/luaxe.jpg",
    excerpt: "Projetos ambientais reforçam compromisso com práticas responsáveis.",
  },
];

export default function NoticiasPage() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative py-32 text-center">
        <Container>
          <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern.svg')] bg-[length:300px] bg-repeat" />
          <p className="text-yellow-400 text-sm tracking-widest uppercase">
            Notícias
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Atualizações e Insights
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Acompanhe as últimas novidades, parcerias e iniciativas da empresa.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white text-zinc-900">
        <Container>
          <Link
            href={`/noticias/${featured.slug}`}
            className="grid md:grid-cols-2 gap-12 items-center group"
          >
            
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <span className="text-yellow-500 text-sm">
                {featured.category}
              </span>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold group-hover:text-emerald-600 transition">
                {featured.title}
              </h2>

              <p className="mt-4 text-zinc-600">
                {featured.excerpt}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                {featured.date}
              </p>

              <div className="mt-6 text-sm font-medium">
                Ler artigo →
              </div>
            </div>

          </Link>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto divide-y divide-zinc-800">
            
            {rest.map((item, i) => (
              <Link
                key={i}
                href={`/noticias/${item.slug}`}
                className="group py-8 flex flex-col md:flex-row gap-6"
              >
                
                <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 200px"
                    priority
                  />
                </div>

                <div className="flex-1">
                  <span className="text-xs text-yellow-400 tracking-wide">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-lg font-medium group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {item.excerpt}
                  </p>

                  <p className="mt-3 text-xs text-zinc-500">
                    {item.date}
                  </p>
                </div>

              </Link>
            ))}

          </div>
        </Container>
      </section>

    </main>
  );
}
