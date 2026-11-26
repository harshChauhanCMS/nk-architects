import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How N.K. Architects handles website enquiries, personal information and third-party services.",
};

const sections = [
  {
    heading: "Information you share with us",
    text: "When you contact N.K. Architects, you may provide your name, email address, phone number and details about your project. Please share only information needed for your enquiry and avoid sending identity documents, financial details or other sensitive information through an initial message.",
  },
  {
    heading: "How the contact form works",
    text: "Our contact form prepares a message in your device’s email application. Entering details or pressing Submit does not itself send the enquiry to us or save it in a website enquiry database. You must send the prepared email from your email application. Once sent, your message is handled by your email provider and our email service.",
  },
  {
    heading: "How information is used",
    text: "Information provided in an enquiry is used to respond to you, understand your requirements, discuss our services and coordinate project-related communication. If you engage us, additional information and record-keeping arrangements may be covered by your project agreement. Please contact us if you no longer wish to continue an enquiry.",
  },
  {
    heading: "Hosting, embedded videos and external links",
    text: "Our website is hosted on Vercel. Hosting providers may process technical information such as IP addresses, browser details and request logs to deliver and secure the website. Some project pages include embedded YouTube videos: loading these pages can connect your browser to YouTube, which may collect technical information and use cookies under its own policies. Facebook, Instagram and YouTube links lead to services with separate privacy practices. Your email provider may also process information when you send us an enquiry.",
  },
  {
    heading: "Cookies and browser settings",
    text: "The website’s own code does not currently include advertising trackers or an analytics integration. This does not prevent hosting services or embedded third-party content from processing technical information or using cookies. You can manage cookies through your browser settings; restricting them may affect embedded video playback or other third-party features.",
  },
  {
    heading: "Sharing and retention",
    text: "Enquiry information is intended for communication with our team and the service providers involved in delivering that communication. Any further project-related sharing should be limited to what is needed for the agreed work. Information may also need to be retained or disclosed to meet applicable legal obligations. Retention needs depend on whether an enquiry develops into a project and on relevant record-keeping requirements; contact us to discuss deletion of an enquiry.",
  },
  {
    heading: "Your choices and privacy requests",
    text: "You can contact us to ask about information you have shared, request a correction or deletion, withdraw permission for optional communications, or raise a privacy concern. Include enough detail for us to identify the relevant enquiry without sending unnecessary sensitive information. We may need to verify your identity, and requests are subject to applicable law and any records that must be retained.",
  },
  {
    heading: "Security and policy updates",
    text: "No online transmission or storage method can be guaranteed completely secure. Please use care when sharing confidential project information by email and discuss an appropriate method with us first. This policy may be updated when website features or information-handling practices change. The date above identifies the latest revision.",
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" intro="This policy explains how information is handled when you browse the N.K. Architects website or contact our studio about architecture, interiors and related services." sections={sections} />;
}
