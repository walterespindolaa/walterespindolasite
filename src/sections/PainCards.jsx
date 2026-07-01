import { motion } from "framer-motion";
import Blend from "../components/Blend.jsx";

/* Pain cards animados (feel da Gabriela): cartões tortos que endireitam no hover */
const pains = [
  "Tenho a ideia, mas não sei por onde começar.",
  "Não sei programar, e isso sempre me travou.",
  "Já paguei curso que nunca saiu do papel.",
  "Vejo todo mundo usando IA, menos eu.",
  "Tenho medo de travar no meio do caminho.",
];

export default function PainCards() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 md:px-10">
      <Blend from="navy" edge="top" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <span className="overline text-gold/80">Talvez você se reconheça</span>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl font-semibold text-offwhite md:text-5xl">
            Se você já sentiu isso, o método é pra você.
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 48, rotate: i % 2 ? 2.5 : -2.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.6 : -1.6 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
              className="flex min-h-[190px] w-[320px] flex-col rounded-2xl border border-offwhite/10 bg-navy/40 p-8 md:w-[360px]"
              style={{ boxShadow: "0 28px 52px -22px rgba(0,0,0,0.7)" }}
            >
              <span className="font-serif text-5xl leading-none text-gold/50">“</span>
              <p className="mt-1 font-serif text-2xl italic leading-snug text-offwhite/90">{p}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-offwhite/55">
          É exatamente pra isso que existe a mentoria: do zero, com IA, sem depender de ninguém.
        </p>
      </div>
    </section>
  );
}
