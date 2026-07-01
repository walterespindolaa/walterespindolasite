/* Ticker editorial, grotesk em caixa alta espaçada, com fade nas bordas */
export default function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  const fade = "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)";
  return (
    <div className={`overflow-hidden border-y border-offwhite/10 bg-ink py-5 ${className}`}>
      <div style={{ maskImage: fade, WebkitMaskImage: fade }} className="overflow-hidden">
        <div className="flex w-max gap-10" style={{ animation: "marquee 34s linear infinite" }}>
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-sans text-sm font-medium uppercase tracking-[0.2em] text-offwhite/45 md:text-base"
            >
              {t}
              <span className="text-xs text-gold/80">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
