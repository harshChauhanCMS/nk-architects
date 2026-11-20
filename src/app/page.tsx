import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import ServicesCarousel from "@/components/ServicesCarousel";
import TestimonialSlider from "@/components/TestimonialSlider";
import NkLineArt from "@/components/NkLineArt";
import { EdgeFade, OutlineButton, ProjectCard, SectionTitle, UnderlinedHeading, panelText } from "@/components/ui";
import { images, projects, services, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO — 1440×682 in the design */}
      <section className="relative h-[60vh] min-h-[420px] md:h-auto md:min-h-0 md:aspect-[1440/682]">
        <Image src={images.hero} alt="Living room interior by N.K. Architects" fill priority sizes="100vw" className="object-cover" />
        {/* dark veil that lifts on page load (intro state = design frame 1) */}
        <div className="hero-dim absolute inset-0 bg-black/45" />
        <SocialIcons direction="col" className="intro-fade absolute left-6 top-[30%] md:left-[7.7vw] md:top-[37%]" />
        <h1 className="sr-only">N.K. Architects</h1>
      </section>

      {/* grey strip between sections */}
      <div className="h-5 bg-panel-2 md:h-[2.3vw]" />

      {/* OUR JOURNEY */}
      <section className="grid bg-black md:min-h-[43.6vw] md:grid-cols-[58fr_42fr]">
        <div className="relative flex items-center overflow-hidden px-6 py-16 md:pl-[8.7vw] md:pr-[4vw]">
          {/* faint oversized NK monogram line-art, as in the design */}
          <NkLineArt rotate={-90} className="left-[-136px] top-[-10px] w-[481px] md:left-[-9.4vw] md:top-[-0.7vw] md:w-[33.4vw]" />
          <div className="relative max-w-[650px]">
            <UnderlinedHeading>Our Journey</UnderlinedHeading>
            <p className={`mt-8 ${panelText}`}>
              N.K. Architects is an integrated design practice with Architecture, Interior, and Urban Planning
              capabilities based out of New Delhi. Founded in 2015 by Neha Gupta (Architect &amp; Housing Planner) and
              Karan Singh (Architect &amp; Urban Planner).
            </p>
            <div className="mt-10 md:mt-12">
              <OutlineButton href="/journey">Know More</OutlineButton>
            </div>
          </div>
        </div>
        <div className="relative min-h-[320px] md:min-h-0">
          <Image src={images.journey} alt="Staircase and double-height atrium" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
          <EdgeFade side="left" />
        </div>
      </section>

      <div className="h-5 bg-panel-2 md:h-[3.26vw]" />

      {/* ABOUT US */}
      <section className="grid bg-black md:min-h-[46vw] md:grid-cols-[46fr_54fr]">
        <div className="relative order-2 min-h-[360px] md:order-1 md:min-h-0">
          <Image src={images.founders} alt="Founders Neha Gupta and Karan Singh" fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />
          <EdgeFade side="right" />
        </div>
        <div className="order-1 flex items-center px-6 py-16 md:order-2 md:pl-[3vw] md:pr-[8.7vw]">
          <div className="max-w-[650px]">
            <UnderlinedHeading>About Us</UnderlinedHeading>
            <div className={`mt-8 space-y-4 ${panelText}`}>
                <p>
                  N.K. Architect is integrated with Neha and Karan. For Neha architecture is not just a profession but an
                  attitude to life. She completed graduation &amp; post graduation in housing planning and from School of
                  Planning &amp; Architecture Delhi.
                </p>
                <p>
                  Karan is graduated from the School of Planning &amp; Architecture, Delhi, after his graduation he
                  completed his masters in urban planning, working on projects ranging from architecture to interiors.
                </p>
              </div>
            <div className="mt-10 md:mt-12">
              <OutlineButton href="/about">Know More</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO + SERVICES — #121212 background */}
      <div className="bg-[#121212]">
        <section className="mx-auto max-w-[1164px] px-6 pt-14 md:pt-[54px]">
          <SectionTitle>Portfolio</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-[44px] md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <section className="overflow-hidden pb-16 pt-20 md:pb-[54px] md:pt-[102px]">
          <SectionTitle>Services</SectionTitle>
          <div className="mt-8 md:mt-4">
            <ServicesCarousel services={services} initialIndex={0} />
          </div>
          <div className="mt-8 text-center">
            <OutlineButton href="/services">View All</OutlineButton>
          </div>
        </section>
      </div>

      {/* TESTIMONIALS — 1440×668, #121212 */}
      <section id="testimonials" className="border-t border-white/5 bg-[#121212] px-6 pb-20 pt-12 md:min-h-[641px] md:pb-[60px] md:pt-[34px]">
        <SectionTitle>Client Testimonials</SectionTitle>
        <p className="mx-auto mt-6 max-w-[1040px] text-center text-base leading-[1.6] text-[#dcdcdc] md:mt-[38px] md:text-[24px] md:leading-[40px]">
          Explore how we&apos;ve helped homeowners and businesses achieve their goals, exceeding expectations through
          innovative design and meticulous execution. Let our clients&apos; experiences inspire you —&nbsp; we&apos;re
          confident we can craft your dream project too.
        </p>
        <div className="mt-10 md:mt-[42px]">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

    </>
  );
}
