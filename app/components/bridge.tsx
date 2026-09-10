import { Reveal } from "./reveal";

const LAYERS = [
  {
    title: "Software",
    text: "Productos, integraciones y arquitectura. El sistema con el que la empresa corre, no diez apps que no se hablan.",
    span: "lg:col-span-7 lg:min-h-[28rem]",
    tone: "bg-void",
  },
  {
    title: "Marketing digital",
    text: "Adquisición con medición. Si no se puede atribuir, no se escala.",
    span: "lg:col-span-5 lg:min-h-[28rem]",
    tone: "bg-blue-e",
  },
  {
    title: "Datos",
    text: "El mismo número para dirección, finanzas y comercial.",
    span: "lg:col-span-12",
    tone: "bg-void",
  },
];

export function Bridge() {
  return (
    <section id="bridge" className="scroll-mt-16 bg-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
        <Reveal>
          <h2 className="max-w-[14ch] text-4xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-6xl">
            Lo que Bridge construye
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 md:mt-20 lg:grid-cols-12">
          {LAYERS.map((layer, index) => (
            <Reveal
              key={layer.title}
              delay={index * 0.06}
              className={layer.span}
            >
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-1.5">
                <article
                  className={`flex h-full min-h-[16rem] flex-col justify-between rounded-[calc(2rem-0.375rem)] p-7 md:p-10 ${layer.tone}`}
                >
                  <p className="text-[13px] font-medium tracking-[-0.01em] text-bone/55">
                    {layer.title}
                  </p>
                  <p className="mt-16 max-w-[28ch] text-2xl font-medium leading-snug tracking-[-0.03em] md:mt-24 md:text-[1.85rem]">
                    {layer.text}
                  </p>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
