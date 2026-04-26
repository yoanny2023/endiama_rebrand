"use client"

import React from 'react'
import Container from '../layout/Container';
import Link from 'next/link';
import { Noticia } from '@/types/Noticia';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

function News() {
   const noticias:Noticia[] = [
    {
      titulo: "Expansão de operações no Leste de Angola",
      data: "12 Mar 2026",
      categoria: "Operações",
    },
    {
      titulo: "Nova parceria internacional anunciada",
      data: "28 Fev 2026",
      categoria: "Parcerias",
    },
    {
      titulo: "Iniciativas de sustentabilidade reforçadas",
      data: "10 Fev 2026",
      categoria: "Sustentabilidade",
    },
  ];

     useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger);

      gsap.set([".news_text"],{x:-200,opacity:0});
  
      const tl = gsap.timeline();
     
      tl.to(".news_text",{
        x:0,opacity:1,ease:"power3.out,duration:1",
        scrollTrigger:{
          trigger:".news_sec",
          start: "top 75%",
          end: "center 70%",
          scrub: 2,
        }
      })
     },[])

  return (
    <section className="news_sec py-24 bg-zinc-950">
      <Container>
        
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="news_text text-yellow-400 text-sm tracking-widest uppercase">
              Atualizações
            </p>
            <h2 className="news_text text-3xl md:text-4xl font-bold text-white mt-2">
              Notícias & Insights
            </h2>
          </div>

          <Link href="/noticias" className="hidden md:block text-sm text-zinc-400 hover:text-white transition">
            Ver todas →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {noticias.map((item:Noticia, i) => (
            <div
              key={i}
              className="group border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition duration-300 
              bg-zinc-900/40 backdrop-blur-sm hover:-translate-y-1"
            >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="w-4 h-4 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path 
                    d="M12 2L20 12L12 22L4 12L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

              <span className="text-xs text-yellow-400 tracking-wide">
                {item.categoria}
              </span>

              <h3 className="mt-3 text-lg font-medium text-white group-hover:text-emerald-400 transition">
                {item.titulo}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {item.data}
              </p>

              <div className="mt-6 text-sm text-zinc-400 group-hover:text-white transition">
                Ler mais →
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default News
