import { stack } from "@/lib/data";

export function Marquee() {
  return (
    <div aria-hidden="true" className="fade-x group overflow-hidden border-y border-line bg-white/[0.02] py-5">
      <div className="flex w-max animate-marquee gap-11 group-hover:[animation-play-state:paused]">
        {[...stack, ...stack].map((item, i) => (
          <span key={i} className="flex items-center gap-11 whitespace-nowrap font-display text-[22px] font-semibold text-muted after:text-[15px] after:text-accent after:content-['✦']">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
