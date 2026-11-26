import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "@/components/ui";
import BlogSlider from "@/components/BlogSlider";
import { featuredBlog as post } from "@/lib/blogs";

export const metadata: Metadata = { title: post.title, description: "Explore textured finishes, earthy colours and artisanal details in this N.K. Architects blog article." };

export default function BlogArticlePage() {
  return (
    <div className="bg-black">
      <InnerHero title="Blogs" subtitle="Building great infrastructures made easy" image="/images/projects/karol-bagh/living-room.jpg" alt="Living room with sculptural furniture and illuminated wall niches" />
      <article className="px-6 py-12 md:px-[11.5vw] md:py-16">
        <p className="text-base text-neutral-400"><Link href="/blogs" className="underline underline-offset-4">Blogs</Link> / <time dateTime="2024-10-23">October 23, 2024</time> / by {post.author}</p>
        <h1 className="mt-6 text-3xl font-semibold md:text-5xl">{post.title}</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-200 md:text-xl">
          {post.introduction.map((text) => <p key={text}>{text}</p>)}
        </div>
        {post.sections.map((section, index) => (
          <section key={`${section.image}-${index}`} className="mt-10 md:mt-14">
            <Image src={`/images/blogs/${section.image}.jpg`} alt={section.alt} width={1530} height={665} sizes="(min-width: 768px) 77vw, 90vw" className="h-auto w-full" />
            <p className="mt-7 text-lg leading-relaxed text-neutral-200 md:text-xl">{section.text}</p>
          </section>
        ))}
        <Link href="/blogs" className="mt-12 inline-block rounded border border-white/40 px-6 py-3 text-lg hover:bg-white/10">All blogs</Link>
      </article>
      <section className="border-t border-white/20 px-6 py-16 md:px-[7vw]">
        <h2 className="mb-10 text-3xl font-semibold">More from our blog</h2>
        <BlogSlider />
      </section>
    </div>
  );
}
