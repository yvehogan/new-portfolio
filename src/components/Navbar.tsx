"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { ArrowUp, ArrowUpRight } from "./Icons";
import { btn } from "./ui";

const items = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
      setScrolled(y > 30);
      setShowTop(y > 700);
      let current = "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="bg-accent fixed left-0 top-0 z-[120] h-[3px] w-full origin-left" style={{ transform: `scaleX(${progress})` }} />

      <nav aria-label="Main" className="fixed inset-x-0 top-3.5 z-[100]">
        <div
          className={`wrap flex flex-wrap items-center justify-between gap-x-4 rounded-[26px] border bg-[#151514cc] py-2.5 pl-[18px] pr-3 backdrop-blur-xl backdrop-saturate-150 transition duration-300 md:rounded-full ${
            scrolled ? "border-line-2 shadow-[0_14px_40px_-18px_#000]" : "border-line"
          }`}
        >
          <a href="#top" aria-label={`${profile.fullName}, home`} className="group flex items-center gap-2.5 font-display text-xl font-extrabold tracking-[-0.02em]">
            <b className="bg-accent grid size-[34px] place-items-center rounded-[11px] text-[17px] text-white transition-transform duration-500 ease-spring group-hover:-rotate-12 group-hover:scale-110">
              E
            </b>
            <span>
              evelyn<span className="text-accent">.</span>
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((v) => !v)}
            className="relative size-[42px] cursor-pointer rounded-full border border-line-2 bg-white/5 md:hidden"
          >
            <span className={`absolute inset-x-3 h-0.5 rounded bg-fg transition-all duration-300 ease-spring ${open ? "top-5 rotate-45" : "top-4"}`} />
            <span className={`absolute inset-x-3 h-0.5 rounded bg-fg transition-all duration-300 ease-spring ${open ? "top-5 -rotate-45" : "top-6"}`} />
          </button>

          <ul id="nav-links" className={`${open ? "flex" : "hidden"} w-full flex-col gap-0.5 pb-1.5 pt-2 md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:p-0`}>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-3.5 py-3 text-base font-medium transition-colors duration-200 md:px-[15px] md:py-2 md:text-[15px] ${
                    active === item.id ? "bg-white/10 text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={`${open ? "mb-1.5 block w-full" : "hidden"} md:mb-0 md:block md:w-auto`}>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className={`${btn.primary} w-full justify-center !px-[17px] !py-[9px] !text-[14.5px]`}>
              View CV <ArrowUpRight className={btn.arrow} />
            </a>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-[22px] right-[22px] z-[90] grid size-12 cursor-pointer place-items-center rounded-full border border-line-2 bg-[#1c1c1af2] transition duration-300 ease-spring hover:bg-accent hover:text-white ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp />
      </button>
    </>
  );
}
