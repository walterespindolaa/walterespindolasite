import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../components/Nav.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal.jsx";
import { systems, getSystem } from "../data/systems.js";

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

  const outros = systems.filter((x) => x.id !== s.id);

  return (
    <div className="bg-ink text-offwhite">
      <ScrollProgress />
      <Nav />

      {/* HERO do sistema */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-8 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ background: `radial-gradient(60% 50% at 50% 0%, ${s.accent}, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <Link to="/#sistemas" className="font-mono text-xs uppercase tracking-widest text-offwhite/50 hover:text-gold">
              ← Sistemas
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-gold">{s.tag}</span>
              {s.live && (
                <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-ink">Ao vivo</span>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-6xl font-semibold md:text-7xl" style={{ color: "#fff" }}>
              {s.name}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl font-serif text-xl italic text-offwhite/60">"{s.dor}"</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-offwhite/80">{s.solucaoLong}</p>
          </Reveal>

          {/* preview (placeholder do screenshot) */}
          <Reveal delay={0.28}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="rounded-t-xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-2 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex aspect-[16/9] items-center justify-center rounded-lg bg-ink font-mono text-xs text-offwhite/30">
                  SCREENSHOT REAL DO {s.name.toUpperCase()}
                </div>
              </div>
              <div className="mx-auto h-3 w-[106%] -translate-x-[3%] rounded-b-xl bg-gradient-to-b from-[#d3d7dd] to-[#8b9098]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section className="border-t border-white/5 px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[200px_1fr] md:gap-12">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold/80">O problema</span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-serif text-2xl leading-snug text-offwhite md:text-3xl">{s.problema}</p>
          </Reveal>
        </div>
      </section>

      {/* A SOLUÇÃO + FEATURES */}
      <section className="border-t border-white/5 bg-navy px-6 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold/80">O que ele faz</span>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold text-offwhite md:text-4xl">{s.solucao}</h2>
          </Reveal>
          <RevealGroup stagger={0.08} className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.features.map((f) => (
              <RevealItem key={f.title}>
                <div className="h-full rounded-xl border border-offwhite/10 bg-ink/30 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.accent }} />
                    <h3 className="font-serif text-xl font-semibold text-offwhite">{f.title}</h3>
                  </div>
                  <p className="text-offwhite/70">{f.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* PROVA + CTA */}
      <section className="border-t border-white/5 px-6 py-20 md:px-8">
        <Reveal className="mx-auto max-w-5xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/80">A prova</span>
          <p className="mx-auto mt-3 max-w-2xl font-mono text-sm text-offwhite/60">{s.prova}</p>
          <p className="mx-auto mt-4 max-w-xl text-offwhite/70">
            Construído do zero, sozinho, com IA — pela mesma receita que se repete em todos.
          </p>
          {s.siteUrl && s.siteUrl !== "#" && (
            <a
              href={s.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:opacity-90"
            >
              Visitar o {s.name} <span aria-hidden>↗</span>
            </a>
          )}
        </Reveal>
      </section>

      {/* PRÓXIMOS SISTEMAS */}
      <section className="border-t border-white/5 bg-navy px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="font-mono text-xs uppercase tracking-widest text-gold/80">Outros sistemas</span>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outros.map((o) => (
              <Link
                key={o.id}
                to={`/sistema/${o.id}`}
                className="group rounded-xl border border-offwhite/10 p-5 transition-colors hover:border-gold"
              >
                <div className="font-serif text-xl font-semibold text-offwhite group-hover:text-gold">{o.name}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-offwhite/40">{o.tag}</div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/" className="font-mono text-xs uppercase tracking-widest text-offwhite/50 hover:text-gold">
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
