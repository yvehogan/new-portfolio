import { stack } from "@/lib/data";

const half = Math.ceil(stack.length / 2);
const rows = [stack.slice(0, half), stack.slice(half)];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // repeated so the strip is wider than any screen; the animation moves it by exactly half
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className={`flex w-max gap-3 group-hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {loop.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line-2 bg-panel px-5 py-2.5 text-[15px] font-medium text-fg/85"
        >
          <i className="size-1.5 rounded-full bg-accent" />
          {item}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div aria-hidden="true" className="fade-x group grid gap-3 overflow-hidden py-4">
      <Row items={rows[0]} />
      <Row items={rows[1]} reverse />
    </div>
  );
}
