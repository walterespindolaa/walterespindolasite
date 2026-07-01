import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const GOLD = "#a07d2c";

const phases = [
  { n: 0, ato: "Ato 1 · Ideia & Marca", title: "Faísca", desc: "Dor validada + posicionamento. Antes de qualquer tela." },
  { n: 1, ato: "Ato 1 · Ideia & Marca", title: "Marca", desc: "Nome, domínio e brand kit — a cara do produto." },
  { n: 2, ato: "Ato 1 · Ideia & Marca", title: "Escopo", desc: "As telas essenciais e o fluxo principal." },
  { n: 3, ato: "Ato 2 · Construção", title: "Lovable", desc: "App navegável no ar, sem escrever código." },
  { n: 4, ato: "Ato 2 · Construção", title: "Supabase", desc: "Dados, login, RLS e segredos — a fundação." },
  { n: 5, ato: "Ato 2 · Construção", title: "IA no core", desc: "A feature de IA com cota, via Edge Function." },
  { n: 6, ato: "Ato 3 · Dinheiro & Venda", title: "Pagamento", desc: "Checkout, webhook e planos que cobram de verdade." },
  { n: 7, ato: "Ato 3 · Dinheiro & Venda", title: "Blindar", desc: "Claude Code: auditoria e carga antes de escalar." },
  { n: 8, ato: "Ato 3 · Dinheiro & Venda", title: "Lançar", desc: "Landing, pixel e campanha. No ar, cobrando." },
];

export default function Method() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const n = phases.length;

  useEffect(() => {
    return scrollYProgress.on("change", (v) =>
      setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1)))))
    );
  }, [scrollYProgress, n]);

  const cur = phases[active];

  return (
    <section id="metodo" ref={ref} className="relative bg-offwhite text-ink" style={{ height: `${n * 55}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* esquerda — revela a fase ativa */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#a07d2c]">05 · O método</span>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Da ideia ao infoproduto — um caminho repetível, sem programar.
            </h2>

            <div className="mt-10 min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-[#a07d2c]">{cur.ato}</div>
                  <div className="mt-3 flex items-baseline gap-4">
                    <span className="font-serif text-6xl font-semibold text-ink/15">
                      {String(cur.n).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-4xl font-semibold text-ink">{cur.title}</span>
                  </div>
                  <p className="mt-4 max-w-md text-lg text-ink/65">{cur.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* direita — trilha das 9 fases */}
          <div className="relative flex gap-5">
            <div className="relative w-[2px] shrink-0 bg-ink/10">
              <motion.div style={{ height: railHeight, background: GOLD }} className="absolute left-0 top-0 w-full" />
            </div>
            <ul className="flex-1 space-y-1.5">
              {phases.map((p, i) => (
                <li
                  key={p.n}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300"
                  style={{
                    background: i === active ? "rgba(160,125,44,0.12)" : "transparent",
                    opacity: i === active ? 1 : i < active ? 0.55 : 0.35,
                  }}
                >
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs transition-colors"
                    style={{
                      background: i <= active ? GOLD : "transparent",
                      color: i <= active ? "#fff" : "var(--color-ink)",
                      border: i <= active ? "none" : "1px solid rgba(27,27,26,0.25)",
                    }}
                  >
                    {p.n}
                  </span>
                  <span className="font-medium text-ink">{p.title}</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    {p.ato.split("·")[0].trim()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
