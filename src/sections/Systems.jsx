import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { systems } from "../data/systems.js";

/* Mockup de MacBook com a "tela" do sistema (placeholder até entrar o screenshot real) */
function MacBook({ system }) {
  return (
    <div className="w-full max-w-[520px]">
      <div className="rounded-t-xl border border-white/10 bg-[#0c0c0c] p-2 shadow-2xl">
        {/* barra da janela */}
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* tela / app mock */}
        <div className="aspect-[16/10] overflow-hidden rounded-md bg-ink">
          <div
            className="h-14 w-full flex items-center px-4"
            style={{ background: system.accent }}
          >
            <span className="font-serif text-ink text-lg font-semibold">{system.name}</span>
          </div>
          <div className="p-4 space-y-2.5">
            <div className="h-3 w-2/3 rounded bg-white/15" />
            <div className="grid grid-cols-3 gap-2 py-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-12 rounded-lg bg-white/[0.06] border border-white/5" />
              ))}
            </div>
            <div className="h-2.5 w-full rounded bg-white/10" />
            <div className="h-2.5 w-5/6 rounded bg-white/10" />
            <div className="h-2.5 w-4/6 rounded bg-white/10" />
          </div>
        </div>
      </div>
      {/* base do notebook */}
      <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-xl bg-gradient-to-b from-[#c8ccd2] to-[#8b9098]" />
      <div className="mx-auto h-1 w-[118%] -translate-x-[8%] rounded-b-lg bg-[#6d727a]" />
    </div>
  );
}

function Panel({ system, index }) {
  return (
    <div className="flex h-screen w-screen shrink-0 items-center justify-center px-8">
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <MacBook system={system} />

        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              0{index + 1} · {system.tag}
            </span>
            {system.live && (
              <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                Ao vivo
              </span>
            )}
          </div>

          <p className="mb-2 font-serif text-lg italic text-offwhite/55">"{system.dor}"</p>
          <h3 className="mb-6 font-serif text-3xl font-semibold leading-tight text-offwhite md:text-4xl">
            {system.solucao}
          </h3>

          <ul className="space-y-3">
            {system.ganhos.map((g) => (
              <li key={g} className="flex gap-3 text-offwhite/85">
                <span className="mt-1 text-gold">→</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>

          <a
            href={`#sistema-${system.id}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-offwhite/25 px-5 py-2.5 text-sm font-medium text-offwhite transition-colors hover:border-gold hover:text-gold"
          >
            Ver o sistema
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Systems() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const n = systems.length;
  // desliza a trilha da 1ª à última tela
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(n - 1) * 100}vw`]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="sistemas"
      ref={ref}
      className="relative bg-navy"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* título fixo por cima */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-8 pt-24">
          <div className="mx-auto max-w-6xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold/80">
              04 · A prova
            </span>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-offwhite md:text-3xl">
              Eu não falo de tecnologia. Eu resolvo dores com ela.
            </h2>
          </div>
        </div>

        {/* trilha horizontal */}
        <motion.div style={{ x }} className="flex h-full">
          {systems.map((s, i) => (
            <Panel key={s.id} system={s} index={i} />
          ))}
        </motion.div>

        {/* barra de progresso */}
        <div className="absolute inset-x-0 bottom-8 z-10 px-8">
          <div className="mx-auto flex max-w-6xl items-center gap-4">
            <div className="h-[2px] flex-1 overflow-hidden rounded bg-offwhite/15">
              <motion.div style={{ width: progress }} className="h-full bg-gold" />
            </div>
            <span className="font-mono text-xs text-offwhite/50">
              role para o lado →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
