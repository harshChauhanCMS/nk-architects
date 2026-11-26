import Link from "next/link";
import { site } from "@/lib/data";

export default function LegalPage({ title, intro, sections }: {
  title: string;
  intro: string;
  sections: { heading: string; text: string }[];
}) {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-20 pt-40 md:pt-52">
      <h1 className="text-4xl font-light md:text-6xl">{title}</h1>
      <p className="mt-4 text-sm text-neutral-400">Last updated: 26 November 2026</p>
      <p className="mt-8 text-lg leading-relaxed text-neutral-200">{intro}</p>
      <div className="mt-10 space-y-9">
        {sections.map(({ heading, text }) => (
          <section key={heading}>
            <h2 className="text-2xl font-medium">{heading}</h2>
            <p className="mt-3 text-base leading-8 text-neutral-300">{text}</p>
          </section>
        ))}
        <section>
          <h2 className="text-2xl font-medium">Contact us</h2>
          <p className="mt-3 text-base leading-8 text-neutral-300">
            For questions about this {title === "Privacy Policy" ? "policy or your personal information" : "page or use of our website"}, contact {site.name} at{" "}
            <a className="break-words underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <address className="mt-3 text-base not-italic leading-8 text-neutral-300">{site.address.join(" ")}</address>
        </section>
      </div>
      <nav aria-label="Legal pages" className="mt-12 flex flex-wrap gap-6 border-t border-white/20 pt-6 text-base">
        <Link className="underline underline-offset-4" href="/privacy-policy">Privacy Policy</Link>
        <Link className="underline underline-offset-4" href="/terms-and-conditions">Terms &amp; Conditions</Link>
      </nav>
    </article>
  );
}
