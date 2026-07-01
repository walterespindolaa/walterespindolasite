import { motion, useScroll, useSpring } from "framer-motion";

/* Barra de progresso no topo (reaproveita a ideia dos reveals do Atlas) */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gold"
    />
  );
}
