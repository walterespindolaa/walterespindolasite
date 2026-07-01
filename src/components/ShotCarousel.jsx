import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Carrossel de screenshots que passa sozinho pro lado */
export default function ShotCarousel({ shots = [], name = "", interval = 2600 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (shots.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % shots.length), interval);
    return () => clearInterval(t);
  }, [shots.length, interval]);

  if (!shots.length) return null;

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={i}
          src={shots[i]}
          alt={`Tela do ${name}`}
          initial={{ opacity: 0, x: "30%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-30%" }}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 h-full w-full object-contain object-top"
        />
      </AnimatePresence>

      {shots.length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/30 px-2 py-1 backdrop-blur-sm">
          {shots.map((_, k) => (
            <span
              key={k}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: k === i ? 16 : 6,
                background: k === i ? "var(--color-gold)" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
