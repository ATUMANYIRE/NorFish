"use client";

import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "./products";

const EMAIL = "info@norfishltd.com";

// Underlined blank inside the sentence. field-sizing grows it with what's typed where supported;
// `size` gives other browsers a sensible starting width.
const blank =
  "field-sizing-content max-w-full min-w-[6ch] border-0 border-b-2 border-ink/20 bg-transparent px-0.5 text-sea outline-none transition-colors placeholder:text-ink/20 focus:border-ink invalid:text-ink/25";

function Blank({ name, placeholder, type = "text", auto }: { name: string; placeholder: string; type?: string; auto?: string }) {
  return <input className={blank} name={name} type={type} placeholder={placeholder} size={Math.max(placeholder.length, 6)} autoComplete={auto} required />;
}

// shortcut: opens the buyer's mail client (no backend, no spam handling); swap for a route handler + email API when volume justifies it.
export default function EnquiryForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const g = (k: string) => String(f.get(k) ?? "").trim();
        const body = [
          `Name: ${g("name")}`,
          `Company: ${g("company")}`,
          `Country: ${g("country")}`,
          `Email: ${g("email")}`,
          `Product: ${g("product")}`,
          `Volumes: ${g("volume")}`,
        ].join("\n");
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request — ${g("product")}`)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <p className="text-3xl font-medium leading-[1.6] tracking-tight sm:text-5xl sm:leading-[1.5] lg:text-[3.5rem]">
        Hello Norfish, my name is <Blank name="name" placeholder="your name" auto="name" /> from{" "}
        <Blank name="company" placeholder="company" auto="organization" /> in{" "}
        <Blank name="country" placeholder="country" auto="country-name" />. We&rsquo;re after{" "}
        <select className={blank} name="product" defaultValue="" required aria-label="Product">
          <option value="" disabled>a product</option>
          {PRODUCTS.map((p) => (
            <option key={p.name} className="text-base text-ink">{p.name}</option>
          ))}
          <option className="text-base text-ink">Other / several</option>
        </select>
        , roughly <Blank name="volume" placeholder="2 x 20ft a month" />. You can reach me at{" "}
        <Blank name="email" type="email" placeholder="you@company.com" auto="email" />.
      </p>

      <button
        type="submit"
        className="mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105"
      >
        Send quote request
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
