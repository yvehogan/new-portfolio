import type { CSSProperties } from "react";
import { featured, GITHUB, more, type Project } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import { btn, Eyebrow, Heading } from "./ui";

const link =
  "group/link relative inline-flex items-center gap-[7px] pb-[3px] text-[15px] font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:ease-spring hover:after:scale-x-100";
const linkArrow = "size-[15px] transition-transform duration-300 ease-spring group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]";

function Cover({ p }: { p: Project }) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex-none overflow-hidden bg-(--c1) ${p.wide ? "aspect-[16/9.4] lg:aspect-auto lg:min-h-[380px] lg:w-[54%]" : "aspect-[16/9.4]"}`}
    >
      <i className="absolute -bottom-[30%] -right-[12%] aspect-square w-[46%] rounded-full bg-black/10 transition-transform duration-1000 ease-spring group-hover:-translate-x-[8%] group-hover:-translate-y-[10%] group-hover:scale-110" />
      <i className="absolute left-[7%] top-[10%] aspect-square w-1/5 rounded-full bg-white/10 transition-transform duration-1000 ease-spring group-hover:translate-x-[20%] group-hover:translate-y-[14%]" />
      <div className="absolute -bottom-[8%] left-[9%] right-[9%] top-[16%] z-[1] overflow-hidden rounded-t-[14px] border border-white/20 bg-[#121211eb] shadow-[0_30px_60px_-20px_#00000099] transition-transform duration-700 ease-spring group-hover:-translate-y-[4.5%] group-hover:scale-[1.025]">
        <div className="flex gap-[5px] border-b border-white/10 px-3 py-2.5">
          <i className="size-[7px] rounded-full bg-white/25" />
          <i className="size-[7px] rounded-full bg-white/25" />
          <i className="size-[7px] rounded-full bg-white/25" />
        </div>
        <div className="grid gap-[9px] px-[8%] py-[7%]">
          <p className="font-display text-[clamp(17px,2.3vw,30px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            <small className="mb-1.5 block font-mono text-[11px] font-medium uppercase tracking-widest text-(--c3)">{p.kind}</small>
            {p.tagline}
          </p>
          <i className="h-2 w-[62%] rounded-lg bg-white/10" />
          <i className="h-2 w-2/5 rounded-lg bg-white/10" />
          <div className="mt-[5px] flex gap-2">
            <i className="h-[26px] w-[84px] rounded-full bg-(--c2)" />
            <i className="h-[26px] w-16 rounded-full bg-white/10" />
          </div>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            <i className="h-11 rounded-[9px] bg-(--c1)" />
            <i className="h-11 rounded-[9px] bg-white/10" />
            <i className="h-11 rounded-[9px] bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ p }: { p: Project }) {
  const vars = { "--c1": p.color, "--c2": p.tint, "--c3": p.tint } as CSSProperties;
  return (
    <Tilt
      style={vars}
      className={`sheen group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-panel/60 hover:border-line-2 hover:shadow-[0_30px_60px_-34px_#000] ${p.wide ? "lg:flex-row" : ""}`}
    >
      <Cover p={p} />
      <article className={`relative z-[2] flex flex-1 flex-col gap-3 px-7 pb-7 pt-[26px] ${p.wide ? "lg:justify-center lg:p-10" : ""}`}>
        <p className="flex items-center gap-2.5 font-mono text-[12.5px] font-medium uppercase tracking-widest text-dim">
          <b className="font-medium text-(--c3)">{p.kind}</b>
          <span>·</span>
          <span>{p.year}</span>
        </p>
        <h3 className="font-display text-[clamp(25px,2.6vw,34px)] font-extrabold leading-[1.1] tracking-[-0.03em]">{p.name}</h3>
        <p className="text-base text-muted">{p.desc}</p>
        <ul className="mt-0.5 flex flex-wrap gap-[7px]">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-line-2 bg-white/[0.03] px-[11px] py-[5px] text-[12.5px] font-medium text-[#d9d5ca]">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-[18px] pt-2.5">
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className={link}>
              Live site <ArrowUpRight className={linkArrow} />
            </a>
          )}
          {p.repo && (
            <a href={`${GITHUB}/${p.repo}`} target="_blank" rel="noopener noreferrer" className={`${link} ${p.live ? "text-muted" : ""}`}>
              Source code <ArrowUpRight className={linkArrow} />
            </a>
          )}
        </div>
      </article>
    </Tilt>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="wrap">
        <div className="mb-[52px] flex flex-wrap items-end justify-between gap-7">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <Heading>Projects I&apos;ve built</Heading>
            <p className="max-w-[38em] text-muted">Products for banking, government, education and communities.</p>
          </Reveal>
          <Reveal>
            <a href={`${GITHUB}?tab=repositories`} target="_blank" rel="noopener noreferrer" className={btn.ghost}>
              All repositories <ArrowUpRight className={btn.arrow} />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-[22px] lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1} className={p.wide ? "lg:col-span-2" : ""}>
              <Card p={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-2 font-display text-2xl font-extrabold tracking-[-0.02em]">More from GitHub</h3>
          </Reveal>
          {more.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[34px_1fr_auto] items-center gap-5 rounded-[14px] border-b border-line px-3 py-5 transition-[background-color,padding] duration-500 ease-spring hover:bg-white/5 hover:px-[22px] lg:grid-cols-[44px_1.1fr_1.6fr_auto]"
              >
                <span className="font-mono text-[13px] font-medium text-dim">{String(i + 1).padStart(2, "0")}</span>
                <strong className="font-display text-xl font-semibold tracking-[-0.02em]">{m.name}</strong>
                <span className="hidden text-[15px] text-muted lg:block">{m.desc}</span>
                <span className="flex items-center gap-4">
                  <em className="hidden whitespace-nowrap font-mono text-[12.5px] not-italic text-dim md:block">{m.tech}</em>
                  <ArrowUpRight className="size-[18px] text-dim transition duration-300 ease-spring group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-accent" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
