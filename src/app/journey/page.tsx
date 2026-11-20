import type { Metadata } from "next";
import StorySection from "@/components/StorySection";
import { InnerHero } from "@/components/ui";
import { heroSubtitle } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Journey",
  description:
    "N.K. Architects is an integrated architecture, interior and urban planning practice in New Delhi, founded in 2015 by Neha Gupta and Karan Singh.",
};

// From JOURNEY.pdf (1440 × 1936): photo flush left at y724 (938 tall), text at x671, footer 17px below.
export default function JourneyPage() {
  return (
    <div className="bg-black">
      <InnerHero title="Our Journey" subtitle={heroSubtitle} image="/images/journey-hero.jpg" alt="Dimly lit lounge with a bar and sculptural chandeliers" />
      <StorySection
        heading="Who We Are"
        image="/images/who-we-are.jpg"
        alt="Dining room with blue sculpted chairs and a brass chandelier"
        imageW="md:w-[41vw]"
        imageH="md:h-[65.14vw]"
        textLeft="md:pl-[46.6vw]"
        textMaxW="md:max-w-[41.67vw]"
        textTop="md:pt-[0.35vw]"
        minH="md:min-h-[65.14vw]"
        bottomGap="md:mb-[1.18vw]"
        paragraphs={[
          "We specialize in an integrated, turn-key approach to project delivery and pride ourselves in our ability to deliver positive outcomes. we believe that successful projects exceed the client expectations for design, functionality and budget.",
          "N.K. Architects is an integrated design practice with Architecture, Interior, and Urban Planning capabilities based out of New Delhi. Founded in 2015 by Neha Gupta (Architect & Housing Planner) and Karan Singh (Architect & Urban Planner).",
          "We have a strong reputation for creativity, outstanding credentials and a history of excellent client service. we believe in leading our clients through the design and construction process.",
          "We offer a wide variety of experience in our portfolio. This helps us create three-dimensional solutions which serve to strengthen our client bottom line. our knowledge of the entire design and construction process helps to guide our clients through all aspect of a project.",
        ]}
      />
    </div>
  );
}
