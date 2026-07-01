/* Transição de cor entre seções (estilo Atlas): funde a borda com a cor vizinha */
const C = { ink: "#1B1B1A", navy: "#0E2A47", offwhite: "#F4F0E7" };

export default function Blend({ from, edge = "top", height = 112 }) {
  const color = C[from] || from;
  const dir = edge === "top" ? "to bottom" : "to top";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 z-0"
      style={{
        [edge]: 0,
        height,
        background: `linear-gradient(${dir}, ${color}, transparent)`,
      }}
    />
  );
}
