import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-ink px-6 text-bone">
      <div className="max-w-md">
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em]">
          Página no encontrada
        </h1>
        <p className="mt-4 leading-relaxed text-bone/65">
          El enlace que seguiste no existe o cambió de lugar.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-blue-e px-6 py-3 text-[15px] font-medium text-bone"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
