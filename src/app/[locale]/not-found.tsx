import Link from "next/link";

// notFound() no recibe params; se muestra en ambos idiomas
export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">404</p>
      <h1 className="text-2xl font-medium tracking-tight">
        Esta página no existe. <span className="text-muted">This page doesn&apos;t exist.</span>
      </h1>
      <Link href="/" className="text-sm text-accent hover:underline">
        francocampaiola.com
      </Link>
    </main>
  );
}
