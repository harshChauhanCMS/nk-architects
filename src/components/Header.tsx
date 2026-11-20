"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";
import Logo from "./Logo";

/*
 * Menu overlay from "Frame 43.pdf" (1440 × 682):
 *  logo x166 · close icon top right · links 32px at x365, 66px apart (Home baseline y216)
 *  vertical divider x719, y201–522 · "Contact Us" 32px semibold at x829 · details 24px
 *  footer line 16px centred, baseline y666 · background = home-theatre photo, dimmed.
 */
const menuLinks: { label: string; href?: string }[] = [
  { label: "Home", href: "/" },
  { label: "Our Journey", href: "/journey" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs" }, // no blog page yet
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // close when navigating
  useEffect(() => setOpen(false), [pathname]);

  // lock page scroll, close on Escape, move focus in and back out
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const burger = burgerRef.current;
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      burger?.focus();
    };
  }, [open]);

  const tab = open ? 0 : -1;

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 pt-6 md:pl-[7vw] md:pr-[7.6vw] md:pt-[30px]">
        <Logo className="intro-fade" />
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu"
          className="flex h-10 w-10 flex-col items-end justify-center gap-[7px]"
        >
          <span className="h-[2.5px] w-[22px] rounded-full bg-white" />
          <span className="h-[2.5px] w-[30px] rounded-full bg-white" />
          <span className="h-[2.5px] w-[22px] rounded-full bg-white" />
        </button>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Image src="/images/contact-hero.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex min-h-full flex-col">
          {/* top bar */}
          <div className="flex items-center justify-between px-6 pt-6 md:pl-[11.53vw] md:pr-[11.7vw] md:pt-8">
            <Logo />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              tabIndex={tab}
              className="relative h-10 w-10 transition hover:opacity-70"
            >
              <span className="absolute left-1/2 top-1/2 h-[3px] w-[38px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-1/2 top-1/2 h-[3px] w-[38px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
            </button>
          </div>

          {/* links | divider | contact */}
          <div className="flex flex-1 flex-col gap-10 px-6 pt-8 md:mt-[41px] md:flex-row md:gap-0 md:px-0 md:pt-0">
            <nav aria-label="Main" className="md:ml-[25.35vw] md:w-[24.58vw]">
              <ul className="text-[28px] leading-[56px] md:text-[32px] md:leading-[66px]">
                {menuLinks.map((l, i) => (
                  <li
                    key={l.label}
                    className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                    style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                  >
                    {l.href ? (
                      <Link
                        href={l.href}
                        tabIndex={tab}
                        onClick={() => setOpen(false)}
                        className={`relative text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                          pathname === l.href ? "after:w-full" : "after:w-0"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <span className="cursor-default text-white">{l.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div aria-hidden className="hidden w-[2px] self-start bg-white md:mt-[27px] md:block md:h-[321px]" />

            <div
              className={`text-white transition-all delay-300 duration-500 md:ml-[7.5vw] md:mt-[25px] ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                tabIndex={tab}
                onClick={() => setOpen(false)}
                className="text-[28px] font-semibold leading-[38px] hover:underline md:text-[32px]"
              >
                Contact Us
              </Link>
              <div className="text-lg leading-[1.45] md:text-[24px]">
                <address className="mt-4 max-w-[360px] not-italic">{site.address.join(" ")}</address>
                <p className="mt-[23px] leading-[38px]">
                  {site.phones.map((p, i) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} tabIndex={tab} className="block hover:underline">
                      {p}
                      {i < site.phones.length - 1 && " ,"}
                    </a>
                  ))}
                </p>
                <a href={`mailto:${site.email}`} tabIndex={tab} className="mt-4 block hover:underline">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <p className="relative py-6 text-center text-sm text-white md:pb-[11px] md:pt-6 md:text-base">
            NK Architects | All Rights Reserved | © {new Date().getFullYear()} .
          </p>
        </div>
      </div>
    </>
  );
}
