"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname()
  
  const navLinks = [
    {name: "Inicio", href: "/"},
    {name: "Sobre", href: "/sobre"},
    {name: "Projetos", href: "/projetos"},
    {name: "Notícias", href: "/noticias"},
  ]
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-zinc-900/70 border-b border-zinc-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/">
          <Image
          src="/images/logo/logo.svg"
          alt="Logo"
          width={100}
          height={40}
          priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {
           navLinks.map((link) => {

            const active = link.href === pathname;

            return (
              <Link  
                key={link.href}
                href={link.href}
                className={` ${active ? "text-emerald-400 font-medium": "text-white"}
                hover:text-emerald-500 duration-500 transition`}
            >
              {link.name}
            </Link>
            );
          
             })
          }
        </nav>

        <button className="hidden md:block bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-400 transition cursor-pointer">
          Contacto
        </button>
      </div>
    </header>
  )
}

export default Navbar

