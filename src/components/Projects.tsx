"use client";

import { useState, type CSSProperties } from "react";
import { featured, GITHUB, more, type Project } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { btn, Eyebrow, Heading } from "./ui";

const link =
  "group/link relative inline-flex items-center gap-[7px] pb-[3px] text-[15px] font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:ease-spring hover:after:scale-x-100";
const linkArrow = "size-[15px] transition-transform duration-300 ease-spring group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]";

const vars = (p: Project) => ({ "--c1": p.color, "--c2": p.tint }) as CSSProperties;

function Cover({ p }: { p: Project }) {
  return (
    <div aria-hidden="true" style={vars(p)} className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-(--c1)">
      <i className="absolute -bottom-[30%] -right-[12%] aspect-square w-[46%] rounded-full bg-black/10" />
      <i className="absolute left-[7%] top-[10%] aspect-square w-1/5 rounded-full bg-white/10" />
      <div className="absolute -bottom-[8%] left-[9%] right-[9%] top-[14%] overflow-hidden rounded-t-[14px] border border-white/20 bg-[#121211eb] shadow-[0_30px_60px_-20px_#00000099]">
        <div className="flex gap-[5px] border-b border-white/10 px-3 py-2.5">
          <i className="size-[7px] rounded-full bg-white/25" />
          <i className="size-[7px] rounded-full bg-white/25" />
          <i className="size-[7px] rounded-full bg-white/25" />
        </div>
        <div className="grid gap-[9px] px-[8%] py-[7%]">
          <p className="font-display text-[clamp(17px,2.2vw,28px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            <small className="mb-1.5 block font-mono text-[11px] font-medium uppercase tracking-widest text-(--c2)">{p.kind}</small>
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

function Details({ p }: { p: Project }) {
  return (
    <div className="grid gap-4">
      <p className="text-base text-muted">{p.desc}</p>
      <ul className="flex flex-wrap gap-[7px]">
        {p.tags.map((t) => (
          <li key={t} className="rounded-full border border-line-2 bg-white/[0.03] px-[11px] py-[5px] text-[12.5px] font-medium text-[#d9d5ca]">
            {t}
          </li>
        ))}
      </ul>
      {(p.live || p.repo) && (
        <div className="flex flex-wrap gap-[18px] pt-1">
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
      )}
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState(0);
  const current = featured[active];

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-7">
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

        <Reveal>
          <div className="grid items-start gap-x-14 lg:grid-cols-[1fr_minmax(0,520px)]">
            <ol className="border-t border-line">
              {featured.map((p, i) => {
                const on = i === active;
                return (
                  <li key={p.name} className="border-b border-line">
                    <button
                      type="button"
                      aria-expanded={on}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => {
                        if (window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) setActive(i);
                      }}
                      onFocus={() => setActive(i)}
                      className="group flex w-full cursor-pointer items-center gap-4 py-5 text-left sm:gap-6 lg:py-[22px]"
                    >
                      <span className={`font-mono text-[13px] transition-colors duration-300 ${on ? "text-ok" : "text-dim"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 font-display text-[clamp(26px,3.6vw,46px)] font-extrabold leading-none tracking-[-0.035em] transition-[color,translate] duration-500 ease-spring ${
                          on ? "translate-x-2 text-fg" : "text-fg/40 group-hover:text-fg/70"
                        }`}
                      >
                        {p.name}
                      </span>
                      <span className="hidden text-right font-mono text-[12px] uppercase tracking-widest text-dim sm:block">
                        {p.kind}
                        <span className="block text-dim/70">{p.year}</span>
                      </span>
                      <ArrowUpRight
                        className={`size-5 transition duration-500 ease-spring ${on ? "rotate-90 text-accent lg:rotate-0" : "text-dim"}`}
                      />
                    </button>

                    {/* phone and tablet: details open under the row */}
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-spring lg:hidden ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className="grid gap-5 pb-7">
                          <Cover p={p} />
                          <Details p={p} />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* desktop: sticky preview that follows the hovered row */}
            <div className="sticky top-28 hidden lg:block">
              <div key={current.name} className="grid animate-fade-up gap-6 rounded-[28px] border border-line bg-panel/60 p-5">
                <Cover p={current} />
                <div className="px-2 pb-2">
                  <p className="mb-3 flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-widest text-dim">
                    <b className="font-medium text-ok">{current.kind}</b>
                    <span>·</span>
                    <span>{current.year}</span>
                  </p>
                  <Details p={current} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h3 className="mb-6 font-display text-2xl font-extrabold tracking-[-0.02em]">More from GitHub</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.07}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-2 rounded-[20px] border border-line bg-panel/60 p-6 transition duration-500 ease-spring hover:-translate-y-1 hover:border-accent/60"
                >
                  <span className="flex items-center justify-between gap-3">
                    <strong className="font-display text-xl font-semibold tracking-[-0.02em]">{m.name}</strong>
                    <ArrowUpRight className="size-[18px] text-dim transition duration-300 ease-spring group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-accent" />
                  </span>
                  <span className="text-[15px] text-muted">{m.desc}</span>
                  <em className="mt-auto pt-3 font-mono text-[12px] not-italic text-dim">{m.tech}</em>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.14}>
              <a
                href={`${GITHUB}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[150px] flex-col justify-between rounded-[20px] border border-dashed border-line-2 p-6 transition duration-500 ease-spring hover:-translate-y-1 hover:border-accent/60"
              >
                <span className="font-mono text-[12px] uppercase tracking-widest text-dim">79 public repositories</span>
                <span className="flex items-center gap-2 font-display text-xl font-semibold tracking-[-0.02em]">
                  See everything on GitHub
                  <ArrowUpRight className="size-[18px] text-accent transition duration-300 ease-spring group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
