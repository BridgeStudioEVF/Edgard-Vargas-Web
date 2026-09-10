import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-bone/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-ink text-[11px] font-bold tracking-[0.12em] text-bone">
            EV
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
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
        <a href="#contacto" className="text-sm font-semibold text-ink md:hidden">
          Contacto
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden bg-ink">
      <div className="hero-parallax absolute inset-0">
        <img
          src="/assets/EDV-WEB-02_hero_oficina.jpg"
          alt="Edgard Vargas en su oficina, junto a una ventana con vista a la ciudad"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1440px] items-end px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <div className="w-full max-w-2xl bg-ink/95 p-7 md:p-10">
          <svg
            className="hero-line mb-7 block"
            width="132"
            height="3"
            viewBox="0 0 132 3"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1.5"
              x2="132"
              y2="1.5"
              stroke="#2155FF"
              strokeWidth="3"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset="1"
            />
          </svg>
          <h1 className="rise rise-1 text-6xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-bone md:text-7xl lg:text-[5.5rem]">
            Edgard Vargas
          </h1>
          <p className="rise rise-2 mt-4 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-bone/80">
            Director General · Bridge
          </p>
          <p className="rise rise-3 mt-6 max-w-[46ch] text-base leading-relaxed text-bone/85 md:text-lg">
            Software y marketing digital para empresas medianas que quieren
            decidir con datos propios.
          </p>
          <a
            href="#manifiesto"
            className="link-draw rise rise-4 mt-9 inline-block text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-bone"
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
    <section id="manifiesto" className="scroll-mt-16 bg-bone text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <blockquote className="font-serif text-[1.85rem] leading-[1.18] tracking-[-0.01em] md:text-[2.6rem]">
              “Las empresas medianas tienen la información partida en seis
              lugares y nadie es responsable de unirla.”
            </blockquote>
            <p className="mt-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink/55">
              Edgard Vargas · Director General de Bridge
            </p>
            <p className="mt-16 max-w-[58ch] text-lg leading-relaxed text-ink/80">
              Dirijo Bridge, una agencia de software y marketing digital en
              Guadalajara. Ayudo a empresas medianas a ordenar sus datos,
              integrar sus sistemas y decidir con números, no con corazonadas.
            </p>
            <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-ink/10 pt-9">
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  Edad
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-[-0.01em]">34</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  Base
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-[-0.01em]">
                  Guadalajara
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  Rol
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-[-0.01em]">
                  DG de Bridge
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5">
            <img
              src="/assets/EDV-WEB-01_camisa_luz-azul.jpg"
              alt="Edgard Vargas con camisa blanca e iluminación azul"
              className="aspect-[3/4] w-full border border-ink/15 object-cover lg:translate-y-6"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bridge() {
  return (
    <section id="bridge" className="scroll-mt-16 border-t border-ink/10 bg-white text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <h2 className="max-w-[16ch] text-4xl font-bold uppercase leading-[0.98] tracking-[-0.01em] md:text-6xl">
          Qué hace Bridge
        </h2>
        <div className="rows-wrap mt-16">
          {BRIDGE_ROWS.map((row) => (
            <div
              key={row.label}
              className="row grid gap-2 py-9 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-ink/55 md:col-span-3">
                {row.label}
              </p>
              <p className="text-xl font-medium leading-snug tracking-[-0.01em] md:col-span-7 md:text-2xl">
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
    <section id="contacto" className="scroll-mt-16 border-t border-ink/10 bg-bone text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div className="order-2 md:order-1">
            <img
              src="/assets/EDV-WEB-03_perfil_luz-azul.jpg"
              alt="Retrato de Edgard Vargas con luz azul de perfil"
              className="aspect-[3/4] w-full max-w-md border border-ink/10 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl font-bold uppercase leading-[0.95] tracking-[-0.01em] md:text-7xl">
              Conversemos
            </h2>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-ink/75">
              Si tu empresa tiene los datos dispersos, ese es el problema que
              resolvemos.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a href="mailto:edgard@bridgestudio.com.mx" className="cta-blue">
                Escribirme
              </a>
              <a
                href="mailto:edgard@bridgestudio.com.mx"
                className="link-draw text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink/65"
              >
                edgard@bridgestudio.com.mx
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-ink text-[11px] font-bold tracking-[0.12em] text-bone">
            EV
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/55">
            Guadalajara, México
          </span>
        </div>
        <p className="text-xs text-ink/45">
          © 2026 Edgard Vargas. Bridge, software y marketing digital.
        </p>
        <span className="h-px w-24 bg-blue-e" aria-hidden="true" />
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <Manifiesto />
        <Bridge />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}