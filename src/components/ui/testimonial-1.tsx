"use client";

import { ArrowUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Testimonial1() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  interface StatItem {
    value: number;
    decimals: number;
    suffix: string;
    label: string;
    href: string;
    cta: string;
  }

  const stats: StatItem[] = [
    {
      value: 260,
      decimals: 0,
      suffix: "M",
      label: "R$ sob gestão",
      href: "/experience",
      cta: "Ver trajetória",
    },
    {
      value: 300,
      decimals: 0,
      suffix: "+",
      label: "Famílias atendidas",
      href: "/experience",
      cta: "Ver trajetória",
    },
    {
      value: 3,
      decimals: 0,
      suffix: "",
      label: "Sistemas no ar",
      href: "/projects",
      cta: "Ver sistemas",
    },
    {
      value: 10,
      decimals: 0,
      suffix: "+",
      label: "Anos de mercado",
      href: "/experience",
      cta: "Ver trajetória",
    },
  ];

  return (
    <div className="bg-background min-h-0 md:min-h-screen w-full grid place-content-center py-10 md:py-16 px-5 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Community Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/60 dark:bg-white/5 border border-border text-foreground px-5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inline-flex h-full w-full rounded-full bg-[#719A73]/60"
              />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#719A73] shadow-[0_0_10px_rgba(113,154,115,0.8)]" />
            </span>
            Números que sustentam
          </div>
        </div>

        {/* Main Heading with Refined Block Reveal Animation */}
        <div className="text-center max-w-5xl mx-auto relative text-foreground px-4 space-y-1 md:space-y-2">
          {[
            { text: "Patrimônio com método.", color: "#1F73C2", delay: 0 },
            { text: "Sistemas que vão pro ar.", color: "#719A73", delay: 0.15 },
            { text: "Três pilares, uma pessoa", color: "#003A35", delay: 0.3 },
            { text: "e os números por trás do trabalho.", color: "#719A73", delay: 0.45 }
          ].map((line, i) => (
            <div key={i} className="relative block overflow-hidden py-1.5">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: line.delay + 0.35,
                  duration: 0.01
                }}
                className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter"
              >
                {line.text}
              </motion.h1>

              {/* The Refined Revealer Block */}
              <motion.div
                initial={{ clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                whileInView={{
                  clipPath: i % 2 === 0 
                    ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"]
                    : ["inset(0 0 0 100%)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"]
                }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.75,
                  times: [0, 0.45, 0.55, 1],
                  delay: line.delay,
                  ease: [0.85, 0, 0.15, 1]
                }}
                className="absolute inset-0 z-10"
                style={{ backgroundColor: line.color }}
              />
            </div>
          ))}
        </div>

        {/* Glassmorphic Stats Bar */}
        <div className="sm:flex grid grid-cols-2 gap-8 bg-white/50 dark:bg-white/5 backdrop-blur-xl mt-12 w-full mx-auto px-6 md:px-8 py-8 md:py-10 border rounded-2xl border-border dark:border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow inside the bar */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#1F73C2]/5 blur-[100px] pointer-events-none" />

          {stats.map((stat, index) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="flex-1 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center justify-center relative h-full group">
                {index !== 0 && (
                  <div className="hidden sm:block w-0.5 h-12 border border-dashed border-neutral-200 dark:border-zinc-700 absolute -left-4" />
                )}

                <div className="flex flex-col items-center text-center transition-all duration-300 group-hover:opacity-40">
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    {stat.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tighter flex items-baseline">
                    <Counter value={stat.value} decimals={stat.decimals} />
                    <span className="text-lg sm:text-2xl ml-0.5">{stat.suffix}</span>
                  </div>
                </div>

                {/* Smoky / Foggy Hover Reveal - Perfected Opacity */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-[-20px] flex items-center justify-center z-20 pointer-events-none"
                    >
                      {/* The 'Smoke' Layer - Solid Center Masking */}
                      <div
                        className="absolute inset-0 bg-background backdrop-blur-[50px]"
                        style={{
                          maskImage: 'radial-gradient(circle, black 45%, transparent 95%)',
                          WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 95%)',
                        }}
                      />

                      <span className="relative text-xs font-bold text-foreground flex items-center gap-1.5 drop-shadow-md z-30">
                        {stat.cta}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
