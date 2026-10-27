"use client";

import { useId, useState } from "react";
import { BrakeAssembly } from "@/v2/components/brake/BrakeAssembly";

export function RefurbCompare() {
  const [pos, setPos] = useState(50);
  const labelId = useId();

  return (
    <figure className="cut-corner relative bg-[#0d1220] p-4 sm:p-6">
      <div className="relative mx-auto aspect-square w-full max-w-[34rem] select-none overflow-clip">
        <BrakeAssembly condition="new" className="absolute inset-0" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <BrakeAssembly condition="worn" className="h-full w-full" />
        </div>

        <span className="absolute left-0 top-0 bg-white px-3 py-1 font-display text-sm font-semibold text-ink">As received</span>
        <span className="absolute right-0 top-0 bg-regan-red px-3 py-1 font-display text-sm font-semibold text-white">Refurbished</span>

        {/* Divider and grip */}
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }} aria-hidden>
          <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-regan-red text-white shadow-lg peer-focus-visible:ring-4">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2 2 7l5 5M15 2l5 5-5 5" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare as received and refurbished"
          aria-describedby={labelId}
          className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <div className="pointer-events-none absolute inset-0 ring-regan-red peer-focus-visible:ring-4" aria-hidden />
      </div>
      <figcaption id={labelId} className="mx-auto mt-4 max-w-[34rem] text-sm text-white/60">
        Illustration of an air disc brake. Drag the handle, or use the arrow keys, to compare.
      </figcaption>
    </figure>
  );
}

