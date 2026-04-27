"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { IconMenu2, IconX, IconBrandLinkedin } from "@tabler/icons-react";
import MobileMenu from "@/components/layout/MobileMenu";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
    <>
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
        <a href="https://www.linkedin.com/company/endiama/" target="_blank">
          <IconBrandLinkedin size={24} color="white" stroke={1} />
        </a>

        <button className="md:hidden z-50 text-white p-2 cursor-pointer hover:text-emerald-400 transition duration-500"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <IconX size={26} stroke={2} />
          ) : (
            <IconMenu2 size={26} stroke={2} />
          )}
        </button>
        
         <MobileMenu
          open={open}
          onClose={() => setOpen(false)}
          navLinks={navLinks}
        />
      </div>
    </header>
  </>
  )
}

export default Navbar

