import { motion } from "framer-motion";

const links = [
  { label: "Zephyr", href: "/#zephyr" },
  { label: "Sistemas", href: "/#sistemas" },
  { label: "Método", href: "/#metodo" },
  { label: "Mentoria", href: "/#mentoria" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(0,31,39,0.55)" }}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src="/img/logo-we2-white.png" alt="Walter Espindola" className="h-7 w-auto object-contain md:h-8" />
          <span className="h-6 w-px bg-offwhite/20" />
          <span className="font-serif text-lg tracking-tight text-offwhite md:text-xl">
            Walter <span className="text-gold">Espindola</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-offwhite/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/#contato"
          className="rounded-full border border-gold/60 px-4 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-ink transition-colors"
        >
          Contato
        </a>
      </nav>
    </motion.header>
  );
}
