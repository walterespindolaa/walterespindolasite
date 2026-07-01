/* Ticker editorial — itálico serifa, ✦ dourado, fade nas bordas */
export default function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  const fade =
    "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)";
  return (
    <div className={`overflow-hidden border-y border-offwhite/10 bg-ink py-6 ${className}`}>
      <div
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        className="overflow-hidden"
      >
        <div className="flex w-max gap-12" style={{ animation: "marquee 34s linear infinite" }}>
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap font-serif text-2xl italic text-offwhite/45 md:text-[28px]"
            >
              {t}
              <span className="text-lg not-italic text-gold/80">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
