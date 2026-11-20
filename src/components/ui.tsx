import Image from "next/image";
import Link from "next/link";
import { projectHref, type Project } from "@/lib/data";
import SocialIcons from "./SocialIcons";

export function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-[#dedede] px-4 py-2 text-sm font-medium uppercase tracking-wide text-black shadow-[6px_6px_0_0_#555] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#555] md:px-[22px] md:py-[9px] md:text-[20px] md:shadow-[8px_8px_0_0_#555] md:hover:shadow-[4px_4px_0_0_#555]"
    >
      {children}
    </Link>
  );
}

/** Large section heading with the thin partial underline from the design (Our Journey / About Us). */
export function UnderlinedHeading({
  children,
  size = "text-[44px] md:text-[clamp(48px,5.6vw,84px)]",
  line = "w-[54%]",
  color = "text-[#e4e4e4]",
}: {
  children: React.ReactNode;
  /** font-size classes */
  size?: string;
  /** width class for the partial underline */
  line?: string;
  /** text colour class */
  color?: string;
}) {
  return (
    <h2 className={`relative inline-block pb-3 font-normal uppercase leading-none ${color} ${size}`}>
      {children}
      <span aria-hidden className={`absolute bottom-0 left-0 h-px bg-white/55 ${line}`} />
    </h2>
  );
}

/** Paragraph style used in the Journey / About panels. */
export const panelText =
  "text-justify text-base leading-[1.55] text-[#dcdcdc] md:text-[clamp(16px,1.55vw,22px)]";

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-center text-[40px] font-normal uppercase leading-none text-[#e4e4e4] md:text-[clamp(48px,5.6vw,80px)] ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * Hero used by the Portfolio / About / Journey designs (1440×682):
 * title 90px (top of text box y338), subtitle 28px / 40px line-height, image dimmed.
 */
export function InnerHero({
  title,
  subtitle,
  image,
  alt,
  active = 0,
}: {
  title: string;
  subtitle: string;
  /** one image, or several that cross-fade (the visible one is `active`) */
  image: string | string[];
  alt: string | string[];
  active?: number;
}) {
  const imgs = Array.isArray(image) ? image : [image];
  const alts = Array.isArray(alt) ? alt : [alt];
  return (
    <section className="relative h-[70vh] min-h-[460px] md:h-auto md:min-h-0 md:aspect-[1440/682]">
      {imgs.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === active ? (alts[i] ?? alts[0]) : ""}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />
      <SocialIcons direction="col" className="intro-fade absolute left-6 top-[30%] md:left-[7.7vw] md:top-[37%]" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center md:top-[49.56%] md:translate-y-0">
        <h1 className="text-[52px] font-normal uppercase leading-none text-[#ececec] md:text-[clamp(56px,6.25vw,90px)]">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-[680px] text-lg leading-[1.45] text-[#ececec] md:mt-[10px] md:max-w-[47vw] md:text-[clamp(18px,1.95vw,28px)] md:leading-[1.43]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function ProjectCard({ project, size = "md" }: { project: Project; size?: "md" | "lg" }) {
  const label =
    size === "lg"
      ? "bottom-[17px] left-[29px] text-[24px] leading-[1.25] md:text-[clamp(24px,2.22vw,32px)]"
      : "bottom-[18px] left-[26px] text-[22px] leading-[1.45] md:text-[26px]";
  return (
    <Link
      href={projectHref(project)}
      id={project.slug}
      className={`group relative block overflow-hidden bg-panel-2 ${size === "lg" ? "aspect-[358/510]" : "aspect-[356/510]"}`}
    >
      <Image
        src={project.image}
        alt={`${project.name}, ${project.location}`}
        fill
        sizes="(min-width: 768px) 356px, 100vw"
        style={{ objectPosition: project.focus ?? "center" }}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      {/* Figma: linear gradient #D9D9D9 0% → #050505 50% */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/50" />
      <p className={`absolute ${label} font-normal uppercase text-[#ececec]`}>
        {project.name},
        <br />
        {project.location}
      </p>
    </Link>
  );
}

/** Banner used at the top of every inner page (the header overlays it). */
export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14">
        <h1 className="text-5xl font-light uppercase tracking-wide md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}

/**
 * Soft black fade where a photo meets a black text panel (Figma: linear gradient #000000 → #FFFFFF at 0%).
 * ~90px wide at 1440, eased so the photo darkens gradually and reaches solid black at the edge.
 * `side` = the edge of the photo that touches the text.
 */
export function EdgeFade({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 hidden w-[max(48px,6.25vw)] md:block ${side === "left" ? "left-0" : "right-0"}`}
      style={{
        background: `linear-gradient(to ${side}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.88) 85%, #000 100%)`,
      }}
    />
  );
}
