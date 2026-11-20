import Image from "next/image";
import Link from "next/link";

// Official NK Architects logo (extracted from the Services design PDF, 672×648).
// Header: 107×99 at 1440 · footer: ~83×80.
export default function Logo({ size = "md", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const dims = size === "sm" ? "h-20 w-[83px]" : "h-[66px] w-[69px] md:h-[99px] md:w-[103px]";
  return (
    <Link href="/" aria-label="N.K. Architects home" className={`relative block shrink-0 ${dims} ${className}`}>
      <Image src="/images/logo.png" alt="N.K. Architects" fill sizes="(min-width: 768px) 103px, 83px" priority={size === "md"} />
    </Link>
  );
}
