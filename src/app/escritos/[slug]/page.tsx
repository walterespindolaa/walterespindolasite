import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Article } from "@/components/Article";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = blogs.find((b) => b.slug === slug);
  if (!p) return {};
  return { title: `${p.title} · Walter Espindola`, description: p.excerpt, openGraph: { title: p.title, description: p.excerpt, images: [{ url: p.image }] } };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogs.find((b) => b.slug === slug);
  if (!p) notFound();
  const outros = blogs.filter((b) => b.slug !== slug).sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="bg-paper text-ink">
        <section className="px-5 md:px-10 pt-24 md:pt-32 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <figure className="md:col-span-5">
            <Image src={p.image} alt={p.title} width={1333} height={2000} priority quality={90} sizes="(max-width:768px) 100vw, 42vw" className="w-full h-auto bg-ink/5" />
          </figure>
          <div className="md:col-span-7 pb-2">
            <p className="text-sm text-ink/50 mb-4">{p.date.split("-").reverse().join("/")} · {p.readTime} min de leitura</p>
            <h1 className="serif text-4xl md:text-6xl leading-[1.02]">{p.title}</h1>
            <p className="mt-6 serif text-2xl md:text-3xl leading-snug text-ink/70">{p.excerpt}</p>
          </div>
        </section>
        <div className="px-5 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-3">
            <Link href="/escritos" className="link text-sm">← Escritos</Link>
          </aside>
          <article className="md:col-span-7">
            <Article content={p.content} />
          </article>
        </div>
        <div className="px-5 md:px-10 pb-24 grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 text-sm text-ink/50">Mais escritos</p>
          <ul className="md:col-span-7 divide-y divide-ink/15 border-t border-ink/15">
            {outros.map((o) => (
              <li key={o.slug}><Link href={`/escritos/${o.slug}`} className="block py-5 serif text-2xl hover:text-evergreen transition-colors">{o.title}</Link></li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
