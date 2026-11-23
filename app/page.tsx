import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Reveal from "@/components/Reveal";

const wrap = "mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16";
const label = "text-xs font-medium uppercase tracking-[.16em] text-sea";
const h2 = "text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl";

const CONTACT = [
  { Icon: Phone, text: "+353 74 973 1146", href: "tel:+353749731146" },
  { Icon: Mail, text: "info@norfishltd.com", href: "mailto:info@norfishltd.com" },
  { Icon: MapPin, text: "Killybegs, Co Donegal, Ireland", href: undefined },
];

// small crop of the ocean photo, used as an inline image in the headline
function Pill({ pos }: { pos: string }) {
  return (
    <span
      aria-hidden
      className="ocean mx-1 inline-block h-[.78em] w-[1.5em] rounded-full align-[-.08em] sm:mx-2"
      style={{ backgroundPosition: pos }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* white sheet that rolls up over the bottom of the hero */}
      <main className="relative z-10 -mt-5 rounded-t-[1.75rem] bg-white text-ink sm:-mt-8 sm:rounded-t-[2.5rem]">
        {/* ---------- ABOUT ---------- */}
        <section id="about">
          <div className={`${wrap} pb-24 pt-20 md:pb-36 md:pt-32`}>
            <Reveal>
              <p className={label}>About Norfish</p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-6xl text-3xl font-medium leading-[1.2] tracking-tight sm:text-5xl lg:text-[4rem] lg:leading-[1.12]">
                A family business processing
                <Pill pos="56% 14%" />
                pelagic and
                <Pill pos="15% 85%" />
                smoked fish in Killybegs since 1974,{" "}
                <span className="text-ink/30">and shipping it to buyers worldwide.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- WHY NORFISH: stacking panels ---------- */}
        <Features />

        {/* ---------- PRODUCTS ---------- */}
        <section id="products" className="border-t border-ink/10">
          <div className={`${wrap} py-24 md:py-36`}>
            <Reveal>
              <p className={label}>Products</p>
              <h2 className={`${h2} mt-4 max-w-4xl`}>Pelagic and smoked fish, sold globally.</h2>
            </Reveal>
            <ProductList />
          </div>
        </section>

        {/* ---------- IMAGE BAND ---------- */}
        <section className={`${wrap} pb-24 md:pb-36`}>
          <Reveal>
            <div className="ocean relative overflow-hidden rounded-[2rem] bg-[position:56%_14%] sm:rounded-[2.5rem]">
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/10" />
              <div className="relative flex min-h-[26rem] flex-col justify-end gap-8 p-8 text-white sm:min-h-[34rem] sm:p-12 lg:p-16">
                <h2 className={`${h2} max-w-4xl`}>Fished from the pure, clean waters around Killybegs.</h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                  >
                    Request a quote
                    <ArrowRight size={16} />
                  </a>
                  <a href="tel:+353749731146" className="text-sm text-white/80 transition-colors hover:text-white">
                    or call +353 74 973 1146
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------- CONTACT: the form is one sentence ---------- */}
        <section id="contact" className="border-t border-ink/10">
          <div className={`${wrap} py-24 md:py-36`}>
            <Reveal>
              <p className={label}>Trade enquiries</p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/60 md:text-lg">
                Fill in the blanks and we&rsquo;ll come back with availability and pricing.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10 max-w-6xl md:mt-14">
              <EnquiryForm />
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-16 flex flex-wrap gap-3 border-t border-ink/10 pt-10 md:mt-24">
                {CONTACT.map(({ Icon, text, href }) => {
                  const cls = "inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3 text-sm";
                  return href ? (
                    <a key={text} href={href} className={`${cls} transition-colors hover:border-ink`}>
                      <Icon size={16} className="text-sea" />
                      {text}
                    </a>
                  ) : (
                    <span key={text} className={`${cls} text-ink/60`}>
                      <Icon size={16} className="text-sea" />
                      {text}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
