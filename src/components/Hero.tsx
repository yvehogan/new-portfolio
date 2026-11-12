import { profile, roles, stats } from "@/lib/data";
import { Counter } from "./Counter";
import { ArrowUpRight } from "./Icons";
import { Magnetic, Tilt } from "./Tilt";
import { Typewriter } from "./Typewriter";
import { btn } from "./ui";

export function Hero() {
  return (
    <header className="grid min-h-svh items-center pb-[70px] pt-[130px]">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white/5 py-[7px] pl-[11px] pr-[15px] text-sm text-muted">
            <i className="size-[9px] animate-ping-soft rounded-full bg-ok" />
            {profile.location} · open to new roles
          </span>

          <h1 className="mb-5 mt-[22px] font-display text-[clamp(46px,8.4vw,108px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="inline-block translate-y-[110%] animate-rise">{profile.firstName}</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="text-accent inline-block translate-y-[110%] animate-rise [animation-delay:0.12s]">
                {profile.lastName}.
              </span>
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
                  {s.suffix}
                </dd>
                <dt className="mt-1 text-sm leading-snug text-dim">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div aria-hidden="true" className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="animate-float">
            <Tilt max={9} className="rounded-[22px] border border-line-2 bg-panel shadow-[0_40px_90px_-30px_#000]">
              <div className="flex items-center gap-[7px] border-b border-line px-4 py-3.5">
                <i className="size-[11px] rounded-full bg-[#ff5f57]" />
                <i className="size-[11px] rounded-full bg-[#febc2e]" />
                <i className="size-[11px] rounded-full bg-[#28c840]" />
                <em className="ml-2.5 font-mono text-[12.5px] not-italic text-dim">evelyn.ts</em>
              </div>
              <pre className="overflow-auto px-5 pb-6 pt-5 font-mono text-[13.5px] leading-[1.8] text-[#d9d5ca]">
                <code>
                  <span className="text-[#f2c230]">const</span> <span className="text-[#f3f0e8]">evelyn</span> = {"{\n"}
                  {"  role: "}<span className="text-[#b9d6a3]">&quot;Frontend Engineer&quot;</span>{",\n"}
                  {"  stack: ["}<span className="text-[#b9d6a3]">&quot;React&quot;</span>, <span className="text-[#b9d6a3]">&quot;Next.js&quot;</span>{",\n"}
                  {"          "}<span className="text-[#b9d6a3]">&quot;TypeScript&quot;</span>, <span className="text-[#b9d6a3]">&quot;Tailwind&quot;</span>{"],\n"}
                  {"  builds: ["}<span className="text-[#b9d6a3]">&quot;banking&quot;</span>, <span className="text-[#b9d6a3]">&quot;gov&quot;</span>{",\n"}
                  {"           "}<span className="text-[#b9d6a3]">&quot;EdTech&quot;</span>, <span className="text-[#b9d6a3]">&quot;AI&quot;</span>{"],\n"}
                  {"  cloud: ["}<span className="text-[#b9d6a3]">&quot;AWS&quot;</span>, <span className="text-[#b9d6a3]">&quot;Azure&quot;</span>, <span className="text-[#b9d6a3]">&quot;Docker&quot;</span>{"],\n"}
                  {"  mentors: "}<span className="text-[#f2c230]">true</span>{",\n"}
                  {"  "}<span className="text-[#f3f0e8]">ship</span>{": () => "}<span className="text-[#f2c230]">true</span>, <span className="text-[#76736b]">{"// always"}</span>{"\n"}
                  {"};"}
                </code>
              </pre>
            </Tilt>
          </div>
          <div className="absolute -top-[22px] right-1.5 flex animate-float-slow items-center gap-2 rounded-[14px] border border-line-2 bg-[#1c1c1af2] px-[15px] py-2.5 text-[13.5px] font-bold shadow-[0_18px_40px_-16px_#000] [animation-delay:-2s] lg:-right-2.5">
            <i className="size-2.5 rounded-[3px] bg-ok" />
            AI-powered products
          </div>
          <div className="absolute -bottom-5 left-1.5 flex animate-float-slow items-center gap-2 rounded-[14px] border border-line-2 bg-[#1c1c1af2] px-[15px] py-2.5 text-[13.5px] font-bold shadow-[0_18px_40px_-16px_#000] [animation-delay:-4s] lg:-left-[18px]">
            <i className="size-2.5 rounded-[3px] bg-accent" />
            Pixel-perfect UI
          </div>
        </div>
      </div>
    </header>
  );
}
