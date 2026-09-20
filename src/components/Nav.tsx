import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/data/images";

// Nav fixa, branca com mix-blend pra funcionar sobre foto, verde ou papel.
export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-white">
      <div className="px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Início">
          <Image src={IMG.logo} alt="we" width={44} height={24} className="h-6 w-auto" priority />
        </Link>
        <nav className="flex gap-6 text-[13px] font-medium tracking-wide">
          <Link href="/#zephyr" className="hover:opacity-70">Zephyr</Link>
          <Link href="/#sistemas" className="hover:opacity-70">Sistemas</Link>
          <Link href="/#trajetoria" className="hover:opacity-70">Trajetória</Link>
          <Link href="/escritos" className="hover:opacity-70">Escritos</Link>
        </nav>
      </div>
    </header>
  );
}
