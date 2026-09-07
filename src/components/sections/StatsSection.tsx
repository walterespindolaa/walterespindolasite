"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book } from "@/components/ui/book";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
    'applied-ai': '#1F73C2', // Marine
    'software-development': '#719A73', // Sage
    'about-me': '#003A35', // Evergreen
    'more': '#003A35', // Evergreen
};


export default function StatsSection({ scrollYProgress, showOnly }: { scrollYProgress?: any, showOnly?: 'top' | 'bottom' }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const blogs = portfolioData.blogs.slice(0, 6);
    const visibleCount = 3;

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
    };

    // Helper to get visible blogs in an infinite way
    const getVisibleBlogs = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            result.push(blogs[(currentIndex + i) % blogs.length]);
        }
        return result;
    };

    return (
        <section className="relative z-20 bg-background overflow-visible flex flex-col items-center transition-colors duration-500">
            {/* Galeria "Retratos & bastidores" (ZoomParallax + link /gallery) removida a pedido do dono. */}

            {/* Book Showcase Integration */}
            {(showOnly === 'bottom' || !showOnly) && blogs.length > 0 && (
                <div className="w-full max-w-[1600px] mx-auto px-5 md:px-12 pt-10 md:pt-16 pb-10 md:pb-32 space-y-8 md:space-y-16 relative">
                    <div className="flex items-center justify-between border-b border-border/50 pb-8">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                Últimos artigos
                            </h3>
                            <p className="text-muted-foreground/60 font-medium uppercase tracking-widest text-xs">Patrimônio • Sistemas • Método</p>
                        </div>
                        <Link href="/blog" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/40 hover:text-foreground transition-colors group">
                            Ver o blog
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>

                    <div className="relative group/slider flex items-center justify-center">
                        {/* Navigation Buttons - Positioned relatively to the container */}
                        <div className="absolute left-0 top-[35%] -translate-y-1/2 z-30 hidden lg:block">
                            <button
                                onClick={prevSlide}
                                className="p-4 rounded-full bg-muted/10 border border-border/50 text-foreground transition-all hover:bg-muted/20 hover:scale-110 active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="absolute right-0 top-[35%] -translate-y-1/2 z-30 hidden lg:block">
                            <button
                                onClick={nextSlide}
                                className="p-4 rounded-full bg-muted/10 border border-border/50 text-foreground transition-all hover:bg-muted/20 hover:scale-110 active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="absolute inset-x-0 top-[35%] -translate-y-1/2 z-30 flex justify-between px-2 lg:hidden">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="overflow-hidden md:overflow-visible w-full lg:max-w-[1400px] mx-auto px-2 md:px-12">
                            <div className="flex gap-6 md:gap-24 justify-center pt-8 md:pt-12 pb-20 md:pb-32 min-h-[420px] md:min-h-[600px] items-start relative">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {getVisibleBlogs().map((blog, index) => (
                                        <motion.div
                                            key={blog.id}
                                            layout
                                            initial={{ opacity: 0, x: direction * 50, scale: 0.9, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, x: direction * -50, scale: 0.9, filter: "blur(10px)" }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 26,
                                            }}
                                            className="group relative w-[160px] sm:w-[200px] md:w-[260px] flex-shrink-0 [&:nth-child(n+3)]:hidden sm:[&:nth-child(n+3)]:block"
                                        >
                                            <Link href={`/blog/${blog.slug}`} className="block relative z-10 group/book">
                                                {/* Glow Effect - Inside Link for better hover detection */}
                                                <div
                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square -z-10 blur-[80px] opacity-0 group-hover/book:opacity-70 group-hover/book:scale-110 transition-all duration-700 rounded-full pointer-events-none"
                                                    style={{
                                                        background: `radial-gradient(circle, ${CATEGORY_COLORS[blog.category]} 0%, transparent 70%)`,
                                                    }}
                                                />

                                                <Book
                                                    title={blog.title}
                                                    color={CATEGORY_COLORS[blog.category] || '#222222'}
                                                    textColor={
                                                        (index % 2 !== 0 && blog.category === 'applied-ai')
                                                            ? '#FFFFFF'
                                                            : 'var(--ds-gray-1000)'
                                                    }
                                                    variant={index % 2 === 0 ? 'stripe' : 'simple'}
                                                    textured
                                                    width={{ sm: 160, md: 220, lg: 260 }}
                                                />

                                                <div className="mt-8 space-y-3 opacity-0 group-hover/book:opacity-100 transition-all duration-500 translate-y-4 group-hover/book:translate-y-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-muted/20 border border-border/50 text-foreground/60">
                                                            {blog.category.replace(/-/g, ' ')}
                                                        </span>
                                                        <span className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-widest">
                                                            {new Date(blog.date).getFullYear()}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2 font-medium leading-relaxed">
                                                        {blog.excerpt}
                                                    </p>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center md:hidden pt-8">
                        <Link href="/blog" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/40 hover:text-foreground transition-colors group">
                            Ver o blog
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
