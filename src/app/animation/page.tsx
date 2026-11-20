import type { Metadata } from "next";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { PageHero } from "@/components/ui";
import { animations, images } from "@/lib/data";

export const metadata: Metadata = { title: "Animation" };

// Placeholder: replace each thumbnail with a <video> or YouTube embed once the walkthroughs are ready.
export default function AnimationPage() {
  return (
    <>
      <PageHero
        title="Animation"
        subtitle="3D walkthroughs and visualisations that let you experience a space before it is built."
        image={images.hero}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        {animations.map((a) => (
          <figure key={a.title} className="group">
            <div className="relative aspect-video overflow-hidden bg-panel-2">
              <Image src={a.image} alt={a.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-black/40 text-2xl transition group-hover:scale-110">
                  <FiPlay className="ml-1" />
                </span>
              </div>
            </div>
            <figcaption className="mt-3 text-sm uppercase tracking-wider">{a.title}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
