import type { CSSProperties, ReactNode } from "react";
import { Award } from "lucide-react";
import CountUp from "./CountUp";
import { FishGlyph } from "./Icons";
import Reveal from "./Reveal";

// custom properties aren't in CSSProperties
const vars = (o: Record<string, string | number>) => o as CSSProperties;

type Panel = {
  tag: string;
  metric: ReactNode;
  unit: string;
  title: string;
  text: string;
  chips: string[];
  theme: string;
  art: ReactNode;
};

// The four things a buyer cares about most, all from norfishltd.com. Each gets its own full panel.
const PANELS: Panel[] = [
  {
    tag: "Capacity",
    metric: (
      <>
        <CountUp to={350} />
        <span className="ml-[.08em] text-[.3em] font-medium tracking-tight opacity-60">t</span>
      </>
    ),
    unit: "blast freezing, per day",
    title: "Capacity that keeps up",
    text: "Backed by 4,000 tonnes of cold storage and a liquid ice plant.",
    chips: ["4,000 t cold storage", "Liquid ice plant"],
    theme: "bg-[#06202b] text-white",
    art: (
      <>
        <div className="ocean absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-linear-to-t from-[#06202b] via-[#06202b]/70 to-[#06202b]/30" />
        <div className="wave wave-a absolute inset-x-0 bottom-0 h-40" />
        <div className="wave wave-b absolute inset-x-0 bottom-0 h-28" />
      </>
    ),
  },
  {
    tag: "Provenance",
    metric: "RSW",
    unit: "refrigerated seawater trawlers",
    title: "Landed local",
    text: "Raw material comes from local trawlers fishing the clean waters around Killybegs.",
    chips: ["Killybegs", "Local trawlers"],
    theme: "bg-[#d9eef5] text-ink",
    art: (
      <div className="absolute inset-0 [container-type:inline-size]">
        {[
          ["10%", "w-10", 22, 0, "70%"],
          ["22%", "w-6", 28, -9, "35%"],
          ["34%", "w-14", 18, -4, "15%"],
          ["16%", "w-8", 32, -15, "55%"],
          ["44%", "w-5", 24, -20, "85%"],
        ].map(([top, w, dur, del, x]) => (
          <FishGlyph key={`${top}${x}`} className={`drift ${w} text-sea/45`} style={{ top, ...vars({ "--dur": `${dur}s`, "--del": `${del}s`, "--x": x }) }} />
        ))}
      </div>
    ),
  },
  {
    tag: "Smokehouse",
    metric: "Oak",
    unit: "our own smokehouse",
    title: "Smoked in-house",
    text: "Haddock, coley and mackerel are brined and cold oak smoked on site, with a new production line added in 2023.",
    chips: ["Brined", "Cold oak smoked", "New line, 2023"],
    theme: "bg-ink text-white",
    art: (
      <>
        {[
          ["52%", 7, 0],
          ["60%", 9, -3],
          ["68%", 6.5, -5],
          ["76%", 8, -1.5],
          ["84%", 10, -6],
        ].map(([left, dur, del]) => (
          <svg
            key={left}
            viewBox="0 0 40 200"
            fill="none"
            stroke="rgba(255,255,255,.75)"
            strokeWidth="4"
            strokeLinecap="round"
            className="wisp h-56 w-10"
            style={{ left, ...vars({ "--dur": `${dur}s`, "--del": `${del}s` }) }}
            aria-hidden="true"
          >
            <path d="M20 200C40 160 0 120 20 80S40 20 20 0" />
          </svg>
        ))}
      </>
    ),
  },
  {
    tag: "Sustainability",
    metric: "Gold",
    unit: "Origin Green member",
    title: "Sustainability, recognised",
    text: "A Gold Member of Ireland’s food and drink sustainability programme (Trustmark, 2022).",
    chips: ["Origin Green", "Trustmark 2022"],
    theme: "sheen bg-[linear-gradient(135deg,#f8efd6_0%,#ecd08a_55%,#d9ae4f_100%)] text-ink",
    art: <Award className="absolute -bottom-10 -right-8 h-72 w-72 opacity-25" strokeWidth={0.7} aria-hidden="true" />,
  },
];

export default function Features() {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-24 md:px-12 md:pb-36 md:pt-36 lg:px-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[.16em] text-sea">Why Norfish</p>
          <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Capacity, provenance, proof.
          </h2>
        </Reveal>

        {/* sticky panels: each one stays pinned while the next slides over it */}
        {/* bottom padding lets the stack stay fanned out at the end instead of collapsing */}
        <div className="mt-14 pb-16 md:mt-20 md:pb-24">
          {PANELS.map((p, i) => (
            <article
              key={p.tag}
              style={vars({ "--i": i })}
              className={`sticky top-[calc(4.5rem_+_var(--i)*0.9rem)] mb-5 grid min-h-[28rem] content-between gap-10 overflow-hidden rounded-[1.75rem] p-7 md:top-[calc(6rem_+_var(--i)*1.25rem)] md:mb-8 md:min-h-[34rem] md:grid-cols-2 md:rounded-[2.5rem] md:p-14 ${p.theme}`}
            >
              {p.art}

              <div className="relative z-10 flex flex-col justify-between gap-12">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[.16em] opacity-70">
                  <span>0{i + 1}</span>
                  <span className="h-px w-8 bg-current opacity-50" />
                  <span>{p.tag}</span>
                </div>
                <div>
                  <div className="text-[clamp(4.5rem,26vw,9rem)] font-semibold leading-[.82] tracking-[-0.06em] md:text-[clamp(5rem,13vw,13rem)]">
                    {p.metric}
                  </div>
                  <p className="mt-4 text-sm opacity-70 md:text-base">{p.unit}</p>
                </div>
              </div>

              <div className="relative z-10 md:max-w-sm md:self-end md:justify-self-end">
                <h3 className="text-2xl font-medium tracking-tight md:text-4xl">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed opacity-70">{p.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <li key={c} className="rounded-full border border-current/25 px-3 py-1 text-xs">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
