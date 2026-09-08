"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Chapter {
    id: string;
    sticker: string;
    photo: string;
    title: string;
    text: string;
    showPhotoOnMobile?: boolean;
}

const CHAPTERS: Chapter[] = [
    {
        id: "pousada",
        sticker: "/img/stk/compass.webp",
        photo: "/img/walter-mood.webp",
        title: "A pousada",
        text: "Cresci numa pousada no litoral de Santa Catarina. Meus pais tocaram o negócio por 25 anos, no braço, sem nunca ter um plano. Em 2020 a pousada fechou. Foi ali que eu entendi, de um jeito que não se esquece, o que a falta de plano custa.",
        showPhotoOnMobile: true,
    },
    {
        id: "pergunta",
        sticker: "/img/stk/lightbulb.webp",
        photo: "/img/walter-historia.webp",
        title: "A pergunta",
        text: "Segundo mês de pandemia. Eu e minha esposa sentamos pra olhar as contas e a pergunta veio: e agora, a gente está fazendo certo? Ninguém tinha a resposta. Então eu comecei a construir um sistema pra responder. Primeiro pra nós dois, depois pra família, depois pros amigos.",
    },
    {
        id: "atlas",
        sticker: "/img/stk/target.webp",
        photo: "/img/shots/atlas.webp",
        title: "O Atlas",
        text: "Aquele sistema virou o Atlas: o plano que um bom assessor faria, num app, todo dia. E virou também o método que eu uso hoje com mais de 300 famílias. Percebi que eu não resolvia dores dando conselho. Resolvia construindo.",
    },
    {
        id: "zephyr",
        sticker: "/img/stk/buildings.webp",
        photo: "/img/walter-hero.webp",
        title: "A Zephyr",
        text: "À frente da Zephyr Investimentos, cuido do patrimônio de quem tem muito a perder. Poucos clientes, atenção de perto, visão de décadas. Cerca de R$ 260 milhões sob gestão e uma regra: nada de achismo. Diagnóstico, projeção e plano.",
        showPhotoOnMobile: true,
    },
    {
        id: "receita",
        sticker: "/img/stk/gears.webp",
        photo: "/img/shots/zephyr.webp",
        title: "A receita se repete",
        text: "Cada dor que eu via na assessoria virava um sistema. A plataforma da própria Zephyr. O Cria Social Club, pra quem tem o que dizer e trava na hora de publicar. Três sistemas no ar, construídos sozinho, pela mesma receita: dados, login, automação, pagamento e lançamento.",
    },
    {
        id: "agora",
        sticker: "/img/stk/growth.webp",
        photo: "/img/walter-alt.webp",
        title: "O que vem agora",
        text: "O caminho que eu percorri virou algo que dá pra ensinar: Da Ideia ao Sistema em 24 horas. Se você tem uma dor e uma ideia, a gente conversa.",
    },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ChapterPhoto({ src, alt, priority = false, className }: { src: string; alt: string; priority?: boolean; className?: string }) {
    return (
        <div className={cn("relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#003A35]/10", className)}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
            />
        </div>
    );
}

export default function StorySection() {
    const [active, setActive] = useState(0);
    const chapterRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        let raf = 0;
        const update = () => {
            raf = 0;
            const target = window.innerHeight * 0.42;
            let best = 0;
            let bestDist = Infinity;
            chapterRefs.current.forEach((el, i) => {
                if (!el) return;
                const r = el.getBoundingClientRect();
                const center = r.top + r.height / 2;
                const dist = Math.abs(center - target);
                if (dist < bestDist) { bestDist = dist; best = i; }
            });
            setActive((prev) => (prev === best ? prev : best));
        };
        const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        const lenis = (window as any).lenis || (window as any).__lenis;
        lenis?.on?.("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            lenis?.off?.("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const current = CHAPTERS[active];

    return (
        <section
            id="historia"
            className="relative w-full bg-background text-foreground px-5 md:px-10 lg:px-16 py-12 md:py-32 overflow-x-clip"
        >
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="mb-8 md:mb-20"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-primary/60" />
                        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-primary">
                            De onde eu venho
                        </span>
                    </div>
                    <h2 className="font-serif-elegant text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                        Minha história
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* Sticky photo (desktop) */}
                    <div className="hidden lg:block lg:col-span-5">
                        <div className="sticky top-28">
                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#003A35]/10 shadow-[0_30px_80px_-30px_rgba(0,31,39,0.35)]">
                                <AnimatePresence mode="sync" initial={false}>
                                    <motion.div
                                        key={current.id}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.7, ease: EASE }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={current.photo}
                                            alt={current.title}
                                            fill
                                            sizes="40vw"
                                            className="object-cover object-top"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between bg-gradient-to-t from-[#001F27]/70 to-transparent text-[#F4F0E7]">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80">
                                        Capítulo {String(active + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-serif-elegant text-xl">{current.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chapters */}
                    <div className="lg:col-span-7 flex flex-col">
                        {CHAPTERS.map((chapter, i) => (
                            <motion.article
                                key={chapter.id}
                                ref={(el) => { chapterRefs.current[i] = el; }}
                                data-index={i}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, ease: EASE }}
                                className={cn(
                                    "relative py-10 md:py-14 border-t border-border",
                                    i === CHAPTERS.length - 1 && "border-b"
                                )}
                            >
                                {chapter.showPhotoOnMobile && (
                                    <ChapterPhoto
                                        src={chapter.photo}
                                        alt={chapter.title}
                                        priority={i === 0}
                                        className="lg:hidden mb-8"
                                    />
                                )}

                                <div className="flex items-center gap-4 mb-5">
                                    <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="h-px w-6 bg-border" />
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={chapter.sticker}
                                            alt=""
                                            fill
                                            sizes="48px"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <h3 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl leading-[1.02] tracking-tight mb-4 md:mb-5">
                                    {chapter.title}
                                </h3>
                                <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
                                    {chapter.text}
                                </p>
                            </motion.article>
                        ))}

                        {/* Closing CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.8, ease: EASE }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-10 md:pt-14"
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#003A35] text-[#F4F0E7] px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-[#00302c] hover:scale-[1.02] active:scale-95"
                            >
                                Falar comigo
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-foreground/50 hover:bg-foreground/5 active:scale-95"
                            >
                                Ver os sistemas
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
