"use client"

import { useGSAP } from "@gsap/react"
import { IconX } from "@tabler/icons-react"
import gsap from "gsap"

type BaseProps = {
  name:string
  role:string
  descricao:string
  image?:string,
} 

type ModalProps = BaseProps & {
  onClose: () => void,
}

export default function Modal({name,role,descricao,onClose} : ModalProps){
   useGSAP(()=>{
  gsap.from(".modal",{scale:0,opacity:0,ease:"power1.inOut",duration:0.8})
  },[]);

  return(
     <div className="px-3 fixed inset-0 bg-black/20 flex items-center justify-center z-50"
     onClick={onClose}
     >
      <div className="modal relative bg-zinc-800 p-6 rounded-lg w-full max-w-md mx-auto"
       onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-center text-lg font-medium">{name}</h2>
        <div className="h-px bg-emerald-500 w-3/4 opacity-30 mx-auto" />
        <p className="text-emerald-400 mt-2">{role}</p>
        <p className="text-sm text-zinc-400 mt-2">{descricao}</p>
        <button className="absolute top-3 right-3 font-semibold text-red-500 hover:text-red-400 hover:font-bold cursor-pointer
         transition duration-300"
          onClick={onClose}>
            <IconX size={18} stroke={1} />
        </button>
      </div>
     </div>
  )

}