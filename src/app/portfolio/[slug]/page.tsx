import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SocialIcons from "@/components/SocialIcons";
import PortfolioVideo from "@/components/PortfolioVideo";
import { projects } from "@/lib/data";

/*
 * Project page, built from the "Portfolio … Residence.pdf" designs (1440 × 2500). Per-project differences
 * (hero gradient, heading position/underline, row gap, video slot) live in each project's `detail` in data.ts.
 *  hero 1440×682 — photo already darkened; title 90px #EEEEEE (baseline y405); summary 24px/35px #CDCDCD, 3 lines
 *  hero bottom gradient #D9D9D9 @40% → #000 @0%: "tall" = solid 27px, gone by 120px; "short" = solid 7px, gone by 32px
 *  heading 80px #CDCDCD at x162 (baseline y782) · body 24px/35px #CDCDCD, paragraphs one blank line apart
 *  gallery 536×409 tiles, 40px column gap / 50px row gap, from y1272 · footer at y2217
 *  tile gradient (bottom 116px): #D9D9D9 @0% → #050505 @50% at 63.6%, then #050505 @50%
 */

// Figma interpolates colour and opacity separately; the extra stops reproduce that in CSS.
const heroFades = {
  tall: "linear-gradient(to top, rgba(217,217,217,.4) 0%, rgba(217,217,217,.4) 3.96%, rgba(163,163,163,.3) 7.37%, rgba(108,108,108,.2) 10.78%, rgba(54,54,54,.1) 14.19%, rgba(0,0,0,0) 17.6%)",
  short:
    "linear-gradient(to top, rgba(217,217,217,.4) 0%, rgba(217,217,217,.4) 1.06%, rgba(163,163,163,.3) 1.96%, rgba(108,108,108,.2) 2.86%, rgba(54,54,54,.1) 3.75%, rgba(0,0,0,0) 4.65%)",
};
const tileFade =
  "linear-gradient(to bottom, rgba(217,217,217,0) 71.6%, rgba(164,164,164,.125) 76.1%, rgba(111,111,111,.25) 80.65%, rgba(58,58,58,.375) 85.2%, rgba(5,5,5,.5) 89.7%, rgba(5,5,5,.5) 100%)";

const withDetail = projects.filter((p) => p.detail);

export function generateStaticParams() {
  return withDetail.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = withDetail.find((x) => x.slug === slug);
  return p
    ? { title: `${p.name}, ${p.location}`, description: p.detail!.summary }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = withDetail.find((p) => p.slug === slug);
  if (!project?.detail) notFound();
  const d = project.detail;

  const tile = "relative aspect-[536/409] overflow-hidden bg-[#111]";

  return (
    <div className="bg-black">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[460px] md:h-auto md:min-h-0 md:aspect-[1440/682]">
        <Image
          src={d.hero}
          alt={d.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: d.heroOpacity ?? 1 }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: heroFades[d.heroFade] }}
        />
        <SocialIcons
          direction="col"
          className="intro-fade absolute left-6 top-[30%] md:left-[7.7vw] md:top-[37%]"
        />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center md:top-[48.24%] md:translate-y-0">
          <h1
            className="text-[52px] font-normal uppercase leading-none md:text-[clamp(56px,6.25vw,90px)]"
            style={{
              color: d.heroTitleColor ?? "#eeeeee",
              // some designs lift the title a few px above the usual baseline (y405); em-based so it scales
              transform: d.heroTitleRaise ? `translateY(-${d.heroTitleRaise / 90}em)` : undefined,
            }}
          >
            {d.title ?? project.name}
          </h1>
          <p className="mx-auto mt-3 max-w-[790px] text-base leading-[1.46] text-[#cdcdcd] md:mt-[18px] md:max-w-[54.9vw] md:text-[clamp(16px,1.67vw,24px)]">
            {d.summary}
          </p>
        </div>
      </section>

      {/* STORY + GALLERY */}
      <section
        className="mx-auto max-w-[1164px] px-6 pb-16 pt-10 md:pb-[calc(127px-var(--row-gap)-var(--gallery-shift))] md:pt-[33px]"
        style={
          {
            "--row-gap": `${d.galleryRowGap ?? 50}px`,
            // first gallery row sits at y1272 by default; footer always starts at y2217
            "--gallery-shift": `${(d.galleryTop ?? 1272) - 1272}px`,
          } as React.CSSProperties
        }
      >
        {/* heading: offsets and underline are em-based (80px design size) so they scale with the font */}
        <h2
          className="relative pb-3 text-[44px] font-normal uppercase leading-none md:text-[clamp(44px,5.56vw,80px)]"
          style={{ color: d.headingColor ?? "#cdcdcd" }}
        >
          <span
            className="inline-block"
            style={{ marginLeft: `${(d.heading.textX - 162) / 80}em` }}
          >
            {d.title ?? project.name}
          </span>
          <span
            aria-hidden
            className="absolute bottom-0 h-px bg-white/55"
            style={{
              left: "-0.0125em",
              width: `${d.heading.underline / 80}em`,
            }}
          />
        </h2>

        <div className="mt-8 space-y-[1.46em] text-base leading-[1.46] text-[#cdcdcd] md:mt-[36px] md:mr-[-30px] md:text-[clamp(16px,1.67vw,24px)]">
          {d.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-[calc(44px+var(--gallery-shift))] md:max-w-[1112px] md:gap-x-[40px] md:gap-y-[var(--row-gap)]">
          {d.gallery.map((g) => (
            <div
              key={g.src}
              className={`${tile} md:translate-x-[var(--dx)]`}
              // small per-tile horizontal nudges from the design (px at 1440)
              style={{ "--dx": `${g.dx ?? 0}px` } as React.CSSProperties}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 536px, 100vw"
                className="object-cover"
              />
              {g.fade && (
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: tileFade }}
                />
              )}
            </div>
          ))}

          {/* video slot */}
          {(d.videoSlot ?? true) && (
            <div
              className={`${tile} ${d.video ? "" : "flex items-center justify-center bg-transparent"}`}
            >
              {d.video ? (
                <PortfolioVideo src={d.video} />
              ) : (
                <p className="text-center text-[56px] font-normal uppercase leading-[1.25] text-white md:text-[clamp(56px,5.56vw,80px)]">
                  Add video
                  <br />
                  here
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
