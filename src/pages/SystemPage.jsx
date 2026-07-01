import { useParams, Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Reveal from "../components/Reveal.jsx";
import { systems, getSystem } from "../data/systems.js";

const GOLD = "#a07d2c";

/* índice editorial: número dourado + filete + label discreto */
function Index({ n, children }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="font-mono" style={{ color: GOLD }}>{n}</span>
      <span className="h-px w-8" style={{ background: `${GOLD}66` }} />
      <span className="uppercase tracking-[0.2em] text-ink/45" style={{ fontSize: "0.72rem" }}>
        {children}
      </span>
    </div>
  );
}

export default function SystemPage() {
  const { id } = useParams();
  const s = getSystem(id);

  if (!s) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-offwhite text-ink">
        <p className="font-serif text-2xl">Sistema não encontrado.</p>
        <Link to="/" className="mt-4 underline" style={{ color: GOLD }}>Voltar ao início</Link>
      </div>
    );
  }

  const idx = systems.findIndex((x) => x.id === s.id) + 1;
  const total = String(systems.length).padStart(2, "0");
  const outros = systems.filter((x) => x.id !== s.id);

  const meta = [
    ["Categoria", s.tag],
    ["Papel", "Idealização + construção"],
    ["Stack", "Lovable · Supabase · IA"],
  ];

  return (
    <div className="bg-offwhite text-ink">
      <ScrollProgress />
      <Nav />

      {/* HERO editorial assimétrico */}
      <header className="relative overflow-hidden px-6 pt-32 md:px-10 md:pt-40">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: s.accent }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Link to="/#sistemas" className="text-sm text-ink/45 transition-colors hover:text-[#a07d2c]">
              ← Sistemas
            </Link>
          </Reveal>

          <div className="mt-12 border-b border-ink/10 pb-10">
            <div className="flex items-baseline justify-between">
              <Reveal>
                <span className="uppercase tracking-[0.22em] text-ink/50" style={{ fontSize: "0.74rem" }}>
                  {s.tag}
                </span>
              </Reveal>
              <span className="font-mono text-sm text-ink/30">
                {String(idx).padStart(2, "0")} / {total}
              </span>
            </div>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-serif text-[15vw] font-semibold leading-[0.9] text-ink md:text-[8rem]">
                {s.name}
                {s.live && <span className="ml-4 align-middle text-2xl" style={{ color: GOLD }}>● ao vivo</span>}
              </h1>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Reveal delay={0.1}>
              <p className="font-serif text-3xl italic leading-tight text-ink/80 md:text-4xl">“{s.dor}”</p>
              <p className="mt-4 max-w-lg text-lg text-ink/55">{s.solucao}</p>
            </Reveal>

            {/* ficha técnica */}
            <Reveal delay={0.15}>
              <dl className="divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white/40">
                {meta.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 px-4 py-3">
                    <dt className="text-xs uppercase tracking-widest text-ink/40">{k}</dt>
                    <dd className="text-right text-sm text-ink/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* preview (mockup escuro sobre fundo claro) */}
          <Reveal delay={0.2}>
            <div className="mt-16">
              <div className="overflow-hidden rounded-xl border border-ink/10 bg-[#0b0b0b] shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-white/30">{s.name.toLowerCase()}.app</span>
                </div>
                <div className="flex aspect-[16/8] items-center justify-center font-mono text-xs text-white/25">
                  SCREENSHOT REAL DO {s.name.toUpperCase()}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* A IDEIA, pull quote editorial */}
      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal><Index n="01">A ideia por trás</Index></Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 font-serif text-3xl font-medium leading-[1.35] text-ink md:text-[2.6rem]">
              <span style={{ color: GOLD }}>“</span>{s.ideia}<span style={{ color: GOLD }}>”</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-ink/40">Walter Espindola, idealizador e construtor</p>
          </Reveal>
        </div>
      </section>

      {/* A DOR */}
      <section className="border-t border-ink/10 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal><Index n="02">A dor que resolvi</Index></Reveal>
          <Reveal delay={0.05}>
            <p className="font-serif text-2xl leading-snug text-ink/90 md:text-[2rem]">{s.dorLong}</p>
          </Reveal>
        </div>
      </section>

      {/* O QUE CONSTRUÍ, lista editorial numerada */}
      <section className="border-t border-ink/10 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Index n="03">O que construí pra resolver</Index>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Cada peça mira um pedaço da dor.
            </h2>
          </Reveal>

          <div className="mt-14">
            {s.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-ink/10 py-8 md:grid-cols-[3rem_1fr_auto] md:gap-x-10">
                  <span className="font-mono text-sm" style={{ color: `${GOLD}b3` }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-ink md:text-[1.7rem]">{f.title}</h3>
                    <p className="mt-2 max-w-xl text-ink/60">{f.desc}</p>
                  </div>
                  {f.resolve && (
                    <span className="col-start-2 text-sm text-ink/40 md:col-start-3 md:pt-1 md:text-right">
                      resolve <span className="text-ink/75">{f.resolve}</span>
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO, faixa escura pra contraste */}
      {s.impacto && (
        <section className="bg-navy px-6 py-24 text-offwhite md:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-16">
              <Reveal>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-mono text-gold">04</span>
                  <span className="h-px w-8 bg-gold/40" />
                  <span className="uppercase tracking-[0.2em] text-offwhite/45" style={{ fontSize: "0.72rem" }}>E funciona</span>
                </div>
                <div className="mt-6 font-serif text-8xl font-semibold text-gold">{s.impacto.stat}</div>
                <div className="mt-2 max-w-[220px] text-offwhite/55">{s.impacto.statLabel}</div>
              </Reveal>
              <div className="space-y-8">
                {s.impacto.depoimentos.map((d, i) => (
                  <Reveal key={d.name} delay={i * 0.08}>
                    <figure className="border-l-2 border-gold/40 pl-6">
                      <blockquote className="font-serif text-xl italic leading-snug text-offwhite/90">“{d.quote}”</blockquote>
                      <figcaption className="mt-3 text-sm text-offwhite/45">{d.name}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROVA + CTA */}
      <section className="border-t border-ink/10 px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Index n={s.impacto ? "05" : "04"}>O tamanho do que construí</Index>
            <p className="mt-6 font-mono text-sm text-ink/55">{s.prova}</p>
            <p className="mt-4 max-w-md text-ink/70">
              Tudo do zero, sozinho, com IA, pela mesma receita que se repete em todos os sistemas.
            </p>
          </Reveal>
          {s.siteUrl && s.siteUrl !== "#" && (
            <Reveal delay={0.1}>
              <a
                href={s.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b-2 pb-1 text-lg font-medium text-ink transition-colors hover:text-[#a07d2c]"
                style={{ borderColor: GOLD }}
              >
                Visitar o {s.name}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* OUTROS SISTEMAS */}
      <section className="border-t border-ink/10 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs uppercase tracking-[0.2em] text-ink/40">Outros sistemas</span>
          <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {outros.map((o) => (
              <Link
                key={o.id}
                to={`/sistema/${o.id}`}
                className="group flex items-baseline justify-between py-5"
              >
                <span className="font-serif text-2xl text-ink transition-colors group-hover:text-[#a07d2c] md:text-3xl">
                  {o.name}
                </span>
                <span className="flex items-center gap-4 text-sm text-ink/40">
                  <span className="hidden sm:inline">{o.tag}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/" className="text-sm text-ink/45 transition-colors hover:text-[#a07d2c]">
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
