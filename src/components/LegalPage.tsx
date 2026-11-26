import Link from "next/link";
import { site } from "@/lib/data";

export default function LegalPage({ title, intro, sections }: {
  title: string;
  intro: string;
  sections: { heading: string; text: string }[];
}) {
  return (
    <article className="w-full px-6 pb-20 pt-40 md:px-[7vw] md:pt-52">
      <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>
      <p className="mt-4 text-base text-neutral-400">Last updated: 26 November 2026</p>
      <p className="mt-8 text-xl leading-relaxed md:text-2xl text-neutral-200">{intro}</p>
      <div className="mt-10 space-y-9">
        {sections.map(({ heading, text }) => (
          <section key={heading}>
            <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
            <p className="mt-3 text-xl leading-relaxed md:text-2xl text-neutral-300">{text}</p>
          </section>
        ))}
        <section>
          <h2 className="text-3xl font-bold md:text-4xl">Contact us</h2>
          <p className="mt-3 text-xl leading-relaxed md:text-2xl text-neutral-300">
            For questions about this {title === "Privacy Policy" ? "policy or your personal information" : "page or use of our website"}, contact {site.name} at{" "}
            <a className="break-words underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <address className="mt-3 text-xl not-italic leading-relaxed md:text-2xl text-neutral-300">{site.address.join(" ")}</address>
        </section>
      </div>
      <nav aria-label="Legal pages" className="mt-12 flex flex-wrap gap-6 border-t border-white/20 pt-6 text-lg">
        <Link className="underline underline-offset-4" href="/privacy-policy">Privacy Policy</Link>
        <Link className="underline underline-offset-4" href="/terms-and-conditions">Terms &amp; Conditions</Link>
      </nav>
    </article>
  );
}
