"use client"
import React, { useRef } from 'react'
import Container from '../layout/Container';
import ProjectCard from '../ui/ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function Projects() {
   const proj_secRef = useRef<HTMLDivElement>(null);

   useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([".proj_sub"],{y:40,scale:0,opacity:0});

    const tl = gsap.timeline();
   
    tl.to(".proj_sub",{
      y:0,opacity:1,scale:1,ease:"power3.out,duration:1",
      scrollTrigger:{
        trigger:proj_secRef.current,
        start: "top 75%",
        end: "center 70%",
        scrub: 2
      }
    })

   },[])

   const projects = [
    {
      title: "Projeto Catoca",
      description: "Uma das maiores operações diamantíferas do mundo, localizada em Angola.",
      image: "/images/catoca.jpg",
    },
    {
      title: "Projeto Luele",
      description: "Exploração avançada com foco em inovação e eficiência operacional.",
      image: "/images/luele.jpg",
    },
    {
      title: "Projeto Luaxe",
      description: "Projeto estratégico para expansão da produção nacional.",
      image: "/images/luaxe.jpg",
    },
  ];

  return (
    <section ref={proj_secRef} className="py-24 bg-zinc-950">
      <Container>
        <div className="max-w-2xl">
          <p className="proj_sub text-emerald-500 text-sm">
            PROJETOS
          </p>

          <h2 className="proj_sub text-3xl md:text-4xl font-bold text-white mt-3">
            Principais operações e iniciativas
          </h2>

          <p className="proj_sub text-zinc-400 mt-4">
            A ENDIAMA lidera projetos estratégicos que impulsionam o setor mineiro e fortalecem a economia nacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
