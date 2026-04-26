import React from 'react'
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectCard({title,description,image}: ProjectCardProps) {
  return (
      <div className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-zinc-700 hover:shadow-lg hover:shadow-emerald-500/10">
      
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-white font-semibold text-lg">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  )
}

export default ProjectCard
