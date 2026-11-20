import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from "react-icons/fa";
import { site } from "@/lib/data";

const items = [
  { href: site.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.socials.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: site.socials.youtube, label: "YouTube", Icon: FaYoutube },
  { href: site.socials.pinterest, label: "Pinterest", Icon: FaPinterestP },
];

export default function SocialIcons({
  direction = "row",
  className = "",
}: {
  direction?: "row" | "col";
  className?: string;
}) {
  return (
    <ul className={`flex ${direction === "col" ? "flex-col gap-[19px]" : "flex-row gap-[19px]"} ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 hover:bg-neutral-300"
          >
            <Icon className="h-3 w-3" />
          </a>
        </li>
      ))}
    </ul>
  );
}
