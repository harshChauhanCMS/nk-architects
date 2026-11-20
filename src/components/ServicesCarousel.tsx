"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Service } from "@/lib/data";

/*
 * Layout from the Figma frame (1440 wide):
 *  - active card 640px wide, image 640×357
 *  - neighbour cards scaled to ~0.855 and dimmed, 66px gap, bleeding off the screen edges
 * --w is the active card width; every offset is derived from it so it scales down on small screens.
 */
const SIDE_SCALE = 0.855;
const STEP = 1.031; // (0.5w + 66/640·w + 0.855·0.5w) / w

export default function ServicesCarousel({ services, initialIndex = 0 }: { services: Service[]; initialIndex?: number }) {
  const [index, setIndex] = useState(initialIndex);
  const n = services.length;
  const go = (d: number) => setIndex((i) => (i + d + n) % n);

  // shortest signed distance from the active slide (so it wraps around)
  const offsetOf = (i: number) => {
    let d = i - index;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div className="relative [--w:min(640px,82vw)]">
      <div className="grid">
        {services.map((s, i) => {
          const d = offsetOf(i);
          const visible = Math.abs(d) <= 1;
          return (
            <article
              key={s.title}
              aria-hidden={d !== 0}
              className="col-start-1 row-start-1 w-[var(--w)] justify-self-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
              style={{
                transform: `translateX(calc(var(--w) * ${STEP * d})) scale(${d === 0 ? 1 : SIDE_SCALE})`,
                transformOrigin: "center top",
                opacity: d === 0 ? 1 : visible ? 0.3 : 0,
                zIndex: d === 0 ? 2 : 1,
                pointerEvents: d === 0 ? "auto" : "none",
              }}
            >
              <div className="relative aspect-[640/357] overflow-hidden bg-panel-2" style={{ marginTop: d === 0 ? 0 : "4%" }}>
                <Image src={s.image} alt={s.title} fill sizes="(min-width: 768px) 640px, 82vw" className="object-cover" />
              </div>
              <h3 className="mt-5 text-lg font-medium uppercase text-[#e8e8e8] md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-[1.55] text-[#d6d6d6] md:text-[18px]">{s.description}</p>
            </article>
          );
        })}
      </div>

      {/* arrows sit just inside the neighbouring cards, level with the image centre */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous service"
        className="absolute z-10 flex h-14 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-white/70 bg-black/30 text-xl transition hover:bg-black/60"
        style={{ top: "calc(var(--w) * 0.279)", left: "max(8px, calc(50% - var(--w) * 0.603 - 50px))" }}
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next service"
        className="absolute z-10 flex h-14 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-white/70 bg-black/30 text-xl transition hover:bg-black/60"
        style={{ top: "calc(var(--w) * 0.279)", left: "min(calc(100% - 40px), calc(50% + var(--w) * 0.603 + 18px))" }}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
