import Image from "next/image";
import { EdgeFade, UnderlinedHeading } from "./ui";

/**
 * Image flush to the left screen edge with a heading + paragraphs on the right
 * (About "Karan Singh" and Journey "Who We Are" designs). Every measurement is passed
 * in vw (from the 1440 frame) so the layout scales like the rest of the site.
 */
export default function StorySection({
  heading,
  paragraphs,
  image,
  alt,
  imageW,
  imageH,
  textLeft,
  textMaxW,
  textTop,
  minH,
  bottomGap,
  paragraphGap = "md:space-y-[50px]",
  imageClass = "",
  textClass = "",
}: {
  heading: string;
  paragraphs: string[];
  image: string;
  alt: string;
  /** e.g. "md:w-[42.57vw]" */
  imageW: string;
  /** e.g. "md:h-[58.47vw]" */
  imageH: string;
  /** e.g. "md:pl-[48.54vw]" (distance from the screen's left edge to the text) */
  textLeft: string;
  /** e.g. "md:max-w-[45.8vw]" */
  textMaxW: string;
  /** e.g. "md:pt-[2.08vw]" */
  textTop: string;
  /** same value as imageH but as a min-height, e.g. "md:min-h-[58.47vw]" (literal so Tailwind generates it) */
  minH: string;
  /** space between the section and the footer, e.g. "md:mb-[3vw]" */
  bottomGap: string;
  /** gap between paragraphs at md+ */
  paragraphGap?: string;
  /** extra classes on the image box / text block (used for the About page cross-fade) */
  imageClass?: string;
  textClass?: string;
}) {
  return (
    <section className={`relative mt-6 mb-12 md:mt-[2.92vw] ${bottomGap}`}>
      <div className={`relative aspect-[4/5] w-full md:absolute md:left-0 md:top-0 md:aspect-auto ${imageW} ${imageH} ${imageClass}`}>
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 43vw, 100vw" className="object-cover" />
        {/* soft fade into the black page, as in the design */}
        <EdgeFade side="right" />
      </div>

      <div className={`px-6 pt-10 md:px-0 ${textLeft} ${textTop} ${minH} ${textClass}`}>
        <div className={textMaxW}>
          <UnderlinedHeading size="text-[44px] md:text-[clamp(44px,5.56vw,80px)]" line="w-[61%]">
            {heading}
          </UnderlinedHeading>
          <div className={`mt-8 space-y-6 text-base font-normal leading-[1.46] text-[#d9d9d9] md:mt-[2.3vw] ${paragraphGap} md:text-[clamp(16px,1.67vw,24px)]`}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
