"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";
import { btn, Eyebrow, Heading } from "./ui";

const field =
  "w-full rounded-[14px] border border-line-2 bg-ink/65 px-4 py-3.5 text-base outline-none transition duration-300 placeholder:text-dim focus:border-accent focus:shadow-[0_0_0_4px_#f2c23024]";
const social =
  "flex items-center justify-between gap-4 rounded-2xl border border-line bg-white/[0.03] px-5 py-[15px] font-bold transition duration-500 ease-spring hover:translate-x-1.5 hover:border-line-2 hover:bg-white/10";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(profile.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <div className="relative grid gap-14 overflow-hidden rounded-[36px] border border-line-2 bg-panel p-[clamp(28px,5vw,64px)] lg:grid-cols-2">
            <div className="relative">
              <Eyebrow>Contact</Eyebrow>
              <Heading>
                Let&apos;s work <span className="text-accent">together.</span>
              </Heading>
              <p className="max-w-[38em] text-muted">Have a project, a role or an idea? Send a message and I&apos;ll get back to you quickly.</p>
              <div className="mt-[30px] grid gap-2.5">
                <a href={`mailto:${profile.email}`} className={social}>
                  Email <small className="truncate font-mono text-[13px] font-normal text-dim">{profile.email} ↗</small>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={social}>
                  LinkedIn <small className="font-mono text-[13px] font-normal text-dim">in/evelyn-ita ↗</small>
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={social}>
                  GitHub <small className="font-mono text-[13px] font-normal text-dim">@yvehogan ↗</small>
                </a>
              </div>
            </div>

            <form onSubmit={submit} className="relative grid content-start gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-[7px] text-sm font-medium text-muted">
                  Name
                  <input name="name" autoComplete="name" placeholder="Your name or organisation" className={field} />
                </label>
                <label className="grid gap-[7px] text-sm font-medium text-muted">
                  Email *
                  <input name="email" type="email" required autoComplete="email" placeholder="you@mail.com" className={field} />
                </label>
              </div>
              <label className="grid gap-[7px] text-sm font-medium text-muted">
                Tell me about the project *
                <textarea name="message" required placeholder="We need a frontend engineer to work on..." className={`${field} min-h-[140px] resize-y`} />
              </label>
              <div>
                <button type="submit" disabled={status === "sending"} className={btn.primary}>
                  {status === "sending" ? "Sending..." : "Send message"} <ArrowUpRight className={btn.arrow} />
                </button>
              </div>
              <p role="status" className={`min-h-[1.5em] text-[14.5px] ${status === "error" ? "text-[#ff8f8f]" : "text-ok"}`}>
                {status === "sent" && "Message sent. I'll get back to you soon."}
                {status === "error" && "Something went wrong. Please try again, or email me directly."}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
