import { Reveal } from "./reveal";

const FORMACION = [
  {
    title: "Licenciatura en Diseño para la Comunicación Gráfica",
    text: "Universidad Guadalajara Lamar. Generación 2010-2014. Identidad, arquitectura de información, interfaces y comunicación visual.",
  },
  {
    title: "Dirección de Bridge, 2013 a la fecha",
    text: "Director General y Director Creativo. Bajo su dirección, Bridge ha entregado más de trescientos proyectos digitales para gobierno, organismos empresariales y marcas privadas.",
  },
  {
    title: "Concursos nacionales de producto",
    text: "Reto Zapopan, Retos Públicos SEGOB y el reto de INADEM con CONCANACO SERVYTUR. Ahí se formó el criterio de llevar tecnología a un problema público real.",
  },
];

const HISTORIA = [
  {
    year: "2013",
    title: "Fundación",
    text: "Bridge nace en el entorno universitario, con foco en web y apps. Primeros reconocimientos nacionales.",
  },
  {
    year: "2017",
    title: "Producto móvil",
    text: "Bridge se especializa en iOS y Android. Marketing digital alineado al software, no a campañas sueltas.",
  },
  {
    year: "2022",
    title: "Enterprise",
    text: "Bridge entra a corporativos de operación nacional e internacional. Integración, gobierno y riesgo real.",
  },
  {
    year: "2025",
    title: "Inteligencia artificial",
    text: "Bajo su dirección, Bridge abre la práctica de automatización, agentes y decisión basada en datos. IA dentro de la operación, no como demo.",
  },
];

export function Semblanza() {
  return (
    <section id="semblanza" className="scroll-mt-16 bg-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
        <Reveal>
          <h2 className="max-w-[12ch] text-4xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-6xl">
            Semblanza
          </h2>
        </Reveal>

        <Reveal className="mt-10 max-w-[58ch]" delay={0.06}>
          <p className="text-lg leading-relaxed text-bone/72">
            Edgard Vargas es Director General y fundador de Bridge. Estudió
            Diseño para la Comunicación Gráfica en Universidad Guadalajara Lamar.
            En 2013, todavía en el entorno universitario, abrió el estudio. Desde
            entonces pone el criterio de producto, marca y tecnología. Bridge
            construye.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-bone/72">
            Trece años. Guadalajara, Ciudad de México, Estados Unidos y Canadá.
            Hoy lidera la conversación sobre inteligencia artificial en medianas
            y grandes empresas: dónde sí entra, qué no tocar y quién responde
            por el número. Bridge ejecuta.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                Formación
              </h3>
            </Reveal>
            <div className="mt-8 space-y-8">
              {FORMACION.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <p className="text-[15px] font-medium tracking-[-0.02em]">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-bone/60">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                Historia
              </h3>
            </Reveal>
            <div className="mt-8 space-y-8">
              {HISTORIA.map((item, index) => (
                <Reveal
                  key={item.year}
                  delay={index * 0.05}
                  className="grid grid-cols-[4.5rem_1fr] gap-4"
                >
                  <p className="font-mono text-[13px] text-bone/45">
                    {item.year}
                  </p>
                  <div>
                    <p className="text-[15px] font-medium tracking-[-0.02em]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-bone/60">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
