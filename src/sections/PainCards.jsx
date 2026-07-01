import { useState, useEffect } from "react";
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
  const [canDrag, setCanDrag] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setCanDrag(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
              drag={canDrag}
              dragSnapToOrigin
              dragElastic={0.45}
              whileTap={{ scale: 1.04 }}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 20, boxShadow: "0 40px 70px -20px rgba(0,0,0,0.8)" }}
              className="relative flex min-h-[210px] w-[320px] cursor-grab flex-col overflow-hidden rounded-2xl border border-offwhite/10 bg-navy/40 p-8 active:cursor-grabbing md:w-[360px]"
              style={{ boxShadow: "0 28px 52px -22px rgba(0,0,0,0.7)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage: "radial-gradient(rgba(201,162,75,0.12) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <span className="font-mono text-xs tracking-widest text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-3 font-serif text-5xl leading-none text-gold/50">“</span>
                <p className="mt-1 font-serif text-2xl italic leading-snug text-offwhite/90">{p}</p>
              </div>
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
