"use client";

import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let word = 0;
    let n = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const w = words[word];
      n += deleting ? -1 : 1;
      setText(w.slice(0, n));
      let wait = deleting ? 34 : 68;
      if (!deleting && n === w.length) {
        deleting = true;
        wait = 1900;
      } else if (deleting && n === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        wait = 320;
      }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <p className="min-h-[1.7em] font-mono text-[clamp(15px,1.7vw,19px)] text-accent">
      <span>{text}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1.05em] w-[0.55em] animate-blink bg-accent align-[-0.15em]" />
    </p>
  );
}
