import Image from "next/image";
import { Reveal } from "./reveal";

const CLAIMS = [
  "México no tiene un déficit de software.",
  "Tiene empresas que no pueden ver su propio número.",
  "Por eso existe Bridge.",
];

export function Manifiesto() {
  return (
    <section id="manifiesto" className="scroll-mt-16 bg-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
        <Reveal>
          <blockquote className="max-w-[18ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.04em] md:max-w-[22ch] md:text-5xl lg:text-[3.4rem]">
            Las empresas medianas tienen la información partida en seis lugares y
            nadie es responsable de unirla.
          </blockquote>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 md:mt-24 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5" delay={0.06}>
            <p className="max-w-[42ch] text-lg leading-relaxed text-bone/72">
              Dirijo Bridge desde Guadalajara. Hablo con direcciones que ya tienen
              sistemas, agencias y reportes, y aun así nadie puede responder
              cuánto se gana, dónde se pierde y qué hay que apagar. Bridge entra
              cuando esa pregunta no tiene dueño.
            </p>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" delay={0.12}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-1.5">
              <Image
                src="/assets/EDV-WEB-01_camisa_luz-azul.jpg"
                alt="Edgard Vargas con camisa blanca e iluminación azul"
                width={768}
                height={1024}
                sizes="(min-width: 768px) 42vw, 100vw"
                className="aspect-[3/4] w-full rounded-[calc(2rem-0.375rem)] object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-28 space-y-10 md:mt-36">
          {CLAIMS.map((claim, index) => (
            <Reveal key={claim} delay={index * 0.05}>
              <p className="max-w-[16ch] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-bone md:max-w-[20ch] md:text-6xl">
                {claim}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
