"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FishGlyph } from "./Icons";
import { PRODUCTS } from "./products";

const TABS = ["All", "Pelagic", "Smoked"] as const;

export default function ProductList() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const items = PRODUCTS.filter((p) => tab === "All" || p.group === tab);

  return (
    <>
      <div role="group" aria-label="Filter products" className="mt-10 flex flex-wrap gap-2">
        {TABS.map((t) => {
          const n = PRODUCTS.filter((p) => t === "All" || p.group === t).length;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                tab === t ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/70 hover:border-ink hover:text-ink"
              }`}
            >
              {t === "All" ? "All fish" : `${t} fish`} <span className="opacity-50">{n}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 border-b border-ink/15 md:mt-14">
        {items.map((p, i) => (
          <li key={p.name} className="animate-[fadeSlideUp_0.5s_ease_both] border-t border-ink/15" style={{ animationDelay: `${i * 45}ms` }}>
            <a href="#contact" className="group relative flex items-center gap-4 overflow-hidden px-2 py-5 sm:py-7 md:gap-8 md:px-6">
              {/* ink fill that rises from the bottom on hover */}
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100" />
              <span className="relative w-7 shrink-0 text-sm text-ink/40 transition-colors group-hover:text-white/60 md:w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative min-w-0 flex-1 text-[clamp(2rem,8.5vw,3.25rem)] font-medium leading-none tracking-[-0.04em] transition-all duration-500 group-hover:translate-x-3 group-hover:text-white sm:text-6xl lg:text-8xl">
                {p.name}
              </span>
              <span className="relative hidden text-sm italic text-ink/40 transition-colors group-hover:text-white/60 md:block">{p.note}</span>
              <FishGlyph className="relative hidden h-6 w-12 shrink-0 text-sky-300 opacity-0 group-hover:animate-[swim_1.2s_ease-out_both] md:block" />
              <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink md:h-14 md:w-14">
                <ArrowUpRight size={20} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
