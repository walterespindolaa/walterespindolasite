import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "./lib/useLenis.js";
import Nav from "./components/Nav.jsx";
import Reveal, { RevealGroup, RevealItem } from "./components/Reveal.jsx";
import Counter from "./components/Counter.jsx";
import Systems from "./sections/Systems.jsx";
import Method from "./sections/Method.jsx";
import Mentoria from "./sections/Mentoria.jsx";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-ink px-8 pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <RevealGroup stagger={0.14}>
          <RevealItem>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              CEO da Zephyr Investimentos
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] text-offwhite md:text-6xl">
              Da assessoria de alto nível à{" "}
              <span className="text-gold">construção de sistemas.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 max-w-md text-lg text-offwhite/70">
              Construí 4 SaaS do zero, sozinho, com IA — de forma repetível. Agora
              ensino o método, da ideia ao infoproduto.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#zephyr" className="rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:opacity-90">
                Falar com a Zephyr
              </a>
              <a href="#mentoria" className="rounded-full border border-offwhite/25 px-6 py-3 font-medium text-offwhite transition hover:border-gold hover:text-gold">
                Conhecer a mentoria
              </a>
            </div>
          </RevealItem>
        </RevealGroup>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-offwhite/20 bg-navy/40 font-mono text-xs text-offwhite/40"
          >
            FOTO RECORTADA (Walter)
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Virada() {
  const lines = [
    { t: "Percebi que resolvia as dores dos meus clientes", gold: false },
    { t: "construindo sistemas.", gold: true },
    { t: "Sozinho, com IA, de forma repetível.", gold: false },
  ];
  return (
    <section id="virada" className="bg-ink px-8 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-gold/80">03 · A virada</span>
        </Reveal>
        <RevealGroup stagger={0.18} className="mt-6">
          {lines.map((l) => (
            <RevealItem key={l.t} y={30}>
              <p className={`font-serif text-3xl font-medium leading-snug md:text-4xl ${l.gold ? "text-gold" : "text-offwhite"}`}>
                {l.t}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default function App() {
  useLenis();

  return (
    <div id="top">
      <Nav />
      <Hero />

      {/* 02 AUTORIDADE / HISTÓRIA — seção clara (editorial) */}
      <section id="zephyr" className="bg-offwhite px-8 py-24 text-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-[#a07d2c]">02 · Autoridade</span>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Aprendi na marra que <span className="text-[#a07d2c]">plano é tudo.</span>
              </h2>
            </Reveal>
            <RevealGroup stagger={0.14} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
              <RevealItem>
                <p>Cresci numa pousada no litoral de Santa Catarina. Meus pais tocaram o negócio por 25 anos — sem nunca ter um plano. Em 2020, fechou.</p>
              </RevealItem>
              <RevealItem>
                <p>No segundo mês da pandemia, a pergunta virou minha: <em>"E agora? Estamos fazendo certo?"</em></p>
              </RevealItem>
              <RevealItem>
                <p>Comecei a construir um sistema pra responder isso — primeiro pra mim e minha esposa, depois pra família e amigos. Esse sistema virou o Atlas, e o método que hoje uso com mais de 300 famílias.</p>
              </RevealItem>
              <RevealItem>
                <p className="font-medium text-ink">Foi aí que entendi: eu resolvo dores construindo sistemas. Hoje, à frente da Zephyr, cuido de quem tem muito a perder.</p>
              </RevealItem>
            </RevealGroup>
            <Reveal delay={0.1}>
              <a href="#contato" className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-offwhite transition hover:bg-navy">
                Quero uma assessoria de verdade →
              </a>
            </Reveal>
          </div>

          <RevealGroup stagger={0.12} className="grid grid-cols-1 gap-4">
            {[
              { num: <Counter to={10} suffix="+" />, lbl: "anos no mercado financeiro" },
              { num: <Counter to={300} suffix="+" />, lbl: "famílias planejadas" },
              { num: <Counter to={100} prefix="R$" suffix="M" />, lbl: "sob gestão (a confirmar)" },
            ].map((s, i) => (
              <RevealItem key={i}>
                <div className="flex items-baseline gap-4 rounded-xl border border-ink/10 bg-white/50 px-6 py-5">
                  <div className="font-serif text-4xl font-semibold text-[#a07d2c]">{s.num}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-ink/55">{s.lbl}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Virada />

      {/* 04 OS SISTEMAS — MacBook + fita horizontal */}
      <Systems />

      {/* faixa-resumo (números como feito) */}
      <section className="bg-navy px-8 pb-20 pt-2">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 rounded-2xl border border-offwhite/10 bg-ink/40 px-8 py-8 text-center">
          {[["4", "apps no ar + 1 ao vivo"], ["1", "pessoa construindo"], ["0", "linhas escritas à mão"]].map(([num, lbl]) => (
            <div key={lbl}>
              <div className="font-serif text-4xl font-semibold text-gold">{num}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-offwhite/50">{lbl}</div>
            </div>
          ))}
          <p className="max-w-xs text-left text-sm text-offwhite/60">
            A mesma receita, repetida 4 vezes. É exatamente isso que eu ensino.
          </p>
        </Reveal>
      </section>

      {/* 05 MÉTODO — sticky scroll */}
      <Method />

      {/* 06 MENTORIA — stacking cards */}
      <Mentoria />

      {/* 07 CONTATO */}
      <section id="contato" className="bg-ink px-8 py-20">
        <Reveal className="mx-auto max-w-6xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/80">07 · Contato</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-offwhite md:text-5xl">Dois caminhos. Escolha o seu.</h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-offwhite/10 p-8">
              <h3 className="font-serif text-2xl text-offwhite">Cliente Zephyr</h3>
              <a href="#" className="mt-4 inline-block rounded-full border border-offwhite/25 px-5 py-2.5 text-sm text-offwhite transition hover:border-gold hover:text-gold">Falar com a Zephyr →</a>
            </div>
            <div className="rounded-xl border border-gold/40 p-8">
              <h3 className="font-serif text-2xl text-offwhite">Aluno da mentoria</h3>
              <a href="#" className="mt-4 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition hover:opacity-90">Entrar na mentoria →</a>
            </div>
          </div>
          <p className="mt-10 font-mono text-xs text-offwhite/40">© 2026 Walter Espíndola · CTA a definir (WhatsApp / e-mail / Calendly) · Fase 2: liga no funil /aplicar</p>
        </Reveal>
      </section>
    </div>
  );
}
