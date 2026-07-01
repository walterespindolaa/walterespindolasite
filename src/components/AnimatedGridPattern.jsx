import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";

/* Grid animado (adaptado do componente shadcn pra JSX puro) */
export default function AnimatedGridPattern({
  width = 44,
  height = 44,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 40,
  className = "",
  maxOpacity = 0.4,
  duration = 4,
  color = "rgba(201,162,75,0.55)",
  stroke = "rgba(201,162,75,0.10)",
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getPos = () => [
    Math.floor((Math.random() * dimensions.width) / width),
    Math.floor((Math.random() * dimensions.height) / height),
  ];
  const generateSquares = (count) =>
    Array.from({ length: count }, (_, i) => ({ id: i, pos: getPos() }));

  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  const updateSquarePosition = (sid) =>
    setSquares((cur) => cur.map((sq) => (sq.id === sid ? { ...sq, pos: getPos() } : sq)));

  useEffect(() => {
    if (dimensions.width && dimensions.height) setSquares(generateSquares(numSquares));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, numSquares]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        setDimensions({ width: e.contentRect.width, height: e.contentRect.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ color, stroke }}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [sx, sy], id: sid }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{ duration, repeat: 1, delay: index * 0.1, repeatType: "reverse" }}
            onAnimationComplete={() => updateSquarePosition(sid)}
            key={`${sx}-${sy}-${index}`}
            width={width - 1}
            height={height - 1}
            x={sx * width + 1}
            y={sy * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
