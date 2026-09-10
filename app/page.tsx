import Image from "next/image";

const EMAIL = "edgard@bridgestudio.com.mx";

const BRIDGE_ROWS = [
  {
    label: "Software",
    text: "Productos digitales, integraciones y arquitectura de datos.",
  },
  {
    label: "Marketing digital",
    text: "Estrategia, adquisición y medición continua.",
  },
  {
    label: "Datos unificados",
    text: "Una sola fuente de verdad para operar y crecer.",
  },
];

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-ink/10 bg-bone/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-ink text-[11px] font-bold tracking-[0.12em] text-bone">
            EV
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.14em]">
            Edgard Vargas
          </span>
        </a>
        <nav className="hidden items-center gap-9 text-sm font-medium text-ink/70 md:flex">
          <a href="#manifiesto" className="link-draw">
            Manifiesto
          </a>
          <a href="#bridge" className="link-draw">
            Bridge
          </a>
          <a href="#contacto" className="link-draw">
            Contacto
          </a>
        </nav>
        <a href="#contacto" className="text-sm font-semibold md:hidden">
          Contacto
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden bg-ink">
      <Image
        src="/assets/EDV-WEB-02_hero_oficina.jpg"
        alt="Edgard Vargas en su oficina, junto a una ventana con vista a la ciudad"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[78%_center] md:object-center"
      />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-12 items-end px-5 pb-10 pt-24 md:items-start md:px-10 md:pt-28 lg:pt-32">
        <div className="col-span-12 max-w-[34rem] bg-ink/90 p-6 text-bone md:col-span-5 md:col-start-4 md:mt-6 md:bg-transparent md:p-0 md:text-ink">
          <svg
            className="hero-line mb-6 block"
            width="88"
            height="3"
            viewBox="0 0 88 3"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1.5"
              x2="88"
              y2="1.5"
              stroke="#2155FF"
              strokeWidth="3"
              pathLength={1}
            />
          </svg>
          <h1 className="rise rise-1 text-4xl font-bold uppercase leading-[0.92] tracking-[-0.03em] md:text-6xl lg:text-7xl">
            Edgard Vargas
          </h1>
          <p className="rise rise-2 mt-4 max-w-[36ch] text-sm leading-relaxed text-bone/85 md:mt-5 md:text-lg md:text-ink/80">
            Director General de Bridge. Software y marketing digital para
            empresas medianas.
          </p>
          <a
            href="#manifiesto"
            className="link-draw rise rise-3 mt-8 inline-block text-[0.8rem] font-semibold uppercase tracking-[0.16em]"
          >
            Lee el manifiesto
          </a>
        </div>
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section id="manifiesto" className="scroll-mt-16 bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <blockquote className="max-w-[22ch] font-serif text-[1.85rem] leading-[1.18] tracking-[-0.01em] md:max-w-none md:text-[2.75rem] lg:text-[3.15rem]">
          “Las empresas medianas tienen la información partida en seis lugares y
          nadie es responsable de unirla.”
        </blockquote>
        <p className="mt-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
          Edgard Vargas, Director General de Bridge
        </p>

        <div className="mt-14 grid items-start gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="max-w-[52ch] text-lg leading-relaxed text-ink/80">
              Dirijo Bridge, una agencia de software y marketing digital en
              Guadalajara. Ayudo a empresas medianas a ordenar sus datos,
              integrar sus sistemas y decidir con números, no con corazonadas.
            </p>
            <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  Edad
                </dt>
                <dd className="mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  34
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  Base
                </dt>
                <dd className="mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  Guadalajara
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  Rol
                </dt>
                <dd className="mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  DG de Bridge
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Image
              src="/assets/EDV-WEB-01_camisa_luz-azul.jpg"
              alt="Edgard Vargas con camisa blanca e iluminación azul"
              width={768}
              height={1024}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bridge() {
  return (
    <section id="bridge" className="scroll-mt-16 border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <h2 className="max-w-[14ch] text-4xl font-bold uppercase leading-[0.96] tracking-[-0.02em] md:text-6xl">
          Qué hace Bridge
        </h2>
        <div className="mt-16">
          {BRIDGE_ROWS.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 border-t border-ink/15 py-9 last:border-b md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-ink/50 md:col-span-3">
                {row.label}
              </p>
              <p className="text-xl font-medium leading-snug tracking-[-0.01em] md:col-span-8 md:text-2xl">
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-ink text-bone">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[70vw] md:min-h-[100dvh]">
          <Image
            src="/assets/EDV-WEB-03_perfil_luz-azul.jpg"
            alt="Retrato de Edgard Vargas con luz azul de perfil"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-16 lg:px-20">
          <h2 className="text-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] md:text-7xl">
            Conversemos
          </h2>
          <p className="mt-7 max-w-[36ch] text-lg leading-relaxed text-bone/75">
            Si tu empresa tiene los datos dispersos, ese es el problema que
            resolvemos.
          </p>
          <a href={`mailto:${EMAIL}`} className="cta-blue mt-10 w-fit">
            Escribirme
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-ink text-[11px] font-bold tracking-[0.12em] text-bone">
            EV
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
            Guadalajara, México
          </span>
        </div>
        <p className="text-xs text-ink/45">
          © 2026 Edgard Vargas. Bridge, software y marketing digital.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="text-xs font-medium text-ink/55 hover:text-ink"
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <Manifiesto />
        <Bridge />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
