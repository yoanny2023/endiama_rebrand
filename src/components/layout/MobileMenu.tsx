"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
};

function MobileMenu({ open, onClose, navLinks }: MobileMenuProps) {

 const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      <div
        className={`md:hidden fixed top-16 left-0 w-full z-50 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-zinc-950 border-t border-zinc-800 backdrop-blur-md">
          <nav className="flex flex-col items-center gap-6 py-8">
            
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-lg transition ${
                    active
                      ? "text-emerald-400 font-medium"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;