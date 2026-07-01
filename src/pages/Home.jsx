import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "../components/Nav.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Marquee from "../components/Marquee.jsx";
import Magnetic from "../components/Magnetic.jsx";
import Blend from "../components/Blend.jsx";
import AnimatedGridPattern from "../components/AnimatedGridPattern.jsx";
import Systems from "../sections/Systems.jsx";
import PainCards from "../sections/PainCards.jsx";
import Method from "../sections/Method.jsx";
import Mentoria from "../sections/Mentoria.jsx";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 pb-16 pt-28 md:px-8">
      <AnimatedGridPattern
        numSquares={38}
        maxOpacity={0.16}
        duration={3.5}
        className="[mask-image:radial-gradient(700px_circle_at_72%_38%,white,transparent)]"
      />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        <RevealGroup stagger={0.14}>
          <RevealItem>
            <span className="overline text-gold">
              CEO da Zephyr Investimentos
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.06] text-offwhite sm:text-5xl md:text-6xl">
              Da assessoria de alto nível à{" "}
              <span className="text-gold">construção de sistemas.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 max-w-md text-base text-offwhite/70 md:text-lg">
              Construí 4 SaaS do zero, sozinho, com IA, de forma repetível. Agora
              ensino o método, da ideia ao infoproduto.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic href="#zephyr" className="inline-flex rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:opacity-90">
                Falar com a Zephyr
              </Magnetic>
              <Magnetic href="#mentoria" className="inline-flex rounded-full border border-offwhite/25 px-6 py-3 font-medium text-offwhite transition hover:border-gold hover:text-gold">
                Conhecer a mentoria
              </Magnetic>
            </div>
          </RevealItem>
        </RevealGroup>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative order-first aspect-[4/5] overflow-hidden rounded-2xl border border-offwhite/10 md:order-none"
        >
          <motion.div style={{ y: photoY, scale: photoScale }} className="absolute -inset-[8%]">
            <img
              src="/img/walter-hero.webp"
              alt="Walter Espíndola, CEO da Zephyr Investimentos"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(27,27,26,0.55), transparent 55%)" }}
          />
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
    <section id="virada" className="bg-ink px-6 py-24 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="overline text-gold/80">03 · A virada</span>
        </Reveal>
        <RevealGroup stagger={0.18} className="mt-6">
          {lines.map((l) => (
            <RevealItem key={l.t} y={30}>
              <p className={`font-serif text-2xl font-medium leading-snug sm:text-3xl md:text-4xl ${l.gold ? "text-gold" : "text-offwhite"}`}>
                {l.t}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div id="top">
      <ScrollProgress />
      <Nav />
      <Hero />

      <Marquee items={["Da ideia ao infoproduto", "Construído com IA", "Sem programar", "Repetível"]} />

      {/* 02 AUTORIDADE / HISTÓRIA, seção clara (editorial) */}
      <section id="zephyr" className="relative overflow-hidden bg-offwhite px-6 py-24 text-ink md:px-8">
        <Blend from="ink" edge="top" />
        <Blend from="ink" edge="bottom" />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1.1fr_.9fr] md:items-center md:gap-14">
          <div>
            <Reveal>
              <span className="overline text-[#a07d2c]">02 · Autoridade</span>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Aprendi na marra que <span className="text-[#a07d2c]">plano é tudo.</span>
              </h2>
            </Reveal>
            <RevealGroup stagger={0.14} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
              <RevealItem>
                <p>Cresci numa pousada no litoral de Santa Catarina. Meus pais tocaram o negócio por 25 anos, sem nunca ter um plano. Em 2020, fechou.</p>
              </RevealItem>
              <RevealItem>
                <p>No segundo mês da pandemia, a pergunta virou minha: <em>"E agora? Estamos fazendo certo?"</em></p>
              </RevealItem>
              <RevealItem>
                <p>Comecei a construir um sistema pra responder isso, primeiro pra mim e minha esposa, depois pra família e amigos. Esse sistema virou o Atlas, e o método que hoje uso com mais de 300 famílias.</p>
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

            <RevealGroup stagger={0.1} className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              {[
                { num: <Counter to={10} suffix="+" />, lbl: "anos de mercado" },
                { num: <Counter to={300} suffix="+" />, lbl: "famílias" },
                { num: <Counter to={100} prefix="R$" suffix="M" />, lbl: "sob gestão" },
              ].map((s, i) => (
                <RevealItem key={i}>
                  <div className="font-serif text-3xl font-semibold text-[#a07d2c] md:text-4xl">{s.num}</div>
                  <div className="mt-1 overline text-ink/50" style={{ fontSize: "0.62rem" }}>{s.lbl}</div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-ink/10">
              <img
                src="/img/walter-historia.webp"
                alt="Walter Espíndola"
                className="aspect-[4/5] w-full object-cover object-center md:aspect-auto md:h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Virada />

      {/* 04 OS SISTEMAS */}
      <Systems />

      {/* faixa-resumo */}
      <section className="bg-navy px-6 pb-20 pt-2 md:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 rounded-2xl border border-offwhite/10 bg-ink/40 px-6 py-8 text-center md:gap-10 md:px-8">
          {[["4", "apps no ar + 1 ao vivo"], ["1", "pessoa construindo"], ["0", "linhas escritas à mão"]].map(([num, lbl]) => (
            <div key={lbl}>
              <div className="font-serif text-4xl font-semibold text-gold">{num}</div>
              <div className="mt-1 overline text-offwhite/50">{lbl}</div>
            </div>
          ))}
          <p className="max-w-xs text-left text-sm text-offwhite/60">
            A mesma receita, repetida 4 vezes. É exatamente isso que eu ensino.
          </p>
        </Reveal>
      </section>

      {/* pain cards (feel da Gabriela) */}
      <PainCards />

      {/* 05 MÉTODO */}
      <Method />

      {/* 06 MENTORIA */}
      <Mentoria />

      {/* 07 CONTATO */}
      <section id="contato" className="bg-ink px-6 py-20 md:px-8">
        <Reveal className="mx-auto max-w-6xl text-center">
          <span className="overline text-gold/80">07 · Contato</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-offwhite md:text-5xl">Dois caminhos. Escolha o seu.</h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-offwhite/10 p-8">
              <h3 className="font-serif text-2xl text-offwhite">Cliente Zephyr</h3>
              <a href="mailto:walterjoose@gmail.com?subject=Quero%20conhecer%20a%20assessoria%20Zephyr" className="mt-4 inline-block rounded-full border border-offwhite/25 px-5 py-2.5 text-sm text-offwhite transition hover:border-gold hover:text-gold">Falar com a Zephyr →</a>
            </div>
            <div className="rounded-xl border border-gold/40 p-8">
              <h3 className="font-serif text-2xl text-offwhite">Aluno da mentoria</h3>
              <a href="mailto:walterjoose@gmail.com?subject=Quero%20entrar%20na%20mentoria" className="mt-4 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition hover:opacity-90">Entrar na mentoria →</a>
            </div>
          </div>
          <p className="mt-10 font-mono text-xs text-offwhite/40">© 2026 Walter Espíndola · CTA a definir (WhatsApp / e-mail / Calendly) · Fase 2: liga no funil /aplicar</p>
        </Reveal>
      </section>
    </div>
  );
}
