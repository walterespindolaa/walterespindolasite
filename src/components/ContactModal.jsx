import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Troque pelo seu endpoint do Formspree (crie grátis em formspree.io).
   Enquanto estiver "SEU_ID", o form roda em modo demo (mostra sucesso sem enviar). */
const FORM_ENDPOINT = "https://formspree.io/f/SEU_ID";

const LABELS = {
  zephyr: { titulo: "Falar com a Zephyr", sub: "Assessoria de alto nível. Conte um pouco sobre você." },
  mentoria: { titulo: "Entrar na mentoria", sub: "Da ideia ao infoproduto, com IA. Vamos conversar." },
  geral: { titulo: "Vamos conversar", sub: "Deixe seu recado que eu retorno." },
};

export function openContact(tipo = "geral") {
  window.dispatchEvent(new CustomEvent("open-contact", { detail: { tipo } }));
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState("geral");
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  useEffect(() => {
    const h = (e) => {
      setTipo(e.detail?.tipo || "geral");
      setStatus("idle");
      setForm({ nome: "", email: "", mensagem: "" });
      setOpen(true);
    };
    window.addEventListener("open-contact", h);
    return () => window.removeEventListener("open-contact", h);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const payload = { ...form, tipo: LABELS[tipo].titulo };
    if (FORM_ENDPOINT.includes("SEU_ID")) {
      setTimeout(() => setStatus("done"), 600); // modo demo até o endpoint ser configurado
      return;
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  const L = LABELS[tipo];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink p-8 text-offwhite shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-4 top-4 text-offwhite/40 transition hover:text-gold"
            >
              ✕
            </button>

            {status === "done" ? (
              <div className="py-6 text-center">
                <div className="font-serif text-3xl text-gold">Recado enviado.</div>
                <p className="mt-3 text-offwhite/70">Obrigado, {form.nome || "por escrever"}. Eu retorno em breve.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full border border-offwhite/25 px-5 py-2.5 text-sm transition hover:border-gold hover:text-gold"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <span className="overline text-gold/80">Contato</span>
                <h3 className="mt-2 font-serif text-3xl font-semibold">{L.titulo}</h3>
                <p className="mt-2 text-sm text-offwhite/60">{L.sub}</p>

                <form onSubmit={submit} className="mt-6 space-y-4">
                  <input
                    required
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-offwhite placeholder:text-offwhite/40 outline-none transition focus:border-gold"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Seu e-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-offwhite placeholder:text-offwhite/40 outline-none transition focus:border-gold"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Sua mensagem"
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-offwhite placeholder:text-offwhite/40 outline-none transition focus:border-gold"
                  />
                  {status === "error" && (
                    <p className="text-sm text-terracota">Algo deu errado. Tente de novo em instantes.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "sending" ? "Enviando…" : "Enviar"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
