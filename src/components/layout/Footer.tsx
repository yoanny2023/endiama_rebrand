import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      
      <Container>
        <div className="py-16 grid md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-lg">
              Endiama
            </h3>

            <p className="mt-4 text-zinc-400 text-sm max-w-md">
              Transformando a riqueza natural de Angola com inovação,
              sustentabilidade e parcerias globais.
            </p>

            <div className="mt-6 h-[2px] w-12 bg-emerald-500" />
          </div>

          <div>
            <h4 className="text-sm text-zinc-300 mb-4 uppercase tracking-wide">
              Navegação
            </h4>

            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/sobre" className="hover:text-white transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:text-white transition">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-white transition">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-zinc-300 mb-4 uppercase tracking-wide">
              Contacto
            </h4>

            <p className="text-sm text-zinc-400">
              Luanda, Angola
            </p>

            <p className="text-sm text-zinc-400 mt-2">
              info@endiama.ao
            </p>

            <p className="text-sm text-zinc-400 mt-2">
              +244 000 000 000
            </p>

            <div className="mt-6 text-yellow-400 text-xs tracking-widest">
              DISPONÍVEL PARA PARCERIAS
            </div>
          </div>

        </div>
      </Container>

      <div className="border-t border-zinc-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            
            <p>
              © {new Date().getFullYear()} Endiama. Todos os direitos reservados.
            </p>

            <div className="flex gap-6">
              <span className="hover:text-zinc-300 cursor-pointer transition">
                Privacidade
              </span>
              <span className="hover:text-zinc-300 cursor-pointer transition">
                Termos
              </span>
            </div>

          </div>
        </Container>
      </div>

    </footer>
  );
}
