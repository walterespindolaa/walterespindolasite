import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal.jsx";
import { openContact } from "../components/ContactModal.jsx";

const GOLD = "#a07d2c";

const modulos = [
  {
    ato: "Ato 1 · Ideia & Marca",
    aulas: [
      ["00", "Faísca", "Validar a dor e o posicionamento antes de qualquer tela."],
      ["01", "Marca", "Nome, domínio e brand kit com IA."],
      ["02", "Escopo", "As telas essenciais e o fluxo principal."],
    ],
  },
  {
    ato: "Ato 2 · Construção",
    aulas: [
      ["03", "Lovable", "Seu app navegável no ar, sem código."],
      ["04", "Supabase", "Dados, login, RLS e segredos, a fundação."],
      ["05", "IA no core", "A feature de IA com cota, via Edge Function."],
    ],
  },
  {
    ato: "Ato 3 · Dinheiro & Venda",
    aulas: [
      ["06", "Pagamento", "Checkout, webhook e planos que cobram."],
      ["07", "Blindar", "Claude Code: auditoria e teste de carga."],
      ["08", "Lançar", "Landing, pixel e campanha. No ar, cobrando."],
      ["09", "Infoproduto", "Empacotar o seu método e vender (bônus)."],
    ],
  },
];

const encontros = [
  ["01", "Faísca & Escopo", "Brainstorm da sua ideia, valida a dor e define as telas essenciais."],
  ["02", "Construção", "App navegável no ar (Lovable) + a fundação (Supabase)."],
  ["03", "IA & Pagamento", "A feature de IA que diferencia + a cobrança funcionando."],
  ["04", "Blindar & Lançar", "Auditoria, landing e o seu sistema no ar, cobrando."],
];

const faq = [
  ["Preciso saber programar?", "Não. O método inteiro é construído com IA, sem escrever código à mão. Foi assim que construí os meus 4 sistemas."],
  ["Quanto tempo leva?", "O curso é no seu ritmo. A mentoria 1:1 são 4 encontros, um por semana. A ideia é você terminar com um sistema no ar, não com teoria."],
  ["Qual a diferença entre curso e mentoria?", "No curso você aprende sozinho com as aulas gravadas. Na mentoria 1:1 a gente constrói junto, com dois cérebros no brainstorm da sua ideia."],
  ["Serve pra qualquer ideia?", "Serve pra quem tem uma ideia de produto/SaaS e quer tirar do papel. A receita é a mesma que repeti 4 vezes."],
];

function Caminho({ tag, nome, desc, bullets, solid, cta }) {
  return (
    <div
      className="flex h-full flex-col rounded-2xl border p-8"
      style={{
        borderColor: solid ? "rgba(160,125,44,0.5)" : "rgba(27,27,26,0.12)",
        background: solid ? "rgba(160,125,44,0.06)" : "transparent",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="overline" style={{ color: GOLD }}>{nome}</span>
        <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase" style={{ background: "rgba(160,125,44,0.15)", color: GOLD }}>{tag}</span>
      </div>
      <h3 className="mt-2 font-serif text-3xl font-semibold text-ink">{nome}</h3>
      <p className="mt-3 text-ink/70">{desc}</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
            <span className="mt-0.5" style={{ color: GOLD }}>→</span> {b}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between gap-4">
        <span className="font-mono text-sm text-ink/45">Investimento sob consulta</span>
        <button onClick={() => openContact("mentoria")} className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${solid ? "bg-[#a07d2c] text-white hover:opacity-90" : "border border-ink/25 text-ink hover:border-[#a07d2c] hover:text-[#a07d2c]"}`}>
          {cta} →
        </button>
      </div>
    </div>
  );
}

export default function MentoriaPage() {
  return (
    <div className="bg-offwhite text-ink">
      <ScrollProgress />
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl" style={{ background: "#C9A24B" }} />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <Link to="/#mentoria" className="text-sm text-ink/45 transition-colors hover:text-[#a07d2c]">← Início</Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="mt-8 block overline" style={{ color: GOLD }}>A mentoria</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.02] text-ink md:text-7xl">
              Da Ideia ao Sistema <span style={{ color: GOLD }}>em 24 horas.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">
              24 horas de execução guiada, não de teoria. Você sai com um produto real no ar, cobrando, construído com IA, sem saber programar. A mesma receita que usei pra criar meus 4 sistemas.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <button onClick={() => openContact("mentoria")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-offwhite transition hover:bg-navy">
              Quero participar <span aria-hidden>→</span>
            </button>
          </Reveal>
        </div>
      </header>

      {/* PROMESSA — faixa escura */}
      <section className="bg-navy px-6 py-20 text-offwhite md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl font-medium leading-snug md:text-4xl">
            Todo mundo tem ideia. Quase ninguém tem <span className="text-gold">método</span>. Eu te dou o caminho repetível, do zero ao no ar.
          </p>
        </div>
      </section>

      {/* PRA QUEM */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <span className="overline" style={{ color: GOLD }}>É pra você se…</span>
            <ul className="mt-5 space-y-3 text-lg text-ink/80">
              {["Tem uma ideia mas não sabe por onde começar", "Não sabe programar e isso sempre travou", "Quer usar IA de verdade, não só brincar", "Quer sair com algo no ar, não com um certificado"].map((t) => (
                <li key={t} className="flex gap-3"><span style={{ color: GOLD }}>→</span> {t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="overline text-ink/40">Não é pra você se…</span>
            <ul className="mt-5 space-y-3 text-lg text-ink/50">
              {["Quer teoria e não quer executar", "Não tem nenhuma ideia pra tirar do papel", "Busca um atalho mágico sem colocar a mão"].map((t) => (
                <li key={t} className="flex gap-3"><span>·</span> {t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 2 CAMINHOS */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="overline" style={{ color: GOLD }}>Dois jeitos de entrar</span>
            <h2 className="mt-2 max-w-2xl font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">Aprenda sozinho, ou construa comigo.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <Caminho
                tag="No seu ritmo"
                nome="Curso"
                desc="Da ideia ao sistema, com aulas gravadas das 9 fases. Você assiste, executa e coloca no ar."
                bullets={["As 9 fases em aula, passo a passo", "Kit de prompts pra copiar em cada fase", "Os 4 apps reais como exemplo", "Acesso no seu ritmo"]}
                cta="Quero o curso"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Caminho
                tag="Comigo · poucas vagas"
                nome="Mentoria 1:1"
                desc="Dois cérebros no brainstorm da sua ideia. 4 encontros ao vivo, construindo junto até o seu sistema no ar."
                bullets={["4 encontros de 1h a 1h30 (1 por semana)", "Brainstorm e construção da SUA ideia", "Acompanhamento direto comigo", "Do zero ao lançamento"]}
                solid
                cta="Quero a mentoria"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CURRÍCULO DO CURSO */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="overline" style={{ color: GOLD }}>O que você aprende</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-ink md:text-5xl">3 atos, 9 fases, 1 sistema no ar.</h2>
          </Reveal>
          <div className="mt-12 space-y-12">
            {modulos.map((m) => (
              <Reveal key={m.ato}>
                <div className="overline mb-4 text-ink/40">{m.ato}</div>
                <div className="divide-y divide-ink/10 border-y border-ink/10">
                  {m.aulas.map(([n, t, d]) => (
                    <div key={n} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-4 md:grid-cols-[3rem_12rem_1fr] md:gap-8">
                      <span className="font-mono text-sm" style={{ color: `${GOLD}b3` }}>{n}</span>
                      <span className="font-serif text-xl font-semibold text-ink">{t}</span>
                      <span className="col-span-2 text-sm text-ink/60 md:col-span-1">{d}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORIA 1:1 — os 4 encontros */}
      <section className="bg-navy px-6 py-20 text-offwhite md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="overline text-gold/80">A mentoria 1:1, encontro a encontro</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-offwhite md:text-5xl">4 semanas, do brainstorm ao no ar.</h2>
          </Reveal>
          <RevealGroup stagger={0.08} className="mt-10 grid gap-4 sm:grid-cols-2">
            {encontros.map(([n, t, d]) => (
              <RevealItem key={n}>
                <div className="rounded-xl border border-offwhite/10 bg-ink/30 p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl font-semibold text-gold">{n}</span>
                    <h3 className="font-serif text-xl font-semibold text-offwhite">{t}</h3>
                  </div>
                  <p className="mt-2 text-offwhite/70">{d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-6 text-sm text-offwhite/50">Encontros de 1h a 1h30, um por semana. Poucas vagas por vez, pra atenção real.</p>
        </div>
      </section>

      {/* PROVA */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="overline" style={{ color: GOLD }}>Por que aprender comigo</span>
            <h2 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink md:text-5xl">Eu não só ensino. Eu construí 4 vezes.</h2>
            <p className="mt-4 max-w-xl text-ink/70">Atlas, Zephyr, PeJota e Cria: quatro SaaS completos, do zero, sozinho, com IA. O método é a receita que se repetiu em todos.</p>
            <Link to="/#sistemas" className="mt-6 inline-flex items-center gap-2 border-b-2 pb-1 font-medium text-ink transition-colors hover:text-[#a07d2c]" style={{ borderColor: GOLD }}>
              Ver os sistemas <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal><span className="overline" style={{ color: GOLD }}>Dúvidas</span></Reveal>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {faq.map(([q, a]) => (
              <Reveal key={q}>
                <div className="py-6">
                  <h3 className="font-serif text-xl font-semibold text-ink">{q}</h3>
                  <p className="mt-2 text-ink/65">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-navy px-6 py-24 text-center text-offwhite md:px-10">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">Sua ideia merece sair do papel.</h2>
          <p className="mt-4 text-offwhite/70">Me conta o que você quer construir. A gente decide juntos o melhor caminho, curso ou mentoria.</p>
          <button onClick={() => openContact("mentoria")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-medium text-ink transition hover:opacity-90">
            Quero começar <span aria-hidden>→</span>
          </button>
          <div className="mt-10">
            <Link to="/" className="text-sm text-offwhite/50 transition hover:text-gold">← Voltar ao início</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
