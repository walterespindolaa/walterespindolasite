import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Blend from "../components/Blend.jsx";
import Reveal from "../components/Reveal.jsx";

const GOLD = "#1F73C2";

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

function Detalhes({ p, small }) {
  const fs = small ? "0.55rem" : "0.6rem";
  return (
    <dl className={`space-y-2 ${small ? "text-sm" : "text-sm"}`}>
      {[["Ferramenta", p.ferramenta, false], ["Entregável", p.entrega, false], ["Armadilha", p.armadilha, true]].map(([k, v, warn]) => (
        <div key={k} className="flex gap-3">
          <dt className={`w-24 shrink-0 overline ${warn ? "text-[#1F73C2]/70" : "text-ink/40"}`} style={{ fontSize: fs }}>{k}</dt>
          <dd className={warn ? "italic text-ink/60" : "text-ink/75"}>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* MOBILE: lista empilhada (rola normal) */
function MethodMobile() {
  return (
    <section className="relative overflow-hidden bg-offwhite px-6 py-20 text-ink md:hidden">
      <Blend from="ink" edge="top" />
      <div className="relative z-10 mx-auto max-w-lg">
        <span className="overline text-[#1F73C2]">05 · O método</span>
        <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight">
          Da ideia ao infoproduto, um caminho repetível, sem programar.
        </h2>
        <div className="mt-8 space-y-4">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.03}>
              <div className="rounded-xl border border-ink/10 bg-white/50 p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs text-white" style={{ background: GOLD }}>{p.n}</span>
                  <div>
                    <div className="overline text-ink/40" style={{ fontSize: "0.56rem" }}>{p.ato}</div>
                    <div className="font-serif text-xl font-semibold">{p.title}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink/70">{p.desc}</p>
                <div className="mt-3 border-t border-ink/10 pt-3">
                  <Detalhes p={p} small />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* DESKTOP: sticky-scrub */
function MethodDesktop() {
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
    <section id="metodo" ref={ref} className="relative hidden bg-offwhite text-ink md:block" style={{ height: `${n * 55}vh` }}>
      <Blend from="ink" edge="top" />
      <Blend from="navy" edge="bottom" />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-12">
          <div>
            <span className="overline text-[#1F73C2]">05 · O método</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold leading-tight">
              Da ideia ao infoproduto, um caminho repetível, sem programar.
            </h2>
            <div className="mt-10 min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div key={cur.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
                  <div className="overline text-[#1F73C2]">{cur.ato}</div>
                  <div className="mt-3 flex items-baseline gap-4">
                    <span className="font-serif text-6xl font-semibold text-ink/15">{String(cur.n).padStart(2, "0")}</span>
                    <span className="font-serif text-4xl font-semibold text-ink">{cur.title}</span>
                  </div>
                  <p className="mt-4 max-w-md text-lg text-ink/70">{cur.desc}</p>
                  <div className="mt-5 max-w-md border-t border-ink/10 pt-4">
                    <Detalhes p={cur} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative flex gap-5">
            <div className="relative w-[2px] shrink-0 bg-ink/10">
              <motion.div style={{ height: railHeight, background: GOLD }} className="absolute left-0 top-0 w-full" />
            </div>
            <ul className="flex-1 space-y-1.5">
              {phases.map((p, i) => (
                <li key={p.n} className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300"
                  style={{ background: i === active ? "rgba(31,115,194,0.12)" : "transparent", opacity: i === active ? 1 : i < active ? 0.55 : 0.35 }}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs transition-colors"
                    style={{ background: i <= active ? GOLD : "transparent", color: i <= active ? "#fff" : "var(--color-ink)", border: i <= active ? "none" : "1px solid rgba(0,31,39,0.25)" }}>
                    {p.n}
                  </span>
                  <span className="font-medium text-ink">{p.title}</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-ink/40">{p.ato.split("·")[0].trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Method() {
  return (
    <>
      <MethodMobile />
      <MethodDesktop />
    </>
  );
}
