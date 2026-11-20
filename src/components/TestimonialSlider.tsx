"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Testimonial } from "@/lib/data";

/*
 * Measurements from the Figma export (section 1440×668):
 *  stars centre y322 · quote 705px wide, 17px / 26px, first line y372 · name 24px semibold, y560
 *  arrows centred at x289 / x1150 (862px apart), y416
 */
export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const go = (d: number) => setIndex((i) => (i + d + n) % n);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 8000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = items[index];
  const arrow =
    "absolute top-[100px] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-[#d4d4d4] transition hover:text-white";

  return (
    <div
      className="relative mx-auto max-w-[862px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={`${arrow} left-0 md:-translate-x-1/2`}>
        <FaChevronLeft className="h-6 w-auto" />
      </button>

      <figure key={index} className="mx-auto max-w-[705px] animate-[fade_0.6s_ease] px-10 text-center md:px-0">
        <div
          className="text-[13px] leading-none tracking-[4px] text-[#f5c542] [padding-left:4px]"
          aria-label={`${t.rating} out of 5 stars`}
        >
          {"★".repeat(t.rating)}
        </div>
        <blockquote className="mt-[30px] text-[15px] leading-[24px] text-[#d6d6d6] md:text-[17px] md:leading-[26px]">
          {t.quote}
        </blockquote>
        <figcaption className="mt-8 text-xl font-semibold leading-none text-[#e0e0e0] md:mt-[33px] md:text-[24px]">
          {t.name}
        </figcaption>
      </figure>

      <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={`${arrow} right-0 md:translate-x-1/2`}>
        <FaChevronRight className="h-6 w-auto" />
      </button>
    </div>
  );
}
