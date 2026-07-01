import { useLenis } from "./lib/useLenis.js";
import Nav from "./components/Nav.jsx";
import Systems from "./sections/Systems.jsx";

/* Stub de seção — placeholder premium enquanto preenchemos o conteúdo real */
function SectionStub({ id, n, kicker, title, children, tone = "ink" }) {
  const bg = tone === "navy" ? "bg-navy" : "bg-ink";
  return (
    <section id={id} className={`${bg} px-8 py-28`}>
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-widest text-gold/80">
          {n} · {kicker}
        </span>
        <h2 className="mt-2 max-w-3xl font-serif text-4xl font-semibold leading-tight text-offwhite md:text-5xl">
          {title}
        </h2>
        <div className="mt-8 text-offwhite/60">{children}</div>
      </div>
    </section>
  );
}

function Placeholder({ label }) {
  return (
    <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-offwhite/20 font-mono text-xs text-offwhite/40">
      {label}
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <div id="top">
      <Nav />

      {/* 01 HERO */}
      <section className="relative flex min-h-screen items-center bg-ink px-8 pt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              CEO da Zephyr Investimentos
            </span>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] text-offwhite md:text-6xl">
              Da assessoria de alto nível à{" "}
              <span className="text-gold">construção de sistemas.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-offwhite/70">
              Construí 4 SaaS do zero, sozinho, com IA — de forma repetível. Agora
              ensino o método, da ideia ao infoproduto.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#zephyr" className="rounded-full bg-gold px-6 py-3 font-medium text-ink hover:opacity-90 transition">
                Falar com a Zephyr
              </a>
              <a href="#mentoria" className="rounded-full border border-offwhite/25 px-6 py-3 font-medium text-offwhite hover:border-gold hover:text-gold transition">
                Conhecer a mentoria
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-2xl border border-dashed border-offwhite/20 flex items-center justify-center font-mono text-xs text-offwhite/40">
            FOTO RECORTADA (Walter)
          </div>
        </div>
      </section>

      {/* 02 AUTORIDADE / ZEPHYR */}
      <SectionStub id="zephyr" n="02" kicker="Autoridade" title="10+ anos cuidando de quem tem muito a perder." tone="navy">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[["10+", "anos de mercado"], ["R$100M", "sob gestão (a confirmar)"], ["Poucos", "clientes, alto toque"]].map(([num, lbl]) => (
            <div key={lbl} className="rounded-xl border border-offwhite/10 p-6 text-center">
              <div className="font-serif text-4xl font-semibold text-gold">{num}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-offwhite/50">{lbl}</div>
            </div>
          ))}
        </div>
      </SectionStub>

      {/* 03 A VIRADA */}
      <section id="virada" className="bg-ink px-8 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/80">03 · A virada</span>
          <p className="mt-6 font-serif text-3xl font-medium leading-snug text-offwhite md:text-4xl">
            "Percebi que resolvia as dores dos meus clientes{" "}
            <span className="text-gold">construindo sistemas</span> — sozinho, com IA,
            de forma repetível."
          </p>
        </div>
      </section>

      {/* 04 OS SISTEMAS — seção-âncora (scroll horizontal + MacBook) */}
      <Systems />

      {/* faixa-resumo (números como feito, não como spec) */}
      <section className="bg-navy px-8 pb-28 pt-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 rounded-2xl border border-offwhite/10 bg-ink/40 px-8 py-8 text-center">
          {[["4", "apps no ar + 1 ao vivo"], ["1", "pessoa construindo"], ["0", "linhas escritas à mão"]].map(([num, lbl]) => (
            <div key={lbl}>
              <div className="font-serif text-4xl font-semibold text-gold">{num}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-offwhite/50">{lbl}</div>
            </div>
          ))}
          <p className="max-w-xs text-left text-sm text-offwhite/60">
            A mesma receita, repetida 4 vezes. É exatamente isso que eu ensino.
          </p>
        </div>
      </section>

      {/* 05 MÉTODO */}
      <SectionStub id="metodo" n="05" kicker="O método" title="Da ideia ao infoproduto — 3 atos, 9 fases.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Placeholder label="ATO 1 · Ideia & Marca (0–2)" />
          <Placeholder label="ATO 2 · Construção (3–5)" />
          <Placeholder label="ATO 3 · Dinheiro & Venda (6–9)" />
        </div>
        <p className="mt-6 font-mono text-xs text-offwhite/40">motion planejado: Sticky Scroll + Timeline</p>
      </SectionStub>

      {/* 06 MENTORIA */}
      <SectionStub id="mentoria" n="06" kicker="A ponte" title="Aprenda o método. Termine com algo no ar." tone="navy">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Placeholder label="Nível 1 · Self-service" />
          <Placeholder label="Nível 2 · Grupo" />
          <Placeholder label="Nível 3 · Individual (done-with-you)" />
        </div>
        <p className="mt-6 font-mono text-xs text-offwhite/40">motion planejado: Stacking cards</p>
      </SectionStub>

      {/* 07 CONTATO */}
      <section id="contato" className="bg-ink px-8 py-28">
        <div className="mx-auto max-w-6xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/80">07 · Contato</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-offwhite md:text-5xl">Dois caminhos. Escolha o seu.</h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-offwhite/10 p-8">
              <h3 className="font-serif text-2xl text-offwhite">Cliente Zephyr</h3>
              <a href="#" className="mt-4 inline-block rounded-full border border-offwhite/25 px-5 py-2.5 text-sm text-offwhite hover:border-gold hover:text-gold transition">Falar com a Zephyr →</a>
            </div>
            <div className="rounded-xl border border-gold/40 p-8">
              <h3 className="font-serif text-2xl text-offwhite">Aluno da mentoria</h3>
              <a href="#" className="mt-4 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:opacity-90 transition">Entrar na mentoria →</a>
            </div>
          </div>
          <p className="mt-10 font-mono text-xs text-offwhite/40">© 2026 Walter Espíndola · CTA a definir (WhatsApp / e-mail / Calendly) · Fase 2: liga no funil /aplicar</p>
        </div>
      </section>
    </div>
  );
}
