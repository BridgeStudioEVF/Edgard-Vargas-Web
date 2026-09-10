import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { MAIL } from "../lib/site";
import { MagneticButton } from "./magnetic-button";
import { Reveal } from "./reveal";

const TALKS = [
  "Dónde sí entra la IA a una empresa que ya opera.",
  "Por qué el piloto no llega al ERP.",
  "Qué preguntarle a un proveedor antes de firmar.",
];

export function Invitar() {
  return (
    <section id="invitar" className="scroll-mt-16 bg-ink">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[70vw] md:min-h-[100dvh]">
          <Image
            src="/assets/EDV-WEB-03_perfil_luz-azul.jpg"
            alt="Retrato de Edgard Vargas con luz azul de perfil"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[center_18%]"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-24 md:px-16 lg:px-20">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-[0.92] tracking-[-0.045em] md:text-6xl">
              El estudio y la voz
            </h2>
            <p className="mt-7 max-w-[38ch] text-lg leading-relaxed text-bone/70">
              Bridge entra a la operación. Edgard, a la conversación. Si tu
              dirección necesita un partner, no un piloto más, escríbenos.
            </p>
            <div className="mt-10">
              <MagneticButton href={MAIL.hire}>Trabajar con Bridge</MagneticButton>
            </div>
          </Reveal>

          <Reveal className="mt-16 border-t border-white/10 pt-12" delay={0.08}>
            <p className="text-[15px] font-medium tracking-[-0.02em]">
              Conferencias
            </p>
            <ul className="mt-6 space-y-4">
              {TALKS.map((talk) => (
                <li
                  key={talk}
                  className="max-w-[34ch] text-[17px] leading-snug tracking-[-0.02em] text-bone/80"
                >
                  {talk}
                </li>
              ))}
            </ul>
            <a
              href={MAIL.talk}
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium"
            >
              Invitar a Edgard
              <ArrowUpRight size={16} weight="light" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
