"use client";

import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type MagneticButtonProps = {
  href: string;
  children: string;
};

export function MagneticButton({ href, children }: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.4 });

  function onMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-blue-e px-6 py-3 text-[15px] font-medium text-bone transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
    >
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-bone/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
        <ArrowUpRight size={16} weight="light" aria-hidden="true" />
      </span>
    </motion.a>
  );
}
