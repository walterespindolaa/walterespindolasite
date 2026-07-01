import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { openContact } from "../components/ContactModal.jsx";

const tiers = [
  {
    tag: "No seu ritmo",
    nome: "Curso",
    desc: "Da ideia ao sistema, com aulas gravadas das 9 fases. Você assiste, executa e coloca no ar.",
    bullets: ["As 9 fases em aula, passo a passo", "Kit de prompts pra copiar", "Os 4 apps como exemplo real"],
    bg: "#0E2A47",
    solid: false,
  },
  {
    tag: "Comigo, poucas vagas",
    nome: "Mentoria 1:1",
    desc: "Dois cérebros no brainstorm da sua ideia. 4 encontros ao vivo, construindo junto até o seu sistema no ar.",
    bullets: ["4 encontros de 1h a 1h30 (1 por semana)", "Do brainstorm ao sistema no ar", "Acompanhamento direto comigo"],
    bg: "#0b0b0b",
    solid: true,
  },
];

export default function Mentoria() {
  return (
    <section id="mentoria" className="bg-navy px-6 pb-24 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="overline text-gold/80">06 · A mentoria</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-offwhite md:text-5xl">
            Da Ideia ao Sistema em 24 horas.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
            Aprenda o método no curso, ou construa junto comigo na mentoria. Você termina com um produto no ar, cobrando.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        {tiers.map((t, i) => (
          <div
            key={t.nome}
            className="sticky mx-auto"
            style={{ top: `${100 + i * 28}px`, marginBottom: "2rem", zIndex: i + 1 }}
          >
            <div
              className="rounded-3xl border p-8 md:p-10"
              style={{
                background: t.bg,
                borderColor: t.solid ? "rgba(201,162,75,0.5)" : "rgba(244,240,231,0.12)",
                boxShadow: "0 30px 60px -30px rgba(0,0,0,0.8)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="overline text-gold">{t.nome}</span>
                <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase text-gold">
                  {t.tag}
                </span>
              </div>
              <h3 className="mt-2 font-serif text-3xl font-semibold text-offwhite md:text-4xl">{t.nome}</h3>
              <p className="mt-3 max-w-lg text-offwhite/70">{t.desc}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-offwhite/85">
                    <span className="mt-0.5 text-gold">→</span> {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openContact("mentoria")}
                className={`mt-8 inline-flex rounded-full px-6 py-3 text-sm font-medium transition ${
                  t.solid
                    ? "bg-gold text-ink hover:opacity-90"
                    : "border border-offwhite/25 text-offwhite hover:border-gold hover:text-gold"
                }`}
              >
                Quero {t.solid ? "a mentoria" : "o curso"} →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link to="/mentoria" className="inline-flex items-center gap-2 text-sm text-offwhite/70 transition hover:text-gold">
          Ver a mentoria completa <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
