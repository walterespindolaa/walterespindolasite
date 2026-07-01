import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Blend from "../components/Blend.jsx";

const GOLD = "#a07d2c";

const phases = [
  { n: 0, ato: "Ato 1 · Ideia & Marca", title: "Faísca", desc: "Antes de qualquer tela, valide a dor. Uma pessoa real, um problema real, uma frase que posiciona.", ferramenta: "Conversa + papel", entrega: "Dor validada + posicionamento em 1 frase", armadilha: "Se apaixonar pela ideia antes de validar a dor." },
  { n: 1, ato: "Ato 1 · Ideia & Marca", title: "Marca", desc: "A cara do produto: nome que gruda, domínio disponível e um brand kit mínimo pra tudo conversar.", ferramenta: "IA de nomes + Registro.br", entrega: "Nome, domínio e brand kit", armadilha: "Travar meses escolhendo nome perfeito." },
  { n: 2, ato: "Ato 1 · Ideia & Marca", title: "Escopo", desc: "Desenhe só as telas essenciais e o fluxo principal. O mínimo que já entrega valor.", ferramenta: "Papel / Figma", entrega: "Lista de telas + fluxo principal", armadilha: "Querer 20 features no primeiro dia." },
  { n: 3, ato: "Ato 2 · Construção", title: "Lovable", desc: "Coloque um app navegável no ar, sem escrever uma linha de código, conversando com a IA.", ferramenta: "Lovable", entrega: "App navegável publicado", armadilha: "Pedir tudo de uma vez em vez de ir por telas." },
  { n: 4, ato: "Ato 2 · Construção", title: "Supabase", desc: "A fundação de verdade: banco de dados, login, regras de acesso (RLS) e segredos guardados.", ferramenta: "Supabase", entrega: "Dados, login, RLS e secrets", armadilha: "Deixar a segurança (RLS) pra depois." },
  { n: 5, ato: "Ato 2 · Construção", title: "IA no core", desc: "A feature de IA que dá o diferencial, com cota e custo controlados numa Edge Function.", ferramenta: "OpenAI / Claude + Edge Function", entrega: "Feature de IA com cota", armadilha: "IA no front sem controlar custo e limite." },
  { n: 6, ato: "Ato 3 · Dinheiro & Venda", title: "Pagamento", desc: "Cobrar de verdade: checkout, webhook que libera acesso e planos que fazem sentido.", ferramenta: "Stripe / Asaas", entrega: "Checkout + webhook + planos", armadilha: "Liberar acesso sem confirmar o pagamento." },
  { n: 7, ato: "Ato 3 · Dinheiro & Venda", title: "Blindar", desc: "Antes de escalar, uma auditoria de segurança e teste de carga pra não cair no lançamento.", ferramenta: "Claude Code", entrega: "Auditoria + teste de carga", armadilha: "Escalar tráfego sem blindar o app." },
  { n: 8, ato: "Ato 3 · Dinheiro & Venda", title: "Lançar", desc: "Landing que converte, pixel medindo tudo e campanha no ar. No ar, cobrando.", ferramenta: "Landing + Meta Pixel", entrega: "Campanha no ar, cobrando", armadilha: "Lançar sem medir (sem pixel, sem dados)." },
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
      <Blend from="ink" edge="top" />
      <Blend from="navy" edge="bottom" />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* esquerda, revela a fase ativa */}
          <div>
            <span className="overline text-[#a07d2c]">05 · O método</span>
            <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight md:text-4xl">
              Da ideia ao infoproduto, um caminho repetível, sem programar.
            </h2>

            <div className="mt-6 min-h-[300px] md:mt-10 md:min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="overline text-[#a07d2c]">{cur.ato}</div>
                  <div className="mt-3 flex items-baseline gap-4">
                    <span className="font-serif text-5xl font-semibold text-ink/15 md:text-6xl">
                      {String(cur.n).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-3xl font-semibold text-ink md:text-4xl">{cur.title}</span>
                  </div>
                  <p className="mt-3 max-w-md text-base text-ink/70 md:mt-4 md:text-lg">{cur.desc}</p>

                  <dl className="mt-5 max-w-md space-y-2.5 border-t border-ink/10 pt-4">
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 overline text-ink/40" style={{ fontSize: "0.6rem" }}>Ferramenta</dt>
                      <dd className="text-sm text-ink/75">{cur.ferramenta}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 overline text-ink/40" style={{ fontSize: "0.6rem" }}>Entregável</dt>
                      <dd className="text-sm text-ink/75">{cur.entrega}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 overline text-[#a07d2c]/70" style={{ fontSize: "0.6rem" }}>Armadilha</dt>
                      <dd className="text-sm italic text-ink/60">{cur.armadilha}</dd>
                    </div>
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* direita, trilha das 9 fases */}
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
