"use client";
import React from "react";
import Image from "next/image";
import { GraduationCap, BookOpen, Binary, Sparkles, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CornerAccents = ({ hoverClass }: { hoverClass: string }) => (
    <>
        <div className={cn("absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
    </>
);

export default function ExperienceStickyScroll({ isLowPowerMode = false }: { isLowPowerMode?: boolean }) {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Telkom University Box (Left) - Hover Effect: Translate Y & Blue Glow */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group flex flex-col min-h-[450px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(31,115,194,0.3)] hover:border-[#1F73C2]/50"
                >
                    <CornerAccents hoverClass="group-hover:border-[#1F73C2] dark:group-hover:border-[#1F73C2]" />
                    {/* Text Section (Top) */}
                    <div className="p-8 relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-[#1F73C2] dark:group-hover:text-[#1F73C2] transition-colors">Mercado financeiro • Desde 2016</span>
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">Zephyr Investimentos</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Mais de dez anos cuidando do patrimônio de famílias de alta renda. Poucos clientes, alto toque e um plano de verdade, com tecnologia própria por trás de cada decisão.
                        </p>
                    </div>

                    {/* Visual Section (Bottom) */}
                    <div className="flex-1 flex items-center justify-center relative p-8 mt-auto border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 overflow-hidden">
                        {/* Background Logo */}
                        <div className="absolute inset-0">
                            <Image
                                src="/img/shots/zephyr.webp"
                                alt="Zephyr Investimentos"
                                fill
                                className="object-cover opacity-20 dark:opacity-30 blur-[2px] scale-125 group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003A35]/80 via-black/40 to-black/10 dark:from-[#003A35]/90 dark:via-black/50 dark:to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                        </div>

                        {/* Animated Background Element */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center transition-transform duration-500 group-hover:scale-105">
                            <div className="relative mb-6">
                                <GraduationCap className={cn("w-20 h-20 text-white drop-shadow-xl", !isLowPowerMode && "animate-pulse")} />
                                <Binary className={cn("w-8 h-8 text-[#1F73C2] absolute -top-2 -right-2 opacity-80", !isLowPowerMode && "animate-bounce")} />
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {["R$ 260M sob gestão", "300+ famílias", "Alta renda"].map(s => (
                                    <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-black/40 dark:bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg group-hover:bg-[#1F73C2]/50 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10 group-hover:border-[#1F73C2]/50 transition-colors">Assessoria com método</p>
                        </div>

                        {/* Holographic Scan Effect */}
                        {!isLowPowerMode && (
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1F73C2]/80 to-transparent animate-scan z-20" />
                        )}
                    </div>
                </motion.div>

                {/* SMAN 88 Box (Right) - Hover Effect: Scale & Orange Glow */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-1 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group flex flex-col min-h-[450px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(113,154,115,0.3)] hover:border-[#719A73]/50 hover:z-10"
                >
                    <CornerAccents hoverClass="group-hover:border-[#719A73] dark:group-hover:border-[#719A73]" />
                    {/* Text Section (Top) */}
                    <div className="p-8 relative z-10 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-[#719A73] dark:group-hover:text-[#719A73] transition-colors">Base • Método Atlas</span>
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">Método Atlas</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Nasceu do estudo de mais de 300 planejamentos reais. Primeiro pra mim e minha esposa, depois pras famílias que atendo. Hoje é o Atlas, um sistema que qualquer casal consegue usar.
                        </p>
                    </div>

                    {/* Visual Section (Bottom) */}
                    <div className="flex-1 flex items-center justify-center relative p-8 mt-auto border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 overflow-hidden">
                         {/* Background Logo */}
                         <div className="absolute inset-0">
                            <Image
                                src="/img/shots/atlas.webp"
                                alt="Atlas"
                                fill
                                className="object-cover opacity-10 dark:opacity-15 blur-sm scale-125 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003A35]/70 via-black/40 to-black/10 dark:from-[#003A35]/90 dark:via-black/50 dark:to-transparent mix-blend-multiply dark:mix-blend-normal transition-opacity duration-500 group-hover:opacity-80" />
                        </div>

                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="relative mb-6">
                                <BookOpen className="w-20 h-20 text-white drop-shadow-xl group-hover:rotate-12 transition-transform duration-500" />
                                <Sparkles className={cn("w-6 h-6 text-[#719A73] absolute -bottom-2 -left-2", !isLowPowerMode && "animate-pulse")} />
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {["Planejamento", "Casais", "useatlasapp.com"].map(s => (
                                    <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-black/40 dark:bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg group-hover:bg-[#719A73]/50 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10 group-hover:border-[#719A73]/50 transition-colors">Plano é tudo</p>
                        </div>
                    </div>
                </motion.div>

                {/* Coming Soon Box (Bottom - Full Width) - Hover Effect: Inner Glow & Cyan Border */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-1 md:col-span-2 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 hover:border-[#1F73C2]/50 hover:shadow-[inset_0_0_30px_rgba(31,115,194,0.1),0_0_30px_-5px_rgba(31,115,194,0.3)] hover:bg-neutral-50 dark:hover:bg-[#0f0f0f]"
                >
                    <CornerAccents hoverClass="group-hover:border-[#1F73C2] dark:group-hover:border-[#1F73C2]" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#003A35]/40 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700"></div>

                    <div className="relative z-10 max-w-xl transition-transform duration-500 group-hover:translate-x-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1F73C2] dark:text-[#1F73C2]">Construindo em público</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white mb-4 group-hover:text-[#003A35] dark:group-hover:text-[#F4F0E7] transition-colors">Da Ideia ao Sistema</h3>
                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Três sistemas no ar e o quarto a caminho. O que aprendi construindo virou método, e o método virou uma mentoria pra quem quer tirar a própria ideia do papel.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap justify-center md:justify-end gap-4 mt-6 md:mt-0">
                         {/* Animated Icons for Coming Soon */}
                         <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[0.5rem] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md group-hover:bg-[#1F73C2]/10 group-hover:border-[#1F73C2]/30 transition-all duration-300 shadow-sm relative">
                             <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1F73C2] dark:border-[#1F73C2] animate-[spin_3s_linear_infinite]"></div>
                         </div>
                         <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[0.5rem] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md group-hover:-translate-y-1 group-hover:bg-[#1F73C2]/10 group-hover:border-[#1F73C2]/30 transition-all duration-300 delay-75 shadow-sm relative">
                             <Clock className="w-6 h-6 md:w-8 md:h-8 text-neutral-500 dark:text-neutral-400 group-hover:text-[#1F73C2] dark:group-hover:text-[#1F73C2] transition-colors" />
                         </div>
                         <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[0.5rem] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md group-hover:-translate-y-2 group-hover:bg-[#1F73C2]/10 group-hover:border-[#1F73C2]/30 transition-all duration-300 delay-150 shadow-sm relative">
                             <div className="flex gap-1">
                                 <span className="w-1.5 h-1.5 rounded-full bg-[#1F73C2] dark:bg-[#1F73C2] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                 <span className="w-1.5 h-1.5 rounded-full bg-[#1F73C2] dark:bg-[#1F73C2] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                 <span className="w-1.5 h-1.5 rounded-full bg-[#1F73C2] dark:bg-[#1F73C2] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                             </div>
                         </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

