import type { ReactNode } from "react";
import { profile, roles, stats } from "@/lib/data";
import { Counter } from "./Counter";
import { ArrowUpRight } from "./Icons";
import { Magnetic, Tilt } from "./Tilt";
import { Typewriter } from "./Typewriter";
import { btn } from "./ui";

const K = ({ children }: { children: ReactNode }) => <span className="text-accent">{children}</span>;
const S = ({ children }: { children: ReactNode }) => <span className="text-[#b9d6a3]">&quot;{children}&quot;</span>;
const P = ({ children }: { children: ReactNode }) => <span className="text-[#8fb8d9]">{children}</span>;
const C = ({ children }: { children: ReactNode }) => <span className="text-dim">{children}</span>;

const list = (items: string[]) =>
  items.map((item, i) => (
    <span key={item}>
      <S>{item}</S>
      {i < items.length - 1 && ", "}
    </span>
  ));

const lines: ReactNode[] = [
  <>
    <K>const</K> evelyn = {"{"}
  </>,
  <>
    {"  "}
    <P>role</P>: <S>Frontend Engineer</S>,
  </>,
  <>
    {"  "}
    <P>experience</P>: <S>4+ years</S>,
  </>,
  <>
    {"  "}
    <P>stack</P>: [{list(["React", "Next.js"])},
  </>,
  <>
    {"          "}
    {list(["TypeScript", "Tailwind CSS"])}],
  </>,
  <>
    {"  "}
    <P>builds</P>: [{list(["banking", "government"])},
  </>,
  <>
    {"           "}
    {list(["EdTech", "AI products"])}],
  </>,
  <>
    {"  "}
    <P>cloud</P>: [{list(["AWS", "Azure", "Docker"])}],
  </>,
  <>
    {"  "}
    <P>mentors</P>: <K>true</K>,
  </>,
  <>{"};"}</>,
  <></>,
  <>
    evelyn.<P>ship</P>(); <C>{"// always"}</C>
  </>,
];

function CodeWindow() {
  return (
    <Tilt max={7} className="overflow-hidden rounded-2xl border border-line-2 bg-panel text-left shadow-[0_40px_90px_-40px_#000]">
      <div className="flex items-center border-b border-line bg-white/[0.02]">
        <div className="flex gap-[7px] px-4">
          <i className="size-[11px] rounded-full bg-white/15" />
          <i className="size-[11px] rounded-full bg-white/15" />
          <i className="size-[11px] rounded-full bg-white/15" />
        </div>
        <span className="border-x border-line border-b-2 border-b-accent bg-panel px-4 py-2.5 font-mono text-[12.5px] text-fg">evelyn.ts</span>
        <span className="hidden border-r border-line px-4 py-2.5 font-mono text-[12.5px] text-dim sm:block">projects.ts</span>
        <span className="hidden border-r border-line px-4 py-2.5 font-mono text-[12.5px] text-dim sm:block lg:hidden xl:block">README.md</span>
      </div>

      <pre className="overflow-x-auto py-5 font-mono text-[13px] leading-[1.85] text-[#d9d5ca] sm:text-[13.5px]">
        <code className="grid min-w-max">
          {lines.map((line, i) => (
            <span key={i} className="animate-fade-up px-5 hover:bg-white/[0.03]" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>
              <span className="mr-5 inline-block w-5 select-none text-right text-dim/60">{i + 1}</span>
              {line}
            </span>
          ))}
        </code>
      </pre>

      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1 border-t border-line bg-white/[0.02] px-4 py-2 font-mono text-[11.5px] text-dim">
        <span className="flex items-center gap-4">
          <span>main</span>
          <span>TypeScript</span>
          <span className="hidden sm:inline">UTF-8</span>
        </span>
        <span className="flex items-center gap-2 text-fg/80">
          <i className="size-2 animate-ping-soft rounded-full bg-ok" />
          Available for work
        </span>
      </div>
    </Tilt>
  );
}

export function Hero() {
  return (
    <header className="grid min-h-svh items-center pb-[70px] pt-[130px]">
      <div className="wrap grid items-center gap-x-14 gap-y-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white/5 py-[7px] pl-[11px] pr-[15px] text-sm text-muted">
            <i className="size-[9px] animate-ping-soft rounded-full bg-ok" />
            {profile.location} · open to new roles
          </span>

          <h1 className="mb-5 mt-[22px] font-display text-[clamp(46px,8.4vw,108px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="inline-block animate-rise">{profile.firstName}</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="inline-block animate-rise text-accent [animation-delay:0.12s]">{profile.lastName}.</span>
            </span>
          </h1>

          <Typewriter words={roles} />

          <p className="mb-8 mt-[18px] max-w-[35em] text-[clamp(17px,1.5vw,19.5px)] text-muted">{profile.lede}</p>

          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a href="#projects" className={btn.primary}>
                See my work <ArrowUpRight className={btn.arrow} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className={btn.ghost}>
                Let&apos;s talk
              </a>
            </Magnetic>
          </div>

          <dl className="mt-[46px] grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-[26px] sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em]">
                  <Counter value={s.value} />
                  <span className="text-accent">{s.suffix}</span>
                </dd>
                <dt className="mt-1 text-sm leading-snug text-dim">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[560px] animate-float lg:max-w-none">
          <CodeWindow />
        </div>
      </div>
    </header>
  );
}
