import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { site } from "@/lib/data";

const items = [
  { href: site.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.socials.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.socials.youtube, label: "YouTube", Icon: FaYoutube },
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
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 hover:bg-neutral-300"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
