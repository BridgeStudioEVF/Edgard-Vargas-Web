import { Reveal } from "./reveal";

const PROJECTS = [
  {
    title: "Vive Pueblos Mágicos",
    client: "CONCANACO SERVYTUR",
    text: "Marca y plataforma digital para la promoción turística de México. Premio Nacional en Innovación Tecnológica.",
    span: "lg:col-span-7",
  },
  {
    title: "Camino a Qatar",
    client: "AT&T México",
    text: "Activación nacional de lealtad para el Mundial. 80,000 usuarios en tres meses.",
    span: "lg:col-span-5",
  },
  {
    title: "Museo Juan Gabriel",
    client: "Ciudad Juárez",
    text: "Experiencia inmersiva con reservas digitales, AR y audio. De cero ventas digitales a más de 10,000 usuarios activos.",
    span: "lg:col-span-6",
  },
  {
    title: "Helvex",
    client: "Fuerza de ventas",
    text: "App nativa de catálogo y operación comercial. El piso de venta en la palma de la mano.",
    span: "lg:col-span-6",
  },
  {
    title: "Arqademy",
    client: "Educación + IA",
    text: "De plataforma web a app nativa con IA para 30,000 alumnos.",
    span: "lg:col-span-5",
  },
  {
    title: "Universidad de Guadalajara",
    client: "Butaca, credencial y Gaceta",
    text: "Productos digitales para la propia universidad: boletera, credencial digital y renovación de La Gaceta.",
    span: "lg:col-span-7",
  },
];

const AWARDS = [
  {
    year: "2013",
    title: "Premio Nacional en Innovación Tecnológica para la Promoción Turística",
    text: "CONCANACO SERVYTUR e INADEM. Vive Pueblos Mágicos.",
  },
  {
    year: "2013",
    title: "Reto Zapopan y Retos Públicos SEGOB",
    text: "Clasificación en concursos nacionales de producto tecnológico aplicado.",
  },
  {
    year: "2020",
    title: "Dental Delivery entre las 100 mejores apps del mundo",
    text: "Startup Istanbul. Diseño, funcionalidad y modelo de negocio.",
  },
  {
    year: "2025",
    title: "Best Mobile App Developer",
    text: "Reconocimiento a Bridge como partner de producto móvil en México.",
  },
];

export function Trabajo() {
  return (
    <section id="trabajo" className="scroll-mt-16 bg-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
        <Reveal>
          <h2 className="max-w-[14ch] text-4xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-6xl">
            Proyectos destacados
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-bone/60">
            Lo que Bridge ha entregado bajo su dirección.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.04}
              className={project.span}
            >
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-1.5">
                <article className="flex h-full min-h-[14rem] flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-void p-7 md:p-8">
                  <p className="text-[13px] text-bone/45">{project.client}</p>
                  <div className="mt-10">
                    <h3 className="text-2xl font-medium tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-bone/60">
                      {project.text}
                    </p>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="premios" className="mt-28 md:mt-36">
          <Reveal>
            <h2 className="max-w-[14ch] text-4xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-6xl">
              Premios y reconocimientos
            </h2>
          </Reveal>
          <div className="mt-12 max-w-[820px] space-y-10">
            {AWARDS.map((award, index) => (
              <Reveal
                key={award.title}
                delay={index * 0.05}
                className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
              >
                <p className="font-mono text-[13px] text-bone/45">
                  {award.year}
                </p>
                <div>
                  <p className="text-[17px] font-medium leading-snug tracking-[-0.02em]">
                    {award.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-bone/55">
                    {award.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
