"use client"

import { useRef, useState } from 'react'
import Container from '@/components/layout/Container';
import Image from "next/image";
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from '@/data/projetos/projetos';

const categories = [
  { label: "Todos", value: "all" },
  { label: "Operações", value: "Exploração Mineira" },
  { label: "Parcerias", value: "Educação" },
  { label: "Sustentabilidade", value: "Agricultura" },
];


export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const cardsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === "all"
                          ? projects
                          : projects.filter((p) => p.category === activeCategory);
  
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
   
      tl.from(".title",{y:30,opacity:0,ease:"power3.inOut",duration:0.8})
        .from(".subtitle",{y:30,opacity:0,ease:"power3.inOut",duration:0.5},">-0.5");
  
        if (containerRef.current) {
         const btn = Array.from(containerRef.current.children);
  
        gsap.fromTo(btn,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
        if (cardsRef.current) {
         const cards = Array.from(cardsRef.current.children);
  
        gsap.fromTo(
        cards,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }
  },[activeCategory]);

  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative py-32 text-center">
        <Container>
          <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern.svg')] bg-[length:300px] bg-repeat" />
          <p className="text-yellow-400 text-sm tracking-widest uppercase">
            Projetos
          </p>

          <h1 className="title mt-4 text-4xl md:text-5xl font-bold">
            Os nossos projetos estratégicos
          </h1>
          <p className="subtitle mt-6 text-zinc-400 max-w-2xl mx-auto">
            Iniciativas que impulsionam o crescimento sustentável
            e posicionam Angola no mercado global.
          </p>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div ref={containerRef}
            className="flex flex-wrap gap-3 justify-center">
            {categories.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(item.value)}
                className={`px-4 py-2 text-sm rounded-full border transition duration-500 cursor-pointer
                ${activeCategory === item.value  
                      ? "border-emerald-500 text-emerald-500"
                      : "border-zinc-800 text-zinc-300 hover:text-emerald-500 hover:border-zinc-600"
                 } 
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div 
            ref={cardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {filteredProjects.map((project, i) => (
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
