"use client"

import Image from "next/image";
import Container from "../layout/Container";
import Modal from "./Modal";
import { useState } from "react";

type Leader = {
  name: string;
  role: string;
  image: string;
  descricao: string
};

const leader: Leader = {
  name: "José Manuel Augusto Ganga Júnior",
  role: "Presidente do Conselho de Administração",
  image: "/images/PR_PCA.webp",
  descricao: "Doutorado em Economia e Administração de Empresas. Antes de ingressar na ENDIAMA E.P., foi Director Geral da Sociedade Mineira de Catoca entre 1997 e 2015. Acumulou uma vasta experiência enquanto Director da ENDIAMA E.P. na Lunda-Norte, entre 1980 e 1995, bem como nas funções de Director Financeiro e Administrativo da Sociedade Mineira de Catoca. Desde então, soma 18 anos de experiência como Director Geral"
};

const secondRow: Leader[] = [
  { 
    name: "Ana Maria Feijó", 
    role: "Administradora Executiva para os Assuntos Jurídicos e Responsabilidade Social", 
    image: "/images/AnaFeijo.webp",
    descricao: "Licenciada em Geologia e pós-graduada em Gestão de Recursos Hídricos Subterrâneos. Entre 2015 e 2017, exerceu o cargo de Directora de Geologia e Desenvolvimento Mineiro na ENDIAMA E.P."
   },
  { 
    name: "Laureano Receado Paulo",
    role: "Administrador Executivo para as Operações Mineiras e Parcerias", 
    image: "/images/Laureano.webp",
    descricao: "Administrador Executivo para as Operações Mineiras (principal), Gestão de Participações, Auditoria e Controlo de Qualidade. É doutorado em Engenharia de Minas e mestre em Planeamento e Tecnologia de Minas a Céu Aberto. De 2008 a 2017, o Dr. Paulo desempenhou o cargo de Assessor dos Conselhos de Administração da SODIAM e da ENDIAMA."
   },
  { name: "Domingos Neves Margarida", 
    role: "Administrador Executivo para as Operações Mineiras (secundário), Administração e Recursos Humanos", 
    image: "/images/Margarida.webp",
    descricao: "Licenciado em Engenharia de Minas, Mestre em Exploração de Minas a Céu Aberto e Doutorado em Geotecnia. O Dr. Margarida foi Gestor de Projectos na Sociedade Mineira de Kaixepa, de 2020 a 2021. De 2021 a 2022, assumiu a função de Gestor de Projectos na Sociedade Mineira de Lunhinga."
   },
  { 
    name: "Teófilo Chifunga", 
    role: "Administrador Executivo para a área de Geologia", 
    image: "/images/Teofilo.webp",
    descricao: "Licenciado em Geologia e com Mestrado em Geofísica. Exerceu anteriormente o cargo de Chefe do Departamento de Geologia da Sociedade Mineira de Catoca."
  },
];

const thirdRow: Leader[] = [
  { 
    name: "Ngola Kabamgu", 
    role: "Administrador não Executivo", 
    image: "/images/Ngola.webp",
    descricao: "É formado em Engenharia Electrónica pelo Instituto Superior de Electrónica."
   },
  { 
    name: "Santana André Pitra", 
    role: "Administrador não Executivo para a Área de Segurança", 
    image: "/images/Pitra.webp",
    descricao: "Nomeado a 1 de Novembro de 2017. Frequência na Licenciatura em Direito."
   },
];

function LeaderCard({ person, highlight = false }: { person: Leader; highlight?: boolean}) {
  return (
    <div
      className={`group text-center rounded-xl border backdrop-blur-sm transition duration-300
      ${highlight
        ? "bg-zinc-900/60 border-emerald-500 p-8 scale-105"
        : "bg-zinc-900/40 border-zinc-800 p-6 hover:-translate-y-1 hover:border-zinc-600"
      }`}
    >
      
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border border-zinc-700">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover object-[50%_5%] transition duration-500 group-hover:scale-105"
          sizes="96px"
          priority
        />
      </div>

      <h3 className="text-white font-medium">
        {person.name}
      </h3>

      <p className={`text-sm text-zinc-400 mt-1 ${highlight ? 'text-emerald-400' : "text-red-500"}`}>
        {person.role}
      </p>

      <div className="mt-4 h-[2px] w-8 mx-auto bg-emerald-500 opacity-70 group-hover:w-12 transition-all duration-300" />
    </div>
  );
}

export default function LeadershipSection() {
const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <section className="relative py-24 border-t border-zinc-800 bg-zinc-950">
      <Container>
        <div className="absolute inset-0 opacity-7 bg-[url('/patterns/diamond-pattern.svg')] bg-[length:300px] bg-repeat" />
        <h2 className="text-3xl font-semibold text-center text-white">
          Liderança
        </h2>

        <div className="mt-16 space-y-16">
          
          <div className="flex justify-center">
            <div className="w-full max-w-sm hover:cursor-pointer"
            onClick={() => setSelectedLeader(leader)}
            >
              <LeaderCard person={leader} highlight />
            </div>
          </div>

          <div className="h-px bg-zinc-800 w-1/2 mx-auto" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondRow.map((person, i) => (
              <div key={i} onClick={() => setSelectedLeader(person)} className="cursor-pointer">
                <LeaderCard person={person} />
              </div>          
            ))  
          }  
          </div>

          <div className="h-px bg-zinc-800 w-1/2 mx-auto" />

          <div className="flex justify-center gap-8 flex-wrap">
            {thirdRow.map((person, i) => (
              <div key={i} className="w-full max-w-xs cursor-pointer"
                onClick={() => setSelectedLeader(person)}>
                <LeaderCard person={person} />
              </div> 
            ))}
          </div>
        </div>
      </Container>
      {selectedLeader && (
        <Modal
          {...selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      )}
    </section>
);  
}