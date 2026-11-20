import Image from "next/image";
import { images } from "@/lib/data";

/**
 * The faint oversized "NK" monogram used as background line-art in the designs.
 * The source art is white strokes on black (580×436); `mix-blend-screen` drops the black.
 * It is drawn rotated ±90°, so the box it occupies on the page is 436 wide × 580 tall (per unit `scale`).
 *
 * Position the wrapper with `className` (absolute left/top etc.).
 */
export default function NkLineArt({
  rotate = -90,
  opacity = 0.14,
  className = "",
}: {
  rotate?: 90 | -90;
  opacity?: number;
  className?: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute aspect-[436/580] ${className}`}>
      {/* inner box keeps the un-rotated 580×436 ratio and is turned to fill the outer box */}
      <div
        className="absolute left-1/2 top-1/2 aspect-[580/436] w-[133.03%] mix-blend-screen"
        style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)`, opacity }}
      >
        <Image src={images.nkLineArt} alt="" fill sizes="700px" />
      </div>
    </div>
  );
}
