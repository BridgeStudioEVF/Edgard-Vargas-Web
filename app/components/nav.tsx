"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { NAV, SITE } from "../lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 48;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ink = !scrolled && !open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30">
        <div
          className={`transition-[background-color,backdrop-filter,border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 md:px-10">
            <a
              href="#top"
              aria-label={SITE.name}
              onClick={() => setOpen(false)}
              className={`text-[15px] font-semibold tracking-[-0.06em] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                ink ? "text-bone md:text-ink" : "text-bone"
              }`}
            >
              EV
            </a>

            <nav
              className={`hidden items-center gap-9 text-[13px] font-medium md:flex ${
                ink ? "text-ink" : "text-bone/80"
              }`}
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    ink ? "hover:text-ink/55" : "hover:text-bone"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="relative grid h-11 w-11 place-items-center md:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={`absolute h-px w-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  ink ? "bg-bone md:bg-ink" : "bg-bone"
                } ${open ? "translate-y-0 rotate-45" : "-translate-y-[3px]"}`}
              />
              <span
                className={`absolute h-px w-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  ink ? "bg-bone md:bg-ink" : "bg-bone"
                } ${open ? "translate-y-0 -rotate-45" : "translate-y-[3px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[25] bg-ink/92 backdrop-blur-2xl transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <nav className="flex min-h-[100dvh] flex-col justify-center gap-8 px-8">
          {NAV.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-4xl font-medium tracking-[-0.04em] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
