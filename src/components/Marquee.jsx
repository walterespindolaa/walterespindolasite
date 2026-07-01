/* Faixa marquee — clima "UNICO UNICO" do unicoweb, com os sistemas do Walter */
export default function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-offwhite/10 bg-ink py-5 ${className}`}>
      <div className="flex w-max gap-10" style={{ animation: "marquee 26s linear infinite" }}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-serif text-2xl text-offwhite/70 md:text-3xl">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
