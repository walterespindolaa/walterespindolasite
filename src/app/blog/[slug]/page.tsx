'use client';

import { use, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Copy, Linkedin, Instagram, BookOpen, ArrowLeft, Check } from 'lucide-react';
import { notFound, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// Renderizador leve de markdown (parágrafos, ## títulos, listas, **negrito**).
function inline(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
            ? <strong key={i} className="font-semibold text-foreground">{p.slice(2, -2)}</strong>
            : <span key={i}>{p}</span>
    );
}

function ArticleBody({ content }: { content: string }) {
    const blocks = content.trim().split(/\n\s*\n/);
    return (
        <div className="space-y-6">
            {blocks.map((block, i) => {
                const lines = block.split('\n');
                if (lines[0].startsWith('## ')) {
                    return <h2 key={i} className="font-serif text-3xl md:text-4xl text-foreground pt-6 leading-tight">{lines[0].slice(3)}</h2>;
                }
                if (lines.every(l => /^\s*-\s/.test(l))) {
                    return (
                        <ul key={i} className="space-y-2 pl-1">
                            {lines.map((l, j) => (
                                <li key={j} className="flex gap-3 text-lg text-muted-foreground leading-relaxed">
                                    <span className="mt-[0.7em] w-1.5 h-1.5 rounded-full bg-[#719A73] flex-shrink-0" />
                                    <span>{inline(l.replace(/^\s*-\s/, ''))}</span>
                                </li>
                            ))}
                        </ul>
                    );
                }
                if (lines.every(l => /^\s*\d+\.\s/.test(l))) {
                    return (
                        <ol key={i} className="space-y-3 pl-1">
                            {lines.map((l, j) => (
                                <li key={j} className="flex gap-4 text-lg text-muted-foreground leading-relaxed">
                                    <span className="font-mono text-sm text-[#719A73] pt-1.5 flex-shrink-0">{String(j + 1).padStart(2, '0')}</span>
                                    <span>{inline(l.replace(/^\s*\d+\.\s/, ''))}</span>
                                </li>
                            ))}
                        </ol>
                    );
                }
                return <p key={i} className="text-lg md:text-xl text-muted-foreground leading-relaxed">{inline(lines.join(' '))}</p>;
            })}
        </div>
    );
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const t = useTranslations('blog');
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleBack = () => {
        if (typeof window !== 'undefined' && window.history.length > 2) {
            router.back();
        } else {
            router.push('/blog');
        }
    };

    const post = portfolioData.blogs.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const linkedin = portfolioData.personal.socialLinks.find(s => s.platform === 'LinkedIn')?.url || '#';
    const instagram = portfolioData.personal.socialLinks.find(s => s.platform === 'Instagram')?.url || '#';

    return (
        <main className="min-h-screen bg-background pb-24 pt-32">
            {/* Cabeçalho */}
            <div className="container max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium hover:text-primary transition-colors">
                            <button onClick={handleBack} className="flex items-center gap-2 focus:outline-none">
                                <ArrowLeft className="w-4 h-4" />
                                <span>{t('back')}</span>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
                            {post.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                            {post.excerpt}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Imagem de capa */}
            <div className="container max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full aspect-[21/9] md:aspect-[2/1] rounded-3xl overflow-hidden border border-border/40 shadow-2xl"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
            </div>

            {/* Barra de metadados */}
            <div className="container max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between border-y border-border/40 py-6 gap-6">
                    <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-start">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Escrito por</span>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-foreground">{post.author.name}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Publicado em</span>
                            <span className="font-bold text-foreground">{post.date}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                        <button
                            onClick={handleCopy}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 transition-all text-xs font-bold uppercase tracking-wider rounded-lg",
                                copied
                                    ? "bg-primary text-background"
                                    : "bg-secondary/10 hover:bg-secondary/20 text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" /> <span>Copiado!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" /> <span className="hidden sm:inline">Copiar link</span>
                                </>
                            )}
                        </button>
                        <div className="w-px h-6 bg-border/40 hidden sm:block" />
                        <Link href={linkedin} target="_blank" aria-label="LinkedIn" className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/10 rounded-lg hover:bg-primary/10">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href={instagram} target="_blank" aria-label="Instagram" className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/10 rounded-lg hover:bg-primary/10">
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="/blog" aria-label="Blog" className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/10 rounded-lg hover:bg-primary/10">
                            <BookOpen className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="container max-w-7xl mx-auto px-6">
                <article className="max-w-3xl mx-auto">
                    <ArticleBody content={post.content} />
                </article>
            </div>

            {/* Outros artigos */}
            {portfolioData.blogs.filter(b => b.slug !== slug).length > 0 && (
                <div className="container max-w-7xl mx-auto px-6 mt-16 border-t border-border/40 pt-16">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-2xl font-black tracking-tight">Mais do blog</h3>
                        <Link href="/blog" className="px-6 py-2 rounded-lg bg-secondary/10 border border-border/40 text-sm font-bold hover:bg-secondary/20 transition-all">
                            Ver todos os artigos
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioData.blogs.filter(b => b.slug !== slug).slice(0, 2).map((b) => (
                            <Link key={b.slug} href={`/blog/${b.slug}`} className="group block">
                                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-secondary/5 border border-border/40">
                                    <Image src={b.image} alt={b.title} fill sizes="(max-width: 768px) 100vw, 300px" loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                                            {t(`categories.${b.category}`)}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {b.title}
                                </h4>
                                <p className="text-muted-foreground line-clamp-2 mb-4">{b.excerpt}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 relative overflow-hidden">
                                        <Image src={b.author.avatar} alt={b.author.name} loading="lazy" fill sizes="32px" className="object-cover" />
                                    </div>
                                    {b.author.name} · {b.date}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
