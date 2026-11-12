import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Eyebrow, Heading } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="wrap">
        <Reveal className="mb-11">
          <Eyebrow>Experience</Eyebrow>
          <Heading>Where I&apos;ve shipped.</Heading>
        </Reveal>

        <div className="relative grid gap-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-0.5 before:bg-line-2">
          {experience.map((job) => (
            <Reveal key={job.company} className="relative pl-12">
              <i className="absolute left-1 top-7 size-4 rounded-full border-[3px] border-accent bg-ink shadow-[0_0_0_5px_#f2c23022]" />
              <article className="rounded-[26px] border border-line bg-panel/60 p-6 transition-colors duration-300 hover:border-line-2 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-[clamp(22px,2.4vw,30px)] font-extrabold leading-tight tracking-[-0.02em]">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <time className="font-mono text-[13px] font-medium tracking-[0.08em] text-accent">{job.period}</time>
                </div>
                <p className="mt-1 text-[15px] text-dim">
                  {job.place}
                  {job.note && ` · ${job.note}`}
                </p>
                <ul className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-5 text-base text-muted before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-ok">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
