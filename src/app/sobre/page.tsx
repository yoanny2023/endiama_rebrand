"use client"
import Container from "@/components/layout/Container";
import LeadershipSection from "@/components/ui/LeaderCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

export default function SobrePage() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
 
    tl.from(".title",{y:30,opacity:0,ease:"power3.inOut",duration:0.8})
      .from(".subtitle",{y:30,opacity:0,ease:"power3.inOut",duration:0.5},">-0.5")
      .from(textRef.current, {
         y: 50,
         opacity: 0.5,
         duration: 1,
         ease: "power3.out",
         scrollTrigger: {
           trigger: textRef.current,
           start: "top 80%",
           scrub:2,
         },
       })
       .from(imageRef.current, {
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
            toggleActions: "play none none none",
            markers: true,
          },
        }
      );
  }
},[]);

  return (
    <main className="bg-zinc-950 text-white">
      
      <section className="relative py-32 text-center bg-zinc-950/85">
        <Container>
          <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern2.svg')] bg-[length:300px] bg-repeat" />
          <p className="text-yellow-400 text-sm tracking-widest uppercase">
            Sobre Nós
          </p>

          <h1 className="title mt-4 text-4xl md:text-5xl font-bold">
            Construindo o futuro da indústria diamantífera
          </h1>

          <p className="subtitle mt-6 text-zinc-400 max-w-2xl mx-auto">
            Uma empresa angolana focada em inovação, sustentabilidade
            e parcerias estratégicas globais.
          </p>
        </Container>
      </section>

      <section className="py-24 border-t border-zinc-800 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div
              ref={textRef}
              className="text-justify hyphens-auto">
              <h2 className="text-3xl text-zinc-950 font-semibold">
                A nossa história
              </h2>

              <p className="mt-6 text-zinc-900 leading-relaxed">
                A ENDIAMA E.P., fundada a 15 de Janeiro de 1981, é uma empresa nacional vocacionada para prospecção, exploração e comercialização de diamantes. Actua em território nacional como operadora e concessionária exclusiva na gestão da cadeia de valor do subsector diamantífero.
              </p>

              <p className="mt-6 text-zinc-900 leading-relaxed">
                Como empresa pública angolana, a ENDIAMA vive o mesmo clima de transparência e reforma que o resto do nosso país. Os pontos focais das reformas no sector diamantífero de Angola estão orientados para o início de novos projectos de prospecção, a implementação da nova política de comercialização de diamantes, 
                o desenvolvimento de projectos de infraestrutura, bem como das indústrias de energia e agricultura que apoiam a mineração.
              </p>
            </div>

            <div 
             ref={imageRef}
             className="relative h-95 bg-zinc-200 rounded-xl border border-zinc-300 overflow-hidden">
              <Image
                src="/images/PR_PCA.webp"
                alt="PCA"
                fill
                className="object-cover object-[50%_5%] transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-zinc-900/40" >
        <Container>
          <div ref={cardsRef}
             className="grid md:grid-cols-3 gap-8">
            
            {[
              {
                title: "Missão",
                text: "Desenvolver soluções sustentáveis na exploração e valorização de recursos naturais.",
              },
              {
                title: "Visão",
                text: "Ser referência internacional na indústria diamantífera africana.",
              },
              {
                title: "Valores",
                text: "Integridade, inovação, sustentabilidade e compromisso com Angola.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-zinc-800 rounded-xl bg-zinc-800/50 backdrop-blur-sm
                shadow-sm shadow-yellow-500 hover:shadow-md hover:scale-[1.03] transition duration-500"
              >
                <h3 className="text-lg font-medium text-yellow-400">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <LeadershipSection />
    </main>
  );
}
