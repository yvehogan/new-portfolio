import type { CSSProperties } from "react";
import { education, mentoring, profile, skills } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Tilt";
import { btn, Eyebrow, Heading } from "./ui";

function List({ title, items }: { title: string; items: typeof education }) {
  return (
    <div className="h-full rounded-[26px] border border-line bg-panel/60 p-6 md:p-8">
      <h3 className="mb-5 font-display text-2xl font-extrabold tracking-[-0.02em]">{title}</h3>
      <ul className="grid gap-5">
        {items.map((item) => (
          <li key={item.title + item.org} className="border-l-2 border-line-2 pl-4 transition-colors duration-300 hover:border-accent">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <strong className="font-display text-lg font-semibold tracking-[-0.01em]">{item.title}</strong>
              {item.period && <time className="font-mono text-[12.5px] text-accent">{item.period}</time>}
            </div>
            <p className="text-[15px] text-fg/80">{item.org}</p>
            <p className="mt-1 text-[15px] text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="wrap">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>About me</Eyebrow>
            <Heading>Design sense, engineering discipline.</Heading>
            <div className="grid gap-[18px] text-muted [&_strong]:font-medium [&_strong]:text-fg">
              <p>
                Hi, I&apos;m Evelyn, a <strong>Frontend Engineer with 4+ years of experience</strong> building production web applications in React,
                Next.js and TypeScript for banking, government and EdTech.
              </p>
              <p>
                I&apos;ve built <strong>AI-powered products</strong>, including an AI learning platform used by a dental school and a website with an AI
                chat assistant. I also test AI chat features and review responses for accuracy, clarity and helpfulness.
              </p>
              <p>
                I care about clean code, accessible design and careful attention to detail. Beyond the frontend I work with{" "}
                <strong>AWS, Azure, Docker and REST APIs</strong>, and I started out as an engineer of a different kind, with a B.Eng. in Petroleum
                Engineering.
              </p>
            </div>
            <div className="mt-7">
              <Magnetic>
                <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={btn.primary}>
                  View my CV <ArrowUpRight className={btn.arrow} />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.07}>
                <div
                  style={{ "--k": group.color } as CSSProperties}
                  className="rounded-[22px] border border-line bg-panel/60 px-6 py-[22px] transition duration-500 ease-spring hover:translate-x-1.5 hover:border-line-2"
                >
                  <h3 className="mb-[13px] flex items-center gap-2.5 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-(--k) before:size-[9px] before:rounded-[3px] before:bg-(--k)">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-[11px] bg-white/5 px-[13px] py-[7px] text-[14.5px] font-medium transition duration-300 ease-spring hover:-translate-y-[3px] hover:bg-white/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-[22px] lg:grid-cols-2">
          <Reveal>
            <List title="Education & training" items={education} />
          </Reveal>
          <Reveal delay={0.1}>
            <List title="Leadership & mentoring" items={mentoring} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
