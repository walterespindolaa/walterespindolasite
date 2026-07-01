import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { systems } from "../data/systems.js";
import Blend from "../components/Blend.jsx";

/* Conteúdo da "tela" do app (placeholder até entrar o screenshot real) */
function AppScreen({ system }) {
  return (
    <div className="h-full w-full bg-ink">
      <div className="flex h-14 items-center px-5" style={{ background: system.accent }}>
        <span className="font-serif text-lg font-semibold text-ink">{system.name}</span>
        <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-ink/70">
          {system.tag}
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div className="h-3 w-2/3 rounded bg-white/15" />
        <div className="grid grid-cols-3 gap-3 py-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-14 rounded-xl border border-white/5 bg-white/[0.06]" />
          ))}
        </div>
        <div className="h-2.5 w-full rounded bg-white/10" />
        <div className="h-2.5 w-5/6 rounded bg-white/10" />
        <div className="h-2.5 w-3/5 rounded bg-white/10" />
      </div>
    </div>
  );
}

export default function Systems() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const n = systems.length;

  useEffect(() => {
    return scrollYProgress.on("change", (v) =>
      setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1)))))
    );
  }, [scrollYProgress, n]);

  const cur = systems[active];

  return (
    <section id="sistemas" ref={ref} className="relative bg-navy" style={{ height: `${n * 85}vh` }}>
      <Blend from="ink" edge="top" />
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* título */}
        <div className="px-6 pt-20 md:px-8 md:pt-24">
          <div className="mx-auto max-w-6xl">
            <span className="overline text-gold/80">04 · A prova</span>
            <h2 className="mt-1 font-serif text-xl font-semibold text-offwhite md:text-3xl">
              Eu não falo de tecnologia. Eu resolvo dores com ela.
            </h2>
          </div>
        </div>

        {/* palco: MacBook (tela desliza dentro) + copy */}
        <div className="flex flex-1 items-center px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
            {/* MacBook fixo */}
            <div className="mx-auto w-full max-w-[280px] sm:max-w-[360px] md:max-w-[500px]">
              <div className="rounded-t-xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-2 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                {/* moldura da tela, a fita desliza AQUI dentro */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-ink">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={cur.id}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0"
                    >
                      <AppScreen system={cur} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              {/* base do notebook */}
              <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-[#d3d7dd] to-[#8b9098]" />
              <div className="mx-auto h-1.5 w-[112%] -translate-x-[5.4%] rounded-b-lg bg-[#6d727a]" />
            </div>

            {/* copy sincronizada */}
            <div className="min-h-0 text-center md:min-h-[260px] md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-2 flex items-center justify-center gap-3 md:justify-start">
                    <span className="overline text-gold">
                      0{active + 1} · {cur.name}
                    </span>
                    {cur.live && (
                      <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                        Ao vivo
                      </span>
                    )}
                  </div>
                  <p className="mb-2 font-serif text-base italic text-offwhite/55">"{cur.dor}"</p>
                  <h3 className="mb-5 font-serif text-2xl font-semibold leading-tight text-offwhite md:text-4xl">
                    {cur.solucao}
                  </h3>
                  <ul className="mx-auto inline-block space-y-2.5 text-left md:mx-0 md:block">
                    {cur.ganhos.map((g) => (
                      <li key={g} className="flex gap-3 text-offwhite/85">
                        <span className="mt-1 text-gold">→</span> <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/sistema/${cur.id}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-offwhite/25 px-5 py-2.5 text-sm font-medium text-offwhite transition-colors hover:border-gold hover:text-gold"
                  >
                    Ver o sistema <span aria-hidden>↗</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* progresso + dots */}
        <div className="px-8 pb-8">
          <div className="mx-auto flex max-w-6xl items-center gap-4">
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
