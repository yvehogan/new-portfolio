"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      if (spot.current) spot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div aria-hidden="true">
      <div className="grid-lines pointer-events-none fixed inset-0 -z-10" />
      <div
        ref={spot}
        className="pointer-events-none fixed left-0 top-0 -z-10 -ml-[260px] -mt-[260px] hidden size-[520px] rounded-full bg-[radial-gradient(circle,#ffffff0d,transparent_62%)] md:block"
        style={{ transform: "translate3d(-999px, -999px, 0)" }}
      />
    </div>
  );
}
