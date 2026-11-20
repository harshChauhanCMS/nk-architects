import type { Metadata } from "next";
import Image from "next/image";
import NkLineArt from "@/components/NkLineArt";
import SocialIcons from "@/components/SocialIcons";
import { UnderlinedHeading } from "@/components/ui";
import { images, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, luxury interiors, bespoke furniture, turnkey solutions, landscape design and art styling by N.K. Architects, New Delhi.",
};

/*
 * Built from the Services design PDF (1440 × 4778). Measurements at 1440 are converted to vw so the page
 * scales the same way as the homepage:
 *   hero 1440×682 · rows start y789 and repeat every 627px · images 616×560 flush to the screen edge
 *   text column x124 (left) / x720 (right) · heading 60px · body 24px / 35px
 *   outline frame = image rect nudged 12px up and 12px towards the text
 */

// Background "NK" line-art placements from the PDF (box positions at 1440, in vw).
const lineArt: { rotate: 90 | -90; className: string }[] = [
  { rotate: -90, className: "left-[-8.8vw] top-[49.8vw] w-[35.4vw]" },
  { rotate: 90, className: "left-[71.9vw] top-[94.2vw] w-[35vw]" },
  { rotate: -90, className: "left-[-8.4vw] top-[138vw] w-[35.4vw]" },
  { rotate: 90, className: "left-[71.9vw] top-[180.3vw] w-[35vw]" },
  { rotate: -90, className: "left-[-12.2vw] top-[225.3vw] w-[35.4vw]" },
  { rotate: 90, className: "left-[73vw] top-[268.3vw] w-[35vw]" },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-black">
      {lineArt.map((a, i) => (
        <NkLineArt key={i} rotate={a.rotate} className={`hidden md:block ${a.className}`} />
      ))}

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[460px] md:h-auto md:min-h-0 md:aspect-[1440/682]">
        <Image
          src={images.servicesHero}
          alt="Landscaped rooftop lounge at night with bougainvillea pergola"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45" />
        <SocialIcons direction="col" className="intro-fade absolute left-6 top-[30%] md:left-[7.7vw] md:top-[37%]" />
        <div className="absolute inset-x-0 top-[45.7%] -translate-y-[12%] px-6 text-center md:translate-y-0">
          <h1 className="text-[56px] font-normal uppercase leading-none text-[#ececec] md:text-[clamp(56px,6.25vw,90px)]">
            Services
          </h1>
          <p className="mt-2 text-lg leading-[1.6] text-[#e6e6e6] md:text-[clamp(18px,1.95vw,28px)]">
            Building great infrastructures made easy
          </p>
          <p className="text-lg font-medium leading-[1.6] text-white md:text-[clamp(18px,1.95vw,28px)]">
            Architecture | Residential | Urban Planning
          </p>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <div className="relative space-y-16 pb-16 pt-14 md:space-y-[4.65vw] md:pb-[2.57vw] md:pt-[7.43vw]">
        {services.map((s, i) => {
          const imageRight = i % 2 === 0;
          return (
            <section
              key={s.slug}
              id={s.slug}
              aria-labelledby={`${s.slug}-title`}
              className="relative flex flex-col md:block md:h-[38.89vw]"
            >
              {/* image + offset outline frame */}
              <div
                className={`relative mx-6 aspect-[616/560] md:absolute md:top-0 md:mx-0 md:aspect-auto md:h-full md:w-[42.78vw] ${
                  imageRight ? "md:right-0" : "md:left-0"
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 -translate-y-3 border-[1.5px] border-[#d4d4d4] ${
                    imageRight ? "-translate-x-3" : "translate-x-3"
                  }`}
                />
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 43vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: s.focus ?? "center" }}
                  />
                </div>
              </div>

              {/* text */}
              <div
                className={`flex items-center px-6 pt-10 md:absolute md:inset-y-0 md:pt-0 ${
                  imageRight ? "md:left-[8.61vw] md:right-[52vw] md:px-0" : "md:left-[50vw] md:right-[6vw] md:px-0"
                }`}
              >
                <div className="max-w-[600px] md:max-w-[39.6vw] md:-translate-y-[1.8vw]">
                  <div id={`${s.slug}-title`} className="md:whitespace-nowrap">
                    <UnderlinedHeading size="text-[36px] md:text-[clamp(36px,4.17vw,60px)]" line="w-[66%]">
                      {s.title}
                    </UnderlinedHeading>
                  </div>
                  <div className="mt-6 space-y-[1.3em] text-base font-light leading-[1.46] text-[#d9d9d9] md:mt-[35px] md:text-[clamp(16px,1.67vw,24px)]">
                    {s.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
