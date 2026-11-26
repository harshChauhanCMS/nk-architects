import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "@/components/ui";
import { blogPreviews, featuredBlog } from "@/lib/blogs";

export const metadata: Metadata = { title: "Blogs", description: "Architecture, residential interiors and urban planning inspiration from N.K. Architects." };

export default function BlogsPage() {
  return (
    <div className="bg-black">
      <InnerHero title="Blogs" subtitle="Building great infrastructures made easy" image="/images/projects/karol-bagh/living-room.jpg" alt="Contemporary living room and illuminated bar by N.K. Architects" />
      <div className="px-6 pb-20 pt-10 md:px-[7vw] md:pt-16">
        <p className="mb-10 text-center text-lg font-semibold md:text-2xl">Architecture | Residential | Urban Planning</p>
        <section aria-label="Blog articles" className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {blogPreviews.map((post) => (
            <article key={post.image}>
              <Link href={`/blogs/${featuredBlog.slug}`} className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white">
                <div className="relative aspect-[1.45] overflow-hidden">
                  <Image src={`/images/blogs/${post.image}.jpg`} alt={post.title} fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 44vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" />
                </div>
                <time dateTime="2024-10-23" className="mt-4 block text-sm text-neutral-400">October 23, 2024</time>
                <h2 className="mt-2 text-2xl font-medium leading-snug group-hover:underline underline-offset-4">{post.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-neutral-300">{post.excerpt}</p>
                <span className="mt-4 inline-block text-base underline underline-offset-4">Read article</span>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
