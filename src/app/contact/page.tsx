import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { EdgeFade, InnerHero, UnderlinedHeading } from "@/components/ui";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach out to N.K. Architects, 236/16 Jor Bagh Road, Lodhi Colony, New Delhi, for planning and project enquiries.",
};

/*
 * From "Contact us.pdf" (1440 × 1956): hero 1440×682 · body starts y724 · photo 665×933 flush left
 * · text column x732 · headings 60px ("Get in touch" top y767, "Contact details" top y1317) · body 24px / 35px.
 */
const heading = "text-[36px] md:text-[clamp(36px,4.17vw,60px)]";
const body = "text-base leading-[1.46] text-[#e0e0e0] md:text-[clamp(16px,1.67vw,24px)]";

export default function ContactPage() {
  return (
    <div className="bg-black">
      <InnerHero
        title="Contact Us"
        subtitle="Reach out to N.K. Architects for additional planning and more information."
        image="/images/contact-hero.jpg"
        alt="Home theatre with red velvet sofas and a star ceiling"
      />

      <section className="relative mt-6 mb-12 md:mt-[2.92vw] md:mb-[2.5vw] md:min-h-[64.8vw]">
        <div className="relative aspect-[665/933] w-full md:absolute md:left-0 md:top-0 md:aspect-auto md:h-[64.8vw] md:w-[46.18vw]">
          <Image
            src="/images/contact-office.jpg"
            alt="N.K. Architects studio with a TV unit, blinds and an indoor tree"
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
          />
          <EdgeFade side="right" />
        </div>

        <div className="px-6 pt-10 md:px-0 md:pl-[50.83vw] md:pr-[4vw] md:pt-[43px]">
          <UnderlinedHeading size={heading} line="w-[48%]">
            Get in touch with us
          </UnderlinedHeading>
          <p className={`mt-5 max-w-[580px] md:mt-[19px] ${body}`}>
            Please fill the below form, we will get back to you for the solutions
          </p>

          <div className="mt-8 md:ml-2 md:mt-[27px]">
            <ContactForm />
          </div>

          <div className="mt-16 md:mt-[85px]">
            <UnderlinedHeading size={heading} line="w-[60%]">
              Contact details
            </UnderlinedHeading>
            <div className={`mt-6 md:ml-3 md:mt-[23px] ${body}`}>
              <address className="max-w-[440px] not-italic md:max-w-[30vw]">{site.address.join(" ")}</address>
              <p className="mt-[31px] leading-[46px] md:-ml-[3px]">
                {site.phones.map((p, i) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-white hover:underline">
                    {p}
                    {i < site.phones.length - 1 && " ,"}
                  </a>
                ))}
              </p>
              <a href={`mailto:${site.email}`} className="mt-[9px] block hover:text-white hover:underline">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
