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
        <div className="grid items-start gap-x-16 gap-y-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>About me</Eyebrow>
            <Heading>Design sense, engineering discipline.</Heading>
            <div className="mt-7">
              <Magnetic>
                <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={btn.primary}>
                  View my CV <ArrowUpRight className={btn.arrow} />
                </a>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-[18px] text-[18px] text-muted lg:pt-10 [&_strong]:font-medium [&_strong]:text-fg">
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
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="mb-6 font-mono text-[13.5px] font-medium uppercase tracking-[0.14em] text-dim">What I work with</h3>
          </Reveal>
          <div className="border-t border-line">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05}>
                <div className="group grid gap-x-10 gap-y-3 border-b border-line py-7 transition-colors duration-500 hover:border-accent/50 lg:grid-cols-[240px_1fr] lg:items-baseline lg:py-9">
                  <h4 className="flex items-baseline gap-4 font-mono text-[13px] uppercase tracking-[0.12em] text-dim transition-colors duration-300 group-hover:text-accent">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{group.title}</span>
                  </h4>
                  <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-[clamp(21px,2.7vw,36px)] font-semibold leading-[1.25] tracking-[-0.025em]">
                    {group.items.map((item, j) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <span className="cursor-default text-fg/75 transition-colors duration-300 hover:text-accent">{item}</span>
                        {j < group.items.length - 1 && (
                          <span aria-hidden="true" className="text-[0.7em] text-fg/20">
                            /
                          </span>
                        )}
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
