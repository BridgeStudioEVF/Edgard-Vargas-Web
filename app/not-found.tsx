import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-bone px-6 text-ink">
      <div className="max-w-md">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold uppercase leading-none tracking-[-0.01em]">
          Página no encontrada
        </h1>
        <p className="mt-4 leading-relaxed text-ink/65">
          El enlace que seguiste no existe o cambió de lugar.
        </p>
        <Link href="/" className="cta-blue mt-8 inline-flex">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
