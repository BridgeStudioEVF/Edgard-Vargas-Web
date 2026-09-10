"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale, opacity }}
      >
        <Image
          src="/assets/EDV-WEB-02_hero_oficina.jpg"
          alt="Edgard Vargas en su oficina, junto a una ventana con vista a la ciudad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-center"
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-12 items-end px-4 pb-10 pt-24 md:items-start md:px-10 md:pt-24">
        <div className="col-span-12 max-w-[38rem] rounded-[1.5rem] bg-ink/80 p-6 text-bone md:col-span-6 md:col-start-3 md:mt-8 md:bg-transparent md:p-0 md:text-ink">
          <h1 className="text-[2.6rem] font-semibold leading-[0.92] tracking-[-0.045em] md:text-6xl lg:text-[4.6rem]">
            Edgard Vargas
          </h1>
          <p className="rise rise-2 mt-5 max-w-[36ch] text-[0.98rem] leading-relaxed text-bone/85 md:text-lg md:text-ink/78">
            Dirijo Bridge. Lidero la conversación sobre IA en medianas y grandes
            empresas de México.
          </p>
          <a
            href="#manifiesto"
            className="rise rise-3 mt-8 inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-[0.04em]"
          >
            El diagnóstico
            <ArrowDownRight size={16} weight="light" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
