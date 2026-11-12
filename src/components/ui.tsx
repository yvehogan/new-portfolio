import type { ReactNode } from "react";

const base =
  "group/btn inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border px-[22px] py-[13px] text-[15.5px] font-bold transition duration-300 ease-spring disabled:cursor-not-allowed disabled:opacity-60";

export const btn = {
  primary: `${base} border-transparent bg-accent text-[#14120a] hover:-translate-y-0.5 hover:bg-accent-soft`,
  ghost: `${base} border-line-2 bg-white/5 text-fg hover:border-white/40 hover:bg-white/10`,
  arrow: "size-4 transition-transform duration-300 ease-spring group-hover/btn:translate-x-[3px] group-hover/btn:-translate-y-[3px]",
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[13.5px] font-medium uppercase tracking-[0.14em] text-accent before:h-px before:w-[34px] before:bg-accent">
      {children}
    </p>
  );
}

export function Heading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mb-4 mt-3.5 font-display text-[clamp(36px,5.4vw,68px)] font-extrabold leading-[1.02] tracking-[-0.04em] ${className}`}>
      {children}
    </h2>
  );
}
