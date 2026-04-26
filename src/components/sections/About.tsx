"use client";

import React, { useRef } from 'react'
import Container from '../layout/Container'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import Image from 'next/image';
import Link from 'next/link';

function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
   gsap.registerPlugin(ScrollTrigger);
   
    gsap.from(textRef.current, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: textRef.current,
      start: "top 80%",
      scrub:2
    },
  });

  gsap.from(imageRef.current, {
    x: 150,
    opacity: 0,
    scale:0.95,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: imageRef.current,
      start: "top 80%",
      scrub:2
    },
  });
  },[]);

  return (
     <section className="py-24 bg-zinc-950/95">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef}>
            <p className="text-emerald-500 text-sm mb-4">
              SOBRE NÓS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Uma referência na indústria diamantífera em Angola
            </h2>

            <p className="mt-6 text-zinc-300 leading-relaxed">
              A ENDIAMA E.P., fundada a 15 de Janeiro de 1981, é uma empresa nacional vocacionada para prospecção, exploração e comercialização de diamantes. Actua em território nacional como operadora e concessionária exclusiva na gestão da cadeia de valor do subsector diamantífero.
            </p>

            <p className="mt-4 mb-6 text-zinc-400">
              Como empresa pública angolana, a ENDIAMA vive o mesmo clima de transparência e reforma que o resto do nosso país.
            </p>
            <Link className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-medium rounded-md transition duration-500 cursor-pointer" href="/sobre">Saber mais</Link>
          </div>

          <div ref={imageRef} className="relative">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-md
              transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-zinc-700 
              hover:shadow-lg hover:shadow-emerald-500/10">
               <div className="relative w-full h-95">
                 <Image
                   src="/images/PR_PCA.webp"
                   alt="PCA"
                   fill
                   className="object-cover object-[50%_5%]"
                   sizes="(max-width: 768px) 100vw, 50vw"
                   priority
                 />
               </div>

               <div className="p-4">
                 <p className="text-white font-medium">
                   José Manuel Augusto Ganga Júnior ( <span className='text-emerald-500'>PCA</span> )
                 </p>
                 <p className="text-emerald-500 text-sm">
                   ENDIAMA E.P.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
