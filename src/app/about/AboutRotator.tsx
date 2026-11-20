"use client";

import { useEffect, useState } from "react";
import StorySection from "@/components/StorySection";
import { InnerHero } from "@/components/ui";
import { heroSubtitle } from "@/lib/data";

type Person = {
  name: string;
  hero: string;
  heroAlt: string;
  image: string;
  alt: string;
  paragraphs: string[];
  /** layout values from that person's design frame (1440 wide) */
  layout: {
    imageW: string;
    imageH: string;
    minH: string;
    textLeft: string;
    textMaxW: string;
    textTop: string;
    bottomGap: string;
    paragraphGap?: string;
  };
};

const people: Person[] = [
  // About.pdf
  {
    name: "Karan Singh",
    hero: "/images/about-hero.jpg",
    heroAlt: "Sculpture of a seated figure with wings in a stone courtyard",
    image: "/images/karan-singh.jpg",
    alt: "Karan Singh seated in a leather armchair",
    paragraphs: [
      "Karan is graduated from the school of planning & architecture, Delhi, after his graduation he completed his masters in urban planning. working on projects ranging from architecture to interiors. He always motivated to transform what is regular and conventional and flirt with the boundaries of art in architecture. Careful deliberation at each step of process for building the project. In the urban and economic scenario today, that dictates most of the construction and architectural practices. He attempts to erase the difference between practicality and innovation.",
      "Karan’s intricate looks highlight his innovative approach towards materials and craftsmanship. Weaving every project through a concept makes his work unique and he envisions buildings as pieces of art. His thinking is significant to the point where the lines between fantasy and fact blur also reflecting his ever lasting love affair with nature and its beauty, reminiscing panoramic landscapes made to add layers of nature and inspired forms in his projects.",
    ],
    layout: {
      imageW: "md:w-[42.57vw]",
      imageH: "md:h-[58.47vw]",
      minH: "md:min-h-[58.47vw]",
      textLeft: "md:pl-[48.54vw]",
      textMaxW: "md:max-w-[45.56vw]",
      textTop: "md:pt-[2.08vw]",
      bottomGap: "md:mb-[2.99vw]",
    },
  },
  // ANIMATION.pdf
  {
    name: "Neha Gupta",
    hero: "/images/about-hero-neha.jpg",
    heroAlt: "Living room with gold-capped columns, a crystal chandelier and curved white sofas",
    image: "/images/neha-gupta.jpg",
    alt: "Neha Gupta seated in front of a large painting",
    paragraphs: [
      "For Neha, Architecture is not just a profession but an attitude to life. she completed graduation & post graduation in housing planning and from school of planning & architecture Delhi.",
      "The joy of process of developing an interior that will soon become a new home is something that gives inspiration and new creative powers. As she is never afraid to experiment and always follow the latest trends in fashion, design, materials, contemporary art. Her mission is to create a new quality of life, develop individual solutions and make an incredible dreams come true.",
      "The joy of process of developing an interior that will soon become a new home is something that gives inspiration and new creative powers. As she is never afraid to experiment and always follow the latest trends in fashion, design, materials, contemporary art. Her mission is to create a new quality of life, develop individual solutions and make an incredible dreams come true.",
      "The joy of process of developing an interior that will soon become a new home is something that gives inspiration and new creative powers.",
    ],
    layout: {
      imageW: "md:w-[40.7vw]",
      imageH: "md:h-[70.76vw]",
      minH: "md:min-h-[70.76vw]",
      textLeft: "md:pl-[48.19vw]",
      textMaxW: "md:max-w-[45.8vw]",
      textTop: "md:pt-[3.4vw]",
      bottomGap: "md:mb-[3.4vw]",
      paragraphGap: "md:space-y-[35px]",
    },
  },
];

/** How long each founder stays on screen before swapping (ms). */
const HOLD = 7000;

export default function AboutRotator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % people.length), HOLD);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <div className="bg-black">
      <InnerHero
        title="About Us"
        subtitle={heroSubtitle}
        image={people.map((p) => p.hero)}
        alt={people.map((p) => p.heroAlt)}
        active={active}
      />

      <div
        className="relative grid"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {people.map((p, i) => {
          const on = i === active;
          // Outgoing: text fades first, then the photo. Incoming: photo first, then the text slides in.
          const imageClass = `transition-opacity duration-1000 ease-in-out ${on ? "opacity-100 delay-[400ms]" : "opacity-0 delay-200"}`;
          const textClass = `transition-[opacity,transform] duration-700 ease-out ${
            on ? "opacity-100 translate-y-0 delay-[800ms]" : "opacity-0 translate-y-4 delay-0"
          }`;
          return (
            <div
              key={p.name}
              className={`col-start-1 row-start-1 ${on ? "z-10" : "pointer-events-none z-0"}`}
              aria-hidden={!on}
              inert={!on}
            >
              <StorySection
                heading={p.name}
                image={p.image}
                alt={p.alt}
                paragraphs={p.paragraphs}
                {...p.layout}
                imageClass={imageClass}
                textClass={textClass}
              />
            </div>
          );
        })}

        {/* switcher — also lets visitors pick a founder or stop on one (hovering pauses the rotation) */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-[5vw] md:left-[3vw] md:translate-x-0">
          {people.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.name}`}
              aria-pressed={i === active}
              className={`h-2 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
