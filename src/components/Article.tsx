import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? <strong key={i} className="font-semibold text-ink">{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>
  );
}

// Markdown mínimo: parágrafos, ## título, listas - e 1.
export function Article({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);
  return (
    <div className="prose-w space-y-7">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines[0].startsWith("## ")) return <h2 key={i} className="serif text-3xl md:text-4xl pt-8 leading-tight">{lines[0].slice(3)}</h2>;
        if (lines.every((l) => /^\s*-\s/.test(l)))
          return (
            <ul key={i} className="space-y-2">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-3 text-[1.15rem] leading-relaxed text-ink">
                  <span className="mt-[0.75em] w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  <span>{inline(l.replace(/^\s*-\s/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        if (lines.every((l) => /^\s*\d+\.\s/.test(l)))
          return (
            <ol key={i} className="space-y-3">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-4 text-[1.15rem] leading-relaxed text-ink">
                  <span className="font-mono text-sm text-sage pt-1.5 shrink-0">{String(j + 1).padStart(2, "0")}</span>
                  <span>{inline(l.replace(/^\s*\d+\.\s/, ""))}</span>
                </li>
              ))}
            </ol>
          );
        return <p key={i}>{inline(lines.join(" "))}</p>;
      })}
    </div>
  );
}
