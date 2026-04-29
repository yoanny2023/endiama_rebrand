"use client"

import { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { SplitText } from 'gsap/all';
import Link from 'next/link'

 function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {  
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(SplitText);

      const headerSplit = new SplitText(titleRef.current,{type:"chars,words"});

      gsap.set([subtitleRef.current,".hero-btn"],{y:40,opacity:0});

      const tl = gsap.timeline();

      tl.from(headerSplit.chars,{yPercent:100,ease:"expo.out",duration:1,stagger: 0.03})
        .to(subtitleRef.current,{y: 0,opacity: 1,duration: 0.8,ease: "power3.out"},"-=0.5")
        .to(".hero-btn",{y: 0,opacity: 1,duration: 0.6,stagger: 0.2,ease: "power3.out"},"-=0.4")

      gsap.to(contentRef.current, {
       y: -80,
       opacity: 0,
       ease: "none",
       scrollTrigger: {
         trigger: contentRef.current,
         start: "center center",
         end: "bottom top",
         scrub: 2,
       },
     });
  },[])

  return (
      <section ref={contentRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),rgba(24,24,27,0.9)_40%,#09090b_80%)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full" />
      <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern.svg')] bg-[length:300px] bg-repeat" />

      <div className="relative text-center px-6 max-w-4xl">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Transformando a riqueza natural de Angola 
        </h1>

        <p ref={subtitleRef} className="mt-6 text-zinc-300 text-base md:text-lg max-w-2xl mx-auto">
          Liderando a indústria diamantífera com inovação, sustentabilidade e parcerias globais.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projetos" className="hero-btn px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-medium rounded-md transition duration-500 cursor-pointer">
            Explorar Projetos
          </Link>
          <Link href="/noticias" className="hero-btn px-6 py-3 border border-zinc-700 text-white rounded-md hover:border-zinc-500 transition duration-500 cursor-pointer">
            Saber Mais
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 text-xs text-zinc-400 tracking-widest">
        DESLIZE PARA EXPLORAR
      </div>
    </section>
  )
}

export default Hero
