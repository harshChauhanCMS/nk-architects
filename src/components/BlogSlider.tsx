"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { blogPreviews } from "@/lib/blogs";

const pages = [blogPreviews.slice(0, 3), blogPreviews.slice(3, 6), blogPreviews.slice(6, 9)];

export default function BlogSlider() {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const gesture = useRef<{ id: number; x: number; y: number; axis: "x" | "y" | null } | null>(null);
  const resetDrag = () => {
    gesture.current = null;
    setDragOffset(0);
    setDragging(false);
  };
  const select = (index: number) => setActive(Math.max(0, Math.min(pages.length - 1, index)));

  return (
    <section aria-label="Blog excerpts" aria-roledescription="carousel">
      <div
        className={`touch-pan-y select-none overflow-hidden ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, axis: null };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const start = gesture.current;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (!start.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 8) {
            start.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
          }
          if (start.axis !== "x") return;
          setDragging(true);
          const atEdge = (active === 0 && dx > 0) || (active === pages.length - 1 && dx < 0);
          const width = event.currentTarget.clientWidth;
          setDragOffset(Math.max(-width, Math.min(width, atEdge ? dx * 0.2 : dx)));
        }}
        onPointerUp={(event) => {
          const start = gesture.current;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          const threshold = Math.min(80, event.currentTarget.clientWidth * 0.15);
          if (start.axis === "x" && Math.abs(dx) > threshold) select(active + (dx < 0 ? 1 : -1));
          resetDrag();
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={resetDrag}
        onLostPointerCapture={resetDrag}
      >
        <div className={`flex items-start ${dragging ? "transition-none" : "transition-transform duration-700 ease-in-out motion-reduce:transition-none"}`} style={{ transform: `translateX(calc(-${active * 100}% + ${dragOffset}px))` }}>
          {pages.map((posts, page) => (
            <div key={page} aria-label={`Page ${page + 1} of ${pages.length}`} aria-hidden={active !== page} inert={active !== page} className="grid w-full shrink-0 grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {posts.map((post) => (
                <article key={post.image}>
                  <div className="relative aspect-[1.45] overflow-hidden">
                    <Image src={`/images/blogs/${post.image}.jpg`} alt={post.title} fill draggable={false} sizes="(min-width: 768px) 29vw, 90vw" className="object-cover" />
                  </div>
                  <time dateTime="2024-10-23" className="mt-4 block text-sm text-neutral-400">October 23, 2024</time>
                  <h3 className="mt-2 text-2xl font-medium leading-snug">{post.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-neutral-300">{post.excerpt}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Blog slider pages" className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={() => select(active - 1)} disabled={active === 0} className="min-h-11 rounded border border-white/40 px-4 text-base disabled:opacity-30 enabled:hover:bg-white/10">Previous</button>
        {pages.map((_, page) => (
          <button key={page} type="button" onClick={() => select(page)} aria-label={`Show blog page ${page + 1}`} aria-current={active === page ? "page" : undefined} className={`h-11 w-11 rounded border border-white/40 text-base transition-colors ${active === page ? "bg-white text-black" : "hover:bg-white/10"}`}>{page + 1}</button>
        ))}
        <button type="button" onClick={() => select(active + 1)} disabled={active === pages.length - 1} className="min-h-11 rounded border border-white/40 px-4 text-base disabled:opacity-30 enabled:hover:bg-white/10">Next</button>
      </nav>
      <p role="status" className="sr-only">Showing blog page {active + 1} of {pages.length}</p>
    </section>
  );
}
