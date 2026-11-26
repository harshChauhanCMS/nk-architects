import Link from "next/link";
import { footerLinks, site } from "@/lib/data";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

/*
 * Figma "Group 50" (1440 frame): footer 255px tall, content group 1207×154 starting 46px from the top.
 * Column x-positions: 98 / 426 / 734 / 1178. Text lines are placed on the exact y-centres from the design
 * (links every 34px from y62; address y62/90, email y136, phone y182; legal y62/100/154).
 */
export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d]">
      <div className="grid gap-10 px-6 py-12 text-[#e6e6e6] sm:grid-cols-2 md:min-h-[255px] md:grid-cols-[22.8vw_21.4vw_30.8vw_1fr] md:gap-0 md:px-[6.8vw] md:pb-10 md:pt-[45px]">
        {/* brand */}
        <div>
          <Logo size="sm" className="md:mt-[7px]" />
          <p className="mt-3 text-[17px] leading-6 md:mt-[3px]">{site.name}</p>
          <SocialIcons className="mt-4 md:mt-[17px]" />
        </div>

        {/* links */}
        <ul className="text-[17px] leading-[34px]">
          {footerLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="hover:text-white hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* contact */}
        <div className="text-[17px] leading-[28px] md:pt-[3px] md:text-[18px]">
          <address className="not-italic">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={`mailto:${site.email}`} className="mt-[18px] block hover:text-white hover:underline">
            {site.email}
          </a>
          <p className="mt-[18px]">
            {site.phones.map((p, i) => (
              <span key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white hover:underline">
                  {p}
                </a>
                {i < site.phones.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>

        {/* legal */}
        <div className="text-[17px] leading-[28px] md:pt-[3px]">
          <Link href="/privacy-policy" className="block underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="mt-[10px] block underline underline-offset-2 hover:text-white">
            Terms &amp; Conditions
          </Link>
          <p className="mt-[26px] whitespace-nowrap">
            © {new Date().getFullYear()} by {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
