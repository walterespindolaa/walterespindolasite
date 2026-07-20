import { motion } from "framer-motion";

/* Sticker decorativo com leve flutuação. Acento, não protagonista. */
export default function Sticker({ src, className = "", size = 72, rotate = 0, delay = 0, float = 9, opacity = 0.9 }) {
  return (
    <motion.img
      src={`/img/stk/${src}.webp`}
      alt=""
      aria-hidden="true"
      draggable={false}
      animate={{ y: [0, -float, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`pointer-events-none absolute z-0 select-none ${className}`}
      style={{ width: size, rotate: `${rotate}deg`, opacity }}
    />
  );
}
