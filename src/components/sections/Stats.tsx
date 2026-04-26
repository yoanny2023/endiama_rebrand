"use client"

import React from 'react'
import Container from '../layout/Container'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatsCard from '../ui/StatsCard';

const animateValue = (el: HTMLElement, end: number) => {
  const obj = { val: 0 };

  gsap.to(obj, {
    val: end,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      once: true,
    },
    onUpdate: () => {
      el.innerText = Math.floor(obj.val).toString();
    },
  });
};

function Stats() {
  const projectRef = useRef<HTMLParagraphElement>(null);
  const productionRef = useRef<HTMLParagraphElement>(null);
  const partnersRef = useRef<HTMLParagraphElement>(null);
  const yearsRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (projectRef.current) animateValue(projectRef.current, 120);
  if (productionRef.current) animateValue(productionRef.current, 850);
  if (partnersRef.current) animateValue(partnersRef.current, 35);
  if (yearsRef.current) animateValue(yearsRef.current, 60);
}, []);

  return (
     <section className="py-24 bg-white text-zinc-900">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-emerald-600 text-sm font-medium">
            IMPACTO
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Resultados que definem a nossa presença
          </h2>

          <p className="text-zinc-600 mt-4">
            A ENDIAMA contribui significativamente para o desenvolvimento económico e social de Angola.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
  
          <StatsCard>
            <p ref={projectRef} className="text-4xl font-bold">0</p>
            <p className="text-sm text-zinc-600 mt-2">Projetos ativos</p>
          </StatsCard>
         
          <StatsCard>
            <p ref={productionRef} className="text-4xl font-bold">0</p>
            <p className="text-sm text-zinc-600 mt-2">Produção anual</p>
          </StatsCard>

          <StatsCard>
            <p ref={partnersRef} className="text-4xl font-bold">0</p>
            <p className="text-sm text-zinc-600 mt-2">Parcerias globais</p>
          </StatsCard>

          <StatsCard>
            <p ref={yearsRef} className="text-4xl font-bold">0</p>
            <p className="text-sm text-zinc-600 mt-2">Anos de operação</p>
          </StatsCard>

        </div>
      </Container>
    </section>
  )
}

export default Stats
