export function Section({
  id,
  title,
  index,
  number,
  children,
}: {
  id?: string;
  title: string;
  index: number;
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="rise" style={{ "--i": index } as React.CSSProperties}>
      <h2 id={id ? `${id}-title` : undefined} className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
        {number && <span className="text-accent">{number}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
}
