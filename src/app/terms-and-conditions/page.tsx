import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the N.K. Architects website, portfolio and project enquiry facilities.",
};

const sections = [
  {
    heading: "About this website",
    text: "This website introduces N.K. Architects, our services and selected projects. These terms describe permitted use of the website and its content. If you do not agree with these terms, please discontinue use of the website. Questions can be sent to the contact address below.",
  },
  {
    heading: "Project enquiries and appointments",
    text: "Sending an enquiry does not appoint N.K. Architects, reserve availability or create a contract for professional services. Scope, deliverables, fees, payment schedules, timelines, responsibilities and any cancellation arrangements must be agreed separately in writing before work begins. The agreed project contract governs those services.",
  },
  {
    heading: "Portfolio and illustrative content",
    text: "Project photographs, drawings, visualisations and videos are presented for information and inspiration. Some images may show design concepts or work at different stages of completion. Materials, finishes, dimensions and results vary by project. Website content is not a construction drawing, structural assessment, cost estimate or site-specific professional recommendation and should not be used as a basis for building work.",
  },
  {
    heading: "Ownership and permitted use",
    text: "The N.K. Architects name, logo, original text and design materials, together with photographs and other content, belong to N.K. Architects or their respective owners. You may browse the website and share links for personal reference. Reproducing, modifying, distributing or commercially using protected content requires permission from the relevant rights holder, except where applicable law permits otherwise. Viewing a project does not grant a licence to reproduce its design.",
  },
  {
    heading: "Responsible website use",
    text: "Please use this website lawfully. Do not attempt to gain unauthorised access, interfere with its operation, introduce malicious software, impersonate another person or send unlawful material. When providing project information, ensure you have permission to share it and that your contact details are accurate.",
  },
  {
    heading: "External services and links",
    text: "The website may link to social media platforms and display third-party videos. These services operate under their own terms and privacy policies. N.K. Architects does not control their availability, advertisements or content. A link does not imply endorsement of every statement or service on the destination website.",
  },
  {
    heading: "Availability and accuracy",
    text: "Website content and service information may change, and the website may occasionally be unavailable. Please confirm details important to your project directly with our studio. Although we aim to present useful information, we do not promise that all content is complete, current or free from errors. Nothing on this page excludes rights or responsibilities that cannot lawfully be excluded.",
  },
  {
    heading: "Privacy and updates",
    text: "Our Privacy Policy explains how website enquiries and third-party features handle information. These website terms may be revised as our content or services change; the latest revision date appears above. Changes to this page do not by themselves amend an existing signed project agreement.",
  },
];

export default function TermsAndConditionsPage() {
  return <LegalPage title="Terms & Conditions" intro="Please read these terms when using the N.K. Architects website. They cover website access, portfolio content and enquiries; individual architectural and interior design projects are subject to a separate written agreement." sections={sections} />;
}
