import { ArrowRight } from "lucide-react";
import { SOCIALS } from "./Icons";
import Logo from "./Logo";
import { PRODUCTS } from "./products";

const wrap = "mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16";
const head = "mb-5 text-xs font-medium uppercase tracking-[.16em] text-sea";
const link = "text-sm text-ink/60 transition-colors hover:text-ink";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-white text-ink">
      <div className={wrap}>
        <div className="grid gap-14 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Family-owned since 1974. Processors and exporters of pelagic and oak-smoked fish from Killybegs, Co Donegal.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Get a quote
              <ArrowRight size={16} />
            </a>
          </div>

          <nav aria-label="Footer">
            <p className={head}>Explore</p>
            <ul className="grid gap-3">
              {[
                ["Home", "#"],
                ["About", "#about"],
                ["Products", "#products"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className={link}>{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={head}>Products</p>
            <ul className="grid gap-3">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <a href="#products" className={link}>{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={head}>Contact</p>
            <address className="grid gap-3 not-italic">
              <a href="tel:+353749731146" className={link}>+353 74 973 1146</a>
              <a href="mailto:info@norfishltd.com" className={link}>info@norfishltd.com</a>
              <span className="text-sm text-ink/60">Killybegs, Co Donegal, Ireland</span>
            </address>
            <div className="mt-6 flex items-center gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-white [&>svg]:h-[18px] [&>svg]:w-[18px]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-ink/10 py-6 text-xs leading-relaxed text-ink/50 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
          <p className="max-w-2xl">
            Norfish took part in the 2023 Brexit Processing Capital Support Scheme, funded by the EU&rsquo;s Brexit
            Adjustment Reserve and supported by Bord Iascaigh Mhara, adding a new smoked production line and improving
            energy efficiency.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end">
            <span>&copy; Norfish Limited</span>
            <span>Origin Green Gold Member</span>
            <a href="#" className="transition-colors hover:text-ink">Back to top &uarr;</a>
          </div>
        </div>
      </div>

      {/* oversized wordmark, cropped at the bottom edge */}
      <p
        aria-hidden
        className="pointer-events-none -mb-[4.5vw] select-none text-center text-[25vw] font-semibold leading-[.85] tracking-tighter text-ink/[0.045]"
      >
        Norfish
      </p>
    </footer>
  );
}
