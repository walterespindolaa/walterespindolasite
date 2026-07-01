import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { systems } from "../data/systems.js";

/* Tela do app dentro do MacBook (placeholder até entrar o screenshot real) */
function Screen({ system, active }) {
  return (
    <div className="w-full">
      <div
        className="rounded-t-2xl border border-white/10 bg-[#0b0b0b] p-2 transition-shadow duration-500"
        style={{ boxShadow: active ? "0 40px 90px -20px rgba(0,0,0,0.7)" : "none" }}
      >
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-lg bg-ink">
          <div className="flex h-16 items-center px-5" style={{ background: system.accent }}>
            <span className="font-serif text-xl font-semibold text-ink">{system.name}</span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-ink/70">
              {system.tag}
            </span>
          </div>
          <div className="space-y-3 p-5">
            <div className="h-3.5 w-2/3 rounded bg-white/15" />
            <div className="grid grid-cols-3 gap-3 py-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-16 rounded-xl border border-white/5 bg-white/[0.06]" />
              ))}
            </div>
            <div className="h-3 w-full rounded bg-white/10" />
            <div className="h-3 w-5/6 rounded bg-white/10" />
            <div className="h-3 w-3/5 rounded bg-white/10" />
          </div>
        </div>
      </div>
      {/* base do notebook */}
      <div className="relative mx-auto">
        <div className="mx-auto h-3.5 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-[#d3d7dd] to-[#8b9098]" />
        <div className="mx-auto h-1.5 w-[112%] -translate-x-[5.4%] rounded-b-lg bg-[#6d727a]" />
        <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[#5c6068]" />
      </div>
    </div>
  );
}

export default function Systems() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const n = systems.length;
  // desliza a fita de telas na horizontal; item centralizado = ativo
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((n - 1) / n) * 100}%`]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1)))));
    });
  }, [scrollYProgress, n]);

  const current = systems[active];

  return (
    <section id="sistemas" ref={ref} className="relative bg-navy" style={{ height: `${n * 110}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* título fixo */}
        <div className="px-8 pt-24">
          <div className="mx-auto max-w-6xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold/80">04 · A prova</span>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-offwhite md:text-3xl">
              Eu não falo de tecnologia. Eu resolvo dores com ela.
            </h2>
          </div>
        </div>

        {/* fita de MacBooks passando */}
        <div className="relative flex-1">
          <div className="absolute inset-0 flex items-center">
            <motion.div style={{ x }} className="flex w-full">
              {systems.map((s, i) => (
                <div key={s.id} className="flex shrink-0 basis-full items-center justify-center px-[6vw]">
                  <motion.div
                    className="w-full max-w-[640px]"
                    animate={{
                      scale: i === active ? 1 : 0.82,
                      opacity: i === active ? 1 : 0.35,
                      filter: i === active ? "blur(0px)" : "blur(1px)",
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Screen system={s} active={i === active} />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* copy sincronizada com a tela ativa */}
        <div className="px-8 pb-10">
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-2 flex items-center justify-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">
                    0{active + 1} · {current.name}
                  </span>
                  {current.live && (
                    <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                      Ao vivo
                    </span>
                  )}
                </div>
                <p className="mb-1 font-serif text-base italic text-offwhite/55">"{current.dor}"</p>
                <h3 className="mx-auto mb-4 max-w-2xl font-serif text-2xl font-semibold text-offwhite md:text-3xl">
                  {current.solucao}
                </h3>
                <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-offwhite/80">
                  {current.ganhos.map((g) => (
                    <li key={g} className="flex items-center gap-2">
                      <span className="text-gold">→</span> {g}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#sistema-${current.id}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-offwhite/25 px-5 py-2.5 text-sm font-medium text-offwhite transition-colors hover:border-gold hover:text-gold"
                >
                  Ver o sistema <span aria-hidden>↗</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* progresso + dots */}
        <div className="px-8 pb-8">
          <div className="mx-auto flex max-w-3xl items-center gap-4">
            <div className="flex gap-2">
              {systems.map((s, i) => (
                <span
                  key={s.id}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 22 : 8,
                    background: i === active ? "var(--color-gold)" : "rgba(244,240,231,0.25)",
                  }}
                />
              ))}
            </div>
            <div className="h-[2px] flex-1 overflow-hidden rounded bg-offwhite/15">
              <motion.div style={{ width: progress }} className="h-full bg-gold" />
            </div>
            <span className="font-mono text-xs text-offwhite/50">role →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
