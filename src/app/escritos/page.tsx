import Link from "next/link";
import type { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Escritos · Walter Espindola" };

const CAT: Record<string, string> = { more: "Patrimônio", "software-development": "Sistemas", "applied-ai": "Construção", "about-me": "Sobre mim" };

export default function Escritos() {
  const posts = [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <Nav />
      <main className="bg-paper text-ink px-5 md:px-10 pt-32 md:pt-44 pb-24">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <h1 className="md:col-span-7 serif text-5xl md:text-7xl leading-[0.95]">Escritos</h1>
          <p className="md:col-span-5 md:pt-4 text-lg md:text-xl leading-relaxed text-ink/70">Um texto por semana. Patrimônio, sistemas e o que eu aprendo construindo.</p>
        </div>
        <ul className="divide-y divide-ink/15 border-t border-ink/15">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/escritos/${p.slug}`} className="group grid md:grid-cols-12 gap-3 md:gap-8 py-7 md:py-9">
                <span className="md:col-span-2 text-sm text-ink/50">{p.date.slice(0, 7).split("-").reverse().join("/")} · {CAT[p.category] ?? p.category}</span>
                <span className="md:col-span-6 serif text-2xl md:text-3xl leading-snug group-hover:text-evergreen transition-colors">{p.title}</span>
                <span className="md:col-span-4 text-[1.02rem] text-ink/60 leading-relaxed">{p.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
