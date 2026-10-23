import Image from "next/image";
import Figure from "@/components/figures/Figure";

// Un Markdown mínimo para las notas del blog: títulos (## y ###), párrafos, listas, citas, imágenes y
// figuras interactivas (`::figure`) en su propia línea y, dentro del texto, **negrita**, *cursiva*,
// `código` y [links](url). Alcanza para las notas y evita sumar una dependencia.

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function inline(text, keyBase) {
  return text.split(INLINE).map((part, i) => {
    const key = `${keyBase}-${i}`;
    if (part.startsWith("**")) return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={key}>{part.slice(1, -1)}</code>;
    if (part.startsWith("[")) {
      const [, label, href] = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/) ?? [];
      if (!href) return part;
      const external = /^https?:/.test(href);
      return (
        <a key={key} href={href} className="text-[var(--ink)] underline decoration-[var(--accent)] underline-offset-4" {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {label}
        </a>
      );
    }
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) return <em key={key}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function renderMarkdown(source) {
  const blocks = source.trim().split(/\n{2,}/);
  return blocks.map((block, b) => {
    const key = `b${b}`;
    const lines = block.split("\n");
    if (block.startsWith("### ")) return <h3 key={key}>{inline(block.slice(4), key)}</h3>;
    if (block.startsWith("## ")) return <h2 key={key}>{inline(block.slice(3), key)}</h2>;
    // `::figure <nombre> | <título>`: una figura interactiva de public/figures.
    const figure = block.match(/^::figure ([a-z0-9-]+) \| (.+)$/);
    if (figure) {
      return (
        <figure key={key} className="-mx-2 sm:mx-0">
          <Figure name={figure[1]} title={figure[2]} />
        </figure>
      );
    }
    const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      const [, alt, src] = image;
      return (
        <figure key={key}>
          <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
            <Image src={src} alt={alt} width={1200} height={560} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full" />
          </div>
        </figure>
      );
    }
    if (lines.every((l) => l.startsWith("> "))) {
      return <blockquote key={key}><p>{inline(lines.map((l) => l.slice(2)).join(" "), key)}</p></blockquote>;
    }
    if (/^- /.test(lines[0])) {
      return <ul key={key}>{groupItems(lines, /^- /).map((item, i) => <li key={`${key}-${i}`}>{inline(item, `${key}-${i}`)}</li>)}</ul>;
    }
    if (/^\d+\. /.test(lines[0])) {
      return <ol key={key}>{groupItems(lines, /^\d+\. /).map((item, i) => <li key={`${key}-${i}`}>{inline(item, `${key}-${i}`)}</li>)}</ol>;
    }
    return <p key={key}>{inline(lines.join(" "), key)}</p>;
  });
}

// Los ítems de una lista, con sus líneas de continuación (sangradas) pegadas al ítem.
function groupItems(lines, marker) {
  const items = [];
  for (const line of lines) {
    if (marker.test(line)) items.push(line.replace(marker, ""));
    else if (items.length) items[items.length - 1] += ` ${line.trim()}`;
  }
  return items;
}

export function readingTime(source) {
  return Math.max(1, Math.round(source.split(/\s+/).length / 220));
}
