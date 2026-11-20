"use client";

import { useState } from "react";
import { site } from "@/lib/data";

/*
 * Underlined fields from the design: 179px wide in two columns 253px apart, message 433px wide.
 * Labels sit on the line like placeholders and float up once the field is focused or filled.
 *
 * No backend yet: submitting opens the visitor's email app with the message pre-filled.
 * Swap handleSubmit for an API route / form service (Formspree, Resend, etc.) later.
 */
function Field({
  name,
  label,
  required,
  type = "text",
  multiline,
  className = "",
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  multiline?: boolean;
  className?: string;
}) {
  const input =
    "peer block w-full border-b border-[#bdbdbd] bg-transparent pb-1 pt-4 text-[17px] text-white outline-none transition focus:border-white";
  return (
    <div className={`relative ${className}`}>
      {multiline ? (
        <textarea id={name} name={name} required={required} placeholder=" " rows={2} className={`${input} resize-none`} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder=" " className={input} />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-[14px] origin-left text-[17px] text-[#e6e6e6] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-white/60 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-white/60 md:text-[18px]"
      >
        {label}
        {required && <span className="relative -top-1.5 ml-0.5 text-[11px] text-[#e53935]">*</span>}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = `${d.get("firstName")} ${d.get("lastName")}`.trim();
    const subject = `Enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[433px]">
      <div className="grid grid-cols-2 gap-x-[74px] gap-y-6 md:gap-y-[14px]">
        <Field name="firstName" label="First name" required />
        <Field name="lastName" label="Last name" />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone no" type="tel" />
      </div>
      <Field name="message" label="Message" required multiline className="mt-6 md:mt-5" />
      <button
        type="submit"
        className="mt-9 h-[41px] w-[126px] rounded-full bg-[#d9d9d9] text-[20px] font-semibold text-black transition hover:bg-white"
      >
        Submit
      </button>
      {sent && <p className="mt-4 text-sm text-white/60">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
