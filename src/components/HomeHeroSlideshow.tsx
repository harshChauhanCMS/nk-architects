"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/lib/data";

const slides = [
  { src: images.hero, alt: "Living room interior by N.K. Architects" },
  { src: "/images/hero-interior.jpg", alt: "Elegant interior with a marble TV console, arched mirror and sculptural lighting" },
  { src: "/images/hero-courtyard.jpg", alt: "Marble courtyard with a seated winged sculpture and geometric stone flooring" },
];

export default function HomeHeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!paused && !document.hidden && !motion.matches) {
        setActive((current) => (current + 1) % slides.length);
      }
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              {...slide}
              fill
              priority
              sizes="100vw"
              className={`object-cover transition-transform duration-[6000ms] ease-in-out motion-reduce:transform-none motion-reduce:transition-none ${index === active ? "scale-105" : "scale-100"}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((current) => !current)}
        aria-label={paused ? "Resume hero slideshow" : "Pause hero slideshow"}
        className="absolute bottom-5 right-5 z-10 rounded-full border border-white/40 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:hidden"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </>
  );
}
