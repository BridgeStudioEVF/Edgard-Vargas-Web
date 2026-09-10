import { FAQS } from "../lib/site";
import { Reveal } from "./reveal";

export function Preguntas() {
  return (
    <section id="preguntas" className="scroll-mt-16 bg-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 md:py-36">
        <Reveal>
          <h2 className="max-w-[14ch] text-4xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-6xl">
            Preguntas
          </h2>
        </Reveal>
        <div className="mt-16 max-w-[720px] space-y-14">
          {FAQS.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.05}>
              <h3 className="text-2xl font-medium leading-snug tracking-[-0.03em] md:text-[1.85rem]">
                {item.q}
              </h3>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-bone/60">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
