import type { Metadata } from "next";
import AboutRotator from "./AboutRotator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founders of N.K. Architects, New Delhi: Karan Singh, architect and urban planner, and Neha Gupta, architect and housing planner.",
};

// Karan (About.pdf) shows first, then the page cross-fades to Neha (ANIMATION.pdf) and keeps alternating.
export default function AboutPage() {
  return <AboutRotator />;
}
