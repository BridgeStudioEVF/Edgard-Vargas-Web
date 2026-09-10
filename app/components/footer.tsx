import { SITE } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-[13px] font-medium tracking-[-0.03em]">EV</p>
        <p className="text-[12px] text-bone/40">
          {SITE.city}, {SITE.country}
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="text-[12px] text-bone/55 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-bone"
        >
          {SITE.email}
        </a>
      </div>
    </footer>
  );
}
