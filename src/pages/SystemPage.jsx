import { useParams, Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Reveal from "../components/Reveal.jsx";
import { systems, getSystem } from "../data/systems.js";

/* rótulo de índice editorial: número dourado + label discreto (sem pílula) */
function Index({ n, children }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="font-mono text-gold">{n}</span>
      <span className="h-px w-8 bg-gold/40" />
      <span className="uppercase tracking-[0.2em] text-offwhite/45" style={{ fontSize: "0.72rem" }}>
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
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink text-offwhite">
        <p className="font-serif text-2xl">Sistema não encontrado.</p>
        <Link to="/" className="mt-4 text-gold underline">Voltar ao início</Link>
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
    <div className="bg-ink text-offwhite">
      <ScrollProgress />
      <Nav />

      {/* HERO editorial assimétrico */}
      <header className="relative overflow-hidden px-6 pt-32 md:px-10 md:pt-40">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
          style={{ background: s.accent }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Link to="/#sistemas" className="text-sm text-offwhite/45 transition-colors hover:text-gold">
              ← Sistemas
            </Link>
          </Reveal>

          <div className="mt-12 border-b border-white/10 pb-10">
            <div className="flex items-baseline justify-between">
              <Reveal>
                <span className="uppercase tracking-[0.22em] text-offwhite/50" style={{ fontSize: "0.74rem" }}>
                  {s.tag}
                </span>
              </Reveal>
              <span className="font-mono text-sm text-offwhite/30">
                {String(idx).padStart(2, "0")} / {total}
              </span>
            </div>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-serif text-[15vw] font-semibold leading-[0.9] text-white md:text-[8rem]">
                {s.name}
                {s.live && <span className="ml-4 align-middle text-2xl text-gold">● ao vivo</span>}
              </h1>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <Reveal delay={0.1}>
              <p className="font-serif text-3xl italic leading-tight text-offwhite/75 md:text-4xl">
                “{s.dor}”
              </p>
              <p className="mt-4 max-w-lg text-lg text-offwhite/55">{s.solucao}</p>
            </Reveal>

            {/* ficha técnica */}
            <Reveal delay={0.15}>
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-white/5">
                {meta.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 bg-ink px-4 py-3">
                    <dt className="text-xs uppercase tracking-widest text-offwhite/40">{k}</dt>
                    <dd className="text-right text-sm text-offwhite/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* preview */}
          <Reveal delay={0.2}>
            <div className="mt-16">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b]">
                <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-offwhite/30">{s.name.toLowerCase()}.app</span>
                </div>
                <div className="flex aspect-[16/8] items-center justify-center font-mono text-xs text-offwhite/25">
                  SCREENSHOT REAL DO {s.name.toUpperCase()}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* A IDEIA — pull quote editorial */}
      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Index n="01">A ideia por trás</Index>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 font-serif text-3xl font-medium leading-[1.35] text-offwhite md:text-[2.6rem]">
              <span className="text-gold">“</span>
              {s.ideia}
              <span className="text-gold">”</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-offwhite/40">Walter Espíndola — idealizador e construtor</p>
          </Reveal>
        </div>
      </section>

      {/* A DOR */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <Index n="02">A dor que resolvi</Index>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-serif text-2xl leading-snug text-offwhite/90 md:text-[2rem]">{s.dorLong}</p>
          </Reveal>
        </div>
      </section>

      {/* O QUE CONSTRUÍ — lista editorial numerada */}
      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Index n="03">O que construí pra resolver</Index>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-offwhite md:text-5xl">
              Cada peça mira um pedaço da dor.
            </h2>
          </Reveal>

          <div className="mt-14">
            {s.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-white/10 py-8 md:grid-cols-[3rem_1fr_auto] md:gap-x-10">
                  <span className="font-mono text-sm text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-offwhite md:text-[1.7rem]">{f.title}</h3>
                    <p className="mt-2 max-w-xl text-offwhite/60">{f.desc}</p>
                  </div>
                  {f.resolve && (
                    <span className="col-start-2 text-sm text-offwhite/40 md:col-start-3 md:pt-1 md:text-right">
                      resolve <span className="text-offwhite/70">{f.resolve}</span>
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      {s.impacto && (
        <section className="border-t border-white/10 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-16">
              <Reveal>
                <Index n="04">E funciona</Index>
                <div className="mt-6 font-serif text-8xl font-semibold text-gold">{s.impacto.stat}</div>
                <div className="mt-2 max-w-[220px] text-offwhite/55">{s.impacto.statLabel}</div>
              </Reveal>
              <div className="space-y-8">
                {s.impacto.depoimentos.map((d, i) => (
                  <Reveal key={d.name} delay={i * 0.08}>
                    <figure className="border-l-2 border-gold/40 pl-6">
                      <blockquote className="font-serif text-xl italic leading-snug text-offwhite/90">
                        “{d.quote}”
                      </blockquote>
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
      <section className="border-t border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Index n={s.impacto ? "05" : "04"}>O tamanho do que construí</Index>
            <p className="mt-6 font-mono text-sm text-offwhite/55">{s.prova}</p>
            <p className="mt-4 max-w-md text-offwhite/70">
              Tudo do zero, sozinho, com IA — pela mesma receita que se repete em todos os sistemas.
            </p>
          </Reveal>
          {s.siteUrl && s.siteUrl !== "#" && (
            <Reveal delay={0.1}>
              <a
                href={s.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-lg font-medium text-offwhite transition-colors hover:text-gold"
              >
                Visitar o {s.name}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* OUTROS SISTEMAS */}
      <section className="border-t border-white/10 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs uppercase tracking-[0.2em] text-offwhite/40">Outros sistemas</span>
          <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {outros.map((o) => (
              <Link
                key={o.id}
                to={`/sistema/${o.id}`}
                className="group flex items-baseline justify-between py-5 transition-colors"
              >
                <span className="font-serif text-2xl text-offwhite transition-colors group-hover:text-gold md:text-3xl">
                  {o.name}
                </span>
                <span className="flex items-center gap-4 text-sm text-offwhite/40">
                  <span className="hidden sm:inline">{o.tag}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/" className="text-sm text-offwhite/45 transition-colors hover:text-gold">
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
