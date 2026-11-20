import type { Metadata } from "next";
import { InnerHero, ProjectCard } from "@/components/ui";
import { heroSubtitle, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Residences and interiors by N.K. Architects across Delhi, Noida, Gurugram and Uttar Pradesh.",
};

// From portfolio.pdf (1440 × 2659): 3×3 grid of 358×510 cards at x162 / 541 / 920, first row at y753.
export default function PortfolioPage() {
  return (
    <div className="bg-black">
      <InnerHero
        title="Portfolio"
        subtitle={heroSubtitle}
        image="/images/portfolio-hero.jpg"
        alt="Living room with a TV wall, arched mirror and globe pendant lights"
      />
      <section aria-label="Projects" className="mx-auto max-w-[1164px] px-6 pb-12 pt-12 md:pb-[46px] md:pt-[71px]">
        <div className="grid grid-cols-1 gap-x-[21px] gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-y-[28px] md:[&>*:nth-child(n+7)]:mt-[9px]">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} size="lg" />
          ))}
        </div>
      </section>
    </div>
  );
}
