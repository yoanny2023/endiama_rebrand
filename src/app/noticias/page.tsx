"use client"

import { useRef } from 'react'
import Image from "next/image";
import Link from "next/link";
import Container from '@/components/layout/Container';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { news } from '@/data/noticias/noticias';

export default function NoticiasPage() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const featured = news[0];
  const rest = news.slice(1);
  
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
   
      tl.from(".title",{y:30,opacity:0,ease:"power3.inOut",duration:0.8})
        .from(".subtitle",{y:30,opacity:0,ease:"power3.inOut",duration:0.5},">-0.5")
        .from(imageRef.current, {
         x: -150,
         opacity: 0,
         scale:0.95,
         duration: 1,
         delay: 0.2,
         ease: "power3.out",
         scrollTrigger: {
           trigger: imageRef.current,
           start: "top 80%",
           scrub:2,
         },
       })
       .from(textRef.current, {
         y: 50,
         opacity: 0.5,
         duration: 1,
         ease: "power3.out",   
         scrollTrigger: {
           trigger: textRef.current,
           start: "10% 85%",
           scrub:2,
         },
       })
       .from(cardsRef.current, {
         y: 50,
         opacity: 0.5,
         duration: 1,
         ease: "power3.out",
         scrollTrigger: {
           trigger: cardsRef.current,
           start: "top bottom",
           scrub:2,
         },
       })
  },[]);

  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative py-32 text-center">
        <Container>
          <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern.svg')] bg-[length:300px] bg-repeat" />
          <p className="text-yellow-400 text-sm tracking-widest uppercase">
            Notícias
          </p>

          <h1 className="title mt-4 text-4xl md:text-5xl font-bold">
            Atualizações e Insights
          </h1>

          <p className="subtitle mt-6 text-zinc-400 max-w-2xl mx-auto">
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
            
            <div ref={imageRef}
              className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div ref={textRef}>
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

      <section ref={cardsRef} className="py-24">
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
