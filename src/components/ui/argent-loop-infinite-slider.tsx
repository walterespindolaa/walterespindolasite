"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
  pain: string;
  slug: string;
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "Atlas",
    image: "/img/shots/atlas.webp",
    category: "SaaS · Finanças pessoais",
    year: "2020",
    description: "O plano que um bom assessor faria, num app, todo dia.",
    pain: "Casais que ganham bem e mesmo assim não sabem pra onde o dinheiro vai.",
    slug: "atlas"
  },
  {
    title: "Zephyr Planejamento",
    image: "/img/shots/zephyr.webp",
    category: "Plataforma · Assessoria",
    year: "2025",
    description: "Planejamento sob medida, CRM e relatórios com IA.",
    pain: "Planejamento feito em planilha, que envelhece no dia seguinte.",
    slug: "zephyr"
  },
  {
    title: "Cria Social Club",
    image: "/img/shots/cria.webp",
    category: "SaaS · Conteúdo",
    year: "2026",
    description: "Da ideia ao publicado num fluxo só, com IA no roteiro.",
    pain: "Ter o que dizer e travar na hora de publicar.",
    slug: "cria-social-club"
  },
];

const TOTAL = PROJECT_DATA.length;

function BrowserFrame({ src, alt, dark }: { src: string; alt: string; dark: boolean }) {
  return (
    <div
      className={cn(
        "w-full rounded-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,31,39,0.45)]",
        dark ? "bg-[#0b2f2b] border border-white/10" : "bg-white border border-[#001F27]/10"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 px-3 h-7 md:h-8 border-b",
          dark ? "bg-[#0b2f2b] border-white/10" : "bg-[#F4F0E7] border-[#001F27]/10"
        )}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#E36E5B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#E6B84F]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#719A73]" />
        <span
          className={cn(
            "ml-3 hidden sm:block flex-1 h-4 rounded-md",
            dark ? "bg-white/5" : "bg-[#001F27]/5"
          )}
        />
      </div>
      <div className="relative w-full aspect-[16/10] md:aspect-[16/10]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8",
              dark ? "bg-[#0b2f2b]" : "bg-white"
            )}
          >
            <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,#719A73_1px,transparent_1px)] [background-size:22px_22px]" />
            <span className="relative w-3 h-3 rounded-full bg-[#719A73] animate-pulse" />
            <p className={cn("relative font-serif text-3xl md:text-5xl leading-none", dark ? "text-[#F4F0E7]" : "text-[#001F27]")}>
              Em construção
            </p>
            <p className={cn("relative font-mono text-[11px] tracking-[0.25em] uppercase", dark ? "text-[#F4F0E7]/60" : "text-[#001F27]/60")}>
              Acompanhe pelo Instagram
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectSlide({ data, index }: { data: ProjectData; index: number }) {
  const dark = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "absolute left-0 w-full h-screen overflow-hidden",
        dark ? "bg-[#003A35] text-[#F4F0E7]" : "bg-[#F4F0E7] text-[#001F27]"
      )}
      style={{ top: `${index * 100}vh` }}
    >
      <div className="w-full h-full max-w-[1500px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-10 md:py-16 flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 lg:gap-16 items-center">
          {/* Screenshot */}
          <div className={cn("md:col-span-7", index % 2 === 1 && "md:order-2")}>
            <BrowserFrame src={data.image} alt={data.title} dark={dark} />
          </div>

          {/* Text */}
          <div className={cn("md:col-span-5 flex flex-col gap-3 md:gap-6", index % 2 === 1 && "md:order-1")}>
            <div
              className={cn(
                "flex items-center gap-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em]",
                dark ? "text-[#F4F0E7]/60" : "text-[#001F27]/55"
              )}
            >
              <span className="tabular-nums">{num} / {String(TOTAL).padStart(2, "0")}</span>
              <span className={cn("h-px w-6", dark ? "bg-[#F4F0E7]/30" : "bg-[#001F27]/25")} />
              <span>{data.category}</span>
              <span className="hidden sm:inline">· {data.year}</span>
            </div>

            <h3 className="font-serif-elegant text-4xl md:text-6xl leading-[0.95] tracking-tight">
              {data.title}
            </h3>

            <p
              className={cn(
                "text-base md:text-lg leading-relaxed max-w-md",
                dark ? "text-[#F4F0E7]/80" : "text-[#001F27]/75"
              )}
            >
              {data.description}
            </p>

            <div
              className={cn(
                "border-l-2 pl-4 max-w-md",
                dark ? "border-[#719A73]" : "border-[#003A35]"
              )}
            >
              <span
                className={cn(
                  "block font-mono text-[10px] uppercase tracking-[0.25em] mb-1",
                  dark ? "text-[#719A73]" : "text-[#003A35]"
                )}
              >
                O problema que resolvi
              </span>
              <p className="text-sm md:text-base leading-snug">{data.pain}</p>
            </div>

            <div className="pt-2">
              <Link
                href={`/projects/${data.slug}`}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95",
                  dark
                    ? "bg-[#F4F0E7] text-[#003A35] hover:bg-white"
                    : "bg-[#003A35] text-[#F4F0E7] hover:bg-[#00302c]"
                )}
              >
                Ver sistema
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArgentLoopInfiniteSlider() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 28, mass: 0.8 });

  const step = 1 / TOTAL;
  const transWindow = 0.06;

  const scrollMap: number[] = [0];
  const yMap: string[] = ["0vh"];

  PROJECT_DATA.forEach((_, i) => {
    if (i === 0) return;
    const boundary = i * step;
    scrollMap.push(boundary - transWindow / 2, boundary + transWindow / 2);
    yMap.push(`-${(i - 1) * 100}vh`, `-${i * 100}vh`);
  });
  scrollMap.push(1);
  yMap.push(`-${(TOTAL - 1) * 100}vh`);

  const currentY = useTransform(smoothProgress, scrollMap, yMap);
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const counter = useTransform(smoothProgress, (v) => {
    const idx = Math.min(Math.floor(v / step), TOTAL - 1);
    return `${String(idx + 1).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`;
  });
  const counterIsDark = useTransform(smoothProgress, (v) => {
    const idx = Math.min(Math.floor(v / step), TOTAL - 1);
    return idx % 2 === 0 ? 1 : 0;
  });
  const counterColor = useTransform(counterIsDark, (d) => (d ? "#F4F0E7" : "#001F27"));

  return (
    <div ref={containerRef} className="relative" style={{ height: `${TOTAL * 100}vh` }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background z-20">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: currentY }}>
          {PROJECT_DATA.map((data, i) => (
            <ProjectSlide key={data.slug} data={data} index={i} />
          ))}
        </motion.div>

        {/* Counter + progress + link to all systems */}
        <motion.div
          style={{ color: counterColor }}
          className="absolute bottom-5 md:bottom-8 left-5 right-5 md:left-10 md:right-10 lg:left-16 lg:right-16 z-30 flex items-center justify-between gap-4 pointer-events-none"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60">Sistemas</span>
            <div className="relative w-16 md:w-32 h-px">
              <div className="absolute inset-0 bg-current opacity-25" />
              <motion.div className="absolute top-0 left-0 h-full bg-current" style={{ width: progressWidth }} />
            </div>
            <motion.span className="font-mono text-[11px] tabular-nums font-semibold">{counter}</motion.span>
          </div>
          <Link
            href="/projects"
            className="pointer-events-auto inline-flex items-center gap-1.5 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] opacity-70 hover:opacity-100 transition-opacity"
          >
            Todos os sistemas
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
