import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "@/components/ui";
import BlogSlider from "@/components/BlogSlider";
import { featuredBlog } from "@/lib/blogs";

export const metadata: Metadata = { title: "Blogs", description: "Architecture, residential interiors and urban planning inspiration from N.K. Architects." };

export default function BlogsPage() {
  return (
    <div className="bg-black">
      <InnerHero title="Blogs" subtitle="Building great infrastructures made easy" image="/images/projects/karol-bagh/living-room.jpg" alt="Contemporary living room and illuminated bar by N.K. Architects" />
      <div className="px-6 pb-20 pt-10 md:px-[7vw] md:pt-16">
        <p className="mb-10 text-center text-lg font-semibold md:text-2xl">Architecture | Residential | Urban Planning</p>
        <section className="mb-16 border-b border-white/20 pb-12">
          <Link href={`/blogs/${featuredBlog.slug}`} className="group grid items-center gap-8 md:grid-cols-2">
            <div className="relative aspect-[1.8] overflow-hidden">
              <Image src="/images/blogs/trends-dining.jpg" alt={featuredBlog.sections[0].alt} fill sizes="(min-width: 768px) 43vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" />
            </div>
            <div>
              <p className="text-base text-neutral-400">Featured article · October 23, 2024 · by {featuredBlog.author}</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{featuredBlog.title}</h2>
              <span className="mt-6 inline-block text-lg underline underline-offset-4">Read article</span>
            </div>
          </Link>
        </section>
        <h2 className="mb-8 text-3xl font-semibold">From our blog</h2>
        <BlogSlider />
      </div>
    </div>
  );
}
