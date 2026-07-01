import Reveal from "../components/Reveal.jsx";

const tiers = [
  {
    nivel: "Nível 1",
    nome: "Self-service",
    desc: "O método gravado, com templates e prompts prontos pra copiar. No seu ritmo.",
    bullets: ["Aulas gravadas das 9 fases", "Kit de prompts por fase", "Comunidade de alunos"],
    bg: "#123457",
    solid: false,
  },
  {
    nivel: "Nível 2",
    nome: "Grupo",
    desc: "Calls ao vivo, cadência semanal e uma turma construindo junto com você.",
    bullets: ["Calls semanais ao vivo", "Revisão dos seus entregáveis", "Bastidor do SalvaReceitas ao vivo"],
    bg: "#0E2A47",
    solid: false,
  },
  {
    nivel: "Nível 3",
    nome: "Individual · done-with-you",
    desc: "A gente constrói o seu produto junto, do zero ao no ar. Poucas vagas.",
    bullets: ["Acompanhamento 1:1", "Construção guiada do seu app", "Da faísca ao lançamento"],
    bg: "#0b0b0b",
    solid: true,
  },
];

export default function Mentoria() {
  return (
    <section id="mentoria" className="bg-navy px-6 pb-24 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="overline text-gold/80">06 · A ponte</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-offwhite md:text-5xl">
            Aprenda o método. Termine com algo no ar.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-offwhite/60">
            Três formas de entrar, do gravado ao "eu construo com você".
          </p>
        </Reveal>
      </div>

      {/* stacking cards, cada card gruda no topo e empilha */}
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
                <span className="overline text-gold">{t.nivel}</span>
                {t.solid && (
                  <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                    Poucas vagas
                  </span>
                )}
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
              <a
                href="#contato"
                className={`mt-8 inline-flex rounded-full px-6 py-3 text-sm font-medium transition ${
                  t.solid
                    ? "bg-gold text-ink hover:opacity-90"
                    : "border border-offwhite/25 text-offwhite hover:border-gold hover:text-gold"
                }`}
              >
                Quero esse nível →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
