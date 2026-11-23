"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo, { LogoMark } from "./Logo";
import { PRODUCTS } from "./products";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4";

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const BADGE_TEXT = "PELAGIC & SMOKED FISH · KILLYBEGS · SINCE 1974 · ";

// Rotating text ring with the logo in the middle.
function Badge() {
  return (
    <div className="absolute bottom-36 right-12 hidden h-36 w-36 animate-[fadeSlideUp_0.9s_ease_1.2s_both] rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md md:block lg:right-16 lg:h-44 lg:w-44 short:h-28 short:w-28">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[orbit_30s_linear_infinite]" aria-hidden="true">
        <defs>
          <path id="badge-ring" d="M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1-160 0" />
        </defs>
        <text fill="currentColor" fontSize="13" fontWeight="500" letterSpacing="2">
          <textPath href="#badge-ring" textLength="498" lengthAdjust="spacing">
            {BADGE_TEXT}
          </textPath>
        </text>
      </svg>
      <LogoMark className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // the page scrolls below the hero, so lock it while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const close = () => setMobileMenuOpen(false);

  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-black font-geist">
      {/* video behind everything: no z-index. Slow zoom-out settles it on load. */}
      <video
        className="absolute inset-0 h-full w-full animate-[slowZoom_2.8s_cubic-bezier(.16,1,.3,1)_both] object-cover object-[70%_center]"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* darken the left and bottom so type stays readable over any frame */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1)_60%,transparent),linear-gradient(0deg,rgba(0,0,0,.7),transparent_45%)]" />

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <a href="#" aria-label="Norfish home" className="animate-[fadeSlideUp_0.8s_ease_0.1s_both] text-white">
          <Logo />
        </a>

        <div className="hidden md:absolute md:left-1/2 md:block md:-translate-x-1/2">
          <div className="flex animate-[fadeSlideUp_0.8s_ease_0.2s_both] items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-xl">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="hidden animate-[fadeSlideUp_0.8s_ease_0.3s_both] items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 md:inline-flex"
        >
          Get a quote
          <ArrowRight size={15} />
        </a>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white transition-transform active:scale-90 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu
            size={24}
            className={`absolute transition-all duration-300 ${mobileMenuOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
          />
          <X
            size={24}
            className={`absolute transition-all duration-300 ${mobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
          />
        </button>
      </nav>

      {/* Mobile menu (inert while closed so its links can't be tabbed to) */}
      <div
        inert={!mobileMenuOpen}
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen ? "h-screen opacity-100" : "pointer-events-none h-0 opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all delay-100 duration-500 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={close} className="text-3xl font-medium text-white/90 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={close}
            className="mt-6 inline-block self-start rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
          >
            Get a quote
          </a>
        </div>
      </div>

      {/* Hero content: heading top-left, copy + button + ticker bottom-left */}
      <div className="absolute inset-x-0 bottom-0 top-20 z-10 flex flex-col justify-between px-6 pb-10 pt-8 sm:pb-12 sm:pt-12 md:px-12 md:pt-14 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 animate-[fadeSlideUp_0.8s_ease_0.2s_both] text-xs text-white/90 sm:mb-6 sm:text-sm">
            Pelagic &amp; Smoked Fish &middot; Killybegs, Ireland
          </p>
          <h1 className="animate-[fadeSlideUp_0.8s_ease_0.4s_both] text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Irish seafood,
            <br />
            from Killybegs
            <br />
            to the world.
          </h1>
        </div>

        <div>
          <p className="short:hidden mb-5 max-w-sm animate-[fadeSlideUp_0.8s_ease_0.7s_both] text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Family-owned since 1974. We process and export pelagic and oak-smoked fish, landed by local RSW trawlers and
            held to the highest food safety standards.
          </p>
          <a
            href="#products"
            className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
          >
            Explore products
            <ArrowRight size={16} />
          </a>

          {/* product ticker; the list is doubled so translating -50% loops without a seam */}
          <div
            className="mt-8 animate-[fadeSlideUp_0.8s_ease_1.35s_both] overflow-hidden border-t border-white/20 pt-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] sm:mt-10 sm:pt-5"
            aria-hidden="true"
          >
            <div className="flex w-max animate-[marquee_45s_linear_infinite] text-sm text-white/65">
              {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
                <span key={i} className="flex items-center whitespace-nowrap">
                  {p.name}
                  <span className="mx-8 h-1 w-1 rounded-full bg-white/40" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Badge />
    </section>
  );
}
